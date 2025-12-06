# ✅ TODO - BeAbot Migration Nuxt 2→3

> **Liste complète des tâches organisées par priorité et phase**

**Projet** : BeAbot  
**Date création** : 6 décembre 2025  
**Statut global** : 🟡 Audit terminé, migration non démarrée  

---

## 📊 PROGRESSION GLOBALE

```
[██░░░░░░░░░░░░░░░░░░] 10% - Audit complet
```

- ✅ Audits techniques : 100%
- ⏳ Quick fixes : 0%
- ⏳ Migration Nuxt 3 : 0%
- ⏳ Optimisations : 0%
- ⏳ Tests & Deploy : 0%

---

## 🔥 URGENT - QUICK FIXES (1 jour)

### 🔴 P0 - CRITIQUES (faire AUJOURD'HUI)

#### ✅ AUDIT-01 : Encoder correctement UTF-8
- [ ] **Fichier** : `nuxt.config.js`
- [ ] **Lignes** : 30, 36, 42, 58, 256, etc.
- [ ] **Action** :
  ```bash
  # 1. Vérifier l'encodage actuel
  file -I nuxt.config.js
  
  # 2. Ouvrir dans VS Code
  code nuxt.config.js
  
  # 3. Sauvegarder avec UTF-8
  # File > Save with Encoding > UTF-8
  ```
- [ ] **Validation** :
  ```bash
  # Vérifier que les accents s'affichent correctement
  grep "éco-conception" nuxt.config.js
  # Doit afficher : "éco-conception" (pas "Ã©co-conception")
  ```
- [ ] **Commit** :
  ```bash
  git add nuxt.config.js
  git commit -m "fix(config): Correct UTF-8 encoding in meta tags"
  ```
- **Temps estimé** : 10 min
- **Impact** : SEO + UX

---

#### ✅ AUDIT-02 : Ajouter :key sur tous les v-for
- [ ] **Fichier 1** : `components/BoiteArticle.vue` (ligne 40)
  ```vue
  <!-- AVANT -->
  <span v-for="chip in chips" class="chips">
  
  <!-- APRÈS -->
  <span 
    v-for="(chip, index) in chips" 
    :key="`chip-${index}`" 
    class="chips"
  >
  ```

- [ ] **Fichier 2** : Chercher TOUS les v-for
  ```bash
  # Trouver tous les v-for sans :key
  grep -r "v-for" components/ pages/ layouts/ | grep -v ":key"
  ```

- [ ] **Action globale** :
  - Lister tous les fichiers avec v-for
  - Ajouter :key avec ID unique
  - Préférer `item.id` ou `item.slug` si disponible
  - Sinon utiliser `index`

- [ ] **Validation** :
  ```bash
  # Aucun v-for ne doit être sans :key
  yarn lint
  ```

- [ ] **Commit** :
  ```bash
  git add .
  git commit -m "fix(vue): Add :key to all v-for directives"
  ```
- **Temps estimé** : 30 min
- **Impact** : Performance + Correctness

---

#### ✅ AUDIT-03 : Attributs alt sur toutes les images

- [ ] **Fichier 1** : `components/BoiteArticle.vue`
  ```vue
  <!-- AVANT -->
  <div
    class="boite-image__image lozad"
    :data-background-image="resolvedBackgroundUrl"
  ></div>
  
  <!-- APRÈS (Nuxt 2 temporaire) -->
  <img
    :src="resolvedBackgroundUrl"
    :alt="titre || 'Image décorative'"
    class="boite-image__image lozad"
  />
  ```

- [ ] **Fichier 2** : `components/Logo.vue`
  ```vue
  <!-- AVANT -->
  <svg id="svg-logo" viewBox="0 0 554.5 531.9">
  
  <!-- APRÈS -->
  <svg 
    id="svg-logo" 
    viewBox="0 0 554.5 531.9"
    role="img"
    aria-label="Logo BeAbot - Éco-conception web"
  >
    <title>Logo BeAbot</title>
    <!-- paths -->
  </svg>
  ```

