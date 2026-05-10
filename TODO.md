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

- [x] Lancer la suite de tests existante et s'assurer qu'elle passe à 100% sur `dev` avant toute migration
- [x] Documenter les tests manquants critiques (pages, composants, utils SEO) et les ajouter si nécessaire

> Audit préparatoire réalisé le 28 avril 2026 sur `chore/nuxt-4-A` après activation de `future.compatibilityVersion: 4`.
> À refaire explicitement sur `dev` avant toute branche de migration réelle.
> Couverture préparatoire enrichie sur `chore/nuxt-4-A` : tests critiques ajoutés pour URLs SEO, `AppLink`, pages SSG, feeds et requêtes Content v2.

- [x] **TEST-AUDIT-1** — Lancer la suite existante sur la branche d'audit : `npm test`
  - Résultat : ✅ 49 checks passés, 0 warning, 0 erreur
  - Sortie : `migration-nuxt4-tests.txt`
- [x] **TEST-AUDIT-2** — Lancer le check SEO existant sur le build statique disponible
  - Commande : `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs`
  - Résultat : ✅ `OK SEO checks passed.`
  - Sortie : `migration-nuxt4-seo-check.txt`
- [x] **TEST-AUDIT-3** — Documenter les manques critiques avant migration Nuxt 4
  - Rapport : `migration-nuxt4-tests-coverage.md`
- [x] **TEST-1** — Ajouter des tests unitaires pour `utils/seo-url.ts`
  - Couvrir : `absoluteUrl`, `canonicalUrl`, `withTrailingSlash`, `normalizeInternalHref`
  - Critique : URLs canoniques, trailing slash, assets avec extension, query strings et ancres
- [x] **TEST-2** — Ajouter un test de rendu/comportement pour `components/AppLink.vue`
  - Couvrir : liens internes normalisés, liens externes inchangés, ancres et query strings
  - Critique : maillage interne et convention SEO trailing slash
- [x] **TEST-3** — Ajouter des smoke tests SSG pour les pages clés
  - Pages : `/`, `/eco-conception/`, un article, `/portfolio/`, `/services/`, `/contact/`
  - Critique : build statique, balises SEO minimales, canonical et `og:url`
- [x] **TEST-4** — Ajouter des tests de non-régression pour `rss.xml` et `feed.json`
  - Couvrir : génération sans erreur, URLs avec trailing slash, dates valides, échappement XML/JSON
  - Critique : endpoints serveur impactés par la migration Content v2 → v3
- [x] **TEST-5** — Ajouter un check ciblé sur les requêtes Content utilisées par les pages articles
  - Couvrir : liste articles, page article, navigation précédent/suivant, tags
  - Critique : APIs `queryContent`, `serverQueryContent`, `_path` identifiées comme cassantes en Nuxt/Content v3

### Étape 1 — Performance (PageSpeed Insights : 99 → 100 mobile)

> Source : audit PSI du 27 avril 2026 (screenshot)
> Audit local : `migration-nuxt4-psi-audit.md`

- [ ] **PSI-1** — Éliminer les 3 CSS render-blocking (`/_nuxt/entry.css`, `/_nuxt/index.css`, `/_nuxt/default.css`) — économie estimée : 270 ms LCP/FCP
  - Option A : `inlineSSRStyles: true` (déjà désactivé intentionnellement — réévaluer)
  - Option B : charger les CSS non-critiques en `<link rel="preload">` + swap
  - Option C : CSS critique inline via plugin Vite Extract Critical
  - Note : `inlineSSRStyles: true` a été testé puis reverté le 28 avril 2026. La validation publique sur `https://dev-beabot.netlify.app/` donnait un score mobile 98 contre 99 sur `https://beabot.fr/` avant intervention, avec `vendor-libs.css` et `entry.css` encore render-blocking. Approche abandonnée.
  - Note : score mobile 100 atteint sur `dev`, mais item conservé ouvert faute de validation détaillée de l’audit correspondant.
- [ ] **PSI-2** — Réduire la chaîne critique maximale (444 ms sur `entry.css`) — envisager un split CSS plus fin ou un lazy-load des styles de pages non-homepage
  - Note : la validation publique sur `dev` indiquait une chaîne critique maximale de 837 ms après `inlineSSRStyles: true`. La réduction n’est donc pas validée. Exploration séparée nécessaire sur `vendor-libs.css` et `entry.css`.
  - Note : score mobile 100 atteint sur `dev`, mais item conservé ouvert faute de validation détaillée de l’audit correspondant.
