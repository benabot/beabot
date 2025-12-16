# ✅ TODO - BeAbot Nuxt 3 Optimisation Éco-conception

> **Objectif** : Améliorer les performances éco-conception et préparer la migration vers beabot.fr

**Projet** : BeAbot - Blog éco-conception web
**Date création** : 15 décembre 2025
**Dernière MAJ** : 16 décembre 2025
**Branche active** : `dev` (Nuxt 3)
**Sites** :

- 🟢 **Production** (Nuxt 3, master) : https://beabot.netlify.app
- 🔵 **Développement** (Nuxt 3, dev) : https://dev-beabot.netlify.app

---

## 📊 CONTEXTE ACTUEL

### Statut (16 décembre 2025)

**Migration Nuxt 3 terminée** - Les deux environnements sont synchronisés sur Nuxt 3.

| Métrique | Site Prod | Site Dev | Statut |
|----------|-----------|----------|--------|
| **Framework** | Nuxt 3.14 | Nuxt 3.14 | ✅ Sync |
| **Poids HTML** | ~28 KB | ~28 KB | ✅ |
| **Requêtes HTTP** | ~16 | ~16 | 🔶 À optimiser |
| **Fonts** | System stack | System stack | ✅ |
| **EcoIndex** | B-C | B-C | 🔶 Objectif A |

---

## 🎯 PHASE 9 : Optimisations Éco-conception Avancées

> **Audit complet** : `AUDITS/ECO_AUDIT_PHASE_9.md`
> **Stratégie branches** : `optim/eco-9-XX` où XX = numéro de la tâche

### PRIORITÉ 1 - Impact élevé ⚡

#### ECO-9-01 : Supprimer script EcoIndex externe
- [x] Créer branche `optim/eco-9-01-ecoindex-badge`
- [x] Retirer le script jsdelivr de nuxt.config.ts
- [x] Créer un composant `EcoIndexBadge.vue` avec SVG statique
- [x] Tester et committer
- **Impact** : -1 requête HTTP, -1 domaine tiers
- **Référence** : GreenIT #46, #58

#### ECO-9-02 : Optimiser images lourdes
- [ ] Créer branche `optim/eco-9-02-image-optim`
- [ ] Convertir cyclop.png (332KB) → WebP (~80KB)
- [ ] Convertir lpb.png (191KB) → WebP (~50KB)
- [ ] Convertir guideBleu1/2.png → WebP
- [ ] Supprimer fichiers PNG obsolètes
- **Impact** : -400KB sur les assets
- **Référence** : GreenIT #48, #99

#### ECO-9-03 : Ajouter CSS print
- [ ] Créer branche `optim/eco-9-03-css-print`
- [ ] Ajouter `assets/css/print.scss`
- [ ] Masquer nav, footer, éléments décoratifs à l'impression
- [ ] Optimiser typographie pour papier
- **Référence** : GreenIT #31

#### ECO-9-04 : Optimiser SVG inline
- [ ] Créer branche `optim/eco-9-04-svg-optim`
- [ ] Externaliser le logo SVG de layouts/default.vue
- [ ] Optimiser avec SVGO
- [ ] Réduire les gradients complexes
- **Référence** : GreenIT #99

### PRIORITÉ 2 - Impact moyen 🔶

#### ECO-9-05 : Variables CSS natives
- [ ] Créer branche `optim/eco-9-05-css-vars`
- [ ] Migrer couleurs SCSS → CSS custom properties
- [ ] Migrer spacing → CSS custom properties
- [ ] Conserver SCSS uniquement pour mixins/fonctions
- **Référence** : Standards modernes CSS

#### ECO-9-06 : Respect prefers-reduced-motion
- [ ] Créer branche `optim/eco-9-06-reduced-motion`
- [ ] Ajouter media query `@media (prefers-reduced-motion: reduce)`
- [ ] Désactiver animations pour utilisateurs sensibles
- **Référence** : GreenIT #9, WCAG

#### ECO-9-07 : Attributs width/height images
- [ ] Créer branche `optim/eco-9-07-image-dimensions`
- [ ] Auditer toutes les balises `<img>` et `<NuxtImg>`
- [ ] Ajouter width/height manquants
- [ ] Réduire CLS (Cumulative Layout Shift)
- **Référence** : Opquast #10, #11

#### ECO-9-08 : Déclaration d'éco-conception RGESN
- [ ] Créer branche `optim/eco-9-08-eco-declaration`
- [ ] Créer page `/eco-declaration.vue`
- [ ] Documenter méthodologie et scores
- [ ] Lier depuis footer
- **Référence** : RGESN 1.1, 1.2

### PRIORITÉ 3 - Améliorations continues 🟢

#### ECO-9-09 : Fix focus outline accessibility
- [ ] Créer branche `optim/eco-9-09-focus-visible`
- [ ] Remplacer `*:focus { outline: none }` par `:focus-visible`
- [ ] Ajouter style focus personnalisé accessible
- **Référence** : WCAG 2.4.7

