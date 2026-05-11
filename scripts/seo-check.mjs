#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'

const rootDir = process.cwd()
const siteUrl = (process.env.NUXT_PUBLIC_SITE_URL || '').replace(/\/+$/, '')
const sitemapPath = path.join(rootDir, '.output', 'public', 'sitemap.xml')
const robotsPath = path.join(rootDir, '.output', 'public', 'robots.txt')
const publicDir = path.join(rootDir, '.output', 'public')

const errors = []

const ensure = (condition, message) => {
  if (!condition) errors.push(message)
}

const htmlPathForRoute = (route) => {
  if (route === '/') return path.join(publicDir, 'index.html')
  return path.join(publicDir, route.replace(/^\/|\/$/g, ''), 'index.html')
}

const getAttr = (tag, attr) => {
  const match = tag?.match(new RegExp(`${attr}=(["'])(.*?)\\1`, 'i'))
  return match?.[2] || ''
}

const findTag = (html, tagName, attrName, attrValue) => {
  const tags = html.match(new RegExp(`<${tagName}\\b[^>]*>`, 'gi')) || []
  return tags.find((tag) => getAttr(tag, attrName) === attrValue) || ''
}

const getMetaContent = (html, keyAttr, keyValue) =>
  getAttr(findTag(html, 'meta', keyAttr, keyValue), 'content')

const getCanonical = (html) =>
  getAttr(findTag(html, 'link', 'rel', 'canonical'), 'href')

const getTitle = (html) => html.match(/<title>(.*?)<\/title>/i)?.[1]?.trim() || ''

const ensureUsefulTitle = (html, route) => {
  const title = getTitle(html)
  ensure(!!title, `Missing title in ${route}`)
  ensure(!/^BeAbot - /.test(title), `Legacy title prefix in ${route}: ${title}`)
  ensure(
    !/&amp;|&#x27;|&#39;/.test(title),
    `Encoded entity in title for ${route}: ${title}`
  )
  ensure(title.endsWith(' | BeAbot'), `Title must end with " | BeAbot" in ${route}: ${title}`)
}

const ensureUsefulMeta = (html, route, keyAttr, keyValue) => {
  const content = getMetaContent(html, keyAttr, keyValue)
  ensure(!!content, `Missing ${keyValue} in ${route}`)
  ensure(content !== '[object Object]', `Invalid object meta ${keyValue} in ${route}`)
  ensure(
    content.trim().length > 20,
    `Meta ${keyValue} is too short in ${route}: "${content}"`
  )
}

if (!siteUrl) {
  errors.push('NUXT_PUBLIC_SITE_URL is required for SEO checks.')
}

ensure(fs.existsSync(sitemapPath), `Missing sitemap: ${sitemapPath}`)
ensure(fs.existsSync(robotsPath), `Missing robots.txt: ${robotsPath}`)

let locs = []
if (fs.existsSync(sitemapPath)) {
  const sitemapXml = fs.readFileSync(sitemapPath, 'utf8')
  locs = Array.from(sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)).map((m) => m[1].trim())
  ensure(locs.length > 0, 'No <loc> entries found in sitemap.xml.')
  ensure(!sitemapXml.includes(`${siteUrl}/404/`), 'sitemap.xml must not include /404/.')
  ensure(!sitemapXml.includes(`${siteUrl}/404`), 'sitemap.xml must not include /404.')
}

if (siteUrl && locs.length) {
  for (const loc of locs) {
    if (loc.startsWith(siteUrl)) {
      const pathPart = loc.slice(siteUrl.length) || '/'
      if (pathPart !== '/' && !pathPart.endsWith('/')) {
        errors.push(`Sitemap loc missing trailing slash: ${loc}`)
      }
    } else if (loc.startsWith('/')) {
      if (loc !== '/' && !loc.endsWith('/')) {
        errors.push(`Sitemap loc missing trailing slash: ${loc}`)
      }
    }
  }
}

if (siteUrl && fs.existsSync(robotsPath)) {
  const robotsTxt = fs.readFileSync(robotsPath, 'utf8')
  const sitemapLine = robotsTxt
    .split('\n')
    .map((line) => line.trim())
    .find((line) => line.toLowerCase().startsWith('sitemap:'))

  const expected = `Sitemap: ${siteUrl}/sitemap.xml`
  ensure(sitemapLine === expected, `robots.txt sitemap mismatch: expected "${expected}"`)
}

if (process.env.SEO_CHECK_HTML === '1' && siteUrl && locs.length) {
  const checkedPaths = new Set([
    '/',
    '/apps/',
    '/contact/',
    '/eco-conception/',
    '/eco-conception/audit-eco-conception/',
    '/eco-conception/comment-reduire-le-poids-d-un-site-web/',
    '/greenlight/',
    '/mentions-legales/',
    '/portfolio/',
  ])

  for (const loc of locs) {
    if (loc.startsWith(siteUrl)) checkedPaths.add(loc.replace(siteUrl, '') || '/')
  }

  for (const pagePath of checkedPaths) {
    const normalized = pagePath === '/' ? '/' : pagePath
    const filePath = htmlPathForRoute(normalized)

    ensure(fs.existsSync(filePath), `Missing HTML file for ${normalized}: ${filePath}`)
    if (!fs.existsSync(filePath)) continue

    const html = fs.readFileSync(filePath, 'utf8')
    const canonical = getCanonical(html)
    const ogUrl = getMetaContent(html, 'property', 'og:url')

    ensure(!!canonical, `Missing canonical in ${normalized}`)
    ensure(!!ogUrl, `Missing og:url in ${normalized}`)
    ensure(!html.includes('[object Object]'), `HTML contains [object Object] in ${normalized}`)
    ensureUsefulTitle(html, normalized)
    ensureUsefulMeta(html, normalized, 'name', 'description')
    ensureUsefulMeta(html, normalized, 'property', 'og:description')

    if (canonical && ogUrl) {
      ensure(
        canonical === ogUrl,
        `canonical/og:url mismatch in ${normalized}: ${canonical} vs ${ogUrl}`
      )
      if (canonical.startsWith(siteUrl)) {
        const pathPart = canonical.slice(siteUrl.length) || '/'
        if (pathPart !== '/' && !pathPart.endsWith('/')) {
          errors.push(`Canonical missing trailing slash in ${normalized}: ${canonical}`)
        }
      }
    }
  }

  const rootHtml = fs.readFileSync(htmlPathForRoute('/'), 'utf8')
  ensure(
    getCanonical(rootHtml) === `${siteUrl}/`,
    `Homepage canonical must be ${siteUrl}/`
  )

  for (const route of ['/mentions-legales/', '/portfolio/']) {
    const html = fs.readFileSync(htmlPathForRoute(route), 'utf8')
    const twitterCard = getMetaContent(html, 'name', 'twitter:card')
    ensure(twitterCard === 'summary_large_image', `Missing twitter:card in ${route}`)
  }
}

if (errors.length) {
  console.error('ERROR: SEO checks failed:')
  errors.forEach((err) => console.error(`- ${err}`))
  process.exit(1)
}

console.log('OK SEO checks passed.')
