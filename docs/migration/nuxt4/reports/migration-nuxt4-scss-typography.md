# SCSS-3 — Typographie vers CSS custom properties

Date : 28 avril 2026

## Objectif

Migrer les tokens typographiques simples vers des custom properties CSS, en conservant les aliases SCSS de transition.

## Périmètre

### Migré

| Ancien alias SCSS | Nouvelle custom property | Raw Sass conservé | Notes |
|---|---|---|---|
| `$light` | `--font-weight-light` | `$font-weight-light-raw` | poids typo |
| `$normal` | `--font-weight-normal` | `$font-weight-normal-raw` | poids typo |
| `$bold` | `--font-weight-bold` | `$font-weight-bold-raw` | poids typo |
| `$black` | `--font-weight-black` | `$font-weight-black-raw` | poids typo |
| `$type-base-size` | `--font-size-base` | `$type-base-size-raw` | utilisé dans certains calculs Sass |

### Non migré

| Variable | Raison |
|---|---|
| `$breakpoint-tablet` | utilisée dans les media queries ; custom properties non utilisables directement dans `@media` |
| `$type-ratios` | map Sass |
| `$type-levels` | boucle Sass |
| `$type-styles` | map générée |
| `$type-size-ratio` | calcul Sass |
| `$base-unitless` | calcul Sass |
| `$level-unitless` | calcul Sass |
| `$fluid-reduction` | calcul Sass |
| `$fluid-min` | calcul Sass |
| `$fluid-scaler` | calcul Sass |

## Stratégie de transition

- Les aliases SCSS sont conservés.
- Les tokens simples exposent des custom properties CSS.
- Les valeurs raw Sass sont conservées pour les calculs Sass.
- Les custom properties typographiques sont déclarées une seule fois dans le CSS global.
- Aucun import `additionalData` n'a été modifié.

## Fichiers modifiés

- `assets/css/vars/_typo.scss`
- `assets/css/vars/_typography-custom-properties.scss`
- `assets/css/main.scss`

## Mesure CSS avant/après

Voir :
- `scss-typo-total-before.txt`
- `scss-typo-total-after.txt`
- `scss-typo-assets-before-bytes.txt`
- `scss-typo-assets-after-bytes.txt`
- `scss-typo-assets-bytes-diff.txt`

Résumé :
- poids CSS total avant : 206 807 octets
- poids CSS total après : 207 232 octets
- écart : +425 octets
- conclusion éco-impact : l'augmentation est limitée au coût des cinq custom properties typographiques déclarées dans le CSS global. Le bloc n'est pas dupliqué dans chaque chunk CSS.

## Contrôle de duplication

Voir :
- `scss-typo-root-occurrences.txt`
- `scss-typo-custom-properties-occurrences.txt`

Le CSS généré est minifié sur une seule ligne. `scss-typo-root-occurrences.txt` confirme que les custom properties typographiques sont présentes dans le même chunk global que les custom properties couleur, sans duplication par chunk.

## Validation

- `npm run generate` : succès, 100 routes générées.
- `npm test` : succès.
- check SEO : succès.

## Décision

- `SCSS-3` :
  - fait
- Étape suivante recommandée :
  - `SCSS-4` imports explicites `additionalData` sur branche séparée.
