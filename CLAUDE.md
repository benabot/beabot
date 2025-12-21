# 🤖 CLAUDE.md - Contexte Projet BeAbot

> **Ce fichier est destiné à Claude pour comprendre le contexte du projet.**

---

## 📋 INFORMATIONS PROJET

### Identité

- **Nom** : BeAbot
- **Type** : Blog statique + Portfolio
- **Thématique** : Éco-conception web
- **URL Production** : https://beabot.fr
- **URL Dev** : https://dev-beabot.netlify.app
- **Repository** : https://github.com/benabot/beabot
- **Repo Local** : `/Users/benoitabot/Sites/beabot`

### Propriétaire

- **Nom** : Benoît Abot
- **Email** : hello@beabot.fr
- **GitHub** : benabot

---

## 🔧 STACK TECHNIQUE

```json
{
  "framework": "Nuxt 3.14+",
  "vue": "3.5+",
  "bundler": "Vite 6",
  "cms": "@nuxt/content v2.13+",
  "image": "@nuxt/image",
  "sitemap": "@nuxtjs/sitemap v6.1.5",
  "fonts": "System font stack",
  "node": "≥ 18",
  "package-manager": "npm",
  "hosting": "Netlify (SSG)"
}
```

### Optimisations actives

- **SSG** : Génération statique complète
- **System fonts** : Pas de web fonts externes
- **Lazy loading** : Images et composants à la demande
- **WebP** : Format d'image optimisé
- **Manual chunking** : vendor-vue, vendor-nuxt, vendor-content, vendor-libs
- **CSS externe** : Meilleur cache (pas de inline)
- **Trailing slash** : Convention URL avec `/` final
- **Prefetch désactivé** : Économie bande passante

---

## 📂 STRUCTURE DU PROJET

```
beabot/
├── assets/
│   ├── css/
│   │   ├── main.scss
│   │   ├── article-content.scss
│   │   └── vars/           # Variables SCSS
│   └── img/
├── components/
│   ├── AppLink.vue         # Liens internes normalisés
│   └── server/             # Server components
├── composables/
│   └── useTags.ts
├── content/
│   └── articles/           # Articles Markdown
├── layouts/
│   ├── default.vue
│   └── error.vue
├── pages/
│   ├── index.vue
│   ├── contact.vue
│   ├── eco-conception.vue
│   ├── portfolio.vue
│   └── ...
├── scripts/
│   ├── seo-check.mjs       # Validation SEO post-build
│   └── check-routes.mjs    # Debug routes
├── server/
│   └── routes/
│       └── robots.txt.ts   # robots.txt dynamique
├── utils/
│   └── seo-url.ts          # Normalisation URLs
├── nuxt.config.ts
├── netlify.toml
├── TODO.md
├── PROJECT_STATE.md
└── CLAUDE.md               # Ce fichier
```

---

## 🎯 PHASES DU PROJET

### Terminées

| Phase | Description | Date |
|-------|-------------|------|
| 1-8 | Migration Nuxt 3 | Nov-Déc 2025 |
| 9 | Éco-conception | 15-17 déc 2025 |
| 10 | Domaine beabot.fr | 18 déc 2025 |
| 11 | Homepage & Contact | 18-20 déc 2025 |
| **12** | **SEO technique** | **21 déc 2025** |

### À venir

| Phase | Description |
|-------|-------------|
| 13 | SEO avancé & Contenu |

---

## 🌿 WORKFLOW GIT

### Branches

- `master` : Production (beabot.fr)
- `dev` : Développement
- `feature/*` : Nouvelles fonctionnalités
- `optim/*` : Optimisations
- `docs/*` : Documentation

### Règle importante

**Toujours créer une branche depuis `dev`**, ne jamais travailler directement sur `dev` ou `master`.

```bash
git checkout dev
git pull origin dev
git checkout -b feature/ma-feature
# ... travail ...
git add .
git commit -m "feat: description"
# Benoît s'occupe du merge
```

### Convention commits

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

# Validation
npm run lint         # ESLint + Prettier
node scripts/seo-check.mjs  # Vérification SEO
```

---

## 📊 MÉTRIQUES CIBLES

| Métrique | Actuel | Cible |
|----------|--------|-------|
| EcoIndex | B-C | A |
| Requêtes HTTP | ~16 | < 12 |
| Poids page | ~150KB | < 100KB |
| Lighthouse Perf | 85-90 | > 95 |
| Lighthouse A11y | ~90 | > 95 |

---

## 🚨 GARDE-FOUS

### ❌ NE JAMAIS FAIRE

- Travailler directement sur `master` ou `dev`
- Force push sur branches protégées
- Merger sans tester (`npm run generate`)
- Ajouter des scripts CDN externes
- Ajouter des web fonts

### ✅ TOUJOURS FAIRE

- Créer une branche dédiée depuis `dev`
- Tester localement avant merge
- Utiliser des commits conventionnels
- Mettre à jour TODO.md après chaque tâche
- Utiliser `AppLink` pour les liens internes
- Vérifier l'accessibilité (focus, contraste, aria)

---

## 📚 CONVENTIONS SEO

### URLs

- **Trailing slash** : Toutes les URLs internes finissent par `/` (sauf racine)
- **Utilitaire** : `utils/seo-url.ts` pour normalisation
- **Composant** : `AppLink.vue` pour liens internes

### Canonicals

- Racine : `https://beabot.fr` (sans slash)
- Pages : `https://beabot.fr/page/` (avec slash)
- og:url = canonical

---

**📝 Maintenu par** : Claude
**📅 Dernière MAJ** : 21 décembre 2025
**🎯 Phase actuelle** : Prêt pour merge Phase 12 → master
