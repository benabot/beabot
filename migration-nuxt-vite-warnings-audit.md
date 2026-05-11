# Audit warnings Nuxt / Vite restants

Date : 11 mai 2026  
Branche : `docs/nuxt-vite-warnings-audit`  
Type : diagnostic documentaire uniquement

## Objectif

Documenter les warnings Nuxt / Vite encore observés après les chantiers Nuxt 4, SEO, CSS et dépendances, sans modifier `nuxt.config.ts`, sans changer la configuration Vite et sans optimiser les chunks.

## Sources

- `AGENTS.md`
- `BRANCHING_STRATEGY.md`
- `PROJECT_STATE.md`
- `TODO.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-final-audit.md`
- `migration-css-native-audit.md`
- `migration-unused-dependencies-audit.md`
- `docs/ressources/ressources.md`
- Documentation Vite 7 :
  - https://v7.vite.dev/config/build-options
  - https://v7.vite.dev/guide/build
- Documentation Rollup :
  - https://github.com/rollup/rollup/blob/master/docs/configuration-options/index.md

Les ressources Medium listées dans `docs/ressources/ressources.md` n'ont pas été utilisées comme consignes techniques pour ce lot.

## Commande de reproduction

```bash
npm run generate 2>&1 | tee /tmp/beabot-nuxt-vite-warnings-generate.log
```

## Contexte observé

`npm run generate` du 11 mai 2026 :

- Nuxt : `4.4.2`
- Nitro / Nitropack : `2.13.4`
- Vite côté builder Nuxt : `7.3.2`
- Vite direct déclaré : `^6.0.1`, installé `6.4.2`
- Vue : `3.5.33`
- Mode : génération statique, Nitro preset `static`
- Routes prerendered : 68
- Modules transformés côté client : 356
- Modules transformés côté SSR : 275

La commande exécute aussi `pregenerate`, donc `npm test` a été lancé avant la génération.

## Warnings observés

### Warning sitemap

Message :

```text
[@nuxtjs/sitemap] No dynamic sources detected. Consider enabling zeroRuntime to reduce server bundle size.
```

Statut : observé, non bloquant, hors périmètre principal de ce lot.

Décision : documenter seulement. Ne pas modifier la configuration sitemap ici, car le sitemap généré contient les 24 URLs publiques attendues et exclut toujours `/404/`.

### Warning sourcemap Nuxt / Vite

Message :

```text
[plugin nuxt:module-preload-polyfill] Sourcemap is likely to be incorrect: a plugin (nuxt:module-preload-polyfill) was used to transform files, but didn't generate a sourcemap for the transformation. Consult the plugin documentation for help
```

Statut : observé.

Contexte :

- le warning apparaît pendant le build client Vite ;
- Vite 7 injecte par défaut un module preload polyfill ;
- le warning indique qu'une transformation a été faite sans sourcemap associée ;
- la génération continue et se termine correctement.

Hypothèse probable :

Le plugin Nuxt `nuxt:module-preload-polyfill` transforme une partie du code lié au module preload sans fournir de sourcemap complète à Vite/Rollup. L'impact attendu concerne surtout la précision des sourcemaps et donc le confort de debugging dans les devtools, pas le runtime utilisateur.

Niveau de gravité : faible.

Impact constaté :

- build client OK ;
- build serveur OK ;
- génération statique OK ;
- HTML généré ;
- sitemap, RSS et JSON Feed générés ;
- check SEO OK ;
- CSS et JS générés normalement.

Décision :

Ne pas traiter maintenant. Ouvrir un suivi seulement si :

- une stacktrace de production devient difficile à diagnostiquer à cause des sourcemaps ;
- une mise à jour Nuxt/Vite corrige explicitement ce warning ;
- la preview Netlify montre une erreur runtime corrélée.

## Warning circular chunk historique

Warning connu à documenter :

```text
Circular chunk: vendor-nuxt -> vendor-libs -> vendor-nuxt
```

Statut actuel : non reproduit sur `docs/nuxt-vite-warnings-audit`.

Constats du 11 mai 2026 :

- `npm run generate` ne remonte pas ce warning ;
- `nuxt.config.ts` ne contient plus de bloc `vite.build.rollupOptions.output.manualChunks` ;
- aucun chunk nommé `vendor-nuxt` ou `vendor-libs` n'est listé dans la sortie actuelle ;
- le rapport `docs/migration/nuxt4/reports/migration-nuxt4-fix-netlify-runtime.md` indique que le bloc `manualChunks` custom avait été supprimé pour corriger le cycle et une TDZ runtime Netlify.

Hypothèse probable :