- [x] **PSI-3** — Valider le score PSI mobile = 100 après corrections
  - Validation : PageSpeed Insights mobile sur `https://dev-beabot.netlify.app/`, rapport du 28 avril 2026 à 17:57:04.
  - Résultat : Performance 100, Accessibilité 96, Bonnes pratiques 100, SEO 100.
  - Note : score atteint après revert de `inlineSSRStyles` à `false`; la stratégie CSS externe/cache est conservée.

### Étape 2 — Audit fichiers inutiles

> Audit réalisé le 28 avril 2026 sur `chore/nuxt4-unused-files-audit`.
> Rapport : `migration-nuxt4-unused-files-audit.md`.

- [x] Lister les fichiers orphelins potentiels ; supprimer uniquement ceux prouvés inutilisés
- [x] Vérifier que `getSiteMeta.js` (vestige Nuxt 2, marqué `deprecated`) n'est plus importé dans aucun composant — le supprimer si présent et inutilisé
- [x] Auditer les dépendances `package.json` non utilisées (`npm-check` ou équivalent)
  - Note : aucune dépendance modifiée ; `gray-matter` et `sass-loader` restent à vérifier dans une branche séparée.
- [x] Vérifier les routes générées : documenter le nombre observé et confirmer qu'aucune page fantôme n'est incluse dans le build

### Étape 2b — Refactor SCSS → CSS moderne

> **Contexte :** le projet utilise `sass` avec l'API `modern-compiler` (déjà configurée dans `vite.css.preprocessorOptions`). Les warnings de dépréciation `if-function` dans `assets/css/vars/_typo.scss` ont été **corrigés le 27 avril 2026** (remplacement des `if()` Sass par `@if`/`@else`). Le refactor complet est une étape séparée.

**Objectif :** migrer les variables SCSS vers des custom properties CSS (`--var`) là où c'est pertinent, pour bénéficier de la cascade native, réduire la dépendance à SCSS et préparer la migration Nuxt 4.

- [x] **SCSS-1** — Inventaire : lister toutes les variables SCSS (`$var`) utilisées dans les composants scoped vs les fichiers globaux (`vars/`, `main.scss`)
  - Rapport : `migration-nuxt4-scss-inventory.md`
  - Sorties : `scss-inventory-*.txt`
  - Aucun style modifié ; aucune variable migrée ; aucune dépendance modifiée.
- [x] **SCSS-2** — Migrer les variables de couleurs (`$vert`, `$gris1`…) de `vars/_colors.scss` vers des custom properties CSS dans `:root` — garder les aliases SCSS pour la période de transition
  - Rapport : `migration-nuxt4-scss-colors.md`
  - Les aliases SCSS sont conservés pour transition.
  - Les usages `color.adjust()` conservent des valeurs Sass raw (`*-raw`) pour éviter de casser la compilation.
  - Les custom properties sont déclarées une seule fois dans le CSS global pour éviter la duplication liée à `additionalData`.
  - Éco-impact mesuré dans `scss-colors-assets-bytes-diff.txt`.
- [x] **SCSS-3** — Migrer les variables de typographie (`$breakpoint-tablet`, tailles fluides) vers des custom properties ou des `@layer` CSS
  - Rapport : `migration-nuxt4-scss-typography.md`
  - Migration partielle volontaire : tokens typographiques simples exposés en custom properties CSS ; `$breakpoint-tablet`, maps et calculs Sass conservés.
  - Les custom properties typo sont déclarées une seule fois dans le CSS global pour éviter la duplication liée à `additionalData`.
- [x] **SCSS-4** — Remplacer les `@use` globaux injectés via `vite.css.preprocessorOptions.additionalData` par des imports explicites dans chaque fichier qui en a besoin (meilleure traçabilité, compatible Nuxt 4)
  - Rapport : `migration-nuxt4-scss-explicit-imports.md`
  - Les imports SCSS globaux ne sont plus injectés via `additionalData`.
  - Les fichiers consommateurs déclarent explicitement leurs dépendances SCSS.
  - `api: modern-compiler` est conservé.
  - Éco-impact mesuré dans `scss-explicit-imports-assets-bytes-diff.txt`.
- [x] **SCSS-5** — Valider l'éco-impact : vérifier que le CSS généré n'a pas grossi (poids `/_nuxt/*.css` avant/après)
  - Rapport : `migration-nuxt4-scss-eco-impact.md`
  - CSS total mesuré après SCSS-4/5 : 171 279 octets.
  - Résultat : CSS réduit par rapport aux étapes précédentes.
  - `TOTAL_DEPENDANCES_IMPLICITES=0` confirmé.
  - Opportunités CSS moderne documentées : `var()`, `calc()`, `clamp()`, `min()`, `max()`, `color-mix()` et couleurs relatives CSS.
  - Aucune suppression complète de SCSS dans cette étape.
