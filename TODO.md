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

### ✅ Problématique résolue (Phase 1)
Le site de production (Nuxt 2) avait de meilleurs résultats éco-index que le site de développement (Nuxt 3), notamment concernant le poids HTML (66 KB vs 28 KB).

**APRÈS PHASE 1** : Le site dev a maintenant un HTML aussi léger que le prod (28.7 KB) et **moins de requêtes HTTP** (16 vs ~23).

### Résultats Phase 1 (15 décembre 2025)
| Métrique | Site Prod (Nuxt 2) | Site Dev AVANT | Site Dev APRÈS | Statut |
|----------|-------------------|----------------|----------------|--------|
| **Poids HTML** | 28.5 KB | 66 KB | **28.7 KB** | ✅ **Objectif atteint** |
| **Requêtes HTTP** | ~23 (+ Typekit) | ~16 | **~16** | ✅ **Dev meilleur** |
| **CSS inline** | 0 | 8 blocs | **0** | ✅ **Objectif atteint** |
| **Fonts externes** | Typekit (5-7 req) | 0 | **0 (system)** | ✅ **Dev meilleur** |
| **EcoIndex** | À mesurer | À mesurer | **À tester** | ⏳ Phase 2 |

---

## ✅ PRIORITÉ 1 : Audit et Diagnostic - COMPLÉTÉ

### ✅ AUDIT-ECO-01 : Mesurer les métriques actuelles - COMPLÉTÉ
- [x] **Site de prod** (https://beabot.netlify.app)
  - [x] Nombre de requêtes HTTP : ~23 (avec Typekit)
  - [x] Poids HTML : 28.5 KB
  - [x] CSS inline : 0, CSS externe : 3 + Typekit
  - [x] Fonts : Typekit externe (5-7 requêtes)
- [x] **Site de dev** (https://dev-beabot.netlify.app)
  - [x] Nombre de requêtes HTTP : 16 (après Phase 1)
  - [x] Poids HTML : 28.7 KB (après Phase 1, était 66 KB)
  - [x] CSS inline : 0 (après Phase 1)
  - [x] Fonts : System fonts (0 requête)

### ✅ AUDIT-ECO-02 : Identifier les causes - COMPLÉTÉ
- [x] Analyser le Network tab des DevTools
- [x] Lister toutes les requêtes HTTP
- [x] Identifier que le problème était le CSS inline (8 blocs, 25KB)
- [x] Identifier que les fonts Typekit du prod génèrent plus de requêtes
- [x] **Rapport complet** : `AUDITS/ECO_AUDIT_2025-12.md`

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

## ✅ PHASE 2 : Optimisations JS/Images - COMPLÉTÉ

### Objectifs Phase 2
- [x] Optimiser les images (WebP quality 75, preset portfolio)
- [x] Réduire le nombre de chunks JS (63 → 16, -75%)
- [x] Configuration Terser minification
- [x] Manual chunking intelligent (vendor-vue, vendor-nuxt, vendor-content, vendor-libs)
- [ ] Tester EcoIndex sur site déployé (Phase 3)
- [ ] Mesurer Lighthouse en production (Phase 3)

### Résultats Phase 2
| Métrique | Avant | Après | Amélioration |
|----------|-------|-------|--------------|
| **JS Chunks** | 63 fichiers | **16 fichiers** | **-75%** 🎉 |
| **HTML Size** | 28.7 KB | **28 KB** | Maintenu ✅ |
| **Image Quality** | 80 | **75** | -6.25% ✅ |
| **Minification** | Default | **Terser** | Optimisé ✅ |

### Branche
- **Branche mergée** : `optim/eco-phase-2` → `dev` ✅

---

## 🚀 PHASE 3 : Optimisations avancées (En cours)

### Objectifs Phase 3
- [ ] Compression manuelle des images PNG lourdes
- [ ] Optimisation du Content Security Policy
- [ ] Préchargement des ressources critiques
- [ ] Optimisation du prefetching
- [ ] Tests EcoIndex et Lighthouse
- [ ] Documentation finale

### Branche
- **Branche de travail** : `optim/eco-phase-3`
- **Basée sur** : `dev` (après merge de `optim/eco-phase-2`)

---

**📝 Document maintenu par** : Claude Code
**📅 Dernière MAJ** : 15 décembre 2025
**🔄 Phase actuelle** : Phase 2
