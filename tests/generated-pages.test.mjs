import assert from 'node:assert/strict'
import test from 'node:test'

import {
  assertSeoTags,
  assertInternalUrlsUseTrailingSlash,
  getMetaContent,
  getStructuredDataNodes,
  getTitle,
  nodeHasType,
  readGeneratedHtml,
  siteUrl,
} from './helpers/generated-site.mjs'

const pages = [
  { route: '/', expectedUrl: `${siteUrl}/` },
  { route: '/apps/', expectedUrl: `${siteUrl}/apps/` },
  { route: '/apps/duo-spend/', expectedUrl: `${siteUrl}/apps/duo-spend/` },
  { route: '/apps/focus-one/', expectedUrl: `${siteUrl}/apps/focus-one/` },
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
      assert.ok(
        node['@type'] || node['@graph'],
        'Expected JSON-LD @type or @graph',
      )
    }

    assert.ok(
      getMetaContent(html, 'property', 'og:description').length > 20,
      'Expected a useful og:description',
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

    if (page.route === '/apps/focus-one/') {
      assert.match(
        getTitle(html),
        /^FocusOne — App iPhone pour suivre une seule habitude \| BeAbot$/,
      )
      assert.equal(
        getMetaContent(html, 'name', 'description'),
        'FocusOne est une app iPhone minimaliste pour installer une seule micro-habitude à la fois : routine quotidienne, streak, widgets et rappels sobres.',
      )
      assert.match(html, /L’app iPhone qui vous aide à installer une routine/)
      assert.match(html, /À force de vouloir tout suivre/)
      assert.match(html, /Votre journée ne s’arrête pas forcément à minuit/)
      assert.match(html, /Ce que débloque Premium/)
      assert.match(html, /Joker mensuel pour protéger votre série/)
      assert.match(html, /14,99 € \/ an ou 39,99 € en achat unique/)
      assert.match(html, /\/img\/apps\/focus-one\/welcome\.webp/)
      assert.match(html, /\/img\/apps\/focus-one\/home-streak\.webp/)
      assert.doesNotMatch(
        html,
        /Prix à confirmer|Prix App Store à confirmer|Par défaut, la journée commence à 04:00/,
      )

      const appNode = structuredDataNodes.find((node) =>
        nodeHasType(node, 'SoftwareApplication'),
      )
      assert.ok(appNode, 'Expected FocusOne JSON-LD SoftwareApplication')
      assert.deepEqual(
        appNode.offers?.map((offer) => ({
          name: offer.name,
          price: offer.price,
          priceCurrency: offer.priceCurrency,
        })),
        [
          {
            name: 'FocusOne gratuit',
            price: '0',
            priceCurrency: 'EUR',
          },
          {
            name: 'FocusOne Premium annuel',
            price: '14.99',
            priceCurrency: 'EUR',
          },
          {
            name: 'FocusOne Premium achat unique',
            price: '39.99',
            priceCurrency: 'EUR',
          },
        ],
      )
    }

    if (page.route === '/apps/duo-spend/') {
      assert.match(
        getTitle(html),
        /^DuoSpend — App de dépenses partagées pour couple et amis \| BeAbot$/,
      )
      assert.equal(
        getMetaContent(html, 'name', 'description'),
        'DuoSpend est une app pour suivre les dépenses partagées à deux : couple, colocation, amis, vacances ou frais du quotidien. Ajoutez une dépense, voyez qui doit quoi.',
      )
      assert.match(html, /DuoSpend — Gérez vos dépenses à deux simplement/)
      assert.match(html, /sans tableur, sans calcul mental/)
      assert.match(html, /qui a payé quoi/)
      assert.match(html, /Dépenses partagées/)
      assert.match(html, /DuoSpend Pro/)
      assert.doesNotMatch(
        html,
        /DuoSpend — Conçue sans tracking|sans SDK tiers\.<\/h1>|StoreKit|Core Data|CloudKit/,
      )

      const appNode = structuredDataNodes.find((node) =>
        nodeHasType(node, 'SoftwareApplication'),
      )
      assert.ok(appNode, 'Expected DuoSpend JSON-LD SoftwareApplication')
      assert.equal(appNode.applicationCategory, 'FinanceApplication')
      assert.equal(appNode.operatingSystem, 'iOS')
      assert.equal(
        appNode.description,
        'DuoSpend est une app iOS pour suivre les dépenses partagées à deux, savoir qui a payé quoi et équilibrer les comptes simplement.',
      )
      assert.equal(appNode.author?.name, 'Benoît Abot')
    }

    if (page.route === '/apps/') {
      assert.match(html, /À la une/)
      assert.match(html, /Deux apps en prépublication/)
      assert.match(html, /Autres apps/)
      assert.match(
        html,
        /App iPhone minimaliste pour suivre une seule micro-habitude à la fois\. Routine quotidienne, streak, rappels locaux et widgets, sans compte ni publicité\./,
      )
    }

    if (page.route === '/portfolio/') {
      assert.match(html, /href="\/apps\/duo-spend\/"/)
      assert.match(html, /href="\/apps\/focus-one\/"/)
      assert.match(html, /Découvrir DuoSpend/)
      assert.match(html, /Découvrir FocusOne/)
      assert.doesNotMatch(
        html,
        /https:\/\/github\.com\/benabot\/(?:DuoSpend|focusone)/,
      )
    }

    if (page.article) {
      assert.match(html, /<article\b/i)
      assert.match(html, /<h1\b[^>]*>[\s\S]*?<\/h1>/i)
      assert.match(html, /<a\b[^>]+href=["']\/eco-conception\/[^"']+\/["']/i)

      const articleNode = structuredDataNodes.find(
        (node) =>
          nodeHasType(node, 'Article') || nodeHasType(node, 'BlogPosting'),
      )
      assert.ok(
        articleNode,
        'Expected article JSON-LD to expose Article or BlogPosting',
      )
      assert.ok(articleNode.author, 'Expected article JSON-LD author')
      assert.ok(
        articleNode.datePublished,
        'Expected article JSON-LD datePublished',
      )
      assert.equal(articleNode.url, page.expectedUrl)
    }
  })
}