- [ ] **SCSS-6** — Supprimer SCSS entièrement si la migration est complète et que tous les composants utilisent CSS natif + custom properties

### Étape 3 — Migration Nuxt 4

> Audit réalisé le 27 avril 2026 — basé sur la doc officielle Nuxt 4 et l'analyse du code existant.
> Référence : https://nuxt.com/docs/getting-started/upgrade#migrating-to-nuxt-4

---

#### 3.0 — Pré-migration : activer le mode compatibilité Nuxt 4

- [x] **COMPAT-1** — Ajouter `future: { compatibilityVersion: 4 }` dans `nuxt.config.ts`
- [x] **COMPAT-2** — Lancer `npm run generate` et documenter tous les warnings/erreurs dans `migration-nuxt4-warnings.md`   - Refresh réalisé le 29 avril 2026 sur `chore/nuxt4-migration` après Étape 2b SCSS : `npm test` OK, `npm run generate` OK, 100 routes prerendered, aucun warning Nuxt 4 bloquant identifié.
- [x] **COMPAT-3** — Lancer `npx codemod@0.18.7 nuxt/4/migration-recipe` pour identifier les transformations automatisables   - Refresh codemod réalisé le 29 avril 2026 : `npx --no-install codemod nuxt/4/migration-recipe --dry-run` échoue car `codemod@1.9.0` n'est pas installé localement. Aucun install interactif lancé.
- [x] **COMPAT-4** — Créer la branche `chore/nuxt4-migration` depuis `dev` à jour

---

#### 3.1 — Mise à jour des dépendances

> DEP-AUDIT réalisé le 29 avril 2026 sur `chore/nuxt4-migration`.
> Objectif : comparer versions déclarées, versions installées et ordre réel de mise à jour avant `DEP-1`.
> Rapports :
> - `dep-audit-declared-versions.txt`
> - `dep-audit-installed-versions.txt`
> - `dep-audit-peer-risks.txt`
> - `dep-audit-target-versions.txt`
> - `dep-audit-update-order.md`
> Aucun changement de dépendance effectué dans cette étape.

Ordre recommandé (mettre à jour et tester une par une) :

| #   | Dépendance        | Version actuelle | Version cible Nuxt 4 | Breaking changes                                                           | Impact |
| --- | ----------------- | ---------------- | -------------------- | -------------------------------------------------------------------------- | ------ |
| 1   | `nuxt`            | 4.4.2            | 4.4.2                | Voir sections 3.2–3.5                                                      | 🔴     |
| 2   | `@nuxt/content`   | 3.13.0           | 3.13.0               | API entièrement refondue (voir 3.3)                                        | 🔴     |
| 3   | `vue`             | ^3.5.12          | ^3.5+                | Aucun — compatible                                                         | 🟢     |
| 4   | `vue-router`      | ^4.4.5           | ^4.5+                | Aucun — compatible                                                         | 🟢     |
| 5   | `@nuxt/image`     | 2.0.0            | 2.0.0                | Compatible Nuxt 4 ; provider `none` utilisé car aucun composant Nuxt Image n'est rendu aujourd'hui | 🟡     |
| 6   | `@nuxtjs/sitemap` | 8.0.15           | 8.0.15               | v6 incompatible avec Content v3 via import interne `#content/server`       | 🟠     |
| 7   | `@nuxt/eslint`    | 1.15.2           | 1.15.2               | Config flat ESLint minimale ; lint Prettier global reste hors périmètre    | 🟠     |
| 8   | `eslint`          | ^9.14.0          | ^9.x                 | Compatible                                                                 | 🟢     |
| 9   | `sass`            | ^1.80.7          | ^1.80+               | Compatible                                                                 | 🟢     |
| 10  | `sass-loader`     | ^16.0.3          | ^16+                 | Compatible                                                                 | 🟢     |
| 11  | `vite`            | ^6.0.1           | ^6+                  | Nuxt 4 utilise Vite Environment API — géré par Nuxt                        | 🟢     |

- [x] **TEST-GUARD Nuxt 4** — Adapter `scripts/pre-build-check.js` pour accepter Nuxt 3 et Nuxt 4 pendant la migration
  - Rapport : `migration-nuxt4-test-guard.md`
  - Raison : `DEP-1` était bloqué par le message `Nuxt 3 not in dependencies`.
  - Le garde-fou refuse toujours l'absence de `nuxt` et les majors autres que 3 ou 4.
  - `npm test`, `npm run generate` et check SEO validés.
