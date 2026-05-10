# SCSS-6 — Décision sortie complète de SCSS

Date : 10 mai 2026

## Objectif

Auditer ce qu'il reste à faire pour supprimer complètement SCSS, sans réaliser la migration dans ce lot, puis décider si `SCSS-6` doit être traité avant ou après le merge Nuxt 4 vers `dev`.

## État Git

- Branche : `chore/nuxt4-migration`
- Working tree avant audit : propre.
- Périmètre de ce lot : documentation uniquement.

## Inventaire SCSS restant

Résumé observé :

- fichiers `.scss` : 8
- fichiers Vue avec `<style lang="scss">` : 28
- fichiers avec `@use` : 32
- fichiers avec variables Sass `$...` : 34
- occurrences de variables Sass `$...` : 511
- fichiers avec `sass:color` / `color.adjust()` : 6
- fichiers avec `@function` Sass : 2
- fichiers avec maps / `@each` Sass : 1

Fichiers `.scss` :

- `assets/css/article-content.scss`
- `assets/css/main.scss`
- `assets/css/mixins/_mixins.scss`
- `assets/css/vars/_color-custom-properties.scss`
- `assets/css/vars/_colors.scss`
- `assets/css/vars/_spacing.scss`
- `assets/css/vars/_typo.scss`
- `assets/css/vars/_typography-custom-properties.scss`

Fichiers Vue avec `lang="scss"` :

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

Point annexe repéré :

- `pages/contact.vue` contient encore une valeur `$gris3` dans un bloc `<style scoped>` non SCSS. Ce point devra être corrigé dans le lot CSS dédié, car la déclaration est aujourd'hui une valeur CSS invalide plutôt qu'un usage SCSS compilé.

## Dépendances concernées

Versions observées :

- `sass` déclaré : `^1.80.7`
- `sass` installé : `1.97.1`
- `sass-loader` déclaré : `^16.0.3`
- `sass-loader` installé : `16.0.6`

Configuration concernée :

- `nuxt.config.ts`
  - `css: ['~/assets/css/main.scss']`
  - `vite.css.preprocessorOptions.scss.additionalData: ''`
  - `vite.css.preprocessorOptions.scss.api: 'modern-compiler'`

Décision :

- `sass` et `sass-loader` ne sont supprimables qu'après conversion complète des fichiers `.scss`, des blocs `lang="scss"` et du point `$gris3` dans `pages/contact.vue`.
- `vite.css.preprocessorOptions.scss` ne doit être retiré qu'au même moment.

## Classification des usages

### Trivialement remplaçables par CSS natif

- Blocs `lang="scss"` qui n'utilisent ni variable, ni `@use`, ni nesting réellement utile :
  - `components/BaseHeading.vue`
  - `components/apps/AppGalleryLightbox.vue`
  - `pages/mentions-legales.vue`
- Usages simples de couleurs déjà exposées en custom properties :
  - `$vert` -> `var(--color-green)`
  - `$gris*` -> `var(--color-gray-*)`
  - `$bleu*` -> `var(--color-blue-*)`
  - `$jaune` -> `var(--color-yellow)`
  - `$fond*` -> `var(--color-background-*)`
- Poids typographiques déjà exposés :
  - `$light`, `$normal`, `$bold`, `$black` -> `var(--font-weight-*)`

### Nécessitant une réécriture prudente

- Media queries basées sur `$breakpoint-tablet`, très présentes dans les pages clés.
- Espacements fluides `$space-*` utilisés dans :
  - `assets/css/article-content.scss`
  - `pages/eco-conception/[slug].vue`
  - `assets/css/vars/_spacing.scss`
- Génération typographique dans `assets/css/vars/_typo.scss` :
  - `sass:map`
  - `sass:math`
  - `@function type-ratio`
  - `@function type-style`
  - `@each $level in $type-levels`
- Ajustements couleur dans 6 fichiers :
  - `components/BaseButton.vue`
  - `components/BoiteArticle.vue`
  - `layouts/default.vue`
  - `pages/eco-conception/index.vue`
  - `pages/index.vue`
  - `pages/services.vue`

Ces usages doivent être remplacés par des valeurs explicites, des custom properties complémentaires, `color-mix()` ou couleurs relatives CSS seulement avec vérification visuelle et compatibilité navigateur.

### À conserver provisoirement

