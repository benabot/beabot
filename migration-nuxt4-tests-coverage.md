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

## Complément du 28 avril 2026 — tests ajoutés

### TEST-1 — utils/seo-url.ts

- Statut : fait
- Fichiers de test :
  - `tests/seo-url.test.mjs`
- Cas couverts :
  - URL canonique racine
  - pages internes avec trailing slash
  - absence de double slash
  - liens déjà normalisés
  - liens internes sans trailing slash
  - liens internes avec query string
  - liens internes avec ancre
  - liens internes avec query string + ancre
  - assets et fichiers `.pdf`, `.xml`, `.json`, `.webp`, `.png`, `.jpg`, `.svg`
  - URLs externes, `mailto:`, `tel:`, hash seul et query seule inchangés
- Limites :
  - tests unitaires purs, sans rendu Nuxt.
  - correction minimale ajoutée : `.xml` et `.json` sont désormais préservés par `normalizeInternalHref`.

### TEST-2 — AppLink.vue

- Statut : fait
- Fichiers de test :
  - `tests/app-link.test.mjs`
- Cas couverts :
  - compilation SFC du composant
  - rendu attendu via `NuxtLink`
  - slot présent
  - attributs transmis via `v-bind="attrs"`
  - liens internes normalisés
  - liens externes, `mailto:`, `tel:` et fichiers statiques inchangés
  - objet route avec `path`, `query` et `hash` conservés
- Limites :
  - pas de montage avec Vue Test Utils, car aucune dépendance de test composant n'existe dans le projet.
  - le test vérifie le contrat de rendu compilé et la logique de normalisation, sans navigateur.

### TEST-3 — Smoke tests SSG pages clés

- Statut : fait
- Fichiers de test :
  - `tests/generated-pages.test.mjs`
  - `tests/helpers/generated-site.mjs`
- Pages couvertes :
  - `/`
  - `/eco-conception/`
  - `/eco-conception/l-eco-conception-web/`
  - `/portfolio/`
  - `/services/`
  - `/contact/`
- Commande :
  - `node --test tests/generated-pages.test.mjs`
- Cas couverts :
  - fichier `index.html` présent
  - `<title>` non vide
  - meta description utile
  - canonical attendu
  - `og:url` attendu
  - absence de `[object Object]`
  - page article avec `<article>`, `<h1>` et liens internes article
- Limites :
  - tests basés sur `.output/public`; ils nécessitent un build statique récent pour refléter l'état courant.

### TEST-4 — RSS et JSON Feed

- Statut : fait
- Fichiers de test :
  - `tests/feeds.test.mjs`
- Cas couverts :
  - `rss.xml` non vide, avec `<rss>`, `<channel>` et `<item>`
  - URLs articles avec trailing slash
  - dates RSS valides
  - échappement XML visible
  - absence de `[object Object]`
  - `feed.json` parsable
  - champs racine JSON Feed attendus
  - items présents, URLs stables, dates valides, tags sous forme de tableau
- Limites :
  - assertions XML textuelles, sans parser XML externe pour éviter une dépendance supplémentaire.

### TEST-5 — Requêtes Content articles

- Statut : fait
- Fichiers de test ou script :
  - `scripts/check-content-queries.mjs`
  - script npm : `npm run test:content`
- Cas couverts :
  - fichiers critiques surveillés : `pages/index.vue`, `pages/eco-conception/index.vue`, `pages/eco-conception/[slug].vue`, `components/HomeEcoArticles.vue`, `components/AppSearchInput.vue`, `server/routes/rss.xml.ts`, `server/routes/feed.json.ts`, `nuxt.config.ts`
  - présence des usages Content v2 critiques : `queryContent`, `serverQueryContent`, `findSurround`, `_path`, `tag`
  - archive `/eco-conception/` générée avec liens articles
  - article généré avec canonical, `<h1>`, contenu `<article>`, tags et navigation associée
- Limites :
  - ce check protège l'état Content v2 actuel. Il ne migre pas et ne valide pas l'API Content v3.
  - les checks générés sont sautés avec un message si `.output/public` n'existe pas encore.

## Validation finale

- `npm test` : succès
  - pré-build : 49 checks passés, 0 warning, 0 erreur
  - `test:content` : `OK Content v2 query checks passed.`
  - `test:node` : 18 tests passés, 0 échec
  - sortie : `migration-nuxt4-tests-final.txt`
- `npm run generate` : succès
  - 100 routes prerendered
  - sortie : `migration-nuxt4-generate-final.txt`
- `SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : succès
  - `OK SEO checks passed.`
  - sortie : `migration-nuxt4-seo-check-final.txt`

## Conclusion

L'Étape 0 est suffisamment couverte sur la branche d'audit `chore/nuxt-4-A` pour poursuivre les étapes suivantes du backlog. La validation demandée sur `dev` reste à rejouer explicitement avant toute branche de migration réelle, comme indiqué dans `TODO.md`.
