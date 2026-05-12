# DEP-2-A — Installation Content v3 et collection `articles`

Date : 29 avril 2026

## Objectif

Installer `@nuxt/content@3.x` et creer une collection Content v3 minimale `articles`, sans migrer les requetes applicatives.

## Resultat

- `@nuxt/content` installe en `3.13.0`.
- `content.config.ts` cree.
- Configuration Content adaptee au format v3.
- Aucune page, aucun composant et aucun endpoint serveur migre dans ce lot.
- `npm test` passe.
- `npm run generate` reste bloque par les anciennes APIs v2 et par l'integration Content de `@nuxtjs/sitemap` v6.

## Dependances

Commande executee :

```bash
npm install @nuxt/content@3.13.0 --save-exact
```

Dependance directe modifiee dans `package.json` :

| Package | Avant | Apres |
|---|---:|---:|
| `@nuxt/content` | `^2.13.2` | `3.13.0` |

Autres dependances directes :
- inchangees.

Notes :
- `npm install` a modifie `package-lock.json` avec les dependances transitives de Content v3.
- `npm install` a signale 13 vulnerabilites existantes apres resolution npm.
- Aucun `npm audit fix` lance.
- Aucune dependance directe supplementaire ajoutee.

Voir :
- `dep-2-a-npm-install-content-3.txt`
- `dep-2-a-package-diff.txt`
- `dep-2-a-npm-ls-before.txt`
- `dep-2-a-npm-ls-after.txt`

## Collection creee

Fichier :
- `content.config.ts`

Configuration :

```ts
import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'page',
      source: {
        include: 'articles/**/*.md',
        prefix: '/eco-conception',
      },
    }),
  },
})
```

Decision :
- schema custom non ajoute dans ce lot ;
- `zod` est present en transitif via `@nuxt/content`, mais pas comme dependance directe du projet ;
- ajouter un schema strict sera un lot separe si une dependance directe `zod` est explicitement autorisee.

## Configuration Content adaptee

Fichier :
- `nuxt.config.ts`

Changements :
- `content.highlight` et `content.markdown` v2 migres vers `content.build.markdown` v3 ;
- `highlight.preload` remplace par `highlight.langs` ;
- `remarkPlugins` et `rehypePlugins` passes de tableaux a objets v3 ;
- `content.experimental.sqliteConnector: 'native'` ajoute.

Raison du connecteur SQLite natif :
- Content v3 a d'abord bloque avec `Nuxt Content requires better-sqlite3 module to operate` ;
- l'environnement local utilise Node `v22.21.1` et expose `node:sqlite` ;
- utiliser le connecteur natif evite d'ajouter `better-sqlite3` comme deuxieme dependance directe.

Voir :
- `dep-2-a-node-version.txt`
- `dep-2-a-node-sqlite-available.txt`
- `dep-2-a-initial-generate-errors-summary.txt`

## Validation

### `npm test`

Resultat :
- OK.

Details :
- pre-build checks : 49 OK ;
- garde-fou Content v2 actuel : OK ;
- tests Node : 18 OK.

Voir :
- `dep-2-a-tests.txt`
- `dep-2-a-tests-after-sqlite-config.txt`

### `npm run generate`

Premier essai :
- bloque avant build sur l'adaptateur SQLite :
  - `Nuxt Content requires better-sqlite3 module to operate`
  - `TTY initialization failed: uv_tty_init returned EINVAL`

Correction minimale appliquee :
- `content.experimental.sqliteConnector: 'native'`.

Deuxieme essai :
- Content v3 parse les contenus :
  - `Processed 2 collections and 13 files`
- build client et server OK ;
- prerender bloque ensuite sur `#content/server`.

Erreur bloquante :

```text
Package import specifier "#content/server" is not defined imported from .../.nuxt/prerender/index.mjs
```

Warnings associes :
- `#content/server` importe par `server/routes/feed.json.ts` ;
- `#content/server` importe par `server/routes/rss.xml.ts` ;
- `#content/server` importe par `@nuxtjs/sitemap` v6 via `__sitemap__/nuxt-content-urls.js`.

Decision :
- ne pas migrer `serverQueryContent` dans ce lot ;
- ne pas corriger sitemap dans ce lot ;
- arreter apres documentation.

Voir :
- `dep-2-a-generate.txt`
- `dep-2-a-generate-after-sqlite-config.txt`
- `dep-2-a-generate-errors-summary.txt`

## Anciennes APIs v2 encore presentes

Non migrees volontairement :
- `queryContent()` dans les pages et composants ;
- `findSurround()` dans `pages/eco-conception/[slug].vue` ;
- `serverQueryContent()` dans RSS, JSON Feed et sitemap routes ;
- `_path` dans pages, composants, feeds et sitemap.

## Fichiers modifies

- `package.json`
- `package-lock.json`
- `content.config.ts`
- `nuxt.config.ts`
- `TODO.md`
- `PROJECT_STATE.md`

## Fichiers non modifies

- pages ;
- composants ;
- endpoints serveur ;
- APIs Content applicatives ;
- structure `app/` ;
- dependances sitemap/image/eslint.

## Decision

- `DEP-2-A` : fait partiellement et volontairement arrete au premier blocage applicatif Content v2.
- `DEP-2` global : non termine.
- `CONTENT-9` : fait, collection minimale creee.
- `CONTENT-10` : fait, configuration Markdown/Highlight migree au format v3.

## Prochaine etape recommandee

Ouvrir un lot `DEP-2-B / CONTENT server APIs` :
- remplacer `serverQueryContent` dans `/rss.xml` et `/feed.json` par `queryCollection(event, 'articles')` ;
- traiter le blocage `@nuxtjs/sitemap` v6 qui importe encore `#content/server` ;
- relancer `npm run generate` pour atteindre ensuite les erreurs eventuelles `queryContent()` cote pages.