- `assets/css/vars/_spacing.scss`
- `assets/css/vars/_typo.scss`
- usages `color.adjust()` tant que les valeurs générées n'ont pas été stabilisées et comparées ;
- `sass` et `sass-loader` tant que le projet compile encore des styles SCSS.

## Risques

### Impact CSS généré

`SCSS-4/5` a stabilisé un total CSS à 171 279 octets après suppression de l'injection globale `additionalData`. Une sortie complète de SCSS peut rester neutre ou positive, mais elle peut aussi regonfler le CSS si les tokens sont dupliqués ou si les helpers sont remplacés sans discipline.

### Impact design

Risque moyen à élevé :

- pages clés concernées : `/`, `/eco-conception/`, article éco-conception, `/services/`, `/portfolio/`, `/greenlight/`, pages apps ;
- `color.adjust()` touche des teintes d'accent et d'états interactifs ;
- `$breakpoint-tablet` touche de nombreux comportements responsive.

### Risque de gros diff

Risque élevé :

- 34 fichiers avec variables Sass ;
- 28 fichiers Vue en `lang="scss"` ;
- 511 occurrences `$...` ;
- conversion des helpers typo/spacing non triviale.

### Risque avant merge `dev`

Élevé pour un bénéfice immédiat faible :

- la branche Nuxt 4 est déjà validée avec SCSS ;
- `SCSS-4/5` a déjà supprimé la dépendance implicite la plus risquée (`additionalData`) ;
- un changement CSS large juste avant preview augmenterait le risque de régression visuelle.

## Décision

Option retenue : **B — reporter SCSS-6 après preview Nuxt 4**.

Justification :

- la migration Nuxt 4 ne dépend pas de la suppression complète de SCSS ;
- les validations actuelles passent avec SCSS ;
- la sortie SCSS demande plus qu'un petit diff contrôlé ;
- le risque principal avant merge `dev` est visuel, pas technique ;
- `SCSS-6` doit être une branche dédiée, avec validation visuelle ciblée.

`SCSS-6` reste donc ouvert dans `TODO.md`.

## Plan de migration recommandé si SCSS-6 est retenu

1. Créer une branche dédiée après preview Nuxt 4 validée.
2. Convertir les blocs sans dépendance Sass :
   - `components/BaseHeading.vue`
   - `components/apps/AppGalleryLightbox.vue`
   - `pages/mentions-legales.vue`
3. Corriger le `$gris3` invalide de `pages/contact.vue`.
4. Remplacer les usages couleur simples par custom properties CSS, par lots de composants.
5. Remplacer les poids typographiques simples par custom properties CSS.
6. Introduire des custom properties d'espacement si nécessaire, puis convertir `$space-*`.
7. Stabiliser ou figer les sorties de `color.adjust()` avant de retirer `sass:color`.
8. Remplacer `$breakpoint-tablet` par une custom media strategy ou des media queries explicites.
9. Convertir `assets/css/main.scss` et `assets/css/article-content.scss` en CSS natif.
10. Retirer les fichiers `assets/css/vars/*.scss` devenus inutiles.
11. Remplacer `~/assets/css/main.scss` par un fichier CSS natif dans `nuxt.config.ts`.
12. Supprimer `vite.css.preprocessorOptions.scss`.
13. Supprimer `sass` et `sass-loader` seulement quand aucun fichier SCSS ni `lang="scss"` ne reste.

## Validations à prévoir

Pour chaque lot :

- `npm test`
- `npm run generate`
- `NUXT_PUBLIC_SITE_URL=https://beabot.fr node scripts/seo-check.mjs`
- `npm run lint:js`

Vérifications visuelles minimales :

- `/`
- `/eco-conception/`
- un article `/eco-conception/<slug>/`
- `/services/`
- `/portfolio/`
- `/greenlight/`
- `/apps/`
- `/contact/`

Mesures CSS :

- nombre de fichiers CSS générés ;
- poids total `/_nuxt/*.css` ;
- CSS links de la homepage ;
- comparaison avec le jalon SCSS-5 : 171 279 octets.

## Conclusion

- `SCSS-6` : non réalisé dans ce lot.
- Décision : reporter après preview Nuxt 4.
- Prochaine étape avant merge `dev` : conserver la validation Nuxt 4 et traiter uniquement le lot documentaire stack obsolète déjà identifié.
