# beabot

## My personnal blog and portfolio

Made with [nuxt-content](https://content.nuxtjs.org) and the awesomeness of Markdown 👍.

My website [beabot.fr](https://beabot.fr) where i'm talking mostly about greenIT (in french).

---

## 🚀 Stack technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| **Nuxt** | 3.14+ | Framework Vue.js SSG |
| **Vue.js** | 3.5+ | UI Components |
| **Vite** | 6 | Bundler |
| **@nuxt/content** | 2.13+ | Markdown CMS |
| **@nuxt/image** | 1.8+ | Optimisation images |
| **@nuxtjs/sitemap** | 6.1+ | Génération sitemap |
| **SCSS** | - | Styles |
| **Node.js** | ≥18 | Runtime |

---

## 📦 Installation & Commandes

```bash
# Cloner le projet
git clone https://github.com/benabot/beabot.git
cd beabot

# Installer les dépendances
npm install

# Développement (http://localhost:3000)
npm run dev

# Build SSR
npm run build

# Génération statique (SSG)
npm run generate

# Preview du build statique
npm run preview

# Linting
npm run lint
```

---

## 📂 Structure du projet

```
beabot/
├── assets/css/          # Styles SCSS + variables
├── components/          # Composants Vue réutilisables
├── composables/         # Composables Vue (useTags, etc.)
├── content/articles/    # Articles Markdown (blog)
├── data/                # Données structurées (portfolio.ts)
├── layouts/             # Layouts Nuxt
├── pages/               # Routes (index, portfolio, contact, etc.)
├── public/              # Assets statiques
├── server/routes/       # API routes (RSS, robots.txt)
├── utils/               # Utilitaires (seo-url.ts)
└── nuxt.config.ts       # Configuration Nuxt
```

---

## 🌿 Éco-conception

Ce site applique les principes d'éco-conception web :

### Optimisations actives

- **System fonts** : Pas de web fonts externes (0 requête)
- **Lazy loading** : Images et composants chargés à la demande
- **WebP** : Format d'image optimisé (qualité 70-75%)
- **SSG** : Génération statique complète (pas de serveur Node)
- **Manual chunking** : JS splitté (vendor-vue, vendor-nuxt, vendor-content)
- **CSS externe** : Meilleur cache navigateur
- **Prefetch désactivé** : Économie bande passante
- **Compression** : Brotli/Gzip activé

### Scores de performance

| Métrique | Score | Outil |
|----------|-------|-------|
| **EcoIndex** | A | ecoindex.fr |
| **Lighthouse Performance** | 99 | PageSpeed Insights |
| **Lighthouse Accessibility** | 96 | PageSpeed Insights |
| **Lighthouse SEO** | 100 | PageSpeed Insights |
| **Lighthouse Best Practices** | 100 | PageSpeed Insights |

> ✅ Objectif EcoIndex A atteint !

---

## 🔧 Travail réalisé (Décembre 2025)

### Migration Nuxt 2 → Nuxt 3 (Phases 1-8)

- Migration complète du framework
- Réécriture des composants en Composition API
- Migration @nuxt/content v1 → v2
- Configuration Vite + TypeScript

### Optimisations éco-conception (Phase 9)

- Suppression des Google Fonts → System font stack
- Lazy loading des composants lourds
- Server components pour le rendu
- Manual chunking du JavaScript
- CSS externe avec `inlineSSRStyles: false`

### Migration domaine (Phase 10)

- Configuration DNS beabot.fr
- HTTPS Let's Encrypt
- Redirects Netlify

### Refonte Homepage & Contact (Phase 11)

- Hero avec tagline et CTAs
- Section impacts environnementaux
- 4 piliers de l'éco-conception
- Page contact 2 colonnes
- Formulaire Netlify + honeypot

### SEO technique (Phase 12)

- Normalisation URLs (trailing slash)
- Canonicals cohérents
- Sitemap XML dynamique
- Robots.txt configuré
- JSON-LD sur articles (Article schema)
- JSON-LD FAQPage sur page FAQ

### Refonte Portfolio (Phase 14)

- Hero avec intro personnelle + CTAs (CV, Contact)
- Filtres interactifs avec compteurs
- Cartes projet enrichies (badges éco-conception)
- Métriques sur projets éco-conçus (EcoIndex, poids, requêtes)
- Section compétences (4 colonnes colorées)
- Timeline sobre entre sections
- Données externalisées (`data/portfolio.ts`)
- JSON-LD ProfilePage + Person

### Structured Data SEO (Phase 13 - P1)

- JSON-LD Organization sur homepage
- JSON-LD CollectionPage + ItemList sur /eco-conception/
- useSeoMeta() sur page Contact
- Trailing slash sur flux RSS et feed.json

---

## 📄 Pages principales

| Page | URL | Structured Data |
|------|-----|-----------------|
| Accueil | `/` | Organization |
| Blog | `/eco-conception/` | CollectionPage + ItemList |
| Portfolio | `/portfolio/` | ProfilePage + Person |
| Contact | `/contact/` | useSeoMeta |
| FAQ | `/eco-conception/faq-eco-conception/` | FAQPage + BreadcrumbList |
| Articles | `/eco-conception/[slug]/` | Article |

---

## 🌐 Déploiement

Le site est déployé sur **Netlify** avec génération statique :

- **Production** : [beabot.fr](https://beabot.fr) (branche `master`)
- **Développement** : [dev-beabot.netlify.app](https://dev-beabot.netlify.app) (branche `dev`)

### Variables d'environnement

```bash
NUXT_PUBLIC_SITE_URL=https://beabot.fr  # Production
NUXT_PUBLIC_SITE_URL=https://dev-beabot.netlify.app  # Dev
```

---

## 📚 Documentation projet

| Fichier | Description |
|---------|-------------|
| `CLAUDE.md` | Contexte pour Claude AI |
| `TODO.md` | Tâches et roadmap |
| `PROJECT_STATE.md` | État du projet |

---

## 👤 Auteur

**Benoît Abot** — Développeur web & designer spécialisé éco-conception

- 🌐 [beabot.fr](https://beabot.fr)
- 💼 [LinkedIn](https://www.linkedin.com/in/benoit-abot/)
- 🐙 [GitHub](https://github.com/benabot)
- 📧 hello@beabot.fr

---

## 📝 Licence

Ce projet est sous licence privée. Le code source est disponible à titre de référence pour l'éco-conception web.
