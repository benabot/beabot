# Audit PSI — Étape 1 Performance Nuxt 4

Date : 28 avril 2026

## Source

Audit PageSpeed Insights mobile du 27 avril 2026.

## Problème identifié

Trois CSS bloquent le rendu initial :

| Ressource | Taille PSI | Durée PSI |
|---|---:|---:|
| `/_nuxt/entry.CiPWGjpP.css` | 3,2 KiB | 150 ms |
| `/_nuxt/index.CSBfKQaT.css` | 3,5 KiB | 450 ms |
| `/_nuxt/default.JRunTdMq.css` | 4,2 KiB | 450 ms |

Économie estimée : 270 ms.

Chaîne critique maximale : 444 ms sur `entry.css`.

## Configuration actuelle

- `experimental.inlineSSRStyles` : `false`
  - Commentaire existant : désactivé pour favoriser le cache CSS et réduire la taille HTML.
- CSS globaux déclarés dans `nuxt.config.ts` :
  - `~/assets/css/main.scss`
- Vite CSS :
  - `cssCodeSplit: true`
  - `scss.additionalData` injecte les variables et mixins SCSS dans les fichiers concernés.
- Choix de cache déjà documentés :
  - CSS externe favorisé pour le cache.
  - `routeRules` avec `noScripts: true` sur `/` et `/mentions-legales/`.
  - `inlineSSRStyles: false` assumé historiquement pour garder un HTML plus léger.
- Structure SCSS globale :
  - `assets/css/main.scss` contient les styles transverses, helpers, base typographique et layout.
  - `assets/css/article-content.scss` est importé uniquement par `pages/eco-conception/[slug].vue`.
  - `assets/css/vars/*` et `assets/css/mixins/*` sont injectés via Vite, mais ne produisent pas directement de CSS global.

## Build local avant modification

- Résultat `npm run generate` : succès
  - pré-build : 49 checks passés, 0 warning, 0 erreur
  - `test:content` : OK
  - `test:node` : 18 tests passés
  - génération : 100 routes prerendered
- Assets CSS/JS :
  - voir `migration-nuxt4-psi-assets-before.txt`
- CSS links homepage :
  - voir `migration-nuxt4-psi-home-css-links-before.txt`
  - 4 feuilles CSS bloquantes locales détectées : `entry`, `default`, `vendor-libs`, `index`
- Styles inline homepage :
  - voir `migration-nuxt4-psi-home-inline-styles-before.txt`
  - aucun style inline extrait
- Tailles HTML :
  - voir `migration-nuxt4-psi-html-size-before.txt`
  - homepage : 29 221 octets

## Options évaluées

### Option A — `inlineSSRStyles: true`

- Avantages :
  - Solution native Nuxt 3 déjà disponible dans la config actuelle.
  - Peut retirer les `<link rel="stylesheet">` bloquants pour les styles critiques de la page générée.
  - Ne dépend pas des noms de chunks hashés.
  - Ne nécessite aucune dépendance.
- Risques :
  - HTML plus lourd, surtout sur les pages riches.
  - Cache CSS moins efficace, car une partie du CSS est livrée dans chaque HTML.
  - À valider page par page pour éviter un transfert HTML excessif.
- Décision :
  - Option prioritaire à tester, car elle est stable, native et réversible.

### Option B — preload CSS non critique + swap

- Avantages :
  - Peut conserver le cache CSS externe.
  - Peut sortir certains CSS non critiques du chemin bloquant.
- Risques :
  - Fragile si l'implémentation cible des noms de chunks hashés.
  - Risque de flash de contenu non stylé.
  - Requiert une logique de sélection stable des CSS critiques/non critiques.
- Décision :
  - Non retenue à ce stade sans mécanisme stable indépendant des chunks générés.

### Option C — critical CSS plugin

- Avantages :
  - Peut produire un critical CSS plus précis.
  - Peut conserver une partie du cache CSS externe.
- Risques :
  - Implique un plugin ou une dépendance supplémentaire.
  - Ajoute une complexité de build.
  - Hors périmètre de cette étape.
- Décision :
  - Non retenue, conformément aux règles de l'étape 1.
