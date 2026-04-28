# Inventaire SCSS — Préparation CSS moderne

Date : 28 avril 2026

## Objectif

Réaliser `SCSS-1` du backlog Nuxt 4 : inventorier les variables SCSS utilisées dans les composants scoped, pages, layouts et fichiers globaux.

## Configuration Sass actuelle

- API Sass : `modern-compiler`.
- `vite.css.preprocessorOptions.scss.additionalData` : actif.
- Fichiers injectés globalement : `_colors.scss`, `_typo.scss`, `_spacing.scss`, `mixins.scss`.
- Risque Nuxt 4 identifié : dépendances implicites aux variables Sass globales dans les composants/pages scoped.

## Résumé chiffré

- Fichiers SCSS globaux : 6
- Fichiers Vue avec style SCSS : 25
- Variables globales déclarées : 57
- Variables locales déclarées : 2
- Usages de variables SCSS : 434
- Fichiers dépendants de `additionalData` : 21
- Fichiers avec imports explicites : 8

Note : l’inventaire nettoyé ne compte que les fichiers `.scss` et les blocs `<style lang="scss">` des fichiers Vue. Les usages `$...` présents dans les scripts Vue ou les arguments nommés Sass comme `$lightness` ne sont pas comptés comme variables applicatives.

## Variables globales

