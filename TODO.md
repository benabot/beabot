## Phase 17 — SEO & Repositionnement freelance (26 avril 2026)

> Basé sur `audit-seo-2026-04-26.md` + `audit-contenu-positionnement-2026-04-26.md`  
> Branche : `fix/seo-meta` pour les corrections techniques, `content/repositionnement-freelance` pour le contenu

---

## Phase 20 — Services freelance : relief visuel & maillage (28 avril 2026)

> Branche : `feat/design-services`

- [x] Retravailler `/services/` sans changer le fond général ni casser la logique commerciale existante
- [x] Ajouter du relief visuel inspiré de `/eco-conception/` : œufs décoratifs, accents colorés, bande sombre, rythme entre sections
- [x] Conserver les familles d'offres WordPress, Vue.js / Nuxt et audit éco-conception & performance
- [x] Renommer `Tarifs indicatifs` en **Fourchettes habituelles** et clarifier le rôle d'ordre de grandeur budgétaire
- [x] Renforcer le maillage `/services/` → articles : audit site web, WordPress freelance Lille, refonte éco-conçue, WordPress vs Nuxt
- [x] Renforcer le maillage `/services/` → `/portfolio/`, `/contact/`, `/eco-conception/` et `/greenlight/`
- [x] Ajouter des liens retour sobres depuis les 4 articles longue traîne vers `/services/`
- [x] Ajuster la micro-copy de `/services/` pour clarifier les personas : agences, entreprises, indépendants et petites structures
- [x] Faire passer la navigation en clair sur la section sombre `Zone d'intervention` via le pattern existant `data-nav-theme="light"`
- [x] Valider `npm run generate` : 100 routes générées
- [x] Vérifier Prettier sur les fichiers modifiés
- [x] Vérifier ESLint ciblé sur `pages/services.vue` : 0 erreur, warnings de style Vue uniquement
- [ ] Lint global repo-wide à traiter séparément : `npm run lint` reste bloqué par des warnings/formatages historiques hors périmètre

---

## Backlog — Migration Nuxt 4

> Prérequis à compléter dans l'ordre avant d'ouvrir une branche de migration.

### Étape 0 — Tests & couverture

- [ ] Lancer la suite de tests existante et s'assurer qu'elle passe à 100% sur `dev` avant toute migration
- [ ] Documenter les tests manquants critiques (pages, composants, utils SEO) et les ajouter si nécessaire

> Audit préparatoire réalisé le 28 avril 2026 sur `chore/nuxt-4-A` après activation de `future.compatibilityVersion: 4`.
> À refaire explicitement sur `dev` avant toute branche de migration réelle.

- [x] **TEST-AUDIT-1** — Lancer la suite existante sur la branche d'audit : `npm test`
  - Résultat : ✅ 49 checks passés, 0 warning, 0 erreur
  - Sortie : `migration-nuxt4-tests.txt`
- [x] **TEST-AUDIT-2** — Lancer le check SEO existant sur le build statique disponible
  - Commande : `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs`
  - Résultat : ✅ `OK SEO checks passed.`
  - Sortie : `migration-nuxt4-seo-check.txt`
- [x] **TEST-AUDIT-3** — Documenter les manques critiques avant migration Nuxt 4
  - Rapport : `migration-nuxt4-tests-coverage.md`
- [ ] **TEST-1** — Ajouter des tests unitaires pour `utils/seo-url.ts`
  - Couvrir : `absoluteUrl`, `canonicalUrl`, `withTrailingSlash`, `normalizeInternalHref`
  - Critique : URLs canoniques, trailing slash, assets avec extension, query strings et ancres
- [ ] **TEST-2** — Ajouter un test de rendu/comportement pour `components/AppLink.vue`
  - Couvrir : liens internes normalisés, liens externes inchangés, ancres et query strings
  - Critique : maillage interne et convention SEO trailing slash
- [ ] **TEST-3** — Ajouter des smoke tests SSG pour les pages clés
  - Pages : `/`, `/eco-conception/`, un article, `/portfolio/`, `/services/`, `/contact/`
  - Critique : build statique, balises SEO minimales, canonical et `og:url`
- [ ] **TEST-4** — Ajouter des tests de non-régression pour `rss.xml` et `feed.json`
  - Couvrir : génération sans erreur, URLs avec trailing slash, dates valides, échappement XML/JSON
  - Critique : endpoints serveur impactés par la migration Content v2 → v3
- [ ] **TEST-5** — Ajouter un check ciblé sur les requêtes Content utilisées par les pages articles
  - Couvrir : liste articles, page article, navigation précédent/suivant, tags
  - Critique : APIs `queryContent`, `serverQueryContent`, `_path` identifiées comme cassantes en Nuxt/Content v3

### Étape 1 — Performance (PageSpeed Insights : 99 → 100 mobile)

> Source : audit PSI du 27 avril 2026 (screenshot)

- [ ] **PSI-1** — Éliminer les 3 CSS render-blocking (`/_nuxt/entry.css`, `/_nuxt/index.css`, `/_nuxt/default.css`) — économie estimée : 270 ms LCP/FCP
  - Option A : `inlineSSRStyles: true` (déjà désactivé intentionnellement — réévaluer)
  - Option B : charger les CSS non-critiques en `<link rel="preload">` + swap
  - Option C : CSS critique inline via plugin Vite Extract Critical
- [ ] **PSI-2** — Réduire la chaîne critique maximale (444 ms sur `entry.css`) — envisager un split CSS plus fin ou un lazy-load des styles de pages non-homepage
- [ ] **PSI-3** — Valider le score PSI mobile = 100 après corrections

