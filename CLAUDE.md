# 🤖 CLAUDE.md - Contexte Projet BeAbot

> **Ce fichier est destiné à Claude Code pour comprendre le contexte du projet lors de futures sessions.**

---

## 📋 INFORMATIONS PROJET

### Identité
- **Nom** : BeAbot
- **Type** : Blog statique + Portfolio
- **Thématique** : Éco-conception web
- **URL Production** : https://beabot.netlify.app
- **URL Cible** : https://beabot.netlify.app
- **Repository** : https://github.com/benabot/beabot
- **Repo Local** : `/Users/benoitabot/Sites/beabot`

### Propriétaire
- **Nom** : Benoît Abot
- **Email** : hello@beabot.fr
- **Twitter** : @BenoitAbot
- **GitHub** : benabot
- **LinkedIn** : benoit-abot

### Stack Technique Actuelle (Avant Migration)
```json
{
  "framework": "Nuxt 2.15.8",
  "vue": "2.6.14",
  "bundler": "Webpack 4.46.0",
  "package-manager": "Yarn 1.22+",
  "hosting": "Netlify",
  "cms": "@nuxt/content v1.15.1",
  "node": "≥ 14"
}
```

### Stack Cible (Après Migration)
```json
{
  "framework": "Nuxt 3.14+",
  "vue": "3.5+",
  "bundler": "Vite",
  "package-manager": "Yarn",
  "hosting": "Netlify",
  "cms": "@nuxt/content v2.13+",
  "node": "≥ 18"
}
```

---

## 🎯 OBJECTIFS DU PROJET

### 1. Migration Technique
- ✅ Migrer Nuxt 2 → Nuxt 3
- ✅ Vue 2 → Vue 3 (Options API → Composition API)
- ✅ Webpack → Vite
- ✅ Remplacer modules obsolètes

### 2. Amélioration Qualité Code
- ✅ Score bonnes pratiques Vue.js : **65 → 95/100**
- ✅ Conventions de nommage cohérentes
- ✅ TypeScript (optionnel mais recommandé)
- ✅ ESLint + Prettier configurés

### 3. Performance & Éco-conception
- ✅ Lighthouse Performance : **90+**
- ✅ EcoIndex : **A ou B**
- ✅ Réduction bundle : **-40%**
- ✅ Build time : **-50%**

### 4. Accessibilité
- ✅ WCAG 2.1 niveau AA
- ✅ Images avec `alt`
- ✅ Contraste couleurs conforme
- ✅ Navigation clavier

### 5. SEO
- ✅ Meta tags corrects (encodage UTF-8)
- ✅ Sitemap.xml généré
- ✅ RSS/JSON Feed
- ✅ Structured data

---

## 📂 STRUCTURE DU PROJET

```
beabot/
├── .git/
├── .nuxt/                    # Cache Nuxt (généré)
├── node_modules/             # Dépendances (généré)
├── dist/                     # Build production (généré)
│
├── assets/
│   ├── css/
│   │   ├── main.scss         # Styles principaux
│   │   ├── vars/
│   │   │   ├── _colors.scss  # Variables couleurs (à migrer → CSS vars)
│   │   │   └── _typo.scss    # Variables typo (à migrer → CSS vars)
│   │   └── mixins/
│   └── img/                  # Images assets (require())
│
├── components/               # 10 composants Vue
│   ├── AppSearchInput.vue
│   ├── BoiteArticle.vue     # À renommer → ArticleCard.vue
│   ├── Boutoncta.vue        # À renommer → BaseButton.vue
│   ├── Footer.vue           # À renommer → TheFooter.vue
│   ├── Logo.vue             # À renommer → TheLogo.vue
│   ├── Oeuf.vue
│   ├── OeufImage.vue
│   ├── Petittitre.vue       # À renommer → BaseHeading.vue
│   ├── PrevNext.vue         # À renommer → ArticleNavigation.vue
│   └── VImg.vue             # À SUPPRIMER (remplacer par NuxtImg)
│
├── content/
│   └── articles/            # 3 articles Markdown
│       ├── L-eco-conception-web.md
│       ├── La-consommation-energetique-du-numerique.md
│       └── theme-wordpress-eco-conception.md
│
├── layouts/
│   ├── default.vue
│   └── error.vue
│
├── pages/                   # 5 pages
│   ├── index.vue            # Page d'accueil
│   ├── contact.vue
│   ├── portfolio.vue
│   ├── mentions-legales.vue
│   ├── eco-conception.vue   # Liste articles
│   └── eco-conception/
│       └── _slug.vue        # À renommer → [slug].vue (Nuxt 3)
│
├── plugins/
│   └── vimg.js              # À SUPPRIMER (auto-import Nuxt 3)
│
├── static/                  # Fichiers publics
│   ├── favicon.svg
│   ├── favicon-*.png
│   ├── beabot.svg
│   └── logoOrdi*.svg
│
├── store/                   # Vuex (à migrer → Pinia optionnel)
│   ├── page.js
│   └── tags.js
│
├── utils/
│   ├── getRoutes.js
│   └── getSiteMeta.js
│
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── nuxt.config.js           # À renommer → nuxt.config.ts
├── package.json             # À mettre à jour (Nuxt 3)
├── yarn.lock
├── README.md
│
└── AUDITS/                  # Documents générés par Claude
    ├── AUDIT_BEABOT.md
    ├── VUE_BEST_PRACTICES_AUDIT.md
    ├── MIGRATION_PLAN_NUXT3.md
    ├── CLAUDE.md            # Ce fichier
    └── TODO.md              # Liste des tâches
```