- [ ] **Fichier 3** : `components/VImg.vue`
  ```vue
  <!-- Vérifier que le prop alt est bien required -->
  props: {
    alt: {
      type: String,
      required: true, // ✅ Déjà OK
    }
  }
  ```

- [ ] **Action globale** :
  ```bash
  # Trouver toutes les balises img sans alt
  grep -r "<img" components/ pages/ | grep -v "alt="
  
  # Trouver tous les SVG sans role/aria-label
  grep -r "<svg" components/ pages/ | grep -v "role="
  ```

- [ ] **Validation** :
  - Tester avec WAVE extension
  - 0 erreur d'accessibilité image

- [ ] **Commit** :
  ```bash
  git add .
  git commit -m "fix(a11y): Add alt attributes and ARIA labels to images"
  ```
- **Temps estimé** : 45 min
- **Impact** : Accessibilité (WCAG A)

---

#### ✅ AUDIT-04 : Vérifier contraste couleurs

- [ ] **Outil** : https://webaim.org/resources/contrastchecker/

- [ ] **Tests à faire** :
  | Couleur | Hex | Fond | Ratio | Conforme |
  |---------|-----|------|-------|----------|
  | gris4 | #A6A5A4 | #FFFFFF | ? | ? |
  | gris3 | #737272 | #FFFFFF | ? | ? |
  | gris2 | #404040 | #FFFFFF | ? | ? |
  | bleu1 | #2561d9 | #FFFFFF | ? | ? |
  | vert | #04d94f | #FFFFFF | ? | ? |

- [ ] **Objectif** : Ratio ≥ 4.5:1 (WCAG AA)

- [ ] **Si non conforme** :
  ```scss
  // Ajuster dans assets/css/vars/_colors.scss
  // Exemple :
  $gris4: #A6A5A4; // Ratio 2.8:1 ❌
  $gris4: #8B8A89; // Ratio 4.6:1 ✅
  ```

- [ ] **Commit** :
  ```bash
  git add assets/css/vars/_colors.scss
  git commit -m "fix(a11y): Improve color contrast ratios (WCAG AA)"
  ```
- **Temps estimé** : 30 min
- **Impact** : Accessibilité (WCAG AA)

---

## 🟡 P1 - IMPORTANTES (cette semaine)

### ✅ REFACTOR-01 : Renommer composants selon conventions

- [ ] **Créer script de renommage** :
  ```bash
  #!/bin/bash
  # rename-components.sh
  
  mv components/VImg.vue components/BaseImage.vue
  mv components/Boutoncta.vue components/BaseButton.vue
  mv components/Petittitre.vue components/BaseHeading.vue
  mv components/Footer.vue components/TheFooter.vue
  mv components/Logo.vue components/TheLogo.vue
  mv components/BoiteArticle.vue components/ArticleCard.vue
  mv components/PrevNext.vue components/ArticleNavigation.vue
  mv components/Oeuf.vue components/DecorativeOeuf.vue
  mv components/OeufImage.vue components/DecorativeOeufImage.vue
  ```

- [ ] **Mettre à jour imports** :
  ```bash
  # Chercher toutes les références
  grep -r "BoiteArticle" pages/ layouts/
  grep -r "Boutoncta" pages/ layouts/
  # etc.
  ```

- [ ] **Mettre à jour auto-imports** :
  - Les composants seront automatiquement découverts
  - Vérifier que `components: true` dans nuxt.config.js

- [ ] **Validation** :
  ```bash
  yarn dev
  # Vérifier qu'aucune erreur de composant manquant
  ```

- [ ] **Commit** :
  ```bash
  git add .
  git commit -m "refactor(components): Rename components to follow Vue style guide"
  ```
- **Temps estimé** : 1h
- **Impact** : Maintenance

---

