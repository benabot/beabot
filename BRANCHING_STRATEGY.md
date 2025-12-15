# 🌿 BRANCHING STRATEGY - BeAbot

> **Stratégie Git pour le projet BeAbot**

**Date** : 15 décembre 2025  
**Projet** : BeAbot - Blog éco-conception web

---

## 📊 VUE D'ENSEMBLE DES BRANCHES

### Branches principales

```
master (protected)     ← Site de production (Nuxt 2)
   │                    https://beabot.netlify.app
   │
dev (protected)        ← Site de développement (Nuxt 3)
   │                    https://dev-beabot.netlify.app
   │
   ├── feature/*       ← Nouvelles fonctionnalités
   ├── fix/*           ← Corrections de bugs
   ├── optim/*         ← Optimisations performance/éco
   └── docs/*          ← Documentation
```

### Règles importantes

| Branche | Protection | Qui peut merger | Deploy |
|---------|------------|-----------------|--------|
| `master` | 🔒 Protégée | Merge local uniquement | Auto → beabot.netlify.app |
| `dev` | ⚠️ Semi-protégée | Après tests | Auto → dev-beabot.netlify.app |
| `feature/*` | Non protégée | Libre | Non |
| `fix/*` | Non protégée | Libre | Non |
| `optim/*` | Non protégée | Libre | Non |

---

## 🔄 WORKFLOW DE TRAVAIL

### 1. Créer une branche de travail

```bash
# À partir de dev (toujours à jour)
git checkout dev
git pull origin dev

# Créer la branche de travail
git checkout -b feature/nom-de-la-feature
# OU
git checkout -b fix/description-du-bug
# OU
git checkout -b optim/type-optimisation
# OU
git checkout -b docs/description
```

### 2. Travailler sur la branche

```bash
# Faire les modifications
# ...

# Commit régulièrement avec messages conventionnels
git add .
git commit -m "feat: description de la modification"

# Pousser la branche
git push origin feature/nom-de-la-feature
```

### 3. Tester avant de merger

```bash
# Vérifier le build
npm run build
npm run generate

# Tester localement
npm run preview
# Vérifier sur http://localhost:3000

# Lint
npm run lint
```

### 4. Merger dans dev (après tests OK)

```bash
# Se mettre sur dev
git checkout dev
git pull origin dev

# Merger la branche de travail
git merge feature/nom-de-la-feature

# Pousser
git push origin dev
```

### 5. Nettoyer

```bash
# Supprimer la branche locale
git branch -d feature/nom-de-la-feature

# Supprimer la branche remote (optionnel)
git push origin --delete feature/nom-de-la-feature
```

---

## 📌 CONVENTIONS DE NOMMAGE

### Format des branches

```
<type>/<description-en-kebab-case>
```

### Types de branches

| Type | Usage | Exemple |
|------|-------|---------|
| `feature/` | Nouvelle fonctionnalité | `feature/dark-mode` |
| `fix/` | Correction de bug | `fix/portfolio-animation` |
| `optim/` | Optimisation perf/éco | `optim/reduce-http-requests` |
| `docs/` | Documentation | `docs/update-readme` |
| `refactor/` | Refactoring code | `refactor/component-structure` |
| `style/` | Changements de style | `style/typography-update` |
| `chore/` | Maintenance | `chore/update-dependencies` |

### Exemples concrets

```bash
# Fonctionnalités
feature/home-redesign
feature/search-articles
feature/rss-feed
feature/contact-form-validation

# Corrections
fix/broken-links
fix/image-loading
fix/mobile-menu

# Optimisations
optim/bundle-size
optim/image-compression
optim/lazy-loading
optim/reduce-dom-elements

# Documentation
docs/project-state-update
docs/api-documentation
docs/deployment-guide
```

---

## 📋 CONVENTIONS DE COMMITS

### Format

```
<type>(<scope>): <description>

[body optionnel]

[footer optionnel]
```

### Types de commits

