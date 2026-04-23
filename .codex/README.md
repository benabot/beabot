# .codex

Dossier de compétences locales pour assistants de code sur le projet **BeAbot**.

## Ordre de lecture recommandé

1. `../AGENTS.md`
2. `skills/quick-start.md`
3. la ou les skills métier adaptées à la tâche

## Skills disponibles

- `skills/eco-conception.md`
- `skills/vue-nuxt.md`
- `skills/design-front.md`
- `skills/planning.md`
- `skills/quick-start.md`
- `skills/playwright.md`

## Templates

- `templates/audit-eco.md`
- `templates/spec-page.md`
- `templates/plan-tache.md`

## Combinaisons recommandées

### Tâche front standard
- `quick-start.md`
- `vue-nuxt.md`
- `eco-conception.md`
- `playwright.md` si la tâche inclut une vérification E2E ou une non-régression ciblée

### Refonte visuelle ou composant UI
- `quick-start.md`
- `design-front.md`
- `vue-nuxt.md`
- `eco-conception.md`
- `playwright.md` si l’interface doit être vérifiée dans un navigateur réel

### Planification d’une évolution
- `quick-start.md`
- `planning.md`

### Audit ou optimisation
- `quick-start.md`
- `eco-conception.md`
- `vue-nuxt.md`
- `playwright.md` pour contrôler les parcours critiques côté navigateur

### Tests E2E ou contrôle de régression légère
- `quick-start.md`
- `playwright.md`
- `vue-nuxt.md`
- `design-front.md` si impact visuel
