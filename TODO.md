# ✅ TODO - BeAbot Nuxt 3 Optimisation Éco-conception

> **Objectif** : Améliorer les performances éco-conception et préparer la migration vers beabot.fr

**Projet** : BeAbot - Blog éco-conception web
**Date création** : 15 décembre 2025
**Dernière MAJ** : 17 décembre 2025
**Branche active** : `dev` (Nuxt 3)
**Sites** :

- 🟢 **Production** (Nuxt 3, master) : https://beabot.netlify.app
- 🔵 **Développement** (Nuxt 3, dev) : https://dev-beabot.netlify.app

---

## 📊 CONTEXTE ACTUEL

### Statut (17 décembre 2025)

**Migration Nuxt 3 terminée** - Les deux environnements sont synchronisés sur Nuxt 3.

| Métrique | Site Prod | Site Dev | Statut |
|----------|-----------|----------|--------|
| **Framework** | Nuxt 3.14 | Nuxt 3.14 | ✅ Sync |
| **Poids HTML** | ~28 KB | ~28 KB | ✅ |
| **Requêtes HTTP** | ~16 | ~16 | 🔶 À optimiser |
| **Fonts** | System stack | System stack | ✅ |
| **EcoIndex** | B-C | B-C | 🔶 Objectif A |

---

## 🎯 PHASE 9 : Optimisations Éco-conception

### ✅ TÂCHES TERMINÉES

- [x] **ECO-9-01** : Supprimer script EcoIndex externe
- [x] **ECO-9-07** : Attributs width/height images
- [x] **ECO-9-19** : Simplifier structure HTML (-6 éléments DOM sur homepage)

---

## 🚀 NOUVELLES PRIORITÉS : Réduction Requêtes HTTP & DOM

> **Objectifs** : Requêtes < 12, DOM plus léger, EcoIndex A

### PRIORITÉ 1 - Réduire les requêtes HTTP ⚡