### Étape 2 — Audit fichiers inutiles

- [ ] Lister et supprimer les fichiers orphelins : composants non importés, images inutilisées dans `/public/img/`, scripts de la racine sans appelant
- [ ] Vérifier que `getSiteMeta.js` (vestige Nuxt 2, marqué `deprecated`) n'est plus importé dans aucun composant — le supprimer
- [ ] Auditer les dépendances `package.json` non utilisées (`npm-check` ou équivalent)
- [ ] Vérifier les routes générées (81 actuellement) : confirmer qu'aucune page fantôme n'est incluse dans le build

### Étape 2b — Refactor SCSS → CSS moderne

> **Contexte :** le projet utilise `sass` avec l'API `modern-compiler` (déjà configurée dans `vite.css.preprocessorOptions`). Les warnings de dépréciation `if-function` dans `assets/css/vars/_typo.scss` ont été **corrigés le 27 avril 2026** (remplacement des `if()` Sass par `@if`/`@else`). Le refactor complet est une étape séparée.

**Objectif :** migrer les variables SCSS vers des custom properties CSS (`--var`) là où c'est pertinent, pour bénéficier de la cascade native, réduire la dépendance à SCSS et préparer la migration Nuxt 4.

- [ ] **SCSS-1** — Inventaire : lister toutes les variables SCSS (`$var`) utilisées dans les composants scoped vs les fichiers globaux (`vars/`, `main.scss`)
- [ ] **SCSS-2** — Migrer les variables de couleurs (`$vert`, `$gris1`…) de `vars/_colors.scss` vers des custom properties CSS dans `:root` — garder les aliases SCSS pour la période de transition
- [ ] **SCSS-3** — Migrer les variables de typographie (`$breakpoint-tablet`, tailles fluides) vers des custom properties ou des `@layer` CSS
- [ ] **SCSS-4** — Remplacer les `@use` globaux injectés via `vite.css.preprocessorOptions.additionalData` par des imports explicites dans chaque fichier qui en a besoin (meilleure traçabilité, compatible Nuxt 4)
- [ ] **SCSS-5** — Valider l'éco-impact : vérifier que le CSS généré n'a pas grossi (poids `/_nuxt/*.css` avant/après)
- [ ] **SCSS-6** — Supprimer SCSS entièrement si la migration est complète et que tous les composants utilisent CSS natif + custom properties

### Étape 3 — Migration Nuxt 4

> Audit réalisé le 27 avril 2026 — basé sur la doc officielle Nuxt 4 et l'analyse du code existant.
> Référence : https://nuxt.com/docs/getting-started/upgrade#migrating-to-nuxt-4

---

#### 3.0 — Pré-migration : activer le mode compatibilité Nuxt 4

- [x] **COMPAT-1** — Ajouter `future: { compatibilityVersion: 4 }` dans `nuxt.config.ts`
- [x] **COMPAT-2** — Lancer `npm run generate` et documenter tous les warnings/erreurs dans `migration-nuxt4-warnings.md`
- [x] **COMPAT-3** — Lancer `npx codemod@0.18.7 nuxt/4/migration-recipe` pour identifier les transformations automatisables
- [ ] **COMPAT-4** — Créer la branche `chore/nuxt4-migration` depuis `dev` à jour

---

#### 3.1 — Mise à jour des dépendances

Ordre recommandé (mettre à jour et tester une par une) :

| #   | Dépendance        | Version actuelle | Version cible Nuxt 4 | Breaking changes                                                           | Impact |
| --- | ----------------- | ---------------- | -------------------- | -------------------------------------------------------------------------- | ------ |
| 1   | `nuxt`            | ^3.14.1592       | ^4.x                 | Voir sections 3.2–3.5                                                      | 🔴     |
| 2   | `@nuxt/content`   | ^2.13.2          | ^3.x                 | API entièrement refondue (voir 3.3)                                        | 🔴     |
| 3   | `vue`             | ^3.5.12          | ^3.5+                | Aucun — compatible                                                         | 🟢     |
| 4   | `vue-router`      | ^4.4.5           | ^4.5+                | Aucun — compatible                                                         | 🟢     |
| 5   | `@nuxt/image`     | ^1.8.1           | ^1.9+                | ⚠️ Vérifier compatibilité Nuxt 4 — probablement compatible sans changement | 🟡     |
| 6   | `@nuxtjs/sitemap` | ^6.1.1           | ^7.x ou ^6.4+        | ⚠️ Vérifier si v6 supporte Nuxt 4 ou si v7 est requis                      | 🟠     |
| 7   | `@nuxt/eslint`    | ^0.5.7           | ^1.x                 | Config flat ESLint, probablement cassant                                   | 🟠     |
| 8   | `eslint`          | ^9.14.0          | ^9.x                 | Compatible                                                                 | 🟢     |
| 9   | `sass`            | ^1.80.7          | ^1.80+               | Compatible                                                                 | 🟢     |
| 10  | `sass-loader`     | ^16.0.3          | ^16+                 | Compatible                                                                 | 🟢     |
| 11  | `vite`            | ^6.0.1           | ^6+                  | Nuxt 4 utilise Vite Environment API — géré par Nuxt                        | 🟢     |

- [ ] **DEP-1** — Mettre à jour `nuxt` vers la dernière version 4.x
- [ ] **DEP-2** — Mettre à jour `@nuxt/content` vers 3.x (après avoir migré les APIs — voir 3.3)
- [ ] **DEP-3** — Vérifier compatibilité `@nuxtjs/sitemap` 6.x avec Nuxt 4 ; mettre à jour vers 7.x si requis
- [ ] **DEP-4** — Vérifier compatibilité `@nuxt/image` ; mettre à jour si nécessaire
- [ ] **DEP-5** — Mettre à jour `@nuxt/eslint` vers 1.x si requis par Nuxt 4
- [ ] **DEP-6** — Supprimer `"#internal/nuxt/paths": "./nuxt.paths.mjs"` de `package.json` `imports` — override interne Nuxt 3 probablement incompatible avec Nuxt 4

