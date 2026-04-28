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
- Suppressions réalisées : 26 fichiers suivis Git supprimés, plus fichiers `.DS_Store` non suivis dans `public/img`
- Suppressions reportées : aucune suppression de dépendance ; `gray-matter` et `sass-loader` restent à vérifier séparément

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
| `components/HomePortfolioLatest.vue` | Aucune référence trouvée dans `audit-unused-components-usage.txt` | `npm test`, `npm run generate`, check SEO OK |
| `components/OeufImage.vue` | Aucune référence trouvée dans `audit-unused-components-usage.txt` | `npm test`, `npm run generate`, check SEO OK |

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
| `public/img/4DF4126CEDA88CAD.jpg` | Aucune référence trouvée | `npm test`, `npm run generate`, check SEO OK |
| `public/img/4DF4126CEDA88CAE.jpg` | Aucune référence trouvée | `npm test`, `npm run generate`, check SEO OK |
| `public/img/4DF4126CEDA88CAF.png` | Aucune référence trouvée | `npm test`, `npm run generate`, check SEO OK |
| `public/img/apps/duospend-tuto1.webp` | Aucune référence trouvée | `npm test`, `npm run generate`, check SEO OK |
| `public/img/apps/duospend-tuto2.webp` | Aucune référence trouvée | `npm test`, `npm run generate`, check SEO OK |
| `public/img/apps/duospend-tuto3.webp` | Aucune référence trouvée | `npm test`, `npm run generate`, check SEO OK |
| `public/img/beabot.webp` | Aucune référence trouvée | `npm test`, `npm run generate`, check SEO OK |
| `public/img/chasse-patate.png` | Aucune référence trouvée | `npm test`, `npm run generate`, check SEO OK |
| `public/img/forme-flou.svg` | Aucune référence trouvée | `npm test`, `npm run generate`, check SEO OK |
| `public/img/forme.svg` | Aucune référence trouvée | `npm test`, `npm run generate`, check SEO OK |
| `public/img/formeOLD.svg` | Aucune référence trouvée | `npm test`, `npm run generate`, check SEO OK |
| `public/img/greenlight/greenlight-admin-3.webp` | Aucune référence trouvée | `npm test`, `npm run generate`, check SEO OK |
| `public/img/greenlight/greenlight-admin-4.webp` | Aucune référence trouvée | `npm test`, `npm run generate`, check SEO OK |
| `public/img/greenlight/greenlight-customizer-1.webp` | Aucune référence trouvée | `npm test`, `npm run generate`, check SEO OK |
| `public/img/greenlight/greenlight-front-1.webp` | Aucune référence trouvée | `npm test`, `npm run generate`, check SEO OK |
| `public/img/greenlight/greenlight-front-2.webp` | Aucune référence trouvée | `npm test`, `npm run generate`, check SEO OK |
| `public/img/greenlight/greenlight-front-3.webp` | Aucune référence trouvée | `npm test`, `npm run generate`, check SEO OK |
| `public/img/oeuf-bleu.svg` | Aucune référence trouvée | `npm test`, `npm run generate`, check SEO OK |
| `public/img/oeuf-vert.svg` | Aucune référence trouvée | `npm test`, `npm run generate`, check SEO OK |
| `public/img/oeuf.svg` | Aucune référence trouvée | `npm test`, `npm run generate`, check SEO OK |
| `.DS_Store` dans `public/img` et sous-dossiers | Fichiers système, aucune référence | `npm test`, `npm run generate`, check SEO OK |

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
| `scripts/add-chapo.mjs` | Aucun appel `package.json`, aucune référence doc/code | `npm test`, `npm run generate`, check SEO OK |
| `scripts/normalize-md-links.mjs` | Aucun appel `package.json`, aucune référence doc/code | `npm test`, `npm run generate`, check SEO OK |
| `scripts/seo-audit.mjs` | Aucun appel `package.json`, aucune référence doc/code | `npm test`, `npm run generate`, check SEO OK |

### Scripts conservés malgré doute

| Fichier | Raison |
|---|---|
| Aucun | Les scripts sans appelant ni documentation sont planifiés pour suppression. |

## Dépendances

Voir :
- `audit-unused-npm-ls.txt`
- `audit-unused-dependencies.txt`
- `audit-unused-dependencies-after-delete.txt`
- `audit-unused-depcheck.json`

### Dépendances suspectes

| Package | Type | Preuve | Décision |
|---|---|---|---|
| `eslint-config-prettier` | devDependencies | Pas de référence directe hors `package.json` | Conserver, usage ESLint implicite possible |
| `eslint-plugin-vue` | devDependencies | Pas de référence directe hors `package.json` | Conserver, usage ESLint implicite possible |
| `gray-matter` | devDependencies | Devient sans référence après suppression de `scripts/add-chapo.mjs` | À vérifier/supprimer dans une branche dépendances séparée |
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
- `npm test` : succès, 49 checks, `test:content` OK, 18 tests Node OK
- `npm run generate` : succès, 100 routes prerendered
- check SEO : succès, `OK SEO checks passed.`

Si aucune suppression :
- `npm run generate` : succès pour l'audit initial
- `npm test` : succès via `pregenerate`

## Conclusion

- Étape 2 validable : oui après validation finale
- Points à traiter dans une branche séparée :
  - vérifier `gray-matter` après suppression du script `add-chapo` ;
  - vérifier `sass-loader` sans modifier les dépendances dans cette branche ;
  - relancer un audit dédié si un outil type `depcheck` est ajouté au projet ultérieurement.
