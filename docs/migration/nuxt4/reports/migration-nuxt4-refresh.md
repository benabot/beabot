# Refresh compatibilité Nuxt 4 après Étape 2b SCSS

Date : 29 avril 2026

Branche : `chore/nuxt4-migration`

## Contexte

Refresh réalisé après :
- Étape 2 — audit fichiers inutiles ;
- Étape 2b — SCSS-1 à SCSS-5 ;
- suppression de l'injection SCSS globale via `additionalData` ;
- imports SCSS explicites ;
- validation éco-impact CSS à 171 279 octets.

## Baseline tests

Commande : `npm test`

Résultat :
- pre-build checks : 49/49 ;
- warnings : 0 ;
- erreurs : 0 ;
- Content v2 query checks : OK ;
- tests Node : 18/18.

Sortie complète :
- `migration-nuxt4-baseline-tests.txt`

## Generate compatibilityVersion 4

Commande : `npm run generate`

Résultat :
- Nuxt : 3.20.2 ;
- Nitro : 2.12.9 ;
- Vite client : 7.3.0 ;
- Vue : 3.5.26 ;
- compatibility version 4 active ;
- génération statique : succès ;
- routes prerendered : 100.

Sortie complète :
- `migration-nuxt4-warnings-refresh.txt`

## Warnings

Aucun warning Nuxt 4 bloquant identifié dans la sortie de refresh.

## Codemod

Commande tentée : `npx --no-install codemod nuxt/4/migration-recipe --dry-run`

Résultat :
- codemod non disponible localement ;
- `npx --no-install codemod` a échoué car le paquet `codemod@1.9.0` n'est pas installé ;
- aucun install interactif lancé.

Sortie complète :
- `migration-nuxt4-codemod-refresh.txt`

## Décision

- COMPAT-2 refresh : validé.
- COMPAT-3 refresh : codemod non disponible localement, documenté sans installation.
- Prochaine étape : démarrer la migration réelle par lots, sans mise à jour en vrac des dépendances.
