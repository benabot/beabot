# ✅ TODO - BeAbot Nuxt 3 Optimisation Éco-conception

> **Objectif** : Améliorer les performances éco-conception et le référencement

**Projet** : BeAbot - Blog éco-conception web
**Date création** : 15 décembre 2025
**Dernière MAJ** : 21 décembre 2025
**Branche active** : `dev` (Nuxt 3)
**Sites** :

- 🟢 **Production** (Nuxt 3, master) : <https://beabot.fr>
- 🔵 **Développement** (Nuxt 3, dev) : <https://dev-beabot.netlify.app>

---

## 📊 CONTEXTE ACTUEL

### Statut (21 décembre 2025)

**Phase 12 SEO terminée** - Prêt pour merge sur master.
- ✅ Filtres /eco-conception enrichis (SEO, Images, Performance)
- ✅ Chapo frontmatter pour le chapeau d’article

| Métrique | Valeur | Statut |
|----------|--------|--------|
| **Framework** | Nuxt 3.14 | ✅ |
| **URLs** | Trailing slash normalisé | ✅ |
| **Sitemap** | beabot.fr + slash | ✅ |
| **Canonicals** | Cohérents | ✅ |
| **EcoIndex** | B-C | 🔶 Objectif A |

---

## ✅ PHASES TERMINÉES

### Phase 12 : Optimisation SEO ✅

> **Terminée le 21 décembre 2025**

- [x] **SEO-12-01** : Normaliser les URLs (trailing slash) sur tout le site
- [x] **SEO-12-02** : Corriger les canonicals incohérents
- [x] **SEO-12-05** : Aligner og:url sur les canonicals
- [x] **SEO-12-06** : JSON-LD BlogPosting vérifiés
- [x] **SEO-12-07** : Sitemap.xml corrigé (domaine + trailing slash)
- [x] **SEO-12-08** : Frontmatter SEO + updatedAt sur articles
- [x] **SEO-12-09** : Script de migration frontmatter (seo + updatedAt)
- [x] **SEO-12-10** : JSON-LD FAQPage sur article FAQ
- [x] **CONTENT-12-01** : Chapo frontmatter pour le chapeau d’article
- [x] **HOME-12-01** : Cartouche FAQ homepage + CTA vers FAQ
- [x] Utilitaire `utils/seo-url.ts` créé
- [x] Script `scripts/seo-check.mjs` pour validation
- [x] Script `scripts/check-routes.mjs` pour debug

### Phase 11 : Homepage & Contact Redesign ✅

> **Terminée le 20 décembre 2025**

- [x] HP-11-01 : Nouveau tagline Hero avec CTAs
- [x] HP-11-02 : Accroche reformulée en positif
- [x] HP-11-03 : Chiffres marquants section Impacts
- [x] HP-11-04 : Piliers avec exemples concrets
- [x] HP-11-06 : Grid impacts 2×2
- [x] HP-11-09 : Accordéon piliers mobile
- [x] CT-11-01 : Titre et accroche engageants
- [x] CT-11-02 : Labels humanisés + opt-in
- [x] CT-11-03 : Layout 2 colonnes desktop
- [x] CT-11-04 : Focus states accessibles
- [x] CT-11-05 : Email + LinkedIn alternatifs

### Phase 10 : Migration domaine beabot.fr ✅

> **Terminée le 18 décembre 2025**

- [x] DNS beabot.fr configuré
- [x] Domaine configuré dans Netlify
- [x] URLs mises à jour (netlify.toml, canonical, RSS, feeds)
- [x] Redirects en place

### Phase 9 : Optimisations Éco-conception ✅

> **Terminée le 17 décembre 2025**

- [x] ECO-9-01 : Supprimer script EcoIndex externe
- [x] ECO-9-07 : Attributs width/height images
- [x] ECO-9-13 : Lazy Loading composants décoratifs
- [x] ECO-9-15 : NuxtIsland pour zones non-interactives
- [x] ECO-9-17 : CSS critique inline
- [x] ECO-9-18 : SVG décoratifs → CSS
- [x] ECO-9-19 : Simplifier structure HTML
- [x] ECO-9-20 : Optimiser composant Oeuf
- [x] ECO-9-21 : Delay Hydration

---

## 🔄 PHASE 14 : Refonte Portfolio — Objectif Emploi

> **Objectif** : Transformer la page portfolio en outil de conversion pour la recherche d'emploi
> **Détails** : Voir `PORTFOLIO_REDESIGN.md`

### P0 — Structure et contenu

- [x] **PF-14-01** : Créer section Hero avec intro personnelle + CTAs (CV, Contact)
- [ ] **PF-14-02** : Ajouter section compétences techniques (6 blocs)
- [x] **PF-14-03** : Enrichir les données projets (contexte, rôle, résultats)
- [x] **PF-14-04** : Créer CTA final avec liens CV + Contact

### P1 — Design et UX

