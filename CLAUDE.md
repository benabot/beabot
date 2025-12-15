# 🤖 CLAUDE.md - Contexte Projet BeAbot

> **Ce fichier est destiné à Claude Code pour comprendre le contexte du projet lors de futures sessions.**

---

## 📋 INFORMATIONS PROJET

### Identité
- **Nom** : BeAbot
- **Type** : Blog statique + Portfolio
- **Thématique** : Éco-conception web
- **URL Production** : https://beabot.netlify.app (Nuxt 2, branch master)
- **URL Développement** : https://dev-beabot.netlify.app (Nuxt 3, branch dev)
- **Repository** : https://github.com/benabot/beabot
- **Repo Local** : `/Users/benoitabot/Sites/beabot`

### Propriétaire
- **Nom** : Benoît Abot
- **Email** : hello@beabot.fr
- **Twitter** : @BenoitAbot
- **GitHub** : benabot
- **LinkedIn** : benoit-abot

---

## 🔧 STACK TECHNIQUE

### Site de Production (master - Nuxt 2)
```json
{
  "framework": "Nuxt 2.15.8",
  "vue": "2.6.14",
  "bundler": "Webpack 4",
  "status": "Stable, non maintenu"
}
```

### Site de Développement (dev - Nuxt 3) ✅ ACTIF
```json
{
  "framework": "Nuxt 3.14+",
  "vue": "3.5+",
  "bundler": "Vite",
  "cms": "@nuxt/content v2.13+",
  "image": "@nuxt/image",
  "fonts": "@fontsource/montserrat",
  "node": "≥ 18",
  "package-manager": "Yarn"
}
```

---

## 📂 STRUCTURE DU PROJET

```
beabot/
├── .nuxt/                    # Cache Nuxt (généré)
├── .output/                  # Build output (généré)
├── node_modules/             # Dépendances (généré)
│
├── AUDITS/                   # Documentation d'audit
│   ├── AUDIT-04-CONTRAST-FIXES.md
│   ├── MIGRATION_STATUS.md
│   ├── MIGRATION_STATUS_UPDATED.md
│   ├── NETLIFY_CONFIG.md
│   └── SESSION_RECAP.md
│
├── assets/
│   ├── css/
│   │   ├── main.scss         # Styles principaux
│   │   ├── article-content.scss  # Styles articles
│   │   └── vars/             # Variables SCSS
│   └── img/                  # Images (déplacées vers public/)
│
├── components/               # 10 composants Vue 3
│   ├── AppSearchInput.vue    # Recherche articles
│   ├── ArticleNavigation.vue # Navigation prev/next (ex-PrevNext)
│   ├── BaseButton.vue        # Bouton réutilisable (ex-Boutoncta)
│   ├── BaseHeading.vue       # Titre réutilisable (ex-Petittitre)
│   ├── BoiteArticle.vue      # Carte article/portfolio
│   ├── HomeEcoArticles.vue   # Section articles accueil
│   ├── HomePortfolioLatest.vue # Section portfolio accueil
│   ├── Oeuf.vue              # Élément décoratif
│   ├── OeufImage.vue         # Élément décoratif avec image
│   ├── TheFooter.vue         # Footer (ex-Footer)
│   └── TheLogo.vue           # Logo (ex-Logo)
│
├── composables/
│   └── useTags.ts            # Gestion des tags (remplace Vuex)
│
├── content/
│   └── articles/             # Articles Markdown
│       ├── l-eco-conception-web.md
│       ├── la-consommation-energetique-du-numerique.md
│       └── theme-wordpress-eco-conception.md
│
├── layouts/
│   ├── default.vue           # Layout principal
│   └── error.vue             # Page d'erreur
│
├── pages/
│   ├── index.vue             # Page d'accueil
│   ├── contact.vue           # Formulaire contact
│   ├── portfolio.vue         # Portfolio
│   ├── mentions-legales.vue  # Mentions légales
│   ├── eco-conception.vue    # Liste articles
│   └── eco-conception/
│       └── [slug].vue        # Article détail
│
├── public/
│   ├── img/                  # Images publiques
│   ├── feed/                 # Feeds générés
│   ├── cv.pdf                # CV (non-indexable)
│   ├── favicon.svg
│   └── robots.txt
│
├── server/
│   └── routes/
│       ├── rss.xml.ts        # Feed RSS
│       └── feed.json.ts      # Feed JSON
│
├── scripts/
│   └── pre-build-check.js    # Validation pré-build
│
├── utils/
│   ├── getRoutes.js
│   ├── getSiteMeta.js
│   └── portfolioItems.ts     # Données portfolio
│
├── nuxt.config.ts            # Configuration Nuxt 3
├── package.json
├── netlify.toml              # Configuration Netlify
├── CLAUDE.md                 # Ce fichier
├── TODO.md                   # Tâches à faire
├── BRANCHING_STRATEGY.md     # Stratégie Git
└── README.md
```

---

## 🎯 OBJECTIF ACTUEL

### Problématique
Le site de **production** (Nuxt 2) a de meilleurs résultats éco-index que le site de **développement** (Nuxt 3), notamment concernant le **nombre de requêtes HTTP**.

