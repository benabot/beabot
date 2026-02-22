# 🌳 Git Workflow - BeAbot

> **Stratégie de branches pour le projet BeAbot**

---

## 📊 État Actuel

**Branch actuelle** : `fix/quick-fixes-p0` ✅  
**Branches existantes** :
- `master` : Production (protégée)
- `docs/audit-beabot` : Documentation audit ✅ (merged)
- `fix/quick-fixes-p0` : Quick fixes P0 (en cours)

---

## 🌳 Structure des Branches

```
master (main)
│
├── docs/audit-beabot           ✅ DONE - Merged
│   └── Commit: Documents d'audit (AUDIT_BEABOT.md, etc.)
│
├── fix/quick-fixes-p0          🔄 EN COURS
│   ├── Tâche 1: Encodage UTF-8
│   ├── Tâche 2: v-for :key
│   ├── Tâche 3: Images alt
│   └── Tâche 4: Contraste couleurs
│
└── feature/nuxt3-migration     ⏳ À CRÉER
    ├── feat/nuxt3-phase1-deps
    ├── feat/nuxt3-phase2-components
    ├── feat/nuxt3-phase3-content
    ├── feat/nuxt3-phase4-assets
    └── feat/nuxt3-phase5-tests
```

---

## 🎯 Conventions de Nommage

### Types de branches
```bash
fix/nom-du-fix          # Corrections bugs
feat/nom-feature        # Nouvelles fonctionnalités
docs/nom-doc            # Documentation
refactor/nom-refactor   # Refactoring
style/nom-style         # Styles/CSS
test/nom-test           # Tests
chore/nom-chore         # Tâches maintenance
```

### Commits conventionnels
```bash
feat(scope): Description courte
fix(scope): Description courte
docs(scope): Description courte
style(scope): Description courte
refactor(scope): Description courte
test(scope): Description courte
chore(scope): Description courte
```

**Exemples** :
```bash
git commit -m "fix(a11y): Add alt attributes to all images"
git commit -m "feat(config): Add centralized app configuration"
git commit -m "docs: Add complete audit documentation"
git commit -m "refactor(components): Rename to Base* conventions"
```

---

## 🚀 Workflow Quick Fixes (Branch Actuelle)

### 1. Travailler sur fix/quick-fixes-p0

```bash
# Vérifier qu'on est sur la bonne branch
git branch
# Doit afficher: * fix/quick-fixes-p0

# Faire les modifications (voir TODO.md)
# - AUDIT-01: UTF-8
# - AUDIT-02: v-for :key
# - AUDIT-03: Images alt
# - AUDIT-04: Contraste

# Tester après chaque modif
npm run dev

# Commit atomique par tâche
git add nuxt.config.js
git commit -m "fix(config): Correct UTF-8 encoding in meta tags"

git add components/
git commit -m "fix(vue): Add :key to all v-for directives"

# etc.
```

### 2. Pousser sur GitHub

```bash
# Push la branch
git push -u origin fix/quick-fixes-p0
```

### 3. Créer Pull Request

Sur GitHub :
1. Aller sur https://github.com/benabot/beabot
2. Cliquer "Compare & pull request"
3. **Base** : `master`
4. **Compare** : `fix/quick-fixes-p0`
5. Titre : `🔥 Quick Fixes P0 - UTF-8, :key, alt, contraste`
6. Description :
```markdown
## 🎯 Objectif
Corriger les 4 problèmes critiques identifiés dans l'audit avant la migration Nuxt 3.

## ✅ Modifications
- [x] AUDIT-01: Encodage UTF-8 corrigé
- [x] AUDIT-02: :key ajoutés sur tous les v-for
- [x] AUDIT-03: Attributs alt sur toutes les images
- [x] AUDIT-04: Contraste couleurs WCAG AA

## 📊 Validation
- [x] `npm run lint` passe
- [x] `npm run dev` démarre sans erreur
- [x] Tests manuels OK
- [x] Lighthouse Accessibility: +15 points

## 📚 Référence
Voir TODO.md section "🔥 URGENT - QUICK FIXES"
```
7. Créer PR
8. **Reviewer** puis **Merge**

