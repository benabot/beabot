# DEP-2-B — APIs serveur Content v3

Date : 2 mai 2026

## Objectif

Debloquer les APIs serveur Content v3 pour RSS, JSON Feed et sitemap, sans migrer les pages Vue ni les composants.

## Resultat

- RSS migre vers `queryCollection(event, 'articles')`.
- JSON Feed migre vers `queryCollection(event, 'articles')`.
- `_path` supprime des endpoints serveur et de la generation manuelle des routes articles sitemap.
- `npm test` passe.
- `npm run generate` avance jusqu'au prerender, mais reste bloque par l'integration interne `@nuxtjs/sitemap` v6 qui importe encore `#content/server`.
- Check SEO non lance, car `generate` ne produit pas de sortie complete.

## Fichiers modifies

- `server/routes/rss.xml.ts`
- `server/routes/feed.json.ts`
- `nuxt.config.ts`
- `scripts/check-content-queries.mjs`
- `TODO.md`
- `PROJECT_STATE.md`

## APIs v2 supprimees cote serveur

Supprime dans les endpoints projet :

- `import { serverQueryContent } from '#content/server'`
- `serverQueryContent(event, 'articles')`
- `article._path`

Encore present hors code projet :

- `@nuxtjs/sitemap` v6 contient une route interne `__sitemap__/nuxt-content-urls.js` qui importe `serverQueryContent` depuis `#content/server`.

Voir :
- `dep-2-b-api-usages-after.txt`
- `dep-2-b-sitemap-local-audit.txt`

## Nouvelle API Content v3 utilisee

RSS et JSON Feed utilisent maintenant :

```ts
import { queryCollection } from '@nuxt/content/server'

const articles = await queryCollection(event, 'articles')
  .select('title', 'description', 'date', 'tag', 'path')
  .order('date', 'DESC')
  .all()
```

Decision :
- conserver le champ frontmatter `tag` au singulier ;
- utiliser `path` fourni par la collection Content v3 ;
- conserver les URLs publiques avec trailing slash ;
- ne pas migrer les pages et composants dans ce lot.

## Etat RSS

Fichier :
- `server/routes/rss.xml.ts`

Preserve :
- XML RSS 2.0 ;
- echappement XML existant ;
- ordre `date DESC` ;
- categories depuis `article.tag` ;
- URLs publiques `https://beabot.fr/eco-conception/<slug>/`.

Validation :
- `npm test` passe, y compris le test feed existant.
- `npm run generate` ne va pas jusqu'au prerender des feeds a cause du blocage sitemap.

## Etat JSON Feed

Fichier :
- `server/routes/feed.json.ts`

Preserve :
- JSON Feed 1.1 ;
- `id` stable ;
- `url` stable avec trailing slash ;
- `tags: article.tag || []` ;
- dates ISO ;
- ordre `date DESC`.

Validation :
- `npm test` passe, y compris le test JSON Feed existant.
- `npm run generate` ne va pas jusqu'au prerender des feeds a cause du blocage sitemap.

## Etat sitemap

Fichier :
- `nuxt.config.ts`

Changement applique :
- suppression de l'import dynamique `#content/server` dans `sitemap.routes` ;
- remplacement par une source statique locale basee sur `content/articles/*.md` :

```ts
const getArticleSitemapRoutes = async (): Promise<string[]> => {
  const files = await readdir(articleContentDir)
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, '').toLowerCase())
    .map((slug) => `/eco-conception/${slug}/`)
}
```

Configuration :

```ts
sitemap: {
  hostname: siteUrl,
  gzip: true,
  exclude: ['/404/', '/404'],
  urls: getArticleSitemapRoutes,
}
```

Blocage restant :
- `@nuxtjs/sitemap` v6 detecte `@nuxt/content` et ajoute inconditionnellement la route interne `/__sitemap__/nuxt-content-urls.json`.
- Cette route importe encore `#content/server`, absent avec Content v3.
- Les options locales `excludeAppSources` / `strictNuxtContentPaths` ne suppriment pas l'enregistrement de ce handler interne d'apres le code local inspecte.

Decision :
- ne pas patcher `node_modules` ;
- ne pas ajouter d'alias de compatibilite fragile `#content/server` ;
- ne pas migrer `@nuxtjs/sitemap` dans ce lot ;
- documenter `DEP-3` comme prochaine etape obligatoire avant validation complete de `generate`.

## Garde-fou Content

Fichier :
- `scripts/check-content-queries.mjs`

Changement :
- le garde-fou reste strict pour les pages et composants encore en Content v2 ;
- il attend maintenant Content v3 cote RSS/JSON Feed/sitemap ;
- il interdit `serverQueryContent`, `#content/server` et `_path` dans les surfaces serveur migrees.

## Validation

### `npm test`

Resultat :
- OK.

Details :
- pre-build checks : 49 OK ;
- Content migration guard : OK ;
- tests Node : 18 OK.

Voir :
- `dep-2-b-tests.txt`
- `dep-2-b-tests-after-guard.txt`

### `npm run generate`

Resultat :
- bloque.

Progression :
- Nuxt build client OK ;
- Nuxt build server OK ;
- Content v3 parse les contenus : `Processed 2 collections and 13 files` ;
- blocage au prerender sur `@nuxtjs/sitemap` v6.

Erreur :

```text
Package import specifier "#content/server" is not defined imported from .../.nuxt/prerender/index.mjs
```

Source restante :
- `node_modules/@nuxtjs/sitemap/dist/runtime/nitro/routes/__sitemap__/nuxt-content-urls.js`

Voir :
- `dep-2-b-generate.txt`
- `dep-2-b-generate-summary.txt`
- `dep-2-b-sitemap-local-audit.txt`

### Check SEO

Resultat :
- non lance.

Raison :
- `npm run generate` ne termine pas ; la sortie `.output/public` n'est pas fiable pour ce lot.

## Prochaine erreur bloquante eventuelle

Le blocage actuel empeche encore d'atteindre les pages Vue pendant `generate`.

Apres `DEP-3` sitemap, la prochaine surface probable est :
- `DEP-2-C / Content pages APIs` : `queryContent()` dans les pages et composants ;
- `findSurround()` dans `pages/eco-conception/[slug].vue` ;
- `_path` restant dans les pages/composants.

## Decision

- `CONTENT-3` RSS : fait.
- `CONTENT-4` JSON Feed : fait.
- `CONTENT-5` sitemap : partiel, blocage module v6 documente.
- `DEP-2` global : non termine.
- `DEP-3` sitemap : necessaire avant validation complete de `npm run generate`.
