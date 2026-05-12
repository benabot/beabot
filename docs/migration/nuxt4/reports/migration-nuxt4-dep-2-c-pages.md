# DEP-2-C — Schéma et pages Content v3

Date : 2 mai 2026

## Objectif

Migrer les requêtes Content des pages et composants principaux vers Content v3, enrichir le schéma `articles`, et revalider les sorties statiques sans déplacer le projet vers `app/`.

## Fichiers modifiés

- `content.config.ts`
- `package.json`
- `package-lock.json`
- `pages/index.vue`
- `pages/eco-conception/index.vue`
- `pages/eco-conception/[slug].vue`
- `components/HomeEcoArticles.vue`
- `components/ArticleNavigation.vue`
- `scripts/check-content-queries.mjs`
- `TODO.md`
- `PROJECT_STATE.md`

## Schéma Content

La collection `articles` conserve :

- `type: 'page'`
- `source: { include: 'articles/**/*.md', prefix: '/eco-conception' }`

Le schéma expose maintenant les champs frontmatter utilisés par les pages, RSS, JSON Feed et sitemap :

- `title`
- `description`
- `chapo`
- `date`
- `updatedAt`
- `tag`
- `temps`
- `schema`
- `seo`
- `conversion`
- `image`
- `img`

Les champs restent permissifs pour ne pas casser les anciens articles. Les dates utilisent `z.coerce.date().optional()`, et `tag` garde le singulier historique avec `z.array(z.string()).default([])`.

## Décision zod

`zod` était disponible en transitif via `@nuxt/content`, mais pas en dépendance directe du projet. Comme `content.config.ts` importe maintenant `z` explicitement, `zod@3.25.76` a été ajouté en dépendance directe pour éviter un import transitif fragile.

Commande exécutée :

```bash
npm install zod@3.25.76 --save-exact
```

Aucune autre dépendance directe n'a été ajoutée ou migrée dans ce lot.

## APIs Content v2 supprimées

Supprimées des pages et composants migrés :

- `queryContent()`
- `.only()`
- `.sort({ date: -1 })`
- `.find()`
- `.findOne()`
- `findSurround()`
- `._path`

Exception temporaire documentée :

- `components/AppSearchInput.vue` conserve `queryContent('articles')` et `.where({ $or: ... })` pour le futur lot `CONTENT-6 / Recherche Content v3`.

## APIs Content v3 utilisées

- `queryCollection('articles')`
- `.select(...)`
- `.order('date', 'DESC')`
- `.all()`
- `.path('/eco-conception/...')`
- `.first()`
- `queryCollectionItemSurroundings('articles', article.path, { fields: ['title'] })`
- `path`

## État par surface

### Homepage articles

`pages/index.vue` et `components/HomeEcoArticles.vue` utilisent `queryCollection('articles')`, limitent à 2 articles, conservent les champs affichés et normalisent les liens via `withTrailingSlash(article.path)`.

### Archive `/eco-conception/`

`pages/eco-conception/index.vue` utilise `queryCollection('articles')`, `.select(...)`, `.order('date', 'DESC')` et `.all()`. Les filtres par tags, les featured cards, la FAQ et les URLs `/eco-conception/<slug>/` sont préservés.

### Page article `[slug]`

`pages/eco-conception/[slug].vue` charge l'article avec :

```ts
queryCollection('articles').path('/eco-conception/' + slug).first()
```

Le rendu `<ContentRenderer :value="article" />`, les métas SEO, les JSON-LD Article/FAQ, la canonical, la Twitter Card, l'Open Graph et les trailing slashes restent générés.

### Navigation précédent / suivant

`findSurround()` est remplacé par `queryCollectionItemSurroundings()`. `ArticleNavigation` consomme désormais `prev.path` et `next.path`.

### RSS

`/rss.xml` est généré. L'erreur `no such column: "date"` disparaît avec le schéma enrichi. Les liens publics, dates et catégories sont présents.

### JSON Feed

`/feed.json` est généré avec 13 items. Le premier item vérifié est `https://beabot.fr/eco-conception/audit-site-web/`, avec tags et URL trailing slash.

### Sitemap

`/sitemap.xml` est généré et contient 14 URLs `/eco-conception/` incluant le hub et les articles.

## Garde-fous

`scripts/check-content-queries.mjs` vérifie maintenant le contrat Content v3 :

- pages et composants migrés en `queryCollection`
- absence d'usages v2 inattendus dans les fichiers applicatifs
- exception temporaire explicite pour `components/AppSearchInput.vue`
- schéma `content.config.ts` enrichi avec `date` et `tag`
- sorties générées sans `[object Object]`

## Validation

- `npm test` avant nettoyage `.output` : échec sur sortie générée stale de DEP-3.
- `.output` supprimé puis `npm test` : OK avec checks applicatifs et tests Node partiels.
- `npm run generate` : OK.
- `npm test` après génération : OK, 18 tests passés.
- Check SEO : OK.
- Routes prerendered : 72.

Voir :

- `dep-2-c-tests-after-clean-output.txt`
- `dep-2-c-generate.txt`
- `dep-2-c-tests-after-generate.txt`
- `dep-2-c-seo-check.txt`
- `dep-2-c-output-files.txt`
- `dep-2-c-output-error-scan.txt`

## Warnings non bloquants

- `[@nuxtjs/sitemap] No dynamic sources detected. Consider enabling zeroRuntime`.
- `[plugin nuxt:module-preload-polyfill] Sourcemap is likely to be incorrect`.
- `Circular chunk: vendor-nuxt -> vendor-libs -> vendor-nuxt`.

Ces sujets restent hors périmètre DEP-2-C.

## Décision

- `DEP-2-C` : fait.
- `DEP-2` global : encore partiel tant que la recherche `AppSearchInput.vue` reste en API Content v2.
- Prochaine étape recommandée : `CONTENT-6 / Recherche Content v3`, puis audit final des usages Content v2 restants avant de clôturer `DEP-2`.

## Contraintes respectées

- Aucun déplacement vers `app/`.
- Aucune migration `@nuxt/image`.
- Aucune migration `@nuxt/eslint`.
- Aucune migration recherche avancée dans ce lot.
- Aucun refactor design ou CSS.
- Aucune optimisation chunks.
- Aucun `npm audit fix`.