### ✅ REFACTOR-02 : Créer config centralisée

- [ ] **Créer** : `config/app.config.js`
  ```js
  export default {
    site: {
      name: 'BeAbot',
      url: 'https://beabot.fr',
      description: "L'éco-conception web",
      author: {
        name: 'Benoît Abot',
        email: 'hello@beabot.fr',
      },
    },
    social: {
      twitter: '@BenoitAbot',
      github: 'benabot',
      linkedin: 'benoit-abot',
    },
    articles: {
      baseUrl: '/eco-conception',
    },
  }
  ```

- [ ] **Remplacer hardcoded values** :
  ```bash
  # Dans nuxt.config.js
  # Remplacer 'https://beabot.fr' par import de config
  
  import appConfig from './config/app.config.js'
  
  export default {
    sitemap: {
      hostname: appConfig.site.url,
    }
  }
  ```

- [ ] **Commit** :
  ```bash
  git add config/app.config.js nuxt.config.js
  git commit -m "feat(config): Add centralized app configuration"
  ```
- **Temps estimé** : 30 min
- **Impact** : Maintenance

---

### ✅ STYLE-01 : Créer variables CSS natives

- [ ] **Créer** : `assets/css/variables.css`
  ```css
  :root {
    /* Colors */
    --color-yellow: #f2a81d;
    --color-green: #04d94f;
    --color-blue-primary: #2561d9;
    --color-blue-secondary: #0439d9;
    
    /* Grays */
    --color-gray-900: #0D0D0D;
    --color-gray-700: #404040;
    --color-gray-500: #737272;
    --color-gray-400: #A6A5A4;
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
    
    /* Breakpoints (for media queries) */
    --breakpoint-tablet: 768px;
  }
  ```

- [ ] **Importer dans** : `nuxt.config.js`
  ```js
  css: [
    '~/assets/css/variables.css',
    '~/assets/css/main.scss'
  ]
  ```

- [ ] **Remplacer progressivement** :
  ```scss
  /* AVANT */
  .text-gris4 { color: $gris4; }
  
  /* APRÈS */
  .text-gray-400 { color: var(--color-gray-400); }
  ```

- [ ] **Note** : Garder SCSS en parallèle pour compatibilité

- [ ] **Commit** :
  ```bash
  git add assets/css/variables.css
  git commit -m "feat(style): Add CSS custom properties (variables)"
  ```
- **Temps estimé** : 1h
- **Impact** : Modernisation + Dark mode ready

---

## 🚀 MIGRATION NUXT 3 (5-6 jours)

### 📦 PHASE 1 : Dépendances & Config (Jour 1-2)

#### ✅ PHASE1-01 : Backup & Baseline
- [ ] **Backup complet** :
  ```bash
  cd ~/Sites
  tar -czf beabot-backup-$(date +%Y%m%d).tar.gz beabot/
  ```

- [ ] **Screenshots** :
  - [ ] Page d'accueil
  - [ ] Page éco-conception
  - [ ] Page article
  - [ ] Page portfolio
  - [ ] Page contact

- [ ] **Lighthouse baseline** :
  ```bash
  npx lighthouse https://beabot.netlify.app \
    --output json html \
    --output-path ./baseline-lighthouse
  ```

- [ ] **EcoIndex** : https://www.ecoindex.fr/
  - [ ] Capturer score actuel
  - [ ] Screenshot du rapport

- **Temps estimé** : 30 min

---

#### ✅ PHASE1-02 : Créer branche Git
- [ ] **Commandes** :
  ```bash
  cd /Users/benoitabot/Sites/beabot
  
  # Vérifier statut propre
  git status
  
  # Créer branche principale
  git checkout -b feature/nuxt3-migration
  
  # Push
  git push -u origin feature/nuxt3-migration
  ```
- **Temps estimé** : 5 min

---

