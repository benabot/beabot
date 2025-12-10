# ✅ TODO - BeAbot Migration Nuxt 3 (MAJ 10 décembre 2025)

> **Liste des tâches restantes après migration Composition API**

**Date MAJ** : 10 décembre 2025
**Branche** : zen-raman → feat/nuxt3-phase1-deps
**Progression globale** : **60%** ✅

---

## 📊 RÉSUMÉ PROGRESSION

```
✅ Phase 1 : Configuration & Dépendances      [████████████] 100%
✅ Phase 2A: Composition API Migration        [████████████] 100%
⏳ Phase 2B: Tests build                      [░░░░░░░░░░░░]   0%
⏳ Phase 3 : Content & Store                  [░░░░░░░░░░░░]   0%
⏳ Phase 4 : Assets & Styles                  [░░░░░░░░░░░░]   0%
⏳ Phase 5 : Tests finaux & Deploy            [░░░░░░░░░░░░]   0%
```

---

## 🔥 URGENT - À FAIRE MAINTENANT

### 1. ⚠️ Synchroniser les branches (15 min)

**Problème** : zen-raman et feat/nuxt3-phase1-deps ont divergé
- `zen-raman` a la migration Composition API complète
- `feat/nuxt3-phase1-deps` a le CV PDF

**Solution** :
```bash
cd /Users/benoitabot/Sites/beabot

# Vérifier l'état
git status
git branch -a

# Merger zen-raman dans feat/nuxt3-phase1-deps
git checkout feat/nuxt3-phase1-deps
git merge zen-raman --no-ff -m "feat: Merge complete Composition API migration

- All components migrated to <script setup>
- All components renamed per Vue.js style guide
- Pages migrated to Composition API
- Created useTags composable
- Adapted to @nuxt/content v2"

# Résoudre conflits si nécessaire
git status

# Push
git push origin feat/nuxt3-phase1-deps
```

**✓ Validation** :
```bash
# Vérifier que le CV est présent
ls -la public/cv.pdf

# Vérifier que les composants sont renommés
ls components/
# Doit montrer : TheFooter.vue, BaseButton.vue, etc.
```

---

### 2. ✅ Tester le build (30 min)

```bash
cd /Users/benoitabot/Sites/beabot
git checkout feat/nuxt3-phase1-deps  # Après merge

# Nettoyer
rm -rf node_modules .nuxt dist

# Installer
yarn install

# Dev server
yarn dev
# ✓ Ouvrir http://localhost:3000
```

**Checklist tests** :
- [ ] Page d'accueil s'affiche
- [ ] Navigation fonctionne
- [ ] Articles s'affichent (`/eco-conception`)
- [ ] Article individuel fonctionne (`/eco-conception/L-eco-conception-web`)
- [ ] Portfolio fonctionne
- [ ] Contact fonctionne
- [ ] Recherche articles fonctionne (AppSearchInput)
- [ ] Navigation prev/next fonctionne
- [ ] CV accessible (`/cv.pdf`)
- [ ] Aucune erreur console

```bash
# Build production
yarn build

# Generate static
yarn generate

# Preview
yarn preview
# ✓ Ouvrir http://localhost:3000
# ✓ Retester toutes les pages
```

---

## 🟢 PHASE 3 : Content & Store (1-2h)

### ✅ PHASE3-01 : Vérifier frontmatter articles (30 min)

```bash
cd content/articles

# Vérifier chaque article
```

**Checklist par article** :
- [ ] `L-eco-conception-web.md`
  - [ ] `title` présent
  - [ ] `description` présente
  - [ ] `createdAt` présent (date)
  - [ ] `updatedAt` présent
  - [ ] `tag` présent (array)

- [ ] `La-consommation-energetique-du-numerique.md`
  - [ ] Même checklist

- [ ] `theme-wordpress-eco-conception.md`
  - [ ] Même checklist

**Format frontmatter attendu** :
```yaml
---
title: "Titre de l'article"
description: "Description courte"
createdAt: 2024-01-15
updatedAt: 2024-01-15
tag:
  - WebDesign
  - Eco-conception
temps: 10  # temps de lecture en minutes
---
```