- [x] **DEP-1** — Mettre à jour `nuxt` vers la dernière version 4.x
  - Rapport : `migration-nuxt4-dep-1-retry.md`
  - Version installée : `nuxt@4.4.2`
  - `npm test`, `npm run generate` et check SEO validés.
  - Routes prerendered : 100.
  - Warnings non bloquants documentés : sourcemap `nuxt:module-preload-polyfill`, circular chunk `vendor-nuxt -> vendor-libs -> vendor-nuxt`.
  - `@nuxt/content`, `@nuxt/image`, `@nuxtjs/sitemap` et `@nuxt/eslint` non migrés dans cette étape.
- [x] **DEP-2** — Mettre à jour `@nuxt/content` vers 3.x (après avoir migré les APIs — voir 3.3)
  - CONTENT-DOCS réalisé : `migration-nuxt4-content-v3-docs-audit.md`.
  - Ne pas lancer avant décision explicite sur le schéma `content.config.ts` et le validateur requis par la documentation officielle.
  - DEP-2-A réalisé partiellement : `migration-nuxt4-dep-2-a.md`.
  - Version installée : `@nuxt/content@3.13.0`.
  - `content.config.ts` minimal créé pour `articles`.
  - `npm test` OK.
  - `npm run generate` bloqué par les imports v2 `#content/server` dans RSS/JSON Feed et `@nuxtjs/sitemap` v6.
  - Ne pas cocher `DEP-2` avant migration des APIs v2 restantes.
  - DEP-2-B réalisé partiellement : `migration-nuxt4-dep-2-b.md`.
  - RSS et JSON Feed migrés vers `queryCollection(event, 'articles')`.
  - `npm test` OK.
  - Blocage `@nuxtjs/sitemap` v6 traité ensuite dans `DEP-3`.
  - DEP-2-C réalisé : `migration-nuxt4-dep-2-c-pages.md`.
  - Schéma `articles` enrichi dans `content.config.ts` avec les champs frontmatter nécessaires (`date`, `updatedAt`, `tag`, SEO, images, conversion).
  - `zod@3.25.76` ajouté en dépendance directe car le schéma Content l'importe explicitement.
  - Pages et composants principaux migrés vers `queryCollection`, `queryCollectionItemSurroundings` et `path`.
  - RSS, JSON Feed et sitemap revalidés après schéma complet.
  - `npm test`, `npm run generate` et check SEO OK ; routes prerendered : 72.
  - DEP-2-D réalisé : `migration-nuxt4-dep-2-d-search.md`.
  - Recherche `AppSearchInput.vue` migrée vers `queryCollection('articles')`, `LIKE`, `.orWhere(...)`, `.all()` et `path`.
  - `npm test`, `npm run generate` et check SEO OK ; routes prerendered : 72.
  - DEP-2-E audit final réalisé : `migration-nuxt4-dep-2-final-audit.md`.
  - Plus aucune API Content v2 applicative détectée dans `pages/`, `components/`, `composables/`, `layouts/`, `server/`, `utils/`, `scripts/`, `nuxt.config.ts`, `app.vue` et `error.vue`.
  - `utils/getRoutes.js`, utilitaire orphelin Nuxt Content v2 documenté par les audits précédents, supprimé pendant l'audit final.
  - Garde-fou `scripts/check-content-queries.mjs` étendu aux dossiers utilitaires et scripts applicatifs.
  - `npm test`, `npm run generate` et check SEO OK ; routes prerendered : 72.
  - RSS, JSON Feed et sitemap générés ; sitemap : 13 URLs articles + archive `/eco-conception/`.
  - Note hors périmètre DEP-2 : 5 liens Markdown internes sans slash final restent dans un article existant ; pas de changement éditorial dans cet audit.
- [x] **DEP-3** — Vérifier compatibilité `@nuxtjs/sitemap` 6.x avec Nuxt 4 ; mettre à jour vers 7.x si requis
  - DEP-2-B : nécessaire avant validation complète, car `@nuxtjs/sitemap` v6 importe encore `#content/server`.
  - Rapport : `migration-nuxt4-dep-3-sitemap.md`.
  - Version installée : `@nuxtjs/sitemap@8.0.15`.
  - `npm test` OK.
  - `npm run generate` termine avec `.output/public` généré et `/sitemap.xml` présent.
  - Check SEO OK.
  - Routes sitemap vérifiées : 13 URLs articles + archive `/eco-conception/` dans `.output/public/sitemap.xml`.
  - Warnings/erreurs non corrigés dans ce lot : warning `zeroRuntime`, sourcemap `nuxt:module-preload-polyfill`, circular chunk, pages Vue encore en `queryContent`, RSS/JSON Feed bloqués par le champ Content `date` non déclaré.
  - Prochaine étape : `DEP-2-C / Content pages APIs` et schéma Content complet.
  - Les erreurs pages Vue et champ Content `date` ont été traitées ensuite dans `DEP-2-C`.
