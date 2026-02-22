# 🔍 AUDIT COMPLET - BeAbot

**Projet** : Blog Nuxt statique sur l'éco-conception web + portfolio  
**URL** : https://beabot.netlify.app  
**Date audit** : 6 décembre 2025  
**Objectif** : Migration Nuxt 2→3 + optimisations performance/accessibilité/éco-conception

---

## 📊 1. CONTEXTE TECHNIQUE ACTUEL

### Versions installées
```json
{
  "nuxt": "^2.15.8",
  "vue": "^2.6.14",
  "node": "à vérifier localement",
  "yarn": "utilisé (yarn.lock présent)"
}
```

### Type de projet
- **Target** : `static` (génération statique)
- **Déploiement** : Netlify
- **Gestionnaire de paquets** : Yarn
- **Langue** : Français
- **Thématique** : Éco-conception web

---

## 🏗️ 2. STRUCTURE DU PROJET

### Architecture détectée
```
/mnt/project/
├── package.json ✅
├── nuxt_config.js ✅ (à renommer nuxt.config.ts)
├── yarn.lock ✅
├── README.md
└── site/ (contient juste l'URL)
```

~~**⚠️ PROBLÈME** : Les dossiers suivants ne sont PAS visibles dans `/mnt/project/` :~~
- ~~`components/` (composants Vue)~~
- ~~`pages/` (routes)~~
- ~~`layouts/` (layouts)~~
- ~~`assets/` (CSS, images)~~
- ~~`content/` (articles Markdown via @nuxt/content)~~
- ~~`plugins/` (plugin vimg.js mentionné)~~
- ~~`static/` (favicon, images publiques)~~

~~**Action requise** : Tu devras me donner accès à la structure complète du repo local pour analyser :~~
- ~~Le nombre de composants~~
- ~~Les bonnes pratiques Vue.js appliquées~~
- ~~Le CSS (SCSS) utilisé~~
- ~~La structure des articles~~

---

## 📦 3. DÉPENDANCES & COMPATIBILITÉ NUXT 3

### ✅ Modules compatibles Nuxt 3 (migration facilitée)
| Module Nuxt 2 | Équivalent Nuxt 3 | Migration |
|---------------|-------------------|-----------|
| `@nuxt/content` v1 | `@nuxt/content` v2 | **Breaking changes importants** |
| `@nuxtjs/sitemap` v2 | `@nuxtjs/sitemap` v3+ | Facile |
| `@nuxtjs/feed` | `nuxt-feed-module` ou RSS natif | À remplacer |

### ⚠️ Modules INCOMPATIBLES / OBSOLÈTES
| Module | Statut | Alternative Nuxt 3 |
|--------|--------|-------------------|
| `@ax2/lozad-module` | **Obsolète** | `nuxt-lazy-load` ou Intersection Observer natif |
| `nuxt-precompress` | **Obsolète** | Compression Netlify/Nitro native |
| `nuxt-purgecss` | **Obsolète** | PurgeCSS intégré dans Tailwind ou UnoCSS |
| `@nuxtjs/axios` | **Remplacé** | `$fetch` / `useFetch` natif Nuxt 3 |
| `nuxt-font-loader` | **Obsolète** | `@nuxtjs/google-fonts` ou CSS natif |
| `@nuxtjs/style-resources` | **Obsolète** | `vite.css.preprocessorOptions` |

### 🔄 Dépendances à mettre à jour

#### **PRIORITÉ 1 - Framework**
```json
"nuxt": "^2.15.8" → "nuxt": "^3.14.0"
"vue": "^2.6.14" → "vue": "^3.5.0"
"@nuxt/content": "^1.15.1" → "@nuxt/content": "^2.13.2"
```

#### **PRIORITÉ 2 - Tooling**
```json
"webpack": "^4.46.0" → SUPPRIMER (Vite par défaut)
"core-js": "^3.19.3" → VÉRIFIER si nécessaire
"sass-loader": "10.1.1" → "sass": "^1.80.0" (Vite le gère)
```

#### **PRIORITÉ 3 - ESLint**
```json
"eslint": "^8.4.1" → "eslint": "^9.15.0"
"@nuxtjs/eslint-config": "^8.0.0" → "@nuxt/eslint-config": "^0.7.3"
"babel-eslint": "^10.1.0" → SUPPRIMER (ESLint 9+ n'en a plus besoin)
```

