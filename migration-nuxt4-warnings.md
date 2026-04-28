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
