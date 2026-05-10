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
- **Rôle** : Développeur web & designer spécialisé éco-conception
- **Expérience** : 15 ans
- **Email** : hello@beabot.fr
- **GitHub** : https://github.com/benabot
- **LinkedIn** : https://www.linkedin.com/in/benoit-abot/

---

## 🔧 STACK TECHNIQUE

```json
{
  "framework": "Nuxt 4.4.2",
  "vue": "3.5.33",
  "nitro": "2.13.x",
  "bundler": "Vite 7.3.x côté builder Nuxt, Vite 6.4.x direct",
  "cms": "@nuxt/content 3.13.0",
  "image": "@nuxt/image 2.0.0",
  "sitemap": "@nuxtjs/sitemap 8.0.15",
  "eslint": "@nuxt/eslint 1.15.2 avec eslint.config.mjs",
  "schema": "zod 3.25.76 pour content.config.ts",
  "fonts": "System font stack",
  "node": "local 22.21.1 validé, pas de champ engines dans package.json",
  "package-manager": "npm",
  "hosting": "Netlify (SSG)",
  "styles": "SCSS encore utilisé ; sortie complète reportée après preview Nuxt 4"
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
- **Content v3** : collection `articles` déclarée dans `content.config.ts`
- **Structure Nuxt 4** : projet validé sans déplacement vers `app/` pour le moment
- **SCSS** : encore nécessaire (`sass`, `sass-loader`, config Vite SCSS) ; `SCSS-6` reporté après preview

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
├── content.config.ts       # Collection Content v3 articles
├── data/
│   └── portfolio.ts        # Données projets structurées
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
├── PORTFOLIO_REDESIGN.md   # Specs refonte portfolio
├── PORTFOLIO_VISUAL_IMPROVEMENTS.md
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
| 12 | SEO technique | 21 déc 2025 |
| **14** | **Portfolio — Objectif Emploi** | **22-23 déc 2025** |

### À venir

| Phase | Description |
|-------|-------------|
| 13 | SEO avancé & Contenu |


### Branche en attente de merge

- **`chore/nuxt4-migration`** : Migration Nuxt 4 stabilisée, à valider en preview via merge manuel vers `dev`

---

## 📄 PAGE PORTFOLIO

### Structure actuelle (Phase 14)

1. **Hero** : Nom, titre, accroche + CTAs (CV, Contact) + œufs décoratifs
2. **Timeline dot** : Point d'ancrage visuel
3. **Réalisations** : "Extraits de 15 ans de web" + filtres + cartes projet
4. **Timeline dot**
5. **Compétences** : 4 colonnes colorées + lien GitHub
6. **Timeline dot**
7. **CTA Final** : Titre + boutons + œufs décoratifs

### Données projets

Externalisées dans `data/portfolio.ts` avec interface TypeScript :
- id, title, subtitle, image, url
- featured, tags, context, role, stack
- metrics (ecoIndex, requests, weight, lighthouse)
- articleLink (si article associé)

### SEO Portfolio

- **Title** : "Portfolio — Benoît Abot, développeur web éco-conception"
- **Meta description** : Orientée recrutement/freelance
- **JSON-LD** : ProfilePage + Person
- **Open Graph** : og:type = profile

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
npm test             # Garde-fous + tests Node
npm run lint:js      # ESLint flat config Nuxt 4
npm run lint         # ESLint + Prettier (peut rester bloqué par formatages historiques)
node scripts/seo-check.mjs  # Vérification SEO
```

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

## 📚 DOCUMENTATION PROJET

| Fichier | Description |
|---------|-------------|
| `TODO.md` | Tâches et phases |
| `PROJECT_STATE.md` | État du projet |
| `CLAUDE.md` | Ce fichier |
| `BRANCHING_STRATEGY.md` | Stratégie Git |
| `data/portfolio.ts` | Données structurées projets |

---



### JSON-LD par type de page

| Page | Type JSON-LD | Status |
|------|--------------|--------|
| Homepage | Organization (founder, sameAs, contactPoint) | ✅ |
| /eco-conception/ | CollectionPage + ItemList (7 articles) | ✅ |
| Articles | Article | ✅ |
| FAQ | FAQPage + BreadcrumbList | ✅ |
| Portfolio | ProfilePage + Person (knowsAbout) | ✅ |
| Contact | useSeoMeta() spécifiques | ✅ |

---

## 🎨 DESIGN SYSTEM

### Couleurs (variables CSS)

- `--bleu1` : Bleu principal
- `--vert` : Vert CTA (#0dc763 environ)
- `--gris1` à `--gris5` : Échelle de gris
- `--fondClair` : Fond sections (#f8fafc)

### Couleurs catégories compétences

- Front-end : `#3b82f6` (bleu)
- Back-end : `#8b5cf6` (violet)
- Éco-conception : `#10b981` (vert)
- DevOps : `#f59e0b` (orange)

### Composants visuels

- **Œufs décoratifs** : Formes organiques (Hero, CTA final)
- **Timeline dots** : Points d'ancrage verts avec halo
- **Badges éco** : Fond vert clair, bordure verte
- **Pills filtres** : État actif vert

---

**📝 Maintenu par** : Claude
**📅 Dernière MAJ** : 10 mai 2026
**🎯 Prochaine action** : validation locale finale puis merge manuel vers `dev` pour preview Netlify ; ne pas merger `master` avant validation preview

# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.
