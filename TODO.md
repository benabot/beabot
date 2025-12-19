# ✅ TODO - BeAbot Nuxt 3 Optimisation Éco-conception

> **Objectif** : Améliorer les performances éco-conception et préparer la migration vers beabot.fr

**Projet** : BeAbot - Blog éco-conception web
**Date création** : 15 décembre 2025
**Dernière MAJ** : 18 décembre 2025
**Branche active** : `dev` (Nuxt 3)
**Sites** :

- 🟢 **Production** (Nuxt 3, master) : <https://beabot.netlify.app>
- 🔵 **Développement** (Nuxt 3, dev) : <https://dev-beabot.netlify.app>

---

## 📊 CONTEXTE ACTUEL

### Statut (18 décembre 2025)

**Migration Nuxt 3 terminée** - Phase 9 en cours, Phase 11 planifiée.

| Métrique | Site Prod | Site Dev | Statut |
|----------|-----------|----------|--------|
| **Framework** | Nuxt 3.14 | Nuxt 3.14 | ✅ Sync |
| **Poids HTML** | ~28 KB | ~28 KB | ✅ |
| **Requêtes HTTP** | ~16 | ~16 | 🔶 À optimiser |
| **Fonts** | System stack | System stack | ✅ |
| **EcoIndex** | B-C | B-C | 🔶 Objectif A |

---

## ✅ PHASE 10 : Migration domaine beabot.fr

> **Terminée le 18 décembre 2025**

- [x] DNS beabot.fr configuré
- [x] Domaine configuré dans Netlify
- [x] URLs mises à jour (netlify.toml, canonical, RSS, feeds)
- [x] Redirects en place
- [x] Testé et déployé

---

## ⏸️ PHASE 9 : Optimisations Éco-conception (en pause)

> **Reprise prévue après Phase 11**

### ✅ Tâches terminées

- [x] **ECO-9-01** : Supprimer script EcoIndex externe
- [x] **ECO-9-07** : Attributs width/height images
- [x] **ECO-9-13** : Lazy Loading composants décoratifs (-2 à -4 requêtes HTTP)
- [x] **ECO-9-19** : Simplifier structure HTML (-6 éléments DOM sur homepage)

### 📋 Tâches restantes (à reprendre)

- [ ] ECO-9-15 : NuxtIsland pour zones non-interactives
- [ ] ECO-9-17 : Inliner le CSS critique
- [ ] ECO-9-18 : Remplacer SVG décoratifs par CSS
- [ ] ECO-9-20 : Optimiser le composant Oeuf
- [ ] ECO-9-21 : Delay Hydration

---

## 🎨 PHASE 11 : Homepage & Contact - Graphisme & Contenu (ACTIVE)

> **Objectif** : Améliorer l'UX, le parcours utilisateur et les conversions tout en respectant l'éco-conception

### 📋 AUDIT RÉALISÉ (18 décembre 2025)

Audit complet UX/UI desktop et mobile réalisé sur :

- Page d'accueil (beabot.fr)
- Page contact (beabot.fr/contact)

---

### 🏠 HOMEPAGE - Tâches

#### PRIORITÉ 1 - Quick wins textuels

##### HP-11-01 : Nouveau tagline Hero

- [x] Créer branche `feature/hp-11-01-hero-tagline`
- [x] Remplacer "webdesign - développement - gestion de projet"
- **Proposition** :
  > "Des sites web qui respectent la planète sans sacrifier l'expérience"
  >
  > ou
  >
  > "Performance, accessibilité, sobriété : un web durable et beau"
- [x] Garder le Oeuf animé
- [x] Ajouter 2 CTAs visibles : [Découvrir →] (qui permet de descendre à la section suivante) [Me contacter]
- [x] Ou ajouter une flèche centré en bas du container pour inviter au scroll (cf. les autres flèches sur la page)
  - **Fichier** : `pages/index.vue` (section container-1)

##### HP-11-02 : Reformuler l'accroche en positif

~~- [X] Créer branche `feature/hp-11-02-accroche`~~

- [X] Remplacer le texte interrogatif/négatif
- **Texte actuel** :
  > "Vous avez sans doute entendu dire que le numérique émettrait plus de CO2 que le transport aérien ? C'est vrai. Peut-être pensez-vous que les data centers sont la source principale de cette pollution ? Pas tout à fait..."
- **Proposition** :
  > "**Le numérique pèse plus lourd que l'aviation** dans nos émissions de CO2. La bonne nouvelle ? **Chaque site peut faire partie de la solution**. Un site éco-conçu consomme moins, charge plus vite, et reste beau : c'est possible, et c'est ce que je fais."
- **Fichier** : `pages/index.vue` (section container-2)

##### HP-11-03 : Chiffres marquants section Impacts

