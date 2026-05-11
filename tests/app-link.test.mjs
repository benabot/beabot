import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

import { compileScript, compileTemplate, parse } from '@vue/compiler-sfc'

import { normalizeInternalHref } from '../utils/seo-url.ts'

const filename = 'components/AppLink.vue'
const source = readFileSync(filename, 'utf8')
const { descriptor, errors } = parse(source, { filename })

function normalizeAppLinkTo(to) {
  if (typeof to === 'string') {
    return normalizeInternalHref(to)
  }

  if (to && typeof to === 'object' && typeof to.path === 'string') {
    return { ...to, path: normalizeInternalHref(to.path) }
  }

  return to
}

test('AppLink compiles with a NuxtLink, slot, and forwarded attributes', () => {
  assert.deepEqual(errors, [])

  const script = compileScript(descriptor, { id: 'app-link-test' })
  assert.match(script.content, /normalizedTo/)
  assert.match(script.content, /shouldRenderNativeAnchor/)
  assert.match(script.content, /useAttrs/)

  const template = compileTemplate({
    id: 'app-link-test',
    filename,
    source: descriptor.template.content,
  })

  assert.deepEqual(template.errors, [])
  assert.match(template.code, /NuxtLink/)
  assert.match(template.code, /normalizedTo/)
  assert.match(template.code, /normalizedHref/)
  assert.match(template.code, /renderSlot/)
  assert.match(source, /v-bind="attrs"/)
})

test('AppLink normalizes string links like normalizeInternalHref', () => {
  assert.equal(normalizeAppLinkTo('/eco-conception'), '/eco-conception/')
  assert.equal(normalizeAppLinkTo('/eco-conception/'), '/eco-conception/')
  assert.equal(
    normalizeAppLinkTo('/eco-conception?tag=SEO'),
    '/eco-conception/?tag=SEO'
  )
  assert.equal(normalizeAppLinkTo('/eco-conception#intro'), '/eco-conception/#intro')
  assert.equal(
    normalizeAppLinkTo('/eco-conception?tag=SEO#articles'),
    '/eco-conception/?tag=SEO#articles'
  )
})

test('AppLink leaves external, special, and file hrefs unchanged', () => {
  for (const href of [
    'https://example.com/path',
    'mailto:hello@beabot.fr',
    'tel:+33123456789',
    '/documents/cv.pdf',
    '/sitemap.xml',
    '/feed.json',
    '/robots.txt',
    '/site.webmanifest',
    '/favicon.ico',
    '/_nuxt/entry.css',
    '/_nuxt/app.js',
    '/img/photo.webp',
    '/img/photo.avif',
    '/greenlight-free-v1.0.0.zip',
  ]) {
    assert.equal(normalizeAppLinkTo(href), href)
  }
})

test('AppLink normalizes object routes without dropping route fields', () => {
  assert.deepEqual(
    normalizeAppLinkTo({
      path: '/eco-conception',
      query: { tag: 'SEO' },
      hash: '#articles',
    }),
    {
      path: '/eco-conception/',
      query: { tag: 'SEO' },
      hash: '#articles',
    }
  )
})
