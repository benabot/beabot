# NUXT4-DEV-READINESS — Décision correctifs avant merge dev

Date : 10 mai 2026

## Objectif

Décider quels points hors périmètre déjà documentés doivent être traités avant un merge de `chore/nuxt4-migration` vers `dev`, et lesquels peuvent attendre la preview ou des lots séparés.

Ce rapport ne réalise aucun correctif applicatif.

## État de départ

- Branche : `chore/nuxt4-migration`
- Dernier commit lu : `185dee2 chore: auditer migration Nuxt 4 finale`
- Working tree avant audit : propre
- Nuxt : `4.4.2`
- Content : `3.13.0`
- Sitemap : `8.0.15`
- Image : `2.0.0`
- ESLint Nuxt : `1.15.2`

Validations connues :

- `npm test` : OK
- `npm run generate` : OK
- check SEO : OK
- `npm run lint:js` : OK avec 101 warnings historiques
- routes prerendered : 72

## Critères de blocage avant merge dev

Un point doit être traité avant merge vers `dev` s'il :

- casse `npm test` ;
- casse `npm run generate` ;
- casse le check SEO ;
- casse le rendu public attendu ;
- rend les agents dangereux car la documentation de stack est trop obsolète ;
- rend le rollback difficile ;
- crée une incohérence visible dans la preview.

## À faire avant merge dev

### Documentation stack minimale agents

Fichiers concernés :

- `AGENTS.md`
- `CLAUDE.md`
- éventuellement `README.md`

Constat :

- `AGENTS.md` et `CLAUDE.md` indiquent encore Nuxt 3, Content v2 et sitemap v6 dans la stack.
- `README.md` indique encore les anciennes versions des modules majeurs.
- `.codex/skills/vue-nuxt.md` est déjà orienté Nuxt 4.

Justification :

- ce n'est pas bloquant runtime ;
- en revanche, `AGENTS.md` et `CLAUDE.md` guident directement les agents ;
- une stack trop obsolète peut provoquer de mauvaises décisions après merge `dev`, notamment réintroduire des patterns Content v2 ou croire que sitemap v6 est encore en place.

Décision :

- faire avant merge `dev` un lot documentaire minimal, sans refactor :
  - mettre à jour la stack actuelle ;
  - conserver l'historique Nuxt 3 comme historique ;
  - préciser que `chore/nuxt4-migration` reste à valider en preview ;
  - ne pas réécrire toute la documentation projet.

Commit recommandé :

- `docs: aligner documentation agents Nuxt 4`

## Peut attendre après preview

### Lint Prettier global

Constat :

- `npm run lint:js` passe.
- `npm run lint` reste bloqué par `lint:prettier` sur de nombreux formatages historiques.

Justification :

- ne casse pas `npm test`, `npm run generate`, ni le check SEO ;
- correction globale risquée et bruyante avant preview ;
- pourrait rendre le rollback plus difficile à relire.

Décision :

- reporter après preview dans un lot dédié.

### `audit-unused-depcheck.json` non JSON

Constat :

- `lint:prettier` échoue notamment parce que `audit-unused-depcheck.json` contient du texte de sortie npm et pas du JSON.

Justification :

- ne casse pas les validations Nuxt 4 ;
- correction utile, mais liée au chantier lint/formatage, pas au merge preview.

Décision :

- reporter avec le lot lint Prettier ou audit fichiers.

### Audit sécurité npm

Constat :

- `npm audit --audit-level=moderate` signale 11 vulnérabilités.
- `npm audit fix` n'a pas été lancé.

Justification :

- important, mais peut modifier l'arbre de dépendances au-delà du périmètre Nuxt 4 ;
- ne bloque pas la génération statique actuelle ;
- doit être traité avec analyse de lockfile et validations complètes.

Décision :

- reporter après preview dans un lot sécurité dédié.

### Liens Markdown internes sans slash final

