import assert from 'node:assert/strict'
import test from 'node:test'

import { assertSeoTags, readGeneratedHtml, siteUrl } from './helpers/generated-site.mjs'

const pages = [
  { route: '/', expectedUrl: `${siteUrl}/` },
  { route: '/eco-conception/', expectedUrl: `${siteUrl}/eco-conception/` },
  {
    route: '/eco-conception/l-eco-conception-web/',
    expectedUrl: `${siteUrl}/eco-conception/l-eco-conception-web/`,
    article: true,
  },
  { route: '/portfolio/', expectedUrl: `${siteUrl}/portfolio/` },
  { route: '/services/', expectedUrl: `${siteUrl}/services/` },
  { route: '/contact/', expectedUrl: `${siteUrl}/contact/` },
]

for (const page of pages) {
  test(`generated page ${page.route} exposes minimal SEO tags`, (t) => {
    const html = readGeneratedHtml(t, page.route)

    assertSeoTags(html, page.expectedUrl)

    if (page.article) {
      assert.match(html, /<article\b/i)
      assert.match(html, /<h1\b[^>]*>[\s\S]*?<\/h1>/i)
      assert.match(html, /<a\b[^>]+href=["']\/eco-conception\/[^"']+\/["']/i)
    }
  })
}
