# CLEANUP-ROOT — Rangement rapports migration Nuxt 4

Date : 10 mai 2026

## Objectif

Nettoyer la racine du dépôt avant merge vers `dev`, sans perdre les rapports utiles de la migration Nuxt 4 et sans modifier le code applicatif.

## Nouvelle arborescence

- `docs/migration/nuxt4/reports/` : rapports Markdown utiles conservés.
- `docs/migration/nuxt4/archive/` : fichiers ambigus conservés sans rester à la racine.

## Fichiers déplacés vers `reports/`

36 rapports Markdown ont été déplacés :

- `docs/migration/nuxt4/reports/content-prep-content-config-plan.md`
- `docs/migration/nuxt4/reports/content-prep-migration-order.md`
- `docs/migration/nuxt4/reports/content-prep-query-map.md`
- `docs/migration/nuxt4/reports/content-prep-tests-plan.md`
- `docs/migration/nuxt4/reports/content-prep-v2-v3-mapping.md`
- `docs/migration/nuxt4/reports/dep-audit-internal-imports.md`
- `docs/migration/nuxt4/reports/dep-audit-update-order.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-config-audit.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-content-prep.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-content-v3-docs-audit.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-dep-1-retry.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-dep-1.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-dep-2-a.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-dep-2-b.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-dep-2-c-pages.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-dep-2-d-search.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-dep-2-final-audit.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-dep-3-sitemap.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-dep-4-image.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-dep-5-eslint.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-dep-6.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-dep-audit.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-dev-readiness.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-final-audit.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-fix-eco-conception-page.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-psi-audit.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-refresh.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-scss-colors.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-scss-eco-impact.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-scss-explicit-imports.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-scss-inventory.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-scss-typography.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-test-guard.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-tests-coverage.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-unused-files-audit.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-warnings.md`

## Fichiers archivés

2 fichiers ambigus ont été conservés dans `archive/` plutôt que supprimés :

- `docs/migration/nuxt4/archive/audit-unused-depcheck.json`
- `docs/migration/nuxt4/archive/fix-nav-theme-home-hero.md`

Justification :

- `audit-unused-depcheck.json` est une sortie d'audit non JSON déjà documentée comme point lint/Prettier hors périmètre.
- `fix-nav-theme-home-hero.md` est un rapport de correctif visuel antérieur, lié au contexte de stabilisation mais pas directement à DEP-1/DEP-5.

## Fichiers supprimés

433 fichiers `.txt` de sortie brute ont été supprimés de la racine.

Familles supprimées :

- `audit-unused-*.txt`
- `config-audit-nuxt4-*.txt`
- `content-prep-*.txt`
- `dep-*.txt`
- `dep-audit-*.txt`
- `fix-*.txt`
- `migration-nuxt4-*.txt`
- `nuxt4-final-audit-*.txt`
- `scss-*.txt`
- `test-guard-nuxt4-*.txt`

Justification :

- ces fichiers étaient des preuves intermédiaires de commandes, greps, sorties before/after, mesures ou logs ;
- les rapports Markdown conservés résument les décisions et résultats utiles ;
- les conserver à la racine rendait le dépôt difficile à lire avant merge `dev`.

## Fichiers conservés à la racine

- `AGENTS.md`
- `BRANCHING_STRATEGY.md`
- `CLAUDE.md`
- `PROJECT_STATE.md`
- `README.md`
- `TODO.md`

## Références mises à jour

- `TODO.md` pointe désormais vers `docs/migration/nuxt4/reports/...` pour les rapports déplacés.
- `PROJECT_STATE.md` pointe désormais vers `docs/migration/nuxt4/reports/...` et `docs/migration/nuxt4/archive/...`.

## Code applicatif

Confirmation :

- aucun fichier `pages/`, `components/`, `server/`, `content/`, `assets/`, `nuxt.config.ts`, `package.json` ou `package-lock.json` n'a été modifié dans ce lot ;
- aucune dépendance modifiée ;
- aucune migration SCSS réalisée ;
- aucun refactor applicatif.

## Validations

Résultats après rangement :

- `npm test` : OK.
- `npm run generate` : OK, 72 routes prerendered.
- `NUXT_PUBLIC_SITE_URL=https://beabot.fr node scripts/seo-check.mjs` : OK.
- `npm run lint:js` : OK, 0 erreur, 94 warnings historiques.

Warnings non bloquants observés pendant `generate` :

- sitemap `zeroRuntime` ;
- sourcemap `nuxt:module-preload-polyfill` ;
- circular chunk `vendor-nuxt -> vendor-libs -> vendor-nuxt`.

## Prochaine étape recommandée

- Faire le lot documentaire minimal stack Nuxt 4 (`AGENTS.md`, `CLAUDE.md`, éventuellement `README.md`) avant merge `dev`.
- Relancer la validation finale pre-merge.
- Merger ensuite vers `dev` manuellement pour déclencher la preview Netlify ; ne pas merger vers `master` avant validation preview.