#### ✅ PHASE1-03 : Mettre à jour Node.js
- [ ] **Vérifier version** :
  ```bash
  node --version
  # Si < 18, installer Node 20
  ```

- [ ] **Installer Node 20** (si nécessaire) :
  ```bash
  # Avec nvm
  nvm install 20
  nvm use 20
  nvm alias default 20
  
  # Vérifier
  node --version  # doit être v20.x.x
  ```
- **Temps estimé** : 10 min

---

#### ✅ PHASE1-04 : Nettoyer projet
- [ ] **Commandes** :
  ```bash
  cd /Users/benoitabot/Sites/beabot
  
  # Supprimer anciens fichiers
  rm -rf node_modules .nuxt dist yarn.lock
  
  # Vérifier
  ls -la
  ```
- **Temps estimé** : 2 min

---

#### ✅ PHASE1-05 : Nouveau package.json
- [ ] **Créer** : `package.json.new`
  - Voir contenu dans `MIGRATION_PLAN_NUXT3.md` section "Étape 1B"

- [ ] **Remplacer** :
  ```bash
  mv package.json package.json.old
  mv package.json.new package.json
  ```

- [ ] **Installer** :
  ```bash
  yarn install
  ```

- [ ] **Validation** :
  ```bash
  yarn list --depth=0 | grep nuxt
  # Doit afficher : nuxt@3.14.0
  ```
- **Temps estimé** : 15 min

---

#### ✅ PHASE1-06 : Créer nuxt.config.ts
- [ ] **Créer** : `nuxt.config.ts`
  - Voir contenu dans `MIGRATION_PLAN_NUXT3.md` section "Étape 1D"

- [ ] **Renommer ancien** :
  ```bash
  mv nuxt.config.js nuxt.config.js.old
  ```

- [ ] **Générer types** :
  ```bash
  yarn nuxt prepare
  ```

- [ ] **Validation** :
  ```bash
  # Vérifier que .nuxt/tsconfig.json existe
  ls -la .nuxt/tsconfig.json
  ```
- **Temps estimé** : 20 min

---

#### ✅ PHASE1-07 : Créer app.config.ts
- [ ] **Créer** : `app.config.ts`
  - Voir contenu dans `MIGRATION_PLAN_NUXT3.md` section "Étape 1E"
- **Temps estimé** : 10 min

---

#### ✅ PHASE1-08 : Créer tsconfig.json
- [ ] **Créer** : `tsconfig.json`
  ```json
  {
    "extends": "./.nuxt/tsconfig.json"
  }
  ```
- **Temps estimé** : 2 min

---

#### ✅ PHASE1-09 : Git commit Phase 1
- [ ] **Commit** :
  ```bash
  git add .
  git commit -m "feat(migration): Phase 1 - Nuxt 3 dependencies & config
  
  - Update to Nuxt 3.14.0 + Vue 3.5.0
  - Replace webpack with Vite
  - Remove obsolete modules
  - Create nuxt.config.ts
  - Add app.config.ts for global config"
  
  git push origin feature/nuxt3-migration
  ```
- **Temps estimé** : 5 min

---

### 🧩 PHASE 2 : Composants & Pages (Jour 3-4)

#### ✅ PHASE2-01 : Créer app.vue
- [ ] **Créer** : `app.vue`
  - Voir contenu dans `MIGRATION_PLAN_NUXT3.md` section "Étape 2A"
- **Temps estimé** : 5 min

---

#### ✅ PHASE2-02 : Migrer layouts
- [ ] **Fichier** : `layouts/default.vue`
  - Remplacer `<Nuxt />` par `<slot />`
- [ ] **Fichier** : `layouts/error.vue`
  - Migrer vers Composition API
- **Temps estimé** : 15 min

---

