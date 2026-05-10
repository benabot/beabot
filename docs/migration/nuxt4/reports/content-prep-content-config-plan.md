# Plan content.config.ts — @nuxt/content v3

Date : 29 avril 2026

## Objectif

Preparer la future definition de collection `articles` sans encore creer le fichier.

## Collection cible probable

Nom :
- `articles`

Source :
- `content/articles/**/*.md`

Champs actuellement utilises dans le projet :
- title
- description
- chapo
- date
- updatedAt
- tag
- temps
- schema
- image ou img
- seo
- conversion
- body
- body.children
- body.toc.links
- path ou stem selon API v3

## Champs SEO frontmatter a preserver

Champs `seo.*` observes dans les articles :
- `seo.title`
- `seo.description`
- `seo.ogImage`
- `seo.robots`

Champs SEO consommes dans le code :
- `article.value?.seo?.title`
- `article.value?.seo?.description`
- `article.value?.seo?.ogImage`
- `article.value?.seo?.robots`

## Champs frontmatter reels observes

- `title`
- `description`
- `chapo`
- `tag`
- `seo.title`
- `seo.description`
- `seo.ogImage`
- `seo.robots`
- `schema`
- `date`
- `updatedAt`
- `temps`
- `conversion.service`
- `conversion.cta`

Voir aussi :
- `content-prep-articles-files.txt`
- `content-prep-frontmatter-sample.txt`

## Points critiques

- slug article ;
- trailing slash ;
- ordre par date ;
- tags via champ actuel `tag` ;
- TOC ;
- donnees structurees Article / BlogPosting ;
- donnees structurees FAQPage ;
- RSS ;
- JSON Feed ;
- sitemap.

## Esquisse non appliquee

Ne pas creer ce fichier dans CONTENT-PREP. Au moment de migrer, verifier la syntaxe officielle avant d'ecrire une version proche de :

```ts
// content.config.ts — esquisse indicative uniquement
export default defineContentConfig({
  collections: {
    articles: defineCollection({
      source: 'articles/**/*.md',
      type: 'page',
      schema: /* schema a definir selon API v3 officielle */,
    }),
  },
})
```
