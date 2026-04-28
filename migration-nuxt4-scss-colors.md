# SCSS-2 — Couleurs vers CSS custom properties

Date : 28 avril 2026

## Objectif

Migrer les variables couleur SCSS vers des custom properties CSS dans `:root`, en conservant des aliases SCSS de transition.

## Variables migrées

| Ancien alias SCSS | Nouvelle custom property | Raw Sass conservé | Notes |
|---|---|---|---|
| `$vert` | `--color-green` | `$vert-raw` | utilisé aussi avec `color.adjust()` |
| `$bleu1` | `--color-blue-1` | `$bleu1-raw` |  |
| `$bleu2` | `--color-blue-2` | `$bleu2-raw` | utilisé aussi avec `color.adjust()` |
| `$jaune` | `--color-yellow` | `$jaune-raw` |  |
| `$gris1` | `--color-gray-1` | `$gris1-raw` |  |
| `$gris2` | `--color-gray-2` | `$gris2-raw` |  |
| `$gris3` | `--color-gray-3` | `$gris3-raw` |  |
| `$gris4` | `--color-gray-4` | `$gris4-raw` |  |
| `$gris5` | `--color-gray-5` | `$gris5-raw` |  |
| `$gris6` | `--color-gray-6` | `$gris6-raw` |  |
| `$fondGris` | `--color-background-gray` | `$fondGris-raw` |  |
| `$fondClair` | `--color-background-light` | `$fondClair-raw` |  |
| `$deg1` | `--gradient-green-blue` | valeurs raw indirectes | alias de transition |
| `$deg2` | `--gradient-blue` | valeurs raw indirectes | alias de transition |
| `$deg3` | `--gradient-yellow` | valeurs raw indirectes | alias de transition |
| `$deg4` | `--gradient-green` | valeurs raw indirectes | alias de transition |

## Stratégie de transition

- Les aliases SCSS sont conservés.
- Les valeurs sources sont exposées dans `:root`.
- Les usages simples `$vert`, `$gris1`, etc. compilent vers `var(--...)`.
- Les usages `color.adjust()` utilisent les variantes raw Sass, car Sass ne peut pas ajuster une custom property CSS.

## Fichiers modifiés

- `assets/css/vars/_colors.scss`
- `components/BaseButton.vue`
- `components/BoiteArticle.vue`
- `layouts/default.vue`
- `pages/eco-conception/index.vue`
- `pages/index.vue`
- `pages/services.vue`

## Mesure CSS avant/après

Voir :
- `scss-colors-assets-before-bytes.txt`
- `scss-colors-assets-after-bytes.txt`
- `scss-colors-assets-bytes-diff.txt`

Résumé :
- poids CSS total avant : 203 540 octets
- poids CSS total après : 224 089 octets
- écart : +20 549 octets
- conclusion éco-impact : le poids CSS augmente, principalement parce que `:root` est exposé via le fichier de variables encore injecté par `additionalData` dans plusieurs compilations SCSS. Cette étape respecte le périmètre SCSS-2 ; la réduction de cette duplication est à traiter avec `SCSS-4` sur une branche séparée.

## Contrôle `color.adjust()`

Voir :
- `scss-colors-color-adjust-usages.txt`
- `scss-colors-color-adjust-remaining.txt`

Les lignes restantes dans `scss-colors-color-adjust-remaining.txt` utilisent déjà les variantes `*-raw`. Elles sont donc compatibles avec Sass.

## Validation

- `npm run generate` : succès, 100 routes générées.
- `npm test` : succès.
- check SEO : succès.

## Décision

- `SCSS-2` :
  - fait
- Étape suivante recommandée :
  - `SCSS-3` typographie sur branche séparée.

## Correction avant merge — déduplication des custom properties

### Problème

Le premier passage plaçait le bloc `:root` dans `_colors.scss`, fichier injecté via `additionalData`, ce qui dupliquait les custom properties dans plusieurs chunks CSS.

### Correction

- `_colors.scss` conserve uniquement les valeurs raw et aliases SCSS de transition.
- Les custom properties sont déclarées une seule fois dans `assets/css/vars/_color-custom-properties.scss`.
- `assets/css/vars/_color-custom-properties.scss` est importé uniquement dans `assets/css/main.scss`.

### Mesure après correction

- CSS avant SCSS-2 : 203 540 octets
- CSS après première implémentation : 224 089 octets
- CSS après déduplication : 206 807 octets
- Écart final : +3 267 octets par rapport à l’avant SCSS-2, soit -17 282 octets par rapport à la première implémentation.
- Occurrences `:root` :
  - voir `scss-colors-root-occurrences.txt`
- Occurrences `--color-green` :
  - voir `scss-colors-custom-properties-occurrences.txt`
  - note : le fichier peut être vide car le CSS généré est minifié sur une seule ligne ; `scss-colors-root-occurrences.txt` confirme que le bloc est présent dans un seul chunk CSS.

### Décision

Conserver la correction : les custom properties couleur restent disponibles, les aliases SCSS restent compatibles, et la duplication liée à `additionalData` est supprimée.