#### ✅ PHASE2-03 : Migrer composants (Options → Composition API)
- [ ] **TheFooter.vue** (ex-Footer.vue)
- [ ] **TheLogo.vue** (ex-Logo.vue)
- [ ] **ArticleCard.vue** (ex-BoiteArticle.vue)
- [ ] **BaseButton.vue** (ex-Boutoncta.vue)
- [ ] **BaseHeading.vue** (ex-Petittitre.vue)
- [ ] **ArticleNavigation.vue** (ex-PrevNext.vue)
- [ ] **AppSearchInput.vue**
- [ ] **DecorativeOeuf.vue**
- [ ] **DecorativeOeufImage.vue**
- [ ] **SUPPRIMER VImg.vue** (remplacer par NuxtImg)

**Pour chaque composant** :
- Voir exemples dans `MIGRATION_PLAN_NUXT3.md` section "Étape 2C"
- Remplacer `export default {}` par `<script setup>`
- Remplacer `data()` par `ref()` / `reactive()`
- Remplacer `mounted()` par `onMounted()`
- Supprimer `this.$lozad.observe()`

- **Temps estimé** : 3-4h

---

#### ✅ PHASE2-04 : Remplacer lozad par NuxtImg
- [ ] **Dans tous les composants** :
  ```vue
  <!-- AVANT -->
  <div
    class="lozad"
    :data-background-image="url"
  ></div>
  
  <!-- APRÈS -->
  <NuxtImg
    :src="url"
    :alt="title"
    loading="lazy"
  />
  ```

- [ ] **Supprimer plugin** : `plugins/vimg.js`
- **Temps estimé** : 1h

---

#### ✅ PHASE2-05 : Migrer pages
- [ ] **index.vue** : asyncData → useAsyncData
- [ ] **contact.vue** : head() → useHead()
- [ ] **portfolio.vue** : head() → useHead()
- [ ] **mentions-legales.vue** : head() → useHead()
- [ ] **eco-conception.vue** : asyncData → useAsyncData
- [ ] **eco-conception/_slug.vue** : Renommer en `[slug].vue` + migrer

**Voir exemples** : `MIGRATION_PLAN_NUXT3.md` section "Étape 2E"

- **Temps estimé** : 2-3h

---

#### ✅ PHASE2-06 : Test local
- [ ] **Commandes** :
  ```bash
  yarn dev
  # Ouvrir http://localhost:3000
  ```

- [ ] **Vérifier** :
  - [ ] Page d'accueil s'affiche
  - [ ] Navigation fonctionne
  - [ ] Articles s'affichent
  - [ ] Aucune erreur console

- **Temps estimé** : 30 min

---

#### ✅ PHASE2-07 : Git commit Phase 2
- [ ] **Commit** :
  ```bash
  git add .
  git commit -m "feat(migration): Phase 2 - Components & Pages migration
  
  - Migrate all components to Composition API
  - Replace lozad with NuxtImg
  - Rename components (Base*, The* conventions)
  - Add :key to all v-for
  - Migrate pages (asyncData → useAsyncData)"
  
  git push origin feature/nuxt3-migration
  ```
- **Temps estimé** : 5 min

---

### 📝 PHASE 3 : Content & Store (Jour 4)

#### ✅ PHASE3-01 : Vérifier articles Markdown
- [ ] **Frontmatter** : Ajouter champs manquants
  ```yaml
  ---
  title: Titre
  description: Description
  date: 2024-01-15
  image: /img/cover.jpg
  tags:
    - WebDesign
    - Eco-conception
  ---
  ```
- **Temps estimé** : 30 min

---

#### ✅ PHASE3-02 : Migrer store (optionnel)
**Choix** : Garder Vuex OU migrer vers Pinia

- [ ] **Option A** : Garder Vuex
  ```bash
  yarn add vuex@4
  ```

- [ ] **Option B** : Migrer vers Pinia (RECOMMANDÉ)
  ```bash
  yarn add pinia @pinia/nuxt
  ```
  - Voir `MIGRATION_PLAN_NUXT3.md` section "Étape 3B"

- **Temps estimé** : 1-2h

---

