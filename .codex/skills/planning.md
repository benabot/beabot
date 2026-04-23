# Skill — Planification de tâche

## But

Transformer une demande en plan d’exécution court, testable et compatible avec le workflow Git du projet.

## Méthode

### 1. Cadrer
- objectif métier
- pages ou composants concernés
- contraintes SEO, accessibilité, éco-conception
- dépendances éventuelles

### 2. Découper
- contenu / structure
- logique / données
- styles / responsive
- SEO / accessibilité
- tests / validation

### 3. Définir la branche

Format recommandé :

```bash
git checkout dev
git pull origin dev
git checkout -b <type>/<description>
```

Exemples :
- `optim/reduce-homepage-js`
- `feature/add-eco-audit-page`
- `docs/codex-skills`

### 4. Définir les critères d’acceptation
- rendu conforme
- pas de régression SEO
- pas de régression accessibilité
- build statique OK
- solution maintenable

### 5. Prévoir les tests
- `npm run lint`
- `npm run generate`
- test responsive
- vérification manuelle des liens, titres, focus, images

## Format de restitution recommandé

```md
## Objectif
...

## Fichiers impactés
...

## Plan
1. ...
2. ...
3. ...

## Critères d’acceptation
- ...

## Tests
- ...

## Commit
feat|fix|optim|docs: ...
```

## Réflexe important

Si une demande grossit, proposer un découpage en petites étapes mergeables plutôt qu’un gros chantier diffus.