- [x] **DEP-4** — Vérifier compatibilité `@nuxt/image` ; mettre à jour si nécessaire
  - Rapport : `migration-nuxt4-dep-4-image.md`.
  - Version installée : `@nuxt/image@2.0.0`.
  - Seule dépendance directe modifiée dans `package.json` : `@nuxt/image`.
  - Configuration minimale : `image.provider: 'none'` pour éviter la route IPX, car le projet utilise actuellement des `<img>` natifs et aucun `NuxtImg` / `NuxtPicture`.
  - `quality`, `format: ['webp']`, `screens` et presets existants conservés.
  - `npm test`, `npm run generate` et check SEO OK ; routes prerendered : 72.
  - Pages avec images vérifiées dans `.output/public` : home, portfolio, apps, Greenlight, pages apps ; aucune image locale manquante détectée.
  - `@nuxt/eslint` non migré dans cette étape ; aucun déplacement vers `app/`, aucun changement CSS/design/chunks.
- [x] **DEP-5** — Mettre à jour `@nuxt/eslint` vers 1.x si requis par Nuxt 4
  - Rapport : `migration-nuxt4-dep-5-eslint.md`.
  - Version installée : `@nuxt/eslint@1.15.2`.
  - Seule dépendance directe cible modifiée : `@nuxt/eslint`.
  - Configuration migrée vers `eslint.config.mjs`; ancienne `.eslintrc.cjs` supprimée car incompatible avec l'export ESM de `@nuxt/eslint-config` v1.
  - Script `lint:js` simplifié en `eslint .`.
  - `npm test`, `npm run generate` et check SEO OK ; routes prerendered : 72.
  - `npm run lint:js` OK avec 0 erreur et 101 warnings historiques.
  - `npm run lint` reste bloqué par `lint:prettier` sur des formatages repo-wide historiques et `audit-unused-depcheck.json` non JSON ; aucune correction globale lancée.
  - `eslint-config-prettier`, `eslint-plugin-vue` et `prettier` conservés.
- [x] **NUXT4-FINAL-AUDIT** — Auditer la stabilisation post DEP-1 à DEP-5 avant décision preview/merge
  - Rapport : `migration-nuxt4-final-audit.md`.
  - Versions finales confirmées : Nuxt `4.4.2`, Content `3.13.0`, sitemap `8.0.15`, image `2.0.0`, ESLint `1.15.2`.
  - `npm test`, `npm run generate`, check SEO et `npm run lint:js` validés.
  - Routes prerendered : 72.
  - Décision : branche cohérente pour validation preview ; ne pas merger directement dans `dev` ou `master` sans preview/revue.
  - Déplacement vers `app/` non requis avant preview tant que Nuxt 4 fonctionne avec l'arborescence actuelle.
  - Warnings restants reportés en lots séparés : sitemap `zeroRuntime`, sourcemap, circular chunk, lint Prettier, npm audit.
- [x] **NUXT4-DEV-READINESS** — Décider les correctifs nécessaires avant merge vers `dev`
  - Rapport : `migration-nuxt4-dev-readiness.md`.
  - Décision avant merge `dev` : faire uniquement un lot documentaire minimal pour aligner `AGENTS.md`, `CLAUDE.md` et éventuellement `README.md` avec la stack Nuxt 4 réelle.
  - À reporter après preview : lint Prettier global, `audit-unused-depcheck.json`, audit sécurité npm, liens Markdown sans slash final, warnings ESLint historiques, warnings sourcemap/circular chunk, recherche UI, SCSS-6.
  - À ne pas faire dans la migration Nuxt 4 : déplacement `app/`, refactor CSS/design, `npm audit fix`, correction lint globale ou merge direct vers `master`.
- [x] **FIX-PREVIEW éco-conception** — Réparer les régressions visibles de `/eco-conception/` après Content v3
  - Rapport : `migration-nuxt4-fix-eco-conception-page.md`.
  - Filtres par thème et recherche locale réparés via normalisation locale de `article.tag`.
  - FAQ réparée via lecture Content v3 `body.value`, avec compatibilité `body.children`.
  - `npm test`, `npm run generate`, check SEO et `npm run lint:js` validés ; routes prerendered : 72.
  - Vérification navigateur locale effectuée sur `/eco-conception/` : filtres `Tout`, `Éco-conception`, `WordPress`, `Performance`, recherches avec/sans résultat, FAQ visible.
  - Aucune dépendance modifiée ; aucun merge vers `dev` ou `master`.
