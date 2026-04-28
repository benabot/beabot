import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const roots = ['assets', 'components', 'pages', 'layouts']
const extraFiles = ['app.vue', 'error.vue']

const globals = {
  colors: new Set([
    '$bleu1',
    '$bleu2',
    '$deg1',
    '$deg2',
    '$deg3',
    '$deg4',
    '$fondClair',
    '$fondGris',
    '$gris1',
    '$gris2',
    '$gris3',
    '$gris4',
    '$gris5',
    '$gris6',
    '$jaune',
    '$vert',
  ]),
  typo: new Set([
    '$base-unitless',
    '$black',
    '$bold',
    '$breakpoint-tablet',
    '$fluid-min',
    '$fluid-reduction',
    '$fluid-scaler',
    '$font-weight-light-raw',
    '$font-weight-normal-raw',
    '$font-weight-bold-raw',
    '$font-weight-black-raw',
    '$level-size',
    '$level-unitless',
    '$light',
    '$normal',
    '$type-base-size',
    '$type-base-size-raw',
    '$type-levels',
    '$type-ratios',
    '$type-size-ratio',
    '$type-styles',
  ]),
  spacing: new Set([
    '$max-width-rem',
    '$min-width-rem',
    '$slope',
    '$space-2xl',
    '$space-2xl-3xl',
    '$space-2xs',
    '$space-2xs-xs',
    '$space-3xl',
    '$space-3xs',
    '$space-3xs-2xs',
    '$space-base',
    '$space-l',
    '$space-l-xl',
    '$space-m',
    '$space-m-l',
    '$space-max-width',
    '$space-min-width',
    '$space-ratio',
    '$space-s',
    '$space-s-m',
    '$space-xl',
    '$space-xl-2xl',
    '$space-xs',
    '$space-xs-s',
    '$y-intercept',
  ]),
}

const importNeedles = {
  colors: 'assets/css/vars/_colors.scss',
  typo: 'assets/css/vars/_typo.scss',
  spacing: 'assets/css/vars/_spacing.scss',
  mixins: 'assets/css/mixins/_mixins.scss',
}

const importAliases = {
  colors: ['vars/_colors.scss', 'vars/colors.scss'],
  typo: ['vars/_typo.scss', 'vars/typo.scss'],
  spacing: ['vars/_spacing.scss', 'vars/spacing.scss'],
  mixins: ['mixins/_mixins.scss', 'mixins/mixins.scss'],
}

function walk(dir) {
  let files = []
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry)
    const stat = statSync(path)
    if (stat.isDirectory()) {
      if (['node_modules', '.nuxt', '.output', '.git'].includes(entry)) continue
      files = files.concat(walk(path))
    } else if (/\.(vue|scss)$/.test(entry)) {
      files.push(path)
    }
  }
  return files
}

function extractScss(path, source) {
  if (path.endsWith('.scss')) return source
  const blocks = [...source.matchAll(/<style\b[^>]*lang=["']scss["'][^>]*>([\s\S]*?)<\/style>/g)]
  return blocks.map((match) => match[1]).join('\n')
}

function unique(values) {
  return [...new Set(values)].sort()
}

function hasImport(source, family) {
  return importAliases[family].some((needle) => source.includes(needle))
}

function analyzeFile(path) {
  const rel = relative(process.cwd(), path)
  if (rel.startsWith('assets/css/vars/') || rel.startsWith('assets/css/mixins/')) {
    return null
  }

  const source = readFileSync(path, 'utf8')
  const scss = extractScss(rel, source)
  if (!scss.trim()) return null

  const used = {
    colors: [],
    typo: [],
    spacing: [],
    mixins: [],
  }

  for (const [family, variables] of Object.entries(globals)) {
    for (const variable of variables) {
      const escaped = variable.replace('$', '\\$')
      if (new RegExp(`${escaped}(?![a-zA-Z0-9_-])`).test(scss)) {
        used[family].push(variable)
      }
    }
  }

  const includeMatches = [...scss.matchAll(/@include\s+([a-zA-Z0-9_-]+)/g)]
  used.mixins = unique(includeMatches.map((match) => match[1]))

  const neededFamilies = Object.entries(used)
    .filter(([, values]) => values.length > 0)
    .map(([family]) => family)

  if (neededFamilies.length === 0) return null

  const imports = neededFamilies.filter((family) => hasImport(scss, family))
  const missing = neededFamilies.filter((family) => !hasImport(scss, family))

  return {
    rel,
    type: rel.startsWith('assets/')
      ? 'global-css'
      : rel.startsWith('layouts/')
        ? 'layout'
        : rel.startsWith('components/')
          ? 'component'
          : rel.startsWith('pages/')
            ? 'page'
            : 'root-vue',
    used,
    imports,
    missing,
  }
}

const files = [
  ...roots.flatMap((root) => walk(root)),
  ...extraFiles.filter((file) => {
    try {
      return statSync(file).isFile()
    } catch {
      return false
    }
  }),
]

const results = files.map(analyzeFile).filter(Boolean)

for (const result of results) {
  console.log(`Fichier : ${result.rel}`)
  console.log(`Type : ${result.type}`)
  console.log('Variables globales utilisées :')
  const variables = unique([
    ...result.used.colors,
    ...result.used.typo,
    ...result.used.spacing,
  ])
  if (variables.length === 0) {
    console.log('  - aucun')
  } else {
    for (const variable of variables) console.log(`  - ${variable}`)
  }
  console.log('Mixins utilisés :')
  if (result.used.mixins.length === 0) {
    console.log('  - aucun')
  } else {
    for (const mixin of result.used.mixins) console.log(`  - ${mixin}`)
  }
  console.log('Imports SCSS explicites actuels :')
  if (result.imports.length === 0) {
    console.log('  - aucun')
  } else {
    for (const family of result.imports) {
      console.log(`  - @use "~/${importNeedles[family]}" as *;`)
    }
  }
  console.log('Imports à ajouter :')
  if (result.missing.length === 0) {
    console.log('  - aucun')
  } else {
    for (const family of result.missing) {
      console.log(`  - @use "~/${importNeedles[family]}" as *;`)
    }
  }
  console.log('Dépendance implicite à additionalData :')
  console.log(`  - ${result.missing.length > 0 ? 'oui' : 'non'}`)
  console.log('Décision :')
  console.log(`  - ${result.missing.length > 0 ? 'à modifier' : 'aucun changement'}`)
  console.log('')
}

const implicit = results.filter((result) => result.missing.length > 0)
console.log(`TOTAL_FICHIERS_ANALYSES=${results.length}`)
console.log(`TOTAL_DEPENDANCES_IMPLICITES=${implicit.length}`)
