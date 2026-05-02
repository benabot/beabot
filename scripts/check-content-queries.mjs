#!/usr/bin/env node

import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

const rootDir = process.cwd()
const publicDir = path.join(rootDir, '.output', 'public')
const siteUrl = 'https://beabot.fr'

const criticalFiles = [
  {
    file: 'pages/index.vue',
    patterns: [/queryContent\('articles'\)/, /_path/, /tag/],
  },
  {
    file: 'pages/eco-conception/index.vue',
    patterns: [/queryContent\('articles'\)/, /queryContent\('articles', 'faq-eco-conception'\)/, /_path/, /tag/],
  },
  {
    file: 'pages/eco-conception/[slug].vue',
    patterns: [/queryContent\('articles', route\.params\.slug\)/, /findSurround/, /_path/, /tag/],
  },
  {
    file: 'components/HomeEcoArticles.vue',
    patterns: [/queryContent\('articles'\)/, /_path/, /tag/],
  },
  {
    file: 'components/AppSearchInput.vue',
    patterns: [/queryContent\('articles'\)/, /\.where\(/, /article\.slug/],
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
]

function readProjectFile(file) {
  const filePath = path.join(rootDir, file)
  assert.ok(fs.existsSync(filePath), `Missing critical file: ${file}`)
  return fs.readFileSync(filePath, 'utf8')
}

function checkStaticContentV2Contracts() {
  for (const { file, patterns, forbiddenPatterns = [] } of criticalFiles) {
    const source = readProjectFile(file)

    for (const pattern of patterns) {
      assert.match(source, pattern, `${file} should still match ${pattern}`)
    }

    for (const pattern of forbiddenPatterns) {
      assert.doesNotMatch(source, pattern, `${file} should not match ${pattern}`)
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

checkStaticContentV2Contracts()
checkGeneratedContentOutput()

console.log('OK Content migration guard checks passed.')