~~- [x] Créer branche `feature/hp-11-03-impacts-chiffres~~

- [x] Remplacer les textes génériques par des données concrètes
- **Propositions** :

| # | Actuel | Proposé |
|---|--------|---------|
| 1 | "Des impacts sur l'émission de CO2, la consommation d'énergie et de ressources…" | "**4% des émissions mondiales de CO2** viennent du numérique – autant que l'aviation" |
| 2 | "…réparties entre les serveurs, le réseau et les utilisateurs." | "**2/3 de l'impact** vient de nos appareils, pas des serveurs" |
| 3 | "Les utilisateurs ont le plus fort impact sur l'environnement…" | "Un site lourd **accélère l'obsolescence** de vos appareils" |
| 4 | "…dés l'achat de leur appareil, avant même son utilisation." | "**Moins de ressources = plus de durabilité** pour tous" |

- **Fichier** : `pages/index.vue` (section impact)

##### HP-11-04 : Exemples concrets pour les 4 piliers

~~- [x] Créer branche `feature/hp-11-04-piliers-concrets`~~
- [x] Ajouter des exemples tangibles à chaque pilier
- **Propositions** :

| Pilier | Proposition |
|--------|-------------|
| **Durabilité** | "Un site de 500 Ko au lieu de 5 Mo permet à un smartphone de 5 ans de l'afficher sans lag" |
| **Efficience** | "Objectif : **-70% de poids** par rapport à un site classique, même résultat" |
| **Sobriété** | "Pas de carousel qui tourne dans le vide, pas de vidéo autoplay : **chaque élément a sa raison d'être**" |
| **Transversalité** | "Du brief au déploiement, **l'éco-conception guide chaque décision**" |

- **Fichiers** : `pages/index.vue` (sections container-3 et container-4)

---

#### PRIORITÉ 2 - Améliorations graphiques

##### HP-11-05 : Réduire hauteur Hero mobile

- [ ] Créer branche `feature/hp-11-05-hero-mobile`
- [ ] Passer de `min-height: 100vh` à `max-height: 70vh` sur mobile
- [ ] Réduire la taille du logo/forme décorative
- [ ] S'assurer que le contenu important est visible sans scroll
- **Impact éco** : Moins de scroll = moins d'énergie
- **Fichier** : `pages/index.vue` (styles container-1, #boite-logo)

##### HP-11-06 : Refonte layout section Impacts (2x2 grid)

- [x] Créer branche `feature/hp-11-06-impacts-grid`
- [x] Remplacer le layout 3 colonnes par css grid
- [x] Mettre les chiffres en typographie hero (grand)
- [x] Les blocs impacts doivent être des carrés responsives de la même taille
- **Impact éco** : -6 éléments DOM, structure simplifiée
- **Fichier** : `pages/index.vue` (section impact, styles)

##### HP-11-07 : Indicateur de progression scroll

- [ ] Créer branche `feature/hp-11-07-scroll-indicator`
- [ ] Ajouter une barre de progression fixe en haut
- [ ] Implémenter en CSS pur si possible (performance)
- **Code suggéré** :

```css
.scroll-indicator {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: var(--vert);
  width: var(--scroll-progress);
  z-index: 100;
}
```

- **Impact éco** : ~100 bytes CSS, aucune requête supplémentaire
- **Fichiers** : `layouts/default.vue` ou `app.vue`

---

#### PRIORITÉ 3 - Évolutions structurelles

##### HP-11-08 : Remplacer SVG Oeuf décoratifs par CSS

- [ ] Créer branche `feature/hp-11-08-oeuf-css`
- [ ] Identifier les Oeuf purement décoratifs (non interactifs)
- [ ] Les remplacer par des pseudo-éléments CSS avec `background-image`
- [ ] Conserver le composant Vue uniquement pour le hero animé
- **Impact éco** : -10 à -15 éléments DOM
- **Note** : Complémentaire à ECO-9-18 et ECO-9-20
- **Fichiers** : `pages/index.vue`, `assets/css/`

##### HP-11-09 : Accordéon piliers sur mobile (optionnel)

- [ ] Créer branche `feature/hp-11-09-piliers-accordion`
- [ ] Transformer les 4 piliers en accordéon sur mobile
- [ ] Un seul ouvert à la fois pour économiser l'espace
- [ ] Animation CSS (pas de JS si possible)
- **Impact éco** : Moins de scroll, meilleure UX mobile
- **Fichier** : `pages/index.vue`

---

### 📬 CONTACT - Tâches

#### PRIORITÉ 1 - Quick wins textuels

##### CT-11-01 : Titre et accroche engageants

- [x] Créer branche `feature/ct-11-01-contact-form`
- [x] Remplacer le titre "Contact" seul
- **Proposition** :

  > # Parlons de votre projet
>
  > Une question sur l'éco-conception ? Un site à créer ou optimiser ? Écrivez-moi, **je réponds personnellement sous 48h**.
- **Fichier** : `pages/contact.vue`

##### CT-11-02 : Labels humanisés

- [x] Travailler sur la branche `feature/ct-11-01-contact-form`
- [x] Modifier les labels du formulaire et activer l'auto-complétion avec les balises html
- **Propositions** :
  - "Nom" → "Votre nom"
  - "Email" → "Votre email"
  - "Message" → "Votre message (décrivez votre projet ou posez votre question)"
- [x] Modifier le bouton : "Envoyer" → "Envoyer mon message →"
- [x] Améliorer le message de confirmation :
  > ✓ Message envoyé ! Je vous recontacte très vite.
- [x] Opt-in obligatoire à cocher avec texte en lien vers la page http://localhost:3000/mentions-legales
- **Fichier** : `pages/contact.vue`

---

#### PRIORITÉ 2 - Layout et UX

##### CT-11-03 : Layout 2 colonnes desktop

- [ ] Créer branche `feature/ct-11-03-contact-layout`
- [ ] styliser les champs du formulaire et le bouton en accord avec le design system du site
- [ ] Implémenter le layout 2 colonnes :
  - Colonne gauche : Titre, accroche, infos contact (email, LinkedIn)
  - Colonne droite : Formulaire
- [ ] Garder empilé sur mobile
- **Structure** :

```
Desktop :
┌────────────────────────────────────────────────┐
│  Parlons de votre    │  ┌──────────────────┐  │
│  projet              │  │ Formulaire       │  │
│                      │  │                  │  │
│  [Texte intro]       │  │                  │  │
│                      │  │                  │  │
│  📧 hello@beabot.fr  │  │ [Envoyer →]      │  │
│  🔗 LinkedIn         │  └──────────────────┘  │
└────────────────────────────────────────────────┘
```

- **Fichier** : `pages/contact.vue`

##### CT-11-04 : Focus states accessibles

- [x] Travailler sur la branche `feature/ct-11-01-contact-form`
- [x] Améliorer le focus visible sur les inputs
- **Code suggéré** :

```css
input:focus,
textarea:focus {
  outline: 2px solid var(--vert);
  outline-offset: 2px;
}
```

- [ ] Tester avec navigation clavier
- **Fichier** : `pages/contact.vue` ou `assets/css/main.scss`

##### CT-11-05 : Email cliquable en alternative

- [ ] Créer branche `feature/ct-11-05-contact-email`
- [ ] Ajouter un lien mailto: visible comme alternative au formulaire
- [ ] protéger ce mail du spam
- [ ] Ajouter le lien LinkedIn
- **Fichier** : `pages/contact.vue`

---

### 📊 RÉCAPITULATIF PHASE 11

| ID | Tâche | Page | Priorité | Impact UX | Impact Eco |
|----|-------|------|----------|-----------|------------|
| HP-11-01 | Tagline Hero | Home | P1 | ⭐⭐⭐⭐⭐ | - |
| HP-11-02 | Accroche positive | Home | P1 | ⭐⭐⭐⭐ | - |
| HP-11-03 | Chiffres impacts | Home | P1 | ⭐⭐⭐⭐ | - |
| HP-11-04 | Piliers concrets | Home | P1 | ⭐⭐⭐⭐ | - |
| HP-11-05 | Hero mobile | Home | P2 | ⭐⭐⭐⭐ | ✅ |
| HP-11-06 | Grid impacts | Home | P2 | ⭐⭐⭐⭐ | ✅ -6 DOM |
| HP-11-07 | Scroll indicator | Home | P2 | ⭐⭐⭐ | ✅ |
| HP-11-08 | Oeuf → CSS | Home | P3 | ⭐⭐⭐ | ✅✅ -15 DOM |
| HP-11-09 | Accordéon mobile | Home | P3 | ⭐⭐⭐ | ✅ |
| CT-11-01 | Titre contact | Contact | P1 | ⭐⭐⭐⭐ | - |
| CT-11-02 | Labels humanisés | Contact | P1 | ⭐⭐⭐ | - |
| CT-11-03 | Layout 2 colonnes | Contact | P2 | ⭐⭐⭐⭐ | - |
| CT-11-04 | Focus states | Contact | P2 | ⭐⭐⭐ | - |
| CT-11-05 | Email alternatif | Contact | P2 | ⭐⭐⭐ | - |

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

### Conversion (Phase 11)

- [ ] Temps sur page augmenté
- [ ] Taux de rebond diminué
- [ ] Formulaire contact soumis

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
| 9 | Optimisations éco-conception | ⏸️ En pause |
| 10 | Migration domaine beabot.fr | ✅ Complété |
| **11** | **Homepage & Contact redesign** | 🔄 **Active** |

---

**📝 Maintenu par** : Claude Code
**📅 Dernière MAJ** : 18 décembre 2025
**🎯 Phase actuelle** : Phase 11 - Homepage & Contact redesign