---

## 🔴 PROBLÈMES CRITIQUES IDENTIFIÉS

### 1. Encodage UTF-8 Cassé
**Fichier** : `nuxt.config.js`  
**Lignes** : 30, 36, 42, 58, 256, etc.
```js
// ❌ PROBLÈME
content: 'Lâ€™Ã©co-conception web...'

// ✅ SOLUTION
content: "L'éco-conception web..."
```
**Action** : Réenregistrer le fichier en UTF-8

### 2. v-for sans :key
**Fichiers** : `BoiteArticle.vue`, `Footer.vue`, `pages/index.vue`
```vue
<!-- ❌ PROBLÈME -->
<div v-for="chip in chips">{{ chip }}</div>

<!-- ✅ SOLUTION -->
<div v-for="(chip, index) in chips" :key="`chip-${index}`">
  {{ chip }}
</div>
```
**Action** : Ajouter `:key` partout

### 3. Images sans alt
**Fichiers** : `BoiteArticle.vue`, `Logo.vue`
```vue
<!-- ❌ PROBLÈME -->
<div class="boite-image__image lozad" :data-background-image="url"></div>

<!-- ✅ SOLUTION -->
<NuxtImg :src="url" :alt="titre" loading="lazy" />
```
**Action** : Attributs `alt` partout

### 4. Modules Obsolètes
```json
{
  "❌": [
    "@ax2/lozad-module",
    "nuxt-precompress",
    "nuxt-purgecss",
    "@nuxtjs/axios",
    "nuxt-font-loader",
    "@nuxtjs/style-resources"
  ],
  "✅": [
    "@nuxt/image",
    "Compression Netlify native",
    "UnoCSS ou Tailwind",
    "$fetch natif",
    "@nuxtjs/google-fonts",
    "Vite preprocessorOptions"
  ]
}
```

### 5. Font Externe (Anti-éco-conception)
```js
// ❌ PROBLÈME
fontLoader: {
  url: 'https://use.typekit.net/akf4akv.css'
}

// ✅ SOLUTION
// Utiliser @fontsource ou Google Fonts auto-hébergées
```

---

## 🎨 CONVENTIONS & STANDARDS

### Nommage Composants
```
✅ TheHeader.vue          # Unique par page
✅ TheFooter.vue          # Unique par page
✅ TheLogo.vue            # Unique par page

✅ BaseButton.vue         # Composant de base réutilisable
✅ BaseHeading.vue        # Composant de base réutilisable
✅ BaseImage.vue          # Composant de base réutilisable

✅ ArticleCard.vue        # Composant feature
✅ ArticleNavigation.vue  # Composant feature
✅ AppSearchInput.vue     # Composant app-level

❌ VImg.vue               # Mauvais (pas multi-word)
❌ Boutoncta.vue          # Mauvais (pas PascalCase)
❌ Petittitre.vue         # Mauvais (pas PascalCase)
```

### Variables CSS
```scss
/* ❌ AVANT (SCSS variables) */
$gris4: #A6A5A4;
$vert: #04d94f;

.text-gris4 { color: $gris4; }
```

