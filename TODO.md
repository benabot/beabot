# ✅ TODO - BeAbot Nuxt 3 Optimisation Éco-conception

> **Objectif** : Améliorer les performances éco-conception du site de dev pour dépasser le site de prod

**Projet** : BeAbot - Blog éco-conception web  
**Date création** : 15 décembre 2025  
**Branche active** : `dev` (Nuxt 3)  
**Sites** :
- 🟢 **Production** (Nuxt 2, master) : https://beabot.netlify.app
- 🔵 **Développement** (Nuxt 3, dev) : https://dev-beabot.netlify.app

---

## 📊 CONTEXTE : COMPARAISON PROD vs DEV

### Problématique
Le site de production (Nuxt 2) a de meilleurs résultats éco-index que le site de développement (Nuxt 3), notamment concernant le **nombre de requêtes HTTP**.

### Objectifs d'amélioration
| Métrique | Site Prod (Nuxt 2) | Site Dev (Nuxt 3) | Objectif Dev |
|----------|-------------------|-------------------|--------------|
| Requêtes HTTP | À mesurer | À mesurer | < Prod |
| Poids total | À mesurer | À mesurer | < Prod |
| EcoIndex | À mesurer | A ou B | A |
| DOM Elements | À mesurer | À mesurer | < Prod |

---

## 🔥 PRIORITÉ 1 : Audit et Diagnostic (Jour 1)

### ✅ AUDIT-ECO-01 : Mesurer les métriques actuelles
- [ ] **Site de prod** (https://beabot.netlify.app)
  - [ ] EcoIndex score
  - [ ] Nombre de requêtes HTTP
  - [ ] Poids de la page
  - [ ] DOM size
  - [ ] Lighthouse performance
- [ ] **Site de dev** (https://dev-beabot.netlify.app)
  - [ ] EcoIndex score
  - [ ] Nombre de requêtes HTTP
  - [ ] Poids de la page
  - [ ] DOM size
  - [ ] Lighthouse performance

### ✅ AUDIT-ECO-02 : Identifier les causes des requêtes supplémentaires
- [ ] Analyser le Network tab des DevTools
- [ ] Lister toutes les requêtes HTTP sur page d'accueil
- [ ] Identifier les requêtes inutiles ou dupliquées
- [ ] Comparer assets entre prod et dev

---

## 🟡 PRIORITÉ 2 : Optimisations Éco-conception (Jour 2-3)

### ✅ OPTIM-ECO-01 : Réduire les requêtes HTTP
- [ ] **Audit des fonts**
  - [ ] Vérifier le nombre de fichiers font chargés
  - [ ] Limiter aux poids essentiels (400, 700)
  - [ ] Font-display: swap configuré
- [ ] **Audit des images**
  - [ ] Formats modernes (WebP/AVIF) utilisés
  - [ ] Lazy loading sur toutes les images
  - [ ] Pas d'images dupliquées
- [ ] **Audit du JavaScript**
  - [ ] Code splitting efficace
  - [ ] Tree shaking fonctionnel
  - [ ] Pas de modules inutiles chargés
- [ ] **Audit du CSS**
  - [ ] CSS critique inliné
  - [ ] CSS non critique déféré
  - [ ] Pas de CSS inutilisé

### ✅ OPTIM-ECO-02 : Réduire le poids des pages
- [ ] Compresser les images existantes
- [ ] Minifier HTML/CSS/JS (vérifier config Nitro)
- [ ] Supprimer les dépendances inutilisées
- [ ] Vérifier la taille du bundle JS

### ✅ OPTIM-ECO-03 : Optimiser le DOM
- [ ] Réduire le nombre d'éléments DOM
- [ ] Simplifier la structure HTML
- [ ] Supprimer les wrappers inutiles

---

## 🟢 PRIORITÉ 3 : Améliorations Build/Deploy (Jour 3-4)

### ✅ BUILD-01 : Optimiser la configuration Nuxt
- [ ] Vérifier `nuxt.config.ts` pour optimisations
- [ ] Configurer Nitro pour génération statique optimale
- [ ] Vérifier les presets de compression

### ✅ BUILD-02 : Optimiser Netlify
- [ ] Vérifier les headers de cache
- [ ] Activer Brotli compression
- [ ] Configurer edge functions si nécessaire

### ✅ BUILD-03 : Tests de build
- [ ] `npm run generate` sans erreurs
- [ ] Vérifier taille du dossier `.output`
- [ ] Preview local avant deploy

---

## 📋 HISTORIQUE DES TRAVAUX EFFECTUÉS

### Commits récents sur dev (15 décembre 2025)

| Commit | Description | Impact |
|--------|-------------|--------|
| eb75287 | update netlify deployment fix-5 | Déploiement |
| f7fb230 | chore: optimize assets and restore home visuals | Optimisation assets |
| d6b13d9 | optim img | Optimisation images |
| 66244fb | update netlify deployment fix-4 | Déploiement |
| 084e5c2 | update netlify deployment 3 | Déploiement |
| 49a7b26 | update netlify deployment 2 | Déploiement |
| 69e23e6 | update netlify deployment | Déploiement |
| dcb8edb | feature typo 1 : blog | Typographie blog |
| d8e1b88 | feature home 2 : portfolio | Home portfolio |
| 30d6578 | feature home 1 : blog | Home blog |

### Migration Nuxt 3 (Novembre-Décembre 2025)

#### Phase 1 - Configuration ✅ 100%
- Nuxt 3.14 + Vue 3.5 + Vite
- @nuxt/content v2
- @nuxt/image
- Fonts locales (Montserrat)
- Configuration Netlify

#### Phase 2 - Composants ✅ 100%
- Tous composants migrés vers Composition API
- Renommage selon conventions Vue.js
- Suppression modules obsolètes (lozad, etc.)

#### Phase 3 - Design ✅ 100%
- Police Montserrat
- Animations portfolio
- Transitions Vue 3
- Styles articles

---

## 🔄 WORKFLOW GIT

### Branches
- `master` : Production (Nuxt 2) - NE PAS TOUCHER
- `dev` : Développement (Nuxt 3) - Base de travail
- `docs/project-state-update` : Documentation actuelle
- Créer des branches de feature depuis `dev`

### Convention de commits
```
feat: nouvelle fonctionnalité
fix: correction de bug
optim: optimisation performance/éco
docs: documentation
style: formatage (sans changement de code)
refactor: refactoring
chore: maintenance
```

---

## 📚 RESSOURCES

### Outils d'audit
- [EcoIndex](https://www.ecoindex.fr/)
- [Website Carbon Calculator](https://www.websitecarbon.com/)
- [GreenFrame](https://greenframe.io/)
- [Lighthouse](https://pagespeed.web.dev/)

### Documentation
- [Nuxt 3 Performance](https://nuxt.com/docs/guide/best-practices/performance)
- [RGESN](https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/)
- [115 bonnes pratiques éco-conception](https://collectif.greenit.fr/ecoconception-web/115-bonnes-pratiques-eco-conception_web.html)

---

## 🎯 CRITÈRES DE SUCCÈS

### Éco-conception
- [ ] EcoIndex : Score A
- [ ] Requêtes HTTP : < site de prod
- [ ] Poids page < 500KB
- [ ] CO2/page < 0.5g

### Performance
- [ ] Lighthouse Performance > 95
- [ ] LCP < 1.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1

### Accessibilité
- [ ] Lighthouse Accessibility > 95
- [ ] WAVE : 0 erreurs

---

**📝 Document maintenu par** : Claude Code  
**📅 Dernière MAJ** : 15 décembre 2025
