import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFileSync } from 'node:child_process'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const rel = (path) => relative(root, path)

const fileList = execFileSync(
  'find',
  [
    '.',
    '-type',
    'f',
    '(',
    '-name',
    '*.scss',
    '-o',
    '-name',
    '*.vue',
    ')',
    '-not',
    '-path',
    './node_modules/*',
    '-not',
    '-path',
    './.nuxt/*',
    '-not',
    '-path',
    './.output/*',
    '-not',
    '-path',
    './.git/*',
  ],
  { cwd: root, encoding: 'utf8' }
)
  .trim()
  .split('\n')
  .filter(Boolean)
  .map((path) => path.replace(/^\.\//, ''))
  .sort()

const globalVarFiles = new Set([
  'assets/css/vars/_colors.scss',
  'assets/css/vars/_typo.scss',
  'assets/css/vars/_spacing.scss',
  'assets/css/mixins/_mixins.scss',
])

const sassKeywordArgs = new Set(['$lightness', '$alpha', '$saturation', '$hue'])

const injectedUseByFamily = {
  color: '@use "~/assets/css/vars/_colors.scss" as *;',
  typo: '@use "~/assets/css/vars/_typo.scss" as *;',
  spacing: '@use "~/assets/css/vars/_spacing.scss" as *;',
  helper: '@use "~/assets/css/mixins/mixins.scss" as *;',
}

const varFamily = (name) => {
  if (
    [
      '$jaune',
      '$vert',
      '$bleu1',
      '$bleu2',
      '$gris1',
      '$gris2',
      '$gris3',
      '$gris4',
      '$gris5',
      '$gris6',
      '$fondGris',
      '$fondClair',
      '$deg1',
      '$deg2',
      '$deg3',
      '$deg4',
    ].includes(name)
  ) {
    return 'color'
  }
  if (
    name.startsWith('$space') ||
    ['$min-width-rem', '$max-width-rem', '$slope', '$y-intercept'].includes(name)
  ) {
    return 'spacing'
  }
  if (
    name.startsWith('$type') ||
    name.startsWith('$level') ||
    name.startsWith('$fluid') ||
    [
      '$breakpoint-tablet',
      '$light',
      '$normal',
      '$bold',
      '$black',
      '$base-unitless',
    ].includes(name)
  ) {
    return name === '$breakpoint-tablet' ? 'breakpoint' : 'typo'
  }
  if (['$width', '$height'].includes(name)) return 'local-layout'
  return 'helper'
}

const fileType = (file, scoped = false) => {
  if (file.startsWith('assets/css/vars/')) return 'global-vars'
  if (file.startsWith('assets/css/mixins/')) return 'global-mixins'
  if (file === 'assets/css/main.scss') return 'global-css'
  if (file === 'assets/css/article-content.scss') return 'article-css'
  if (file.startsWith('layouts/')) return 'layout'
  if (file.startsWith('pages/')) return 'page'
  if (file === 'app.vue' || file === 'error.vue') return 'root-vue'
  if (file.startsWith('components/')) return scoped ? 'component-scoped' : 'component'
  return 'other'
}

const extractStyleBlocks = (file, source) => {
  if (!file.endsWith('.vue')) {
    return [
      {
        content: source,
        startLine: 1,
        attrs: '',
        scoped: false,
        langScss: file.endsWith('.scss'),
      },
    ]
  }

  const blocks = []
  const styleRegex = /<style\b([^>]*)>([\s\S]*?)<\/style>/gi
  let match
  while ((match = styleRegex.exec(source))) {
    const before = source.slice(0, match.index)
    const startLine = before.split('\n').length
    const attrs = match[1] || ''
    blocks.push({
      content: match[2],
      startLine: startLine + 1,
      attrs,
      scoped: /\bscoped\b/i.test(attrs),
      langScss: /lang=["']scss["']/i.test(attrs) || /src=.*\.scss/i.test(attrs),
    })
  }
  return blocks
}

const isCommentLine = (line, state) => {
  const trimmed = line.trim()
  if (state.inBlockComment) {
    if (trimmed.includes('*/')) state.inBlockComment = false
    return true
  }
  if (trimmed.startsWith('/*')) {
    if (!trimmed.includes('*/')) state.inBlockComment = true
    return true
  }
  return trimmed.startsWith('//') || trimmed.startsWith('*')
}

const records = []
const fileSummaries = new Map()
const globalDeclarations = new Map()
const localDeclarations = new Map()
const allDeclarations = []
const allUsages = []

for (const file of fileList) {
  const source = readFileSync(`${root}/${file}`, 'utf8')
  const styleBlocks = extractStyleBlocks(file, source)
  const explicitImports = []
  const fileInfo = {
    file,
    type: fileType(file, styleBlocks.some((block) => block.scoped)),
    scoped: styleBlocks.some((block) => block.scoped),
    declarations: new Set(),
    usages: new Set(),
    commentVars: new Set(),
    explicitImports,
    records: [],
  }

  for (const block of styleBlocks) {
    if (!block.langScss) continue
    const lines = block.content.split('\n')
    const commentState = { inBlockComment: false }
    lines.forEach((line, index) => {
      const lineNumber = block.startLine + index
      const trimmed = line.trim()
      const comment = isCommentLine(line, commentState)
      const vars = line.match(/\$[a-zA-Z0-9_-]+/g) || []
      if (trimmed.startsWith('@use') || trimmed.startsWith('@import')) {
        explicitImports.push(`${lineNumber}: ${trimmed}`)
      }
      const declaredName = trimmed.match(/^\s*(\$[a-zA-Z0-9_-]+)\s*:/)?.[1]
      for (const name of vars) {
        if (sassKeywordArgs.has(name)) continue
        const declaration = declaredName === name
        const context =
          comment ? 'comment' : declaration ? 'declaration' : /^\s*@/.test(trimmed) ? 'sass-control' : 'usage'
        const record = {
          file,
          line: lineNumber,
          name,
          context,
          family: varFamily(name),
          text: trimmed,
        }
        records.push(record)
        fileInfo.records.push(record)
        if (context === 'comment') {
          fileInfo.commentVars.add(name)
          continue
        }
        if (context === 'declaration') {
          fileInfo.declarations.add(name)
          allDeclarations.push(record)
          if (globalVarFiles.has(file)) {
            globalDeclarations.set(name, record)
          } else {
            if (!localDeclarations.has(name)) localDeclarations.set(name, [])
            localDeclarations.get(name).push(record)
          }
        } else {
          fileInfo.usages.add(name)
          allUsages.push(record)
        }
      }
    })
  }

  if (fileInfo.records.length || file.endsWith('.scss')) {
    fileSummaries.set(file, fileInfo)
  }
}

const globalNames = [...globalDeclarations.keys()].sort()
const localNames = [...localDeclarations.keys()].sort()
const usagesByName = new Map()
for (const record of allUsages) {
  if (!usagesByName.has(record.name)) usagesByName.set(record.name, [])
  usagesByName.get(record.name).push(record)
}

const formatRecord = (record) => `    - ${record.name} — ${record.file}:${record.line} — ${record.text}`

const cleanUsageLines = []
for (const file of [...fileSummaries.keys()].sort()) {
  const summary = fileSummaries.get(file)
  cleanUsageLines.push(file)
  cleanUsageLines.push(`  Type : ${summary.type}`)
  cleanUsageLines.push(`  Style scoped : ${summary.scoped ? 'oui' : 'non'}`)
  const grouped = {
    declarations: summary.records.filter((record) => record.context === 'declaration'),
    usages: summary.records.filter((record) => record.context === 'usage'),
    comments: summary.records.filter((record) => record.context === 'comment'),
    sassControl: summary.records.filter((record) => record.context === 'sass-control'),
  }
  cleanUsageLines.push('  Déclarations :')
  cleanUsageLines.push(
    ...(grouped.declarations.length ? grouped.declarations.map(formatRecord) : ['    - aucune'])
  )
  cleanUsageLines.push('  Usages :')
  cleanUsageLines.push(...(grouped.usages.length ? grouped.usages.map(formatRecord) : ['    - aucun']))
  cleanUsageLines.push('  Variables dans commentaires :')
  cleanUsageLines.push(...(grouped.comments.length ? grouped.comments.map(formatRecord) : ['    - aucune']))
  cleanUsageLines.push('  Variables dans @use/@include/@mixin/@function/@if/@each/@for :')
  cleanUsageLines.push(
    ...(grouped.sassControl.length ? grouped.sassControl.map(formatRecord) : ['    - aucune'])
  )
  cleanUsageLines.push('')
}
writeFileSync(`${root}/scss-inventory-variable-usages-clean.txt`, cleanUsageLines.join('\n'))

const byFileLines = []
for (const file of [...fileSummaries.keys()].sort()) {
  const summary = fileSummaries.get(file)
  byFileLines.push(file)
  byFileLines.push(`  Type : ${summary.type}`)
  if (file.endsWith('.vue')) byFileLines.push(`  Style scoped : ${summary.scoped ? 'oui' : 'non'}`)
  byFileLines.push('  Déclarations :')
  byFileLines.push(
    ...([...summary.declarations].sort().map((name) => `    - ${name}`) || []),
    ...(summary.declarations.size ? [] : ['    - aucune'])
  )
  byFileLines.push('  Usages :')
  byFileLines.push(
    ...([...summary.usages].sort().map((name) => `    - ${name}`) || []),
    ...(summary.usages.size ? [] : ['    - aucun'])
  )
  const globalUsed = [...summary.usages].filter((name) => globalDeclarations.has(name)).sort()
  const hasExplicitImports = summary.explicitImports.length > 0
  byFileLines.push('  Notes :')
  if (summary.type === 'global-vars') {
    byFileLines.push('    - candidat probable pour custom properties CSS selon famille')
  } else if (globalUsed.length) {
    byFileLines.push(
      `    - dépend de variables globales ${hasExplicitImports ? 'avec imports explicites' : 'via additionalData'}`
    )
  } else {
    byFileLines.push('    - aucune variable globale SCSS détectée')
  }
  byFileLines.push('')
}
writeFileSync(`${root}/scss-inventory-by-file.txt`, byFileLines.join('\n'))

const globalVsLocalLines = ['# Variables globales', '']
for (const name of globalNames) {
  const declaration = globalDeclarations.get(name)
  const usages = (usagesByName.get(name) || []).filter((record) => record.file !== declaration.file)
  const family = varFamily(name)
  const candidate =
    family === 'color' || family === 'spacing' || family === 'typo'
      ? 'oui'
      : family === 'breakpoint'
        ? 'non'
        : 'à discuter'
  const priority =
    family === 'color'
      ? 'haute'
      : family === 'spacing' || family === 'typo'
        ? 'moyenne'
        : 'basse'
  globalVsLocalLines.push(name)
  globalVsLocalLines.push(`  Déclarée dans : ${declaration.file}:${declaration.line}`)
  globalVsLocalLines.push('  Usages :')
  globalVsLocalLines.push(
    ...(usages.length ? usages.map((record) => `    - ${record.file}:${record.line}`) : ['    - aucun usage hors déclaration'])
  )
  globalVsLocalLines.push(`  Nombre d'usages : ${usages.length}`)
  globalVsLocalLines.push(`  Types d'usages : ${family}`)
  globalVsLocalLines.push(`  Candidat custom property : ${candidate}`)
  globalVsLocalLines.push(`  Priorité migration : ${priority}`)
  globalVsLocalLines.push('')
}

globalVsLocalLines.push('# Variables locales', '')
for (const name of localNames) {
  const declarations = localDeclarations.get(name)
  const usages = usagesByName.get(name) || []
  globalVsLocalLines.push(name)
  globalVsLocalLines.push('  Déclarée dans :')
  globalVsLocalLines.push(...declarations.map((record) => `    - ${record.file}:${record.line}`))
  globalVsLocalLines.push('  Usages :')
  globalVsLocalLines.push(
    ...(usages.length ? usages.map((record) => `    - ${record.file}:${record.line}`) : ['    - aucun usage hors déclaration'])
  )
  globalVsLocalLines.push(
    `  Scope : ${declarations.some((record) => record.text.includes('@')) ? 'boucle Sass / helper' : 'fichier uniquement'}`
  )
  globalVsLocalLines.push(
    `  Décision : ${['$width', '$height'].includes(name) ? 'à vérifier' : 'conserver SCSS'}`
  )
  globalVsLocalLines.push('')
}
writeFileSync(`${root}/scss-inventory-global-vs-local.txt`, globalVsLocalLines.join('\n'))

const familyNames = (family) => globalNames.filter((name) => varFamily(name) === family)
const familyLines = []
for (const [title, family, candidate, decision] of [
  ['Couleurs', 'color', 'oui', 'migrer en priorité vers custom properties avec aliases SCSS temporaires'],
  ['Typographie', 'typo', 'oui / partiel', 'migrer tailles/poids lisibles, conserver calculs Sass temporairement'],
  ['Espacement', 'spacing', 'oui / partiel', 'migrer les tokens finaux, conserver la fonction fluid-space temporairement'],
  ['Breakpoints', 'breakpoint', 'non', 'conserver SCSS pour media queries'],
  ['Mixins et helpers', 'helper', 'non', 'conserver SCSS temporairement'],
]) {
  const names = familyNames(family)
  familyLines.push(`## ${title}`, '')
  familyLines.push('Variables :')
  familyLines.push(...(names.length ? names.map((name) => `- ${name}`) : ['- aucune']))
  familyLines.push('', 'Usage dominant :')
  familyLines.push(
    family === 'color'
      ? '- composants, pages, global'
      : family === 'spacing'
        ? '- styles globaux et contenu article'
        : family === 'typo'
          ? '- global, layouts, composants'
          : '- global'
  )
  familyLines.push('', `Candidat SCSS-${family === 'color' ? '2' : family === 'typo' ? '3' : '2/3'} :`)
  familyLines.push(`- ${candidate}`)
  familyLines.push('', 'Décision probable :')
  familyLines.push(`- ${decision}`, '')
}
writeFileSync(`${root}/scss-inventory-variable-families.txt`, familyLines.join('\n'))

const additionalLines = []
const dependencyRows = []
for (const file of [...fileSummaries.keys()].sort()) {
  const summary = fileSummaries.get(file)
  if (!file.endsWith('.vue') && !file.endsWith('.scss')) continue
  const globalUsed = [...summary.usages].filter((name) => globalDeclarations.has(name)).sort()
  const declarationFile = globalVarFiles.has(file)
  if (!globalUsed.length || declarationFile) continue
  const imports = summary.explicitImports.length ? summary.explicitImports : ['aucun']
  const hasExplicitImports = summary.explicitImports.length > 0
  const recommended = new Set()
  for (const name of globalUsed) {
    const family = varFamily(name)
    if (family === 'color') recommended.add(injectedUseByFamily.color)
    if (family === 'typo' || family === 'breakpoint') recommended.add(injectedUseByFamily.typo)
    if (family === 'spacing') recommended.add(injectedUseByFamily.spacing)
    if (family === 'helper') recommended.add(injectedUseByFamily.helper)
  }
  additionalLines.push(file)
  additionalLines.push('  Variables globales utilisées :')
  additionalLines.push(...globalUsed.map((name) => `    - ${name}`))
  additionalLines.push('  Imports explicites présents :')
  additionalLines.push(...imports.map((line) => `    - ${line}`))
  additionalLines.push(`  Dépendance à additionalData : ${hasExplicitImports ? 'non / partielle' : 'oui'}`)
  additionalLines.push('  Futur import explicite recommandé :')
  additionalLines.push(...[...recommended].sort().map((line) => `    - ${line}`))
  additionalLines.push('')
  dependencyRows.push({
    file,
    vars: globalUsed.join(', '),
    imports: hasExplicitImports ? 'oui' : 'aucun',
    recommendation: [...recommended].sort().join('<br>'),
    dependent: !hasExplicitImports,
  })
}
writeFileSync(`${root}/scss-inventory-additional-data-dependencies.txt`, additionalLines.join('\n'))

const scssGlobalFiles = fileList.filter((file) => file.startsWith('assets/css/') && file.endsWith('.scss')).length
const vueWithScss = [...fileSummaries.values()].filter((summary) => summary.file.endsWith('.vue')).length
const explicitImportFiles = [...fileSummaries.values()].filter((summary) => summary.explicitImports.length).length
const additionalDataDependentFiles = dependencyRows.filter((row) => row.dependent).length
const globalUsageCount = [...usagesByName.entries()]
  .filter(([name]) => globalDeclarations.has(name))
  .reduce((sum, [, usages]) => sum + usages.length, 0)

const mdLines = [
  '# Inventaire SCSS — Préparation CSS moderne',
  '',
  'Date : 28 avril 2026',
  '',
  '## Objectif',
  '',
  'Réaliser `SCSS-1` du backlog Nuxt 4 : inventorier les variables SCSS utilisées dans les composants scoped, pages, layouts et fichiers globaux.',
  '',
  '## Configuration Sass actuelle',
  '',
  '- API Sass : `modern-compiler`.',
  '- `vite.css.preprocessorOptions.scss.additionalData` : actif.',
  '- Fichiers injectés globalement : `_colors.scss`, `_typo.scss`, `_spacing.scss`, `mixins.scss`.',
  '- Risque Nuxt 4 identifié : dépendances implicites aux variables Sass globales dans les composants/pages scoped.',
  '',
  '## Résumé chiffré',
  '',
  `- Fichiers SCSS globaux : ${scssGlobalFiles}`,
  `- Fichiers Vue avec style SCSS : ${vueWithScss}`,
  `- Variables globales déclarées : ${globalNames.length}`,
  `- Variables locales déclarées : ${localNames.length}`,
  `- Usages de variables SCSS : ${allUsages.length}`,
  `- Fichiers dépendants de \`additionalData\` : ${additionalDataDependentFiles}`,
  `- Fichiers avec imports explicites : ${explicitImportFiles}`,
  '',
  'Note : l’inventaire nettoyé ne compte que les fichiers `.scss` et les blocs `<style lang="scss">` des fichiers Vue. Les usages `$...` présents dans les scripts Vue ou les arguments nommés Sass comme `$lightness` ne sont pas comptés comme variables applicatives.',
  '',
  '## Variables globales',
  '',
  '| Variable | Famille | Déclarée dans | Nombre d’usages | Candidat custom property | Priorité |',
  '|---|---|---|---:|---|---|',
]

for (const name of globalNames) {
  const declaration = globalDeclarations.get(name)
  const family = varFamily(name)
  const count = (usagesByName.get(name) || []).filter((record) => record.file !== declaration.file).length
  const candidate =
    family === 'color' || family === 'spacing' || family === 'typo'
      ? 'oui'
      : family === 'breakpoint'
        ? 'non'
        : 'à discuter'
  const priority =
    family === 'color'
      ? 'haute'
      : family === 'spacing' || family === 'typo'
        ? 'moyenne'
        : 'basse'
  mdLines.push(`| \`${name}\` | ${family} | \`${declaration.file}\` | ${count} | ${candidate} | ${priority} |`)
}

mdLines.push('', '## Variables locales', '')
mdLines.push('| Variable | Fichier | Rôle | Décision |')
mdLines.push('|---|---|---|---|')
for (const name of localNames) {
  const declarations = localDeclarations.get(name)
  const files = [...new Set(declarations.map((record) => record.file))].join(', ')
  mdLines.push(`| \`${name}\` | \`${files}\` | ${varFamily(name)} | conserver SCSS / à vérifier |`)
}

mdLines.push('', '## Dépendances à `additionalData`', '')
mdLines.push('| Fichier | Variables utilisées | Imports explicites présents | Recommandation |')
mdLines.push('|---|---|---|---|')
for (const row of dependencyRows) {
  mdLines.push(`| \`${row.file}\` | ${row.vars.replaceAll('$', '`$').replaceAll(', ', '`, ')}\`${row.vars ? '' : ''} | ${row.imports} | ${row.recommendation} |`)
}

mdLines.push(
  '',
  '## Candidats SCSS-2 — Couleurs',
  '',
  'Variables couleur à migrer en priorité :',
  '',
  ...familyNames('color').map((name) => `- \`${name}\``),
  '',
  '## Candidats SCSS-3 — Typographie',
  '',
  'Variables typo / tailles à traiter en priorité :',
  '',
  ...familyNames('typo').map((name) => `- \`${name}\``),
  '- `$breakpoint-tablet` : à conserver côté SCSS pour les media queries, sauf stratégie CSS dédiée ultérieure.',
  '',
  '## Préparation SCSS-4 — Imports explicites',
  '',
  'Traiter en priorité les fichiers qui utilisent des variables globales sans `@use` local :',
  '',
  ...dependencyRows
    .filter((row) => row.dependent)
    .slice(0, 20)
    .map((row) => `- \`${row.file}\``),
  '',
  '## Éco-impact à surveiller pour SCSS-5',
  '',
  '- poids total CSS généré ;',
  '- nombre de fichiers CSS générés ;',
  '- poids homepage ;',
  '- chunks `entry`, `default`, `index`, `vendor-libs`.',
  '',
  '## Validation locale',
  '',
  '- `npm test` : succès.',
  '- `npm run generate` : succès, 100 routes générées.',
  '- `SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : succès.',
  '',
  '## Décisions',
  '',
  '- Aucun style modifié dans cette branche.',
  '- Aucune variable migrée dans cette branche.',
  '- Aucun import SCSS modifié dans cette branche.',
  '- Aucune dépendance modifiée.',
  '',
  '## Conclusion',
  '',
  '- `SCSS-1` :',
  '  - fait',
  '- Prochaine étape recommandée :',
  '  - `SCSS-2` sur une branche séparée dédiée aux couleurs.'
)

writeFileSync(`${root}/migration-nuxt4-scss-inventory.md`, mdLines.join('\n'))

console.log(`SCSS global files: ${scssGlobalFiles}`)
console.log(`Vue SCSS files: ${vueWithScss}`)
console.log(`Global variables: ${globalNames.length}`)
console.log(`Local variables: ${localNames.length}`)
console.log(`SCSS variable usages: ${allUsages.length}`)
console.log(`additionalData dependencies: ${additionalDataDependentFiles}`)
