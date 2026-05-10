# CONTENT-DOCS / DEP-2-PREP — Audit documentation officielle Nuxt Content v3

Date : 29 avril 2026

## Objectif

Preparer la migration `@nuxt/content` v2 -> v3 avec la documentation officielle, sans installation, sans creation de `content.config.ts` et sans migration applicative.

## Contexte local

- Branche : `chore/nuxt4-migration`
- Nuxt : `4.4.2`
- Content actuel : v2 encore en place
- CONFIG-AUDIT termine : `features.inlineStyles: false`, tests/generate/SEO OK
- Articles Markdown : 13 fichiers dans `content/articles/*.md`
- Champs frontmatter reels observes : `title`, `description`, `chapo`, `tag`, `seo`, `schema`, `date`, `updatedAt`, `temps`, `conversion`

## Sources officielles consultees

- Migration v2 -> v3 : https://content.nuxt.com/docs/getting-started/migration
- Installation : https://content.nuxt.com/docs/getting-started/installation
- Configuration : https://content.nuxt.com/docs/getting-started/configuration
- Collections : https://content.nuxt.com/docs/collections/define
- Sources de collections : https://content.nuxt.com/docs/collections/sources
- Types de collections : https://content.nuxt.com/docs/collections/types
- Validateurs de schema : https://content.nuxt.com/docs/collections/validators
- `queryCollection` : https://content.nuxt.com/docs/utils/query-collection
- `queryCollectionItemSurroundings` : https://content.nuxt.com/docs/utils/query-collection-item-surroundings
- `queryCollectionSearchSections` : https://content.nuxt.com/docs/utils/query-collection-search-sections
- `<ContentRenderer>` : https://content.nuxt.com/docs/components/content-renderer
- Static hosting : https://content.nuxt.com/docs/deploy/static

## Conclusions officielles utiles

- `queryContent()` est remplace par `queryCollection()`.
- `queryCollection()` requiert une collection definie dans `content.config.ts`.
- `findSurround()` est remplace par `queryCollectionItemSurroundings()`.
- `searchContent()` est remplace par `queryCollectionSearchSections()`.
- `serverQueryContent()` n'est plus l'API cible : en Nitro, `queryCollection(event, 'collection')` et les utilitaires associes recoivent `event` en premier argument.
- `._path` devient `.path`; la documentation indique que les champs internes prefixees `_` sont supprimes ou renommes.
- `<ContentRenderer :value="page" />` reste le composant de rendu Markdown principal.
- Les collections de type `page` generent notamment `path`, `title`, `description`, `seo`, `body`, `navigation`.
- `body.toc` reste dans le schema de page genere ; `body.children` et `body.toc.links` doivent quand meme etre verifies sur les articles reels apres installation.
- En static hosting, Nuxt Content v3 fonctionne avec prerendering et charge une base SQLite WASM en navigation client.

## `content.config.ts` cible

Ne pas creer ce fichier dans cette etape. Au moment de `DEP-2`, la collection minimale cible est :

```ts
import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'page',
      source: {
        include: 'articles/**/*.md',
        prefix: '/eco-conception',
      },
      schema: z.object({
        chapo: z.string().optional(),
        date: z.date(),
        updatedAt: z.date().optional(),
        tag: z.array(z.string()).default([]),
        temps: z.number().optional(),
        schema: z.string().optional(),
        image: z.string().optional(),
        img: z.string().optional(),
        conversion: z
          .object({
            service: z.string().optional(),
            cta: z.boolean().optional(),
          })
          .optional(),
        seo: z
          .object({
            title: z.string().optional(),
            description: z.string().optional(),
            ogImage: z.string().optional(),
            robots: z.string().optional(),
          })
          .optional(),
      }),
    }),
  },
})
```

### Decision source

Utiliser une source objet plutot qu'une chaine simple :

```ts
source: {
  include: 'articles/**/*.md',
  prefix: '/eco-conception',
}
```

Raison :
- les patterns `source` sont relatifs au dossier racine `content/`, donc `content/articles/*.md` devient `articles/**/*.md` ;
- le prefix explicite `/eco-conception` aligne `path` sur les URLs publiques existantes ;
- cela evite de continuer a transformer `/articles/<slug>` vers `/eco-conception/<slug>` dans les pages, flux et sitemap.

### Point dependances validateur

La documentation officielle recommande d'importer `z` depuis `zod`, et `zod` n'est pas installe en dependance directe aujourd'hui. Comme ce prompt interdit toute installation, il faut decider au lancement de `DEP-2` :
- soit autoriser explicitement l'ajout du validateur requis par la documentation officielle ;
- soit demarrer avec une collection sans `schema` custom, au prix d'une migration plus fragile des champs `tag`, `date`, `updatedAt`, `temps`, `conversion` et `seo`.

Recommandation : pour preserver les champs actuels en acces direct et obtenir des types fiables, autoriser le schema avec validateur dans le lot `DEP-2` si la version Content installee ne fournit pas deja une solution compatible.

## Mapping v2 -> v3 confirme

