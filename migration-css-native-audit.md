# Audit Sass restant avant migration CSS native

Date : 11 mai 2026  
Branche : `refactor/css-native-audit`  
Type : audit documentaire uniquement

## Objectif

Documenter ce qui dépend encore de Sass sur BeAbot, puis proposer une migration progressive vers du CSS natif moderne, sans modifier le rendu dans ce lot.

La décision de fond reste conservatrice : Sass n'est pas supprimé maintenant. Le projet a déjà gagné le plus risqué avec `SCSS-4` : l'injection globale `additionalData` est vide, les imports sont explicites, et le CSS généré reste stable autour de 171 Ko.

## Sources croisées

### Sources projet

- `AGENTS.md`, `BRANCHING_STRATEGY.md`, `PROJECT_STATE.md`, `TODO.md`
- `docs/ressources/ressources.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-scss-inventory.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-scss-colors.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-scss-typography.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-scss-explicit-imports.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-scss-eco-impact.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-scss-6-decision.md`

### Référentiels

- RWEB / GreenIT, référentiel écoconception web 5.0.0 : https://rweb.greenit.fr/
- Smashing Magazine, Front-End Performance Checklist 2021 : https://www.smashingmagazine.com/2021/01/front-end-performance-2021-free-pdf-checklist/

### Ressources d'inspiration

Les articles Medium listés dans `docs/ressources/ressources.md` servent uniquement de veille CSS moderne. Ils ne justifient aucune migration automatique.

## Commandes d'audit

```bash
find . -name "*.scss" -type f | sort
rg -n 'lang="scss"|lang='\''scss'\''' . --glob '*.vue'
rg -n '\$(breakpoint-|font-|space-|color-|vert|gris|bleu|jaune|fond|black|bold|normal|light|type-)' assets components pages layouts app
rg -n '@use|@import|@mixin|@include|@function|@each|@for|map-get|map\.get|color\.adjust|math\.div' assets components pages layouts app
node scripts/check-scss-explicit-imports.mjs
npm run generate
```

## Baseline CSS

Baseline générée avant rédaction du rapport :

| Mesure | Valeur |
|---|---:|
| Fichiers CSS générés | 18 |
| Total CSS généré | 171 523 octets |
| Hash global CSS | `ba0d818a9f0c3dbbda99661146aad5625e9822d64c57ba4a538079d331fd8e15` |
| Routes prerendered | 68 |

Le total diffère légèrement de l'ancienne mesure `SCSS-4/5` de 171 279 octets, car le projet a reçu depuis des chantiers SEO/contenu. Ce lot ne doit pas changer cette baseline.

## Inventaire Sass restant

### Fichiers `.scss`

8 fichiers :

- `assets/css/article-content.scss`
- `assets/css/main.scss`
- `assets/css/mixins/_mixins.scss`
- `assets/css/vars/_color-custom-properties.scss`
- `assets/css/vars/_colors.scss`
- `assets/css/vars/_spacing.scss`
- `assets/css/vars/_typo.scss`
- `assets/css/vars/_typography-custom-properties.scss`

### Blocs Vue `lang="scss"`

28 blocs :

- `components/AppSearchInput.vue`
- `components/ArticleNavigation.vue`
- `components/BaseButton.vue`
- `components/BaseHeading.vue`
- `components/BoiteArticle.vue`
- `components/Oeuf.vue`
- `components/TheFooter.vue`
- `components/apps/AppBreadcrumb.vue`
- `components/apps/AppCard.vue`
- `components/apps/AppFaqList.vue`
- `components/apps/AppGalleryLightbox.vue`
- `components/apps/AppLegalTabs.vue`
- `components/apps/AppReleaseInterestForm.vue`
- `components/server/Oeuf.server.vue`
- `error.vue`
- `layouts/default.vue`
- `pages/404.vue`
- `pages/apps/duo-spend.vue`
- `pages/apps/index.vue`
- `pages/apps/meeting-mode.vue`
- `pages/apps/siturem.vue`
- `pages/eco-conception/[slug].vue`
- `pages/eco-conception/index.vue`
- `pages/greenlight.vue`
- `pages/index.vue`
- `pages/mentions-legales.vue`
- `pages/portfolio.vue`
- `pages/services.vue`