### 📊 Taille du yarn.lock
- **506K** : Très volumineux pour un site statique
- Attendu après migration Nuxt 3 : **~200-300K** (moins de dépendances transitives)

---

## ⚠️ 4. BREAKING CHANGES NUXT 2→3 DÉTECTÉS

### 🔴 CRITIQUES (bloquants)

#### 1. **Configuration Nuxt**
```js
// AVANT (nuxt.config.js)
export default {
  target: 'static',
  head: { /* ... */ },
  modules: ['@nuxtjs/axios'],
  build: { extractCSS: true }
}

// APRÈS (nuxt.config.ts)
export default defineNuxtConfig({
  ssr: false, // équivalent de target: 'static'
  app: {
    head: { /* ... */ }
  },
  modules: ['@nuxt/content'],
  experimental: {
    payloadExtraction: false
  }
})
```

#### 2. **@nuxt/content v1 → v2**
```js
// AVANT
const articles = await this.$content('articles').fetch()

// APRÈS
const { data: articles } = await useAsyncData('articles', () => 
  queryContent('articles').find()
)
```

#### 3. **Axios → $fetch natif**
```js
// AVANT
this.$axios.get('/api/data')

// APRÈS
await $fetch('/api/data')
// OU dans composant
const { data } = await useFetch('/api/data')
```

#### 4. **head() → useHead()**
```js
// AVANT
export default {
  head() {
    return { title: 'Mon titre' }
  }
}

// APRÈS
<script setup>
useHead({ title: 'Mon titre' })
</script>
```

### 🟡 MOYENNES (ajustements nécessaires)

#### 5. **Compression (nuxt-precompress obsolète)**
- **Problème** : `nuxt-precompress` ne fonctionne plus
- **Solution** : 
  - Utiliser la compression Netlify (headers `/_headers`)
  - Ou Nitro preset avec compression intégrée

#### 6. **PurgeCSS obsolète**
```js
// AVANT
buildModules: ['nuxt-purgecss']

// APRÈS
// Option 1 : UnoCSS (recommandé)
modules: ['@unocss/nuxt']

// Option 2 : Tailwind avec PurgeCSS intégré
modules: ['@nuxtjs/tailwindcss']
```

#### 7. **Lazy loading images (lozad-module)**
```vue
<!-- AVANT -->
<img v-lozad data-src="/image.jpg" />

<!-- APRÈS (Nuxt 3 Image) -->
<NuxtImg src="/image.jpg" loading="lazy" />
```

#### 8. **Style resources**
```js
// AVANT
styleResources: {
  scss: ['~/assets/css/vars/*.scss']
}

// APRÈS
vite: {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "~/assets/css/vars/_all.scss";'
      }
    }
  }
}
```

### 🟢 MINEURES (automatiques via Nuxt Bridge)

#### 9. **Composants auto-importés**
- Déjà activé avec `components: true` ✅
- Fonctionne pareil en Nuxt 3

#### 10. **Transitions pages**
```js
// AVANT
pageTransition: 'page'

// APRÈS
app: {
  pageTransition: { name: 'page', mode: 'out-in' }
}
```

---

## 🎯 5. BONNES PRATIQUES VUE.JS - SCORE ACTUEL

**⚠️ Impossible d'analyser sans accès aux composants Vue**

Voici ce que je vais vérifier dès que tu me donneras accès aux fichiers :

### ✅ Checklist des 18 bonnes pratiques

| # | Règle | À vérifier | Impact |
|---|-------|-----------|--------|
| 1 | **v-for avec :key** | Tous les `v-for` dans `components/` et `pages/` | 🔴 CRITIQUE |
| 2 | **data() retourne fonction** | Tous les composants avec `data` | 🟡 MOYEN |
| 3 | **$refs vs document.querySelector** | Plugin `vimg.js` + composants | 🟡 MOYEN |
| 4 | **Events kebab-case** | Émissions `$emit` | 🟢 MINEUR |
| 5 | **Props validation** | Tous les composants | 🟡 MOYEN |
| 6 | **Computed vs methods** | Performance | 🟡 MOYEN |
| 7 | **Nommage composants** | The*/Base* | 🟢 MINEUR |
| 8 | **Scoped styles** | `<style scoped>` | 🟡 MOYEN |
| 9 | **Config globale** | `config/env.js` | 🟢 MINEUR |
| 10 | **Mixins vs Composition API** | Migration vers composables | 🔴 NUXT 3 |

