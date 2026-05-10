# FIX-PREVIEW — Page éco-conception après Content v3

Date : 10 mai 2026

## Objectif

Corriger les régressions visibles de `/eco-conception/` avant tout merge vers `dev`, sans refactor design, sans migration CSS et sans changement de dépendance.

## Cause racine filtres

La page supposait que `article.tag` était toujours un tableau. Après la migration Content v3, cette hypothèse restait trop fragile pour l'hydratation et les interactions client.

Correction :
- normalisation locale de `tag` via `articleTags(article)` ;
- prise en charge de `string`, `string[]`, `null` ou absence de champ ;
- conservation du champ éditorial `tag` sans renommage en `tags`.

## Cause racine recherche

La recherche locale construisait son index avec `...(article.tag || [])`, donc avec la forme brute du champ Content. Elle utilise maintenant les tags normalisés affichés par la page.

Comportement conservé :
- requête vide : tous les articles du filtre actif restent visibles ;
- recherche sur `title` ;
- recherche sur `description` ;
- recherche sur tags normalisés ;
- aucun appel `queryCollectionSearchSections()` ajouté.

## Cause racine FAQ disparue

La FAQ était encore lue via `faqArticle.body.children`, forme Content v2 / ancienne structure Markdown. Content v3 expose le corps rendu dans `body.value`.

Correction :
- lecture prioritaire de `body.value` ;
- compatibilité conservée avec `body.children` ;
- support du format de noeuds Content v3 pour extraire les `h2` et paragraphes.

## Fichiers modifiés

- `pages/eco-conception/index.vue`
- `scripts/check-content-queries.mjs`
- `TODO.md`
- `PROJECT_STATE.md`

## Corrections appliquées

- Normalisation locale des tags d'article.
- Recherche locale basée sur `title`, `description` et tags normalisés.
- Extraction FAQ compatible Content v3 `body.value`.
- Garde-fou Content ciblé pour conserver `articleTags(article)`, `body.value` et `faqBodyChildren` sur la page pilier.

## Dépendances

- Aucune dépendance modifiée.
- `package.json` inchangé.
- `package-lock.json` inchangé.

## Validation

- `npm test` : OK.
- `npm run generate` : OK, 72 routes prerendered.
- `NUXT_PUBLIC_SITE_URL=https://beabot.fr node scripts/seo-check.mjs` : OK.
- `npm run lint:js` : OK, 0 erreur, 94 warnings historiques.

Warnings non bloquants observés pendant `generate` :
- sourcemap `nuxt:module-preload-polyfill` ;
- circular chunk `vendor-nuxt -> vendor-libs -> vendor-nuxt` ;
- sitemap `zeroRuntime`.

## Vérifications visuelles

Serveur utilisé :
- `npm run dev -- --host 127.0.0.1 --port 3000`

Page vérifiée :
- `http://127.0.0.1:3000/eco-conception/`

Résultats :
- filtre `Tout` : 13 articles visibles ;
- filtre `Éco-conception` : 12 articles visibles ;
- filtre `WordPress` : 7 articles visibles ;
- filtre `Performance` : 7 articles visibles ;
- recherche `WordPress` : 7 articles visibles ;
- recherche `images` : 2 articles visibles ;
- recherche `zzzzzz` : 0 article visible avec message vide ;
- FAQ visible : 4 items ;
- aucun `[object Object]` visible ;
- aucun `undefined` visible ;
- aucune URL `/articles/<slug>/` détectée.

Note :
- `npm run preview -- --host 127.0.0.1 --port 3000` a échoué sur le passage des flags au script npm (`127.0.0.1/.output/nitro.json`). La vérification interactive a donc été réalisée via `npm run dev`, comme autorisé par le prompt.

## Prochaine étape recommandée

- Faire le lot documentaire minimal stack Nuxt 4 (`AGENTS.md`, `CLAUDE.md`, éventuellement `README.md`) avant merge `dev`.
- Relancer ensuite `npm test`, `npm run generate`, check SEO et `npm run lint:js`.
- Ne pas merger vers `master` avant validation preview Netlify.
