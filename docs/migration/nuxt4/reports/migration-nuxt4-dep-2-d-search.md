# DEP-2-D — Recherche Content v3

Date : 10 mai 2026

## Objectif

Migrer `components/AppSearchInput.vue`, dernier usage applicatif documenté de Content v2, vers l'API Content v3.

## Fichiers modifiés

- `components/AppSearchInput.vue`
- `scripts/check-content-queries.mjs`
- `TODO.md`
- `PROJECT_STATE.md`

## API Content v2 supprimée

Dans `components/AppSearchInput.vue` :

- `queryContent('articles')`
- `.where({ $or: ... })`
- `$contains`
- `.find()`
- `article.slug`

## API Content v3 utilisée

La recherche utilise maintenant :

```ts
queryCollection('articles')
  .select('title', 'description', 'path')
  .orWhere((group) =>
    group
      .where('title', 'LIKE', `%${query}%`)
      .where('description', 'LIKE', `%${query}%`)
  )
  .limit(6)
  .all()
```

Le lien public utilise `article.path` et `withTrailingSlash(article.path)`.

## Choix de requête

`queryCollectionSearchSections()` n'a pas été utilisé.

Raison :
- le comportement existant cherchait uniquement dans `title` et `description`, pas dans le corps complet des articles ;
- la requête `queryCollection()` est plus proche du comportement v2 existant et garde le composant léger.

Point local important :
- l'implémentation `@nuxt/content@3.13.0` joint les groupes de conditions racine avec `AND` ;
- pour préserver le vrai comportement `$or`, les deux conditions `title LIKE` et `description LIKE` sont regroupées dans un seul `.orWhere(...)`.

Preuve locale :
- `dep-2-d-content-query-builder-local.txt`

## Comportement recherche conservé

- requête vide ou espaces seuls : résultats remis à zéro ;
- limite : 6 résultats ;
- champs cherchés : `title`, `description` ;
- champs retournés : `title`, `description`, `path` ;
- URLs publiques : `/eco-conception/<slug>/` via le `path` de la collection et trailing slash ;
- pas de recherche plein texte ajoutée ;
- pas de changement CSS/design.

## Garde-fou Content

`scripts/check-content-queries.mjs` interdit désormais les usages Content v2 applicatifs sans exception `AppSearchInput.vue`.

Le garde-fou vérifie aussi pour `AppSearchInput.vue` :
- `queryCollection('articles')` ;
- `.select('title', 'description', 'path')` ;
- `.orWhere(...)` ;
- `title LIKE` ;
- `description LIKE` ;
- `.limit(6)` ;
- `.all()` ;
- `article.path`.

Audit final :
- `dep-2-d-app-content-v2-usages-final.txt` est vide côté code applicatif.
- `dep-2-d-content-v2-usages-after.txt` ne contient plus que les regex du garde-fou qui interdisent les anciennes APIs.

## Vérification manuelle

Un preview local a été ouvert sur la home générée.

Constat :
- aucune erreur console ;
- `AppSearchInput.vue` n'est pas monté dans les pages HTML générées actuelles ;
- la vérification interactive `WordPress` / `images` / terme sans résultat n'est donc pas applicable sans page hôte pour ce composant.

Voir :
- `dep-2-d-home-snapshot.txt`
- `dep-2-d-search-manual-check.txt`

## Validation

- `npm test` : OK.
- `npm run generate` : OK.
- Check SEO : OK.
- Routes prerendered : 72.
- `/rss.xml`, `/feed.json` et `/sitemap.xml` restent générés.

Voir :
- `dep-2-d-tests.txt`
- `dep-2-d-generate.txt`
- `dep-2-d-seo-check.txt`
- `dep-2-d-output-files.txt`

## Warnings non bloquants

Warnings déjà connus et non traités dans ce lot :
- sitemap `zeroRuntime` ;
- sourcemap `nuxt:module-preload-polyfill` ;
- circular chunk `vendor-nuxt -> vendor-libs -> vendor-nuxt`.

## Dépendances

- Aucune dépendance ajoutée.
- `package.json` inchangé.
- `package-lock.json` inchangé.

Voir :
- `dep-2-d-package-diff.txt`

## Limites restantes

- `AppSearchInput.vue` est migré mais non monté sur les pages générées actuelles.
- Une vérification UX réelle nécessitera soit de remonter ce composant dans une page, soit de décider qu'il est orphelin dans un lot séparé.

## Décision

- `CONTENT-6` : fait.
- `DEP-2` global : prêt pour audit final des usages Content v2.
- Prochaine étape recommandée : `DEP-2 final / Audit Content v3`, puis clôture de `DEP-2` si aucun usage applicatif Content v2 inattendu ne reste.

## Contraintes respectées

- Aucun déplacement vers `app/`.
- Aucune migration `@nuxt/image`.
- Aucune migration `@nuxt/eslint`.
- Aucun changement CSS/design.
- Aucun changement de contenu éditorial.
- Aucun `npm audit fix`.
- Aucune nouvelle dépendance.