- [x] **DEP-6** — Supprimer `"#internal/nuxt/paths": "./nuxt.paths.mjs"` de `package.json` `imports` — override interne Nuxt 3 probablement incompatible avec Nuxt 4
  - Rapport : `migration-nuxt4-dep-6.md`
  - Suppression réalisée avant `DEP-1`.
  - `npm test`, `npm run generate` et check SEO validés.
  - Aucune dépendance modifiée ; `package-lock.json` inchangé.

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

> CONTENT-PREP réalisé le 29 avril 2026 sur `chore/nuxt4-migration`.
> Rapports :
> - `content-prep-query-map.md`
> - `content-prep-v2-v3-mapping.md`
> - `content-prep-content-config-plan.md`
> - `content-prep-migration-order.md`
> - `content-prep-tests-plan.md`
> Aucun changement de dépendance, aucune migration API, aucun déplacement vers `app/`.
>
> CONTENT-DOCS / DEP-2-PREP réalisé le 29 avril 2026 avec documentation officielle Nuxt Content v3.
> Rapport : `migration-nuxt4-content-v3-docs-audit.md`
> Décisions préparatoires :
> - collection cible `articles` en `type: 'page'` ;
> - source cible `{ include: 'articles/**/*.md', prefix: '/eco-conception' }` ;
> - `queryContent()` → `queryCollection()` ;
> - `findSurround()` → `queryCollectionItemSurroundings()` ;
> - `serverQueryContent()` → `queryCollection(event, ...)` pour routes Nitro ;
> - `_path` → `path`.
> Aucun `npm install`, aucun `content.config.ts`, aucune migration API.

- [x] **CONTENT-DOCS** — Auditer la documentation officielle Nuxt Content v3 avant `DEP-2`
  - Rapport : `migration-nuxt4-content-v3-docs-audit.md`
  - Documentation only, aucune validation runtime nécessaire.
  - Points critiques documentés : source de collection, schéma minimal, API server, recherche, RSS/JSON Feed, sitemap, TOC, trailing slashes.

##### 3.3.1 — `queryContent()` → `queryCollection()`

| Fichier                           | Lignes  | Code actuel                                                               | Migration                                                                        |
| --------------------------------- | ------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `pages/index.vue`                 | 430-436 | `queryContent('articles').only([...]).sort({ date: -1 }).limit(2).find()` | `queryCollection('articles').select([...]).order('date', 'DESC').limit(2).all()` |
| `pages/eco-conception/index.vue`  | 651-654 | `queryContent('articles').only([...]).sort({ date: -1 }).find()`          | `queryCollection('articles').select([...]).order('date', 'DESC').all()`          |
| `pages/eco-conception/index.vue`  | 659     | `queryContent('articles', 'faq-eco-conception').findOne()`                | `queryCollection('articles').where('stem', '=', 'faq-eco-conception').first()`   |
| `pages/eco-conception/[slug].vue` | 140     | `queryContent('articles', route.params.slug).findOne()`                   | `queryCollection('articles').where('stem', '=', slug).first()`                   |
| `components/HomeEcoArticles.vue`  | 50-54   | `queryContent('articles').only([...]).sort({ date: -1 }).limit(2).find()` | Idem index.vue                                                                   |

- [x] **CONTENT-1** — Migrer les 5 appels `queryContent()` → `queryCollection()` dans les fichiers ci-dessus
  - DEP-2-C : `pages/index.vue`, `pages/eco-conception/index.vue`, `pages/eco-conception/[slug].vue` et `components/HomeEcoArticles.vue` migrés.
  - DEP-2-D : exception restante `components/AppSearchInput.vue` migrée.
  - DEP-2-E : audit final confirme l'absence de `queryContent()` applicatif.

##### 3.3.2 — `findSurround()` → `queryCollectionItemSurroundings()`

| Fichier                           | Lignes  | Code actuel                                                                                             |
| --------------------------------- | ------- | ------------------------------------------------------------------------------------------------------- |
| `pages/eco-conception/[slug].vue` | 149-152 | `queryContent('articles').only(['title', '_path']).sort({ date: 1 }).findSurround(article.value._path)` |

- [x] **CONTENT-2** — Migrer `findSurround()` → `queryCollectionItemSurroundings()` avec la nouvelle syntaxe
  - DEP-2-C : page article migrée et `ArticleNavigation` adapté à `path`.

##### 3.3.3 — `serverQueryContent()` supprimé

