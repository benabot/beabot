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

## Modification testée

### Option retenue

Option A testée avec la modification minimale suivante dans `nuxt.config.ts` :

```ts
experimental: {
  inlineSSRStyles: true,
}
```

Seule la ligne `inlineSSRStyles` a été modifiée. Aucune option Nuxt 4 supplémentaire, aucun plugin et aucune dépendance n'ont été ajoutés.

### Résultat local après modification

- `npm run generate` : succès
  - pré-build : 49 checks passés, 0 warning, 0 erreur
  - `test:content` : OK
  - `test:node` : 18 tests passés
  - génération : 100 routes prerendered
- CSS links homepage :
  - voir `migration-nuxt4-psi-home-css-links-after.txt`
  - résultat : 2 feuilles CSS externes restantes (`entry`, `vendor-libs`)
- Styles inline homepage :
  - voir `migration-nuxt4-psi-home-inline-styles-after.txt`
  - résultat : styles page/layout inline présents, 35 396 octets dans le fichier de capture
- Tailles HTML :
  - voir `migration-nuxt4-psi-html-size-after.txt`
  - homepage : 64 478 octets
- Diff CSS links :
  - voir `migration-nuxt4-psi-css-links-diff.txt`
  - `default` et `index` ne sont plus exposés comme `<link rel="stylesheet">` sur la homepage
- Diff tailles HTML :
  - voir `migration-nuxt4-psi-html-size-diff.txt`
  - total des 5 pages mesurées : 178 304 → 363 370 octets

### Décision finale

- Décision : conserver la modification.
- Justification :
  - La solution est native Nuxt 3, stable et indépendante des noms de chunks hashés.
  - Deux CSS bloquants observés sur la homepage (`default`, `index`) sortent des `<link rel="stylesheet">`.
  - Le compromis est explicite : HTML plus lourd et cache CSS moins efficace.
  - PSI-1 n'est pas considéré comme totalement validé localement, car `entry` reste une feuille externe et `vendor-libs` reste également bloquant localement.
  - La validation réelle du gain doit passer par un déploiement preview puis PageSpeed Insights mobile.

## PSI-2 — Chaîne critique maximale

### Analyse

- CSS globaux :
  - `nuxt.config.ts` déclare uniquement `~/assets/css/main.scss`.
  - `assets/css/main.scss` pèse 5 557 octets source et contient des styles transverses : base typographique, helpers, layout et classes partagées.
  - Après `inlineSSRStyles: true`, une partie de ces styles est inline dans la homepage.
- CSS page-specific :
  - Les pages et composants utilisent majoritairement des `<style scoped lang="scss">`, donc Nuxt/Vite peut déjà les associer aux chunks de pages.
  - `assets/css/article-content.scss` est importé seulement depuis `pages/eco-conception/[slug].vue`.
  - Les styles article ne sont donc pas un import global évident à déplacer.
- CSS potentiellement déplaçables :
  - Aucun import global inutilisé ou doublon n'a été identifié.
  - `entry.B_fgAJq0.css` reste externe, mais il ne pèse que 46 octets localement (`pre code .line{...}`).
  - `vendor-libs.p3LoGY6h.css` reste externe et contient des styles globaux/base. Son origine semble liée au découpage actuel et au CSS extrait, pas à un import page-specific évident.
- Risques :
  - Modifier `manualChunks` pour influencer `vendor-libs` serait une optimisation fragile et hors périmètre.
  - Déplacer `main.scss` vers une page casserait les styles transverses et risquerait de dégrader les pages.
  - Un preload/swap manuel dépendrait des chunks générés ou demanderait une logique plus large.

### Décision

- Statut : reporté.
- Justification :
  - Aucune réduction concrète, stable et peu risquée de la chaîne critique n'a été identifiée au-delà de `inlineSSRStyles`.
  - Les pistes restantes relèvent plutôt de l'étape 2b (`SCSS → CSS moderne`) ou d'une analyse post-déploiement avec PSI réel.
  - Aucun refactor SCSS global n'a été effectué.