| Variable | Famille | Déclarée dans | Nombre d’usages | Candidat custom property | Priorité |
|---|---|---|---:|---|---|
| `$base-unitless` | typo | `assets/css/vars/_typo.scss` | 0 | oui | moyenne |
| `$black` | typo | `assets/css/vars/_typo.scss` | 2 | oui | moyenne |
| `$bleu1` | color | `assets/css/vars/_colors.scss` | 5 | oui | haute |
| `$bleu2` | color | `assets/css/vars/_colors.scss` | 13 | oui | haute |
| `$bold` | typo | `assets/css/vars/_typo.scss` | 9 | oui | moyenne |
| `$breakpoint-tablet` | breakpoint | `assets/css/vars/_typo.scss` | 79 | non | basse |
| `$deg1` | color | `assets/css/vars/_colors.scss` | 0 | oui | haute |
| `$deg2` | color | `assets/css/vars/_colors.scss` | 0 | oui | haute |
| `$deg3` | color | `assets/css/vars/_colors.scss` | 0 | oui | haute |
| `$deg4` | color | `assets/css/vars/_colors.scss` | 0 | oui | haute |
| `$fluid-min` | typo | `assets/css/vars/_typo.scss` | 0 | oui | moyenne |
| `$fluid-reduction` | typo | `assets/css/vars/_typo.scss` | 0 | oui | moyenne |
| `$fluid-scaler` | typo | `assets/css/vars/_typo.scss` | 0 | oui | moyenne |
| `$fondClair` | color | `assets/css/vars/_colors.scss` | 5 | oui | haute |
| `$fondGris` | color | `assets/css/vars/_colors.scss` | 2 | oui | haute |
| `$gris1` | color | `assets/css/vars/_colors.scss` | 46 | oui | haute |
| `$gris2` | color | `assets/css/vars/_colors.scss` | 37 | oui | haute |
| `$gris3` | color | `assets/css/vars/_colors.scss` | 33 | oui | haute |
| `$gris4` | color | `assets/css/vars/_colors.scss` | 8 | oui | haute |
| `$gris5` | color | `assets/css/vars/_colors.scss` | 1 | oui | haute |
| `$gris6` | color | `assets/css/vars/_colors.scss` | 5 | oui | haute |
| `$jaune` | color | `assets/css/vars/_colors.scss` | 4 | oui | haute |
| `$level-size` | typo | `assets/css/vars/_typo.scss` | 2 | oui | moyenne |
| `$level-unitless` | typo | `assets/css/vars/_typo.scss` | 0 | oui | moyenne |
| `$light` | typo | `assets/css/vars/_typo.scss` | 2 | oui | moyenne |
| `$max-width-rem` | spacing | `assets/css/vars/_spacing.scss` | 0 | oui | moyenne |
| `$min-width-rem` | spacing | `assets/css/vars/_spacing.scss` | 0 | oui | moyenne |
| `$normal` | typo | `assets/css/vars/_typo.scss` | 3 | oui | moyenne |
| `$slope` | spacing | `assets/css/vars/_spacing.scss` | 0 | oui | moyenne |
| `$space-2xl` | spacing | `assets/css/vars/_spacing.scss` | 0 | oui | moyenne |
| `$space-2xl-3xl` | spacing | `assets/css/vars/_spacing.scss` | 0 | oui | moyenne |
| `$space-2xs` | spacing | `assets/css/vars/_spacing.scss` | 2 | oui | moyenne |
| `$space-2xs-xs` | spacing | `assets/css/vars/_spacing.scss` | 0 | oui | moyenne |
| `$space-3xl` | spacing | `assets/css/vars/_spacing.scss` | 0 | oui | moyenne |
| `$space-3xs` | spacing | `assets/css/vars/_spacing.scss` | 6 | oui | moyenne |
| `$space-3xs-2xs` | spacing | `assets/css/vars/_spacing.scss` | 0 | oui | moyenne |
| `$space-base` | spacing | `assets/css/vars/_spacing.scss` | 0 | oui | moyenne |
| `$space-l` | spacing | `assets/css/vars/_spacing.scss` | 2 | oui | moyenne |
| `$space-l-xl` | spacing | `assets/css/vars/_spacing.scss` | 0 | oui | moyenne |
| `$space-m` | spacing | `assets/css/vars/_spacing.scss` | 2 | oui | moyenne |
| `$space-m-l` | spacing | `assets/css/vars/_spacing.scss` | 0 | oui | moyenne |
| `$space-max-width` | spacing | `assets/css/vars/_spacing.scss` | 0 | oui | moyenne |
| `$space-min-width` | spacing | `assets/css/vars/_spacing.scss` | 0 | oui | moyenne |
| `$space-ratio` | spacing | `assets/css/vars/_spacing.scss` | 0 | oui | moyenne |
| `$space-s` | spacing | `assets/css/vars/_spacing.scss` | 4 | oui | moyenne |
| `$space-s-m` | spacing | `assets/css/vars/_spacing.scss` | 0 | oui | moyenne |
| `$space-xl` | spacing | `assets/css/vars/_spacing.scss` | 2 | oui | moyenne |
| `$space-xl-2xl` | spacing | `assets/css/vars/_spacing.scss` | 0 | oui | moyenne |
| `$space-xs` | spacing | `assets/css/vars/_spacing.scss` | 0 | oui | moyenne |
| `$space-xs-s` | spacing | `assets/css/vars/_spacing.scss` | 0 | oui | moyenne |
| `$type-base-size` | typo | `assets/css/vars/_typo.scss` | 2 | oui | moyenne |
| `$type-levels` | typo | `assets/css/vars/_typo.scss` | 0 | oui | moyenne |
| `$type-ratios` | typo | `assets/css/vars/_typo.scss` | 0 | oui | moyenne |
| `$type-size-ratio` | typo | `assets/css/vars/_typo.scss` | 0 | oui | moyenne |
| `$type-styles` | typo | `assets/css/vars/_typo.scss` | 0 | oui | moyenne |
| `$vert` | color | `assets/css/vars/_colors.scss` | 89 | oui | haute |
| `$y-intercept` | spacing | `assets/css/vars/_spacing.scss` | 0 | oui | moyenne |

## Variables locales

| Variable | Fichier | Rôle | Décision |
|---|---|---|---|
| `$height` | `components/TheFooter.vue` | local-layout | conserver SCSS / à vérifier |
| `$width` | `components/TheFooter.vue` | local-layout | conserver SCSS / à vérifier |

## Dépendances à `additionalData`