| Fichier                      | Lignes | Code actuel                                                                                                                      |
| ---------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `server/routes/rss.xml.ts`   | 1, 7   | `import { serverQueryContent } from '#content/server'` + `serverQueryContent(event, 'articles').sort({ $numeric: true }).find()` |
| `server/routes/feed.json.ts` | 1, 6   | Idem                                                                                                                             |
| `nuxt.config.ts`             | 265    | `const { serverQueryContent } = await import('#content/server')` dans `sitemap.routes`                                           |

- [x] **CONTENT-3** — Réécrire `rss.xml.ts` sans `serverQueryContent` — utiliser l'API server de Content v3
  - DEP-2-A : blocage generate confirme sur `#content/server`.
  - DEP-2-B : migré vers `queryCollection(event, 'articles')`, `_path` remplacé par `path`, `npm test` OK.
- [x] **CONTENT-4** — Réécrire `feed.json.ts` sans `serverQueryContent`
  - DEP-2-A : blocage generate confirme sur `#content/server`.
  - DEP-2-B : migré vers `queryCollection(event, 'articles')`, `_path` remplacé par `path`, `npm test` OK.
- [x] **CONTENT-5** — Réécrire `sitemap.routes` dans `nuxt.config.ts` sans `serverQueryContent` — ⚠️ vérifier si `@nuxtjs/sitemap` 7.x génère les routes automatiquement depuis Content v3
  - DEP-2-A : blocage generate confirme aussi dans `@nuxtjs/sitemap` v6, qui importe encore `#content/server`.
  - DEP-2-B : import `#content/server` supprimé du projet et routes articles remplacées par `urls: getArticleSitemapRoutes`; blocage restant dans le handler interne `@nuxtjs/sitemap` v6, à traiter en `DEP-3`.
  - DEP-3 : `@nuxtjs/sitemap@8.0.15` installé, handler Content v3 disponible, `/sitemap.xml` généré avec 13 URLs articles + archive.

##### 3.3.4 — `.where()` query syntax refondu

| Fichier                         | Lignes | Code actuel                                                                                       |
| ------------------------------- | ------ | ------------------------------------------------------------------------------------------------- |
| `components/AppSearchInput.vue` | 33-41  | `.where({ $or: [{ title: { $contains: newQuery } }, { description: { $contains: newQuery } }] })` |

Content v3 utilise une syntaxe SQL-like : `.where('title', 'LIKE', '%query%')`. L'opérateur `$or` n'existe plus.

- [x] **CONTENT-6** — Réécrire le search dans `AppSearchInput.vue` avec la nouvelle syntaxe `.where()` ou utiliser `queryCollectionSearchSections()` (remplaçant de `searchContent()`)
  - DEP-2-D : migré vers `queryCollection('articles')`, `.orWhere(...)`, `LIKE`, `.limit(6)` et `.all()`.
  - `queryCollectionSearchSections()` non utilisé : l'ancien comportement cherchait uniquement dans `title` et `description`.
  - Garde-fou Content mis à jour : plus aucune exception applicative `queryContent()`.
  - Note : le composant n'est pas monté dans les pages générées actuelles ; vérification UX interactive à traiter seulement si une page hôte est réintroduite.

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

- [x] **CONTENT-7** — Remplacer `._path` par `.path` dans tous les fichiers listés (7 fichiers, ~12 occurrences)
  - DEP-2-C : usages applicatifs listés remplacés ; les seules occurrences `_path` restantes sont des garde-fous ou historiques documentés dans les scripts.
  - DEP-2-E : audit final confirme l'absence de `_path` dans le code applicatif, hors motif de garde-fou.

##### 3.3.6 — `<ContentRenderer>` — API modifiée

| Fichier                           | Lignes  | Code actuel                                           |
| --------------------------------- | ------- | ----------------------------------------------------- |
| `pages/eco-conception/[slug].vue` | 106-111 | `<ContentRenderer v-if="article" :value="article" />` |

- [x] **CONTENT-8** — Vérifier que `<ContentRenderer :value="article" />` fonctionne toujours avec Content v3 — ⚠️ à tester manuellement, le composant est conservé mais son API peut avoir changé
  - DEP-2-C : article généré vérifié, corps Markdown rendu et tests post-génération OK.

##### 3.3.7 — Configuration `content:` dans `nuxt.config.ts`

```ts
// Configuration actuelle (v2)
content: {
  highlight: { theme: 'dark-plus', preload: [...] },
  markdown: { toc: { depth: 3 }, remarkPlugins: [], rehypePlugins: [] }
}
```

Content v3 utilise un fichier `content.config.ts` séparé pour définir les collections et les sources.

