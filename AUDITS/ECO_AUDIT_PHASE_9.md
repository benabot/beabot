# 🌿 Audit Éco-conception Phase 9 - BeAbot

**Date** : 16 décembre 2025
**Référentiels utilisés** :
- [GreenIT 115 bonnes pratiques v5](https://rweb.greenit.fr)
- [RGESN 78 critères](https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/)
- [Opquast Webperf](https://www.opquast.com)
- [Smashing Magazine Performance Checklist 2021](https://www.smashingmagazine.com/2021/01/front-end-performance-2021-free-pdf-checklist/)

---

## 📊 État actuel du site

### Points forts ✅

| Critère | Implémentation | Référence |
|---------|----------------|-----------|
| **Génération statique SSG** | Nuxt 3 + Nitro | GreenIT #18 |
| **System fonts** | Stack système (-apple-system...) | GreenIT #32 |
| **Lazy loading images** | @nuxt/image natif | GreenIT #50 |
| **Images WebP** | Configuration @nuxt/image | GreenIT #48 |
| **Minification JS/CSS/HTML** | Terser + Nitro minify | GreenIT #77 |
| **Cache headers longs** | 1 an pour assets statiques | GreenIT #74 |
| **Compression Brotli/Gzip** | Netlify auto | GreenIT #76 |
| **Prefetch links désactivé** | nuxt.config prefetchLinks: false | GreenIT #46 |
| **CSS externalisé** | inlineSSRStyles: false | GreenIT #41 |
| **Manual chunking** | vendor-vue, vendor-nuxt, etc. | GreenIT #75 |
| **Code splitting** | Automatique via Vite | Opquast #6 |
| **Accessibilité WCAG** | Contrastes corrigés 4.5:1 | RGESN |
| **RSS/JSON feeds** | Routes serveur | SEO |
| **Sitemap.xml** | @nuxtjs/sitemap | SEO |

### Points à améliorer 🔶

---

## 🎯 Optimisations identifiées

### PRIORITÉ 1 - Impact élevé

#### ECO-9-01 : Supprimer le script EcoIndex badge externe
**Problème** : Chargement d'un script tiers depuis jsdelivr.net
```javascript
// nuxt.config.ts
script: [{
  src: 'https://cdn.jsdelivr.net/gh/cnumr/ecoindex_badge@3/assets/js/ecoindex-badge.js',
  defer: true,
}]
```
**Impact** : +1 requête HTTP externe, +1 domaine tiers
**Solution** : Intégrer le badge en SVG statique ou le générer côté serveur
**Référence** : GreenIT #46, #58

#### ECO-9-02 : Optimiser les images lourdes
**Problème** : Images PNG/JPEG volumineuses dans `/public/img/`
```
cyclop.png     332 KB
lpb.png        191 KB
guideBleu1.png 167 KB
appNoel.png    135 KB
guideBleu2.png 129 KB
```
**Solution** : Convertir en WebP/AVIF, compression à 60-70%
**Référence** : GreenIT #48, #99

#### ECO-9-03 : Ajouter une CSS print
**Problème** : Pas de feuille de style pour l'impression
**Solution** : Ajouter `@media print` pour masquer navigation/footer
**Référence** : GreenIT #31

#### ECO-9-04 : Optimiser les SVG inline
**Problème** : SVG volumineux dans `layouts/default.vue` (logo avec gradients)
**Solution** : Externaliser le SVG ou simplifier les paths
**Référence** : GreenIT #99

### PRIORITÉ 2 - Impact moyen

#### ECO-9-05 : Variables CSS natives
**Problème** : Utilisation exclusive de variables SCSS compilées
**Solution** : Migrer les couleurs/spacing vers CSS custom properties pour réduire la duplication
**Référence** : Standards modernes CSS

#### ECO-9-06 : Supprimer les animations non essentielles
**Problème** : Animations CSS sur la page d'accueil (keyframes)
**Solution** : Respecter `prefers-reduced-motion` + limiter les animations
**Référence** : GreenIT #9, RGESN

#### ECO-9-07 : Ajouter attributs width/height sur images
**Problème** : Images sans dimensions déclarées (CLS)
**Solution** : Ajouter width/height sur tous les `<img>` et `<NuxtImg>`
**Référence** : Opquast #10, #11

#### ECO-9-08 : Déclaration d'éco-conception
**Problème** : Pas de page de déclaration RGESN
**Solution** : Créer `/eco-declaration.vue` avec méthodologie et scores
**Référence** : RGESN 1.1, 1.2

### PRIORITÉ 3 - Améliorations continues

#### ECO-9-09 : Focus outline accessibility
**Problème** : `*:focus { outline: none }` dans main.scss
**Solution** : Remplacer par focus-visible avec style personnalisé
**Référence** : WCAG 2.4.7

#### ECO-9-10 : Optimiser les sélecteurs CSS
**Problème** : Sélecteurs imbriqués profonds (`:deep()` multiples)
**Solution** : Simplifier les sélecteurs, éviter nesting >3 niveaux
**Référence** : Opquast #7, #40

#### ECO-9-11 : Cache service worker
**Problème** : Pas de PWA/service worker
**Solution** : Ajouter @vite-pwa/nuxt pour cache offline
**Référence** : GreenIT #59, Smashing #17

#### ECO-9-12 : Préchargement page d'accueil → slug articles
**Problème** : Pas de preload des pages les plus visitées
**Solution** : Ajouter `<link rel="preload">` dynamique
**Référence** : Smashing #10

---

## 📋 Préparation changement de domaine beabot.fr

### Fichiers à modifier

| Fichier | Ligne(s) | Valeur actuelle | Nouvelle valeur |
|---------|----------|-----------------|-----------------|
| `nuxt.config.ts` | 56-57 | preconnect/dns-prefetch beabot.fr | OK (déjà prêt) |
| `nuxt.config.ts` | 37, 44, 49 | og:image beabot.fr | OK |
| `netlify.toml` | 14 | NUXT_PUBLIC_SITE_URL=beabot.netlify.app | → beabot.fr |
| `server/routes/rss.xml.ts` | - | Vérifier siteUrl | → beabot.fr |
| `server/routes/feed.json.ts` | - | Vérifier siteUrl | → beabot.fr |
| `pages/index.vue` | 294 | canonical beabot.netlify.app | → beabot.fr |
| `sitemap.hostname` | nuxt.config.ts | beabot.fr | OK |

### Étapes de migration domaine

1. **Acheter/configurer DNS** beabot.fr
2. **Netlify** : Ajouter domaine personnalisé dans Site settings > Domain management
3. **Créer branche** `chore/domain-beabot-fr`
4. **Modifier** tous les fichiers listés ci-dessus
5. **Ajouter redirect** dans netlify.toml :
```toml
[[redirects]]
  from = "https://beabot.netlify.app/*"
  to = "https://beabot.fr/:splat"
  status = 301
  force = true
```
6. **Tester** en preview deploy
7. **Merger** et déployer

---

## 📈 Métriques cibles

| Métrique | Actuel | Cible | Outil |
|----------|--------|-------|-------|
| EcoIndex | B-C | **A** | ecoindex.fr |
| Requêtes HTTP | ~16 | **<12** | DevTools |
| Poids page accueil | ~200KB | **<150KB** | DevTools |
| Lighthouse Perf | 85-90 | **>95** | Lighthouse |
| LCP | ~2s | **<1.5s** | Web Vitals |
| CLS | ~0.1 | **<0.05** | Web Vitals |

---

**Auteur** : Claude Code
**Prochaine étape** : Implémenter ECO-9-01 à ECO-9-04
