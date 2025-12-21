#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'

const rootDir = process.cwd()
const siteUrl = (process.env.NUXT_PUBLIC_SITE_URL || '').replace(/\/+$/, '')
const sitemapPath = path.join(rootDir, '.output', 'public', 'sitemap.xml')
const robotsPath = path.join(rootDir, '.output', 'public', 'robots.txt')

const errors = []

const ensure = (condition, message) => {
  if (!condition) errors.push(message)
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
  const defaultPaths = ['/', '/eco-conception/', '/portfolio/', '/mentions-legales/']
  const articleLoc = locs.find(
    (loc) =>
      loc.startsWith(`${siteUrl}/eco-conception/`) &&
      loc !== `${siteUrl}/eco-conception/`
  )

  if (articleLoc) {
    defaultPaths.push(articleLoc.replace(siteUrl, ''))
  }

  for (const pagePath of defaultPaths) {
    const normalized = pagePath === '/' ? '/' : pagePath
    const filePath =
      normalized === '/'
        ? path.join(rootDir, '.output', 'public', 'index.html')
        : path.join(rootDir, '.output', 'public', normalized, 'index.html')

    ensure(fs.existsSync(filePath), `Missing HTML file for ${normalized}: ${filePath}`)
    if (!fs.existsSync(filePath)) continue

    const html = fs.readFileSync(filePath, 'utf8')
    const canonicalMatch = html.match(
      /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i
    )
    const ogMatch = html.match(
      /<meta[^>]+property=["']og:url["'][^>]+content=["']([^"']+)["']/i
    )

    const canonical = canonicalMatch?.[1]
    const ogUrl = ogMatch?.[1]

    ensure(!!canonical, `Missing canonical in ${normalized}`)
    ensure(!!ogUrl, `Missing og:url in ${normalized}`)

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
}

if (errors.length) {
  console.error('ERROR: SEO checks failed:')
  errors.forEach((err) => console.error(`- ${err}`))
  process.exit(1)
}

console.log('OK SEO checks passed.')