```css
/* ✅ APRÈS (CSS variables) */
:root {
  --color-gray-400: #A6A5A4;
  --color-green: #04d94f;
}

.text-gray-400 { color: var(--color-gray-400); }
```

### Composition API (Nuxt 3)
```vue
<!-- ❌ AVANT (Options API) -->
<script>
export default {
  name: 'Footer',
  data() {
    return {
      annee: new Date().getFullYear()
    }
  }
}
</script>

<!-- ✅ APRÈS (Composition API) -->
<script setup>
const annee = ref(new Date().getFullYear())
</script>
```

### @nuxt/content v2
```vue
<!-- ❌ AVANT (v1) -->
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  }
}
</script>

<!-- ✅ APRÈS (v2) -->
<script setup>
const route = useRoute()
const { data: article } = await useAsyncData('article', () =>
  queryContent('articles', route.params.slug).findOne()
)
</script>
```

---

## 🛠️ COMMANDES UTILES

### Développement
```bash
cd /Users/benoitabot/Sites/beabot

# Installer dépendances
yarn install

# Dev server (Nuxt 2)
yarn dev
# http://localhost:3000

# Dev server (Nuxt 3 après migration)
yarn dev
# http://localhost:3000

# Build
yarn build

# Generate static
yarn generate

# Preview build
yarn preview
```

### Linting
```bash
# Lint JS/Vue
yarn lint:js

# Lint format
yarn lint:prettier

# Tout linter
yarn lint

# Fix auto
yarn lintfix
```

### Tests Performance
```bash
# Lighthouse
npx lighthouse http://localhost:3000 \
  --output html \
  --output-path ./lighthouse-report.html

# EcoIndex
# Aller sur https://www.ecoindex.fr/

# Accessibilité WAVE
# Installer extension Chrome/Firefox
```

### Git Workflow
```bash
# Créer branche migration
git checkout -b feature/nuxt3-migration

# Créer sous-branches par phase
git checkout -b feature/nuxt3-phase1-deps
git checkout -b feature/nuxt3-phase2-components

# Commit conventionnel
git commit -m "feat(migration): Phase 1 - Update dependencies"
git commit -m "fix(a11y): Add alt attributes to all images"
git commit -m "refactor(components): Rename to Base* conventions"
```

---

## 📊 MÉTRIQUES CIBLES

### Performance
- **Lighthouse Performance** : ≥ 90
- **First Contentful Paint** : < 1s
- **Largest Contentful Paint** : < 2s
- **Time to Interactive** : < 3s
- **Total Blocking Time** : < 200ms

### Éco-conception
- **EcoIndex** : A ou B
- **CO2 par page** : < 1g
- **Poids page** : < 500KB
- **Requêtes HTTP** : < 20

### Accessibilité
- **Lighthouse Accessibility** : ≥ 90
- **Contraste minimum** : 4.5:1 (WCAG AA)
- **Erreurs WAVE** : 0

### SEO
- **Lighthouse SEO** : ≥ 95
- **Meta tags** : Tous présents
- **Sitemap** : Généré
- **Structured data** : Optionnel

### Code Quality
- **Score Vue.js Best Practices** : ≥ 90/100
- **ESLint errors** : 0
- **TypeScript errors** : 0 (si activé)

---

## 🚨 GARDE-FOUS

### À NE JAMAIS FAIRE
- ❌ Supprimer `.git/` ou `node_modules/` sans backup
- ❌ Push directement sur `main` sans PR
- ❌ Modifier `yarn.lock` manuellement
- ❌ Ignorer les erreurs TypeScript
- ❌ Deploy sans tester localement
- ❌ Oublier les `alt` sur images
- ❌ Hard-coder des URLs

### À TOUJOURS FAIRE
- ✅ Backup avant changements majeurs
- ✅ Tester après chaque modification
- ✅ Commit fréquemment avec messages clairs
- ✅ Vérifier Lighthouse après chaque phase
- ✅ Tester accessibilité (WAVE)
- ✅ Lire la doc officielle Nuxt 3
- ✅ Demander confirmation avant actions destructives

---

## 📚 RESSOURCES ESSENTIELLES

