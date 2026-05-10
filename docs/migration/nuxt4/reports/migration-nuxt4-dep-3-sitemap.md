# DEP-3 — Sitemap Content v3

Date : 2 mai 2026

## Objectif

Debloquer la generation statique cote sitemap apres migration `@nuxt/content` v3, avec le plus petit changement possible.

## Cause exacte du blocage

`@nuxtjs/sitemap@6.1.5` enregistrait automatiquement une route interne Content des que `@nuxt/content` etait present :

- route : `/__sitemap__/nuxt-content-urls.json`
- fichier module : `node_modules/@nuxtjs/sitemap/dist/runtime/nitro/routes/__sitemap__/nuxt-content-urls.js`
- import obsolete : `#content/server`
- API obsolete : `serverQueryContent(e).find()`

Preuve locale :

- `dep-3-sitemap-local-audit-before.txt`
- `dep-3-sitemap-module-context-before.txt`

`excludeAppSources` ne suffisait pas : l'option filtre les sources applicatives apres leur declaration, mais la route interne obsolete etait enregistree avant le filtrage.

## Changement applique

Mise a jour ciblee du seul module sitemap :

```bash
npm install @nuxtjs/sitemap@8.0.15 --save-exact
```

Version verifiee avant installation :

- `dep-3-sitemap-npm-view-latest.txt`
- `dep-3-sitemap-npm-view-latest-details.txt`

`@nuxtjs/sitemap@8.0.15` contient une integration Content v3 :

- handler v3 : `runtime/server/routes/__sitemap__/nuxt-content-urls-v3`
- API : `queryCollection(e, collection)`
- handler v2 conserve separement pour compatibilite, mais non utilise avec `@nuxt/content@3.13.0`

Preuve locale apres installation :

- `dep-3-sitemap-local-audit-after.txt`
- `dep-3-sitemap-v8-content-integration.txt`

## Fichiers modifies

- `package.json`
- `package-lock.json`
- `TODO.md`
- `PROJECT_STATE.md`

## Dependances modifiees

Dependance directe modifiee :

- `@nuxtjs/sitemap` : `^6.1.1` -> `8.0.15`

Dependances non migrees dans ce lot :

- `@nuxt/image`
- `@nuxt/eslint`

Commande non lancee :

- `npm audit fix`

## Configuration sitemap

Aucun changement fonctionnel dans `nuxt.config.ts`.

La configuration existante est conservee :

- `hostname: siteUrl`
- `gzip: true`
- `exclude: ['/404/', '/404']`
- `urls: getArticleSitemapRoutes`
- hooks `sitemap:resolved` et `sitemap:output`

## Etat des routes articles sitemap

`npm run generate` produit maintenant `.output/public/sitemap.xml`.

Verification :

- `dep-3-sitemap-output-files.txt`
- `dep-3-sitemap-articles-check.txt`
- `dep-3-sitemap-article-url-count.txt`

Resultat :

- `sitemap.xml` genere
- 14 URLs `/eco-conception/` presentes dans le sitemap
- URLs absolues normalisees avec trailing slash
- `/404/` et `/404` restent exclus du sitemap

## Validation

- `npm test` : OK
  - voir `dep-3-sitemap-tests.txt`
- `npm run generate` : commande terminee avec code 0, `.output/public` genere
  - voir `dep-3-sitemap-generate.txt`
  - routes prerendered : 55
- check SEO : OK
  - voir `dep-3-sitemap-seo-check.txt`

## Warnings ou erreurs observees

Warnings non bloquants deja connus :

- `[plugin nuxt:module-preload-polyfill] Sourcemap is likely to be incorrect`
- `Circular chunk: vendor-nuxt -> vendor-libs -> vendor-nuxt`

Nouveau warning non bloquant sitemap v8 :

- `No dynamic sources detected. Consider enabling zeroRuntime to reduce server bundle size.`
- Decision : reporte, aucune optimisation runtime dans DEP-3.

Erreurs Content restantes pendant le prerender :

- `queryContent is not defined`
  - surface : pages Vue non migrees, attendu avant `DEP-2-C / Content pages APIs`
  - decision : reporte, aucune migration page dans DEP-3
- `no such column: "date" - should this be a string literal in single-quotes?`
  - surface : requetes Content v3 serveur RSS/JSON Feed avec collection `articles` encore sans schema frontmatter
  - effet : `.output/public/rss.xml` et `.output/public/feed.json` ne sont pas generes dans ce lot
  - decision : reporte vers le prochain lot Content, sans correction en cascade dans DEP-3

Resume des erreurs :

- `dep-3-sitemap-generate-errors-summary.txt`

## Decision

- `DEP-3` : fait cote compatibilite sitemap Content v3.
- La validation sitemap est debloquee : `/sitemap.xml` est genere et contient les URLs articles.
- La validation globale Content reste partielle tant que les pages Vue et le schema/requetes Content v3 ne sont pas migres.

## Prochaine étape recommandee

Ouvrir `DEP-2-C / Content pages APIs` :

- declarer les champs frontmatter necessaires dans `content.config.ts` si requis par Content v3 (`date`, `updatedAt`, `tags`, `image`, `seo`, etc.) ;
- migrer les listes articles et pages Vue de `queryContent()` vers `queryCollection()` ;
- migrer `findSurround()` ;
- verifier RSS/JSON Feed apres schema complet ;
- verifier recherche et `_path` -> `path` dans les lots dedies.