| Fichier | Variables utilisées | Imports explicites présents | Recommandation |
|---|---|---|---|
| `assets/css/article-content.scss` | `$bold`, `$gris1`, `$gris2`, `$gris3`, `$gris4`, `$gris6`, `$normal`, `$space-2xs`, `$space-3xs`, `$space-l`, `$space-m`, `$space-s`, `$space-xl`, `$vert` | aucun | @use "~/assets/css/vars/_colors.scss" as *;<br>@use "~/assets/css/vars/_spacing.scss" as *;<br>@use "~/assets/css/vars/_typo.scss" as *; |
| `assets/css/main.scss` | `$black`, `$bleu1`, `$bleu2`, `$bold`, `$breakpoint-tablet`, `$fondClair`, `$fondGris`, `$gris1`, `$gris2`, `$gris3`, `$gris4`, `$gris5`, `$gris6`, `$level-size`, `$light`, `$normal`, `$type-base-size`, `$vert` | aucun | @use "~/assets/css/vars/_colors.scss" as *;<br>@use "~/assets/css/vars/_typo.scss" as *; |
| `components/AppSearchInput.vue` | `$vert` | aucun | @use "~/assets/css/vars/_colors.scss" as *; |
| `components/ArticleNavigation.vue` | `$gris1` | aucun | @use "~/assets/css/vars/_colors.scss" as *; |
| `components/BaseButton.vue` | `$bleu2`, `$gris1`, `$gris2`, `$vert` | oui | @use "~/assets/css/vars/_colors.scss" as *; |
| `components/BoiteArticle.vue` | `$bleu2`, `$breakpoint-tablet`, `$gris1`, `$gris2`, `$gris3`, `$vert` | oui | @use "~/assets/css/vars/_colors.scss" as *;<br>@use "~/assets/css/vars/_typo.scss" as *; |
| `components/Oeuf.vue` | `$bleu1`, `$bleu2`, `$jaune`, `$vert` | aucun | @use "~/assets/css/vars/_colors.scss" as *; |
| `components/TheFooter.vue` | `$breakpoint-tablet`, `$fondGris`, `$gris4`, `$vert` | aucun | @use "~/assets/css/vars/_colors.scss" as *;<br>@use "~/assets/css/vars/_typo.scss" as *; |
| `components/apps/AppBreadcrumb.vue` | `$gris1`, `$gris3`, `$vert` | aucun | @use "~/assets/css/vars/_colors.scss" as *; |
| `components/apps/AppCard.vue` | `$gris1`, `$gris2`, `$gris3`, `$vert` | aucun | @use "~/assets/css/vars/_colors.scss" as *; |
| `components/apps/AppFaqList.vue` | `$gris1`, `$gris2`, `$vert` | aucun | @use "~/assets/css/vars/_colors.scss" as *; |
| `components/apps/AppLegalTabs.vue` | `$gris1`, `$gris2`, `$gris3`, `$vert` | aucun | @use "~/assets/css/vars/_colors.scss" as *; |
| `components/apps/AppReleaseInterestForm.vue` | `$breakpoint-tablet`, `$vert` | aucun | @use "~/assets/css/vars/_colors.scss" as *;<br>@use "~/assets/css/vars/_typo.scss" as *; |
| `components/server/Oeuf.server.vue` | `$bleu1`, `$bleu2`, `$jaune`, `$vert` | aucun | @use "~/assets/css/vars/_colors.scss" as *; |
| `error.vue` | `$bold`, `$breakpoint-tablet`, `$gris2` | aucun | @use "~/assets/css/vars/_colors.scss" as *;<br>@use "~/assets/css/vars/_typo.scss" as *; |
| `layouts/default.vue` | `$bleu1`, `$bleu2`, `$breakpoint-tablet`, `$fondClair`, `$gris1`, `$jaune`, `$light`, `$vert` | oui | @use "~/assets/css/vars/_colors.scss" as *;<br>@use "~/assets/css/vars/_typo.scss" as *; |
| `pages/404.vue` | `$bold`, `$breakpoint-tablet`, `$gris2` | aucun | @use "~/assets/css/vars/_colors.scss" as *;<br>@use "~/assets/css/vars/_typo.scss" as *; |
| `pages/apps/duo-spend.vue` | `$breakpoint-tablet`, `$gris1`, `$gris2`, `$gris3`, `$vert` | aucun | @use "~/assets/css/vars/_colors.scss" as *;<br>@use "~/assets/css/vars/_typo.scss" as *; |
| `pages/apps/index.vue` | `$breakpoint-tablet`, `$gris1`, `$gris2`, `$gris3`, `$vert` | aucun | @use "~/assets/css/vars/_colors.scss" as *;<br>@use "~/assets/css/vars/_typo.scss" as *; |
| `pages/apps/meeting-mode.vue` | `$breakpoint-tablet`, `$gris1`, `$gris2`, `$gris3`, `$vert` | aucun | @use "~/assets/css/vars/_colors.scss" as *;<br>@use "~/assets/css/vars/_typo.scss" as *; |
| `pages/apps/siturem.vue` | `$breakpoint-tablet`, `$gris1`, `$gris2`, `$gris3`, `$vert` | aucun | @use "~/assets/css/vars/_colors.scss" as *;<br>@use "~/assets/css/vars/_typo.scss" as *; |
| `pages/eco-conception/[slug].vue` | `$bold`, `$breakpoint-tablet`, `$gris1`, `$gris3`, `$gris4`, `$gris6`, `$space-2xs`, `$space-3xs`, `$space-l`, `$space-m`, `$space-s`, `$space-xl`, `$vert` | aucun | @use "~/assets/css/vars/_colors.scss" as *;<br>@use "~/assets/css/vars/_spacing.scss" as *;<br>@use "~/assets/css/vars/_typo.scss" as *; |
| `pages/eco-conception/index.vue` | `$breakpoint-tablet`, `$gris1`, `$vert` | oui | @use "~/assets/css/vars/_colors.scss" as *;<br>@use "~/assets/css/vars/_typo.scss" as *; |
| `pages/greenlight.vue` | `$breakpoint-tablet` | aucun | @use "~/assets/css/vars/_typo.scss" as *; |
| `pages/index.vue` | `$breakpoint-tablet`, `$gris1`, `$vert` | oui | @use "~/assets/css/vars/_colors.scss" as *;<br>@use "~/assets/css/vars/_typo.scss" as *; |
| `pages/portfolio.vue` | `$gris1`, `$gris2`, `$gris3`, `$vert` | aucun | @use "~/assets/css/vars/_colors.scss" as *; |
| `pages/services.vue` | `$breakpoint-tablet`, `$vert` | oui | @use "~/assets/css/vars/_colors.scss" as *;<br>@use "~/assets/css/vars/_typo.scss" as *; |