---

#### 3.2 — Restructuration répertoires (`app/` directory)

Nuxt 4 déplace `srcDir` vers `app/` par défaut. Fichiers à déplacer :

| Source (racine)                  | Destination (`app/`)          |
| -------------------------------- | ----------------------------- |
| `assets/`                        | `app/assets/`                 |
| `components/` (20 fichiers .vue) | `app/components/`             |
| `composables/useTags.ts`         | `app/composables/useTags.ts`  |
| `layouts/default.vue`            | `app/layouts/default.vue`     |
| `layouts/error.vue`              | `app/layouts/error.vue`       |
| `pages/` (14 fichiers .vue)      | `app/pages/`                  |
| `utils/seo-url.ts`               | `app/utils/seo-url.ts`        |
| `utils/portfolioItems.ts`        | `app/utils/portfolioItems.ts` |
| `app.vue`                        | `app/app.vue`                 |
| `error.vue`                      | `app/error.vue`               |

Fichiers qui **restent à la racine** (pas de déplacement) :

| Fichier/Dossier        | Raison                                              |
| ---------------------- | --------------------------------------------------- |
| `nuxt.config.ts`       | Config racine                                       |
| `content/`             | Répertoire content — résolu depuis rootDir          |
| `data/`                | Pas un dossier Nuxt standard — vérifier les imports |
| `public/`              | Résolu depuis rootDir                               |
| `server/` (3 fichiers) | `serverDir` reste `<rootDir>/server`                |
| `scripts/`             | Pas un dossier Nuxt                                 |

- [ ] **DIR-1** — Créer `app/` et déplacer les dossiers listés ci-dessus
- [ ] **DIR-2** — Mettre à jour les imports `~/` — ils pointeront vers `app/` automatiquement, mais vérifier :
  - `import { canonicalUrl, withTrailingSlash } from '~/utils/seo-url'` (dans 4 pages + composants)
  - `import { ref, watch } from 'vue'` (pas de changement — auto-import)
  - `@use "~/assets/css/vars/_colors.scss"` dans `vite.css.preprocessorOptions.scss.additionalData`
- [ ] **DIR-3** — Vérifier que `data/portfolio.ts` et `data/apps.ts` sont accessibles depuis `app/` (ajouter un alias ou déplacer dans `app/data/`)
- [ ] **DIR-4** — Vérifier que les server components `components/server/*.server.vue` fonctionnent depuis `app/components/server/`

---

#### 3.3 — 🔴 Breaking changes `@nuxt/content` v2 → v3

**C'est le changement le plus impactant de la migration.** L'API est entièrement refondue.

##### 3.3.1 — `queryContent()` → `queryCollection()`

| Fichier                           | Lignes  | Code actuel                                                               | Migration                                                                        |
| --------------------------------- | ------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `pages/index.vue`                 | 430-436 | `queryContent('articles').only([...]).sort({ date: -1 }).limit(2).find()` | `queryCollection('articles').select([...]).order('date', 'DESC').limit(2).all()` |
| `pages/eco-conception/index.vue`  | 651-654 | `queryContent('articles').only([...]).sort({ date: -1 }).find()`          | `queryCollection('articles').select([...]).order('date', 'DESC').all()`          |
| `pages/eco-conception/index.vue`  | 659     | `queryContent('articles', 'faq-eco-conception').findOne()`                | `queryCollection('articles').where('stem', '=', 'faq-eco-conception').first()`   |
| `pages/eco-conception/[slug].vue` | 140     | `queryContent('articles', route.params.slug).findOne()`                   | `queryCollection('articles').where('stem', '=', slug).first()`                   |
| `components/HomeEcoArticles.vue`  | 50-54   | `queryContent('articles').only([...]).sort({ date: -1 }).limit(2).find()` | Idem index.vue                                                                   |

- [ ] **CONTENT-1** — Migrer les 5 appels `queryContent()` → `queryCollection()` dans les fichiers ci-dessus

##### 3.3.2 — `findSurround()` → `queryCollectionItemSurroundings()`

| Fichier                           | Lignes  | Code actuel                                                                                             |
| --------------------------------- | ------- | ------------------------------------------------------------------------------------------------------- |
| `pages/eco-conception/[slug].vue` | 149-152 | `queryContent('articles').only(['title', '_path']).sort({ date: 1 }).findSurround(article.value._path)` |

- [ ] **CONTENT-2** — Migrer `findSurround()` → `queryCollectionItemSurroundings()` avec la nouvelle syntaxe

##### 3.3.3 — `serverQueryContent()` supprimé

| Fichier                      | Lignes | Code actuel                                                                                                                      |
| ---------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `server/routes/rss.xml.ts`   | 1, 7   | `import { serverQueryContent } from '#content/server'` + `serverQueryContent(event, 'articles').sort({ $numeric: true }).find()` |
| `server/routes/feed.json.ts` | 1, 6   | Idem                                                                                                                             |
| `nuxt.config.ts`             | 265    | `const { serverQueryContent } = await import('#content/server')` dans `sitemap.routes`                                           |

