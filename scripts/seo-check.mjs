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
const staticUrlPattern =
  /\.(?:avif|css|gif|ico|jpe?g|js|json|map|mjs|pdf|png|svg|txt|wasm|webmanifest|webp|xml|zip)(?:[?#]|$)/i

const jsonLdPattern =
  /<script\b(?=[^>]*\btype=(["'])application\/ld\+json\1)[^>]*>([\s\S]*?)<\/script>/gi

const flattenStructuredDataNodes = (data) => {
  if (Array.isArray(data)) return data.flatMap((item) => flattenStructuredDataNodes(item))
  if (!data || typeof data !== 'object') return []

  const nodes = [data]
  if (Array.isArray(data['@graph'])) {
    nodes.push(...data['@graph'].flatMap((item) => flattenStructuredDataNodes(item)))
  }

  return nodes
}

const nodeHasType = (node, type) => {
  const nodeType = node?.['@type']
  return Array.isArray(nodeType) ? nodeType.includes(type) : nodeType === type
}

const hasRootTypeOrGraph = (data) => {
  if (Array.isArray(data)) return data.every((item) => hasRootTypeOrGraph(item))
  return !!(data && typeof data === 'object' && (data['@type'] || data['@graph']))
}

const getStructuredDataNodes = (html, route) => {
  const nodes = []

  for (const match of html.matchAll(jsonLdPattern)) {
    const tag = match[0]
    const content = match[2].trim()

    ensure(
      !/\bchildren=(["'])[\s\S]*?\1/i.test(tag),
      `JSON-LD must be script content, not children attr in ${route}`
    )
    ensure(!!content, `Empty JSON-LD script in ${route}`)
    if (!content) continue

    try {
      const data = JSON.parse(content)
      ensure(hasRootTypeOrGraph(data), `JSON-LD root missing @type or @graph in ${route}`)
      nodes.push(...flattenStructuredDataNodes(data))
    } catch (error) {
      ensure(false, `Invalid JSON-LD in ${route}: ${error.message}`)
    }
  }

  return nodes
}

const isStaticOrAssetUrl = (value) =>
  value.startsWith('/_nuxt/') || staticUrlPattern.test(value)

const ensureInternalUrlsUseTrailingSlash = (html, route) => {
  const matches = html.matchAll(/\b(?:action|href|src)=(["'])(.*?)\1/gi)

  for (const match of matches) {
    const value = match[2]

    if (
      !value ||
      value.startsWith('#') ||
      value.startsWith('?') ||
      value.startsWith('//') ||
      (/^[a-z][a-z0-9+.-]*:/i.test(value) && !value.startsWith(siteUrl))
    ) {
      continue
    }

    if (isStaticOrAssetUrl(value)) continue

    if (value.startsWith(siteUrl)) {
      const suffix = value.slice(siteUrl.length)
      const pathPart = suffix.match(/^([^?#]*)/)?.[1] || ''

      ensure(value !== siteUrl, `Root URL must keep trailing slash in ${route}: ${value}`)
      ensure(
        pathPart === '' || pathPart === '/' || pathPart.endsWith('/'),
        `Internal absolute URL missing trailing slash in ${route}: ${value}`
      )
      continue
    }

    if (value.startsWith('/')) {
      const pathPart = value.match(/^([^?#]*)/)?.[1] || ''

      ensure(
        pathPart === '/' || pathPart.endsWith('/'),
        `Internal URL missing trailing slash in ${route}: ${value}`
      )
    }
  }
}

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
    ensureInternalUrlsUseTrailingSlash(html, normalized)
    const structuredDataNodes = getStructuredDataNodes(html, normalized)

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

    if (normalized === '/') {
      ensure(
        structuredDataNodes.some(
          (node) => nodeHasType(node, 'Person') || nodeHasType(node, 'WebSite')
        ),
        'Homepage must expose parsable Person or WebSite JSON-LD'
      )
    }

    if (normalized === '/contact/') {
      ensure(
        structuredDataNodes.some((node) => nodeHasType(node, 'ContactPage')),
        'Contact page must expose parsable ContactPage JSON-LD'
      )
    }

    if (
      normalized.startsWith('/eco-conception/') &&
      normalized !== '/eco-conception/' &&
      !structuredDataNodes.some((node) => nodeHasType(node, 'FAQPage'))
    ) {
      const articleNode = structuredDataNodes.find(
        (node) => nodeHasType(node, 'Article') || nodeHasType(node, 'BlogPosting')
      )

      ensure(!!articleNode, `Article JSON-LD missing Article or BlogPosting in ${normalized}`)
      if (articleNode) {
        ensure(!!articleNode.author, `Article JSON-LD missing author in ${normalized}`)
        ensure(
          !!articleNode.datePublished,
          `Article JSON-LD missing datePublished in ${normalized}`
        )
        ensure(articleNode.url === canonical, `Article JSON-LD url mismatch in ${normalized}`)
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
