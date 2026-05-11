# Audit dépendances suspectes restantes

Date : 11 mai 2026  
Branche : `chore/audit-unused-dependencies`  
Type : audit et suppression minimale prouvée

## Objectif

Vérifier les dépendances restantes signalées comme suspectes après les audits Nuxt 4 et CSS natif, sans lancer `npm install`, sans lancer `npm update` et sans ajouter d'outil d'audit.

## Sources

- `AGENTS.md`
- `BRANCHING_STRATEGY.md`
- `PROJECT_STATE.md`
- `TODO.md`
- `docs/migration/nuxt4/reports/migration-nuxt4-unused-files-audit.md`
- `migration-css-native-audit.md`
- Documentation Vite 7 :
  - https://v7.vite.dev/guide/features
  - https://v7.vite.dev/config/shared-options

## Commandes d'audit

```bash
rg -n "gray-matter" . --glob '!node_modules/**' --glob '!.git/**' --glob '!.output/**'
rg -n "sass-loader" . --glob '!node_modules/**' --glob '!.git/**' --glob '!.output/**'
rg -n "eslint-config-prettier|eslint-plugin-vue|prettier" . --glob '!node_modules/**' --glob '!.git/**' --glob '!.output/**'
find . \( -path './node_modules' -o -path './.git' -o -path './.output' \) -prune -o \( -name '*.scss' -o -name '*.vue' \) -print | sort | xargs grep -n "lang=\"scss\"\|lang='scss'" || true
npm ls gray-matter sass-loader eslint-config-prettier eslint-plugin-vue prettier
```

## Décisions

| Dépendance | Décision | Preuve |
|---|---|---|
| `gray-matter` | Supprimée de `package.json` et `package-lock.json` | Plus aucun import, require ou appel applicatif. Les seules références hors documentation étaient `package.json` et `package-lock.json`. Le lock ne montrait pas d'usage indirect par Nuxt Content, Nuxt ou Vite. |
| `sass-loader` | Supprimée de `package.json` et `package-lock.json` | Aucun usage projet, aucun fichier config Webpack/Rspack. La documentation Vite indique que les préprocesseurs CSS sont supportés si le paquet préprocesseur est installé ; `sass` est conservé. L'entrée lock de `sass-loader` déclare des peers Webpack/Rspack, non utilisés par ce projet Nuxt/Vite. |
| `sass` | Conservée | Le projet contient encore 8 fichiers `.scss` et 28 blocs Vue `lang="scss"`. |
| `eslint-config-prettier` | Conservée | Déjà conservée dans l'audit ESLint Nuxt 4. La supprimer serait un changement de stack lint hors périmètre, sans validation dédiée. |
| `eslint-plugin-vue` | Conservée | `@nuxt/eslint-config` installe sa propre version, mais le projet déclare encore une dépendance directe et des règles Vue dans `eslint.config.mjs`. Suppression reportée à un audit ESLint dédié si souhaité. |
| `prettier` | Conservée | Utilisée explicitement par `lint:prettier`, `lint` et `lintfix` dans `package.json`. |

## Diff package-lock

Le diff `package-lock.json` est limité à :

- retrait des déclarations racine `gray-matter` et `sass-loader` ;
- retrait de `node_modules/gray-matter` ;
- retrait des dépendances uniquement liées à `gray-matter` : `gray-matter/node_modules/argparse`, `gray-matter/node_modules/js-yaml`, `esprima`, `extend-shallow`, `is-extendable`, `kind-of`, `section-matter`, `sprintf-js`, `strip-bom-string` ;
- retrait de `node_modules/sass-loader` ;
- retrait de `neo-async`, uniquement lié à `sass-loader`.

Aucune mise à jour de version n'a été faite.

## Note sur `node_modules`

Après suppression des manifests, `npm ls` peut encore afficher `gray-matter` et `sass-loader` comme `extraneous` dans le `node_modules` local existant. C'est attendu : aucun `npm install`, `npm update` ni `npm prune` n'a été lancé dans ce lot. La source de vérité du dépôt reste `package.json` et `package-lock.json`.

## Validations exécutées

- `npm test` : OK, 49 pre-build checks, garde-fou Content et 23 tests Node.
- `npm run generate` : OK, 68 routes prerendered.
- `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : OK.
- `node scripts/check-scss-explicit-imports.mjs` : OK, `TOTAL_DEPENDANCES_IMPLICITES=0`.
- Contrôle ciblé génération : build Nuxt 4 OK, SCSS compilé, sitemap à 24 URLs sans `/404/`, RSS à 13 items, JSON Feed à 13 items, 27 fichiers HTML publics contrôlés.
- Contrôle package : `package.json` et `package-lock.json` restent du JSON valide ; aucune référence résiduelle à `gray-matter`, `sass-loader` ou leurs dépendances strictement associées dans les manifests.

## Risques restants

- Le `node_modules` local reste plus large que les manifests tant qu'aucun install/prune n'est lancé. Ce n'est pas un risque repo, mais `npm ls` affiche encore `gray-matter` et `sass-loader` comme `extraneous` dans ce workspace.
- `eslint-config-prettier` et `eslint-plugin-vue` restent conservés par prudence ; un audit ESLint séparé pourrait vérifier une simplification plus tard.