- [ ] **CONTENT-3** — Réécrire `rss.xml.ts` sans `serverQueryContent` — utiliser l'API server de Content v3
- [ ] **CONTENT-4** — Réécrire `feed.json.ts` sans `serverQueryContent`
- [ ] **CONTENT-5** — Réécrire `sitemap.routes` dans `nuxt.config.ts` sans `serverQueryContent` — ⚠️ vérifier si `@nuxtjs/sitemap` 7.x génère les routes automatiquement depuis Content v3

##### 3.3.4 — `.where()` query syntax refondu

| Fichier                         | Lignes | Code actuel                                                                                       |
| ------------------------------- | ------ | ------------------------------------------------------------------------------------------------- |
| `components/AppSearchInput.vue` | 33-41  | `.where({ $or: [{ title: { $contains: newQuery } }, { description: { $contains: newQuery } }] })` |

Content v3 utilise une syntaxe SQL-like : `.where('title', 'LIKE', '%query%')`. L'opérateur `$or` n'existe plus.

- [ ] **CONTENT-6** — Réécrire le search dans `AppSearchInput.vue` avec la nouvelle syntaxe `.where()` ou utiliser `queryCollectionSearchSections()` (remplaçant de `searchContent()`)

##### 3.3.5 — `._path` → `.path` (underscore prefix supprimé)

Toutes les propriétés internes préfixées `_` sont renommées en Content v3.

| Fichier                           | Occurrences                                       |
| --------------------------------- | ------------------------------------------------- |
| `pages/eco-conception/[slug].vue` | `article.value._path` (lignes 147, 152, 158)      |
| `pages/eco-conception/index.vue`  | `article._path` dans le template                  |
| `pages/index.vue`                 | `article._path` dans le template                  |
| `components/HomeEcoArticles.vue`  | `article._path` dans le template                  |
| `server/routes/rss.xml.ts`        | `article._path` (ligne 37)                        |
| `server/routes/feed.json.ts`      | `article._path` (ligne 29)                        |
| `nuxt.config.ts`                  | `article._path` dans `sitemap.routes` (ligne 267) |

- [ ] **CONTENT-7** — Remplacer `._path` par `.path` dans tous les fichiers listés (7 fichiers, ~12 occurrences)

##### 3.3.6 — `<ContentRenderer>` — API modifiée

| Fichier                           | Lignes  | Code actuel                                           |
| --------------------------------- | ------- | ----------------------------------------------------- |
| `pages/eco-conception/[slug].vue` | 106-111 | `<ContentRenderer v-if="article" :value="article" />` |

- [ ] **CONTENT-8** — Vérifier que `<ContentRenderer :value="article" />` fonctionne toujours avec Content v3 — ⚠️ à tester manuellement, le composant est conservé mais son API peut avoir changé

##### 3.3.7 — Configuration `content:` dans `nuxt.config.ts`

```ts
// Configuration actuelle (v2)
content: {
  highlight: { theme: 'dark-plus', preload: [...] },
  markdown: { toc: { depth: 3 }, remarkPlugins: [], rehypePlugins: [] }
}
```

Content v3 utilise un fichier `content.config.ts` séparé pour définir les collections et les sources.

- [ ] **CONTENT-9** — Créer `content.config.ts` avec la définition de la collection `articles`
- [ ] **CONTENT-10** — Migrer la config `highlight` et `markdown` vers le nouveau format Content v3
- [ ] **CONTENT-11** — Vérifier que `article.body.toc.links` (utilisé dans `[slug].vue` pour le sommaire) est toujours disponible en v3

##### 3.3.8 — Composants supprimés

`ContentDoc`, `ContentList`, `ContentNavigation`, `ContentQuery` sont supprimés en v3. **Aucun n'est utilisé dans le projet** → pas d'impact.

##### 3.3.9 — Ordre de tri par défaut

Content v3 trie alphabétiquement par défaut (au lieu de numériquement). Vérifier que les `.sort({ date: -1 })` explicites suffisent.

- [ ] **CONTENT-12** — Vérifier l'ordre de tri des articles après migration (les sorts explicites devraient suffire)

---

#### 3.4 — Breaking changes `nuxt.config.ts`

##### 3.4.1 — `experimental.inlineSSRStyles` → `features.inlineStyles`

```ts
// Actuel (nuxt.config.ts:309)
experimental: {
  inlineSSRStyles: false,
}

// Nuxt 4
features: {
  inlineStyles: false, // ou true — comportement changé : seul le CSS Vue est inline, le global reste en fichier séparé
}
```

- [ ] **CONFIG-1** — Migrer `experimental.inlineSSRStyles` → `features.inlineStyles` et réévaluer la valeur (`false` était choisi pour meilleur cache — le comportement par défaut Nuxt 4 est déjà plus granulaire)

##### 3.4.2 — `experimental.defaults.nuxtLink.prefetch`

```ts
// Actuel (nuxt.config.ts:311-313)
experimental: {
  defaults: {
    nuxtLink: {
      prefetch: false
    }
  }
}
```

- [ ] **CONFIG-2** — Vérifier si `experimental.defaults.nuxtLink.prefetch` est toujours au même chemin en Nuxt 4 — ⚠️ à vérifier manuellement

##### 3.4.3 — `router.options.prefetchLinks` et `linkPrefetchedClass`

```ts
// Actuel (nuxt.config.ts:184-189)
router: {
  options: {
    linkPrefetchedClass: 'nuxt-link-prefetched',
    prefetchLinks: false,
  }
}
```

- [ ] **CONFIG-3** — Vérifier que `router.options` est inchangé en Nuxt 4 — ⚠️ à vérifier manuellement

##### 3.4.4 — `routeRules.noScripts`

