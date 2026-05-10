# NUXT4-FINAL-AUDIT — Stabilisation post DEP-1 à DEP-5

Date : 10 mai 2026

## Objectif

Auditer l'état final de la branche `chore/nuxt4-migration` après migration des dépendances majeures Nuxt 4, sans refactor opportuniste, avant décision de preview ou de lot technique complémentaire.

## Versions finales observées

| Package | Déclaré | Lock / installé | État |
|---|---:|---:|---|
| `nuxt` | `4.4.2` | `4.4.2` | OK |
| `@nuxt/content` | `3.13.0` | `3.13.0` | OK |
| `@nuxtjs/sitemap` | `8.0.15` | `8.0.15` | OK |
| `@nuxt/image` | `2.0.0` | `2.0.0` | OK |
| `@nuxt/eslint` | `1.15.2` | `1.15.2` | OK |
| `vue` | `^3.5.12` | `3.5.33` | OK |
| `vue-router` | `^4.4.5` | `4.6.4` direct | OK |
| `vite` | `^6.0.1` | `6.4.1` direct, `7.3.2` côté builder Nuxt | OK |
| `zod` | `3.25.76` | `3.25.76` | OK |

Voir :

- `nuxt4-final-audit-package-versions.txt`
- `nuxt4-final-audit-npm-ls.txt`

`npm ls` ne montre plus de dépendance Nuxt 3 imbriquée inattendue liée aux anciens modules migrés.

## État des dépendances Nuxt majeures

- DEP-1 : `nuxt@4.4.2` terminé.
- DEP-2 : `@nuxt/content@3.13.0` terminé côté APIs applicatives.
- DEP-3 : `@nuxtjs/sitemap@8.0.15` terminé.
- DEP-4 : `@nuxt/image@2.0.0` terminé.
- DEP-5 : `@nuxt/eslint@1.15.2` terminé.

## Anciennes APIs recherchées

Motifs audités :

- `queryContent(`
- `serverQueryContent(`
- `findSurround(`
- `searchContent(`
- `#content/server`
- `$content`
- `_path`
- `inlineSSRStyles`
- `Nuxt 3`
- `Content v2`

Résultat dans le code applicatif :

- aucune API Content v2 active restante ;
- les occurrences `queryContent`, `serverQueryContent`, `findSurround`, `_path` et `#content/server` restantes dans `scripts/check-content-queries.mjs` sont les motifs du garde-fou ;
- deux commentaires `Nuxt 3` restent dans `nuxt.config.ts` ;
- une mention éditoriale `Nuxt 3` reste dans `pages/services.vue`.

Décision :

- ne pas modifier ces commentaires ou contenus dans cet audit final ;
- les mentions ne bloquent pas Nuxt 4 ;
- ouvrir un petit lot documentaire/contenu si l'on veut aligner les libellés publics et commentaires après preview.

Voir :

- `nuxt4-final-audit-obsolete-app-usages.txt`
- `nuxt4-final-audit-obsolete-doc-usages.txt`

## État `nuxt.config.ts`

Points audités :

- `features.inlineStyles: false` présent.
- `future.compatibilityVersion: 4` présent.
- `compatibilityDate: '2024-12-06'` présent.
- `routeRules.noScripts` conservé pour `/` et `/mentions-legales/`.
- `router.options.prefetchLinks: false` conservé.
- `experimental.defaults.nuxtLink.prefetch: false` conservé.
- `image.provider: 'none'` conservé.
- Content v3 configuré via `content.config.ts` et `@nuxt/content`.
- Sitemap v8 configuré avec `urls: getArticleSitemapRoutes`, `gzip`, exclusions `/404`.
- Nitro prerender inclut `/rss.xml`, `/feed.json`, `/sitemap.xml`, `/robots.txt`.
- Manual chunks conservés.

Décision :

- aucune modification de configuration dans cet audit ;
- le warning circular chunk reste non bloquant et ne doit pas être optimisé sans lot dédié.

Voir :

- `nuxt4-final-audit-config-usages.txt`

## État Content

- Collection `articles` : `type: 'page'`.
- Source : `{ include: 'articles/**/*.md', prefix: '/eco-conception' }`.
- Schéma `zod` enrichi.
- Pages, composants, recherche, RSS et JSON Feed utilisent Content v3.
- Garde-fou `scripts/check-content-queries.mjs` exécuté par `npm test`.

État : OK.

## État Sitemap

- `/sitemap.xml` généré.
- 14 URLs `/eco-conception/` présentes dans le sitemap, incluant l'archive.
- `/404` et `/404/` exclus.
- Aucun import `#content/server` actif dans le sitemap généré.

État : OK.

Voir :

- `nuxt4-final-audit-sitemap-article-urls.txt`

## État Image

- `@nuxt/image@2.0.0`.
- `image.provider: 'none'` conservé.
- Aucun composant `NuxtImg` / `NuxtPicture` rendu aujourd'hui.

État : OK pour l'état actuel du projet.

## État ESLint

- `@nuxt/eslint@1.15.2`.
- Config flat `eslint.config.mjs`.
- `npm run lint:js` : OK avec 0 erreur et 101 warnings historiques.
- `npm run lint` reste bloqué par `lint:prettier`, hors périmètre de cet audit.

Voir :

- `nuxt4-final-audit-lint-js.txt`
- `nuxt4-final-audit-lint-js-warning-count.txt`

## Routes générées

`npm run generate` : OK.

Routes prerendered : 72.