#### ECO-9-13 : Lazy Loading des composants décoratifs
- [ ] Créer branche `optim/eco-9-13-lazy-components`
- [ ] Préfixer `<Oeuf>` par `<LazyOeuf>` dans index.vue (économise les chunks non visibles)
- [ ] Préfixer `<HomeEcoArticles>` et `<HomePortfolioLatest>` par `Lazy`
- [ ] Vérifier que les composants sont bien code-splittés
- **Impact** : -2 à -4 requêtes HTTP initiales
- **Référence** : [Nuxt Lazy Components](https://nuxt.com/docs/guide/directory-structure/components#dynamic-imports)

#### ECO-9-14 : Server Components pour éléments statiques
- [ ] Créer branche `optim/eco-9-14-server-components`
- [ ] Créer `components/server/` pour les composants sans interactivité
- [ ] Migrer `Oeuf.vue` → `server/Oeuf.server.vue` (SVG décoratif pur)
- [ ] Migrer `TheLogo.vue` → `server/TheLogo.server.vue`
- **Impact** : -JS hydratation, DOM plus léger côté client
- **Référence** : [Nuxt Server Components](https://nuxt.com/docs/guide/directory-structure/components#server-components)

#### ECO-9-15 : NuxtIsland pour zones non-interactives
- [ ] Créer branche `optim/eco-9-15-nuxt-island`
- [ ] Wrapper les sections décoratives avec `<NuxtIsland>`
- [ ] Identifier les zones sans événements JS
- **Impact** : Skip hydratation = moins de JS exécuté
- **Référence** : [Nuxt Islands](https://nuxt.com/docs/api/components/nuxt-island)

#### ECO-9-16 : Regrouper les CSS en un seul fichier
- [ ] Créer branche `optim/eco-9-16-css-bundle`
- [ ] Ajouter `extractCSS: true` dans nuxt.config.ts si pas déjà fait
- [ ] Vérifier `cssCodeSplit: false` pour fusionner les CSS
- [ ] Tester l'impact sur le cache
- **Impact** : -1 à -3 requêtes CSS
- **Note** : Trade-off cache vs requêtes

#### ECO-9-17 : Inliner le CSS critique
- [ ] Créer branche `optim/eco-9-17-critical-css`
- [ ] Tester `experimental.inlineSSRStyles: true` dans nuxt.config.ts
- [ ] Évaluer l'impact sur le poids HTML vs requêtes
- **Impact** : -1 requête CSS (mais HTML plus lourd)
- **Référence** : Nuxt experimental features

### PRIORITÉ 2 - Réduire la taille du DOM 🔶

#### ECO-9-18 : Remplacer SVG décoratifs par CSS
- [ ] Créer branche `optim/eco-9-18-css-decorations`
- [ ] Remplacer les `<Oeuf>` décoratifs par des `::before`/`::after` avec `background-image`
- [ ] Utiliser des data URI SVG pour les formes simples dans le CSS
- [ ] Conserver uniquement les SVG interactifs comme éléments DOM
- **Impact** : -10 à -20 éléments DOM sur homepage
- **Référence** : GreenIT #5 (limiter le DOM)

#### ✅ ECO-9-19 : Simplifier la structure HTML

- [x] Créer branche `optim/eco-9-19-html-cleanup`
- [x] Auditer les div wrappers inutiles
- [x] Fusionner divs imbriquées (4 divs impact-chiffre)
- [x] Supprimer wrappers SVG inutiles (2 divs fleche)
- **Impact** : -6 éléments DOM sur homepage
- **Référence** : Vue 3 multi-root components
- **Commit** : `6c9d54c`

#### ECO-9-20 : Optimiser le composant Oeuf
- [ ] Créer branche `optim/eco-9-20-oeuf-optim`
- [ ] Créer une version CSS-only pour les décorations (classe `.oeuf-deco`)
- [ ] Garder le composant Vue uniquement pour les cas interactifs
- [ ] Réduire le SVG path si possible (SVGO)
- **Impact** : Moins de composants Vue instanciés
- **Référence** : Vue.js Performance Best Practices

### PRIORITÉ 3 - Optimisations avancées 🟢

#### ECO-9-21 : Delay Hydration
- [ ] Créer branche `optim/eco-9-21-delay-hydration`
- [ ] Installer `nuxt-delay-hydration`
- [ ] Configurer le mode `init` ou `mount`
- [ ] Tester le Time to Interactive
- **Impact** : TTI amélioré, moins de JS bloquant
- **Référence** : [nuxt-delay-hydration](https://github.com/harlan-zw/nuxt-delay-hydration)

#### ECO-9-22 : Virtualisation si listes longues
- [ ] Évaluer si nécessaire (articles, portfolio)
- [ ] Si oui, implémenter vue-virtual-scroller
- **Impact** : DOM constant quelle que soit la liste
- **Note** : Probablement pas nécessaire pour ce projet

---

## 🌐 PHASE 10 : Migration domaine beabot.fr

> **À effectuer quand le domaine sera acheté/configuré**

### Fichiers à modifier pour beabot.fr

| Fichier | Modification |
|---------|--------------|
| `netlify.toml` | NUXT_PUBLIC_SITE_URL → beabot.fr |
| `pages/index.vue` | canonical → beabot.fr |
| `server/routes/rss.xml.ts` | siteUrl → beabot.fr |
| `server/routes/feed.json.ts` | siteUrl → beabot.fr |

### Étapes

1. [ ] Acheter/configurer DNS beabot.fr
2. [ ] Créer branche `chore/domain-beabot-fr`
3. [ ] Configurer domaine dans Netlify
4. [ ] Modifier fichiers listés ci-dessus
5. [ ] Ajouter redirect netlify.toml :
```toml
[[redirects]]
  from = "https://beabot.netlify.app/*"
  to = "https://beabot.fr/:splat"
  status = 301
  force = true
```
6. [ ] Tester en preview
7. [ ] Merger et déployer

---

## 🎨 PHASE 11 : Homepage - Graphisme & Contenu

> **À travailler après optimisations**

### Tâches prévues

- [ ] Revoir la hiérarchie visuelle
- [ ] Optimiser les textes pour le SEO
- [ ] Améliorer les CTAs
- [ ] Ajouter du contenu rédactionnel
- [ ] Créer branche `feature/homepage-redesign`

---

## 📈 MÉTRIQUES CIBLES

### Éco-conception
- [ ] EcoIndex : Score **A**
- [ ] Requêtes HTTP : **< 12**
- [ ] Poids page : **< 150KB**
- [ ] CO2/page : **< 0.3g**
- [ ] Éléments DOM : **< 800**

### Performance
- [ ] Lighthouse Performance : **> 95**
- [ ] LCP : **< 1.5s**
- [ ] FID : **< 100ms**
- [ ] CLS : **< 0.05**

### Accessibilité
- [ ] Lighthouse Accessibility : **> 95**
- [ ] WAVE : **0 erreurs**

---

## 📚 RESSOURCES TECHNIQUES

### Solutions Nuxt 3 pour réduire les requêtes
1. **Lazy Components** : Préfixe `Lazy` pour charger à la demande
2. **Server Components** : Suffixe `.server.vue` pour skip hydratation
3. **NuxtIsland** : Composant wrapper pour zones statiques
4. **Manual Chunks** : Regrouper vendor intelligemment
5. **CSS extraction** : `extractCSS: true` ou `cssCodeSplit: false`

### Solutions pour réduire le DOM
1. **CSS pseudo-elements** : `::before`/`::after` au lieu de vraies balises
2. **Vue 3 fragments** : `<template>` sans wrapper
3. **Server Components** : Pas d'hydratation = DOM client léger
4. **Conditional rendering** : `v-if` plutôt que `v-show` pour éléments lourds

### Référentiels
- [GreenIT 115 bonnes pratiques v5](https://rweb.greenit.fr)
- [RGESN 78 critères](https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/)
- [Nuxt Performance](https://nuxt.com/docs/getting-started/deployment#optimizing-performance)
- [Vue Performance](https://vuejs.org/guide/best-practices/performance.html)

---

## 📋 HISTORIQUE DES PHASES

| Phase | Description | Statut |
|-------|-------------|--------|
| 1-4 | Migration Nuxt 3 | ✅ Complété |
| 5 | Finalisation (cache, 404, footer) | ✅ Complété |
| 6 | Bug fixes production | ✅ Complété |
| 7 | Netlify build image | ✅ Complété |
| 8 | Tests et validation | ✅ Complété |
| **9** | **Optimisations éco-conception** | 🔄 **En cours** |
| 10 | Migration domaine beabot.fr | ⏳ En attente |
| 11 | Homepage redesign | ⏳ En attente |

---

**📝 Maintenu par** : Claude Code
**📅 Dernière MAJ** : 17 décembre 2025
**🎯 Phase actuelle** : Phase 9 - Réduction requêtes HTTP & DOM