Note : `pages/eco-conception/[slug].vue` importe aussi `assets/css/article-content.scss`.
Note : `pages/contact.vue` n'est plus un bloc SCSS et ne contient plus de variable Sass brute.

### Synthèse quantitative

| Usage | Occurrences observées |
|---|---:|
| Variables Sass `$...` | 586 |
| `@use` | 57 |
| `@import` | 0 |
| `color.adjust()` | 24 |
| `math.div()` | 5 |
| `map.get()` / `map-get()` | 2 |
| `@each` | 1 |
| `@for` | 0 |
| `@function` | 3 |
| `@mixin` | 1, commenté dans `assets/css/mixins/_mixins.scss` |
| `@include` | 0 |
| `$breakpoint-tablet` | 80 |
| `$space-*` | 54 |
| `*-raw` couleurs | 58 |

Variables les plus fréquentes :

- `$breakpoint-tablet` : 80
- `$vert` : 72
- `$gris1` : 50
- `$gris2` : 38
- `$gris3` : 37
- `$vert-raw` : 22
- `$gris4` : 12
- `$bleu2` : 10
- `$space-s` : 8
- `$bold` : 8
- `$space-3xs` : 8

### Dépendances implicites

`node scripts/check-scss-explicit-imports.mjs` :

```text
TOTAL_FICHIERS_ANALYSES=27
TOTAL_DEPENDANCES_IMPLICITES=0
```

Décision : garder ce garde-fou. Une migration CSS native ne doit pas réintroduire de dépendance implicite ni d'import global masqué.

## Classification des usages

### Migrable maintenant vers `var()`

Usages simples des tokens déjà exposés :

- `$vert` -> `var(--color-green)`
- `$bleu1` -> `var(--color-blue-1)`
- `$bleu2` -> `var(--color-blue-2)`
- `$jaune` -> `var(--color-yellow)`
- `$gris1` à `$gris6` -> `var(--color-gray-*)`
- `$fondGris` -> `var(--color-background-gray)`
- `$fondClair` -> `var(--color-background-light)`
- `$light`, `$normal`, `$bold`, `$black` -> `var(--font-weight-*)`
- `$type-base-size` -> `var(--font-size-base)`

À faire uniquement quand cela supprime un `@use` entier dans un fichier ou rend un bloc convertissable en CSS natif. Remplacer une variable isolée sans réduire la dépendance Sass serait du bruit.

### Migrable vers `clamp()`, `min()`, `max()`, `calc()`

- `$space-*` de `assets/css/vars/_spacing.scss`, déjà compilés en `clamp()`.
- `fluid-space()` peut devenir une liste de custom properties CSS `--space-*`.
- La génération typo dans `assets/css/vars/_typo.scss` produit déjà des `clamp()` ; elle peut être figée en CSS natif quand les valeurs sont validées visuellement.

Risque : moyen. Les espacements et la typo touchent les pages articles, la home, l'éco-conception et les pages apps. Migrer lot par lot.

### Migrable plus tard avec `@supports`

- `color-mix()` pour certains équivalents de `color.adjust()`, avec fallback.
- Relative color syntax seulement avec fallback ou `@supports`.
- Container queries uniquement pour un composant ciblé, si un problème réel apparaît.
- `@layer` seulement si l'ordre de cascade devient un problème mesurable.

Risque : compatibilité et contraste. Les couleurs dérivées sont proches des états interactifs et des accents visuels.

### À garder en Sass pour le moment

