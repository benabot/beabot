# Ordre de migration @nuxt/content v2 -> v3

Date : 29 avril 2026

## Principe

Migrer par lots petits, testables, avec un commit par lot. Ne pas melanger mise a jour de dependances, migration API et deplacement vers `app/`.

## Lot 1 — Configuration Content v3

Objectif :
- verifier la documentation officielle ;
- creer `content.config.ts` ;
- conserver la config markdown/highlight ;
- definir la collection `articles` avec les champs reels ;
- ne pas toucher aux pages.

Validation :
- `npm run generate`
- `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs`

Commit propose :
- `chore: ajouter configuration Content v3`

## Lot 2 — Liste articles

Fichiers :
- `pages/index.vue`
- `pages/eco-conception/index.vue`
- `components/HomeEcoArticles.vue`

Objectif :
- migrer les listes vers `queryCollection('articles')` ;
- conserver l'ordre date descendant ;
- conserver `tag` ou normaliser explicitement ;
- remplacer localement les transformations de `_path`.

Validation :
- `npm test`
- `npm run generate`
- verifier URLs articles
- verifier filtres archive et articles mis en avant

Commit propose :
- `refactor: migrer listes articles vers queryCollection`

## Lot 3 — Page article

Fichiers :
- `pages/eco-conception/[slug].vue`
- `components/ArticleNavigation.vue`

Objectif :
- migrer le fetch article par slug ;
- migrer `findSurround()` ;
- adapter prev/next vers `path` ;
- verifier `ContentRenderer`, TOC et body AST.

Validation :
- article rendu
- TOC
- JSON-LD BlogPosting
- JSON-LD FAQ pour `faq-eco-conception`
- navigation prev/next

Commit propose :
- `refactor: migrer page article Content v3`

## Lot 4 — Recherche

Fichiers :
- `components/AppSearchInput.vue`

Objectif :
- migrer `.where({ $or })` vers la syntaxe Content v3 ;
- ou utiliser `queryCollectionSearchSections()` si c'est l'API officielle adaptee ;
- conserver les URLs publiques `/eco-conception/<slug>/`.

Validation :
- recherche fonctionnelle
- pas de crash client
- requete vide remet les resultats a zero

Commit propose :
- `refactor: migrer recherche articles Content v3`

## Lot 5 — Feeds et sitemap

Fichiers :
- `server/routes/rss.xml.ts`
- `server/routes/feed.json.ts`
- `nuxt.config.ts`

Objectif :
- remplacer `serverQueryContent` dans les routes serveur ;
- reecrire `sitemap.routes` sans API v2 ;
- conserver les slugs publics, dates, tags et trailing slash.

Validation :
- `/rss.xml`
- `/feed.json`
- `/sitemap.xml`
- `node --test tests/feeds.test.mjs`
- check SEO

Commit propose :
- `refactor: migrer feeds et sitemap vers Content v3`

## Lot 6 — Nettoyage `_path`

Fichiers :
- tous les fichiers restants
- `scripts/check-content-queries.mjs`

Objectif :
- supprimer les usages `_path` restants ;
- inverser le garde-fou Content pour interdire les APIs v2 ;
- verifier les helpers de liens.

Validation :
- `rg "_path" pages components server nuxt.config.ts scripts tests`
- `npm test`
- `npm run generate`

Commit propose :
- `refactor: remplacer _path par path Content v3`

## Lot 7 — Tests et garde-fous

Fichiers :
- `scripts/check-content-queries.mjs`
- `tests/feeds.test.mjs`
- `tests/generated-pages.test.mjs`
- tests complementaires si ajoutes

Objectif :
- couvrir l'ordre des articles ;
- couvrir tags/filtres ;
- couvrir navigation prev/next ;
- couvrir TOC ;
- couvrir JSON-LD Article/FAQ.

Validation :
- `npm test`
- `npm run generate`
- `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs`

Commit propose :
- `test: adapter garde-fous Content v3`