**Exemple de ce que je détecterai :**

```vue
<!-- ❌ MAUVAIS -->
<div v-for="article in articles">
  {{ article.title }}
</div>

<!-- ✅ BON -->
<div v-for="article in articles" :key="article.slug">
  {{ article.title }}
</div>
```

---

## 🚀 6. PERFORMANCE & ÉCO-CONCEPTION

### Analyse du site en production (https://beabot.netlify.app)

#### ✅ Points positifs détectés
1. **Site statique** : Génération SSG = excellent pour la performance
2. **Compression activée** : gzip + brotli via `nuxt-precompress`
3. **Extraction CSS** : `extractCSS: true` = CSS séparé du JS
4. **Long cache** : `maxAge: 1 an` pour les assets statiques
5. **Prefetch désactivé** : `prefetchLinks: false` = économie de bande passante
6. **Lazy loading** : Images avec `@ax2/lozad-module`
7. **PurgeCSS** : CSS inutilisé supprimé

#### ⚠️ Problèmes détectés (à confirmer avec audit technique complet)

##### **1. Encodage des caractères cassés**
```js
// Dans nuxt.config.js (lignes 30, 36, 42, etc.)
content: 'Lâ€™Ã©co-conception web...'
//        ^^^^^^^ Encodage UTF-8 mal interprété
```
**Impact** : SEO dégradé, expérience utilisateur médiocre  
**Cause probable** : Mauvais charset dans l'éditeur ou git  
**Solution** : Réenregistrer les fichiers en UTF-8

##### **2. Font externe (Typekit)**
```js
fontLoader: {
  url: 'https://use.typekit.net/akf4akv.css',
}
```
**Impact éco-conception** :
- ❌ Requête externe bloquante
- ❌ SPOF (Single Point of Failure)
- ❌ Cookies tiers potentiels
- ❌ Empreinte carbone inutile

**Solution recommandée** :
```js
// Nuxt 3 : Utiliser @fontsource (fonts auto-hébergées)
npm install @fontsource/[nom-font]

// Dans app.vue
import '@fontsource/[nom-font]/400.css'
import '@fontsource/[nom-font]/700.css'
```

##### **3. Modules obsolètes = dette technique**
- `nuxt-precompress` → Compression Netlify native
- `nuxt-purgecss` → UnoCSS ou Tailwind
- `@ax2/lozad-module` → NuxtImg natif
- `@nuxtjs/axios` → $fetch natif

**Impact** : Maintenance impossible, failles de sécurité potentielles

##### **4. Webpack 4 vs Vite**
```json
"webpack": "^4.46.0" // 2021, obsolète
```
**Gains attendus avec Vite (Nuxt 3)** :
- ⚡ **Dev server** : 5x plus rapide
- ⚡ **Hot reload** : instantané
- 📦 **Build** : 2-3x plus rapide
- 🌱 **Bundle size** : -20% à -40%

---

## ♿ 7. ACCESSIBILITÉ (WCAG 2.1)

### Analyse du HTML rendu

#### ✅ Points positifs
```html
<html lang="fr"> ✅ Langue définie
<meta charset="utf-8"> ✅ Encodage déclaré
```

#### ⚠️ Points à vérifier (nécessite accès au code source)

| Critère WCAG | À vérifier | Priorité |
|--------------|-----------|----------|
| **Images** | Attributs `alt` sur toutes les images | 🔴 A |
| **Contraste** | Ratio 4.5:1 minimum | 🔴 A |
| **Navigation clavier** | `tabindex`, `focus-visible` | 🟡 AA |
| **ARIA** | Landmarks, roles, labels | 🟡 AA |
| **Formulaire contact** | Labels, erreurs explicites | 🔴 A |
| **Liens** | Texte descriptif (pas "cliquez ici") | 🟡 AA |
| **Headings** | Hiérarchie h1→h6 respectée | 🔴 A |

