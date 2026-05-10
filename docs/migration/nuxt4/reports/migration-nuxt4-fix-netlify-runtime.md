# FIX-NETLIFY-RUNTIME — Page éco-conception

Date : 10 mai 2026

## Objectif

Réparer l'erreur runtime observée sur Netlify dev pour `/eco-conception/` après le merge Nuxt 4 dans `dev`.

## Symptôme Netlify

- Page concernée : `/eco-conception/`
- Erreur console : `ReferenceError: Cannot access 'e' before initialization`
- Chunk observé : `/_nuxt/DX-_PrgE.js`
- Position observée : route/router Nuxt, autour de la configuration de route `/eco-conception`
- Effet visible : hydratation interrompue, filtres et recherche inactifs

Les erreurs `JSON-LD parse error` issues de `moz-extension://...` ont été ignorées : elles ne viennent pas du code applicatif.

## Cause racine

Le problème ne venait pas de `pages/eco-conception/index.vue`.

L'erreur Netlify pointait dans un chunk Nuxt/router, sur une référence importée avant initialisation. Le build local affichait aussi un warning Vite explicite :

```text
Circular chunk: vendor-nuxt -> vendor-libs -> vendor-nuxt
```

La cause retenue est le découpage manuel `vite.build.rollupOptions.output.manualChunks` dans `nuxt.config.ts`, qui forçait les internals Nuxt, Content et les dépendances dans des chunks `vendor-*`. Avec Nuxt 4 / Vite 7, ce découpage pouvait créer un cycle d'initialisation entre chunks et provoquer une TDZ runtime après minification.

## Correction appliquée

Suppression uniquement du bloc `manualChunks` custom dans `nuxt.config.ts`.

Les options conservées :
- `cssCodeSplit: true`
- `minify: 'terser'`
- `drop_console`
- `drop_debugger`

Les options non modifiées :
- `routeRules`
- `router.options`
- `content`
- `sitemap`
- `image`
- `SCSS`

## Fichiers modifiés

- `nuxt.config.ts`
- `TODO.md`
- `PROJECT_STATE.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-fix-netlify-runtime.md`

## Vérifications routeRules

`/eco-conception/` n'a pas `noScripts: true`.

Routes avec `noScripts: true` conservées :
- `/`
- `/mentions-legales/`

## Validations

- `npm test` : OK
- `npm run generate` : OK, 72 routes prerendered
- `NUXT_PUBLIC_SITE_URL=https://dev-beabot.netlify.app node scripts/seo-check.mjs` : OK après génération avec `NUXT_PUBLIC_SITE_URL=https://dev-beabot.netlify.app`
- `npm run lint:js` : OK, 94 warnings historiques, 0 erreur

## Vérification statique locale

Serveur statique :

```bash
npx serve .output/public --listen 4173
```

Page vérifiée :
- `http://localhost:4173/eco-conception/`

Résultat console :
- aucune erreur `Cannot access ... before initialization`
- aucune erreur console
- aucun warning console

Interactions vérifiées :
- filtre `Tout` : 13 articles visibles
- filtre `Éco-conception` : 12 articles visibles
- filtre `WordPress` : 7 articles visibles
- filtre `Performance` : 7 articles visibles
- recherche `WordPress` : 7 articles visibles
- recherche `images` : 2 articles visibles
- recherche sans résultat : message vide affiché
- FAQ visible : 4 items
- aucun `[object Object]`
- aucun `undefined`
- aucune URL `/articles/<slug>/`

## Confirmation dépendances

Aucune dépendance modifiée.

Fichiers non modifiés :
- `package.json`
- `package-lock.json`

## Décision

Le correctif est ciblé sur la cause runtime Netlify : abandonner le chunking manuel qui forçait les internals Nuxt dans un cycle.

Prochaine étape recommandée :
- merger manuellement `fix/netlify-eco-conception-runtime` vers `dev` ;
- redéployer Netlify dev avec clear cache ;
- vérifier `/eco-conception/` sur la preview Netlify.