```ts
// Actuel (nuxt.config.ts:117-118)
routeRules: {
  '/': { prerender: true, noScripts: true },
  '/mentions-legales/': { prerender: true, noScripts: true },
}
```

- [ ] **CONFIG-4** — Vérifier que `noScripts: true` est toujours supporté en Nuxt 4 — ⚠️ à vérifier manuellement

##### 3.4.5 — Nitro hooks sitemap

```ts
// Actuel (nuxt.config.ts:285-297)
nitro: {
  hooks: {
    'sitemap:resolved': (ctx) => { ... },
    'sitemap:output': (ctx) => { ... },
  }
}
```

Ces hooks viennent de `@nuxtjs/sitemap`, pas de Nitro. Leur compatibilité dépend de la version de `@nuxtjs/sitemap` utilisée avec Nuxt 4.

- [ ] **CONFIG-5** — Tester les hooks `sitemap:resolved` et `sitemap:output` après mise à jour de `@nuxtjs/sitemap`

##### 3.4.6 — Flags expérimentaux supprimés

Ces flags n'existent plus en Nuxt 4 (valeur fixe) — les supprimer de la config si présents :

- `experimental.treeshakeClientOnly` → toujours `true`
- `experimental.configSchema` → toujours `true`
- `experimental.polyfillVueUseHead` → toujours `false`
- `experimental.respectNoSSRHeader` → toujours `false`

- [ ] **CONFIG-6** — Supprimer les flags expérimentaux obsolètes (aucun n'est actuellement défini → pas d'action, mais vérifier après `compatibilityVersion: 4`)

##### 3.4.7 — `vite.css.preprocessorOptions.scss`

```ts
// Actuel
scss: {
  additionalData: '@use "~/assets/css/vars/_colors.scss" as *; ...',
  api: 'modern-compiler',
}
```

- [ ] **CONFIG-7** — Vérifier que `additionalData` avec `~/` résout correctement vers `app/assets/` après restructuration — ⚠️ critique car utilisé globalement

---

#### 3.5 — Breaking changes composants, pages et composables

##### 3.5.1 — `useAsyncData` : `data` default `undefined` au lieu de `null`

6 appels `useAsyncData` dans le projet. Vérifier les guards `if (!data.value)` vs `if (data.value === null)`.

| Fichier                               | Pattern actuel                              | Impact |
| ------------------------------------- | ------------------------------------------- | ------ |
| `pages/eco-conception/[slug].vue:138` | `article.value?._path` (optional chaining)  | 🟢 OK  |
| `pages/eco-conception/[slug].vue:144` | `surroundArticles.value?.[0]`               | 🟢 OK  |
| `pages/eco-conception/index.vue:648`  | `articles.value` dans template avec `v-for` | 🟢 OK  |
| `pages/eco-conception/index.vue:657`  | `faqArticle.value` dans template            | 🟢 OK  |
| `pages/index.vue:430`                 | `articles` dans template                    | 🟢 OK  |
| `components/HomeEcoArticles.vue:49`   | `articles` dans template                    | 🟢 OK  |

- [ ] **ASYNC-1** — Valider que tous les guards utilisent optional chaining (`?.`) et non des comparaisons strictes à `null`

##### 3.5.2 — `useAsyncData` : shallow reactivity par défaut

`data` est maintenant un `shallowRef` au lieu d'un `ref`. Les mutations de propriétés ne déclenchent plus la réactivité.

- [ ] **ASYNC-2** — Vérifier qu'aucun code ne mute directement les propriétés de `data.value` (ex: `article.value.title = '...'`). Si c'est le cas, ajouter `{ deep: true }`.

##### 3.5.3 — Unhead v2 : propriétés supprimées

Propriétés supprimées dans `useHead()` : `vmid`, `hid`, `children`, `body`.

- [ ] **HEAD-1** — Grep `vmid|hid|children|body` dans les appels `useHead()` — **aucun trouvé actuellement** → 🟢 pas d'action

##### 3.5.4 — Unhead v2 : tri par Capo.js

Les tags `<head>` sont triés automatiquement par Capo.js pour optimiser le chargement. Peut changer l'ordre des `<meta>` et `<link>`.

- [ ] **HEAD-2** — Vérifier visuellement le `<head>` après migration — impact probable sur l'ordre des meta OG/Twitter mais pas fonctionnel

##### 3.5.5 — Noms de composants normalisés

`SomeFolder/MyComponent.vue` a maintenant le nom `SomeFolderMyComponent`. Impact sur `<KeepAlive>` filters.

- [ ] **COMP-1** — Vérifier qu'aucun `<KeepAlive>` n'utilise des noms de composants hardcodés — **aucun `KeepAlive` trouvé** → 🟢 pas d'action

##### 3.5.6 — Import inutilisé dans `rss.xml.ts`

```ts
// server/routes/rss.xml.ts:2
import { SitemapStream, streamToPromise } from 'sitemap'
```

Cet import est **inutilisé** (le RSS est généré manuellement en string). Le package `sitemap` n'est pas dans `package.json`.

- [x] **CLEAN-1** — Supprimer l'import mort `import { SitemapStream, streamToPromise } from 'sitemap'` dans `server/routes/rss.xml.ts`

##### 3.5.7 — `useTags` composable (état partagé)

```ts
// composables/useTags.ts — utilise useState() (Nuxt natif)
export const useTags = () => {
  const tag = useState<string>('currentTag', () => '')
  ...
}
```

`useState()` est compatible Nuxt 4. Pas de Pinia dans le projet.

- [ ] **STATE-1** — Vérifier que `useState()` fonctionne identiquement après migration → 🟢 probable pas d'action

---

#### 3.6 — TypeScript