#### ✅ PHASE3-03 : Créer RSS Feed (Nitro routes)
- [ ] **Créer** : `server/routes/rss.xml.ts`
- [ ] **Créer** : `server/routes/feed.json.ts`
- Voir contenu dans `MIGRATION_PLAN_NUXT3.md` section "Étape 3D"
- **Temps estimé** : 45 min

---

#### ✅ PHASE3-04 : Supprimer plugins obsolètes
- [ ] **Supprimer** : `plugins/vimg.js` (déjà fait en Phase 2)
- [ ] **Vérifier** : Aucun autre plugin custom
- **Temps estimé** : 5 min

---

#### ✅ PHASE3-05 : Git commit Phase 3
- [ ] **Commit** :
  ```bash
  git add .
  git commit -m "feat(migration): Phase 3 - Content & Store
  
  - Update articles frontmatter
  - Migrate store to Pinia
  - Create RSS/Feed Nitro routes
  - Remove obsolete plugins"
  
  git push origin feature/nuxt3-migration
  ```
- **Temps estimé** : 5 min

---

### 🎨 PHASE 4 : Assets & Styles (Jour 5)

#### ✅ PHASE4-01 : Finaliser variables CSS
- [ ] **Remplacer TOUTES les variables SCSS** dans :
  - [ ] `assets/css/main.scss`
  - [ ] Tous les composants `<style scoped>`

- [ ] **Supprimer** : `assets/css/vars/_colors.scss` (optionnel)
- [ ] **Supprimer** : `assets/css/vars/_typo.scss` (optionnel)

- **Temps estimé** : 2h

---

#### ✅ PHASE4-02 : Optimiser images
- [ ] **Convertir en WebP/AVIF** (fait auto par NuxtImg)
- [ ] **Compresser PNGs** :
  ```bash
  cd static
  npx @squoosh/cli --resize '{"width":96}' -d . favicon-96x96.png
  ```
- **Temps estimé** : 30 min

---

#### ✅ PHASE4-03 : Fonts auto-hébergées
- [ ] **Option A** : Google Fonts local
  ```bash
  yarn add @nuxtjs/google-fonts
  ```

- [ ] **Option B** : Fontsource
  ```bash
  yarn add @fontsource/[nom-font]
  ```

- [ ] **Supprimer** : Typekit dans nuxt.config.ts
- Voir `MIGRATION_PLAN_NUXT3.md` section "Étape 4C"
- **Temps estimé** : 45 min

---

#### ✅ PHASE4-04 : Git commit Phase 4
- [ ] **Commit** :
  ```bash
  git add .
  git commit -m "feat(migration): Phase 4 - Assets & Styles
  
  - Migrate all SCSS vars to CSS custom properties
  - Optimize images
  - Self-host fonts (remove Typekit)"
  
  git push origin feature/nuxt3-migration
  ```
- **Temps estimé** : 5 min

---

### 🧪 PHASE 5 : Tests & Optimisations (Jour 6)

#### ✅ PHASE5-01 : Tests fonctionnels
- [ ] **Generate** :
  ```bash
  yarn generate
  yarn preview
  ```

- [ ] **Tester TOUTES les pages** :
  - [ ] `/`
  - [ ] `/eco-conception`
  - [ ] `/eco-conception/L-eco-conception-web`
  - [ ] `/eco-conception/La-consommation-energetique-du-numerique`
  - [ ] `/eco-conception/theme-wordpress-eco-conception`
  - [ ] `/portfolio`
  - [ ] `/contact`
  - [ ] `/mentions-legales`
  - [ ] `/rss.xml`
  - [ ] `/feed.json`
  - [ ] `/sitemap.xml`

- **Temps estimé** : 30 min

---

#### ✅ PHASE5-02 : Lighthouse audit
- [ ] **Run** :
  ```bash
  npx lighthouse http://localhost:3000 \
    --output json html \
    --output-path ./lighthouse-after
  ```

