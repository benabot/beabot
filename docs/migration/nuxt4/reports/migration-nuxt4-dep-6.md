# DEP-6 — Suppression override interne Nuxt paths

Date : 29 avril 2026

## Objectif

Supprimer l'override interne Nuxt 3 avant la mise a jour vers Nuxt 4.

## Override supprime

Avant :

```json
"imports": {
  "#internal/nuxt/paths": "./nuxt.paths.mjs"
}
```

Apres :
- entree `imports` supprimee de `package.json`.

## Fichiers modifies

- `package.json`
- `TODO.md`

## Fichiers non modifies

- `package-lock.json`
- dependances
- APIs Content
- structure `app/`
- `nuxt.config.ts`
- `nuxt.paths.mjs`

## Verifications

Voir :
- `dep-6-internal-import-before.txt`
- `dep-6-internal-import-after.txt`
- `dep-6-internal-import-usages.txt`
- `dep-6-nuxt-paths-file.txt`
- `dep-6-git-status-after-edit.txt`

Constats :
- `dep-6-internal-import-after.txt` est vide.
- `nuxt.paths.mjs` existe encore et n'a pas ete supprime.
- `package-lock.json` est inchange.

## Validation

- `npm test` : succes, 49 pre-build checks, Content v2 query checks OK, 18 tests Node OK.
- `npm run generate` : succes, Nuxt 3.20.2 compatibility version 4, 100 routes prerendered.
- check SEO : succes, `OK SEO checks passed.`

Sorties :
- `dep-6-baseline-tests.txt`
- `dep-6-baseline-generate.txt`
- `dep-6-baseline-seo-check.txt`
- `dep-6-tests.txt`
- `dep-6-generate.txt`
- `dep-6-seo-check.txt`

## Decision

- `DEP-6` :
  - fait
- Prochaine etape recommandee :
  - `DEP-1` — mise a jour Nuxt 4 seul, sur la meme branche `chore/nuxt4-migration`, avec arret immediat en cas d'erreur bloquante.