- [ ] **TS-1** — Nuxt 4 active `noUncheckedIndexedAccess: true` — vérifier si des erreurs TS apparaissent (projet utilise `strict: false` et `typeCheck: false` → impact limité)
- [ ] **TS-2** — Nuxt 4 génère des tsconfig séparés (`.nuxt/tsconfig.app.json`, `.nuxt/tsconfig.server.json`, etc.) — mettre à jour `tsconfig.json` avec les références

---

#### 3.7 — Validation post-migration

- [ ] **VALID-1** — `npm run generate` sans erreur ni warning
- [ ] **VALID-2** — `node scripts/seo-check.mjs` — toutes les vérifications SEO passent
- [ ] **VALID-3** — Vérifier manuellement les 5 pages clés dans le navigateur : `/`, `/eco-conception/`, `/eco-conception/[un-article]/`, `/portfolio/`, `/services/`
- [ ] **VALID-4** — PSI mobile score ≥ 99
- [ ] **VALID-5** — Sitemap XML valide (`/sitemap.xml`) — toutes les URLs avec trailing slash
- [ ] **VALID-6** — RSS (`/rss.xml`) et JSON Feed (`/feed.json`) fonctionnels
- [ ] **VALID-7** — EcoIndex ≥ A
- [ ] **VALID-8** — JSON-LD valide sur toutes les pages (tester avec Google Rich Results Test)
- [ ] **VALID-9** — Robots.txt correct (`/robots.txt`)
- [ ] **VALID-10** — Recherche articles (`AppSearchInput`) fonctionnelle
- [ ] **VALID-11** — Navigation prev/next articles fonctionnelle
- [ ] **VALID-12** — Filtres tags sur `/eco-conception/` fonctionnels
- [ ] **VALID-13** — Merger sur `dev` puis `master` après validation complète

---

#### 3.8 — Warnings supplémentaires découverts (27 avril 2026)

- [ ] **NEW-1** — Configuration npm utilisateur `python` inconnue
  - Impact : 🟢
  - Fichier : configuration npm utilisateur hors dépôt
  - Ligne : `migration-nuxt4-warnings.txt:1` et `migration-nuxt4-warnings.txt:7`
  - Message exact :
    ```text
    npm warn Unknown user config "python". This will stop working in the next major version of npm. See `npm help npmrc` for supported config options.
    ```
  - Note : warning npm émis avant les scripts, sans blocage du build statique.

- [ ] **NEW-2** — Configuration npm environnement `python` inconnue
  - Impact : 🟢
  - Fichier : configuration npm environnement hors dépôt
  - Ligne : `migration-nuxt4-warnings.txt:6`
  - Message exact :
    ```text
    npm warn Unknown env config "python". This will stop working in the next major version of npm. See `npm help npmrc` for supported config options.
    ```
  - Note : warning npm émis pendant la chaîne `pregenerate`, sans blocage du build statique.

---

### 🔴 Critique — bugs à corriger immédiatement

- [x] **C1** — ~~Meta description `[object Object]` sur `/eco-conception/comment-reduire-le-poids-d-un-site-web/`~~ — `seo.description` YAML quoté ✓
- [x] **C2** — ~~Meta description `L` sur `/mentions-legales/`~~ — `useSeoMeta({ description })` ajouté ✓
- [x] **C3** — ~~Descriptions tronquées sur `/apps/`, `/portfolio/`, `/eco-conception/audit-eco-conception/`, `/contact/`~~ — apostrophes supprimées des descriptions ✓
- [x] **C4** — ~~Canonical homepage sans trailing slash~~ — faux positif confirmé : `canonicalUrl()` déjà correct (`utils/seo-url.ts:33`) ✓
- [x] **C5** — ~~`/404/` répond HTTP 200~~ — redirect Netlify `status = 404` ajouté dans `netlify.toml` ✓
- [x] **C6** — ~~`/404/` dans le sitemap~~ — exclue via `sitemap.exclude` dans `nuxt.config.ts` ✓
- [x] **C7** — ~~`pages/portfolio.vue` utilise `useHead()`~~ — migré vers `useSeoMeta()` avec twitter:card, twitter:title, twitter:description ✓
- [x] **C8** — ~~Chapô affiché en JSON brut sur `theme-wordpress` et `typographie`~~ — `:` non quoté dans le frontmatter YAML causait le parse en objet — frontmatters corrigés ✓
- [x] **C9** — ~~Erreur `#app-manifest` en mode dev~~ — artefact de cache `.nuxt` local — résolu par `rm -rf .nuxt && npm run dev` — rien à committer ✓

---

### 🟠 Important — corriger dans la semaine

#### SEO technique

- [x] **I1** — ~~Entités HTML `&amp;` et `&#8209;` dans le H1 portfolio~~ — remplacés par caractères Unicode directs dans `pages/portfolio.vue` ✓
- [x] **I2** — ~~Pattern titles articles `BeAbot - Titre`~~ — `titleTemplate: '%s | BeAbot'` dans `[slug].vue` ; `| BeAbot` retiré du frontmatter `comment-reduire...` ✓
- [x] **I3** — ~~Title `/images-eco-conception/` trop long (78 car.)~~ — seo.title raccourci à 59 car. → 68 avec suffixe ✓
- [x] **I4** — ~~JSON-LD `@type: ?`~~ — faux positif de l'audit Python, confirmé ✓ par Claude Code (JSON-LD complet et valide sur toutes les pages)
- [x] **I5** — ~~`og:title` de `/mentions-legales/` désynchronisé~~ — résolu par C2 (`ogTitle: 'Mentions légales — BeAbot'` dans `useSeoMeta()`) ✓
- [x] **I6** — ~~Descriptions >160 car. sur 5 articles~~ — reformulées à ≤155 car. dans 4 frontmatters ✓
- [x] **I7** — ~~JSON-LD `Article` manquant~~ — `BlogPosting` déjà présent avec `author.url`, `datePublished`, `dateModified` ; `author.url` ajouté ✓
- [x] **I8** — ~~`og:image` absent sur `/portfolio/`~~ — `ogImage` ajouté dans `useSeoMeta()` ✓
- [x] **I9** — ~~`useHead` statique à setup time~~ — remplacé par `useHead(computed(() => ...))` pour réactivité client ✓