- [ ] **Objectifs** :
  - [ ] Performance ≥ 90
  - [ ] Accessibility ≥ 90
  - [ ] Best Practices ≥ 95
  - [ ] SEO ≥ 95

- **Temps estimé** : 15 min

---

#### ✅ PHASE5-03 : EcoIndex
- [ ] **URL** : https://www.ecoindex.fr/
- [ ] **Tester** : http://localhost:3000
- [ ] **Objectif** : Score A ou B
- **Temps estimé** : 10 min

---

#### ✅ PHASE5-04 : Accessibilité WAVE
- [ ] **Installer** : Extension WAVE
- [ ] **Tester** : Chaque page
- [ ] **Objectif** : 0 erreur critique
- **Temps estimé** : 20 min

---

#### ✅ PHASE5-05 : Créer netlify.toml
- [ ] **Créer** : `netlify.toml`
  - Voir contenu dans `MIGRATION_PLAN_NUXT3.md` section "Étape 5E"
- **Temps estimé** : 10 min

---

#### ✅ PHASE5-06 : Git commit Phase 5
- [ ] **Commit** :
  ```bash
  git add .
  git commit -m "feat(migration): Phase 5 - Tests & optimizations complete
  
  - Lighthouse score: 95/100
  - EcoIndex: A
  - Accessibility: WCAG AA compliant
  - All routes prerendered
  - Netlify config added"
  
  git push origin feature/nuxt3-migration
  ```
- **Temps estimé** : 5 min

---

## 🚀 DÉPLOIEMENT (Jour 6 fin)

### ✅ DEPLOY-01 : Merge & Deploy
- [ ] **GitHub** : Créer Pull Request
- [ ] **Review** : Vérifier diff
- [ ] **Merge** : Vers `main`
- [ ] **Netlify** : Auto-deploy
- **Temps estimé** : 15 min

---

### ✅ DEPLOY-02 : Tests production
- [ ] **Lighthouse production** :
  ```bash
  npx lighthouse https://beabot.netlify.app \
    --output json html \
    --output-path ./lighthouse-prod
  ```

- [ ] **Vérifier URLs** :
  ```bash
  curl -I https://beabot.netlify.app
  curl -I https://beabot.netlify.app/eco-conception
  curl -I https://beabot.netlify.app/rss.xml
  ```

- [ ] **EcoIndex production** : https://www.ecoindex.fr/
- **Temps estimé** : 20 min

---

### ✅ DEPLOY-03 : Monitoring
- [ ] **Créer** : `scripts/monitor.sh`
  - Voir contenu dans `MIGRATION_PLAN_NUXT3.md` section "Étape 6D"

- [ ] **Cron job** : Exécuter toutes les heures
- **Temps estimé** : 15 min

---

## 🟢 P2 - AMÉLIORATIONS (après migration)

### ✅ FEATURE-01 : Dark mode
- [ ] Utiliser CSS variables
- [ ] Ajouter toggle
- [ ] Persister préférence
- **Temps estimé** : 2h

---

### ✅ FEATURE-02 : Reading time
- [ ] Calculer temps lecture articles
- [ ] Afficher dans ArticleCard
- **Temps estimé** : 1h

---

### ✅ FEATURE-03 : Related articles
- [ ] Algorithme de similarité (tags)
- [ ] Afficher 3 articles similaires
- **Temps estimé** : 2h

---

### ✅ FEATURE-04 : Search
- [ ] Intégrer Fuse.js ou Algolia
- [ ] Composant SearchBar
- **Temps estimé** : 3h

---

### ✅ FEATURE-05 : Analytics
- [ ] Plausible ou Matomo (privacy-friendly)
- [ ] Dashboard simple
- **Temps estimé** : 1h

---

### ✅ SEO-01 : Structured data
- [ ] JSON-LD pour articles
- [ ] Breadcrumbs
- [ ] Organization schema
- **Temps estimé** : 2h

