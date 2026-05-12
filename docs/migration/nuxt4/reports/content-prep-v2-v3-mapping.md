# Mapping @nuxt/content v2 -> v3

Date : 29 avril 2026

Note : aucune documentation officielle Content v3 n'a ete consultee pendant cette etape. Les equivalences ci-dessous sont probables et doivent etre verifiees avant implementation.

## APIs

| Usage v2 | Usage v3 probable | Fichiers | Risque |
|---|---|---|---|
| `queryContent()` | `queryCollection()` | `pages/index.vue`, `pages/eco-conception/index.vue`, `pages/eco-conception/[slug].vue`, `components/HomeEcoArticles.vue`, `components/AppSearchInput.vue` | eleve |
| `serverQueryContent()` | API server Content v3 a confirmer | `server/routes/rss.xml.ts`, `server/routes/feed.json.ts`, `nuxt.config.ts` | eleve |
| `.only()` | `.select()` | `pages/index.vue`, `pages/eco-conception/index.vue`, `pages/eco-conception/[slug].vue`, `components/HomeEcoArticles.vue` | moyen |
| `.sort({ date: -1 })` | `.order('date', 'DESC')` | `pages/index.vue`, `pages/eco-conception/index.vue`, `components/HomeEcoArticles.vue` | moyen |
| `.sort({ date: 1 })` | `.order('date', 'ASC')` | `pages/eco-conception/[slug].vue` | moyen |
| `.sort({ $numeric: true })` | `.order('date', 'DESC')` ou tri explicite equivalent | `server/routes/rss.xml.ts`, `server/routes/feed.json.ts` | eleve |
| `.find()` | `.all()` | listes articles, feeds, sitemap | moyen |
| `.findOne()` | `.first()` | `pages/eco-conception/index.vue`, `pages/eco-conception/[slug].vue` | moyen |
| `.findSurround()` | `queryCollectionItemSurroundings()` | `pages/eco-conception/[slug].vue` | eleve |
| `._path` | `.path` | `pages/index.vue`, `pages/eco-conception/index.vue`, `pages/eco-conception/[slug].vue`, `components/HomeEcoArticles.vue`, `components/ArticleNavigation.vue`, `server/routes/rss.xml.ts`, `server/routes/feed.json.ts`, `nuxt.config.ts` | eleve |
| `.where({ $or: ... })` | syntaxe SQL-like ou `queryCollectionSearchSections()` | `components/AppSearchInput.vue` | eleve |
| `<ContentRenderer :value="article" />` | composant conserve, contrat a tester | `pages/eco-conception/[slug].vue` | moyen |
| `content:` dans `nuxt.config.ts` | `content.config.ts` + config module cible | `nuxt.config.ts` | eleve |
| `body.toc.links` | structure a confirmer | `pages/eco-conception/[slug].vue` | eleve |
| `body.children` | structure a confirmer | `pages/eco-conception/[slug].vue`, `pages/eco-conception/index.vue` | eleve |

## Points a verifier dans la documentation officielle au moment de migrer

- syntaxe exacte `queryCollection()`
- syntaxe exacte `.where()`
- API server pour RSS / feed
- syntaxe `queryCollectionItemSurroundings()`
- structure de `content.config.ts`
- disponibilite de `body.toc.links`
- comportement de `<ContentRenderer>`
- champ exact pour filtrer un fichier markdown par slug (`stem`, `path` ou autre)
- strategie `tag` actuel vs `tags`
- integration Content v3 avec `@nuxtjs/sitemap`
- gestion de `highlight` et `markdown.toc.depth` dans la configuration v3