### 4. Après merge

```bash
# Retour sur master
git checkout master

# Pull les changements
git pull origin master

# Supprimer la branch locale (optionnel)
git branch -d fix/quick-fixes-p0

# Créer la prochaine branch
git checkout -b feature/nuxt3-migration
```

---

## 🚀 Workflow Migration Nuxt 3 (Prochain)

### 1. Créer la branch principale

```bash
# Depuis master à jour
git checkout master
git pull

# Créer branch migration
git checkout -b feature/nuxt3-migration
```

### 2. Travailler par phases

Pour chaque phase du TODO.md :

```bash
# Phase 1 : Dépendances
git checkout -b feat/nuxt3-phase1-deps

# Faire les modifs (voir MIGRATION_PLAN_NUXT3.md)
# ...

# Commit
git add .
git commit -m "feat(migration): Phase 1 - Nuxt 3 dependencies & config

- Update to Nuxt 3.14.0 + Vue 3.5.0
- Replace webpack with Vite
- Remove obsolete modules"

# Push
git push -u origin feat/nuxt3-phase1-deps

# PR sur feature/nuxt3-migration (pas master !)
```

### 3. Merge progressif

```
feat/nuxt3-phase1-deps  → feature/nuxt3-migration
feat/nuxt3-phase2-components → feature/nuxt3-migration
feat/nuxt3-phase3-content → feature/nuxt3-migration
...

feature/nuxt3-migration (complète) → master
```

---

## 🛡️ Protection Branches

### master (production)
- ❌ **Pas de push direct**
- ✅ **Uniquement via PR**
- ✅ **Review obligatoire** (1 personne min)
- ✅ **CI/CD checks** (lint, build)

### feature/nuxt3-migration
- ⚠️ **Push direct OK** (work in progress)
- ✅ **Merge sub-branches OK**
- ✅ **PR vers master** à la fin

---

## 📋 Checklist Avant Merge

### Avant chaque commit
- [ ] Code compilé (`npm run dev`)
- [ ] Lint passe (`npm run lint`)
- [ ] Tester manuellement
- [ ] Message commit conventionnel

### Avant chaque push
- [ ] Tous les commits atomiques
- [ ] Build réussit (`npm run build`)
- [ ] Generate OK (`npm run generate`)

### Avant merge sur master
- [ ] Lighthouse ≥ 90
- [ ] EcoIndex A ou B
- [ ] WAVE 0 erreur
- [ ] Toutes fonctionnalités testées
- [ ] Docs mises à jour

---

## 🚨 En Cas de Problème

### Revenir en arrière (local)

```bash
# Annuler dernières modifs non commitées
git restore .

# Annuler dernier commit (garder modifs)
git reset --soft HEAD~1

# Annuler dernier commit (supprimer modifs)
git reset --hard HEAD~1

# Retour à un commit spécifique
git reset --hard <commit-sha>
```

### Revenir en arrière (remote)

```bash
# Revert un commit (crée nouveau commit)
git revert <commit-sha>
git push

# Rollback complet (DANGEREUX)
git reset --hard <commit-sha>
git push --force
```

### Conflit lors de merge

```bash
# Résoudre manuellement
# Ouvrir fichiers en conflit
# Chercher <<<<<<< HEAD

# Après résolution
git add .
git commit -m "fix: Resolve merge conflict"
```

---

## 💡 Tips

### Voir l'historique
```bash
git log --oneline --graph --all
```

### Comparer branches
```bash
git diff master..fix/quick-fixes-p0
```

### Stash (sauvegarder modifs temporaires)
```bash
# Sauvegarder
git stash

# Lister
git stash list

# Récupérer
git stash pop
```

---

## 📞 Aide

### Commandes utiles
```bash
# Où suis-je ?
git branch

# Quelle est ma situation ?
git status

# Quelle est l'origine de cette branch ?
git remote -v

# Qui a modifié cette ligne ?
git blame <fichier>
```

---

**📝 Maintenu par** : Benoît Abot  
**📅 Dernière mise à jour** : 6 décembre 2025  
**🎯 Projet** : BeAbot
