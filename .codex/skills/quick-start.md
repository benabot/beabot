# Quick start — BeAbot

## Lire d’abord

- `AGENTS.md`
- éventuellement `BRANCHING_STRATEGY.md`
- puis les skills utiles à la tâche

## Ce qu’est BeAbot

- Blog statique + portfolio
- Sujet principal : éco-conception web
- Stack : Nuxt 3, Vue 3, Vite, `@nuxt/content`, Netlify SSG
- Objectifs : sobriété, SEO, accessibilité, lisibilité, maintenabilité

## Commandes utiles

```bash
npm run dev
npm run generate
npm run preview
npm run lint
node scripts/seo-check.mjs
```

## Garde-fous absolus

- Toujours partir de `dev`
- Ne jamais travailler directement sur `master` ni `dev`
- Tester avant merge : au minimum `npm run generate`
- Ne pas ajouter de CDN externes
- Ne pas ajouter de web fonts externes
- Utiliser `AppLink` pour les liens internes
- Respecter les trailing slashes

## Réflexes par défaut

- privilégier le natif avant une dépendance
- privilégier le statique avant le dynamique
- supprimer le superflu avant d’optimiser
- limiter JS, images, requêtes et complexité DOM
- vérifier accessibilité, SEO et cohérence visuelle

## Avant de livrer

- vérifier le rendu mobile
- vérifier focus, contraste, titres, landmarks, alt
- vérifier poids et nombre de requêtes si l’évolution touche le front
- vérifier que la solution reste simple à maintenir
- proposer un commit conventionnel