## Validation locale finale

- `npm test` : succès
  - pré-build : 49 checks passés, 0 warning, 0 erreur
  - `test:content` : OK
  - `test:node` : 18 tests passés
- `npm run generate` : succès
  - 100 routes prerendered
- `SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : succès
  - `OK SEO checks passed.`

## Limite

Le score PSI mobile 100 ne peut être validé qu'après déploiement preview ou production et relance PageSpeed Insights.

## Décision après validation PSI publique — revert `inlineSSRStyles`

Date : 28 avril 2026

### Comparaison des scores

| Environnement | URL | Performance mobile | Accessibilité | Bonnes pratiques | SEO |
|---|---|---:|---:|---:|---:|
| Production `master` avant intervention | `https://beabot.fr/` | 99 | 96 | 100 | 100 |
| Dev après `inlineSSRStyles: true` | `https://dev-beabot.netlify.app/` | 98 | 96 | 100 | 100 |

### Problème constaté sur `dev`

PageSpeed Insights mobile signale encore deux CSS bloquants :

| Ressource | Taille de transfert | Durée |
|---|---:|---:|
| `/_nuxt/vendor-libs.p3LoGY6h.css` | 3,2 KiB | 540 ms |
| `/_nuxt/entry.B_fgAJq0.css` | 0,6 KiB | 240 ms |

Économies estimées restantes : 360 ms.

Chaîne critique maximale : 837 ms.

### Décision

Le changement `experimental.inlineSSRStyles: true` est reverté.

Justification :

- le score PSI mobile public régresse de 99 à 98 par rapport à la production `master` ;
- le problème de CSS render-blocking n'est pas résolu ;
- le HTML généré est fortement alourdi ;
- le bénéfice local Lighthouse ne se confirme pas sur PageSpeed Insights public.

### État après revert local

- `npm test` : succès
  - pré-build : 49 checks passés, 0 warning, 0 erreur
  - `test:content` : OK
  - `test:node` : 18 tests passés
- `npm run generate` : succès
  - 100 routes prerendered
- check SEO : succès
  - `OK SEO checks passed.`
- CSS links homepage :
  - voir `migration-nuxt4-psi-revert-home-css-links.txt`
- Tailles HTML :
  - voir `migration-nuxt4-psi-revert-html-size.txt`
  - total des 5 pages mesurées : 178 302 octets

### Suite recommandée

Ne pas poursuivre l'approche `inlineSSRStyles`.

Si l'objectif PSI mobile 100 reste prioritaire, ouvrir une branche exploratoire dédiée pour analyser `vendor-libs.css` et `entry.css`, sans :
- s'appuyer sur les noms de chunks hashés ;
- ajouter de dépendance ;
- dégrader le poids HTML ;
- casser le cache CSS.

## Validation publique dev — PSI mobile 100 après revert

Date : 28 avril 2026

URL testée :

`https://dev-beabot.netlify.app/`

Rapport PageSpeed Insights :

- Date du rapport : 28 avril 2026, 17:57:04
- Contexte : branche `dev`, après revert de `experimental.inlineSSRStyles` à `false`

### Résultats Mobile

| Catégorie | Score |
|---|---:|
| Performance | 100 |
| Accessibilité | 96 |
| Bonnes pratiques | 100 |
| SEO | 100 |

### Interprétation

L'objectif de score PageSpeed Insights mobile 100 est atteint sur l'environnement `dev`.

Le résultat est obtenu après abandon de l'approche `inlineSSRStyles: true` et retour à :

```ts
experimental: {
  inlineSSRStyles: false,
}
```

Conclusion :

- l'approche `inlineSSRStyles: true` n'est pas retenue ;
- la stratégie CSS externe/cache reste préférable pour ce projet ;
- `PSI-3` peut être considéré comme validé sur `dev` ;
- `PSI-1` et `PSI-2` ne doivent être cochés que si les audits PageSpeed Insights correspondants ne signalent plus de problème.
