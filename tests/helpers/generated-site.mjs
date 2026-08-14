import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

export const siteUrl = 'https://beabot.fr'
export const publicDir = join(process.cwd(), '.output', 'public')
const staticFilePattern =
  /\.(?:avif|css|gif|ico|jpe?g|js|json|map|mjs|pdf|png|svg|txt|wasm|webmanifest|webp|xml|zip)(?:[?#]|$)/i

export function ensureGeneratedSite(t) {
  if (!existsSync(join(publicDir, 'index.html'))) {
    t.skip('Static output is missing. Run npm run generate before this test.')
  }
}

export function htmlPathForRoute(route) {
  if (route === '/') return join(publicDir, 'index.html')
  return join(publicDir, route.replace(/^\/|\/$/g, ''), 'index.html')
}

export function readGeneratedHtml(t, route, options = {}) {
  ensureGeneratedSite(t)
  const filePath = htmlPathForRoute(route)
  if (!existsSync(filePath)) {
    if (options.required) {
      assert.fail(`Missing generated HTML for ${route}: ${filePath}`)
    }
    t.skip(`Missing generated HTML for ${route}: ${filePath}`)
    return ''
  }
  return readFileSync(filePath, 'utf8')
}

export function readGeneratedText(t, filename) {
  ensureGeneratedSite(t)
  const filePath = join(publicDir, filename)
  assert.ok(existsSync(filePath), `Missing generated file: ${filePath}`)
  return readFileSync(filePath, 'utf8')
}

export function getAttr(tag, attr) {
  const match = tag.match(new RegExp(`${attr}=(["'])(.*?)\\1`, 'i'))
  return match?.[2] || ''
}

export function findTag(html, tagName, attrName, attrValue) {
  const tags = html.match(new RegExp(`<${tagName}\\b[^>]*>`, 'gi')) || []
  return tags.find((tag) => getAttr(tag, attrName) === attrValue) || ''
}

export function getTitle(html) {
  return html.match(/<title>(.*?)<\/title>/i)?.[1]?.trim() || ''
}

export function getMetaContent(html, keyAttr, keyValue) {
  const tag = findTag(html, 'meta', keyAttr, keyValue)
  return getAttr(tag, 'content')
}

export function getCanonical(html) {
  const tag = findTag(html, 'link', 'rel', 'canonical')
  return getAttr(tag, 'href')
}

export function extractJsonLdScripts(html) {
  const scripts = []
  const pattern =
    /<script\b(?=[^>]*\btype=(["'])application\/ld\+json\1)[^>]*>([\s\S]*?)<\/script>/gi

  for (const match of html.matchAll(pattern)) {
    const content = match[2].trim()
    assert.ok(content, 'Expected a non-empty application/ld+json script')
    assert.doesNotMatch(
      match[0],
      /\bchildren=(["'])[\s\S]*?\1/i,
      'JSON-LD must be rendered as script content, not a children attribute',
    )
    assert.doesNotThrow(
      () => scripts.push(JSON.parse(content)),
      `Invalid JSON-LD script content: ${content.slice(0, 120)}`,
    )
  }

  return scripts
}

export function flattenStructuredDataNodes(data) {
  if (Array.isArray(data)) {
    return data.flatMap((item) => flattenStructuredDataNodes(item))
  }

  if (!data || typeof data !== 'object') return []

  const nodes = [data]
  if (Array.isArray(data['@graph'])) {
    nodes.push(...data['@graph'].flatMap((item) => flattenStructuredDataNodes(item)))
  }

  return nodes
}

export function getStructuredDataNodes(html) {
  return extractJsonLdScripts(html).flatMap((script) =>
    flattenStructuredDataNodes(script),
  )
}

export function nodeHasType(node, type) {
  const nodeType = node?.['@type']
  return Array.isArray(nodeType) ? nodeType.includes(type) : nodeType === type
}

export function getHtmlUrlAttributes(html) {
  return Array.from(
    html.matchAll(/\b(?:action|href|src)=(["'])(.*?)\1/gi),
    (match) => match[2],
  )
}

export function isStaticOrAssetUrl(value) {
  return value.startsWith('/_nuxt/') || staticFilePattern.test(value)
}

export function assertInternalUrlsUseTrailingSlash(html, route) {
  for (const value of getHtmlUrlAttributes(html)) {
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

      assert.notEqual(value, siteUrl, `Root URL should keep trailing slash in ${route}`)
      assert.ok(
        pathPart === '' || pathPart === '/' || pathPart.endsWith('/'),
        `Internal absolute URL should keep trailing slash in ${route}: ${value}`,
      )
      continue
    }

    if (value.startsWith('/')) {
      const pathPart = value.match(/^([^?#]*)/)?.[1] || ''

      assert.ok(
        pathPart === '/' || pathPart.endsWith('/'),
        `Internal URL should keep trailing slash in ${route}: ${value}`,
      )
    }
  }
}

export function assertCleanHtml(html) {
  assert.doesNotMatch(html, /\[object Object\]/)
  assert.doesNotMatch(html, /<meta[^>]+name=["']description["'][^>]+content=["']\s*L\s*["']/i)
}

export function assertSeoTags(html, expectedUrl) {
  const title = getTitle(html)
  const description = getMetaContent(html, 'name', 'description')
  const canonical = getCanonical(html)
  const ogUrl = getMetaContent(html, 'property', 'og:url')

  assert.ok(title.length > 0, 'Expected a non-empty <title>')
  assert.match(title, / \| BeAbot$/)
  assert.doesNotMatch(title, /^BeAbot - /)
  assert.doesNotMatch(title, /&amp;|&#x27;|&#39;/)
  assert.ok(description.length > 20, 'Expected a useful meta description')
  assert.equal(canonical, expectedUrl)
  assert.equal(ogUrl, expectedUrl)
  assertCleanHtml(html)
}