| Usage actuel | Cible v3 documentee | Decision BeAbot |
|---|---|---|
| `queryContent('articles').only([...]).sort({ date: -1 }).limit(n).find()` | `queryCollection('articles').select(...).order('date', 'DESC').limit(n).all()` | utiliser pour homepage, archive, `HomeEcoArticles` |
| `queryContent('articles', slug).findOne()` | `queryCollection('articles').path('/eco-conception/' + slug).first()` | preferer `.path()` avec le prefix de collection |
| `queryContent('articles', 'faq-eco-conception').findOne()` | `queryCollection('articles').path('/eco-conception/faq-eco-conception').first()` | conserver extraction FAQ apres verification du body AST |
| `.findSurround(article._path)` | `queryCollectionItemSurroundings('articles', article.path, { fields: [...] }).order(...)` | utiliser pour prev/next |
| `serverQueryContent(event, 'articles')` | `queryCollection(event, 'articles')` | utiliser dans `/rss.xml` et `/feed.json` |
| `.where({ $or: [...] })` | `.where(...).orWhere(...)` ou `queryCollectionSearchSections()` | preferer d'abord requete titre/description simple ; evaluer search sections si recherche plein texte |
| `.only(...)` | `.select(...)` | remplacer champ par champ |
| `.sort(...)` | `.order(field, 'ASC'/'DESC')` | date DESC listes/feeds, date ASC ou DESC a confirmer pour surroundings |
| `.find()` | `.all()` | listes et feeds |
| `.findOne()` | `.first()` | article et FAQ |
| `._path` | `.path` | remplacer partout apres migration Content |

## Champs internes

Etat local :
- `_path` : present dans pages, composants, feeds, sitemap et garde-fou.
- `_dir` : aucune occurrence applicative trouvee.
- `_draft` : aucune occurrence applicative trouvee.
- `_partial` : aucune occurrence applicative trouvee.
- `_locale` : aucune occurrence applicative trouvee.

Decision :
- ne migrer que `_path -> path` pour le code existant ;
- ne pas introduire de filtres `_draft` / `_partial` tant que le projet ne les utilise pas ;
- verifier si des fichiers `_dir.yml` existent avant `DEP-2` ; s'ils apparaissent plus tard, la doc indique une migration vers `.navigation.yml`.

## Preservation par surface projet

### Liste articles homepage

Cible :

```ts
queryCollection('articles')
  .select('title', 'description', 'tag', 'path', 'date')
  .order('date', 'DESC')
  .limit(2)
  .all()
```

Preserver :
- ordre date descendant ;
- `tag` au singulier, car c'est le frontmatter reel du projet ;
- liens publics avec trailing slash via `AppLink` / `normalizeInternalHref`.

### Archive `/eco-conception/`

Cible :

```ts
queryCollection('articles')
  .select('title', 'description', 'tag', 'path', 'date', 'updatedAt')
  .order('date', 'DESC')
  .all()
```

Preserver :
- filtres `?tag=...#eco-archive` ;
- `availableTags` base sur `article.tag` ;
- recherche locale de l'archive ;
- URLs `/eco-conception/<slug>/`.

### Page article `[slug]`

Cible :

```ts
queryCollection('articles')
  .path(`/eco-conception/${slug}`)
  .first()
```

Preserver :
- `title`, `description`, `chapo`, `date`, `updatedAt`, `temps`, `schema`, `seo`, `tag`, `body` ;
- canonical, Open Graph, Twitter Card ;
- JSON-LD `BlogPosting` / `FAQPage` ;
- extraction FAQ depuis `body.children`.

Point critique :
- la doc montre `path` sans trailing slash. Garder les queries Content sans slash final si necessaire, mais normaliser les liens publics sortants avec les helpers projet.

### Navigation precedent / suivant

Cible :

```ts
queryCollectionItemSurroundings('articles', article.path, {
  fields: ['title'],
}).order('date', 'DESC')
```

Preserver :
- contrat `[previousItem, nextItem]` ;
- `ArticleNavigation.vue` doit consommer `path` ;
- ordre exact a valider visuellement et par test, car le sens precedent/suivant peut changer selon `ASC`/`DESC`.

### Tags

Decision :
- conserver `tag: string[]` au singulier pour eviter une migration editoriale ;
- ne pas renommer en `tags` pendant `DEP-2`, sauf lot editorial separe ;
- verifier RSS/JSON Feed : continuer a exposer `tags: article.tag || []`.

### Recherche `AppSearchInput`

Option A, proche de l'existant :

```ts
queryCollection('articles')
  .where('title', 'LIKE', `%${query}%`)
  .orWhere((q) => q.where('description', 'LIKE', `%${query}%`))
  .limit(6)
  .all()
```

Option B, plus Content v3 :

```ts
queryCollectionSearchSections('articles', {
  minHeading: 'h1',
  maxHeading: 'h3',
  extraFields: ['description', 'tag'],
})
```

Decision recommandee :
- lot recherche dedie ;
- commencer par Option A si le besoin reste titre/description ;
- envisager Option B uniquement si l'on veut une vraie recherche plein texte par sections.