## Candidats SCSS-2 — Couleurs

Variables couleur à migrer en priorité :

- `$bleu1`
- `$bleu2`
- `$deg1`
- `$deg2`
- `$deg3`
- `$deg4`
- `$fondClair`
- `$fondGris`
- `$gris1`
- `$gris2`
- `$gris3`
- `$gris4`
- `$gris5`
- `$gris6`
- `$jaune`
- `$vert`

## Candidats SCSS-3 — Typographie

Variables typo / tailles à traiter en priorité :

- `$base-unitless`
- `$black`
- `$bold`
- `$fluid-min`
- `$fluid-reduction`
- `$fluid-scaler`
- `$level-size`
- `$level-unitless`
- `$light`
- `$normal`
- `$type-base-size`
- `$type-levels`
- `$type-ratios`
- `$type-size-ratio`
- `$type-styles`
- `$breakpoint-tablet` : à conserver côté SCSS pour les media queries, sauf stratégie CSS dédiée ultérieure.

## Préparation SCSS-4 — Imports explicites

Traiter en priorité les fichiers qui utilisent des variables globales sans `@use` local :

- `assets/css/article-content.scss`
- `assets/css/main.scss`
- `components/AppSearchInput.vue`
- `components/ArticleNavigation.vue`
- `components/Oeuf.vue`
- `components/TheFooter.vue`
- `components/apps/AppBreadcrumb.vue`
- `components/apps/AppCard.vue`
- `components/apps/AppFaqList.vue`
- `components/apps/AppLegalTabs.vue`
- `components/apps/AppReleaseInterestForm.vue`
- `components/server/Oeuf.server.vue`
- `error.vue`
- `pages/404.vue`
- `pages/apps/duo-spend.vue`
- `pages/apps/index.vue`
- `pages/apps/meeting-mode.vue`
- `pages/apps/siturem.vue`
- `pages/eco-conception/[slug].vue`
- `pages/greenlight.vue`

## Éco-impact à surveiller pour SCSS-5

- poids total CSS généré ;
- nombre de fichiers CSS générés ;
- poids homepage ;
- chunks `entry`, `default`, `index`, `vendor-libs`.

## Validation locale

- `npm test` : succès.
- `npm run generate` : succès, 100 routes générées.
- `SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : succès.

## Décisions

- Aucun style modifié dans cette branche.
- Aucune variable migrée dans cette branche.
- Aucun import SCSS modifié dans cette branche.
- Aucune dépendance modifiée.

## Conclusion

- `SCSS-1` :
  - fait
- Prochaine étape recommandée :
  - `SCSS-2` sur une branche séparée dédiée aux couleurs.