#### Repositionnement freelance

- [x] **A1** — ~~"freelance" absent du H1~~ — H1 : "Développeur web freelance spécialisé en éco-conception" ✓
- [x] **A2** — ~~Zone géo absente du hero~~ — `Lille · Hauts-de-France · Remote` sous le subtitle ✓
- [x] **A3** — ~~Badge disponibilité absent~~ — pastille verte animée "Disponible pour missions" avant le H1 ✓
- [x] **A4** — ~~`<title>` homepage générique~~ — `Benoît Abot — Développeur web freelance WordPress & Nuxt | Lille` ✓
- [x] **A5** — ~~Contact sans zone géo~~ — `Basé à Lille · Disponible en remote et en présentiel (Hauts-de-France)` ✓
- [x] **A6** — ~~Footer sans mention géo~~ — `Benoît Abot · Développeur web freelance · Lille` dans le footer ✓
- [x] **B6** — ~~JSON-LD `Person` sans localisation~~ — `workLocation`, `areaServed`, `availableChannel` ajoutés ✓

---

### 🟡 Mineur / Backlog

#### SEO technique

- [x] **M1** — ~~`twitter:card` absente sur `/mentions-legales/`~~ — `twitterCard`, `twitterTitle`, `twitterImage` ajoutés dans `useSeoMeta()` ✓
- [x] **M2** — ~~`og:image` générique sur les articles~~ — champ `seo.ogImage` ajouté dans le frontmatter des 3 articles les plus récents (`typographie`, `wordpress`, `theme-wordpress`) ✓
- [x] **M3** — ~~H1 trop courts sur les pages apps~~ — DuoSpend (68 car.) ✓, Meeting Mode (68 car.) ✓, `/apps/` index (51 car.) ✓
- [x] **M4** — ~~JSON-LD `Person` / `WebSite` manquant homepage~~ — confirmé ✓ présent par Claude Code
- [x] **M5** — ~~JSON-LD `ContactPage` manquant sur `/contact/`~~ — schéma `ContactPage` ajouté dans `useHead()` ✓
- [x] **M6** — ~~Titles trop courts sur 2 articles~~ — `seo.title` enrichis : "...polices système vs web fonts" et "...thèmes sobres et performants" ✓
- [x] **M7** — ~~Convention images Markdown non documentée~~ — section ajoutée dans `AGENTS.md` ✓
- [x] **M8** — ~~`og:image:width` / `og:image:height` absents~~ — `ogImageWidth: 1200, ogImageHeight: 630` ajoutés sur 8 fichiers ✓
- [x] **M9** — ~~Meta description homepage à 142 car.~~ — 154 car. avec dimension freelance + géo ✓

#### Contenu & conversion freelance

- [x] **B1** — Créer une page `/services/` avec types de missions, zones, tarifs indicatifs
<!-- - [ ] **B2** — Portfolio : ajouter la localisation des clients là où applicable
- [ ] **B3** — Portfolio : réduire la visibilité des apps iOS (section séparée ou masquée par défaut) -->
- [x] **B4** — Ajouter CTA freelance en bas de `/eco-conception/`
- [x] **B5** — Ajouter encart "Faire faire son site sur Greenlight" sur `/greenlight/`

#### Articles à écrire (SEO longue traîne local)

- [x] Mettre à jour les 4 articles de 2021-2022 (`updatedAt: 2026-04-27` + note éditoriale + CTA freelance en conclusion) + afficher date modif dans cartes /eco-conception/ ✓
- [x] Article : "Développeur WordPress freelance à Lille : comment choisir ?" → `/eco-conception/wordpress-freelance-lille/`
- [x] Article : "Refonte de site éco-conçu : méthode et budget" → `/eco-conception/refonte-site-eco-concu/`
- [x] Article : "Audit de site web : ce que j'analyse et ce que ça coûte" → `/eco-conception/audit-site-web/`
- [x] Article : "WordPress vs Nuxt pour un site vitrine éco-conçu" → `/eco-conception/wordpress-vs-nuxt/`

- \[x\] Page produit `/greenlight/` créée avec hero, bénéfices, comparatif de versions, FAQ et CTA final
- \[x\] Positionnement Greenlight recentré sur rapidité, visibilité, crédibilité, lisibilité et durabilité
- \[x\] Différence Greenlight-free / Greenlight rendue explicite sans inventer de lien de téléchargement
- \[x\] Navigation principale réordonnée avec entrée `Greenlight`
- \[x\] Footer mis à jour avec lien `Greenlight`
- \[x\] CTA existants de la home vérifiés sur `/greenlight/`
- \[x\] Deuxième passe commerciale sur `/greenlight/` : hero plus fort, preuves free visibles, distinctions free/premium clarifiées et CTA de choix renforcé
- \[x\] Navigation de `/greenlight/` repassée en foncé pour mieux lire la page produit claire
- \[x\] Validation `npm run generate` + `NUXT_PUBLIC_SITE_URL=https://beabot.fr node scripts/seo-check.mjs`

