# DEP-2-E — Audit final Content v3

Date : 10 mai 2026

## Objectif

Verifier que la migration `@nuxt/content` v2 vers v3 est terminee cote APIs applicatives et decider si `DEP-2` peut etre cloture.

## Etat final Content v3

- Nuxt : `4.4.2`
- Content : `@nuxt/content@3.13.0`
- Sitemap : `@nuxtjs/sitemap@8.0.15`
- Schema Content : `content.config.ts`
- Collection : `articles`
- Type : `page`
- Source : `{ include: 'articles/**/*.md', prefix: '/eco-conception' }`
- Validateur : `zod@3.25.76` en dependance directe depuis `DEP-2-C`

## Anciennes APIs v2 recherchees

Motifs audites dans le code applicatif :

- `queryContent(`
- `serverQueryContent(`
- `findSurround(`
- `searchContent(`
- `#content/server`
- `_path`
- `.only(`
- `.sort({`
- `.findOne(`
- `.find()`

Perimetre applicatif audite :

- `pages/`
- `components/`
- `composables/`
- `layouts/`
- `server/`
- `utils/`
- `scripts/`
- `nuxt.config.ts`
- `content.config.ts`
- `app.vue`
- `error.vue`

Resultat :

- aucun usage Content v2 applicatif restant apres correction ;
- les anciennes APIs restent citees uniquement dans des rapports historiques ou dans les motifs de garde-fou.

Voir :

- `dep-2-e-app-v2-api-usages.txt`
- `dep-2-e-app-v2-api-usages-after.txt`
- `dep-2-e-doc-v2-api-usages.txt`

## Correction minimale pendant audit

`utils/getRoutes.js` contenait encore :

- `require('@nuxt/content')`
- `$content({ deep: true })`
- `.only(['path'])`
- `.fetch()`

Les audits precedents signalaient deja ce fichier comme inutilise. Aucun appel applicatif actuel n'a ete trouve. Le fichier a ete supprime pour ne pas conserver une API Content v2 dans `utils/`.

## Garde-fou Content

`scripts/check-content-queries.mjs` :

- verifie les contrats Content v3 des pages, composants, routes serveur, sitemap et `content.config.ts` ;
- interdit les anciennes APIs applicatives ;
- scanne maintenant aussi `composables/`, `utils/` et `scripts/` ;
- ignore uniquement `scripts/check-content-queries.mjs`, car il contient les motifs interdits comme expressions de garde-fou.

`npm test` execute bien ce garde-fou via `npm run test:content`.

## Etat pages

- Homepage : requete articles en `queryCollection('articles')`, tri `date DESC`, limite conservee.
- Archive `/eco-conception/` : requete articles en Content v3, tags et URLs `path` conserves.
- Page article `/eco-conception/[slug]/` : article principal en `.path(...).first()`, rendu `<ContentRenderer>`, SEO et JSON-LD conserves.
- Navigation precedent / suivant : `queryCollectionItemSurroundings()` et `path`.

Voir :

- `dep-2-e-v3-surfaces-audit.txt`

## Etat composants

- `HomeEcoArticles.vue` : Content v3.
- `ArticleNavigation.vue` : `path`.
- `AppSearchInput.vue` : `queryCollection('articles')`, `LIKE`, `.orWhere(...)`, `.limit(6)` et `.all()`.

## Etat RSS

- `.output/public/rss.xml` genere.
- 13 items RSS.
- URLs articles avec slash final.
- Dates valides.
- Categories depuis `tag`.
- Aucun message `no such column: "date"`.

Voir :

- `dep-2-e-feed-rss-check.txt`

## Etat JSON Feed

- `.output/public/feed.json` genere.
- JSON parseable.
- 13 items.
- URLs articles avec slash final.
- Dates valides.
- Tags depuis `tag`.

Voir :

- `dep-2-e-feed-rss-check.txt`

## Etat sitemap

- `.output/public/sitemap.xml` genere.
- Archive `/eco-conception/` presente.
- 13 URLs articles presentes.
- `/404` et `/404/` exclus.
- URLs articles avec slash final.
- Aucun import `#content/server`.

Voir :

- `dep-2-e-sitemap-check.txt`

## URLs et sorties generees

Controles effectues apres generation :

- `.output/public/rss.xml` existe ;
- `.output/public/feed.json` existe ;
- `.output/public/sitemap.xml` existe ;
- un article genere existe dans `.output/public/eco-conception/l-eco-conception-web/index.html` ;
- aucune erreur Content visible : pas de `[object Object]`, `no such column`, `queryContent`, `serverQueryContent` ou `#content/server` dans les sorties HTML/XML/JSON ;
- aucune URL Content accidentelle en `/articles/` ;
- aucune URL Content avec `undefined`.

Point non bloquant hors perimetre DEP-2 :

- 5 liens internes Markdown existants vers des articles n'ont pas de slash final dans un article genere ;
- ils n'ont pas ete modifies car les changements de contenu editorial etaient explicitement hors perimetre de ce lot.

Voir :

- `dep-2-e-output-files.txt`
- `dep-2-e-generated-html-scan.txt`

## Validation

- `npm test` : OK
- `npm run generate` : OK
- check SEO : OK
- routes prerendered : 72

Voir :

- `dep-2-e-tests.txt`
- `dep-2-e-generate.txt`
- `dep-2-e-seo-check.txt`
- `dep-2-e-generate-summary.txt`

Warnings non bloquants observes :

- `[@nuxtjs/sitemap] No dynamic sources detected. Consider enabling zeroRuntime`
- `[plugin nuxt:module-preload-polyfill] Sourcemap is likely to be incorrect`
- `Circular chunk: vendor-nuxt -> vendor-libs -> vendor-nuxt`

Ces warnings etaient deja documentes et ne sont pas corriges dans ce lot.

## Dependances

- `package.json` : non modifie.
- `package-lock.json` : non modifie.
- Aucune nouvelle dependance.
- Aucun `npm audit fix`.

Voir :

- `dep-2-e-package-diff.txt`

## Decision

`DEP-2` : termine.

La migration Content v3 est terminee cote APIs applicatives :

- pages migrees ;
- composants articles migres ;
- recherche migree ;
- RSS migre ;
- JSON Feed migre ;
- sitemap compatible Content v3 ;
- schema `articles` enrichi ;
- garde-fou Content v2 actif.

## Prochaine etape recommandee

Traiter separement :

- le statut UI de `AppSearchInput.vue` si le composant doit redevenir visible ;
- les 5 liens Markdown internes sans slash final dans un lot URL hygiene ;
- puis les lots `@nuxt/image` et `@nuxt/eslint`.
