# Audit fichiers inutiles — Prérequis migration Nuxt 4

Date : 28 avril 2026

## Objectif

Traiter l'Étape 2 du backlog Nuxt 4 :
- fichiers orphelins ;
- `getSiteMeta.js` ;
- dépendances suspectes ;
- routes générées.

## Résumé

- Composants audités : 20
- Images `public/img` auditées : 67
- Scripts audités : 8 scripts dans `scripts/`, plus scripts racine listés
- `getSiteMeta.js` : présent, sans usage code identifié
- Dépendances auditées : `dependencies` et `devDependencies` de `package.json`
- Routes générées observées : 100 routes annoncées par `npm run generate`, 28 routes HTML `index.html`
- Suppressions réalisées : 0 dans le commit d'audit brut
- Suppressions reportées : fichiers prouvés orphelins listés dans `audit-unused-delete-proof.txt`

## getSiteMeta.js

- Fichier présent : oui, `utils/getSiteMeta.js`
- Références trouvées : uniquement `TODO.md`
- Décision : suppression sûre dans le commit de nettoyage, car aucun import/appel code n'a été trouvé.

## Composants

Voir :
- `audit-unused-components.txt`
- `audit-unused-components-usage.txt`

### Composants supprimés

| Fichier | Preuve | Validation |
|---|---|---|
| _À réaliser dans le commit de suppression_ | Voir `audit-unused-components-usage.txt` | _À valider après suppression_ |

### Composants conservés malgré doute

| Fichier | Raison |
|---|---|
| Aucun | Les composants avec références ont été conservés ; les composants sans référence plausible sont planifiés pour suppression. |

## Images `public/img`

Voir :
- `audit-unused-public-img.txt`
- `audit-unused-public-img-usage.txt`

### Images supprimées

| Fichier | Preuve | Validation |
|---|---|---|
| _À réaliser dans le commit de suppression_ | Voir `audit-unused-public-img-usage.txt` | _À valider après suppression_ |

### Images conservées malgré doute

| Fichier | Raison |
|---|---|
| Aucune | Les images avec références trouvées ont été conservées ; les images sans référence plausible sont planifiées pour suppression. |

## Scripts

Voir :
- `audit-unused-scripts.txt`
- `audit-unused-root-scripts.txt`
- `audit-unused-scripts-usage.txt`

### Scripts supprimés

| Fichier | Preuve | Validation |
|---|---|---|
| _À réaliser dans le commit de suppression_ | Voir `audit-unused-scripts-usage.txt` | _À valider après suppression_ |

### Scripts conservés malgré doute

| Fichier | Raison |
|---|---|
| Aucun | Les scripts sans appelant ni documentation sont planifiés pour suppression. |

## Dépendances

Voir :
- `audit-unused-npm-ls.txt`
- `audit-unused-dependencies.txt`
- `audit-unused-depcheck.json`

### Dépendances suspectes

| Package | Type | Preuve | Décision |
|---|---|---|---|
| `eslint-config-prettier` | devDependencies | Pas de référence directe hors `package.json` | Conserver, usage ESLint implicite possible |
| `eslint-plugin-vue` | devDependencies | Pas de référence directe hors `package.json` | Conserver, usage ESLint implicite possible |
| `prettier` | devDependencies | Utilisé via scripts `lint:prettier` et `lintfix` | Conserver |
| `sass-loader` | devDependencies | Pas de référence directe hors `package.json` | À vérifier dans une branche séparée, ne pas modifier ici |

Aucune dépendance n'a été modifiée dans cette branche.

Note : `depcheck` n'a pas été exécuté car `npx --no-install depcheck --version` demande le paquet absent du projet. Aucun install n'a été lancé.

## Routes générées

Voir :
- `audit-unused-generate.txt`
- `audit-unused-generated-routes.txt`
- `audit-unused-generated-routes-analysis.txt`

- Nombre attendu dans TODO.md : 81
- Nombre observé : 100 routes annoncées par `npm run generate`, 28 routes HTML `index.html`
- Écart : +19 côté log Nitro, -53 côté routes HTML stables
- Pages fantômes détectées : aucune page fantôme HTML confirmée

## Validation

Si suppressions réalisées :
- `npm test` : à valider dans le commit de suppression
- `npm run generate` : à valider dans le commit de suppression
- check SEO : à valider dans le commit de suppression

Si aucune suppression :
- `npm run generate` : succès pour l'audit initial
- `npm test` : succès via `pregenerate`

## Conclusion

- Étape 2 validable : partiel à ce stade
- Points à traiter dans une branche séparée :
  - vérifier `sass-loader` sans modifier les dépendances dans cette branche ;
  - relancer un audit dédié si un outil type `depcheck` est ajouté au projet ultérieurement.
