# Tests et couverture — prérequis migration Nuxt 4

Date : 28 avril 2026

Branche auditée : `chore/nuxt-4-A`

> Note : le TODO demande une validation sur `dev` avant toute migration réelle. Cette passe documente l'état de la branche d'audit courante et doit être rejouée sur `dev`.

## Commandes exécutées

```bash
npm test 2>&1 | tee migration-nuxt4-tests.txt
```

```bash
NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs 2>&1 | tee migration-nuxt4-seo-check.txt
```

## Résultats

- `npm test` : succès
  - 49 checks passés
  - 0 warning
  - 0 erreur
- `seo-check.mjs` : succès
  - `OK SEO checks passed.`

## Couverture existante

- `scripts/pre-build-check.js`
  - Vérifie la présence des fichiers de configuration.
  - Vérifie les dépendances Nuxt/Vue principales.
  - Vérifie les dossiers critiques.
  - Vérifie les pages, composants, composables, contenus, assets et fichiers publics essentiels.
  - Vérifie la configuration Netlify.
- `scripts/seo-check.mjs`
  - Vérifie la présence de `sitemap.xml` et `robots.txt` dans `.output/public`.
  - Vérifie les trailing slashes dans le sitemap.
  - Vérifie la ligne sitemap du `robots.txt`.
  - En mode `SEO_CHECK_HTML=1`, vérifie canonical et `og:url` sur un échantillon de pages générées.

## Manques critiques avant migration Nuxt 4

### TEST-1 — `utils/seo-url.ts`

- Type : tests unitaires
- Couvrir :
  - `absoluteUrl`
  - `canonicalUrl`
  - `withTrailingSlash`
  - `normalizeInternalHref`
- Risque : régression SEO silencieuse sur canonical, trailing slash, query strings, ancres et assets statiques.

### TEST-2 — `components/AppLink.vue`

- Type : test composant ou test de rendu minimal
- Couvrir :
  - liens internes normalisés
  - liens externes inchangés
  - ancres inchangées
  - query strings conservées
- Risque : rupture du maillage interne ou duplication d'URLs sans trailing slash.

### TEST-3 — Pages clés SSG

- Type : smoke tests post-génération
- Pages :
  - `/`
  - `/eco-conception/`
  - un article `/eco-conception/[slug]/`
  - `/portfolio/`
  - `/services/`
  - `/contact/`
- Risque : migration Nuxt 4 app directory ou Content v3 cassant une page clé sans être détectée par les checks actuels.

### TEST-4 — Feeds `rss.xml` et `feed.json`

- Type : tests de routes serveur ou validation de sortie générée
- Couvrir :
  - génération sans erreur
  - URLs avec trailing slash
  - dates valides
  - échappement XML/JSON
- Risque : endpoints serveur directement concernés par `serverQueryContent` et les changements Content v3.

### TEST-5 — Requêtes Content articles

- Type : tests d'intégration légers ou checks post-build
- Couvrir :
  - liste articles
  - page article
  - navigation précédent/suivant
  - filtres tags
- Risque : APIs `queryContent`, `serverQueryContent` et `_path` déjà identifiées comme cassantes dans le plan Nuxt 4.

## Décision

Aucun test nouveau n'a été ajouté pendant cette passe pour éviter d'introduire une dépendance ou une architecture de test hors périmètre. Les manques critiques sont listés dans `TODO.md` sous `TEST-1` à `TEST-5`.
