# 🤖 CLAUDE.md - Contexte Projet BeAbot

> **Ce fichier est destiné à Claude Code pour comprendre le contexte du projet lors de futures sessions.**

---

## 📋 INFORMATIONS PROJET

### Identité
- **Nom** : BeAbot
- **Type** : Blog statique + Portfolio
- **Thématique** : Éco-conception web
- **URL Production** : https://beabot.netlify.app (Nuxt 3, branch master)
- **URL Développement** : https://dev-beabot.netlify.app (Nuxt 3, branch dev)
- **Domaine futur** : beabot.fr (en attente de configuration)
- **Repository** : https://github.com/benabot/beabot
- **Repo Local** : `/Users/benoitabot/Sites/beabot`

### Propriétaire
- **Nom** : Benoît Abot
- **Email** : hello@beabot.fr
- **GitHub** : benabot

---

## 🔧 STACK TECHNIQUE

### Configuration actuelle (Nuxt 3)
```json
{
  "framework": "Nuxt 3.14+",
  "vue": "3.5+",
  "bundler": "Vite 6",
  "cms": "@nuxt/content v2.13+",
  "image": "@nuxt/image",
  "sitemap": "@nuxtjs/sitemap",
  "fonts": "System font stack",
  "node": "≥ 18",
  "package-manager": "npm"
}
```

### Optimisations éco-conception actives
- **SSG** : Génération statique complète
- **System fonts** : Pas de web fonts externes
- **Lazy loading** : Images chargées à la demande
- **WebP** : Format d'image optimisé
- **Manual chunking** : vendor-vue, vendor-nuxt, vendor-content, vendor-libs
- **CSS externe** : Pas de CSS inline (meilleur cache)
- **Cache headers** : 1 an pour assets statiques
- **Compression** : Brotli/Gzip via Netlify
- **Prefetch désactivé** : `prefetchLinks: false` (économie bande passante)

---

## 🚀 SOLUTIONS NUXT 3 : RÉDUCTION REQUÊTES HTTP

### 1. Lazy Components (préfixe `Lazy`)
```vue
<!-- AVANT : chargé immédiatement -->
<Oeuf />
<HomeEcoArticles />

<!-- APRÈS : chargé à la demande -->
<LazyOeuf />
<LazyHomeEcoArticles />
```
**Impact** : Code-splitting automatique, -2 à -4 requêtes initiales

### 2. Server Components (suffixe `.server.vue`)
```
components/
├── Oeuf.vue           # Version interactive (si besoin)
└── server/
    └── Oeuf.server.vue # Version statique (pas d'hydratation)
```
**Usage** :
```vue
<OeufServer fill="#04d94f" /> <!-- Pas de JS côté client -->
```
**Impact** : Aucun JS d'hydratation pour ces composants

### 3. NuxtIsland (wrapper pour zones statiques)
```vue
<NuxtIsland name="decorative-section">
  <!-- Contenu non-interactif -->
  <Oeuf />
  <Oeuf />
</NuxtIsland>
```
**Impact** : Skip complet de l'hydratation Vue

### 4. CSS bundling
```ts
// nuxt.config.ts
vite: {
  build: {
    cssCodeSplit: false, // Un seul fichier CSS
  }
}
```
**Impact** : -1 à -3 requêtes CSS (trade-off cache)

### 5. Inline CSS critique (optionnel)
```ts
// nuxt.config.ts
experimental: {
  inlineSSRStyles: true, // CSS dans le HTML
}
```
**Impact** : -1 requête CSS (HTML plus lourd)

---

## 🏗️ SOLUTIONS NUXT 3 : RÉDUCTION TAILLE DOM

### 1. Remplacer SVG décoratifs par CSS
```scss
// AVANT : élément DOM
<Oeuf class="decoration" />

// APRÈS : pseudo-élément CSS
.section::before {
  content: '';
  background-image: url('/img/oeuf-vert.svg');
  // Pas d'élément DOM supplémentaire
}
```

### 2. Vue 3 fragments (multi-root)
```vue
<!-- AVANT : wrapper obligatoire -->
<template>
  <div class="wrapper">
    <h1>Titre</h1>
    <p>Contenu</p>
  </div>
</template>

<!-- APRÈS : pas de wrapper -->
<template>
  <h1>Titre</h1>
  <p>Contenu</p>
</template>
```

### 3. Conditional rendering intelligent
```vue
<!-- v-if : supprime du DOM si false -->
<HeavyComponent v-if="isVisible" />

<!-- v-show : garde dans le DOM (display: none) -->
<HeavyComponent v-show="isVisible" />
```
**Règle** : Utiliser `v-if` pour les gros composants rarement affichés

