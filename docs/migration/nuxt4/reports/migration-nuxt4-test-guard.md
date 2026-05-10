# TEST-GUARD Nuxt 4 — Adaptation du garde-fou pre-build

Date : 29 avril 2026

## Objectif

Adapter `scripts/pre-build-check.js` pour qu'il ne bloque pas la prochaine tentative `DEP-1` Nuxt 4 uniquement parce que `package.json` declare `nuxt@4`.

## Contexte

`DEP-1` a ete tente avec `nuxt@4.4.2`, mais `npm test` a echoue avant `npm run generate`.

Erreur :

```text
❌ Nuxt 3 not in dependencies
```

Cause :
- `scripts/pre-build-check.js` verifiait encore que `pkg.dependencies?.nuxt?.startsWith('^3')`.

## Modification

Avant :
- Nuxt 3 seulement, via `pkg.dependencies?.nuxt?.startsWith('^3')`.

Apres :
- Nuxt 3 ou Nuxt 4 accepte pendant la migration.

Versions acceptees :
- `^3.x`
- `3.x`
- `^4.x`
- `4.x`

Versions refusees :
- absence de dependance `nuxt`
- version vide
- autre major version

Message d'erreur actif :
- `❌ Nuxt 3/4 not in dependencies: ${nuxtVersion || 'missing'}`

Note :
- `test-guard-nuxt4-old-message-search.txt` contient encore l'ancien message dans des rapports/logs historiques (`migration-nuxt4-dep-1.md`, `dep-1-tests-after-install.txt`, capture before).
- L'ancien message n'est plus present dans `scripts/pre-build-check.js`.

## Fichiers modifies

- `scripts/pre-build-check.js`
- `TODO.md`
- `PROJECT_STATE.md`

## Fichiers non modifies

- `package.json`
- `package-lock.json`
- `nuxt.config.ts`
- APIs Content
- structure `app/`

## Validation

- `npm test` : succes, 49 pre-build checks, Content v2 query checks OK, 18 tests Node OK.
- `npm run generate` : succes, Nuxt local 4.4.2 observe dans `node_modules`, 100 routes prerendered.
- check SEO : succes, `OK SEO checks passed.`

Sorties :
- `test-guard-nuxt4-baseline-tests.txt`
- `test-guard-nuxt4-baseline-generate.txt`
- `test-guard-nuxt4-baseline-seo-check.txt`
- `test-guard-nuxt4-tests.txt`
- `test-guard-nuxt4-generate.txt`
- `test-guard-nuxt4-seo-check.txt`

## Decision

- TEST-GUARD Nuxt 4 :
  - fait
- Prochaine etape recommandee :
  - retenter `DEP-1` avec `npm install nuxt@4.4.2 --save-exact`.