Constat :

- 5 liens internes Markdown sans slash final restent documentés.

Justification :

- le check SEO ne bloque pas ;
- correction éditoriale explicitement hors périmètre des lots précédents ;
- faible risque pour la preview.

Décision :

- reporter après preview dans un lot URL hygiene.

### `DIR-* / app/`

Constat :

- Nuxt 4 fonctionne avec l'arborescence actuelle.
- `npm test`, `npm run generate`, check SEO et `lint:js` passent.

Justification :

- déplacement massif et risqué ;
- aucun blocage réel ne l'impose avant preview ;
- l'ouvrir avant merge `dev` augmenterait fortement le risque.

Décision :

- ne pas faire avant merge `dev`.
- ouvrir seulement si une incompatibilité réelle apparaît en preview ou dans un futur lot dédié.

### Warnings ESLint historiques

Constat :

- `npm run lint:js` passe avec 101 warnings.

Justification :

- non bloquant ;
- correction globale hors périmètre ;
- n'affecte pas le rendu preview.

Décision :

- reporter avec un lot lint dédié.

### Warnings build sourcemap / circular chunk / sitemap zeroRuntime

Constat :

- sourcemap `nuxt:module-preload-polyfill` ;
- circular chunk `vendor-nuxt -> vendor-libs -> vendor-nuxt` ;
- sitemap `zeroRuntime`.

Justification :

- non bloquants ;
- déjà documentés ;
- optimisation chunks ou sitemap runtime hors périmètre ;
- `npm run generate` passe.

Décision :

- reporter après preview, uniquement si mesure ou besoin concret.

### Recherche UI / `AppSearchInput.vue`

Constat :

- le composant a été migré vers Content v3 ;
- il est documenté comme composant potentiellement orphelin côté UI.

Justification :

- ne bloque pas le build ;
- nécessite une décision produit/UX, pas une stabilisation Nuxt 4.

Décision :

- reporter après preview.

### SCSS-6

Constat :

- SCSS reste utilisé et validé.

Justification :

- suppression complète de SCSS serait un chantier de refactor CSS.

Décision :

- ne pas traiter avant merge `dev`.

## À ne pas faire dans la migration Nuxt 4

- Correction Prettier globale sans lot dédié.
- Correction ESLint globale avec `eslint --fix`.
- `npm audit fix`.
- Optimisation manuelle des chunks sans mesure.
- Déplacement vers `app/` sans incompatibilité réelle.
- Changement éditorial large.
- Refactor CSS/design.
- Merge vers `dev` ou `master` depuis ce prompt.

## Décision avant merge dev

Avant merge vers `dev`, faire uniquement :

1. un lot documentaire minimal pour aligner `AGENTS.md`, `CLAUDE.md` et éventuellement `README.md` sur la stack Nuxt 4 réelle ;
2. relancer ensuite `npm test`, `npm run generate`, check SEO et `npm run lint:js`.

Tous les autres points peuvent attendre la preview ou des lots post-preview.

## Checklist finale avant merge dev

- [ ] Documentation agents minimale alignée Nuxt 4.
- [ ] `npm test` OK.
- [ ] `npm run generate` OK.
- [ ] `NUXT_PUBLIC_SITE_URL=https://beabot.fr node scripts/seo-check.mjs` OK.
- [ ] `npm run lint:js` OK.
- [ ] `git status --short` propre.
- [ ] Revue humaine du diff final.
- [ ] Merge vers `dev` réalisé manuellement par Benoît, pas par Codex dans ce prompt.
- [ ] Preview Netlify contrôlée après merge `dev`.

## Prochaine commande Git recommandée

Après le lot documentaire minimal et validations :

```bash
git checkout dev
git merge chore/nuxt4-migration --no-ff -m "chore: merge Nuxt 4 migration"
git push origin dev
```

Ne pas merger vers `master` avant validation de la preview `dev`.