### RSS `/rss.xml`

Cible serveur :

```ts
const articles = await queryCollection(event, 'articles')
  .select('title', 'description', 'date', 'updatedAt', 'tag', 'path')
  .order('date', 'DESC')
  .all()
```

Preserver :
- XML parseable ;
- dates valides ;
- categories depuis `tag` ;
- URL publique `https://beabot.fr${path}/` avec normalisation trailing slash ;
- echappement XML existant.

### JSON Feed `/feed.json`

Cible serveur :

```ts
const articles = await queryCollection(event, 'articles')
  .select('title', 'description', 'date', 'updatedAt', 'tag', 'path')
  .order('date', 'DESC')
  .all()
```

Preserver :
- JSON parseable ;
- `tags: article.tag || []` ;
- `url` / `id` stables avec trailing slash ;
- dates ISO.

### Sitemap routes

Point le plus incertain :
- la doc Content v3 confirme `queryCollection(event, ...)` pour Nitro ;
- `nuxt.config.ts` n'a pas d'event H3 evident dans `sitemap.routes`.

Decision :
- ne pas tenter un remplacement direct de `serverQueryContent` dans `nuxt.config.ts` sans verifier `@nuxtjs/sitemap` au moment de `DEP-3` ;
- dans le lot feeds/sitemap, preferer soit l'integration sitemap compatible Content v3, soit une source de routes generee dans un contexte serveur compatible ;
- conserver la contrainte trailing slash dans `/sitemap.xml`.

### Sommaire article

La collection `page` inclut `body` avec `toc` dans le schema genere. Cible :
- conserver `article.body.toc.links` si disponible ;
- sinon adapter le composant au format exact observe apres installation.

Validation obligatoire :
- un article avec H2/H3 doit afficher le sommaire ;
- `content.build.markdown.toc.depth: 3` doit remplacer l'ancienne config `content.markdown.toc.depth`.

### JSON-LD articles

Preserver :
- `BlogPosting` pour les articles standards ;
- `FAQPage` quand `schema === 'FAQPage'` ;
- dates `datePublished` / `dateModified` ;
- `mainEntityOfPage` et `url` avec trailing slash ;
- extraction FAQ depuis `body.children` apres verification du AST v3.

### Trailing slashes

Decision :
- Content v3 `path` doit servir d'identifiant sans transformation `_path` ;
- les liens publics doivent rester normalises par les helpers projet (`AppLink`, `withTrailingSlash`, `absoluteUrl`) ;
- les queries `.path()` doivent probablement utiliser le chemin sans slash final, a verifier par generation.

## Configuration Content v3 a reporter

L'ancienne config v2 :

```ts
content: {
  highlight: { theme: 'dark-plus', preload: [...] },
  markdown: { toc: { depth: 3, searchDepth: 3 } }
}
```

Cible v3 probable dans `nuxt.config.ts` :

```ts
content: {
  build: {
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
      highlight: {
        theme: 'dark-plus',
        langs: [
          'javascript',
          'js',
          'typescript',
          'ts',
          'css',
          'scss',
          'html',
          'vue',
          'bash',
          'shell',
          'json',
          'yaml',
          'markdown',
          'md',
        ],
      },
      remarkPlugins: {},
      rehypePlugins: {},
    },
  },
}
```

Notes :
- `preload` v2 devient a revalider contre `highlight.langs` v3 ;
- `remarkPlugins` est documente comme objet en v3, pas tableau ;
- `rehypePlugins` est documente comme objet en v3.

## Ordre recommande apres audit docs

1. `DEP-2 / Lot 1` : installer uniquement `@nuxt/content@3`, puis creer `content.config.ts` et adapter la config markdown/highlight minimale.
2. `CONTENT-1` : migrer homepage, archive et `HomeEcoArticles`.
3. `CONTENT-2` / `CONTENT-8` / `CONTENT-11` : migrer page article, surroundings, renderer, TOC, JSON-LD.
4. `CONTENT-6` : migrer recherche.
5. `CONTENT-3` / `CONTENT-4` / `CONTENT-5` : migrer RSS, JSON Feed et sitemap.
6. `CONTENT-7` : nettoyer `_path`.
7. Garde-fous/tests : inverser `scripts/check-content-queries.mjs` pour interdire les APIs v2 restantes.

## Validation de cette etape

- Documentation only.
- Aucun fichier applicatif modifie.
- Aucun `npm install`.
- Aucun `content.config.ts` cree.
- Aucune validation runtime necessaire.

## Points de vigilance pour `DEP-2`

- Ne pas melanger `DEP-2` avec sitemap/image/eslint.
- Verifier la decision validateur (`zod`) avant d'ecrire le schema strict.
- Verifier que les `path` generes par `prefix: '/eco-conception'` correspondent exactement aux routes publiques.
- Ajouter ou adapter `server/tsconfig.json` seulement si les imports serveur Content v3 le demandent.
- Garder `tag` au singulier tant qu'aucun lot editorial ne renomme le frontmatter.
- Tester `queryCollectionItemSurroundings` avec l'ordre reel attendu par l'interface.