**Problème détecté sur la page d'accueil** :
```html
<a href="/eco-conception">Éco-conception</a>
<!-- ✅ BON : texte descriptif -->

<a href="#footer">Contact</a>
<!-- ⚠️ MOYEN : pourrait être plus explicite -->
```

---

## 🌱 8. ÉCO-CONCEPTION AVANCÉE

### Métriques à mesurer (localement ou avec outils)

#### **GreenFrame.io** (recommandé)
```bash
npx @greenframe/cli analyze https://beabot.netlify.app
```
**Mesure** :
- Consommation électrique (mWh)
- Émissions CO2 (gCO2e)
- Score A → E

#### **EcoIndex.fr**
- Score actuel : **à tester**
- Objectif : **A ou B** (≤1.5g CO2 / page)

#### **Carbon Calculator (Website Carbon)**
- https://www.websitecarbon.com/website/beabot-netlify-app/

### Optimisations éco-conception à implémenter

#### 1. **Réduire le poids des images**
```js
// Nuxt 3 Image avec formats modernes
<NuxtImg
  src="/beabot.svg"
  format="webp,avif"
  width="200"
  height="200"
  loading="lazy"
/>
```

#### 2. **Limiter les requêtes HTTP**
```js
// AVANT : 
// - Typekit CSS (externe)
// - Possible fonts WOFF2
// - Axios requests

// APRÈS :
// - Fonts auto-hébergées
// - $fetch avec cache
// - Preload critical assets
```

#### 3. **Optimiser le CSS**
```scss
// Utiliser des variables CSS natives
:root {
  --color-primary: #00b894;
  --spacing-unit: 1rem;
}

// Au lieu de SCSS partout
$color-primary: #00b894;
```

#### 4. **Service Worker (optionnel)**
```js
// Nuxt 3 PWA
modules: ['@vite-pwa/nuxt']

// Cache les assets critiques
```

---

## 📈 9. SEO ACTUEL

### Meta tags analysés

#### ✅ Bien configuré
```html
<title>BeAbot - Accueil - éco-conception web</title>
<meta name="description" content="..." />
<meta property="og:title" content="..." />
<meta property="og:image" content="https://beabot.fr/beabot.png" />
```

#### ⚠️ Problèmes
1. **Encodage cassé dans les meta** : `"Lâ€™Ã©co-conception"`
2. **URL incohérente** : 
   - Config : `https://beabot.fr`
   - Réel : `https://beabot.netlify.app`
3. **Sitemap** : À vérifier si `/sitemap.xml` est généré
4. **RSS** : `/rss.xml` configuré ✅

### Content @nuxt/content

#### Points positifs
```js
content: {
  markdown: {
    prism: { theme: '...' } // Syntax highlighting ✅
  }
}
```

#### À améliorer
- **Pas de Table of Contents automatique**
- **Pas de related articles**
- **Pas de reading time**

**Solution Nuxt 3 + @nuxt/content v2** :
```js
export default defineNuxtConfig({
  content: {
    highlight: {
      theme: 'dracula'
    },
    markdown: {
      toc: { depth: 3, searchDepth: 3 }
    }
  }
})
```

---

## 🔐 10. SÉCURITÉ

### Dépendances obsolètes = failles potentielles

```bash
# À exécuter localement
npm outdated
npm audit
```

**Packages critiques à vérifier** :
- `eslint` : v8.4.1 (vulnérabilités connues)
- `core-js` : v3.19.3 (obsolète)
- `webpack` : v4.46.0 (non maintenu)

**Action recommandée** :
```bash
npm audit fix
# OU migration Nuxt 3 qui upgrade tout
```

---

## 🎯 11. RECOMMANDATIONS GLOBALES

### Ordre de priorité pour la migration

#### **PHASE 1 : Préparation (1 jour)**
1. ✅ Lire cet audit
2. 📸 Screenshots des pages principales
3. 🧪 Tests manuels du site actuel
4. 📊 Mesures de performance baseline :
   - Lighthouse (perf, a11y, seo)
   - EcoIndex
   - WebPageTest
5. 🌿 Git : créer branche `feature/nuxt3-migration`