- `$breakpoint-tablet`, très présent et peu coûteux.
- `assets/css/vars/_typo.scss` tant que les maps et la boucle typographique restent utiles.
- `assets/css/vars/_spacing.scss` tant que les custom properties spacing ne sont pas stabilisées.
- `color.adjust()` tant que les valeurs produites ne sont pas inventoriées et comparées.
- `sass`, `sass-loader` et `vite.css.preprocessorOptions.scss` tant qu'un seul fichier SCSS ou bloc `lang="scss"` reste nécessaire.

### À risque visuel

- `pages/index.vue` : 8 `color.adjust()`, nombreux breakpoints.
- `pages/eco-conception/index.vue` : 9 `color.adjust()`, page longue et structurante.
- `components/BoiteArticle.vue` : carte projet utilisée dans le portfolio.
- `layouts/default.vue` : navigation globale.
- `components/TheFooter.vue` : footer organique et media queries imbriquées.
- `assets/css/article-content.scss` et `pages/eco-conception/[slug].vue` : lisibilité éditoriale.

### À risque compatibilité

- Relative color syntax : à réserver aux navigateurs compatibles avec fallback.
- `color-mix()` : utilisable avec fallback explicite.
- `@custom-media` : à éviter sans outillage, car non supporté nativement.
- Refactor global des breakpoints : risque élevé et peu de gain immédiat.

## Techniques CSS modernes évaluées

### Custom properties

Décision : retenu, progressivement.

Bénéfice concret : moins d'imports Sass, tokens lisibles dans le CSS généré, meilleure maintenabilité. Déjà commencé pour couleurs et poids typographiques.

### `clamp()`, `min()`, `max()`, `calc()`

Décision : retenu pour typo et spacing, mais en figeant les valeurs produites par Sass.

Bénéfice concret : supprimer `math.div`, `fluid-space()` et une partie des maps Sass sans ajouter de dépendance.

### `color-mix()` avec fallback

Décision : à tester en lot dédié.

Bénéfice concret : remplacer progressivement des `color.adjust()` par du CSS natif. Condition : fallback stable, contraste validé.

### Relative color syntax

Décision : reporté.

Bénéfice possible : couleurs dérivées plus expressives. Risque : compatibilité et contrastes. Utiliser seulement via `@supports` dans un composant isolé.

### `@layer`

Décision : non retenu maintenant.

Le projet n'a pas aujourd'hui un problème clair de cascade globale. Ajouter des layers sans réorganiser l'architecture CSS augmenterait la complexité.

### `@supports`

Décision : retenu comme garde-fou local pour les techniques modernes non universelles.

### `prefers-reduced-motion`

Décision : à conserver et renforcer seulement si une animation ou transition ciblée pose problème.

Bénéfice GreenIT/perf : réduire les effets décoratifs et le travail navigateur.

### Logical properties

Décision : opportunité progressive pour les nouveaux lots, sans migration massive.

Bénéfice : meilleure lisibilité pour spacing inline/block, mais faible impact immédiat.

### Container queries

Décision : non retenu globalement.

À envisager uniquement pour un composant dont le comportement dépend réellement de son conteneur, pas pour remplacer tous les breakpoints.

## Techniques à éviter pour l'instant

- `@custom-media` sans plugin PostCSS.
- Ajout d'un plugin PostCSS.
- Refonte globale des breakpoints.
- Suppression immédiate de Sass.
- Migration massive des `color.adjust()`.
- Modification du design.
- Refactor massif de fichiers Vue.
- Suppression de dépendances `sass` ou `sass-loader` sans preuve d'absence totale d'usage.

## Croisement GreenIT / sobriété

Décisions issues du référentiel RWEB / GreenIT :

- limiter les dépendances et scripts inutiles : ne pas ajouter de plugin PostCSS ;
- limiter le CSS inutile : remplacer Sass seulement quand cela supprime un import, un helper ou une duplication ;
- éviter d'augmenter le CSS total : chaque lot doit comparer le total CSS généré ;
- garder des sélecteurs efficaces : profiter des lots CSS pour éviter les imbrications décoratives, mais sans refactor massif ;
- réduire repaint/reflow : ne pas introduire d'animations ni de techniques coûteuses ;
- favoriser le statique : conserver la génération Nuxt SSG et CSS externe cacheable.

