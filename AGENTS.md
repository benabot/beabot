# 🤖 AGENTS.md - Contexte Projet BeAbot

> **Ce fichier est destiné à Codex pour comprendre le contexte du projet.**

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
└── AGENTS.md               # Ce fichier
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
| 15 | Side Projects JS |

### Branche en attente de merge

- **`feature/portfolio-redesign`** : Refonte complète portfolio (Phase 14)

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

### Branche active

**`feature/portfolio-redesign`** — Prêt pour merge

```bash
# Workflow de merge
git checkout dev
git merge feature/portfolio-redesign --no-ff -m "feat: Phase 14 Portfolio redesign"
git push origin dev

# Après validation
git checkout master
git merge dev --no-ff -m "feat: Phase 12 SEO + Phase 14 Portfolio"
git push origin master
```

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
npm run lint         # ESLint + Prettier
node scripts/seo-check.mjs  # Vérification SEO
```

---

## 📊 MÉTRIQUES

| Métrique | Score | Outil |
|----------|-------|-------|
| EcoIndex | A | ecoindex.fr |
| Lighthouse Perf | 99 | PageSpeed Insights |
| Lighthouse A11y | 96 | PageSpeed Insights |
| Lighthouse SEO | 100 | PageSpeed Insights |
| Lighthouse BP | 100 | PageSpeed Insights |

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
| `AGENTS.md` | Ce fichier |
| `BRANCHING_STRATEGY.md` | Stratégie Git |
| `PORTFOLIO_REDESIGN.md` | Specs refonte portfolio |
| `PORTFOLIO_VISUAL_IMPROVEMENTS.md` | Améliorations visuelles portfolio |
| `data/portfolio.ts` | Données structurées projets |
| `docs/HOMEPAGE_REDESIGN_V3.md` | DDesign V3 |

---

## 📝 CONVENTIONS CONTENU

### Images dans les articles Markdown

Toujours inclure `width`, `height` et `alt` dans les balises img Markdown ou les composants image pour éviter le CLS (Cumulative Layout Shift).

Syntaxe Markdown étendue :
```markdown
![description de l'image](src/image.webp){width=800 height=450}
```

Le CSS `height: auto` dans `article-content.scss` ne suffit pas sans dimensions intrinsèques déclarées — sans elles, le navigateur ne peut pas réserver l'espace avant le chargement.

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

## 🤖 DOSSIER `.codex/` RECOMMANDÉ

### Arborescence cible

```text
beabot/
├── .codex/
│   ├── README.md
│   ├── skills/
│   │   ├── eco-conception.md
│   │   ├── vue-nuxt.md
│   │   ├── design-front.md
│   │   ├── planning.md
│   │   ├── quick-start.md
│   │   └── playwright.md
│   └── templates/
│       ├── audit-eco.md
│       ├── spec-page.md
│       └── plan-tache.md
└── AGENTS.md
```

### Rôle des skills

- **`eco-conception.md`** : principes, méthodes, checklist éco-conception web.
- **`vue-nuxt.md`** : bonnes pratiques Vue 3 + Nuxt 3, composition API, SSR, SSG.
- **`design-front.md`** : conventions UI, accessibilité, responsive, design tokens.
- **`planning.md`** : organisation des tâches, estimation temps, phases projet.
- **`quick-start.md`** : rappel du contexte projet, commandes utiles, garde-fous, checks avant merge.
- **`playwright.md`** : conventions de tests E2E, parcours critiques, assertions robustes, contrôle console/a11y/SEO visible, non-régression UI légère.

### Convention d'usage

- Ajouter `design-front.md` pour toute modification UI.
- Ajouter `playwright.md` pour toute tâche impliquant des tests E2E, des parcours critiques ou une vérification de régression visuelle légère.
- Ajouter `planning.md` pour toute tâche > 30 minutes ou multi-fichiers.

### Notes importantes

- Ne pas ajouter de scripts tiers, web fonts externes ou librairies lourdes sans justification forte.
- Préférer les composants réutilisables, les pages statiques, les images optimisées et le lazy loading.
- Les tests Playwright doivent rester ciblés : peu de scénarios, forte valeur métier, sélecteurs robustes, pas de `waitForTimeout` inutile, pas de snapshots massifs.
- Toute proposition doit tenir compte des objectifs du site : **blog statique + portfolio orienté éco-conception, SEO et crédibilité professionnelle**.

---

**📝 Maintenu par** : Codex
**📅 Dernière MAJ** : 23 décembre 2025
**🎯 Prochaine action** : Push dev, merge dev → master pour production
