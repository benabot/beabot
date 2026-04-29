# Ordre de mise a jour dependances Nuxt 4

Date : 29 avril 2026

## Principe

Mettre a jour une seule dependance sensible par commit, avec tests immediats. Ne pas melanger mise a jour Nuxt, migration Content v3, sitemap, ESLint et restructuration `app/`.

## Ordre recommande

### DEP-6 — Supprimer override interne Nuxt 3

Condition :
- `"#internal/nuxt/paths"` est present dans `package.json`.

Validation :
- `npm test`
- `npm run generate`
- `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs`

Commit :
- `chore: supprimer override interne Nuxt paths`

### DEP-1 — Mettre a jour Nuxt vers 4.x

Version cible verifiee :
- `nuxt@4.4.2` via npm metadata le 29 avril 2026.

Validation :
- `npm test`
- `npm run generate`
- `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs`

Stop si :
- build casse ;
- erreur config ;
- erreur app directory ;
- erreur Content bloquante ;
- erreur d'engine Node.

Commit :
- `chore: mettre a jour Nuxt vers 4`

### CONFIG-* — Corriger config Nuxt 4 minimale

A faire seulement selon erreurs :
- `features.inlineStyles` ;
- `router.options` ;
- `routeRules.noScripts` ;
- hooks sitemap ;
- configuration liee a `future.compatibilityVersion`.

Validation :
- `npm test`
- `npm run generate`
- check SEO

### DIR-* — Restructuration `app/`

A faire separement si Nuxt 4 l'impose ou apres DEP-1 si le mode compatibilite permet de temporiser.

Validation :
- `npm test`
- `npm run generate`
- verifier imports `~/`

### DEP-2 — @nuxt/content 3.x

Version cible verifiee :
- `@nuxt/content@3.13.0` via npm metadata le 29 avril 2026.

Important :
- ne pas faire avant d'avoir consulte la documentation officielle Content v3 ;
- a faire avec les lots Content v3 documentes dans `content-prep-migration-order.md` ;
- ne pas melanger avec DEP-1.

Validation :
- voir `content-prep-tests-plan.md`
- `npm test`
- `npm run generate`
- check SEO

### DEP-3 — sitemap

Version cible observee :
- `@nuxtjs/sitemap@8.0.14` via npm metadata le 29 avril 2026.

A faire :
- apres ou pendant le lot feeds/sitemap selon compatibilite avec Nuxt 4 et Content v3 ;
- verifier si v6.1.5 suffit temporairement apres DEP-1.

Validation :
- `/sitemap.xml`
- `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs`
- `node --test tests/feeds.test.mjs`

### DEP-4 — image

Version cible observee :
- `@nuxt/image@2.0.0` via npm metadata le 29 avril 2026.

A faire :
- separement ;
- verifier compat Nuxt 4 et rendu image ;
- surveiller generate SSG.

Validation :
- `npm run generate`
- inspection pages avec images clefs

### DEP-5 — eslint

Version cible observee :
- `@nuxt/eslint@1.15.2` via npm metadata le 29 avril 2026.

A faire :
- separement, probablement en dernier ;
- traiter la config ESLint et le script `ESLINT_USE_FLAT_CONFIG=false` ;
- tenir compte du lint global deja connu comme historiquement bruite.

Validation :
- `npm run lint:js`
- `npm run lint:prettier`
- puis `npm run lint` quand les deux sont alignes

## Paquets a laisser pilotes par Nuxt

- `vue`
- `vue-router`
- `vite`

## Paquets peu prioritaires

- `eslint` seul, sauf via DEP-5 ;
- `sass` ;
- `sass-loader`.
