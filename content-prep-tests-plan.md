# Plan tests — Migration Content v3

Date : 29 avril 2026

## Tests existants utiles

- `scripts/check-content-queries.mjs`
- `tests/feeds.test.mjs`
- `tests/generated-pages.test.mjs`
- `tests/seo-url.test.mjs`
- `tests/app-link.test.mjs`
- `tests/helpers/generated-site.mjs`

## Tests a adapter

### `scripts/check-content-queries.mjs`

Role actuel :
- detecter les usages Content v2 critiques ;
- verifier quelques sorties generees de l'archive et d'un article.

Adaptation future :
- autoriser les usages Content v3 ;
- interdire les usages v2 restants apres migration ;
- verifier absence de `_path` ;
- verifier presence de `queryCollection` et du mecanisme surroundings cible ;
- conserver les checks de sortie generee.

### `tests/feeds.test.mjs`

Verifier :
- RSS parseable au moins textuellement ;
- JSON Feed parseable ;
- URLs trailing slash ;
- dates valides ;
- tags sous forme de tableau ;
- absence de `[object Object]` ;
- ordre des articles si le contrat est date descendant.

### `tests/generated-pages.test.mjs`

Verifier :
- homepage ;
- page archive eco-conception ;
- un article ;
- portfolio ;
- services ;
- contact ;
- article rendu avec `<article>` et `<h1>` ;
- liens internes article avec trailing slash.

### `tests/helpers/generated-site.mjs`

Role actuel :
- lire `.output/public` ;
- centraliser les assertions SEO minimales.

Adaptation future :
- ajouter helpers pour extraire JSON-LD ;
- ajouter helper pour verifier une section TOC si besoin.

## Tests manquants recommandes

- ordre des articles sur homepage et archive ;
- tags et filtres de l'archive ;
- navigation prev/next ;
- recherche article ;
- TOC ;
- JSON-LD Article ;
- JSON-LD FAQ ;
- presence des articles dans sitemap ;
- coherence `tag` frontmatter vers tags RSS/JSON Feed.

## Commandes de validation recommandees

```bash
npm test
npm run generate
NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs
node --test tests/feeds.test.mjs
node --test tests/generated-pages.test.mjs
```
