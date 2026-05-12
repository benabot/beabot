# beabot

## My personnal blog and portfolio

Made with [nuxt-content](https://content.nuxtjs.org) and the awesomeness of Markdown 👍.

My website [beabot.fr](https://beabot.fr) where i'm talking mostly about greenIT (in french).

---

## 🚀 Stack technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| **Nuxt** | 4.4+ | Framework Vue.js SSG |
| **Vue.js** | 3.5+ | UI Components |
| **Nitro** | 2.13+ | Server / prerender |
| **Vite** | 7 côté builder Nuxt, 6 direct | Bundler |
| **@nuxt/content** | 3.13+ | Markdown CMS, collection `articles` via `content.config.ts` |
| **@nuxt/image** | 2.0+ | Module image, provider `none` tant qu'aucun composant Nuxt Image n'est rendu |
| **@nuxtjs/sitemap** | 8.0+ | Génération sitemap |
| **@nuxt/eslint** | 1.15+ | ESLint flat config (`eslint.config.mjs`) |
| **zod** | 3.25+ | Schéma Content v3 |
| **SCSS** | encore utilisé | Styles, sortie complète reportée après preview Nuxt 4 |
| **Node.js** | 22.21.1 validé localement | Runtime local ; pas de champ `engines` dans `package.json` |

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

# Tests et garde-fous
npm test

# Lint JS avec @nuxt/eslint v1
npm run lint:js

# Linting complet
# Note : peut rester bloqué par Prettier historique tant que le lot dédié n'est pas traité.
npm run lint
```

---

## 📂 Structure du projet

```
beabot/
├── assets/css/          # Styles SCSS + variables
├── components/          # Composants Vue réutilisables
├── composables/         # Composables Vue (useTags, etc.)
├── content.config.ts    # Collection Content v3 articles
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

### SCSS

SCSS reste présent et validé avec Nuxt 4. Les étapes SCSS-1 à SCSS-5 ont déjà supprimé l'injection globale `additionalData` et stabilisé l'éco-impact, mais la sortie complète de SCSS (`SCSS-6`) est reportée après preview Nuxt 4.

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

### Migration Nuxt 4 (branche `chore/nuxt4-migration`)

- Migration Nuxt `4.4.2`
- Migration @nuxt/content `3.13.0` avec collection `articles`
- Migration @nuxtjs/sitemap `8.0.15`
- Migration @nuxt/image `2.0.0`
- Migration @nuxt/eslint `1.15.2`
- Génération statique, feeds, sitemap et SEO validés localement
- Aucun déplacement vers `app/` pour le moment : l'arborescence actuelle reste fonctionnelle

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
| `AGENTS.md` | Contexte global du projet pour les assistants de code |
| `.codex/README.md` | Point d'entrée des skills et templates locaux du projet |
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