#### **PHASE 2 : Migration technique (2-3 jours)**
1. 🔧 Migration Nuxt 2→3 avec **Nuxt Bridge** (optionnel)
2. 📦 Mise à jour `package.json`
3. ⚙️ Conversion `nuxt.config.js` → `nuxt.config.ts`
4. 🧩 Migration composants (Options API → Composition API)
5. 📝 Migration `@nuxt/content` v1 → v2
6. 🎨 Migration CSS (SCSS → variables CSS)
7. 🖼️ Remplacement modules obsolètes

#### **PHASE 3 : Optimisations (1-2 jours)**
1. ♿ Audit accessibilité WCAG
2. 🌱 Optimisations éco-conception
3. 🚀 Performance (lazy loading, fonts, images)
4. 📊 SEO (meta, sitemap, structured data)

#### **PHASE 4 : Tests & déploiement (1 jour)**
1. 🧪 Tests manuels complets
2. 📈 Comparaison métriques avant/après
3. 🚀 Déploiement Netlify
4. 🎉 Célébration ! 🍾

---

## 📋 12. CHECKLIST DE MIGRATION

### Avant de commencer

- [ ] Backup complet du projet
- [ ] Git : commit propre de l'état actuel
- [ ] Node.js ≥ 18.x installé
- [ ] Yarn ≥ 1.22.x à jour
- [ ] Lecture complète de cet audit

### Fichiers à créer/modifier

