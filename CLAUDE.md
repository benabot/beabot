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
- **URL Live** : https://beabot.fr (domaine principal)
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
- **Lazy loading** : Images et composants chargés à la demande
- **WebP** : Format d'image optimisé
- **Manual chunking** : vendor-vue, vendor-nuxt, vendor-content, vendor-libs
- **CSS externe** : Pas de CSS inline (meilleur cache)
- **Cache headers** : 1 an pour assets statiques
- **Compression** : Brotli/Gzip via Netlify
- **Prefetch désactivé** : `prefetchLinks: false` (économie bande passante)

---

## 📂 STRUCTURE DU PROJET

```
beabot/
├── ARCHIVES/                 # Ancienne documentation
├── AUDITS/                   # Documentation d'audit
│   ├── ECO_AUDIT_PHASE_9.md  # Audit éco-conception
│   └── ...
├── assets/
│   ├── css/
│   │   ├── main.scss
│   │   ├── article-content.scss
│   │   └── vars/             # Variables SCSS
│   │       ├── _colors.scss
│   │       ├── _typo.scss
│   │       └── _spacing.scss
│   └── img/
├── components/               # Composants Vue 3
│   └── server/               # Server components (pas d'hydratation)
├── composables/
│   └── useTags.ts
├── content/
│   └── articles/             # Articles Markdown
├── layouts/
│   ├── default.vue
│   └── error.vue
├── pages/
│   ├── index.vue             # Homepage (Phase 11)
│   ├── contact.vue           # Contact (Phase 11)
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
├── TODO.md                   # Tâches actives
└── BRANCHING_STRATEGY.md
```

---

## 🎯 PHASES ACTIVES

### Phase 11 - Homepage & Contact Redesign (ACTIVE)
**Objectif** : Améliorer UX, parcours utilisateur et conversions

#### Homepage - Priorités
| Priorité | Tâches |
|----------|--------|
| **P1** | HP-11-01 Tagline hero, HP-11-02 Accroche positive, HP-11-03 Chiffres impacts, HP-11-04 Piliers concrets |
| **P2** | HP-11-05 Hero mobile, HP-11-06 Grid impacts 2x2, HP-11-07 Scroll indicator |
| **P3** | HP-11-08 Oeuf → CSS, HP-11-09 Accordéon mobile |

#### Contact - Priorités
| Priorité | Tâches |
|----------|--------|
| **P1** | CT-11-01 Titre engageant, CT-11-02 Labels humanisés |
| **P2** | CT-11-03 Layout 2 colonnes, CT-11-04 Focus states, CT-11-05 Email alternatif |

### Phase 9 - Optimisations Éco-conception (en pause)
**Objectif** : Requêtes HTTP < 12, DOM < 800 éléments, EcoIndex A

Tâches restantes à reprendre :
- ECO-9-15 : NuxtIsland pour zones non-interactives
- ECO-9-17 : CSS critique inline
- ECO-9-18 : SVG décoratifs → CSS
- ECO-9-20 : Optimiser composant Oeuf
- ECO-9-21 : Delay Hydration

---

## 🚀 SOLUTIONS TECHNIQUES NUXT 3

### Réduction des requêtes HTTP
```vue
<!-- Lazy Components (préfixe Lazy) -->
<LazyOeuf />
<LazyHomeEcoArticles />

<!-- Server Components (suffixe .server.vue) -->
<OeufServer fill="#04d94f" />
```

### Réduction du DOM
```scss
// Remplacer SVG par pseudo-éléments CSS
.decoration::before {
  content: '';
  background-image: url('/img/oeuf-vert.svg');
  background-repeat: no-repeat;
}
```

```vue
<!-- Vue 3 fragments (pas de wrapper) -->
<template>
  <h1>Titre</h1>
  <p>Contenu</p>
</template>
```

---

## 🌿 WORKFLOW GIT

### Branches
- `master` : Production
- `dev` : Développement (base de travail)
- `optim/eco-9-XX-*` : Branches Phase 9
- `feature/hp-11-XX-*` : Branches Phase 11 Homepage
- `feature/ct-11-XX-*` : Branches Phase 11 Contact
- `docs/*` : Documentation

### Règle importante
**Toujours créer une branche de travail depuis `dev`**, ne jamais travailler directement sur `dev` ou `master`.

```bash
# Créer une branche de travail
git checkout dev
git pull origin dev
git checkout -b feature/hp-11-01-hero-tagline

# Après travail terminé
git add .
git commit -m "feat: nouveau tagline hero avec CTAs"
# Benoît s'occupe du merge et push
```

### Convention de commits
```
feat: nouvelle fonctionnalité
fix: correction de bug
optim: optimisation éco/performance
docs: documentation
style: formatage CSS/design
refactor: refactoring code
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
| Lighthouse A11y | ~90 | **>95** |

---

## 🚨 GARDE-FOUS

### ❌ NE JAMAIS FAIRE
- Travailler directement sur `master` ou `dev`
- Force push sur branches protégées
- Merger sans tester (`npm run dev` + `npm run generate`)
- Ajouter des scripts externes (CDN tiers)
- Ajouter des web fonts (garder system stack)

### ✅ TOUJOURS FAIRE
- Créer une branche dédiée depuis `dev`
- Tester localement avant de proposer un merge
- Utiliser des commits conventionnels
- Mettre à jour TODO.md après chaque tâche
- Privilégier CSS natif aux éléments DOM
- Vérifier l'accessibilité (focus, contraste, aria)

---

## 📚 DOCUMENTATION

| Fichier | Contenu |
|---------|---------|
| `CLAUDE.md` | Ce fichier (contexte technique) |
| `TODO.md` | Tâches Phases 9, 10, 11 avec détails |
| `BRANCHING_STRATEGY.md` | Stratégie Git détaillée |
| `AUDITS/ECO_AUDIT_PHASE_9.md` | Audit éco-conception |

---

## 📋 HISTORIQUE DES PHASES

| Phase | Description | Statut |
|-------|-------------|--------|
| 1-4 | Migration Nuxt 3 | ✅ |
| 5 | Finalisation | ✅ |
| 6 | Bug fixes production | ✅ |
| 7 | Netlify build image | ✅ |
| 8 | Tests et validation | ✅ |
| 9 | Optimisations éco-conception | ⏸️ En pause |
| 10 | Migration domaine beabot.fr | ✅ |
| **11** | **Homepage & Contact redesign** | 🔄 **Active** |

---

**📝 Maintenu par** : Claude Code
**📅 Dernière MAJ** : 18 décembre 2025
**🎯 Phase active** : 11 - Homepage & Contact redesign
