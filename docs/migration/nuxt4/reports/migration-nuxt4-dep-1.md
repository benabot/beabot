# DEP-1 — Mise a jour Nuxt 4

Date : 29 avril 2026

## Objectif

Mettre a jour uniquement `nuxt` vers Nuxt 4.x.

## Contexte

- Branche : `chore/nuxt4-migration`
- DEP-6 realise avant DEP-1 : override interne Nuxt paths supprime.
- Content v2 non migre.
- Aucune migration `app/` prevue dans cette etape.

## Versions

| Package | Avant | Apres tentative | Notes |
|---|---:|---:|---|
| `nuxt` | 3.20.2 reel / package.json `^3.14.1592` | 4.4.2 tente puis non conserve | seul package direct cible |
| `@nuxt/content` | 2.13.4 | 2.13.4 | non migre |
| `@nuxt/image` | 1.11.0 | 1.11.0 | non migre |
| `@nuxtjs/sitemap` | 6.1.5 | 6.1.5 | non migre |
| `@nuxt/eslint` | 0.5.7 | 0.5.7 | non migre |

## Commande executee

```bash
npm install nuxt@4.4.2 --save-exact
```

## Diff package

Voir :
- `dep-1-package-diff.txt`

Decision :
- la tentative modifiait uniquement `nuxt` dans `package.json` (`^3.14.1592` -> `4.4.2`) ;
- `package-lock.json` etait recalcule par npm ;
- comme `npm test` bloque immediatement apres installation, les changements `package.json` et `package-lock.json` ne sont pas conserves dans le commit documentaire.

## Resultat npm

Voir :
- `dep-1-npm-install-nuxt-4.txt`
- `dep-1-npm-ls-before.txt`
- `dep-1-npm-ls-after.txt`

Constats :
- `nuxt@4.4.2` est installe en dependance directe pendant la tentative.
- `@nuxt/content@2.13.4` reste en v2 et tire encore `@vueuse/nuxt`, qui installe un Nuxt 3.x imbrique dans le graphe npm.
- `vue` est resolu en `3.5.33` dans le lock apres tentative, effet transitif de la resolution npm.

## Erreurs ou warnings

### Warnings npm

Commande :
- `npm install nuxt@4.4.2 --save-exact`

Messages :
- `npm warn deprecated unplugin-vue-router@0.19.2: Merged into vuejs/router. Migrate: https://router.vuejs.org/guide/migration/v4-to-v5.html`
- `npm warn deprecated glob@10.5.0: Old versions of glob are not supported, and contain widely publicized security vulnerabilities`
- npm signale 19 vulnerabilites apres audit automatique.

Decision :
- non corrige dans DEP-1 ;
- ne pas lancer `npm audit fix` dans cette etape ;
- a reevaluer dans les lots de dependances dedies si besoin.

### Blocage `npm test`

Commande :
- `npm test`

Message exact :
- `❌ Nuxt 3 not in dependencies`

Fichier concerne :
- `scripts/pre-build-check.js`

Cause :
- le garde-fou projet verifie encore `pkg.dependencies?.nuxt?.startsWith('^3')`.

Decision :
- bloque DEP-1 avant `npm run generate` post-install ;
- aucune correction du script dans cette session, conformement a la consigne d'arret sur echec de `npm test` ;
- report vers une prochaine etape minimale avant de retenter DEP-1.

## Corrections minimales effectuees

- Aucune.

## Validation

Baseline avant tentative :
- `npm test` : succes, 49 pre-build checks, Content v2 query checks OK, 18 tests Node OK.
- `npm run generate` : succes, Nuxt 3.20.2, 100 routes prerendered.
- check SEO : succes, `OK SEO checks passed.`

Apres tentative Nuxt 4 :
- `npm test` : echec, bloque par `scripts/pre-build-check.js` qui attend encore Nuxt 3.
- `npm run generate` : non lance apres echec de `npm test`.
- check SEO : non lance apres echec de `npm test`.

## Assets generes

Non mesure dans DEP-1 :
- `npm run generate` post-install n'a pas ete lance apres le blocage `npm test`.

## Decision

- `DEP-1` :
  - bloque
- Etat conserve :
  - mise a jour `nuxt@4.4.2` tentee, documentee, puis non conservee dans `package.json` / `package-lock.json`.
- Prochaine etape recommandee :
  - adapter le garde-fou `scripts/pre-build-check.js` pour autoriser Nuxt 4, ou creer un item de tests dedie, puis retenter `DEP-1` avec la meme commande `npm install nuxt@4.4.2 --save-exact`.