### Objectifs
1. **Améliorer les performances éco-conception** du site dev
2. **Réduire le nombre de requêtes HTTP**
3. **Atteindre un EcoIndex A** sur le site dev
4. Préparer la mise en production de Nuxt 3

---

## 🔄 ÉTAT DE LA MIGRATION NUXT 3

### ✅ Phases complétées

#### Phase 1 - Configuration (100%)
- [x] Nuxt 3.14 + Vue 3.5 + Vite
- [x] @nuxt/content v2
- [x] @nuxt/image
- [x] Fonts locales (Montserrat via @fontsource)
- [x] Configuration Netlify complète
- [x] RSS/JSON feeds

#### Phase 2 - Composants (100%)
- [x] Migration vers Composition API (`<script setup>`)
- [x] Renommage selon conventions Vue.js
- [x] Suppression modules obsolètes (lozad, axios, etc.)
- [x] Composable useTags créé

#### Phase 3 - Design (100%)
- [x] Police Montserrat
- [x] Animations portfolio restaurées
- [x] Transitions Vue 3 corrigées
- [x] Styles articles optimisés

### ⏳ Phase 4 - Optimisation éco-conception (En cours)
- [ ] Audit comparatif prod vs dev
- [ ] Réduction des requêtes HTTP
- [ ] Optimisation des assets
- [ ] Tests de performance

---

## 🌿 WORKFLOW GIT

### Branches principales
- `master` : Production (Nuxt 2) - **NE PAS TOUCHER**
- `dev` : Développement (Nuxt 3) - Base de travail

### Règle importante
**Toujours créer une branche de travail depuis `dev`**, ne jamais travailler directement sur `dev` ou `master`.

```bash
# Créer une branche de travail
git checkout dev
git checkout -b feature/ma-feature

# Après travail terminé et tests OK
git checkout dev
git merge feature/ma-feature
git push origin dev
```

### Convention de commits
```
feat: nouvelle fonctionnalité
fix: correction de bug
optim: optimisation performance/éco
docs: documentation
style: formatage
refactor: refactoring
chore: maintenance
```

---

## 🛠️ COMMANDES UTILES

### Développement
```bash
cd /Users/benoitabot/Sites/beabot

# Installer dépendances
yarn install

# Dev server
yarn dev
# http://localhost:3000

# Build
yarn build

# Generate static
yarn generate

# Preview
yarn preview

# Lint
yarn lint
```

### Tests éco-conception
```bash
# Lighthouse
npx lighthouse https://dev-beabot.netlify.app --output html

# EcoIndex
# https://www.ecoindex.fr/

# Website Carbon
# https://www.websitecarbon.com/
```

---

## 📊 MÉTRIQUES CIBLES

### Éco-conception
- **EcoIndex** : Score A
- **Requêtes HTTP** : < 15
- **Poids page** : < 500KB
- **CO2/page** : < 0.5g

### Performance
- **Lighthouse Performance** : > 95
- **LCP** : < 1.5s
- **FID** : < 100ms
- **CLS** : < 0.1

### Accessibilité
- **Lighthouse Accessibility** : > 95
- **WCAG** : AA minimum
- **Contrastes** : 4.5:1 minimum

---

## 📚 FICHIERS DE DOCUMENTATION

| Fichier | Description |
|---------|-------------|
| `CLAUDE.md` | Ce fichier - contexte projet |
| `TODO.md` | Liste des tâches à faire |
| `BRANCHING_STRATEGY.md` | Stratégie Git |
| `AUDITS/MIGRATION_STATUS.md` | État de la migration |
| `AUDITS/NETLIFY_CONFIG.md` | Configuration Netlify |
| `AUDIT_BEABOT.md` | Audit technique initial |
| `MIGRATION_PLAN_NUXT3.md` | Plan de migration |
| `VUE_BEST_PRACTICES_AUDIT.md` | Audit bonnes pratiques |

---

## 🚨 GARDE-FOUS

### ❌ NE JAMAIS FAIRE
- Travailler directement sur `master`
- Travailler directement sur `dev` (créer une branche)
- Force push sur branches protégées
- Merger sans tester localement
- Supprimer `.git/`

### ✅ TOUJOURS FAIRE
- Créer une branche dédiée pour chaque travail
- Tester avec `yarn dev` et `yarn generate`
- Utiliser des commits conventionnels
- Mettre à jour la documentation
- Vérifier les métriques éco après modifications

---

## 🔗 LIENS UTILES

### Sites
- Production : https://beabot.netlify.app
- Développement : https://dev-beabot.netlify.app

### Documentation
- [Nuxt 3](https://nuxt.com/docs)
- [Vue 3](https://vuejs.org/)
- [@nuxt/content](https://content.nuxt.com/)
- [EcoIndex](https://www.ecoindex.fr/)
- [RGESN](https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/)

---

**📝 Document maintenu par** : Claude Code  
**📅 Dernière MAJ** : 15 décembre 2025  
**🎯 Projet** : BeAbot - Optimisation éco-conception