#### ECO-9-10 : Simplifier sélecteurs CSS
- [ ] Créer branche `optim/eco-9-10-css-selectors`
- [ ] Réduire profondeur nesting (<3 niveaux)
- [ ] Optimiser sélecteurs `:deep()`
- **Référence** : Opquast #7, #40

#### ECO-9-11 : Service Worker (optionnel)
- [ ] Créer branche `optim/eco-9-11-pwa`
- [ ] Évaluer @vite-pwa/nuxt
- [ ] Implémenter cache offline si pertinent
- **Référence** : GreenIT #59

#### ECO-9-12 : Preload pages fréquentes (optionnel)
- [ ] Créer branche `optim/eco-9-12-preload`
- [ ] Identifier pages les plus visitées
- [ ] Ajouter preload dynamique
- **Référence** : Smashing #10

---

## 🌐 PHASE 10 : Migration domaine beabot.fr

> **À effectuer quand le domaine sera acheté/configuré**

### Fichiers à modifier pour beabot.fr

| Fichier | Modification |
|---------|--------------|
| `netlify.toml` | NUXT_PUBLIC_SITE_URL → beabot.fr |
| `pages/index.vue` | canonical → beabot.fr |
| `server/routes/rss.xml.ts` | siteUrl → beabot.fr |
| `server/routes/feed.json.ts` | siteUrl → beabot.fr |

### Étapes

1. [ ] Acheter/configurer DNS beabot.fr
2. [ ] Créer branche `chore/domain-beabot-fr`
3. [ ] Configurer domaine dans Netlify
4. [ ] Modifier fichiers listés ci-dessus
5. [ ] Ajouter redirect netlify.toml :
```toml
[[redirects]]
  from = "https://beabot.netlify.app/*"
  to = "https://beabot.fr/:splat"
  status = 301
  force = true
```
6. [ ] Tester en preview
7. [ ] Merger et déployer

---

## 🔄 WORKFLOW GIT - Stratégie de branches

### Branches principales
- `master` : Production
- `dev` : Développement (base de travail)

### Branches de travail (Phase 9)
```
dev
 └── optim/eco-9-01-ecoindex-badge
 └── optim/eco-9-02-image-optim
 └── optim/eco-9-03-css-print
 └── optim/eco-9-04-svg-optim
 └── optim/eco-9-05-css-vars
 └── optim/eco-9-06-reduced-motion
 └── optim/eco-9-07-image-dimensions
 └── optim/eco-9-08-eco-declaration
 └── optim/eco-9-09-focus-visible
 └── optim/eco-9-10-css-selectors
 └── optim/eco-9-11-pwa (optionnel)
 └── optim/eco-9-12-preload (optionnel)
```

### Convention de commits
```
feat: nouvelle fonctionnalité
fix: correction de bug
optim: optimisation éco/performance
docs: documentation
style: formatage
refactor: refactoring
chore: maintenance
```

### Processus
1. Créer branche depuis `dev`
2. Implémenter la modification
3. Tester localement (`npm run dev` + `npm run generate`)
4. Committer avec message conventionnel
5. Benoît merge dans `dev` et push
6. Quand Phase 9 terminée : merge `dev` → `master`

---

## 📈 MÉTRIQUES CIBLES

### Éco-conception
- [ ] EcoIndex : Score **A**
- [ ] Requêtes HTTP : **< 12**
- [ ] Poids page : **< 150KB**
- [ ] CO2/page : **< 0.3g**

### Performance
- [ ] Lighthouse Performance : **> 95**
- [ ] LCP : **< 1.5s**
- [ ] FID : **< 100ms**
- [ ] CLS : **< 0.05**

### Accessibilité
- [ ] Lighthouse Accessibility : **> 95**
- [ ] WAVE : **0 erreurs**

---

## 📚 RESSOURCES

### Référentiels
- [GreenIT 115 bonnes pratiques v5](https://rweb.greenit.fr)
- [RGESN 78 critères](https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/)
- [Opquast Webperf](https://www.opquast.com)

### Outils d'audit
- [EcoIndex](https://www.ecoindex.fr/)
- [Website Carbon](https://www.websitecarbon.com/)
- [Lighthouse](https://pagespeed.web.dev/)
- [WAVE](https://wave.webaim.org/)

---

## 📋 HISTORIQUE DES PHASES

| Phase | Description | Statut |
|-------|-------------|--------|
| 1-4 | Migration Nuxt 3 | ✅ Complété |
| 5 | Finalisation (cache, 404, footer) | ✅ Complété |
| 6 | Bug fixes production | ✅ Complété |
| 7 | Netlify build image | ✅ Complété |
| 8 | Tests et validation | ✅ Complété |
| **9** | **Optimisations éco-conception** | 🔄 **En cours** |
| 10 | Migration domaine beabot.fr | ⏳ En attente |

---

**📝 Maintenu par** : Claude Code
**📅 Dernière MAJ** : 16 décembre 2025
**🎯 Phase actuelle** : Phase 9 - Optimisations éco-conception