- [x] **PF-14-05** : Refondre les filtres (boutons visuels, compteur)
- [x] **PF-14-06** : Améliorer les cartes projet (contexte, rôle, métriques)
- [x] **PF-14-07** : Ajouter bloc résultats sur projets éco-conçus
- [x] **PF-14-16** : Ajuster UI portfolio (boutons compacts, palette adoucie, espacement cartes)
- [ ] **PF-14-08** : Responsive mobile amélioré

### P2 — SEO et accessibilité

- [ ] **PF-14-09** : Meta description orientée recrutement
- [ ] **PF-14-10** : JSON-LD Person ou ProfilePage
- [x] **PF-14-11** : Attributs ARIA sur filtres interactifs
- [ ] **PF-14-12** : Focus states sur tous les éléments interactifs

### P3 — Données structurées

- [x] **PF-14-13** : Externaliser données projets dans `data/portfolio.ts`
- [x] **PF-14-14** : Intégrer les données dans portfolio.vue
- [x] **PF-14-15** : Composant ProjectCard enrichi

---

## 🔄 PHASE 13 : SEO Avancé & Contenu

> **Objectif** : Améliorer le référencement par le contenu et les données structurées

### P0 — Google Search Console

- [ ] **SEO-13-01** : Vérifier la propriété beabot.fr dans Search Console
- [ ] **SEO-13-02** : Soumettre le sitemap manuellement
- [ ] **SEO-13-03** : Demander l'indexation des pages principales
- [ ] **SEO-13-04** : Analyser les Core Web Vitals après 2 semaines

### P1 — Metas manquantes

- [ ] **SEO-13-05** : Ajouter og:url sur toutes les pages
- [ ] **SEO-13-06** : Meta descriptions personnalisées (contact, portfolio)
- [ ] **SEO-13-07** : JSON-LD Organization sur homepage

### P2 — Contenu SEO

- [ ] **SEO-13-08** : Rédiger article "Comment réduire le poids d'un site web"
- [ ] **SEO-13-09** : Rédiger article "Audit éco-conception : par où commencer"
- [ ] **SEO-13-10** : Rédiger article "Les outils de mesure d'impact environnemental"

### P3 — Backlinks & Visibilité

- [ ] **SEO-13-11** : Soumettre sur annuaires éco-conception (GreenIT, ADEME)
- [ ] **SEO-13-12** : Contacter des blogs tech pour guest posts

---

## ⏸️ OPTIMISATIONS FUTURES (backlog)

### Performance

- [ ] HP-11-05 : Réduire hauteur Hero mobile (max-height: 70vh)
- [ ] HP-11-07 : Indicateur de progression scroll (CSS pur)
- [ ] HP-11-08 : Remplacer SVG Oeuf décoratifs par CSS

### Éco-conception

- [ ] Requêtes HTTP : Objectif < 12 (actuellement ~16)
- [ ] Éléments DOM : Objectif < 800
- [ ] EcoIndex : Objectif A (actuellement B-C)

---

## 📊 MÉTRIQUES CIBLES

### Éco-conception

| Métrique | Actuel | Cible |
|----------|--------|-------|
| EcoIndex | B-C | **A** |
| Requêtes HTTP | ~16 | **< 12** |
| Poids page | ~150KB | **< 100KB** |
| CO2/page | ~0.3g | **< 0.2g** |
| Éléments DOM | ~800 | **< 600** |

### Performance

| Métrique | Cible |
|----------|-------|
| Lighthouse Performance | > 95 |
| LCP | < 1.5s |
| FID/INP | < 100ms |
| CLS | < 0.05 |

### Accessibilité

| Métrique | Cible |
|----------|-------|
| Lighthouse Accessibility | > 95 |
| WAVE | 0 erreurs |

---

## 📚 RESSOURCES TECHNIQUES

### Solutions Nuxt 3 pour réduire les requêtes

1. **Lazy Components** : Préfixe `Lazy` pour charger à la demande
2. **Server Components** : Suffixe `.server.vue` pour skip hydratation
3. **Manual Chunks** : Regrouper vendor intelligemment
4. **CSS extraction** : `cssCodeSplit: false`

### Référentiels

- [GreenIT 115 bonnes pratiques v5](https://rweb.greenit.fr)
- [RGESN 78 critères](https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/)
- [Nuxt Performance](https://nuxt.com/docs/getting-started/deployment#optimizing-performance)

---

## 📋 HISTORIQUE DES PHASES

| Phase | Description | Statut |
|-------|-------------|--------|
| 1-8 | Migration Nuxt 3 + Tests | ✅ |
| 9 | Optimisations éco-conception | ✅ |
| 10 | Migration domaine beabot.fr | ✅ |
| 11 | Homepage & Contact redesign | ✅ |
| **12** | **Optimisation SEO technique** | ✅ |
| 13 | SEO avancé & Contenu | 🔜 À venir |

---

**📝 Maintenu par** : Claude
**📅 Dernière MAJ** : 21 décembre 2025
**🎯 Phase suivante** : Phase 13 - SEO Avancé & Contenu