- [x] **CONTENT-9** — Créer `content.config.ts` avec la définition de la collection `articles`
  - Rapport : `migration-nuxt4-dep-2-a.md`
  - Collection minimale `articles` créée en `type: 'page'`.
  - Source : `{ include: 'articles/**/*.md', prefix: '/eco-conception' }`.
  - Schéma custom reporté pour ne pas ajouter de dépendance directe hors `@nuxt/content`.
  - DEP-2-C : schéma enrichi ajouté avec `zod@3.25.76` en dépendance directe.
- [x] **CONTENT-10** — Migrer la config `highlight` et `markdown` vers le nouveau format Content v3
  - Rapport : `migration-nuxt4-dep-2-a.md`
  - Config déplacée vers `content.build.markdown`.
  - `highlight.preload` remplacé par `highlight.langs`.
  - `content.experimental.sqliteConnector: 'native'` ajouté pour éviter `better-sqlite3`.
- [x] **CONTENT-11** — Vérifier que `article.body.toc.links` (utilisé dans `[slug].vue` pour le sommaire) est toujours disponible en v3
  - DEP-2-C : sommaire `Chapitres` vérifié dans la page article générée.

##### 3.3.8 — Composants supprimés

`ContentDoc`, `ContentList`, `ContentNavigation`, `ContentQuery` sont supprimés en v3. **Aucun n'est utilisé dans le projet** → pas d'impact.

##### 3.3.9 — Ordre de tri par défaut

Content v3 trie alphabétiquement par défaut (au lieu de numériquement). Vérifier que les `.sort({ date: -1 })` explicites suffisent.

- [x] **CONTENT-12** — Vérifier l'ordre de tri des articles après migration (les sorts explicites devraient suffire)
  - DEP-2-C : requêtes migrées en `.order('date', 'DESC')`; RSS/JSON Feed vérifiés avec les articles les plus récents en tête.

---

#### 3.4 — Breaking changes `nuxt.config.ts`

> CONFIG-AUDIT Nuxt 4 réalisé le 29 avril 2026 sur `chore/nuxt4-migration`.
> Rapport : `migration-nuxt4-config-audit.md`
> Changement appliqué : `experimental.inlineSSRStyles` → `features.inlineStyles`.
> Options auditées et conservées sans changement : `experimental.defaults.nuxtLink.prefetch`, `router.options`, `routeRules.noScripts`, hooks sitemap.
> Aucun changement de dépendance, aucune migration Content, aucun déplacement vers `app/`.

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

- [x] **CONFIG-1** — Migrer `experimental.inlineSSRStyles` → `features.inlineStyles` et réévaluer la valeur (`false` était choisi pour meilleur cache — le comportement par défaut Nuxt 4 est déjà plus granulaire)
  - Rapport : `migration-nuxt4-config-audit.md`
  - `features.inlineStyles: false` appliqué.
  - `npm test`, `npm run generate` et check SEO validés.

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
  - CONFIG-AUDIT : option conservée, car le schéma local Nuxt 4 la référence encore et `npm run generate` ne signale aucun warning.

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
  - CONFIG-AUDIT : `prefetchLinks` et `linkPrefetchedClass` conservés, aucun warning observé.

##### 3.4.4 — `routeRules.noScripts`

```ts
// Actuel (nuxt.config.ts:117-118)
routeRules: {
  '/': { prerender: true, noScripts: true },
  '/mentions-legales/': { prerender: true, noScripts: true },
}
```

- [ ] **CONFIG-4** — Vérifier que `noScripts: true` est toujours supporté en Nuxt 4 — ⚠️ à vérifier manuellement
  - CONFIG-AUDIT : `routeRules.noScripts` conservé, validation `generate` et check SEO OK.

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
  - CONFIG-AUDIT : hooks présents dans `@nuxtjs/sitemap` 6.1.5 et generate OK ; à revalider pendant `DEP-3`.

##### 3.4.6 — Flags expérimentaux supprimés

Ces flags n'existent plus en Nuxt 4 (valeur fixe) — les supprimer de la config si présents :

- `experimental.treeshakeClientOnly` → toujours `true`
- `experimental.configSchema` → toujours `true`
- `experimental.polyfillVueUseHead` → toujours `false`
- `experimental.respectNoSSRHeader` → toujours `false`

- [ ] **CONFIG-6** — Supprimer les flags expérimentaux obsolètes (aucun n'est actuellement défini → pas d'action, mais vérifier après `compatibilityVersion: 4`)
  - CONFIG-AUDIT : aucun des flags listés n'est présent dans `nuxt.config.ts`.

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
