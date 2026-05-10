# CONFIG-AUDIT Nuxt 4

Date : 29 avril 2026

## Objectif

Auditer la configuration Nuxt 4 apres `DEP-1`, sans migration fonctionnelle lourde.

## Contexte

- Branche : `chore/nuxt4-migration`
- Nuxt root : `4.4.2`
- Content v2 non migre.
- Aucun deplacement vers `app/`.
- `@nuxt/content`, `@nuxt/image`, `@nuxtjs/sitemap` et `@nuxt/eslint` non migres dans cette etape.

## Audit `nuxt.config.ts`

| Point audite | Etat | Decision |
|---|---|---|
| `experimental.inlineSSRStyles` | present avant audit | remplace par `features.inlineStyles: false` |
| `features.inlineStyles` | option Nuxt 4 confirmee dans le schema local ; fallback depuis `experimental.inlineSSRStyles` conserve | applique |
| `experimental.defaults.nuxtLink.prefetch` | present dans la config et toujours reference dans le schema local Nuxt 4 | garde sans changement |
| `router.options.prefetchLinks` | present, aucun warning `generate` | garde sans changement |
| `router.options.linkPrefetchedClass` | present, aucun warning `generate` | garde sans changement |
| `routeRules.noScripts` | present sur `/` et `/mentions-legales/`; `features.noScripts` et usage granulaire par routeRules documentes dans le schema local | garde sans changement |
| hooks sitemap `sitemap:resolved` / `sitemap:output` | hooks presents dans `@nuxtjs/sitemap` 6.1.5 | garde sans changement ; a reauditer pendant `DEP-3` |
| flags experimentaux obsoletes | aucun des flags listes dans `TODO.md` n'est present dans `nuxt.config.ts` | aucune action |
| manual chunks | warning circular chunk observe | documente uniquement ; pas d'optimisation dans cette etape |

## Modification effectuee

- `nuxt.config.ts` :
  - suppression de `experimental.inlineSSRStyles: false` ;
  - ajout de `features.inlineStyles: false`.

## Incertitudes documentees

- `experimental.defaults.nuxtLink.prefetch` reste sous `experimental`. Le schema local Nuxt 4 le reference encore, donc aucune migration speculative n'a ete faite.
- `router.options.prefetchLinks` et `router.options.linkPrefetchedClass` ne generent pas de warning, mais restent a surveiller si Nuxt change ces options dans une version ulterieure.
- Les hooks sitemap fonctionnent avec le generate actuel, mais leur compatibilite doit etre revalidee pendant `DEP-3` si `@nuxtjs/sitemap` est mis a jour.
- Le warning circular chunk est non bloquant et n'a pas ete optimise dans `CONFIG-AUDIT`.

## Traces d'audit

- `config-audit-nuxt4-config-usages.txt`
- `config-audit-nuxt4-schema-evidence.txt`
- `config-audit-nuxt4-sitemap-hooks-evidence.txt`
- `config-audit-nuxt4-generate-summary.txt`

## Validation

- `npm test` : OK.
- `npm run generate` : OK.
- Check SEO : OK.
- Routes prerendered : 100.

Warnings non bloquants observes pendant `npm run generate` :

- `[plugin nuxt:module-preload-polyfill] Sourcemap is likely to be incorrect`
- `Circular chunk: vendor-nuxt -> vendor-libs -> vendor-nuxt`

## Fichiers modifies

- `nuxt.config.ts`
- `TODO.md`
- `PROJECT_STATE.md`

## Fichiers non modifies

- `package.json`
- `package-lock.json`
- APIs Content
- structure `app/`
- configuration sitemap/image/eslint

## Decision

- `CONFIG-AUDIT Nuxt 4` : fait.
- `CONFIG-1` : fait.
- `CONFIG-2` a `CONFIG-6` : audites et documentes, sans changement opportuniste.
- Prochaine etape recommandee : consulter la documentation officielle Content v3 puis traiter `DEP-2` / `CONTENT-*` en lots dedies.
