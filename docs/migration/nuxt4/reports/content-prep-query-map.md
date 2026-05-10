# Cartographie requetes Content v2

Date : 29 avril 2026

Note : aucune documentation officielle Content v3 n'a ete consultee pendant cette etape. Toutes les APIs v3 ci-dessous sont des cibles probables, a verifier sur documentation officielle avant implementation.

## Liste articles

### Fichiers concernes

- `pages/index.vue`
- `pages/eco-conception/index.vue`
- `components/HomeEcoArticles.vue`

### API actuelle

```ts
queryContent('articles')
  .only([...])
  .sort({ date: -1 })
  .limit(...)
  .find()
```

### API v3 cible probable

```ts
queryCollection('articles')
  .select(...)
  .order('date', 'DESC')
  .limit(...)
  .all()
```

### Champs a preserver

- `title`
- `description`
- `date`
- `updatedAt`
- `tag`
- `path`
- `seo`

### Risques

- `_path` devient probablement `path`.
- Le projet utilise `tag` au singulier dans le frontmatter, pas `tags`.
- L'ordre de tri par date doit rester stable.
- Les liens publics doivent rester `/eco-conception/<slug>/`.

## Article par slug

### Fichiers concernes

- `pages/eco-conception/[slug].vue`

### API actuelle

```ts
queryContent('articles', route.params.slug).findOne()
```

### API v3 cible probable

```ts
queryCollection('articles')
  .where('stem', '=', route.params.slug)
  .first()
```

### Champs a preserver

- `title`
- `description`
- `chapo`
- `tag`
- `date`
- `updatedAt`
- `temps`
- `schema`
- `seo`
- `body`
- `body.children`
- `body.toc.links`

### Risques

- Le champ exact a filtrer (`stem`, `path` ou equivalent) est a confirmer.
- Le rendu de `<ContentRenderer>` et la forme de `body` doivent etre verifies.
- Les pages article alimentent canonical, Open Graph et JSON-LD.

## FAQ article specifique

### Fichiers concernes

- `pages/eco-conception/index.vue`
- `pages/eco-conception/[slug].vue`

### API actuelle

```ts
queryContent('articles', 'faq-eco-conception').findOne()
```

### API v3 cible probable

```ts
queryCollection('articles')
  .where('stem', '=', 'faq-eco-conception')
  .first()
```

### Champs a preserver

- `schema`
- `body.children`
- `title`
- `description`
- `seo`

### Risques

- L'extraction FAQ depend de la structure AST `body.children`.
- La page article bascule en JSON-LD `FAQPage` si `schema === 'FAQPage'`.

## Navigation precedent / suivant

### Fichiers concernes

- `pages/eco-conception/[slug].vue`
- `components/ArticleNavigation.vue`

### API actuelle

```ts
queryContent('articles')
  .only(['title', '_path'])
  .sort({ date: 1 })
  .findSurround(article.value._path)
```

### API v3 cible probable

```ts
queryCollectionItemSurroundings('articles', article.value.path, {
  fields: ['title', 'path'],
})
```

### Champs a preserver

- `title`
- `path`

### Risques

- Syntaxe exacte et ordre des arguments a confirmer.
- Le tri precedent/suivant doit rester coherent.
- `ArticleNavigation.vue` consomme encore `_path`.

## Recherche articles

### Fichiers concernes

- `components/AppSearchInput.vue`
- `pages/eco-conception/index.vue` pour la recherche locale deja hydratee par la liste articles

### API actuelle

```ts
queryContent('articles')
  .where({
    $or: [
      { title: { $contains: newQuery } },
      { description: { $contains: newQuery } },
    ],
  })
  .limit(6)
  .find()
```

### API v3 cible probable

```ts
queryCollection('articles')
  .where(/* syntaxe v3 a confirmer */)
  .limit(6)
  .all()
```

ou :

```ts
queryCollectionSearchSections('articles', /* options a confirmer */)
```

### Champs a preserver

- `title`
- `description`
- `slug` ou `path`

### Risques