### Documentation
- [Nuxt 3 Docs](https://nuxt.com/docs)
- [Nuxt 3 Migration Guide](https://nuxt.com/docs/migration/overview)
- [Vue 3 Docs](https://vuejs.org/)
- [Vue 3 Migration Guide](https://v3-migration.vuejs.org/)
- [@nuxt/content v2](https://content.nuxt.com/)
- [@nuxt/image](https://image.nuxt.com/)
- [Vite Docs](https://vitejs.dev/)

### Outils
- [Lighthouse](https://pagespeed.web.dev/)
- [EcoIndex](https://www.ecoindex.fr/)
- [WAVE](https://wave.webaim.org/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Can I Use](https://caniuse.com/)

### Communauté
- [Nuxt Discord](https://discord.com/invite/nuxt)
- [Vue Land Discord](https://discord.com/invite/vue)
- [GitHub Issues](https://github.com/nuxt/nuxt/issues)

---

## 🤝 WORKFLOW AVEC CLAUDE CODE

### Session Type 1 : Quick Fix
```markdown
"Claude, corrige le problème X dans le fichier Y"

Exemple :
"Claude, ajoute les attributs alt manquants sur toutes les images du projet"
```

### Session Type 2 : Feature
```markdown
"Claude, implémente la fonctionnalité X en suivant les conventions du projet"

Exemple :
"Claude, crée un composant ArticleCard avec les props définies dans VUE_BEST_PRACTICES_AUDIT.md"
```

### Session Type 3 : Migration Phase
```markdown
"Claude, exécute la Phase X du MIGRATION_PLAN_NUXT3.md"

Exemple :
"Claude, exécute la Phase 1 du plan de migration (dépendances & configuration)"
```

### Session Type 4 : Review
```markdown
"Claude, analyse le fichier X et suggère des améliorations selon les standards du projet"

Exemple :
"Claude, review components/BoiteArticle.vue et applique les bonnes pratiques Vue.js"
```

---

## 💡 NOTES IMPORTANTES

### Préférences Benoît
- **OS** : macOS + Debian
- **Shell** : ZSH
- **Éditeur** : VS Code (probable)
- **Stack** : Frontend JS/PHP, DevOps Docker
- **Apprentissage** : C, Swift

### Particularités Projet
1. **Thème éco-conception** : Chaque décision doit être cohérente avec cette valeur
2. **Site vitrine + blog** : Pas de fonctionnalités complexes
3. **Génération statique** : Pas de backend, tout en JAMstack
4. **Netlify** : Deploy automatique sur push main
5. **Yarn** : Ne PAS utiliser npm

### Priorités
1. 🔴 **Accessibilité** : WCAG AA minimum
2. 🔴 **Performance** : Lighthouse 90+
3. 🟡 **Éco-conception** : EcoIndex A/B
4. 🟡 **SEO** : Meta tags corrects
5. 🟢 **Esthétique** : Important mais secondaire

---

## 📞 CONTACT & SUPPORT

### En cas de blocage
1. Lire la documentation officielle Nuxt 3
2. Chercher dans les Issues GitHub Nuxt
3. Demander sur Discord Nuxt
4. Contacter Benoît : hello@beabot.fr

### Reporting Bugs
```markdown
**Titre** : [BUG] Description courte

**Environnement** :
- OS : macOS
- Node : 18.x
- Yarn : 1.22.x
- Nuxt : 2.15.8 ou 3.14.0

**Étapes pour reproduire** :
1. ...
2. ...

**Comportement attendu** :
...

**Comportement actuel** :
...

**Screenshots** :
...
```

---

## ✅ STATUT ACTUEL (6 décembre 2025)

### Audits Complétés
- ✅ AUDIT_BEABOT.md (audit technique complet)
- ✅ VUE_BEST_PRACTICES_AUDIT.md (score 65/100)
- ✅ MIGRATION_PLAN_NUXT3.md (plan 5 phases)
- ✅ CLAUDE.md (ce fichier)
- ⏳ TODO.md (en cours de création)

### Prochaines Actions
1. Lire TODO.md
2. Décider : Quick fixes OU Migration complète
3. Exécuter selon priorités
4. Tester à chaque étape
5. Commit + Push

### Rappels
- 🔴 Backup fait avant modifications majeures
- 🔴 Git branch `feature/nuxt3-migration` à créer
- 🔴 Tester localement AVANT deploy
- 🟢 Documentation à jour après chaque phase

---

**📝 Document maintenu par** : Claude Code  
**📅 Dernière mise à jour** : 6 décembre 2025  
**📌 Version** : 1.0.0  
**🎯 Projet** : BeAbot - Migration Nuxt 2→3
