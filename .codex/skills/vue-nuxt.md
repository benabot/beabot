# Skill — Vue.js / Nuxt

## Cible

Projet Nuxt 3 en SSG, maintenable, lisible, rapide et sobre.

## Principes Vue 3

- utiliser la Composition API avec sobriété
- garder les composants petits et explicites
- remonter la complexité inutilement partagée seulement si nécessaire
- éviter les watchers coûteux quand un `computed` suffit
- limiter la logique impérative dispersée
- nettoyer les effets de bord

## Principes Nuxt 3

- préférer SSG / contenu statique quand possible
- utiliser les capacités Nuxt natives avant d’ajouter un module
- garder une séparation claire pages / composants / composables / data / utils
- éviter l’hydratation là où elle n’est pas nécessaire
- utiliser le lazy loading de composants avec discernement

## SEO et structure

- conserver les trailing slashes
- utiliser `AppLink` pour les liens internes
- préserver canonical, Open Graph, sitemap et JSON-LD
- ne pas casser la structure des titres
- garder une hiérarchie de contenu claire

## Performance

- éviter les libs front volumineuses
- surveiller le coût d’hydratation
- réduire les effets client-only
- privilégier CSS aux animations JS
- découper le code seulement quand cela apporte un gain réel

## Accessibilité

- utiliser les éléments HTML adaptés
- boutons pour actions, liens pour navigation
- vérifier états focus et navigation clavier
- fournir noms accessibles, alt, aria seulement si nécessaire
- éviter les composants qui dégradent la lisibilité ou l’ordre de tabulation

## Patterns privilégiés sur BeAbot

- composants simples, orientés contenu
- données structurées dans `data/`
- utilitaires ciblés dans `utils/`
- styles cohérents avec le design system existant
- priorité au rendu statique et à la lecture du contenu

## Anti-patterns

- composant monolithique difficile à relire
- dépendance npm pour un besoin trivial
- animation client lourde
- duplication de logique entre pages
- surcharge de props mal nommées
