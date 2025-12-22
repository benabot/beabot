# 🎯 Phase 14 : Refonte Portfolio — Objectif Emploi

> **Objectif** : Transformer la page portfolio en outil de conversion pour la recherche d'emploi et de missions freelance.

---

## 📊 Diagnostic actuel

### Ce qui manque

| Élément | État | Impact |
|---------|------|--------|
| Intro personnelle | ❌ Absent | Pas de connexion humaine |
| Contexte projets | ❌ Minimaliste | Pas de storytelling |
| Résultats mesurables | ❌ Absent | Pas de preuve de valeur |
| Rôle sur chaque projet | ❌ Absent | Compétences floues |
| Stack technique | ❌ Absent | Recruteur ne voit pas les skills |
| CTA CV/Contact | ❌ Absent | Friction à la conversion |
| Meta description | ⚠️ Générique | SEO faible |

---

## 🎨 Nouvelle structure proposée

### 1. Hero Portfolio

```
┌─────────────────────────────────────────────────────────┐
│  [Kicker] Portfolio                                     │
│                                                         │
│  Benoît Abot                                           │
│  Développeur web & designer                            │
│  spécialisé en éco-conception                          │
│                                                         │
│  [Photo ou avatar optionnel]                           │
│                                                         │
│  Je conçois des sites performants, accessibles         │
│  et sobres en ressources. Chaque projet est une        │
│  occasion de prouver qu'efficacité et durabilité       │
│  vont de pair.                                         │
│                                                         │
│  [Voir mon CV ↓]  [Me contacter →]                     │
└─────────────────────────────────────────────────────────┘
```

### 2. Compétences techniques (nouvelle section)

