# Warnings migration Nuxt 4 — compatibilityVersion 4

Date : 27 avril 2026

## Commande exécutée

```bash
npm run generate 2>&1 | tee migration-nuxt4-warnings.txt
```

## Résultat

Succès.

Le build statique aboutit avec `future.compatibilityVersion: 4`.

## Warnings et erreurs capturés

### WARN-NPM-USER-CONFIG-1

- Fichier : configuration npm utilisateur (hors dépôt), sortie capturée dans `migration-nuxt4-warnings.txt`
- Ligne : `1`
- Message exact :
  ```text
  npm warn Unknown user config "python". This will stop working in the next major version of npm. See `npm help npmrc` for supported config options.
  ```
- Correspondance TODO.md :
  - → NEW : à ajouter dans TODO.md

### WARN-NPM-ENV-CONFIG

- Fichier : configuration npm environnement (hors dépôt), sortie capturée dans `migration-nuxt4-warnings.txt`
- Ligne : `6`
- Message exact :
  ```text
  npm warn Unknown env config "python". This will stop working in the next major version of npm. See `npm help npmrc` for supported config options.
  ```
- Correspondance TODO.md :
  - → NEW : à ajouter dans TODO.md

### WARN-NPM-USER-CONFIG-2

- Fichier : configuration npm utilisateur (hors dépôt), sortie capturée dans `migration-nuxt4-warnings.txt`
- Ligne : `7`
- Message exact :
  ```text
  npm warn Unknown user config "python". This will stop working in the next major version of npm. See `npm help npmrc` for supported config options.
  ```
- Correspondance TODO.md :
  - → NEW : à ajouter dans TODO.md

## Codemod Nuxt 4

codemod non disponible.

Sortie capturée :

```text
npm warn Unknown user config "python". This will stop working in the next major version of npm. See `npm help npmrc` for supported config options.
npm warn exec The following package was not found and will be installed: codemod@0.18.7
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated rimraf@2.6.3: Rimraf versions prior to v4 are no longer supported
npm warn deprecated prebuild-install@7.1.3: No longer maintained. Please contact the author of the relevant native addon; alternatives are available.
npm warn deprecated node-domexception@1.0.0: Use your platform's native DOMException instead
npm warn deprecated glob@7.2.3: Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me
npm warn deprecated glob@10.5.0: Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me
- Fetching "nuxt/4/migration-recipe"...
✔ Successfully downloaded "nuxt/4/migration-recipe" from the registry.
? Press Enter to run the selected codemods in order. You can deselect anything
you don’t want. (Press <space> to select, <a> to toggle all, <i> to invert
selection, and <enter> to proceed)
❯◉ nuxt/4/absolute-watch-path
 ◉ nuxt/4/default-data-error-value
 ◉ nuxt/4/deprecated-dedupe-value
 ◉ nuxt/4/file-structure
 ◉ nuxt/4/shallow-function-reactivity
 ◉ nuxt/4/template-compilation-changes
node:internal/readline/interface:564
      throw new ERR_USE_AFTER_CLOSE('readline');
      ^

Error [ERR_USE_AFTER_CLOSE]: readline was closed
    at Interface.pause (node:internal/readline/interface:564:13)
    at F5e.close (/Users/benoitabot/.npm/_npx/d321780917ce39d6/node_modules/codemod/dist/index.cjs:861:28731)
    at F5e.onForceClose (/Users/benoitabot/.npm/_npx/d321780917ce39d6/node_modules/codemod/dist/index.cjs:861:28422)
    at process.emit (node:events:521:24) {
  code: 'ERR_USE_AFTER_CLOSE'
}

Node.js v25.9.0
```