Présence confirmée :

- `/`
- `/eco-conception/`
- `/eco-conception/l-eco-conception-web/`
- `/portfolio/`
- `/services/`
- `/contact/`
- `/greenlight/`
- `/apps/`
- `/rss.xml`
- `/feed.json`
- `/sitemap.xml`
- `/robots.txt`

Voir :

- `nuxt4-final-audit-generated-routes-check.txt`
- `nuxt4-final-audit-generate-summary.txt`

## Feeds

RSS :

- `.output/public/rss.xml` généré.
- 13 items.

JSON Feed :

- `.output/public/feed.json` généré.
- JSON parseable.
- 13 items.
- première URL : `https://beabot.fr/eco-conception/audit-site-web/`.

Voir :

- `nuxt4-final-audit-feed-json-check.txt`
- `nuxt4-final-audit-rss-item-count.txt`

## SEO

Check SEO :

- `NUXT_PUBLIC_SITE_URL=https://beabot.fr node scripts/seo-check.mjs` : OK.

Les contrôles existants couvrent les canonicals, URLs principales, sitemap, feeds et balises SEO minimales.

Scan de sortie :

- aucune occurrence bloquante de `[object Object]`, `undefined`, `no such column`, `queryContent`, `serverQueryContent`, `#content/server` ou `/articles/` dans les sorties HTML/JSON/XML générées.

Voir :

- `nuxt4-final-audit-seo-check.txt`
- `nuxt4-final-audit-generated-output-scan-summary.txt`

Les 5 liens Markdown internes sans slash final restent hors périmètre de cet audit, car le check SEO ne bloque pas et la consigne exclut leur correction ici.

## Warnings connus

| Warning | Classement | Décision |
|---|---|---|
| sitemap `zeroRuntime` | non bloquant | documenter ; optimisation éventuelle en lot séparé |
| sourcemap `nuxt:module-preload-polyfill` | non bloquant | documenter ; aucune action avant blocage réel |
| circular chunk `vendor-nuxt -> vendor-libs -> vendor-nuxt` | non bloquant à traiter séparément | ne pas optimiser dans cet audit |
| 101 warnings ESLint `lint:js` | non bloquant à traiter séparément | ne pas lancer `eslint --fix` global |
| `lint:prettier` repo-wide | à traiter dans un lot séparé | ne pas lancer `prettier --write` global |
| `npm audit` : 11 vulnérabilités | à traiter dans un lot sécurité séparé | ne pas lancer `npm audit fix` |

Voir :

- `nuxt4-final-audit-generate-warnings.txt`
- `nuxt4-final-audit-npm-audit.txt`
- `nuxt4-final-audit-npm-audit-summary.txt`

## Documentation obsolète

Écarts détectés dans la documentation projet :

- `AGENTS.md` et `CLAUDE.md` indiquent encore Nuxt 3, Vite 6, Content v2 et sitemap v6.
- `README.md` indique encore `@nuxt/content` 2.13+, `@nuxt/image` 1.8+ et `@nuxtjs/sitemap` 6.1+.
- `.codex/skills/vue-nuxt.md` est déjà orienté Nuxt 4, mais `AGENTS.md` le décrit encore comme skill Nuxt 3.

Décision :

- ne pas modifier ces fichiers dans cet audit final ;
- ouvrir un lot documentaire post-preview si la branche est retenue.

Voir :

- `nuxt4-final-audit-docs-stack-drift.txt`

## Structure Nuxt 4 / `app/`

Constat :

- le projet fonctionne encore sans déplacement vers `app/` ;
- `npm test`, `npm run generate`, check SEO et `lint:js` passent dans l'arborescence actuelle ;
- aucun blocage Nuxt 4 réel n'impose le déplacement avant preview.

Décision :

- ne pas déplacer vers `app/` avant merge/preview tant que la branche reste stable ;
- si un lot `DIR-* / app/` est ouvert, il doit rester dédié et inclure au minimum :
  - déplacement `assets/`, `components/`, `composables/`, `layouts/`, `pages/`, `utils/`, `app.vue`, `error.vue` ;
  - vérification des imports `~/` ;
  - décision sur `data/portfolio.ts` et `data/apps.ts` ;
  - validation `npm test`, `npm run generate`, check SEO et routes clés.

Voir :

- `nuxt4-final-audit-root-app-structure.txt`
- `nuxt4-final-audit-app-dir-existing-files.txt`

## Validations

- `npm test` : OK.
- `npm run generate` : OK.
- Check SEO : OK.
- `npm run lint:js` : OK, 0 erreur, 101 warnings.
- `npm audit --audit-level=moderate` : KO, 11 vulnérabilités documentées, pas de correction lancée.

## Décision finale

La branche `chore/nuxt4-migration` est cohérente après DEP-1 à DEP-5 et peut passer en phase de validation preview.

Elle n'est pas encore à merger directement dans `dev` ou `master` sans validation preview Netlify et revue humaine.

## Prochaine étape recommandée

1. Déployer/valider une preview Netlify de `chore/nuxt4-migration`.
2. Vérifier manuellement les pages principales, articles, feeds, sitemap et parcours de contact.
3. Reporter dans des lots séparés :
   - documentation stack obsolète (`README.md`, `AGENTS.md`, `CLAUDE.md`) ;
   - lint Prettier repo-wide ;
   - audit sécurité npm ;
   - éventuel lot `DIR-* / app/`, uniquement si une incompatibilité réelle apparaît.