---

### ✅ PHASE3-02 : Décider pour le store (15 min)

**État actuel** :
- ✅ `store/tags.js` → Remplacé par `composables/useTags.js`
- ⏳ `store/page.js` → À analyser

```bash
# Vérifier l'utilisation du store page
grep -r "\$store.*page" pages/ components/ layouts/
```

**Options** :
- [ ] **Option A** : Supprimer `store/page.js` si non utilisé
- [ ] **Option B** : Migrer vers composable si nécessaire
- [ ] **Option C** : Migrer vers Pinia si complex

**Action recommandée** : Vérifier l'usage puis décider

---

### ✅ PHASE3-03 : Créer routes RSS/Feed (45 min)

**Créer** : `server/routes/rss.xml.ts`

```typescript
import { Feed } from 'feed'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const feed = new Feed({
    title: 'BeAbot - Éco-conception web',
    description: "Articles sur l'éco-conception web",
    id: 'https://beabot.netlify.app/',
    link: 'https://beabot.netlify.app/',
    language: 'fr',
    favicon: 'https://beabot.netlify.app/favicon.svg',
    copyright: `© ${new Date().getFullYear()} Benoît Abot`,
    author: {
      name: 'Benoît Abot',
      email: 'hello@beabot.fr',
      link: 'https://beabot.netlify.app'
    }
  })

  const articles = await serverQueryContent(event, 'articles')
    .sort({ createdAt: -1 })
    .find()

  for (const article of articles) {
    feed.addItem({
      title: article.title || '',
      id: `https://beabot.netlify.app/eco-conception/${article._path}`,
      link: `https://beabot.netlify.app/eco-conception/${article._path}`,
      description: article.description || '',
      date: new Date(article.createdAt || new Date()),
      author: [
        {
          name: 'Benoît Abot',
          email: 'hello@beabot.fr',
          link: 'https://beabot.netlify.app'
        }
      ]
    })
  }

  setResponseHeader(event, 'Content-Type', 'application/xml')
  return feed.rss2()
})
```

**Créer** : `server/routes/feed.json.ts`

```typescript
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const articles = await serverQueryContent(event, 'articles')
    .only(['title', 'description', '_path', 'createdAt'])
    .sort({ createdAt: -1 })
    .find()

  const feed = {
    version: 'https://jsonfeed.org/version/1',
    title: 'BeAbot - Éco-conception web',
    home_page_url: 'https://beabot.netlify.app/',
    feed_url: 'https://beabot.netlify.app/feed.json',
    description: "Articles sur l'éco-conception web",
    author: {
      name: 'Benoît Abot',
      url: 'https://beabot.netlify.app'
    },
    items: articles.map(article => ({
      id: `https://beabot.netlify.app/eco-conception/${article._path}`,
      url: `https://beabot.netlify.app/eco-conception/${article._path}`,
      title: article.title,
      content_text: article.description,
      date_published: article.createdAt
    }))
  }

  setResponseHeader(event, 'Content-Type', 'application/json')
  return feed
})
```

**Installer dépendance** :
```bash
yarn add feed
```

**Tester** :
```bash
yarn dev
# http://localhost:3000/rss.xml
# http://localhost:3000/feed.json
```

---

## 🎨 PHASE 4 : Assets & Styles (2h)

### ✅ PHASE4-01 : Créer variables CSS (1h)

**Créer** : `assets/css/variables.css`

```css
:root {
  /* Colors */
  --color-yellow: #f2a81d;
  --color-green: #00a83e;        /* WCAG AA compliant */
  --color-blue-primary: #2561d9;
  --color-blue-secondary: #0439d9;

  /* Grays - WCAG AA compliant */
  --color-gray-900: #0D0D0D;
  --color-gray-700: #404040;
  --color-gray-500: #737272;
  --color-gray-400: #8B8A89;     /* Updated for WCAG AA */
  --color-gray-200: #F2F0F0;
  --color-gray-100: #d9d9d9;

  /* Backgrounds */
  --bg-dark: #4a4a4a;
  --bg-light: #f2f2f2;

  /* Typography */
  --font-weight-light: 300;
  --font-weight-normal: 500;
  --font-weight-bold: 700;
  --font-weight-black: 900;

  /* Breakpoints (for JS) */
  --breakpoint-tablet: 768px;
}
```

**Mettre à jour** : `nuxt.config.ts`

```typescript
css: [
  '~/assets/css/variables.css',  // Ajouter cette ligne
  '~/assets/css/main.scss'
]
```

**Migration progressive** : Garder SCSS vars en parallèle pour compatibilité

---

### ✅ PHASE4-02 : Vérifier images (30 min)

```bash
# Vérifier que toutes les images sont dans public/
ls -la public/img/

