# 🌿 BRANCHING STRATEGY - BeAbot

> **Stratégie Git pour le projet BeAbot**

**Date création** : 15 décembre 2025  
**Dernière MAJ** : 16 décembre 2025  
**Projet** : BeAbot - Blog éco-conception web

---

## 📊 VUE D'ENSEMBLE DES BRANCHES

### Branches principales

```
master (protected)     ← Site de production (Nuxt 3)
   │                    https://beabot.netlify.app
   │                    (futur: https://beabot.fr)
   │
dev (protected)        ← Site de développement (Nuxt 3)
   │                    https://dev-beabot.netlify.app
   │
   ├── optim/eco-9-*   ← Optimisations Phase 9 (ACTUEL)
   ├── chore/domain-*  ← Migration domaine beabot.fr
   ├── feature/*       ← Nouvelles fonctionnalités
   ├── fix/*           ← Corrections de bugs
   └── docs/*          ← Documentation
```

---

## 🎯 PHASE 9 : Optimisations Éco-conception (ACTUEL)

### Branches prévues

```bash
dev
 ├── optim/eco-9-01-ecoindex-badge    # Retirer script externe
 ├── optim/eco-9-02-image-optim       # Optimiser images lourdes
 ├── optim/eco-9-03-css-print         # Ajouter CSS print
 ├── optim/eco-9-04-svg-optim         # Optimiser SVG inline
 ├── optim/eco-9-05-css-vars          # Variables CSS natives
 ├── optim/eco-9-06-reduced-motion    # prefers-reduced-motion
 ├── optim/eco-9-07-image-dimensions  # width/height images
 ├── optim/eco-9-08-eco-declaration   # Page déclaration RGESN
 ├── optim/eco-9-09-focus-visible     # Accessibilité focus
 ├── optim/eco-9-10-css-selectors     # Simplifier sélecteurs
 ├── optim/eco-9-11-pwa               # Service Worker (optionnel)
 └── optim/eco-9-12-preload           # Preload pages (optionnel)
```

### Workflow Phase 9

```bash
# 1. Claude Code crée la branche et implémente
git checkout dev
git checkout -b optim/eco-9-01-ecoindex-badge
# ... modifications ...
git add .
git commit -m "optim: remove external ecoindex badge script

- Remove jsdelivr external script from nuxt.config.ts
- Create static EcoIndexBadge.vue component
- Reduces HTTP requests by 1, removes 1 third-party domain

Ref: GreenIT #46, #58"

# 2. Benoît review, merge et push
git checkout dev
git merge optim/eco-9-01-ecoindex-badge
git push origin dev
git branch -d optim/eco-9-01-ecoindex-badge
```

---

## 🌐 PHASE 10 : Migration domaine beabot.fr

### Prérequis
- [ ] Domaine beabot.fr acheté et DNS configuré
- [ ] Domaine ajouté dans Netlify (Site settings > Domain management)
- [ ] Certificat SSL actif

### Branche de migration

```bash
git checkout dev
git checkout -b chore/domain-beabot-fr
```

### Fichiers à modifier

| Fichier | Ligne | Modification |
|---------|-------|--------------|
| `netlify.toml` | 14 | `NUXT_PUBLIC_SITE_URL = "https://beabot.fr"` |
| `pages/index.vue` | 294 | `href: 'https://beabot.fr/'` |
| `server/routes/rss.xml.ts` | ~5 | `siteUrl: 'https://beabot.fr'` |
| `server/routes/feed.json.ts` | ~5 | `siteUrl: 'https://beabot.fr'` |
| `nuxt.config.ts` | sitemap.hostname | Déjà `https://beabot.fr` ✅ |
| `nuxt.config.ts` | og:image | Déjà `https://beabot.fr` ✅ |

### Redirect à ajouter dans netlify.toml

```toml
# Redirect ancien domaine vers nouveau
[[redirects]]
  from = "https://beabot.netlify.app/*"
  to = "https://beabot.fr/:splat"
  status = 301
  force = true

# Redirect www vers apex
[[redirects]]
  from = "https://www.beabot.fr/*"
  to = "https://beabot.fr/:splat"
  status = 301
  force = true
```

### Procédure complète

```bash
# 1. Créer la branche
git checkout dev
git checkout -b chore/domain-beabot-fr

# 2. Modifier les fichiers (voir tableau ci-dessus)

# 3. Commit
git commit -am "chore: migrate domain to beabot.fr

- Update NUXT_PUBLIC_SITE_URL in netlify.toml
- Update canonical URL in index.vue
- Update siteUrl in RSS and JSON feeds
- Add 301 redirects from netlify.app to beabot.fr
- Add www to apex redirect"

# 4. Push pour preview deploy
git push origin chore/domain-beabot-fr

# 5. Tester le preview deploy Netlify
# Vérifier que tout fonctionne

# 6. Benoît merge dans dev puis master
git checkout dev
git merge chore/domain-beabot-fr
git push origin dev

git checkout master
git merge dev
git push origin master

# 7. Vérifier les redirects en production
curl -I https://beabot.netlify.app
# Doit retourner 301 → https://beabot.fr
```

---

## 🔄 WORKFLOW STANDARD

### Créer une branche de travail

```bash
git checkout dev
git pull origin dev
git checkout -b <type>/<description>
```

### Types de branches

| Type | Usage | Exemple |
|------|-------|---------|
| `optim/` | Optimisation éco/perf | `optim/eco-9-01-ecoindex-badge` |
| `feature/` | Nouvelle fonctionnalité | `feature/dark-mode` |
| `fix/` | Correction de bug | `fix/portfolio-animation` |
| `docs/` | Documentation | `docs/update-readme` |
| `chore/` | Maintenance | `chore/domain-beabot-fr` |

### Convention de commits

```
<type>: <description>

[body optionnel avec détails]

[Ref: GreenIT #XX, RGESN X.X]
```

Types : `feat`, `fix`, `optim`, `docs`, `style`, `refactor`, `chore`

---

## ⚠️ RÈGLES

### ❌ NE JAMAIS FAIRE
- Travailler directement sur `master` ou `dev`
- Force push sur branches protégées
- Merger sans tester (`npm run generate`)

### ✅ TOUJOURS FAIRE
- Créer une branche dédiée
- Tester localement avant commit
- Messages de commit conventionnels
- Benoît s'occupe des merge/push

---

## 📊 ÉTAT ACTUEL

| Branche | État | Description |
|---------|------|-------------|
| `master` | ✅ Stable | Production Nuxt 3 |
| `dev` | ✅ Stable | Développement, sync avec master |
| Phase 9 | 🔄 En cours | Optimisations éco-conception |
| Phase 10 | ⏳ En attente | Migration beabot.fr |

---

**📝 Maintenu par** : Claude Code  
**📅 Dernière MAJ** : 16 décembre 2025