### 4. Server Components pour décorations
Les composants `.server.vue` ne génèrent pas de Virtual DOM côté client.

---

## 📂 STRUCTURE DU PROJET

```
beabot/
├── ARCHIVES/                 # Ancienne documentation
├── AUDITS/                   # Documentation d'audit
│   ├── ECO_AUDIT_PHASE_9.md  # Audit actuel
│   └── ...
├── assets/
│   ├── css/
│   │   ├── main.scss
│   │   ├── article-content.scss
│   │   └── vars/             # Variables SCSS
│   └── img/
├── components/               # 11 composants Vue 3
│   └── server/               # [À créer] Server components
├── composables/
│   └── useTags.ts
├── content/
│   └── articles/             # Articles Markdown
├── layouts/
│   ├── default.vue
│   └── error.vue
├── pages/
│   ├── index.vue             # Homepage (cible optim DOM)
│   ├── eco-conception.vue
│   ├── portfolio.vue
│   └── ...
├── public/
│   └── img/
├── server/
│   └── routes/
├── nuxt.config.ts
├── netlify.toml
├── CLAUDE.md                 # Ce fichier
├── TODO.md                   # Tâches Phase 9
└── BRANCHING_STRATEGY.md
```

---

## 🎯 PHASE ACTUELLE : Phase 9 - Réduction Requêtes & DOM

### Objectifs prioritaires
1. **Requêtes HTTP** : Passer de ~16 à **< 12**
2. **Taille DOM** : Réduire les éléments à **< 800**
3. **EcoIndex** : Atteindre **Score A**

### Tâches principales
| ID | Tâche | Impact |
|----|-------|--------|
| ECO-9-13 | Lazy loading composants | -2 à -4 requêtes |
| ECO-9-14 | Server Components | -JS hydratation |
| ECO-9-18 | SVG → CSS pseudo-elements | -10 à -20 DOM |
| ECO-9-19 | Simplifier structure HTML | DOM allégé |

### Phases suivantes
- **Phase 10** : Migration domaine beabot.fr
- **Phase 11** : Homepage redesign (graphisme, contenu)

---

## 🌿 WORKFLOW GIT

### Branches
- `master` : Production
- `dev` : Développement (base de travail)
- `optim/eco-9-XX-*` : Branches d'optimisation Phase 9
- `docs/*` : Branches documentation

### Règle importante
**Toujours créer une branche de travail depuis `dev`**, ne jamais travailler directement sur `dev` ou `master`.

```bash
# Créer une branche de travail
git checkout dev
git checkout -b optim/eco-9-13-lazy-components

# Après travail terminé
# Benoît s'occupe du merge et push
```

### Convention de commits
```
feat: nouvelle fonctionnalité
fix: correction de bug
optim: optimisation éco/performance
docs: documentation
style: formatage
refactor: refactoring
chore: maintenance
```

---

## 🛠️ COMMANDES UTILES

```bash
cd /Users/benoitabot/Sites/beabot

# Développement
npm run dev          # http://localhost:3000

# Build & Preview
npm run generate     # Génération statique
npm run preview      # Preview du build

# Tests
npm run lint         # ESLint + Prettier

# Analyse bundle
npx nuxi analyze     # Voir la taille des chunks
```

---

## 📊 MÉTRIQUES CIBLES

| Métrique | Actuel | Cible |
|----------|--------|-------|
| EcoIndex | B-C | **A** |
| Requêtes HTTP | ~16 | **<12** |
| Éléments DOM | ~900+ | **<800** |
| Poids page | ~200KB | **<150KB** |
| Lighthouse Perf | 85-90 | **>95** |

---

## 🚨 GARDE-FOUS

### ❌ NE JAMAIS FAIRE
- Travailler directement sur `master` ou `dev`
- Force push sur branches protégées
- Merger sans tester (`npm run dev` + `npm run generate`)
- Ajouter des scripts externes (CDN tiers)

### ✅ TOUJOURS FAIRE
- Créer une branche dédiée depuis `dev`
- Tester localement avant de proposer un merge
- Utiliser des commits conventionnels
- Mettre à jour la documentation
- Privilégier CSS natif aux éléments DOM

---

## 📚 DOCUMENTATION

| Fichier | Contenu |
|---------|---------|
| `CLAUDE.md` | Ce fichier (contexte technique) |
| `TODO.md` | Tâches Phase 9 avec solutions |
| `BRANCHING_STRATEGY.md` | Stratégie Git détaillée |
| `AUDITS/ECO_AUDIT_PHASE_9.md` | Audit éco-conception |

---

**📝 Maintenu par** : Claude Code
**📅 Dernière MAJ** : 17 décembre 2025
**🎯 Phase** : 9 - Réduction requêtes HTTP & DOM