#### Configuration
- [ ] `nuxt.config.ts` (conversion depuis .js)
- [ ] `tsconfig.json` (TypeScript optionnel mais recommandé)
- [ ] `app.vue` (layout global Nuxt 3)
- [ ] `.env.example` (variables d'environnement)

#### Dossiers à adapter
- [ ] `components/` → script setup
- [ ] `pages/` → script setup + useHead
- [ ] `content/` → vérifier compatibilité v2
- [ ] `assets/css/` → variables CSS natives
- [ ] `plugins/` → format Nuxt 3
- [ ] `middleware/` → format Nuxt 3

#### À supprimer
- [ ] `node_modules/`
- [ ] `yarn.lock` (sera régénéré)
- [ ] `.nuxt/` (cache)
- [ ] `dist/` (build)

---

## 🚨 13. RISQUES & BLOQUEURS POTENTIELS

### 🔴 CRITIQUES

#### 1. **@nuxt/content v1 → v2**
**Risque** : Tous les articles en Markdown doivent être revus  
**Impact** : 🔴 BLOQUANT si beaucoup d'articles  
**Mitigation** :
```js
// Script de migration automatique
// ~/scripts/migrate-content.js
```

#### 2. **Plugin vimg.js inconnu**
**Risque** : Pourrait ne pas fonctionner en Nuxt 3  
**Impact** : 🟡 MOYEN  
**Mitigation** : Analyser le code du plugin

#### 3. **SCSS imbriqués complexes**
**Risque** : `styleResources` ne fonctionne plus  
**Impact** : 🟡 MOYEN  
**Mitigation** : Centraliser dans 1 fichier `_all.scss`

### 🟡 MOYENS

#### 4. **Feeds RSS/JSON**
**Risque** : `@nuxtjs/feed` n'est plus maintenu  
**Impact** : 🟡 MOYEN  
**Solution** : `feed` npm package + Nitro route

#### 5. **Compression Brotli/Gzip**
**Risque** : `nuxt-precompress` ne fonctionne plus  
**Impact** : 🟢 MINEUR (Netlify le fait)  
**Solution** : Headers Netlify

---

## 🎓 14. RESSOURCES UTILES

### Documentation officielle
- [Nuxt 3 Migration Guide](https://nuxt.com/docs/migration/overview)
- [@nuxt/content v2](https://content.nuxt.com/)
- [Nuxt Bridge](https://nuxt.com/docs/bridge/overview) (migration progressive)

### Outils d'audit
- [Lighthouse](https://pagespeed.web.dev/)
- [EcoIndex](https://www.ecoindex.fr/)
- [GreenFrame](https://greenframe.io/)
- [WAVE](https://wave.webaim.org/) (accessibilité)

### Bonnes pratiques
- [Vue.js Best Practices](https://www.cmarix.com/blog/vue-js-best-practices/)
- [Référentiel Opquast](https://checklists.opquast.com/)
- [RGESN](https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/) (éco-conception)

---

## 📊 15. MÉTRIQUES ATTENDUES APRÈS MIGRATION

### Performance

| Métrique | Avant (Nuxt 2) | Après (Nuxt 3) | Objectif |
|----------|---------------|----------------|----------|
| **Lighthouse Perf** | ? | 95+ | 90+ |
| **First Contentful Paint** | ? | <1s | <1.5s |
| **Time to Interactive** | ? | <2s | <3s |
| **Bundle size (JS)** | ? | -30% | -20% |
| **Build time** | ? | -50% | -30% |

### Éco-conception

| Métrique | Avant | Après | Objectif |
|----------|-------|-------|----------|
| **EcoIndex** | ? | A ou B | B minimum |
| **CO2/page** | ? | <1g | <1.5g |
| **Poids page** | ? | <500KB | <1MB |
| **Requêtes HTTP** | ? | <20 | <30 |

### Accessibilité

| Métrique | Avant | Après | Objectif |
|----------|-------|-------|----------|
| **Lighthouse A11y** | ? | 95+ | 90+ |
| **Erreurs WAVE** | ? | 0 | 0 |
| **Contraste minimum** | ? | 4.5:1 | 4.5:1 |

---

## ✅ 16. PROCHAINES ÉTAPES

### Étape 1 : Me donner accès au code complet (CRITIQUE)

**Tu dois me partager** :
```bash
# Option 1 : Tout le repo
cd /Users/benoitabot/Sites/beabot
# Puis utilise Claude Code pour que j'accède au Filesystem

# Option 2 : Fichiers clés un par un
# - components/*.vue
# - pages/*.vue
# - layouts/*.vue
# - assets/css/**/*.scss
# - plugins/vimg.js
# - content/articles/*.md (exemples)
```

### Étape 2 : Audit approfondi des composants

Une fois les fichiers accessibles, je générerai :
1. **VUE_BEST_PRACTICES.md** : Score détaillé des 18 règles
2. **COMPONENTS_ANALYSIS.md** : Liste de tous les composants + problèmes
3. **CSS_AUDIT.md** : Variables SCSS → CSS natives

### Étape 3 : Plan de migration détaillé

Je créerai **MIGRATION_PLAN.md** avec :
- Ordre exact des étapes
- Commandes npm précises
- Scripts de migration automatiques
- Checklist de validation

### Étape 4 : Migration progressive

On procédera par phases :
1. Config + dépendances
2. Composants (par lot de 5-10)
3. Pages
4. Content
5. Optimisations

---

## 🎯 CONCLUSION

### Points forts du projet actuel ✅
1. **Architecture solide** : SSG, compression, lazy loading
2. **Déjà optimisé** : PurgeCSS, extractCSS, cache
3. **Bonne base SEO** : Meta tags, sitemap, RSS
4. **Thématique cohérente** : Site sur l'éco-conception = légitimité

### Problèmes critiques identifiés 🔴
1. **Encodage UTF-8 cassé** : Urgent à corriger
2. **Dépendances obsolètes** : Sécurité + maintenance
3. **Modules incompatibles** : Bloquent la migration
4. **Font externe** : Contradiction avec éco-conception

### Opportunités avec Nuxt 3 🚀
1. **Performance** : -30% bundle, build 3x plus rapide
2. **DX** : Composition API, auto-imports, TypeScript
3. **SEO** : Meilleure indexation, structured data
4. **Éco-conception** : Moins de JS, moins de requêtes

### Effort estimé
- **Migration technique** : 3-4 jours
- **Optimisations** : 1-2 jours
- **Tests** : 1 jour
- **TOTAL** : **1 semaine** (temps plein)

---

## 🚀 PRÊT À CONTINUER ?

**Dis-moi :**
1. Veux-tu que j'accède au repo complet via Desktop Commander ?
2. Ou préfères-tu me partager les fichiers un par un ?
3. As-tu des questions sur cet audit ?

**Prochaine étape** : Audit détaillé des composants Vue.js + score des bonnes pratiques.

---

**Généré par Claude Code - Audit v1.0**  
**Projet BeAbot - Migration Nuxt 2→3**
