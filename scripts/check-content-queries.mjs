#!/usr/bin/env node

import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

const rootDir = process.cwd()
const publicDir = path.join(rootDir, '.output', 'public')
const siteUrl = 'https://beabot.fr'

const migratedContentFiles = [
  {
    file: 'pages/index.vue',
    patterns: [/queryCollection\('articles'\)/, /\.select\(/, /\.order\('date', 'DESC'\)/, /article\.path/, /tag/],
    forbiddenPatterns: [/queryContent\(/, /findSurround/, /_path/, /\.only\(/],
  },
  {
    file: 'pages/eco-conception/index.vue',
    patterns: [/queryCollection\('articles'\)/, /\.path\('\/eco-conception\/faq-eco-conception'\)/, /article\.path/, /tag/],
    forbiddenPatterns: [/queryContent\(/, /findSurround/, /_path/, /\.only\(/],
  },
  {
    file: 'pages/eco-conception/[slug].vue',
    patterns: [/queryCollection\('articles'\)/, /queryCollectionItemSurroundings\('articles'/, /article\.value\?\.path/, /tag/],
    forbiddenPatterns: [/queryContent\(/, /findSurround/, /_path/, /\.only\(/],
  },
  {
    file: 'components/HomeEcoArticles.vue',
    patterns: [/queryCollection\('articles'\)/, /\.select\(/, /\.order\('date', 'DESC'\)/, /article\.path/, /tag/],
    forbiddenPatterns: [/queryContent\(/, /findSurround/, /_path/, /\.only\(/],
  },
  {
    file: 'components/ArticleNavigation.vue',
    patterns: [/prev\.path/, /next\.path/],
    forbiddenPatterns: [/_path/],
  },
  {
    file: 'server/routes/rss.xml.ts',
    patterns: [
      /@nuxt\/content\/server/,
      /queryCollection\(event, 'articles'\)/,
      /\.order\('date', 'DESC'\)/,
      /article\.path/,
      /article\.tag/,
    ],
    forbiddenPatterns: [/serverQueryContent/, /#content\/server/, /_path/],
  },
  {
    file: 'server/routes/feed.json.ts',
    patterns: [
      /@nuxt\/content\/server/,
      /queryCollection\(event, 'articles'\)/,
      /\.order\('date', 'DESC'\)/,
      /article\.path/,
      /article\.tag/,
    ],
    forbiddenPatterns: [/serverQueryContent/, /#content\/server/, /_path/],
  },
  {
    file: 'nuxt.config.ts',
    patterns: [/getArticleSitemapRoutes/, /urls: getArticleSitemapRoutes/],
    forbiddenPatterns: [/serverQueryContent/, /#content\/server/, /_path/],
  },
  {
    file: 'content.config.ts',
    patterns: [/schema: z\.object/, /date: z\.coerce\.date\(\)\.optional\(\)/, /tag: z\.array\(z\.string\(\)\)\.default\(\[\]\)/],
  },
]

const documentedV2Exceptions = [
  {
    file: 'components/AppSearchInput.vue',
    reason: 'CONTENT-6 recherche Content v3 reportee dans un lot dedie',
    patterns: [/queryContent\('articles'\)/, /\.where\(/, /article\.slug/],
  },
]

function readProjectFile(file) {
  const filePath = path.join(rootDir, file)
  assert.ok(fs.existsSync(filePath), `Missing critical file: ${file}`)
  return fs.readFileSync(filePath, 'utf8')
}

function checkMigratedContentContracts() {
  for (const { file, patterns, forbiddenPatterns = [] } of migratedContentFiles) {
    const source = readProjectFile(file)

    for (const pattern of patterns) {
      assert.match(source, pattern, `${file} should match migrated Content contract ${pattern}`)
    }

    for (const pattern of forbiddenPatterns) {
      assert.doesNotMatch(source, pattern, `${file} should not match ${pattern}`)
    }
  }

  for (const { file, patterns } of documentedV2Exceptions) {
    const source = readProjectFile(file)
    for (const pattern of patterns) {
      assert.match(source, pattern, `${file} should keep documented temporary exception ${pattern}`)
    }
  }
}

function walkFiles(entry) {
  const entryPath = path.join(rootDir, entry)
  if (!fs.existsSync(entryPath)) return []

  const stat = fs.statSync(entryPath)
  if (stat.isFile()) return [entryPath]

  return fs.readdirSync(entryPath).flatMap((child) => {
    const relative = path.join(entry, child)
    return walkFiles(relative)
  })
}

function checkNoUnexpectedContentV2Usage() {
  const exceptionFiles = new Set(documentedV2Exceptions.map(({ file }) => file))
  const scanEntries = ['pages', 'components', 'layouts', 'server', 'nuxt.config.ts', 'app.vue', 'error.vue']
  const forbiddenPatterns = [/queryContent\(/, /serverQueryContent/, /findSurround\(/, /searchContent\(/, /\b_path\b/]

  for (const absolutePath of scanEntries.flatMap(walkFiles)) {
    const relativePath = path.relative(rootDir, absolutePath)
    if (exceptionFiles.has(relativePath)) continue
    if (!/\.(vue|ts|js|mjs)$/.test(relativePath)) continue

    const source = fs.readFileSync(absolutePath, 'utf8')
    for (const pattern of forbiddenPatterns) {
      assert.doesNotMatch(source, pattern, `${relativePath} should not contain Content v2 usage ${pattern}`)
    }
  }
}

function htmlPathForRoute(route) {
  if (route === '/') return path.join(publicDir, 'index.html')
  return path.join(publicDir, route.replace(/^\/|\/$/g, ''), 'index.html')
}

function getAttr(tag, attr) {
  return tag.match(new RegExp(`${attr}=["']([^"']*)["']`, 'i'))?.[1] || ''
}

function findTag(html, tagName, attrName, attrValue) {
  const tags = html.match(new RegExp(`<${tagName}\\b[^>]*>`, 'gi')) || []
  return tags.find((tag) => getAttr(tag, attrName) === attrValue) || ''
}

function getCanonical(html) {
  return getAttr(findTag(html, 'link', 'rel', 'canonical'), 'href')
}

function checkGeneratedContentOutput() {
  const indexPath = path.join(publicDir, 'index.html')
  if (!fs.existsSync(indexPath)) {
    console.log('Static output missing; skipping generated Content checks.')
    return
  }

  const archivePath = htmlPathForRoute('/eco-conception/')
  const articlePath = htmlPathForRoute('/eco-conception/l-eco-conception-web/')

  assert.ok(fs.existsSync(archivePath), `Missing generated archive: ${archivePath}`)
  assert.ok(fs.existsSync(articlePath), `Missing generated article: ${articlePath}`)

  const archiveHtml = fs.readFileSync(archivePath, 'utf8')
  const articleHtml = fs.readFileSync(articlePath, 'utf8')

  const articleLinks = Array.from(
    archiveHtml.matchAll(/href=["'](\/eco-conception\/[^"']+\/)["']/g),
    (match) => match[1]
  )

  assert.ok(articleLinks.length > 0, 'Archive should link to generated articles')
  assert.match(archiveHtml, /eco-filter|eco-tag|\?tag=/)
  assert.doesNotMatch(archiveHtml, /\[object Object\]/)

  assert.equal(
    getCanonical(articleHtml),
    `${siteUrl}/eco-conception/l-eco-conception-web/`
  )
  assert.match(articleHtml, /<h1\b[^>]*>[\s\S]*?<\/h1>/i)
  assert.match(articleHtml, /<article\b/i)
  assert.match(articleHtml, /href=["']\/eco-conception\/\?tag=[^"']+#eco-archive["']/)
  assert.match(articleHtml, /À voir également|prevnext|boite-prev/)
  assert.doesNotMatch(articleHtml, /\[object Object\]/)
}

checkMigratedContentContracts()
checkNoUnexpectedContentV2Usage()
checkGeneratedContentOutput()

console.log('OK Content migration guard checks passed.')