## Croisement performance front-end

Décisions issues de la Front-End Performance Checklist :

- maintenir un budget CSS suivi : total actuel 171 523 octets ;
- ne pas mélanger refactor CSS et optimisation de chunks ;
- mesurer avant/après chaque lot ;
- éviter d'augmenter le coût critique CSS ;
- conserver les assets self-hosted et l'absence de web fonts externes ;
- privilégier progressive enhancement pour `color-mix()` et couleurs relatives ;
- surveiller la suppression de CSS inutilisé dans un lot distinct, car elle demande une preuve par page et ne se confond pas avec la migration Sass.

## Feuille de route proposée

### CSS-2 — Couleurs simples vers `var()`

- Objectif : remplacer les usages simples de `$vert`, `$gris*`, `$bleu*`, `$jaune`, `$fond*` quand cela permet de retirer `@use "~/assets/css/vars/_colors.scss"`.
- Fichiers probables : composants apps simples, `components/ArticleNavigation.vue`, `components/AppSearchInput.vue`, `pages/portfolio.vue`.
- Risques : faibles si les valeurs restent les mêmes.
- Validations : `npm test`, `npm run generate`, `seo-check`, comparaison CSS total/hash, capture ciblée `/portfolio/` et `/apps/`.
- Métrique attendue : nombre de `@use _colors.scss` en baisse, CSS total stable ou inférieur.
- Commit attendu : `refactor: migrer les couleurs simples vers les variables CSS`
- Hors périmètre : `color.adjust()`, refonte palette, changement de contraste.

### CSS-3 — Typographie native avec `clamp()`

- Objectif : figer les tailles fluides générées par `_typo.scss` en CSS natif, puis réduire maps, `@each`, `map.get` et `math.div`.
- Fichiers probables : `assets/css/vars/_typo.scss`, `assets/css/main.scss`, `assets/css/vars/_typography-custom-properties.scss`.
- Risques : élevés sur H1/H2, home, portfolio, articles.
- Validations : screenshots desktop/mobile `/`, `/eco-conception/`, article, `/portfolio/`, `/greenlight/`; comparaison CSS; SEO H1/title sans régression.
- Métrique attendue : suppression de `@each`, baisse de `math.div`, CSS total stable.
- Commit attendu : `refactor: figer la typographie fluide en CSS natif`
- Hors périmètre : changement de hiérarchie typographique.

### CSS-4 — Spacing tokens CSS

- Objectif : exposer `--space-*` en custom properties et migrer progressivement `$space-*`.
- Fichiers probables : `assets/css/vars/_spacing.scss`, `assets/css/article-content.scss`, `pages/eco-conception/[slug].vue`.
- Risques : moyens à élevés sur la lecture des articles.
- Validations : un article long, page pilier éco-conception, mobile/desktop, comparaison CSS total.
- Métrique attendue : baisse des usages `$space-*`, aucun grossissement CSS.
- Commit attendu : `refactor: exposer les espacements fluides en variables CSS`
- Hors périmètre : redesign des espacements.

### CSS-5 — Breakpoints et media queries

- Objectif : décider si `$breakpoint-tablet` reste Sass ou devient une valeur explicite `768px` / token documenté.
- Fichiers probables : tous les composants/pages avec `$breakpoint-tablet`, notamment home, Greenlight, pages apps, footer.
- Risques : élevés, car 80 occurrences et beaucoup de responsive.
- Validations : parcours mobile/desktop sur pages clés, diff CSS, contrôle visuel.
- Métrique attendue : pas forcément une baisse CSS ; objectif principal = réduire dépendance Sass.
- Commit attendu : `refactor: documenter les breakpoints en CSS natif`
- Hors périmètre : refonte globale responsive ou container queries généralisées.

