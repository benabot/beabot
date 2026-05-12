# SCSS-4 — Imports SCSS explicites

Date : 28 avril 2026

## Objectif

Remplacer les imports SCSS globaux injectés via `vite.css.preprocessorOptions.scss.additionalData` par des imports explicites dans les fichiers qui utilisent réellement les variables et mixins Sass.

## Contexte

Les étapes précédentes ont migré :
- `SCSS-2` : couleurs vers custom properties CSS avec aliases SCSS de transition ;
- `SCSS-3` : tokens typographiques simples vers custom properties CSS avec aliases SCSS de transition.

Avant cette étape, plusieurs fichiers dépendaient implicitement de :

```scss
@use "~/assets/css/vars/_colors.scss" as *;
@use "~/assets/css/vars/_typo.scss" as *;
@use "~/assets/css/vars/_spacing.scss" as *;
@use "~/assets/css/mixins/mixins.scss" as *;
```

via `additionalData`.

## Configuration avant/après

### Avant

Voir :
- `scss-explicit-imports-additional-data-before.txt`

### Après

Voir :
- `scss-explicit-imports-additional-data-after.txt`

Résumé :
- `additionalData` :
  - vidé (`additionalData: ''`)
- `api: modern-compiler` :
  - conservé

## Fichiers modifiés

| Fichier | Imports ajoutés | Raison |
|---|---|---|
| `assets/css/article-content.scss` | `_colors.scss`, `_typo.scss`, `_spacing.scss` | utilise couleurs, poids typo et espacements Sass |
| `assets/css/main.scss` | `_colors.scss`, `_typo.scss` | utilise aliases couleurs, typo et `$breakpoint-tablet` |
| `layouts/default.vue` | `_colors.scss`, `_typo.scss` | utilise couleurs et `$breakpoint-tablet` |
| `components/AppSearchInput.vue` | `_colors.scss` | utilise couleurs |
| `components/ArticleNavigation.vue` | `_colors.scss` | utilise couleurs |
| `components/BaseButton.vue` | `_colors.scss` | utilise couleurs et conserve `sass:color` |
| `components/BoiteArticle.vue` | `_colors.scss`, `_typo.scss` | utilise couleurs, `color.adjust()` et `$breakpoint-tablet` |
| `components/Oeuf.vue` | `_colors.scss` | utilise couleurs |
| `components/TheFooter.vue` | `_colors.scss`, `_typo.scss` | utilise couleurs et `$breakpoint-tablet` |
| `components/apps/AppBreadcrumb.vue` | `_colors.scss` | utilise couleurs |
| `components/apps/AppCard.vue` | `_colors.scss` | utilise couleurs |
| `components/apps/AppFaqList.vue` | `_colors.scss` | utilise couleurs |
| `components/apps/AppLegalTabs.vue` | `_colors.scss` | utilise couleurs |
| `components/apps/AppReleaseInterestForm.vue` | `_colors.scss`, `_typo.scss` | utilise couleurs et `$breakpoint-tablet` |
| `components/server/Oeuf.server.vue` | `_colors.scss` | utilise couleurs |
| `error.vue` | `_colors.scss`, `_typo.scss` | utilise couleur, poids typo et `$breakpoint-tablet` |
| `pages/404.vue` | `_colors.scss`, `_typo.scss` | utilise couleur, poids typo et `$breakpoint-tablet` |
| `pages/apps/duo-spend.vue` | `_colors.scss`, `_typo.scss` | utilise couleurs et `$breakpoint-tablet` |
| `pages/apps/index.vue` | `_colors.scss`, `_typo.scss` | utilise couleurs et `$breakpoint-tablet` |
| `pages/apps/meeting-mode.vue` | `_colors.scss`, `_typo.scss` | utilise couleurs et `$breakpoint-tablet` |
| `pages/apps/siturem.vue` | `_colors.scss`, `_typo.scss` | utilise couleurs et `$breakpoint-tablet` |
| `pages/eco-conception/[slug].vue` | `_colors.scss`, `_typo.scss`, `_spacing.scss` | utilise couleurs, `$breakpoint-tablet` et espacements Sass |
| `pages/eco-conception/index.vue` | `_colors.scss`, `_typo.scss` | utilise couleurs, `color.adjust()` et `$breakpoint-tablet` |
| `pages/greenlight.vue` | `_typo.scss` | utilise `$breakpoint-tablet` |
| `pages/index.vue` | `_colors.scss`, `_typo.scss` | utilise couleurs, `color.adjust()` et `$breakpoint-tablet` |
| `pages/portfolio.vue` | `_colors.scss` | utilise couleurs |
| `pages/services.vue` | `_colors.scss`, `_typo.scss` | utilise couleurs, `color.adjust()` et `$breakpoint-tablet` |

## Lots de migration

### Lot A — fichiers globaux

- Fichiers :
  - `assets/css/main.scss`
  - `assets/css/article-content.scss`
- Résultat `npm run generate` :
  - succès, voir `scss-explicit-imports-generate-lot-a.txt`

### Lot B — layouts

- Fichiers :
  - `layouts/default.vue`
- Résultat :
  - succès, voir `scss-explicit-imports-generate-lot-b.txt`

### Lot C — composants

- Fichiers :
  - `components/AppSearchInput.vue`
  - `components/ArticleNavigation.vue`
  - `components/BaseButton.vue`
  - `components/BoiteArticle.vue`
  - `components/Oeuf.vue`
  - `components/TheFooter.vue`
  - `components/apps/AppBreadcrumb.vue`
  - `components/apps/AppCard.vue`
  - `components/apps/AppFaqList.vue`
  - `components/apps/AppLegalTabs.vue`
  - `components/apps/AppReleaseInterestForm.vue`
  - `components/server/Oeuf.server.vue`
- Résultat :
  - succès, voir `scss-explicit-imports-generate-lot-c.txt`

### Lot D — pages

- Fichiers :
  - `pages/404.vue`
  - `pages/apps/duo-spend.vue`
  - `pages/apps/index.vue`
  - `pages/apps/meeting-mode.vue`
  - `pages/apps/siturem.vue`
  - `pages/eco-conception/[slug].vue`
  - `pages/eco-conception/index.vue`
  - `pages/greenlight.vue`
  - `pages/index.vue`
  - `pages/portfolio.vue`
  - `pages/services.vue`
  - `error.vue`
- Résultat :
  - succès, voir `scss-explicit-imports-generate-lot-d.txt`

## Contrôle des dépendances implicites

Voir :
- `scss-explicit-imports-dependencies-before.txt`
- `scss-explicit-imports-dependencies-after.txt`
- `scss-explicit-imports-check.txt`

Conclusion :
- fichiers encore dépendants de `additionalData` :
  - aucun
- total contrôlé après migration :
  - `TOTAL_FICHIERS_ANALYSES=27`
  - `TOTAL_DEPENDANCES_IMPLICITES=0`

## Mesure CSS avant/après

Voir :
- `scss-explicit-imports-total-before.txt`
- `scss-explicit-imports-total-after.txt`
- `scss-explicit-imports-assets-bytes-diff.txt`

Résumé :
- poids CSS total avant : 207 232 octets
- poids CSS total après : 171 279 octets
- écart : -35 953 octets
- conclusion éco-impact : la suppression de l'injection globale réduit nettement le CSS généré, car les modules SCSS ne sont plus injectés dans chaque compilation de style.

## Validation

- `npm run generate` : succès, 100 routes générées.
- `npm test` : succès.
- check SEO : succès.

## Décision

- `SCSS-4` :
  - fait
- Étape suivante recommandée :
  - `SCSS-5` validation globale éco-impact sur branche séparée.
