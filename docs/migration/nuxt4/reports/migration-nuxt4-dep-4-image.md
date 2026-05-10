# DEP-4 — Migration Nuxt Image pour Nuxt 4

Date : 10 mai 2026

## Objectif

Migrer uniquement `@nuxt/image` vers une version compatible Nuxt 4, sans migration ESLint, sans déplacement vers `app/`, sans refactor CSS/design/chunks et sans correction opportuniste.

## Versions

| Package | Avant | Apres | Notes |
|---|---:|---:|---|
| `@nuxt/image` | `1.11.0` reel / package.json `^1.8.1` | `2.0.0` | seule dependance directe ciblee |
| `nuxt` | `4.4.2` | `4.4.2` | non modifie |
| `@nuxt/content` | `3.13.0` | `3.13.0` | non modifie |
| `@nuxtjs/sitemap` | `8.0.15` | `8.0.15` | non modifie |
| `@nuxt/eslint` | `0.5.7` | `0.5.7` | non migre |

Version cible verifiee :

- `npm view @nuxt/image@2.0.0`
- `@nuxt/image@2.0.0` declare `@nuxt/kit: ^4.2.0` et `node >=18.20.6`.

Voir :

- `dep-4-npm-view-image-2.txt`
- `dep-4-npm-view-image-2-deps.txt`

## Commandes executees

```bash
npm install @nuxt/image@2.0.0 --save-exact
```

Diagnostics apres erreur IPX :

```bash
npm install @nuxt/image@2.0.0 --save-exact --include=optional
npm install --include=optional
npm install ipx@3.1.1 --no-save
```

Decision :

- aucun `npm audit fix` lance ;
- `ipx` n'a pas ete ajoute en dependance directe ;
- `npm install ipx@3.1.1 --no-save` a echoue sur `sharp` / `node-gyp` et n'a pas ete retenu comme solution ;
- correction retenue : provider Nuxt Image `none`.

## Fichiers modifies

- `package.json`
- `package-lock.json`
- `nuxt.config.ts`
- `TODO.md`
- `PROJECT_STATE.md`

## Dependances

Dependance directe modifiee :

- `@nuxt/image` : `^1.8.1` -> `2.0.0`

Effets lock attendus :

- mise a jour de l'arbre transitoire lie a `@nuxt/image@2.0.0` ;
- `ipx` et `sharp` sont presents dans le lock comme dependances optionnelles du module, mais ne sont pas ajoutes comme dependances directes projet.

Voir :

- `dep-4-package-diff.txt`
- `dep-4-npm-ls-before.txt`
- `dep-4-npm-ls-after.txt`

## Usages image audites

Motifs recherches :

- `NuxtImg`
- `NuxtPicture`
- `$img`
- `useImage`
- `image:` dans `nuxt.config.ts`

Resultat :

- aucun `NuxtImg` ;
- aucun `NuxtPicture` ;
- aucun `$img` ;
- aucun `useImage` ;
- configuration `image:` presente dans `nuxt.config.ts`.

Surfaces avec images natives :

- homepage ;
- portfolio ;
- Greenlight ;
- `/apps/` ;
- pages apps : Duo Spend, Meeting Mode, Siturem ;
- composants `AppCard`, `AppGalleryLightbox`, `BoiteArticle`.

Voir :

- `dep-4-image-usages-before.txt`
- `dep-4-image-render-surfaces.txt`

## Configuration image

Configuration conservee :

- `quality: 75`
- `format: ['webp']`
- `screens`
- presets `card` et `portfolio`

Configuration ajoutee :

```ts
image: {
  provider: 'none',
  // ...
}
```

Pourquoi :

- `@nuxt/image@2.0.0` reference une route IPX par defaut ;
- la generation a d'abord echoue avec `Cannot find package 'ipx'` ;
- ajouter `ipx` directement ou ajouter les prerequis natifs `sharp` / `node-gyp` aurait depasse le perimetre d'une seule dependance directe ;
- le projet ne rend actuellement aucun composant Nuxt Image, donc le provider `none` garde le rendu existant des images natives et evite la route IPX.

Voir :

- `dep-4-generate.txt`
- `dep-4-npm-explain-ipx.txt`
- `dep-4-npm-install-ipx-no-save.txt`
- `dep-4-image-config-after.txt`

## Corrections minimales

- Ajout de `image.provider: 'none'` dans `nuxt.config.ts`.

Aucun autre changement fonctionnel :

- pas de migration de composants images ;
- pas de passage a `NuxtImg` ;
- pas d'ajout AVIF ;
- pas de changement de qualite ;
- pas de changement CSS/design.

## Validation

- `npm test` : OK
- `npm run generate` : OK
- check SEO : OK
- routes prerendered : 72

Voir :

- `dep-4-tests-final.txt`
- `dep-4-generate-after-provider-none.txt`
- `dep-4-seo-check.txt`
- `dep-4-output-files.txt`

## Verification post-generation

Fichiers confirmes :

- `.output/public/rss.xml`
- `.output/public/feed.json`
- `.output/public/sitemap.xml`

Pages controlees pour les images :

- `/`
- `/portfolio/`
- `/greenlight/`
- `/apps/`
- `/apps/duo-spend/`
- `/apps/meeting-mode/`
- `/apps/siturem/`
- `/eco-conception/l-eco-conception-web/`

Resultat :

- aucune image locale manquante detectee dans les pages controlees ;
- `.output/public` genere ;
- RSS, JSON Feed et sitemap toujours presents.

Voir :

- `dep-4-generated-image-check.txt`

## Warnings restants

Warnings non bloquants deja connus :

- `[@nuxtjs/sitemap] No dynamic sources detected. Consider enabling zeroRuntime`
- `[plugin nuxt:module-preload-polyfill] Sourcemap is likely to be incorrect`
- `Circular chunk: vendor-nuxt -> vendor-libs -> vendor-nuxt`

Warnings/erreurs non retenus :

- route IPX par defaut bloquante avant `provider: 'none'` ;
- tentative `ipx@3.1.1 --no-save` bloquee par `sharp` / `node-gyp`.

## Decision

`DEP-4` : termine.

La migration `@nuxt/image@2.0.0` est validee pour l'etat actuel du projet, qui utilise des images natives et ne rend pas encore de composants Nuxt Image.

## Prochaine etape recommandee

Traiter `DEP-5 / @nuxt/eslint` dans un lot separe.

Ne pas melanger avec :

- migration vers `app/` ;
- refactor CSS/design ;
- optimisation chunks ;
- correction des liens Markdown internes sans slash final ;
- migration de composants vers `NuxtImg`.