**Phase 16 Homepage V3 (22 avril 2026)** — Refonte de la home selon le positionnement hybride services + éco-conception, sur la branche `feature/home-v3-positioning`.

- \[x\] Hero repositionné sur l’offre de développement web éco-conçu
- \[x\] Bloc de preuves chiffrées recentré sur les métriques de [beabot.fr](http://beabot.fr)
- \[x\] Section services reconstruite autour de 3 offres lisibles
- \[x\] Section réalisations recentrée sur 4 projets prioritaires
- \[x\] Bloc Greenlight intégré sans inventer de lien de téléchargement
- \[x\] Section approche raccourcie avec lien vers `/eco-conception/`
- \[x\] Articles déplacés plus bas dans la page avec logique de listing conservée
- \[x\] CTA final réaligné sur la promesse WordPress sobre, rapide et durable
- \[x\] SEO homepage mis à jour (title, description, JSON-LD Organization / Person)
- \[x\] Navigation desktop recalée sur le hero (masquée sur `.home-hero`, visible ensuite)
- \[x\] Hover des cartes de réalisations recentré sur un zoom image plus doux et plus long, sans mouvement du texte
- \[x\] Validation `npm run generate` + `NUXT_PUBLIC_SITE_URL=https://beabot.fr node scripts/seo-check.mjs`

**Phase 14 Portfolio + Homepage Mobile** — Prêt pour merge sur master.

**Patch Portfolio (25 janvier 2026)** — Correctif d’affichage projet BORDUR.

**Pages Apps (26 mars 2026)** — Landing `/apps/` + pages détail Meeting Mode / DuoSpend.

- \[x\] Recomposition de la landing `/apps/` (hero, grille, CTA, cartes)

- \[x\] Intégration des images DuoSpend dans les cartes et la page détail

- \[x\] Hiérarchie visuelle du milieu de page DuoSpend (galerie, FAQ, confidentialité)

- \[x\] Ancre `#privacy` auto-ouverte sur la section confidentialité

- \[x\] CTA de bas de page harmonisés avec le design system

- \[x\] H1 de `/apps/` neutralisé sur `iOS` et `macOS`

- \[x\] Galerie DuoSpend réorganisée en 2x3 avec images entières

- \[x\] Card `Un solde` mise en avant avec description détaillée

- \[x\] Formulaire d’intérêt et lien `/contact/` conservés sur les pages enfants

- \[x\] Référence `preview.src` de DuoSpend alignée sur `duospend-hero.webp`

- \[x\] Wording DuoSpend mis à jour dans `data/apps.ts`

- \[x\] Navigation mobile corrigée pour masquer la nav desktop et conserver `Apps` avant `Contact`

- \[x\] Refonte Meeting Mode (hero, before/after, galerie, FAQ, confidentialité)

- \[x\] Preview Meeting Mode activée dans la landing `/apps/`

- \[x\] Galerie Meeting Mode alimentée par les visuels macOS du dossier `public/img/apps/`

- \[x\] Ancre `#privacy` auto-ouverte sur la confidentialité Meeting Mode

- \[x\] Wording Meeting Mode aligné dans `data/apps.ts`

- \[x\] Lightbox native réutilisable pour les galeries DuoSpend et Meeting Mode

- \[x\] Renommage public "chasse-patate" → "BORDUR"

- \[x\] Liens projet mis à jour (topette.netlify.app → [bordur.fr](http://bordur.fr))

MétriqueValeurStatut**Framework**Nuxt 3.14✅**URLs**Trailing slash normalisé✅**Portfolio**Refonte complète✅**Homepage**Améliorations mobile UX✅**Structured Data**Toutes pages principales✅**EcoIndex**A✅**Lighthouse**99 / 96 / 100 / 100✅

---

## ✅ PHASES TERMINÉES

### Phase 14 : Refonte Portfolio + Homepage Mobile ✅

> **Terminée le 24 décembre 2025Branche** : `dev`

#### Portfolio - Structure et contenu

- \[x\] **PF-14-01** : Section Hero avec intro personnelle + CTAs (CV, Contact)
- \[x\] **PF-14-02** : Section compétences techniques (4 colonnes colorées)
- \[x\] **PF-14-03** : Données projets enrichies (contexte, rôle, résultats)
- \[x\] **PF-14-04** : CTA final avec œufs décoratifs + liens CV/Contact

#### Portfolio - Design et UX

- \[x\] **PF-14-05** : Filtres refondus (boutons visuels, compteur dynamique)
- \[x\] **PF-14-06** : Cartes projet améliorées (hiérarchie typo, badges éco)
- \[x\] **PF-14-07** : Bloc métriques sur projets éco-conçus (EcoIndex, poids, requêtes)
- \[x\] **PF-14-08** : Responsive mobile
- \[x\] **PF-14-16** : Timeline sobre entre sections (points d'ancrage visuels)
- \[x\] **PF-14-17** : Compétences en rangée horizontale avec couleurs par catégorie
- \[x\] **PF-14-18** : CTA final compact avec œufs (symétrie avec Hero)
- \[x\] **PF-14-19** : Lien GitHub intégré dans section Compétences
- \[x\] **PF-14-20** : Ajustements finaux (CTA height, object-position images, spacing)

#### Portfolio - SEO et accessibilité

- \[x\] **PF-14-09** : Meta description orientée recrutement
- \[x\] **PF-14-10** : JSON-LD ProfilePage + Person
- \[x\] **PF-14-11** : Attributs ARIA sur filtres interactifs
- \[x\] **PF-14-12** : Focus states accessibles

#### Portfolio - Données structurées
