# DOCS-STACK-NUXT4 — Documentation stack avant merge dev

Date : 10 mai 2026

## Objectif

Aligner la documentation projet utilisée par les agents et le README sur la stack réelle de la branche `chore/nuxt4-migration`, sans modifier le code applicatif.

## Fichiers documentaires modifiés

- `AGENTS.md`
- `CLAUDE.md`
- `README.md`
- `TODO.md`
- `PROJECT_STATE.md`

## Anciennes mentions corrigées

- Stack Nuxt `3.14+` remplacée par Nuxt `4.4.2`.
- `@nuxt/content v2.13+` remplacé par `@nuxt/content 3.13.0`.
- `@nuxtjs/sitemap v6.1.5` remplacé par `@nuxtjs/sitemap 8.0.15`.
- `@nuxt/image` documenté en version `2.0.0`.
- `@nuxt/eslint 1.15.2` et `eslint.config.mjs` ajoutés à la stack.
- `content.config.ts` et `zod 3.25.76` documentés pour le schéma Content v3.
- Ancienne branche active `feature/portfolio-redesign` remplacée par `chore/nuxt4-migration` comme branche de migration à valider.
- Prochaine action obsolète `Push dev, merge dev -> master` remplacée par validation locale puis merge manuel vers `dev`, sans toucher `master` avant preview Netlify.
- README mis à jour depuis les versions Nuxt 3 / Content v2 / sitemap v6 vers les versions Nuxt 4 actuelles.

## Stack documentée

- Nuxt : `4.4.2`
- Vue : `3.5.33`
- Nitro : `2.13.x`
- Vite : `7.3.x` côté builder Nuxt, `6.4.x` direct
- `@nuxt/content` : `3.13.0`
- `@nuxtjs/sitemap` : `8.0.15`
- `@nuxt/image` : `2.0.0`
- `@nuxt/eslint` : `1.15.2`
- `zod` : `3.25.76`
- Node : version locale `22.21.1` validée ; pas de champ `engines` dans `package.json`
- Hébergement : Netlify SSG

## Décision SCSS conservée

SCSS reste utilisé et nécessaire aujourd'hui :

- `sass` et `sass-loader` restent en dépendances ;
- `vite.css.preprocessorOptions.scss` reste documenté comme nécessaire ;
- `SCSS-6` reste ouvert et reporté après preview Nuxt 4.

Rapport de référence :

- `docs/migration/nuxt4/reports/migration-nuxt4-scss-6-decision.md`

## Structure Nuxt 4

Le projet est documenté comme fonctionnant encore sans déplacement vers `app/`.

Décision conservée :

- ne pas ouvrir `DIR-* / app/` avant preview tant qu'aucune incompatibilité réelle n'impose le déplacement.

## Validations lancées

- `npm test` : OK.

Validation complète non relancée dans ce lot documentaire. Dernière validation complète connue après CLEANUP-ROOT :

- `npm run generate` : OK.
- check SEO : OK.
- `npm run lint:js` : OK.
- routes prerendered : 72.

## Code applicatif

Confirmation :

- aucun fichier applicatif modifié ;
- aucun `package.json` ou `package-lock.json` modifié ;
- aucun `nuxt.config.ts` ou `content.config.ts` modifié ;
- aucun CSS/SCSS modifié ;
- aucune dépendance modifiée ;
- aucun merge vers `dev` ou `master`.

## Prochaine étape recommandée

1. Relancer la validation finale pre-merge :
   - `npm test`
   - `npm run generate`
   - `NUXT_PUBLIC_SITE_URL=https://beabot.fr node scripts/seo-check.mjs`
   - `npm run lint:js`
2. Vérifier `git status --short`.
3. Merger ensuite manuellement `chore/nuxt4-migration` vers `dev` pour déclencher la preview Netlify.
4. Ne pas merger vers `master` avant validation de la preview `dev`.
