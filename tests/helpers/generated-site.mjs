import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

export const siteUrl = 'https://beabot.fr'
export const publicDir = join(process.cwd(), '.output', 'public')

export function ensureGeneratedSite(t) {
  if (!existsSync(join(publicDir, 'index.html'))) {
    t.skip('Static output is missing. Run npm run generate before this test.')
  }
}

export function htmlPathForRoute(route) {
  if (route === '/') return join(publicDir, 'index.html')
  return join(publicDir, route.replace(/^\/|\/$/g, ''), 'index.html')
}

export function readGeneratedHtml(t, route) {
  ensureGeneratedSite(t)
  const filePath = htmlPathForRoute(route)
  assert.ok(existsSync(filePath), `Missing generated HTML for ${route}: ${filePath}`)
  return readFileSync(filePath, 'utf8')
}

export function readGeneratedText(t, filename) {
  ensureGeneratedSite(t)
  const filePath = join(publicDir, filename)
  assert.ok(existsSync(filePath), `Missing generated file: ${filePath}`)
  return readFileSync(filePath, 'utf8')
}

export function getAttr(tag, attr) {
  const match = tag.match(new RegExp(`${attr}=["']([^"']*)["']`, 'i'))
  return match?.[1] || ''
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
  assert.ok(description.length > 20, 'Expected a useful meta description')
  assert.equal(canonical, expectedUrl)
  assert.equal(ogUrl, expectedUrl)
  assertCleanHtml(html)
}