### CSS-6 — Couleurs dérivées modernes avec fallbacks

- Objectif : remplacer une partie des `color.adjust()` par des valeurs CSS natives avec fallback.
- Fichiers probables : `pages/index.vue`, `pages/eco-conception/index.vue`, `components/BaseButton.vue`, `components/BoiteArticle.vue`, `layouts/default.vue`, `pages/services.vue`.
- Risques : contrastes, états hover/focus, cohérence visuelle.
- Validations : contraste, focus visible, screenshots ciblés, comparaison CSS.
- Métrique attendue : baisse de `color.adjust()`, pas d'augmentation CSS significative.
- Commit attendu : `refactor: stabiliser les couleurs dérivées sans Sass`
- Hors périmètre : nouvelle palette.

### CSS-7 — Réduction des imports Sass

- Objectif : convertir les blocs `lang="scss"` sans dépendance réelle et supprimer les `@use` devenus inutiles.
- Fichiers probables : `components/BaseHeading.vue`, `components/apps/AppGalleryLightbox.vue`, `pages/mentions-legales.vue`, puis composants simples.
- Risques : faibles à moyens.
- Validations : `node scripts/check-scss-explicit-imports.mjs`, CSS total, pages ciblées.
- Métrique attendue : nombre de blocs `lang="scss"` et `@use` en baisse.
- Commit attendu : `refactor: réduire les imports Sass inutiles`
- Hors périmètre : suppression de Sass globale.

### CSS-8 — Décision SCSS-6

- Objectif : décider si la suppression complète de Sass est réaliste après CSS-2 à CSS-7.
- Fichiers probables : `nuxt.config.ts`, `package.json`, `package-lock.json`, derniers fichiers `.scss`.
- Risques : très élevés si fait trop tôt.
- Validations : aucune suppression avant zéro fichier `.scss`, zéro `lang="scss"`, zéro `@use`, zéro variable `$...` applicative, `npm test`, `npm run generate`, `seo-check`, inspection visuelle.
- Métrique attendue : suppression possible de `sass` / `sass-loader` uniquement avec preuve.
- Commit attendu : `chore: retirer Sass après migration CSS native`
- Hors périmètre : à ne pas faire tant que les lots précédents ne sont pas validés.

## Décisions retenues

- Faire une migration progressive, page par page ou famille de tokens par famille de tokens.
- Prioriser les changements qui retirent un import Sass entier.
- Garder `additionalData` vide.
- Mesurer le total CSS à chaque lot.
- Utiliser les nouveautés CSS seulement si elles réduisent Sass, CSS généré, JS, complexité ou risque de maintenance.

## Décisions rejetées ou reportées

- Pas de suppression immédiate de Sass.
- Pas de plugin PostCSS.
- Pas de `@custom-media`.
- Pas de refonte globale des breakpoints.
- Pas de migration massive de `color.adjust()`.
- Pas de modification visuelle dans ce lot.
- Pas de suppression de dépendance dans ce lot.

## Validations exécutées dans ce lot

- `npm test` : OK, 49 pre-build checks, garde-fou Content et 23 tests Node.
- `npm run generate` : OK, 68 routes prerendered.
- `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : OK.
- `node scripts/check-scss-explicit-imports.mjs` : OK, `TOTAL_DEPENDANCES_IMPLICITES=0`.
- CSS généré inchangé par rapport à la baseline : 18 fichiers CSS, 171 523 octets, hash `ba0d818a9f0c3dbbda99661146aad5625e9822d64c57ba4a538079d331fd8e15`.

## Conclusion

La sortie de Sass est possible, mais pas en un seul lot sûr. Les meilleurs premiers gains sont les couleurs simples et les imports Sass inutiles. Les breakpoints, la typographie fluide, le spacing et les couleurs dérivées doivent rester des lots séparés avec mesures CSS et vérifications visuelles.
