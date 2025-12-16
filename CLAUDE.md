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
- **Twitter** : @BenoitAbot
- **GitHub** : benabot
- **LinkedIn** : benoit-abot

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
- **Prefetch désactivé** : Économie de bande passante

---

## 📂 STRUCTURE DU PROJET

```
beabot/
├── AUDITS/                   # Documentation d'audit
│   ├── ECO_AUDIT_PHASE_9.md  # ⭐ Audit actuel
│   └── ...
├── assets/
│   ├── css/
│   │   ├── main.scss
│   │   ├── article-content.scss
│   │   └── vars/             # Variables SCSS
│   └── img/
├── components/               # 11 composants Vue 3
├── composables/
│   └── useTags.ts
├── content/
│   └── articles/             # Articles Markdown
├── layouts/
│   ├── default.vue
│   └── error.vue
├── pages/
│   ├── index.vue
│   ├── eco-conception.vue
│   ├── eco-conception/[slug].vue
│   ├── portfolio.vue
│   ├── contact.vue
│   └── mentions-legales.vue
├── public/
│   ├── img/                  # Images publiques
│   └── feed/
├── server/
│   └── routes/
│       ├── rss.xml.ts
│       └── feed.json.ts
├── nuxt.config.ts
├── netlify.toml
├── CLAUDE.md                 # Ce fichier
├── TODO.md                   # Tâches Phase 9
└── BRANCHING_STRATEGY.md
```

---

## 🎯 PHASE ACTUELLE : Phase 9 - Optimisations Éco-conception

### Objectifs
1. Atteindre **EcoIndex A**
2. Réduire requêtes HTTP **< 12**
3. Réduire poids page **< 150KB**
4. Préparer migration vers **beabot.fr**

### Tâches prioritaires
| ID | Tâche | Branche |
|----|-------|---------|
| ECO-9-01 | Retirer script EcoIndex externe | `optim/eco-9-01-ecoindex-badge` |
| ECO-9-02 | Optimiser images lourdes | `optim/eco-9-02-image-optim` |
| ECO-9-03 | Ajouter CSS print | `optim/eco-9-03-css-print` |
| ECO-9-04 | Optimiser SVG inline | `optim/eco-9-04-svg-optim` |

### Référentiels utilisés
- **GreenIT 115 bonnes pratiques v5** (2025)
- **RGESN 78 critères**
- **Opquast Webperf**
- **Smashing Performance Checklist 2021**

---

## 🌿 WORKFLOW GIT

### Branches
- `master` : Production
- `dev` : Développement (base de travail)
- `optim/eco-9-XX-*` : Branches d'optimisation Phase 9

### Règle importante
**Toujours créer une branche de travail depuis `dev`**, ne jamais travailler directement sur `dev` ou `master`.

```bash
# Créer une branche de travail
git checkout dev
git checkout -b optim/eco-9-01-ecoindex-badge

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

# Build
npm run generate     # Génération statique

# Tests
npm run lint         # ESLint + Prettier

# Lighthouse
npx lighthouse https://dev-beabot.netlify.app --output html
```

---

## 📊 MÉTRIQUES CIBLES

| Métrique | Actuel | Cible |
|----------|--------|-------|
| EcoIndex | B-C | **A** |
| Requêtes HTTP | ~16 | **<12** |
| Poids page | ~200KB | **<150KB** |
| Lighthouse Perf | 85-90 | **>95** |
| LCP | ~2s | **<1.5s** |
| CLS | ~0.1 | **<0.05** |

---

## 📋 Préparation beabot.fr

### Fichiers à modifier (quand domaine prêt)
1. `netlify.toml` → NUXT_PUBLIC_SITE_URL
2. `pages/index.vue` → canonical URL
3. `server/routes/rss.xml.ts` → siteUrl
4. `server/routes/feed.json.ts` → siteUrl

### Redirect à ajouter
```toml
[[redirects]]
  from = "https://beabot.netlify.app/*"
  to = "https://beabot.fr/:splat"
  status = 301
  force = true
```

---

## 🚨 GARDE-FOUS

### ❌ NE JAMAIS FAIRE
- Travailler directement sur `master` ou `dev`
- Force push sur branches protégées
- Merger sans tester localement
- Ignorer les audits éco-conception

### ✅ TOUJOURS FAIRE
- Créer une branche dédiée (format `optim/eco-9-XX-*`)
- Tester avec `npm run dev` et `npm run generate`
- Utiliser des commits conventionnels
- Mettre à jour la documentation
- Vérifier les métriques éco après modifications

---

## 📚 DOCUMENTATION

| Fichier | Contenu |
|---------|---------|
| `CLAUDE.md` | Ce fichier |
| `TODO.md` | Tâches Phase 9 |
| `AUDITS/ECO_AUDIT_PHASE_9.md` | Audit éco-conception actuel |
| `BRANCHING_STRATEGY.md` | Stratégie Git |

---

**📝 Maintenu par** : Claude Code
**📅 Dernière MAJ** : 16 décembre 2025
**🎯 Phase** : 9 - Optimisations éco-conception
