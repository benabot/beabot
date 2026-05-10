# DEP-5 — Migration Nuxt ESLint pour Nuxt 4

Date : 10 mai 2026

## Objectif

Migrer uniquement `@nuxt/eslint` vers une version compatible Nuxt 4, avec le plus petit diff possible et sans correction lint globale opportuniste.

## Versions

| Package | Avant | Après | Notes |
|---|---:|---:|---|
| `@nuxt/eslint` | `0.5.7` réel / package.json `^0.5.7` | `1.15.2` | seule dépendance directe cible |
| `eslint` | `9.39.2` réel / package.json `^9.14.0` | `9.39.2` | conservé |
| `eslint-config-prettier` | `9.1.2` réel / package.json `^9.1.0` | `9.1.2` | conservé |
| `eslint-plugin-vue` | `9.33.0` réel / package.json `^9.29.1` | `9.33.0` | conservé comme dépendance directe |
| `prettier` | `3.7.4` réel / package.json `^3.3.3` | `3.7.4` | conservé |

## Fichiers modifiés

- `package.json`
- `package-lock.json`
- `eslint.config.mjs`
- `.eslintrc.cjs` supprimé
- `TODO.md`
- `PROJECT_STATE.md`

## Dépendance directe modifiée

- `@nuxt/eslint` uniquement.

`npm install @nuxt/eslint@1.15.2 --save-dev --save-exact` a modifié le lockfile avec les dépendances transverses nécessaires à `@nuxt/eslint` v1.

## Scripts lint

État avant :

- `lint:js` utilisait `ESLINT_USE_FLAT_CONFIG=false eslint --ext ".js,.ts,.vue" --ignore-path .gitignore .`.
- `lint:prettier` utilisait `prettier --check .`.
- `lint` lançait `lint:js` puis `lint:prettier`.

État après :

- `lint:js` utilise `eslint .`.
- `lint:prettier` est inchangé.
- `lint` est inchangé.

## Configuration ESLint

Avant :

- `.eslintrc.cjs` importait `@nuxt/eslint-config` avec `require(...)`.
- Le mode flat config était explicitement désactivé.

Après :

- `eslint.config.mjs` utilise `createConfigForNuxt` depuis `@nuxt/eslint-config/flat`.
- L'ancienne `.eslintrc.cjs` est supprimée, car `@nuxt/eslint-config` v1 expose une config ESM qui rendait l'ancien fichier invalide (`__esModule` détecté comme propriété top-level).
- La règle projet `vue/multi-word-component-names` est conservée avec les exceptions nécessaires aux pages Nuxt existantes.
- Les règles `@typescript-eslint/no-explicit-any`, `@typescript-eslint/no-unused-vars` et `no-unused-vars` sont conservées en warnings pour éviter de transformer DEP-5 en correction applicative globale.

Voir :

- `dep-5-eslint-config-before.txt`
- `dep-5-eslint-config-after.txt`
- `dep-5-package-diff.txt`

## Résultat npm

Voir :

- `dep-5-npm-view-eslint-latest.txt`
- `dep-5-npm-install-eslint-1.txt`
- `dep-5-npm-ls-before.txt`
- `dep-5-npm-ls-after.txt`

La version cible vérifiée est `@nuxt/eslint@1.15.2`.

`npm install` a signalé des vulnérabilités npm audit existantes. Aucune commande `npm audit fix` n'a été lancée.

## Résultat lint

Baseline avant migration :

- `npm run lint` échouait déjà sur `lint:prettier`.
- `lint:js` produisait 743 warnings et 0 erreur avec l'ancienne config.
- `lint:prettier` signalait de nombreux formatages historiques et une erreur de parsing sur `audit-unused-depcheck.json`, qui n'est pas un JSON valide.

Après installation avant migration flat config :

- `npm run lint` bloquait sur `.eslintrc.cjs`.
- Erreur : config invalide avec propriété top-level `__esModule`.

Après migration flat config minimale :

- `npm run lint:js` : OK, 0 erreur, 101 warnings historiques.
- `npm run lint` : KO via `lint:prettier`.
- Cause restante : formatages repo-wide historiques et `audit-unused-depcheck.json` non JSON.

Voir :

- `dep-5-lint-before.txt`
- `dep-5-lint-after.txt`
- `dep-5-lint-js-after-flat-config-final.txt`
- `dep-5-lint-final-pipefail.txt`

Décision :

- Ne pas corriger les warnings et formatages historiques dans DEP-5.
- Reporter le lint global repo-wide dans un lot dédié.

## Décision sur Prettier et plugins

- `eslint-config-prettier` conservé.
- `eslint-plugin-vue` conservé comme dépendance directe pour éviter un nettoyage de dépendances hors périmètre.
- `prettier` conservé.
- Aucun `eslint --fix` global lancé.
- Aucun `prettier --write` lancé.

## Validation

- `npm test` : OK.
- `npm run generate` : OK.
- Check SEO : OK.
- Routes prerendered : 72.
- `/rss.xml`, `/feed.json` et `/sitemap.xml` générés.

Voir :

- `dep-5-tests-final.txt`
- `dep-5-generate.txt`
- `dep-5-seo-check.txt`
- `dep-5-generated-feeds-sitemap.txt`

## Warnings restants

Warnings connus, non bloquants et déjà observés dans les lots précédents :

- sitemap `zeroRuntime`.
- sourcemap `nuxt:module-preload-polyfill`.
- circular chunk `vendor-nuxt -> vendor-libs -> vendor-nuxt`.

Warnings lint restants :

- 101 warnings ESLint historiques avec `lint:js`.
- `npm run lint` bloqué par Prettier sur des formatages repo-wide et `audit-unused-depcheck.json`.

## Décision

- `DEP-5` : fait.
- Prochaine étape recommandée : traiter le lint global repo-wide dans un lot séparé si nécessaire, sans mélanger avec `app/`, CSS, chunks ou contenu éditorial.

