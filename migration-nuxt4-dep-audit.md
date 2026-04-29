# DEP-AUDIT — Dependances Nuxt 4

Date : 29 avril 2026

## Objectif

Comparer les versions declarees, installees et cibles avant toute mise a jour Nuxt 4.

## Resume

| Package | Declare | Installe | Cible proposee | Risque | Decision |
|---|---:|---:|---:|---|---|
| `nuxt` | `^3.14.1592` | `3.20.2` | `4.4.2` | eleve | DEP-1 seul |
| `@nuxt/content` | `^2.13.2` | `2.13.4` | `3.13.0` | tres eleve | apres migration API |
| `@nuxt/image` | `^1.8.1` | `1.11.0` | `2.0.0` | moyen | DEP-4 separe |
| `@nuxtjs/sitemap` | `^6.1.1` | `6.1.5` | `8.0.14` | moyen/eleve | DEP-3 separe ou lot feeds/sitemap |
| `@nuxt/eslint` | `^0.5.7` | `0.5.7` | `1.15.2` | moyen/eleve | DEP-5 separe |
| `vue` | `^3.5.12` | `3.5.26` | `3.5.33` | faible | laisser Nuxt piloter |
| `vue-router` | `^4.4.5` | `4.6.4` | `4.6.4` v4 | faible/moyen | ne pas forcer v5 |
| `vite` | `^6.0.1` | `6.4.1` direct | Nuxt-managed | moyen | ne pas mettre a jour seul |
| `eslint` | `^9.14.0` | `9.39.2` | `9.39.4` maintenance | faible/moyen | avec DEP-5 si necessaire |
| `sass` | `^1.80.7` | `1.97.1` | `1.99.0` | faible | pas prioritaire |
| `sass-loader` | `^16.0.3` | `16.0.6` | `16.0.7` | faible | pas prioritaire |

## Constats

- `package.json` est en retard sur le lock pour la plupart des paquets : Nuxt, Content, Image, Sitemap, Vue, Vue Router, Vite, ESLint, Sass et Sass Loader.
- L'etat reel de build est Nuxt 3.20.2, Nitro 2.12.9, Vite 6.4.1 et Vue 3.5.26.
- `npm ls` montre aussi `vite@7.3.0` en transitive sous la pile builder, sans declaration directe.
- Node local v22.21.1 est compatible avec les engines observes pour Nuxt 4.4.2 et Content 3.13.0.
- Les paquets sensibles a traiter separement sont `nuxt`, `@nuxt/content`, `@nuxtjs/sitemap`, `@nuxt/image` et `@nuxt/eslint`.

## Override interne Nuxt

Voir :
- `dep-audit-internal-imports.md`

Decision :
- DEP-6 a faire avant ou pendant DEP-1.

## Risques majeurs

1. `@nuxt/content` v2 -> v3.
2. `@nuxtjs/sitemap` et routes Content dynamiques.
3. `@nuxt/eslint` et config lint.
4. Restructuration `app/`.
5. Override interne `#internal/nuxt/paths`.

## Ordre recommande

Voir :
- `dep-audit-update-order.md`

Resume :
1. DEP-6 — supprimer override interne Nuxt paths.
2. DEP-1 — mettre a jour Nuxt seul vers 4.x.
3. CONFIG-* uniquement selon erreurs.
4. DIR-* si necessaire ou en lot dedie.
5. DEP-2 — Content 3.x avec lots API Content.
6. DEP-3 — sitemap.
7. DEP-4 — image.
8. DEP-5 — eslint.

## Validation

- `npm test` : succes, 49 pre-build checks, Content v2 query checks OK, 18 tests Node OK.
- `npm run generate` : succes, Nuxt 3.20.2 compatibility version 4, 100 routes prerendered.
- check SEO : succes, `OK SEO checks passed.`

Sorties completes :
- `dep-audit-baseline-tests.txt`
- `dep-audit-baseline-generate.txt`
- `dep-audit-baseline-seo-check.txt`

## Artefacts produits

- `dep-audit-package-json.txt`
- `dep-audit-declared-versions.txt`
- `dep-audit-npm-ls.txt`
- `dep-audit-installed-versions.txt`
- `dep-audit-explain-nuxt.txt`
- `dep-audit-explain-content.txt`
- `dep-audit-explain-sitemap.txt`
- `dep-audit-explain-image.txt`
- `dep-audit-explain-eslint.txt`
- `dep-audit-peer-risks.txt`
- `dep-audit-internal-nuxt-paths.txt`
- `dep-audit-internal-imports.md`
- `dep-audit-npm-view-targets.txt`
- `dep-audit-npm-view-vue-router-4.txt`
- `dep-audit-npm-view-eslint-9.txt`
- `dep-audit-target-versions.txt`
- `dep-audit-update-order.md`

## Conclusion

- DEP-AUDIT :
  - fait
- Prochaine etape recommandee :
  - DEP-6 si override present, puis DEP-1 Nuxt seul.