# Optimiser si nécessaire
cd public
npx @squoosh/cli --webp --resize '{"width":1200}' -d . img/*.png
```

**Checklist** :
- [ ] Toutes les images dans `public/img/`
- [ ] Aucune image dans `assets/img/`
- [ ] Tailles appropriées (< 500KB par image)
- [ ] NuxtImg utilisé partout (lazy loading auto)

---

### ✅ PHASE4-03 : Vérifier fonts (30 min)

**État actuel** : @fontsource/work-sans installé ✅

**Vérifier** : `nuxt.config.ts`

```typescript
// Doit contenir :
import '@fontsource/work-sans/300.css'  // Light
import '@fontsource/work-sans/500.css'  // Normal
import '@fontsource/work-sans/700.css'  // Bold
```

**Checklist** :
- [ ] Fonts chargées depuis `node_modules/`
- [ ] Pas de requête externe (Typekit supprimé)
- [ ] Preload des fonts critiques

---

## 🧪 PHASE 5 : Tests & Optimisations (1h30)

### ✅ PHASE5-01 : Lighthouse audit (20 min)

```bash
# Build first
yarn build
yarn preview

# Run Lighthouse
npx lighthouse http://localhost:3000 \
  --output html json \
  --output-path ./AUDITS/lighthouse-nuxt3 \
  --chrome-flags="--headless"
```

**Objectifs** :
- [ ] Performance ≥ 90
- [ ] Accessibility ≥ 90
- [ ] Best Practices ≥ 95
- [ ] SEO ≥ 95

---

### ✅ PHASE5-02 : EcoIndex (15 min)

1. Aller sur https://www.ecoindex.fr/
2. Tester `http://localhost:3000`
3. Capturer le score

**Objectif** : Score A ou B

---

### ✅ PHASE5-03 : Tests accessibilité WAVE (20 min)

1. Installer extension WAVE
2. Tester chaque page
3. Corriger erreurs

**Objectif** : 0 erreur critique

**Pages à tester** :
- [ ] `/`
- [ ] `/eco-conception`
- [ ] `/eco-conception/L-eco-conception-web`
- [ ] `/portfolio`
- [ ] `/contact`
- [ ] `/mentions-legales`

---

### ✅ PHASE5-04 : Tests fonctionnels (35 min)

```bash
yarn generate
yarn preview
```

**Checklist complète** :
- [ ] Toutes les pages générées (`.output/public/`)
- [ ] Navigation entre pages fonctionne
- [ ] Links internes fonctionnent
- [ ] Images s'affichent
- [ ] Styles appliqués
- [ ] Formulaire contact fonctionne
- [ ] Recherche articles fonctionne
- [ ] CV accessible (`/cv.pdf`)
- [ ] Sitemap généré (`/sitemap.xml`)
- [ ] RSS généré (`/rss.xml`)
- [ ] Feed JSON généré (`/feed.json`)
- [ ] Robots.txt correct
- [ ] Aucune erreur 404

---

## 🚀 DÉPLOIEMENT (30 min)

### ✅ DEPLOY-01 : Préparer le merge (10 min)

```bash
cd /Users/benoitabot/Sites/beabot
git checkout feat/nuxt3-phase1-deps

# Vérifier que tout est OK
git status
yarn lint
yarn build

# Push final
git push origin feat/nuxt3-phase1-deps
```

---

### ✅ DEPLOY-02 : Créer PR (10 min)

Sur GitHub :
1. Créer Pull Request : `feat/nuxt3-phase1-deps` → `master`
2. Titre : `feat: Complete Nuxt 3 migration`
3. Description :
   ```markdown
   # Migration Nuxt 2 → Nuxt 3 complète

   ## Changements majeurs
   - ✅ Nuxt 3.14 + Vue 3.5 + Vite
   - ✅ Composition API sur tous composants/pages
   - ✅ @nuxt/content v2
   - ✅ Composants renommés (conventions Vue.js)
   - ✅ CV PDF intégré (non-indexable)
   - ✅ Fonts auto-hébergées

   ## Tests
   - ✅ Lighthouse Performance: XX/100
   - ✅ EcoIndex: X
   - ✅ WAVE: 0 erreurs
   - ✅ Build réussi
   - ✅ Generate réussi

   ## Documentation
   - AUDITS/SESSION_RECAP.md
   - AUDITS/MIGRATION_STATUS_UPDATED.md
   ```

---

### ✅ DEPLOY-03 : Merger & Deploy (10 min)

1. **Review PR**
2. **Merge vers master**
3. **Netlify auto-deploy**
4. **Vérifier production** : https://beabot.netlify.app

**Checklist production** :
- [ ] Site accessible
- [ ] Lighthouse prod ≥ 90
- [ ] EcoIndex prod A ou B
- [ ] Toutes les pages fonctionnent
- [ ] CV accessible (`/cv.pdf`)
- [ ] RSS accessible (`/rss.xml`)

---

## 📋 CHECKLIST FINALE AVANT MERGE

### Code
- [ ] Aucune erreur ESLint
- [ ] Aucune erreur TypeScript
- [ ] Aucun console.log oublié
- [ ] Aucun commentaire TODO non résolu

### Tests
- [ ] `yarn dev` fonctionne
- [ ] `yarn build` réussit
- [ ] `yarn generate` réussit
- [ ] `yarn preview` fonctionne
- [ ] Tous les tests passent

### Performance
- [ ] Lighthouse ≥ 90 (toutes catégories)
- [ ] EcoIndex A ou B
- [ ] WAVE 0 erreur

### Documentation
- [ ] README.md à jour
- [ ] AUDITS/*.md complétés
- [ ] TODO.md mis à jour
- [ ] CHANGELOG.md créé (optionnel)

---

## 🎯 RÉCAPITULATIF - CE QUI EST DÉJÀ FAIT

### ✅ Complété (10 décembre 2025)

**Phase 1 - Configuration** :
- [x] Nuxt 3.14 + Vue 3.5 installés
- [x] nuxt.config.ts créé
- [x] static/ → public/
- [x] Fonts locales (@fontsource)
- [x] Modules obsolètes supprimés

**Phase 2A - Composition API** :
- [x] Tous composants migrés (10/10)
- [x] Toutes pages migrées (6/6)
- [x] Composants renommés (conventions Vue.js)
- [x] useTags composable créé
- [x] Nuxt Content v2 adapté

**Extras** :
- [x] CV PDF intégré (feat/nuxt3-phase1-deps)
- [x] Configuration Netlify complète
- [x] Documentation complète

---

## 💡 NOTES

### Décisions importantes
- ✅ Migration Composition API complète
- ✅ Conventions Vue.js appliquées
- ✅ Store simple → Composable
- ⏳ Store complex → À décider (Pinia ou Composable)

### Points d'attention
- ⚠️ Merger zen-raman avant de continuer
- ⚠️ Tester AVANT de merger vers master
- ⚠️ Vérifier que le CV est présent après merge

---

## 📞 AIDE

### En cas de problème
1. Lire `AUDITS/SESSION_RECAP.md`
2. Lire `AUDITS/MIGRATION_STATUS_UPDATED.md`
3. Consulter doc Nuxt 3
4. Créer issue GitHub

### Ressources
- [Nuxt 3 Docs](https://nuxt.com/docs)
- [Vue 3 Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)
- [@nuxt/content v2](https://content.nuxt.com/)

---

**📝 Document créé par** : Claude Code
**📅 Date** : 10 décembre 2025 - 10h00
**🎯 Projet** : BeAbot - Migration Nuxt 2→3
**📊 Progression** : 60% complété
