import assert from 'node:assert/strict'
import test from 'node:test'

import {
  assertSeoTags,
  assertInternalUrlsUseTrailingSlash,
  getMetaContent,
  getStructuredDataNodes,
  nodeHasType,
  readGeneratedHtml,
  siteUrl,
} from './helpers/generated-site.mjs'

const pages = [
  { route: '/', expectedUrl: `${siteUrl}/` },
  { route: '/apps/', expectedUrl: `${siteUrl}/apps/` },
  { route: '/mentions-legales/', expectedUrl: `${siteUrl}/mentions-legales/` },
  { route: '/eco-conception/', expectedUrl: `${siteUrl}/eco-conception/` },
  {
    route: '/eco-conception/faq-eco-conception/',
    expectedUrl: `${siteUrl}/eco-conception/faq-eco-conception/`,
  },
  {
    route: '/eco-conception/audit-eco-conception/',
    expectedUrl: `${siteUrl}/eco-conception/audit-eco-conception/`,
    article: true,
  },
  {
    route: '/eco-conception/comment-reduire-le-poids-d-un-site-web/',
    expectedUrl: `${siteUrl}/eco-conception/comment-reduire-le-poids-d-un-site-web/`,
    article: true,
  },
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
    assertInternalUrlsUseTrailingSlash(html, page.route)
    const structuredDataNodes = getStructuredDataNodes(html)

    for (const node of structuredDataNodes) {
      assert.ok(node['@type'] || node['@graph'], 'Expected JSON-LD @type or @graph')
    }

    assert.ok(
      getMetaContent(html, 'property', 'og:description').length > 20,
      'Expected a useful og:description'
    )

    if (page.route === '/') {
      assert.ok(
        structuredDataNodes.some(
          (node) => nodeHasType(node, 'Person') || nodeHasType(node, 'WebSite'),
        ),
        'Expected homepage JSON-LD to expose Person or WebSite',
      )
    }

    if (page.route === '/contact/') {
      assert.ok(
        structuredDataNodes.some((node) => nodeHasType(node, 'ContactPage')),
        'Expected contact page JSON-LD to expose ContactPage',
      )
    }

    if (page.article) {
      assert.match(html, /<article\b/i)
      assert.match(html, /<h1\b[^>]*>[\s\S]*?<\/h1>/i)
      assert.match(html, /<a\b[^>]+href=["']\/eco-conception\/[^"']+\/["']/i)

      const articleNode = structuredDataNodes.find(
        (node) => nodeHasType(node, 'Article') || nodeHasType(node, 'BlogPosting'),
      )
      assert.ok(articleNode, 'Expected article JSON-LD to expose Article or BlogPosting')
      assert.ok(articleNode.author, 'Expected article JSON-LD author')
      assert.ok(articleNode.datePublished, 'Expected article JSON-LD datePublished')
      assert.equal(articleNode.url, page.expectedUrl)
    }
  })
}
