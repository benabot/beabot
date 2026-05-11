import assert from 'node:assert/strict'
import test from 'node:test'

import {
  absoluteUrl,
  canonicalUrl,
  normalizeInternalHref,
  withTrailingSlash,
} from '../utils/seo-url.ts'

test('absoluteUrl builds stable absolute URLs without double slashes', () => {
  assert.equal(absoluteUrl('https://beabot.fr/', ''), 'https://beabot.fr')
  assert.equal(
    absoluteUrl('https://beabot.fr/', '/eco-conception/'),
    'https://beabot.fr/eco-conception/'
  )
  assert.equal(
    absoluteUrl('https://beabot.fr', 'portfolio/'),
    'https://beabot.fr/portfolio/'
  )
  assert.equal(
    absoluteUrl('https://beabot.fr', 'https://example.com/page'),
    'https://example.com/page'
  )
})

test('canonicalUrl keeps the root and internal pages canonical', () => {
  assert.equal(canonicalUrl('https://beabot.fr/', '/'), 'https://beabot.fr/')
  assert.equal(
    canonicalUrl('https://beabot.fr/', 'eco-conception'),
    'https://beabot.fr/eco-conception/'
  )
  assert.equal(
    canonicalUrl('https://beabot.fr', '/portfolio/'),
    'https://beabot.fr/portfolio/'
  )
})

test('withTrailingSlash normalizes internal paths only once', () => {
  assert.equal(withTrailingSlash(''), '/')
  assert.equal(withTrailingSlash('/'), '/')
  assert.equal(withTrailingSlash('eco-conception'), '/eco-conception/')
  assert.equal(withTrailingSlash('/eco-conception'), '/eco-conception/')
  assert.equal(withTrailingSlash('/eco-conception/'), '/eco-conception/')
})

test('normalizeInternalHref normalizes internal links with suffixes', () => {
  assert.equal(normalizeInternalHref('/eco-conception'), '/eco-conception/')
  assert.equal(normalizeInternalHref('/eco-conception/'), '/eco-conception/')
  assert.equal(
    normalizeInternalHref('/eco-conception?tag=SEO'),
    '/eco-conception/?tag=SEO'
  )
  assert.equal(
    normalizeInternalHref('/eco-conception#intro'),
    '/eco-conception/#intro'
  )
  assert.equal(
    normalizeInternalHref('/eco-conception?tag=SEO#articles'),
    '/eco-conception/?tag=SEO#articles'
  )
})

test('normalizeInternalHref preserves static assets and feed files', () => {
  for (const href of [
    '/documents/cv.pdf',
    '/sitemap.xml',
    '/feed.json',
    '/site.webmanifest',
    '/robots.txt',
    '/img/article-cover.webp',
    '/img/article-cover.avif',
    '/img/photo.png',
    '/img/photo.jpg',
    '/favicon.ico',
    '/favicon.svg',
    '/_nuxt/entry.css',
    '/_nuxt/app.js',
    '/_nuxt/sqlite3.wasm',
    '/greenlight-free-v1.0.0.zip',
    '/feed.json?cache=1',
    '/robots.txt#top',
  ]) {
    assert.equal(normalizeInternalHref(href), href)
  }
})

test('normalizeInternalHref leaves external and special hrefs unchanged', () => {
  for (const href of [
    'https://example.com/eco-conception',
    'http://example.com/eco-conception',
    '//cdn.example.com/asset.js',
    'mailto:hello@beabot.fr',
    'tel:+33123456789',
    '#section',
    '?tag=SEO',
  ]) {
    assert.equal(normalizeInternalHref(href), href)
  }
})
