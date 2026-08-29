import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import test from 'node:test'

import { projects } from '../data/portfolio.ts'
import {
  assertSeoTags,
  assertInternalUrlsUseTrailingSlash,
  findTag,
  getAttr,
  getMetaContent,
  getStructuredDataNodes,
  getTitle,
  nodeHasType,
  readGeneratedHtml,
  readGeneratedText,
  siteUrl,
} from './helpers/generated-site.mjs'

test('portfolio exposes the microdata refining game directly after La petite boucle', (t) => {
  const petiteBoucleIndex = projects.findIndex(
    (project) => project.title === 'La petite boucle',
  )
  const project = projects[petiteBoucleIndex + 1]

  assert.notEqual(petiteBoucleIndex, -1)
  assert.equal(project?.title, 'Jeu de raffinage de microdatas')
  assert.equal(project?.subtitle, 'Jeu en JavaScript sur les nombres premiers')
  assert.equal(project?.url, 'https://raffinage-microdatas.netlify.app/')
  assert.equal(project?.githubLink, 'https://github.com/benabot/raffinage')
  assert.equal(project?.image, '/img/raffinage.webp')
  assert.deepEqual(project?.tags, ['WebDesign', 'Javascript'])

  const html = readGeneratedHtml(t, '/portfolio/', { required: true })
  const projectLink = findTag(
    html,
    'a',
    'href',
    'https://raffinage-microdatas.netlify.app/',
  )
  const githubLink = findTag(
    html,
    'a',
    'href',
    'https://github.com/benabot/raffinage',
  )
  const image = findTag(html, 'img', 'src', '/img/raffinage.webp')
  const projectTitles = Array.from(
    html.matchAll(/<h3\b[^>]*class="project-title"[^>]*>([^<]+)<\/h3>/gi),
    (match) => match[1],
  )
  const renderedPetiteBoucleIndex = projectTitles.indexOf('La petite boucle')

  assert.match(html, /Jeu de raffinage de microdatas/)
  assert.match(html, /Jeu en JavaScript sur les nombres premiers/)
  assert.ok(projectLink, 'Expected the project link in generated HTML')
  assert.ok(githubLink, 'Expected the GitHub link in generated HTML')
  assert.equal(getAttr(projectLink, 'target'), '_blank')
  assert.equal(getAttr(githubLink, 'target'), '_blank')
  assert.ok(image, 'Expected the project image in generated HTML')
  assert.equal(projectTitles[renderedPetiteBoucleIndex + 1], project.title)
  assert.match(html, />Webdesign</)
  assert.match(html, />Javascript</)
})

const pages = [
  { route: '/', expectedUrl: `${siteUrl}/` },
  { route: '/apps/', expectedUrl: `${siteUrl}/apps/` },
  { route: '/en/apps/', expectedUrl: `${siteUrl}/en/apps/` },
  { route: '/apps/duo-spend/', expectedUrl: `${siteUrl}/apps/duo-spend/` },
  {
    route: '/en/apps/duo-spend/',
    expectedUrl: `${siteUrl}/en/apps/duo-spend/`,
  },
  {
    route: '/apps/duo-spend/releases/',
    expectedUrl: `${siteUrl}/apps/duo-spend/releases/`,
    required: true,
  },
  {
    route: '/apps/duo-spend/roadmap/',
    expectedUrl: `${siteUrl}/apps/duo-spend/roadmap/`,
    required: true,
  },
  {
    route: '/en/apps/duo-spend/releases/',
    expectedUrl: `${siteUrl}/en/apps/duo-spend/releases/`,
    required: true,
  },
  {
    route: '/en/apps/duo-spend/roadmap/',
    expectedUrl: `${siteUrl}/en/apps/duo-spend/roadmap/`,
    required: true,
  },
  { route: '/apps/focus-one/', expectedUrl: `${siteUrl}/apps/focus-one/` },
  {
    route: '/en/apps/focus-one/',
    expectedUrl: `${siteUrl}/en/apps/focus-one/`,
  },
  {
    route: '/apps/meeting-mode/',
    expectedUrl: `${siteUrl}/apps/meeting-mode/`,
  },
  {
    route: '/en/apps/meeting-mode/',
    expectedUrl: `${siteUrl}/en/apps/meeting-mode/`,
  },
  { route: '/apps/siturem/', expectedUrl: `${siteUrl}/apps/siturem/` },
  { route: '/en/apps/siturem/', expectedUrl: `${siteUrl}/en/apps/siturem/` },
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
  {
    route: '/greenlight/',
    expectedUrl: `${siteUrl}/greenlight/`,
    required: true,
  },
  { route: '/en/contact/', expectedUrl: `${siteUrl}/en/contact/` },
]

