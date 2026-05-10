# CONTENT-PREP — Preparation migration @nuxt/content v2 -> v3

Date : 29 avril 2026

## Objectif

Cartographier les usages actuels de Content v2 avant toute migration reelle.

## Resume

- Fichiers impactes : 12 fichiers applicatifs/tests identifies dans `content-prep-impacted-files.txt`
- Usages `queryContent()` : 7 appels applicatifs
- Usages `serverQueryContent()` : 6 occurrences applicatives import/appel inclus
- Usages `findSurround()` : 1 occurrence applicative
- Occurrences `_path` : 32 occurrences applicatives, 39 occurrences avec le script de garde-fou
- Usage `ContentRenderer` : 1 usage template, plus commentaires/styles associes
- Config `content:` dans `nuxt.config.ts` : presente, avec `highlight` et `markdown.toc.depth`
- Tests concernes : `scripts/check-content-queries.mjs`, `tests/feeds.test.mjs`, `tests/generated-pages.test.mjs`, `tests/seo-url.test.mjs`, `tests/app-link.test.mjs`

## Fichiers les plus risques

| Fichier | Risque | Raison |
|---|---|---|
| `pages/eco-conception/[slug].vue` | eleve | article, TOC, prev/next, JSON-LD, FAQPage, ContentRenderer |
| `server/routes/rss.xml.ts` | eleve | `serverQueryContent` supprime, `_path` pour slug, XML a preserver |
| `server/routes/feed.json.ts` | eleve | `serverQueryContent` supprime, `_path` pour slug, dates/tags feed |
| `nuxt.config.ts` | eleve | `content:` v2 et `sitemap.routes` via `serverQueryContent` |
| `components/AppSearchInput.vue` | eleve | `.where({ $or })` et `$contains` |
| `pages/eco-conception/index.vue` | moyen/eleve | archive, filtres, recherche locale, FAQ article specifique |
| `components/ArticleNavigation.vue` | moyen | consomme `_path` sans requete directe |

## Decisions

- Pas de mise a jour de dependance.
- Pas de migration API dans cette etape.
- Pas de creation `content.config.ts`.
- Pas de deplacement vers `app/`.
- Pas de web search ; les points Content v3 sont marques comme a verifier sur documentation officielle avant implementation.

## Ordre recommande

Lien :
- `content-prep-migration-order.md`

Resume :
1. Configuration Content v3.
2. Listes articles.
3. Page article et navigation.
4. Recherche.
5. Feeds et sitemap.
6. Nettoyage `_path`.
7. Tests et garde-fous.

## Validation

- `npm test` : succes, 49 pre-build checks, Content v2 query checks OK, 18 tests Node OK.
- `npm run generate` : succes, Nuxt 3.20.2 en compatibility version 4, 100 routes prerendered.
- check SEO : succes, `OK SEO checks passed.`

Sorties completes :
- `content-prep-baseline-tests.txt`
- `content-prep-baseline-generate.txt`
- `content-prep-baseline-seo-check.txt`

## Artefacts produits

- `content-prep-query-content-usages.txt`
- `content-prep-server-query-content-usages.txt`
- `content-prep-find-surround-usages.txt`
- `content-prep-path-usages.txt`
- `content-prep-content-renderer-usages.txt`
- `content-prep-content-components-usages.txt`
- `content-prep-content-config-usages.txt`
- `content-prep-content-api-usages.txt`
- `content-prep-articles-files.txt`
- `content-prep-frontmatter-sample.txt`
- `content-prep-impacted-files.txt`
- `content-prep-query-map.md`
- `content-prep-v2-v3-mapping.md`
- `content-prep-content-config-plan.md`
- `content-prep-migration-order.md`
- `content-prep-tests-plan.md`

## Conclusion

- CONTENT-PREP :
  - fait
- Prochaine etape recommandee :
  - consulter la documentation officielle Content v3 puis ouvrir le Lot 1 Content v3.
