# DEP-1 RETRY — Mise a jour Nuxt 4

Date : 29 avril 2026

## Objectif

Retenter la mise a jour uniquement de `nuxt` vers Nuxt 4.x apres adaptation du garde-fou `pre-build-check.js`.

## Contexte

- Branche : `chore/nuxt4-migration`
- DEP-6 realise avant DEP-1 : override interne Nuxt paths supprime.
- TEST-GUARD Nuxt 4 realise : `scripts/pre-build-check.js` accepte Nuxt 3 et Nuxt 4.
- Content v2 non migre.
- Aucune migration `app/` prevue dans cette etape.

## Etat reel avant retry

| Source | Version Nuxt |
|---|---|
| `package.json` | `^3.14.1592` |
| `package-lock.json` root | `^3.14.1592` |
| `npm ls` | `nuxt@4.4.2 invalid: "^3.14.1592" from the root project` |

Constat :
- `node_modules` contenait deja Nuxt 4 avant la mise a jour persistante de `package.json` et `package-lock.json`.
- `npm ls` signalait donc une incoherence locale, resolue par l'installation ciblee.

## Versions apres retry

| Package | Avant | Apres | Notes |
|---|---:|---:|---|
| `nuxt` | `^3.14.1592` declare / `3.20.2` audit reel / `4.4.2` local invalid avant retry | `4.4.2` | seul package direct cible |
| `@nuxt/content` | `2.13.4` | `2.13.4` | non migre |
| `@nuxt/image` | `1.11.0` | `1.11.0` | non migre |
| `@nuxtjs/sitemap` | `6.1.5` | `6.1.5` | non migre |
| `@nuxt/eslint` | `0.5.7` | `0.5.7` | non migre |

Autres resolutions observees apres retry :
- `vue` : `3.5.33`
- `vue-router` top-level direct : `4.6.4`
- `vite` direct : `6.4.1`
- Vite utilise par le builder Nuxt : `7.3.2`
- `@nuxt/content@2.13.4` tire encore `@vueuse/nuxt`, qui installe un Nuxt 3.x imbrique (`3.21.2`) dans le graphe npm.

## Commande executee

```bash
npm install nuxt@4.4.2 --save-exact
```

## Diff package

Voir :
- `dep-1-retry-package-diff.txt`

Resume :
- `package.json` modifie uniquement la dependance directe `nuxt`, de `^3.14.1592` vers `4.4.2`.
- `package-lock.json` est recalcule par npm comme effet direct de `nuxt@4.4.2`.

## Resultat npm

Voir :
- `dep-1-retry-npm-install-nuxt-4.txt`
- `dep-1-retry-npm-ls-before.txt`
- `dep-1-retry-npm-ls-after.txt`

Constats :
- `npm install` : succes.
- `npm ls` apres retry : plus d'etat `invalid` pour le Nuxt root.
- `npm install` signale 19 vulnerabilites via audit automatique.

Decision :
- ne pas lancer `npm audit fix` dans DEP-1 ;
- vulnerabilites a traiter dans un lot dedie si necessaire.

## Warnings ou erreurs observes

### Warning sourcemap Nuxt/Vite

Message exact :
- `[plugin nuxt:module-preload-polyfill] Sourcemap is likely to be incorrect: a plugin (nuxt:module-preload-polyfill) was used to transform files, but didn't generate a sourcemap for the transformation. Consult the plugin documentation for help`

Commande concernee :
- `npm run generate`

Decision :
- non bloquant ;
- documente et reporte vers CONFIG-AUDIT Nuxt 4 si besoin.

### Warning circular chunk

Message exact :
- `Circular chunk: vendor-nuxt -> vendor-libs -> vendor-nuxt. Please adjust the manual chunk logic for these chunks.`

Commande concernee :
- `npm run generate`

Decision :
- non bloquant ;
- ne pas optimiser les chunks dans DEP-1 ;
- documente et reporte vers CONFIG-AUDIT Nuxt 4.

## Corrections minimales effectuees

- Aucune.

## Validation

- `npm test` : succes, 49 pre-build checks, Content v2 query checks OK, 18 tests Node OK.
- `npm run generate` : succes, Nuxt 4.4.2, Nitro 2.13.3, Vite builder 7.3.2, Vue 3.5.33.
- check SEO : succes, `OK SEO checks passed.`
- routes prerendered : 100.

## Assets generes

Voir :
- `dep-1-retry-build-assets-summary.txt`
- `dep-1-retry-assets-css-after-bytes.txt`
- `dep-1-retry-assets-js-after-bytes.txt`

Resume :
- CSS total : 171292 octets.
- JS total : 513677 octets.
- routes prerendered : 100.
- comparaison SCSS-5 : +13 octets vs reference historique 171279 octets, ecart negligeable.

## Decision

- `DEP-1` :
  - fait
- Prochaine etape recommandee :
  - lancer un CONFIG-AUDIT Nuxt 4 pour examiner les warnings et options restantes (`features.inlineStyles`, prefetch, `router.options`, `routeRules.noScripts`, hooks sitemap), sans migrer Content ;
  - puis preparer `DEP-2` / `CONTENT-*` en lots dedies ;
  - ne pas faire `DIR-*` tant que Nuxt 4 fonctionne avec l'arborescence actuelle.