const getReleaseSection = (html, title, nextTitle) => {
  const start = html.indexOf(title)
  const end = html.indexOf(nextTitle, start)

  assert.notEqual(start, -1, `Expected release title: ${title}`)
  assert.notEqual(end, -1, `Expected following release title: ${nextTitle}`)

  return html.slice(start, end)
}

const getReleaseStatus = (releaseSection) =>
  releaseSection
    .match(/<span[^>]*class="release-status"[^>]*>([^<]+)<\/span>/)?.[1]
    ?.trim()

test('shared App Store badge links explicitly use a pointer cursor', () => {
  const mainStyles = readFileSync(
    new URL('../assets/css/main.scss', import.meta.url),
    'utf8',
  )

  assert.match(
    mainStyles,
    /\.app-store-badge-link\s*\{[^}]*cursor:\s*pointer;/s,
  )
})

test('contact text links preserve a visible keyboard focus', () => {
  const contactSource = readFileSync(
    new URL('../pages/contact.vue', import.meta.url),
    'utf8',
  )

  assert.match(
    contactSource,
    /\.contact-link:focus-visible\s*\{[^}]*outline:\s*2px solid #0dc763;[^}]*outline-offset:\s*3px;/s,
  )
})

test('DuoSpend idea form uses a native Netlify POST contract', () => {
  const componentUrl = new URL(
    '../components/apps/AppIdeaSuggestionForm.vue',
    import.meta.url,
  )
  assert.ok(existsSync(componentUrl), 'Expected the shared idea form component')

  const source = existsSync(componentUrl)
    ? readFileSync(componentUrl, 'utf8')
    : ''
  assert.match(source, /name="duospend-idea"/)
  assert.match(source, /method="POST"/)
  assert.match(source, /data-netlify="true"/)
  assert.match(source, /netlify-honeypot="bot-field"/)
  assert.doesNotMatch(source, /@submit|fetch\(|onSubmit|preventDefault/)

  const detectorUrl = new URL('../public/contact-form.html', import.meta.url)
  const detector = readFileSync(detectorUrl, 'utf8')
  assert.match(detector, /<form[\s\S]*name="duospend-idea"[\s\S]*<\/form>/)
  assert.match(detector, /name="idea"/)
  assert.match(detector, /name="usefulness"/)
  assert.match(detector, /name="email"/)
})

test('generated sitemap includes every DuoSpend updates route', (t) => {
  const sitemap = readGeneratedText(t, 'sitemap.xml')
  if (!sitemap) return

  for (const route of [
    '/apps/duo-spend/releases/',
    '/apps/duo-spend/roadmap/',
    '/en/apps/duo-spend/releases/',
    '/en/apps/duo-spend/roadmap/',
  ]) {
    assert.match(sitemap, new RegExp(`<loc>${siteUrl}${route}</loc>`))
  }
})

for (const page of pages) {
  test(`generated page ${page.route} exposes minimal SEO tags`, (t) => {
    const html = readGeneratedHtml(t, page.route, {
      required: page.required,
    })
    if (!html) return

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

      const cvLink = findTag(html, 'a', 'href', '/cv.pdf')
      const cvLinkRel = new Set(getAttr(cvLink, 'rel').split(/\s+/))

      assert.equal(getAttr(cvLink, 'target'), '_blank')
      assert.ok(cvLinkRel.has('nofollow'))
      assert.ok(cvLinkRel.has('noopener'))
      assert.ok(cvLinkRel.has('noreferrer'))
      assert.doesNotMatch(cvLink, /\bdownload(?:=|\s|>)/i)
      assert.match(html, />\s*Télécharger mon CV\s*<\/a>/)
    }

    if (page.route === '/greenlight/') {
      const productNode = structuredDataNodes.find((node) =>
        nodeHasType(node, 'Product'),
      )

      assert.ok(productNode, 'Expected Greenlight JSON-LD Product')
      assert.deepEqual(productNode?.offers, [
        {
          '@type': 'Offer',
          name: 'Greenlight-free',
          price: '0',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
          url: `${siteUrl}/greenlight/`,
          description:
            'Version légère, propre, personnalisable avec Gutenberg, pour démarrer simplement.',
        },
      ])
      assert.doesNotMatch(
        JSON.stringify(productNode),
        /Greenlight premium|PreOrder/,
        'Greenlight premium must not be represented in Product JSON-LD',
      )
      assert.deepEqual(productNode?.additionalProperty, [
        {
          '@type': 'PropertyValue',
          name: 'HTTP requests',
          value: '6',
        },
        {
          '@type': 'PropertyValue',
          name: 'Page weight',
          value: '< 115 ko',
        },
        {
          '@type': 'PropertyValue',
          name: 'DOM size',
          value: '148',
        },
        {
          '@type': 'PropertyValue',
          name: 'EcoIndex',
          value: 'A',
        },
      ])
      assert.doesNotMatch(html, /PreOrder/)
      assert.ok(
        structuredDataNodes.some((node) => nodeHasType(node, 'FAQPage')),
        'Expected Greenlight FAQPage JSON-LD',
      )
      assert.ok(
        structuredDataNodes.some((node) => nodeHasType(node, 'BreadcrumbList')),
        'Expected Greenlight BreadcrumbList JSON-LD',
      )
    }

    if (page.route === '/en/contact/') {
      assert.ok(
        structuredDataNodes.some((node) => nodeHasType(node, 'ContactPage')),
        'Expected EN contact page JSON-LD to expose ContactPage',
      )
      assert.match(html, /lang=\"en\"/)
    }

    if (page.route === '/apps/focus-one/') {
      assert.match(
        getTitle(html),
        /^FocusOne — compteur privé d’habitude et de série \| BeAbot$/,
      )
      assert.equal(
        getMetaContent(html, 'name', 'description'),
        'FocusOne vous aide à tenir une seule promesse personnelle à la fois. Choisissez une habitude, cochez-la chaque jour et suivez votre série sans compte ni réseau social.',
      )
      assert.match(html, /FocusOne, une seule promesse à tenir/)
      assert.match(html, /Disponible sur l’App Store/)
      assert.match(
        html,
        /\/Download-on-the-App-Store\/FR\/Download_on_App_Store\/Black_lockup\/SVG\/Download_on_the_App_Store_Badge_FR_RGB_blk_100517\.svg/,
      )
      assert.match(html, /alt="Télécharger dans l’App Store"/)
      assert.match(html, /Voir comment ça marche/)
      assert.match(html, /Essayez FocusOne gratuitement/)
      assert.match(
        html,
        /\/Download-on-the-App-Store\/FR\/Download_on_App_Store\/White_lockup\/SVG\/Download_on_the_App_Store_Badge_FR_RGB_wht_100217\.svg/,
      )
      assert.match(
        html,
        /https:\/\/apps\.apple\.com\/app\/focusone\/id6769842298/,
      )
      assert.ok(
        html.indexOf('focus-pricing-title') <
          html.indexOf('focus-download-title') &&
          html.indexOf('focus-download-title') <
            html.indexOf('focus-faq-title'),
        'Expected the FocusOne download CTA after pricing and before FAQ',
      )
      assert.doesNotMatch(html, /Être informé|#release-form|release-form/)
      assert.doesNotMatch(html, /Prépublication/)
      assert.doesNotMatch(html, /Voir la confidentialité/)
      assert.match(html, /À force de vouloir tout suivre/)
      assert.match(html, /Votre journée ne s’arrête pas forcément à minuit/)
      assert.match(html, /Premium pour plus de confort/)
      assert.match(html, /Joker mensuel pour protéger votre série/)
      assert.match(html, /14,99 € \/ an ou 39,99 € en achat unique/)
      assert.match(html, /\/img\/apps\/focus-one\/02-creation\.webp/)
      assert.match(html, /\/img\/apps\/focus-one\/03-serie-active\.webp/)
      assert.match(html, /\/img\/apps\/focus-one\/04-streak\.webp/)
      assert.match(html, /\/img\/apps\/focus-one\/07-stats\.webp/)
      assert.match(html, /\/img\/apps\/focus-one\/08-widget\.webp/)
      assert.match(html, /\/img\/apps\/focus-one\/step-1\.webp/)
      assert.doesNotMatch(
        html,
        /Prix à confirmer|Prix App Store à confirmer|Par défaut, la journée commence à 04:00|home-streak\.webp|welcome\.webp/,
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
        /^DuoSpend — App de dépenses partagées pour couples \| BeAbot$/,
      )
      assert.equal(
        getMetaContent(html, 'name', 'description'),
        'DuoSpend aide les couples à suivre les dépenses d’un projet commun : voyage, emménagement, mariage ou travaux, sans banque connectée ni tableur.',
      )
      assert.match(html, /DuoSpend — Qui doit combien à qui/)
      assert.match(
        html,
        /\/Download-on-the-App-Store\/FR\/Download_on_App_Store\/Black_lockup\/SVG\/Download_on_the_App_Store_Badge_FR_RGB_blk_100517\.svg/,
      )
      assert.match(html, /alt=\"Télécharger dans l’App Store\"/)
      assert.match(html, /Voir comment ça marche/)
      assert.match(html, /Essayez DuoSpend gratuitement/)
      assert.match(
        html,
        /\/Download-on-the-App-Store\/FR\/Download_on_App_Store\/White_lockup\/SVG\/Download_on_the_App_Store_Badge_FR_RGB_wht_100217\.svg/,
      )
      assert.doesNotMatch(html, /Être informé|#release-form|release-form/)
      assert.doesNotMatch(html, /Voir la confidentialité/)
      assert.doesNotMatch(
        html,
        /bientôt disponible|en soumission|TestFlight|précommande|lancement prochain|disponible bientôt/i,
      )
      assert.match(html, /sans banque connectée et sans tableur/)
      assert.match(html, /qui a payé quoi/)
      assert.match(html, /Dépenses partagées/)
      assert.match(html, /DuoSpend Pro/)
      assert.match(html, /Gratuit au téléchargement · DuoSpend Pro : 6,99 €/)
      assert.match(html, /Prix localisé selon le pays/)
      assert.match(html, /Peut-on utiliser DuoSpend à deux sur deux iPhones ?/)
      assert.match(html, /DuoSpend Pro peut-il être partagé en famille ?/)
      assert.match(html, /version 1\.0\.3, soumise à l’App Store/)
      assert.match(html, /Le transfert restera manuel/)
      assert.match(html, /Partage familial Apple/)
      assert.match(
        html,
        /DuoSpend ne synchronise pas automatiquement les projets entre les appareils dans cette version\./,
      )
      assert.match(html, /id="support"/)
      assert.match(html, /id="privacy"/)
      assert.doesNotMatch(
        html,
        /Pas encore dans la première version|synchronisation iCloud optionnelle est prévue/,
      )
      assert.doesNotMatch(html, /6,99 € en France/)
      assert.match(
        html,
        /https:\/\/apps\.apple\.com\/us\/app\/duospend\/id6769080529/,
      )
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
      assert.deepEqual(
        appNode.offers?.map((offer) => ({
          name: offer.name,
          price: offer.price,
          priceCurrency: offer.priceCurrency,
        })),
        [
          {
            name: 'DuoSpend',
            price: '0',
            priceCurrency: 'EUR',
          },
        ],
      )
      assert.equal(
        appNode.description,
        'DuoSpend est une app iOS pour suivre les dépenses partagées à deux, savoir qui a payé quoi et équilibrer les comptes simplement.',
      )
      assert.equal(appNode.author?.name, 'Benoît Abot')
      assert.match(html, /href="\/apps\/duo-spend\/releases\/"/)
      assert.match(html, /href="\/apps\/duo-spend\/roadmap\/"/)
    }

    if (page.route === '/en/apps/focus-one/') {
      assert.match(
        getTitle(html),
        /^FocusOne — Private Habit and Streak Tracker \| BeAbot$/,
      )
      assert.match(html, /FocusOne, one promise to keep/)
      assert.match(html, /Available on the App Store/)
      assert.match(
        html,
        /\/Download-on-the-App-Store\/US\/Download_on_App_Store\/Black_lockup\/SVG\/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917\.svg/,
      )
      assert.match(html, /alt="Download on the App Store"/)
      assert.match(html, /See how it works/)
      assert.match(html, /Try FocusOne for free/)
      assert.match(
        html,
        /\/Download-on-the-App-Store\/US\/Download_on_App_Store\/White_lockup\/SVG\/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917\.svg/,
      )
      assert.match(
        html,
        /https:\/\/apps\.apple\.com\/app\/focusone\/id6769842298/,
      )
      assert.ok(
        html.indexOf('focus-pricing-title') <
          html.indexOf('focus-download-title') &&
          html.indexOf('focus-download-title') <
            html.indexOf('focus-faq-title'),
        'Expected the FocusOne EN download CTA after pricing and before FAQ',
      )
      assert.doesNotMatch(html, /Get launch updates|#release-form|release-form/)
      assert.doesNotMatch(html, /Pre-release/)
      assert.doesNotMatch(html, /View privacy/)
      assert.match(html, /id=\"support\"/)
      assert.match(
        html,
        /\/en\/contact\/\?app=focus-one(?:&|&amp;)type=support/,
      )
      assert.ok(
        html.includes(
          'hreflang=\"fr\" href=\"https://beabot.fr/apps/focus-one/\"',
        ),
      )
      assert.ok(
        html.includes(
          'hreflang=\"en\" href=\"https://beabot.fr/en/apps/focus-one/\"',
        ),
      )
      assert.match(html, /lang=\"en\"/)
    }

    if (page.route === '/en/apps/duo-spend/') {
      assert.match(
        getTitle(html),
        /^DuoSpend — Shared expenses app for couples \| BeAbot$/,
      )
      assert.match(html, /See how it works/)
      assert.match(
        html,
        /\/Download-on-the-App-Store\/US\/Download_on_App_Store\/Black_lockup\/SVG\/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917\.svg/,
      )
      assert.match(html, /alt=\"Download on the App Store\"/)
      assert.match(html, /Try DuoSpend for free/)
      assert.match(
        html,
        /\/Download-on-the-App-Store\/US\/Download_on_App_Store\/White_lockup\/SVG\/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917\.svg/,
      )
      assert.doesNotMatch(html, /Get launch updates|#release-form|release-form/)
      assert.doesNotMatch(html, /View privacy/)
      assert.doesNotMatch(
        html,
        /coming soon|available soon|in review|TestFlight|pre-order|launching soon/i,
      )
      assert.match(html, /For projects you share as a couple/)
      assert.match(
        html,
        /Free to download · DuoSpend Pro: \$5\.99 in the US \/ €6\.99 in the euro area\./,
      )
      assert.match(html, /One-time in-app purchase through the App Store/)
      assert.match(html, /Can two people use DuoSpend on two iPhones\?/)
      assert.match(html, /Can DuoSpend Pro be shared with my family\?/)
      assert.match(html, /Version 1\.0\.3, submitted to the App Store/)
      assert.match(html, /Transfers will remain manual/)
      assert.match(html, /Apple Family Sharing/)
      assert.match(
        html,
        /DuoSpend does not automatically sync projects between devices in this version\./,
      )
      assert.doesNotMatch(
        html,
        /Not in the first version|Optional iCloud sync is planned/,
      )
      assert.doesNotMatch(html, /€6\.99 France|\$5\.99 US \/ €6\.99 France/)
      assert.match(
        html,
        /https:\/\/apps\.apple\.com\/us\/app\/duospend\/id6769080529/,
      )
      assert.match(html, /id=\"support\"/)
      assert.match(html, /id=\"privacy\"/)
      assert.match(
        html,
        /\/en\/contact\/\?app=duo-spend(?:&|&amp;)type=support/,
      )
      assert.match(html, /lang=\"en\"/)

      const appNode = structuredDataNodes.find((node) =>
        nodeHasType(node, 'SoftwareApplication'),
      )
      assert.ok(appNode, 'Expected DuoSpend EN JSON-LD SoftwareApplication')
      assert.deepEqual(
        appNode.offers?.map((offer) => ({
          name: offer.name,
          price: offer.price,
          priceCurrency: offer.priceCurrency,
        })),
        [
          {
            name: 'DuoSpend',
            price: '0',
            priceCurrency: 'USD',
          },
        ],
      )
      assert.match(html, /href="\/en\/apps\/duo-spend\/releases\/"/)
      assert.match(html, /href="\/en\/apps\/duo-spend\/roadmap\/"/)
    }

    if (page.route === '/apps/duo-spend/releases/') {
      assert.equal(
        getTitle(html),
        'Notes de version de DuoSpend — Nouveautés et améliorations | BeAbot',
      )
      assert.equal(
        getMetaContent(html, 'name', 'description'),
        'Découvrez les nouvelles fonctionnalités, améliorations et corrections apportées à DuoSpend au fil des versions.',
      )
      assert.equal((html.match(/<h1\b/gi) || []).length, 1)
      assert.match(html, /<h1[^>]*>Notes de version<\/h1>/)
      assert.match(html, /DuoSpend 1\.1\.0/)
      assert.match(html, /1\.0\.3 — Partager un projet plus simplement/)
      assert.match(html, /1\.0\.2 — Des dépenses plus faciles à comprendre/)
      const version110 = getReleaseSection(
        html,
        'DuoSpend 1.1.0',
        '1.0.3 — Partager un projet plus simplement',
      )
      const version103 = getReleaseSection(
        html,
        '1.0.3 — Partager un projet plus simplement',
        '1.0.2 — Des dépenses plus faciles à comprendre',
      )
      const version102 = getReleaseSection(
        html,
        '1.0.2 — Des dépenses plus faciles à comprendre',
        '1.0.1 — Lisibilité et finitions',
      )
      assert.ok(
        html.indexOf('DuoSpend 1.1.0') <
          html.indexOf('1.0.3 — Partager un projet plus simplement'),
      )
      assert.equal(getReleaseStatus(version110), 'SOUMISE À L’APP STORE')
      assert.match(version110, /Profils du couple avec prénoms et couleurs personnalisées/)
      assert.match(version110, /Trois nouveaux widgets/)
      assert.doesNotMatch(
        version110,
        /DISPONIBLE SUR L’APP STORE|maintenant disponible|publiée|\.duospend|partage familial Apple|synchronisation|CloudKit|TestFlight/i,
      )
      assert.match(version103, /Disponible sur l’App Store/)
      assert.match(version103, /fichier \.duospend/)
      assert.match(
        version103,
        /DuoSpend Pro est également compatible avec le partage familial Apple/,
      )
      assert.match(version103, /un seul achat peut être partagé/)
      assert.match(version103, /sans partager ni synchroniser les projets/)
      assert.doesNotMatch(version103, /Soumise à l’App Store/i)
      assert.doesNotMatch(version102, /release-status|App Store/)
      assert.match(html, /Pas encore une synchronisation/)
      assert.match(html, /href="\/apps\/duo-spend\/"/)
      assert.match(html, /href="\/apps\/duo-spend\/roadmap\/"/)
      assert.ok(
        structuredDataNodes.some((node) => nodeHasType(node, 'BreadcrumbList')),
      )
      assert.doesNotMatch(html, /CloudKit|StoreKit|GitHub|TestFlight/)
      assert.ok(
        html.includes(
          'hreflang="en" href="https://beabot.fr/en/apps/duo-spend/releases/"',
        ),
      )
    }

    if (page.route === '/en/apps/duo-spend/releases/') {
      assert.equal(
        getTitle(html),
        'DuoSpend Release Notes — What’s New | BeAbot',
      )
      assert.equal(
        getMetaContent(html, 'name', 'description'),
        'Discover the new features, improvements and fixes added to DuoSpend with each release.',
      )
      assert.equal((html.match(/<h1\b/gi) || []).length, 1)
      assert.match(html, /<h1[^>]*>Release notes<\/h1>/)
      assert.match(html, /DuoSpend 1\.1\.0/)
      assert.match(html, /1\.0\.3 — Share a project more easily/)
      assert.match(html, /1\.0\.2 — Expenses that are easier to understand/)
      const version110 = getReleaseSection(
        html,
        'DuoSpend 1.1.0',
        '1.0.3 — Share a project more easily',
      )
      const version103 = getReleaseSection(
        html,
        '1.0.3 — Share a project more easily',
        '1.0.2 — Expenses that are easier to understand',
      )
      const version102 = getReleaseSection(
        html,
        '1.0.2 — Expenses that are easier to understand',
        '1.0.1 — Readability and polish',
      )
      assert.ok(
        html.indexOf('DuoSpend 1.1.0') <
          html.indexOf('1.0.3 — Share a project more easily'),
      )
      assert.equal(getReleaseStatus(version110), 'SUBMITTED TO THE APP STORE')
      assert.match(version110, /Couple profiles with names and customizable colors/)
      assert.match(version110, /Three new widgets/)
      assert.doesNotMatch(
        version110,
        /AVAILABLE ON THE APP STORE|released|now available|\.duospend|Apple Family Sharing|synchronization|CloudKit|TestFlight/i,
      )
      assert.match(version103, /Available on the App Store/)
      assert.match(version103, /\.duospend file/)
      assert.match(
        version103,
        /DuoSpend Pro also supports Apple Family Sharing/,
      )
      assert.match(version103, /one purchase can be shared/)
      assert.match(version103, /without sharing or synchronizing projects/)
      assert.doesNotMatch(version103, /Submitted to the App Store/i)
      assert.doesNotMatch(version102, /release-status|App Store/)
      assert.match(html, /Not synchronization yet/)
      assert.match(html, /href="\/en\/apps\/duo-spend\/"/)
      assert.match(html, /href="\/en\/apps\/duo-spend\/roadmap\/"/)
      assert.match(html, /lang="en"/)
      assert.doesNotMatch(html, /CloudKit|StoreKit|GitHub|TestFlight/)
    }

    if (page.route === '/apps/duo-spend/roadmap/') {
      assert.equal(
        getTitle(html),
        'Roadmap DuoSpend — Les prochaines nouveautés | BeAbot',
      )
      assert.equal(
        getMetaContent(html, 'name', 'description'),
        'Découvrez les fonctionnalités prévues et les pistes étudiées pour les prochaines versions de DuoSpend, et proposez vos idées.',
      )
      assert.equal((html.match(/<h1\b/gi) || []).length, 1)
      assert.match(html, /<h1[^>]*>Ce qui arrive ensuite<\/h1>/)
      assert.match(html, /id="proposer-une-idee"/)
      assert.match(html, /Prochaine étape/)
      assert.match(html, /v1\.2 — Statistiques avancées et confort Pro/)
      assert.match(html, /v2\.0 — Collaboration réelle/)
      assert.match(html, /Prévu/)
      assert.match(html, /href="\/apps\/duo-spend\/releases\/"/)

      const version12 = getReleaseSection(
        html,
        'v1.2 — Statistiques avancées et confort Pro',
        'v2.0 — Collaboration réelle',
      )
      const version20 = getReleaseSection(
        html,
        'v2.0 — Collaboration réelle',
        'Ce qui restera au cœur de DuoSpend',
      )
      assert.match(version12, /Catégories et icônes de dépenses/)
      assert.match(version12, /Statistiques avancées et tendances/)
      assert.match(version12, /Recherche et filtres/)
      assert.match(version12, /Export PDF enrichi/)
      assert.match(version12, /Conversion manuelle de devises/)
      assert.match(version12, /Notification de budget à 80 %/)
      assert.doesNotMatch(version12, /CloudKit Sharing/)
      assert.match(version20, /CloudKit Sharing/)
      assert.match(version20, /deux comptes Apple/)
      assert.doesNotMatch(
        `${version12}${version20}`,
        /profils? du couple|personnalisation des projets|thèmes et icônes pour (?:les )?projets|vue d’ensemble du couple|archiv|widgets?|micro-célébrations|demande d’avis contextuelle|liens publics|partage familial Apple|\.duospend/i,
      )
      assert.doesNotMatch(
        `${version12}${version20}`,
        /\b20\d{2}\b|trimestre|T[1-4]\b/,
      )

      const formTag = findTag(html, 'form', 'name', 'duospend-idea')
      const ideaTag = findTag(html, 'textarea', 'name', 'idea')
      const emailTag = findTag(html, 'input', 'name', 'email')
      assert.match(formTag, /method="post"/i)
      assert.equal(getAttr(formTag, 'data-netlify'), 'true')
      assert.equal(getAttr(formTag, 'netlify-honeypot'), 'bot-field')
      assert.match(ideaTag, /\brequired(?:="")?\b/)
      assert.doesNotMatch(emailTag, /\brequired\b/)
    }

    if (page.route === '/en/apps/duo-spend/roadmap/') {
      assert.equal(
        getTitle(html),
        'DuoSpend Roadmap — What’s Next | BeAbot',
      )
      assert.equal(
        getMetaContent(html, 'name', 'description'),
        'Explore planned features and ideas being considered for future DuoSpend updates, and share your own suggestion.',
      )
      assert.equal((html.match(/<h1\b/gi) || []).length, 1)
      assert.match(html, /<h1[^>]*>What’s next<\/h1>/)
      assert.match(html, /id="proposer-une-idee"/)
      assert.match(html, /Next step/)
      assert.match(html, /v1\.2 — Advanced insights and Pro convenience/)
      assert.match(html, /v2\.0 — Real collaboration/)
      assert.match(html, /Planned/)
      assert.match(html, /href="\/en\/apps\/duo-spend\/releases\/"/)
      assert.match(html, /lang="en"/)

      const version12 = getReleaseSection(
        html,
        'v1.2 — Advanced insights and Pro convenience',
        'v2.0 — Real collaboration',
      )
      const version20 = getReleaseSection(
        html,
        'v2.0 — Real collaboration',
        'What will remain at the heart of DuoSpend',
      )
      assert.match(version12, /Expense categories and icons/)
      assert.match(version12, /Advanced statistics and trends/)
      assert.match(version12, /Search and filters/)
      assert.match(version12, /Enhanced PDF export/)
      assert.match(version12, /Manual currency conversion/)
      assert.match(version12, /80% budget notification/)
      assert.doesNotMatch(version12, /CloudKit Sharing/)
      assert.match(version20, /CloudKit Sharing/)
      assert.match(version20, /two Apple accounts/)
      assert.doesNotMatch(
        `${version12}${version20}`,
        /couple profiles?|project customization|themes and icons for projects|Couple Overview|archiv|widgets?|micro-celebrations|contextual review prompt|public links|Apple Family Sharing|\.duospend/i,
      )
      assert.doesNotMatch(
        `${version12}${version20}`,
        /\b20\d{2}\b|quarter|Q[1-4]\b/i,
      )
    }

    if (page.route === '/apps/meeting-mode/') {
      assert.match(
        getTitle(html),
        /^Meeting Mode — app macOS pour réunions \| BeAbot$/,
      )
      assert.match(html, /Voir comment ça marche/)
      assert.doesNotMatch(html, /Être informé|#release-form|release-form/)
      assert.match(html, /id=\"support\"/)
      assert.match(html, /\/contact\/\?app=meeting-mode(?:&|&amp;)type=support/)
    }

    if (page.route === '/en/apps/meeting-mode/') {
      assert.match(
        getTitle(html),
        /^Meeting Mode — macOS app for meetings and screen sharing \| BeAbot$/,
      )
      assert.match(html, /See how it works/)
      assert.doesNotMatch(html, /Get launch updates|#release-form|release-form/)
      assert.match(html, /id=\"support\"/)
      assert.match(
        html,
        /\/en\/contact\/\?app=meeting-mode(?:&|&amp;)type=support/,
      )
      assert.match(html, /lang=\"en\"/)
    }

    if (page.route === '/apps/siturem/') {
      assert.match(
        getTitle(html),
        /^Siturem — timer iOS pour méditer \| BeAbot$/,
      )
      assert.match(html, /Voir comment ça marche/)
      assert.doesNotMatch(html, /Être informé|#release-form|release-form/)
      assert.match(html, /id=\"support\"/)
      assert.match(html, /\/contact\/\?app=siturem(?:&|&amp;)type=support/)
    }

    if (page.route === '/en/apps/siturem/') {
      assert.match(
        getTitle(html),
        /^Siturem — iOS meditation timer for advanced practitioners \| BeAbot$/,
      )
      assert.match(html, /See how it works/)
      assert.doesNotMatch(html, /Get launch updates|#release-form|release-form/)
      assert.match(html, /id=\"support\"/)
      assert.match(html, /\/en\/contact\/\?app=siturem(?:&|&amp;)type=support/)
      assert.match(html, /lang=\"en\"/)
    }

    if (page.route === '/apps/') {
      assert.match(html, /Des apps utiles pour garder le fil/)
      assert.match(html, /Sans compte inutile/)
      assert.match(html, /Deux usages très concrets/)
      assert.match(html, /Pratiquer, préparer/)
      assert.match(html, /Ouvrir\. Faire\. Fermer/)
      assert.match(html, /Par quoi commencer/)
      assert.match(html, /Découvrir Siturem/)
      assert.match(html, /Découvrir Meeting Mode/)
      assert.match(html, /Un compteur privé pour choisir une seule routine/)
    }

    if (page.route === '/en/apps/') {
      assert.match(html, /Useful apps for keeping track/)
      assert.match(html, /No unnecessary account/)
      assert.match(html, /Two concrete uses/)
      assert.match(html, /Practice, prepare/)
      assert.match(html, /Open\. Act\. Move on/)
      assert.match(html, /Where should you start/)
      assert.match(html, /Discover Siturem/)
      assert.match(html, /Discover Meeting Mode/)
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