- `$or` et `$contains` sont les points les plus cassants.
- La recherche client doit rester sans crash si la requete est vide.

## RSS XML

### Fichiers concernes

- `server/routes/rss.xml.ts`
- `tests/feeds.test.mjs`

### API actuelle

```ts
serverQueryContent(event, 'articles')
  .sort({ $numeric: true })
  .find()
```

### API v3 cible probable

```ts
// API server Content v3 a confirmer
queryCollection('articles')
  .select(...)
  .order('date', 'DESC')
  .all()
```

### Champs a preserver

- `title`
- `description`
- `date`
- `createdAt`
- `tag`
- `path`

### Risques

- `serverQueryContent` est supprime ou remplace.
- Le flux construit les slugs depuis `_path`.
- L'echappement XML doit rester intact.

## JSON Feed

### Fichiers concernes

- `server/routes/feed.json.ts`
- `tests/feeds.test.mjs`

### API actuelle

```ts
serverQueryContent(event, 'articles')
  .sort({ $numeric: true })
  .find()
```

### API v3 cible probable

```ts
// API server Content v3 a confirmer
queryCollection('articles')
  .select(...)
  .order('date', 'DESC')
  .all()
```

### Champs a preserver

- `title`
- `description`
- `date`
- `createdAt`
- `tag`
- `path`

### Risques

- Meme risque server que RSS.
- Les dates ISO et les tags tableau sont couverts par les tests.

## Sitemap dynamique

### Fichiers concernes

- `nuxt.config.ts`
- `scripts/seo-check.mjs`

### API actuelle

```ts
const { serverQueryContent } = await import('#content/server')
const articles = await serverQueryContent('articles').find()
return articles
  .map((article) => article._path?.split('/').pop())
  .filter(Boolean)
  .map((slug) => `/eco-conception/${slug}/`)
```

### API v3 cible probable

```ts
// API server ou integration sitemap/content a confirmer
```

### Champs a preserver

- `path` ou slug derive

### Risques

- Point SEO critique : les articles doivent rester dans `/sitemap.xml`.
- Verifier si la version cible de `@nuxtjs/sitemap` sait lire Content v3 automatiquement.

## Tags et filtres

### Fichiers concernes

- `pages/eco-conception/index.vue`
- `pages/eco-conception/[slug].vue`
- `components/HomeEcoArticles.vue`
- `pages/index.vue`
- `server/routes/rss.xml.ts`
- `server/routes/feed.json.ts`

### API actuelle

Les articles exposent `tag` depuis le frontmatter.

### API v3 cible probable

Conserver le champ `tag` dans la collection ou prevoir une normalisation vers `tags`.

### Champs a preserver

- `tag`

### Risques

- Les docs et exemples Content utilisent souvent `tags`, mais le contenu BeAbot utilise `tag`.
- Les tags alimentent filtres, liens, RSS et JSON Feed.

## Rendu ContentRenderer

### Fichiers concernes

- `pages/eco-conception/[slug].vue`

### API actuelle

```vue
<ContentRenderer
  v-if="article"
  ref="contentEl"
  class="text-gris2 mt-2"
  :value="article"
/>
```

### API v3 cible probable

```vue
<ContentRenderer :value="article" />
```

### Champs a preserver

- `body`
- rendu HTML des noeuds markdown

### Risques

- Verifier si `article` complet ou `article.body` doit etre passe.
- Les styles scopes utilisent `:deep()` sur le HTML rendu.

## TOC / sommaire article

### Fichiers concernes

- `pages/eco-conception/[slug].vue`

### API actuelle

```vue
<li v-for="link of article?.body?.toc?.links" :key="link.id">
```

### API v3 cible probable

```ts
article.body.toc.links
```

### Champs a preserver

- `body.toc.links[].id`
- `body.toc.links[].depth`
- `body.toc.links[].text`

### Risques

- Disponibilite et forme de `body.toc.links` a confirmer.
- Le scroll spy depend des ids generes sur `article h2[id], article h3[id]`.