| Type | Description |
|------|-------------|
| `feat` | Nouvelle fonctionnalité |
| `fix` | Correction de bug |
| `docs` | Documentation |
| `style` | Formatage (sans impact code) |
| `refactor` | Refactoring |
| `perf` | Amélioration performance |
| `test` | Ajout/modification tests |
| `chore` | Maintenance |
| `optim` | Optimisation éco-conception |

### Exemples

```bash
feat(home): add article carousel
fix(portfolio): restore hover animation
docs: update README with deployment info
style(css): improve heading spacing
refactor(components): migrate to Composition API
perf(images): add lazy loading
optim(fonts): reduce font weights
chore: update dependencies
```

---

## ⚠️ RÈGLES IMPORTANTES

### ❌ NE JAMAIS FAIRE

1. **Ne jamais travailler directement sur `master`**
   ```bash
   # INTERDIT
   git checkout master
   git commit -m "..."
   ```

2. **Ne jamais travailler directement sur `dev`** (sauf urgence)
   ```bash
   # ÉVITER
   git checkout dev
   git commit -m "..."
   ```

3. **Ne jamais force push sur branches protégées**
   ```bash
   # INTERDIT
   git push --force origin master
   git push --force origin dev
   ```

4. **Ne jamais merger dev → master sans tests complets**

### ✅ TOUJOURS FAIRE

1. **Créer une branche dédiée pour chaque travail**
2. **Pull dev avant de créer une branche**
3. **Tester localement avant de merger**
4. **Utiliser des messages de commit conventionnels**
5. **Supprimer les branches après merge**

---

## 🚀 WORKFLOW DE RELEASE

### Quand merger dev → master ?

Le merge de `dev` vers `master` (mise en production Nuxt 3) se fera quand :

1. ✅ Toutes les fonctionnalités critiques sont testées
2. ✅ EcoIndex égal ou meilleur que prod actuelle
3. ✅ Lighthouse Performance ≥ 90
4. ✅ Pas de régression fonctionnelle
5. ✅ Documentation à jour

### Procédure de release

```bash
# 1. S'assurer que dev est stable
git checkout dev
npm run build && npm run generate && npm run preview

# 2. Créer une branche de release
git checkout -b release/v3.0.0

# 3. Derniers ajustements si nécessaire
# ...

# 4. Merger dans master
git checkout master
git merge release/v3.0.0 --no-ff -m "Release v3.0.0 - Migration Nuxt 3"

# 5. Tag de version
git tag -a v3.0.0 -m "Version 3.0.0 - Migration Nuxt 3"

# 6. Push
git push origin master
git push origin --tags

# 7. Cleanup
git branch -d release/v3.0.0
```

---

## 📊 ÉTAT ACTUEL DES BRANCHES

### Branches actives (15 décembre 2025)

| Branche | État | Dernière activité |
|---------|------|-------------------|
| `master` | ✅ Stable (Nuxt 2) | - |
| `dev` | ✅ Stable (Nuxt 3) | 15 déc 2025 |
| `feat/nuxt3-phase1-deps` | ✅ Mergée | 10 déc 2025 |
| `feat/nuxt3-phase2-design` | ✅ Mergée | 11 déc 2025 |
| `docs/project-state-update` | 🔄 En cours | 15 déc 2025 |

### Branches à supprimer (après review)

```bash
# Branches mergées qui peuvent être supprimées
elegant-kirch
jolly-pike
upbeat-archimedes
zen-raman
feature/home
feature/typo
fix/audit-04-contrast
fix/quick-fixes-p0
optim/req
optim/req-2
```

### Commande de nettoyage

```bash
# Supprimer les branches locales mergées
git branch --merged dev | grep -v "dev\|master" | xargs -n 1 git branch -d

# Supprimer les branches remote obsolètes
git remote prune origin
```

---

## 🔗 LIENS UTILES

### Déploiements
- **Production** : https://beabot.netlify.app (master)
- **Développement** : https://dev-beabot.netlify.app (dev)

### Netlify Dashboard
- https://app.netlify.com/sites/beabot
- https://app.netlify.com/sites/dev-beabot

### GitHub
- https://github.com/benabot/beabot

---

**📝 Document maintenu par** : Claude Code  
**📅 Dernière MAJ** : 15 décembre 2025