Le warning était lié à l'ancien découpage manuel des vendors. Ce découpage forçait des internals Nuxt et des dépendances applicatives dans des chunks `vendor-*`, ce qui pouvait créer un cycle de chargement entre chunks. Depuis la suppression du `manualChunks` custom, Vite/Rollup reprend la composition des chunks et le warning n'est plus observé.

Niveau de gravité historique : moyen.

Risque potentiel si cela réapparaît :

- ordre d'initialisation fragile entre chunks ;
- erreur runtime possible après minification ou sur hébergement statique ;
- optimisation de cache trompeuse si elle dégrade la sûreté du chargement.

Décision :

Ne pas optimiser les chunks dans ce lot. Le warning n'est plus reproduit et le site génère correctement. Toute nouvelle stratégie de chunking doit passer par un chantier dédié avec mesures avant/après et validation preview.

## Artefacts générés observés

Après génération :

| Mesure | Valeur |
|---|---:|
| Routes prerendered | 68 |
| Fichiers HTML publics | 29 |
| Fichiers `index.html` publics | 26 |
| URLs sitemap | 24 |
| `/404/` dans sitemap | non |
| Items RSS | 13 |
| Items JSON Feed | 13 |
| Fichiers CSS Nuxt | 18 |
| Total CSS | 171 523 octets |
| Hash CSS | `ba0d818a9f0c3dbbda99661146aad5625e9822d64c57ba4a538079d331fd8e15` |
| Fichiers JS Nuxt | 51 |
| Total JS Nuxt observé | 871 923 octets |

Plus gros chunks JS observés :

| Chunk | Taille |
|---|---:|
| `A3UayTgB.js` | 206 838 octets |
| `BCCSL-MY.js` | 196 235 octets |
| `sqlite3-worker1-bundler-friendly-Ds-6LPzH.js` | 193 572 octets |
| `DAMAgrnA.js` | 44 994 octets |
| `B7UaEFo5.js` | 38 442 octets |

Ces mesures sont uniquement observées. Aucun changement de chunking, CSS ou configuration de build n'a été effectué.

## Croisement performance / éco-conception

Décisions retenues :

- ne pas optimiser sans mesure ;
- ne pas réintroduire de `manualChunks` pour chercher un gain théorique ;
- conserver un build statique fiable comme priorité ;
- suivre le poids CSS/JS, le nombre de chunks, les warnings et Lighthouse en preview ;
- éviter les refactors de build tant qu'aucune régression utilisateur n'est observée.

Cette approche est cohérente avec les garde-fous projet : stabilité SSG, sobriété, absence de dépendances inutiles et changements atomiques.

## Futur chantier possible

Si une mesure réelle le justifie après preview Netlify :

- branche possible : `perf/vite-chunk-audit`
- alternative documentaire : `docs/build-warnings-followup`

Périmètre conseillé :

- comparer les chunks avant/après sur une branche isolée ;
- mesurer Lighthouse, poids transféré, nombre de requêtes et erreurs runtime ;
- ne pas modifier simultanément CSS, Content, SEO ou dépendances ;
- tester preview Netlify avant toute décision de merge.

## Validations exécutées

- `npm run generate` : OK, 68 routes prerendered.
- `npm test` : OK, 49 pre-build checks, garde-fou Content et 23 tests Node.
- Contrôle warnings : sourcemap `nuxt:module-preload-polyfill` observé ; circular chunk `vendor-nuxt -> vendor-libs -> vendor-nuxt` non observé.
- `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : OK.
- `node scripts/check-scss-explicit-imports.mjs` : OK, `TOTAL_DEPENDANCES_IMPLICITES=0`.
- Contrôle sorties : HTML, sitemap, RSS et JSON Feed générés.
- Contrôle sitemap : 24 URLs, pas de `/404/`.
- Contrôle feeds : RSS 13 items, JSON Feed 13 items.
- Contrôle assets : 18 fichiers CSS, 51 fichiers JS observés sans modification.
- Contrôle fichiers modifiés : aucun fichier build/config (`nuxt.config.ts`, Vite, package manifests) modifié.

## Risques restants

- Le warning sourcemap peut encore gêner le debugging source-map, mais aucun impact runtime n'est constaté localement.
- Le warning circular chunk doit rester surveillé si un futur lot touche au chunking Vite/Rollup.
- Le warning sitemap `zeroRuntime` reste une opportunité de réduction serveur éventuelle, à traiter séparément si cela devient prioritaire.

## Décision finale

Validation documentaire : les warnings restants ne bloquent pas la génération statique ni les sorties publiques. Aucun changement de configuration Nuxt/Vite n'est justifié dans ce lot.