```
┌─────────────────────────────────────────────────────────┐
│  Compétences                                            │
│                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │  Front-end   │  │  CMS         │  │  Éco-design  │  │
│  │  Vue.js      │  │  WordPress   │  │  EcoIndex    │  │
│  │  Nuxt        │  │  Headless    │  │  Performance │  │
│  │  HTML/CSS    │  │  PHP         │  │  RGESN       │  │
│  │  JavaScript  │  │  ACF         │  │  Accessibilité│ │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │  Outils      │  │  Méthodes    │  │  Design      │  │
│  │  Git         │  │  Agile       │  │  Figma       │  │
│  │  Docker      │  │  CI/CD       │  │  UI/UX       │  │
│  │  VS Code     │  │  SSG/SSR     │  │  Typographie │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### 3. Filtres améliorés

```
┌─────────────────────────────────────────────────────────┐
│  Réalisations                                           │
│                                                         │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌───────┐ │
│  │ Tous   │ │ Vue.js │ │WordPress│ │Éco-conçu│ │Design │ │
│  └────────┘ └────────┘ └────────┘ └────────┘ └───────┘ │
│                                                         │
│  7 projets — dont 3 éco-conçus                         │
└─────────────────────────────────────────────────────────┘
```

### 4. Cartes projet enrichies

```
┌─────────────────────────────────────────────────────────┐
│  ┌─────────────────────┐                                │
│  │      [Image]        │  La Cyclo-Plomberie            │
│  │                     │  Site vitrine éco-conçu        │
│  └─────────────────────┘                                │
│                                                         │
│  Plombier à vélo à Amiens — création complète          │
│  d'un site vitrine WordPress sobre et performant.      │
│                                                         │
│  Mon rôle : Design, développement, éco-conception      │
│                                                         │
│  ┌─────────────────────────────────────────────┐        │
│  │ 📊 Résultats                                │        │
│  │ • EcoIndex A                                │        │
│  │ • 4 requêtes HTTP                           │        │
│  │ • < 200 Ko par page                         │        │
│  └─────────────────────────────────────────────┘        │
│                                                         │
│  [WordPress] [Éco-conçu] [WebDesign]                   │
│                                                         │
│  [Voir le site →]                                      │
└─────────────────────────────────────────────────────────┘
```

### 5. CTA final

```
┌─────────────────────────────────────────────────────────┐
│  Envie de travailler ensemble ?                        │
│                                                         │
│  Je suis disponible pour des missions freelance        │
│  et ouvert aux opportunités CDI en éco-conception.     │
│                                                         │
│  [Télécharger mon CV (PDF)]  [Me contacter →]          │
└─────────────────────────────────────────────────────────┘
```

---

## 📝 Contenu à enrichir pour chaque projet

### Projets éco-conçus (prioritaires)

#### La Cyclo-Plomberie
- **Contexte** : Artisan plombier souhaitant un site sobre reflétant sa démarche écologique
- **Rôle** : Design, développement WordPress, éco-conception
- **Résultats** : EcoIndex A, < 200 Ko, 4 requêtes, score Lighthouse 95+
- **Stack** : WordPress, thème sur-mesure, PHP, CSS

#### La petite boucle
- **Contexte** : Refonte d'un site existant pour une association de collecte
- **Rôle** : Audit, refonte design, développement WordPress
- **Résultats** : EcoIndex B → A, -60% poids, temps de chargement divisé par 2
- **Stack** : WordPress, thème sur-mesure
- **Article lié** : /eco-conception/theme-wordpress-eco-conception

#### AAVE
- **Contexte** : Association environnementale, besoin de valoriser leurs actions
- **Rôle** : Design, développement WordPress
- **Stack** : WordPress

### Projets Vue.js/Nuxt

#### AMC2
- **Contexte** : PME souhaitant un catalogue produits moderne
- **Rôle** : Design, développement front (Nuxt), intégration API WordPress
- **Stack** : Nuxt, Vue.js, WordPress Headless, API REST

#### Guide RSE Banque Populaire (carte + dataviz)
- **Contexte** : Visualisation des engagements RSE pour une banque
- **Rôle** : Développement front, data visualization
- **Stack** : Vue.js, Bootstrap, D3.js ou équivalent

#### App Noël
- **Contexte** : Application pédagogique d'apprentissage informatique
- **Rôle** : Conception, développement
- **Stack** : Vue.js

---

## 🛠️ Tâches techniques

### P0 — Structure et contenu

- [ ] **PF-14-01** : Créer section Hero avec intro personnelle
- [ ] **PF-14-02** : Ajouter section compétences techniques
- [ ] **PF-14-03** : Enrichir les données de chaque projet (contexte, rôle, résultats)
- [ ] **PF-14-04** : Créer CTA final avec liens CV + Contact

### P1 — Design et UX

- [ ] **PF-14-05** : Refondre les filtres (boutons visuels, compteur)
- [ ] **PF-14-06** : Améliorer les cartes projet (plus d'infos, layout)
- [ ] **PF-14-07** : Ajouter bloc résultats sur projets éco-conçus
- [ ] **PF-14-08** : Responsive mobile amélioré

### P2 — SEO et accessibilité

- [ ] **PF-14-09** : Meta description personnalisée orientée recrutement
- [ ] **PF-14-10** : JSON-LD Person ou ProfilePage
- [ ] **PF-14-11** : Attributs ARIA sur filtres interactifs
- [ ] **PF-14-12** : Focus states sur tous les éléments interactifs

### P3 — Données structurées projets

- [ ] **PF-14-13** : Externaliser les données projets dans un fichier JSON ou composable
- [ ] **PF-14-14** : Ajouter champ "featured" pour projets prioritaires
- [ ] **PF-14-15** : Ajouter champ "metrics" pour résultats mesurables

---

## 📊 Métriques de succès

| Métrique | Cible |
|----------|-------|
| Temps sur page | > 1 min |
| Clics CV | Mesurable |
| Clics Contact | Mesurable |
| Taux rebond | < 50% |

---

## 🎨 Maquette simplifiée (ordre des sections)

```
1. Hero Portfolio (intro + CTAs)
2. Compétences techniques (6 blocs)
3. Filtres + compteur
4. Grille projets (cartes enrichies)
5. CTA final (CV + Contact)
```

---

## 📚 Références design

- Portfolios développeurs avec section "about"
- Cartes projet avec storytelling (Dribbble, Behance)
- Layouts accessibles WCAG

---

**📝 Créé le** : 22 décembre 2025
**🎯 Priorité** : Haute (recherche d'emploi)
**⏱️ Estimation** : 2-3 sessions de travail
