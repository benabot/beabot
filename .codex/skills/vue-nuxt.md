# Skill — Vue.js / Nuxt 4

## Cible

Projet Nuxt 4 en SSG / prerendering, maintenable, lisible, rapide et sobre.

Objectif prioritaire sur BeAbot : produire un site statique, SEO propre, accessible, durable, avec le minimum de JavaScript client nécessaire.

## Principes Vue 3

- utiliser la Composition API avec sobriété
- garder les composants petits, explicites et orientés contenu
- remonter la complexité partagée seulement si elle est réellement réutilisée
- éviter les watchers coûteux quand un `computed` suffit
- limiter la logique impérative dispersée dans les templates
- nettoyer les effets de bord (`watch`, listeners, timers, observers)
- préférer des props claires et peu nombreuses à des composants trop configurables
- ne pas muter directement les objets issus de `useAsyncData` sans raison explicite

## Principes Nuxt 4

- préférer SSG / prerendering pour les pages publiques et éditoriales
- utiliser les capacités Nuxt natives avant d’ajouter un module ou une dépendance
- respecter la structure Nuxt 4 : `app/` pour l’interface, `server/` pour les endpoints, `content/` et `public/` à la racine si le projet les conserve ainsi
- garder une séparation claire `app/pages/` / `app/components/` / `app/composables/` / `app/utils/` / `data/`
- vérifier les imports `~/` après tout déplacement vers `app/`
- éviter l’hydratation là où elle n’est pas nécessaire
- utiliser les composants `.server.vue`, `ClientOnly` et le lazy loading avec discernement, pas par réflexe
- conserver `routeRules` uniquement quand leur effet est vérifié : `prerender`, `noScripts`, cache, redirects
- ne pas modifier les options expérimentales ou de compatibilité par spéculation
- documenter toute option Nuxt 4 incertaine avant de la changer

## Nuxt Content et données

- ne pas mélanger migration Nuxt et migration Content dans un même lot si ce n’est pas indispensable
- avec Content v2 : conserver `queryContent`, `serverQueryContent`, `_path` tant que Content v3 n’est pas migré
- avec Content v3 : utiliser les collections déclarées, `queryCollection`, `path`, et l’API serveur compatible v3
- vérifier les effets sur : listes d’articles, page article, précédent / suivant, recherche, RSS, JSON Feed et sitemap
- garder les données non éditoriales structurées dans `data/` quand elles ne relèvent pas de Content

## SEO et structure

- conserver les trailing slashes selon la convention du projet
- utiliser `AppLink` pour les liens internes
- préserver canonical, Open Graph, Twitter Card, sitemap, robots.txt et JSON-LD
- vérifier les changements de `<head>` après migration Nuxt / Unhead
- ne pas casser la structure des titres : un H1 clair, hiérarchie H2/H3 lisible
- garder une hiérarchie de contenu claire, indexable sans JavaScript client
- tester les routes clés après génération statique : `/`, `/eco-conception/`, un article, `/portfolio/`, `/services/`, `/contact/`

## Performance et sobriété

- éviter les libs front volumineuses et les modules non indispensables
- surveiller le coût d’hydratation, surtout sur la home et les articles
- réduire les effets client-only et les scripts inutiles
- privilégier HTML sémantique et CSS natif aux animations JavaScript
- découper le code seulement quand cela apporte un gain mesurable
- conserver une stratégie CSS cohérente avec le cache et le poids HTML
- mesurer avant / après : `npm run generate`, poids CSS / JS, routes prerendered, check SEO
- ne pas optimiser les chunks ou le prefetch sans preuve et sans validation

## Accessibilité

- utiliser les éléments HTML adaptés
- boutons pour actions, liens pour navigation
- vérifier états focus et navigation clavier
- fournir noms accessibles, `alt`, `aria` seulement quand nécessaire
- éviter les composants qui dégradent la lisibilité ou l’ordre de tabulation
- préserver le contenu lisible sans interaction complexe

## Nuxt UI et skills externes

- ne pas ajouter Nuxt UI à BeAbot sans besoin explicite : Tailwind, Reka UI et le design system Nuxt UI changeraient fortement la base du projet
- si un agent doit travailler avec Nuxt UI, utiliser le skill officiel Nuxt UI plutôt que réinventer ses conventions
- considérer les skills comme des fichiers de contexte structurés pour agents : ils doivent rester courts, actionnables, et chargés seulement quand utiles
- ne pas importer des patterns Nuxt UI dans BeAbot si le projet n’utilise pas Nuxt UI

## Patterns privilégiés sur BeAbot

- composants simples, orientés contenu
- pages statiques et contenu pré-rendu dès que possible
- données structurées dans `data/`
- utilitaires ciblés dans `utils/`
- styles cohérents avec le design system existant
- system fonts, pas de web font externe
- priorité au rendu statique, à la lecture du contenu et au SEO durable
- changements chirurgicaux, documentés dans `TODO.md`, `PROJECT_STATE.md` et les rapports de migration

## Anti-patterns

- composant monolithique difficile à relire
- dépendance npm pour un besoin trivial
- animation client lourde ou décorative
- duplication de logique entre pages
- surcharge de props mal nommées
- migration Nuxt, Content, sitemap, image et ESLint dans un même commit
- déplacement massif vers `app/` sans validation intermédiaire
- changement de configuration Nuxt 4 sans mesure ni rapport
- optimisation de bundle fondée sur les noms hashés des chunks