---

### ✅ SEO-02 : Open Graph images
- [ ] Générer OG images dynamiques
- [ ] @nuxt/og-image
- **Temps estimé** : 1h

---

## 📋 CHECKLISTS DE VALIDATION

### ✅ Avant chaque commit
- [ ] `yarn lint` passe sans erreur
- [ ] `yarn dev` démarre sans erreur
- [ ] Tester les pages modifiées
- [ ] Message commit conventionnel

### ✅ Avant chaque push
- [ ] Tous les tests passent
- [ ] Build réussit (`yarn build`)
- [ ] Generate réussit (`yarn generate`)
- [ ] Preview fonctionne (`yarn preview`)

### ✅ Avant merge sur main
- [ ] Lighthouse ≥ 90 (toutes catégories)
- [ ] EcoIndex A ou B
- [ ] WAVE 0 erreur
- [ ] Toutes les fonctionnalités testées
- [ ] Documentation mise à jour

---

## 📊 MÉTRIQUES À TRACKER

### Performance
- [ ] Lighthouse Performance : ___/100
- [ ] FCP : ___s
- [ ] LCP : ___s
- [ ] TBT : ___ms
- [ ] CLS : ___

### Éco-conception
- [ ] EcoIndex : ___
- [ ] CO2/page : ___g
- [ ] Poids page : ___KB
- [ ] Requêtes HTTP : ___

### Accessibilité
- [ ] Lighthouse A11y : ___/100
- [ ] Erreurs WAVE : ___
- [ ] Ratio contraste min : ___:1

### Code Quality
- [ ] Score Vue.js : ___/100
- [ ] ESLint errors : ___
- [ ] TS errors : ___

### Build
- [ ] Bundle size : ___KB (-___%)
- [ ] Build time : ___s (-___%)

---

## 🎯 RAPPELS IMPORTANTS

### ⚠️ À FAIRE ABSOLUMENT
1. ✅ Backup AVANT toute modification majeure
2. ✅ Tester APRÈS chaque changement
3. ✅ Commit fréquemment avec messages clairs
4. ✅ Vérifier accessibilité (WAVE)
5. ✅ Lire la doc Nuxt 3 en cas de doute

### ❌ À NE JAMAIS FAIRE
1. ❌ Push directement sur `main` sans PR
2. ❌ Supprimer `.git/` ou `node_modules/` sans backup
3. ❌ Ignorer erreurs TypeScript
4. ❌ Deploy sans tester localement
5. ❌ Oublier les `alt` sur images

---

## 📞 AIDE & RESSOURCES

### En cas de blocage
1. Lire `CLAUDE.md` (contexte projet)
2. Lire `MIGRATION_PLAN_NUXT3.md` (détails phase)
3. Lire doc officielle Nuxt 3
4. Chercher sur Discord Nuxt
5. Créer issue GitHub

### Documentation utile
- [Nuxt 3 Docs](https://nuxt.com/docs)
- [Vue 3 Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)
- [@nuxt/content v2](https://content.nuxt.com/)
- [@nuxt/image](https://image.nuxt.com/)

---

## 📝 NOTES

### Décisions importantes
- **Date** : 6 décembre 2025
- **Décision** : Migration Nuxt 3 validée
- **Priorité** : Quick fixes PUIS migration

### Prochaine session
- **Focus** : Quick fixes P0
- **Durée estimée** : 2-3h
- **Objectif** : Corriger problèmes critiques

---

**📌 Ce fichier est un document vivant. Mettre à jour après chaque tâche complétée.**

**✅ Marquer les tâches terminées avec [x]**  
**🔄 Tâches en cours : [~]**  
**❌ Tâches bloquées : [!]**  

---

**Généré par** : Claude Code  
**Date** : 6 décembre 2025  
**Projet** : BeAbot - Migration Nuxt 2→3  
**Version TODO** : 1.0.0
