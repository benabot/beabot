# 🚀 DÉMARRAGE RAPIDE - Claude Code

> **Guide pour démarrer une session de travail avec Claude Code**

---

## ✅ SETUP TERMINÉ

Tu es maintenant sur la branch **`fix/quick-fixes-p0`** ✅

### Fichiers créés
- ✅ `CLAUDE.md` - Contexte projet pour Claude Code
- ✅ `TODO.md` - Liste des tâches prioritaires
- ✅ `WORKFLOW.md` - Stratégie Git et workflow
- ✅ `progress.sh` - Script de progression

---

## 📊 STATUT ACTUEL

```bash
🌳 Branch: fix/quick-fixes-p0
📝 Tâches restantes: 3/4 quick fixes
⏱️  Temps estimé: 1h45
```

**Détails** :
- ✅ AUDIT-01: Encodage UTF-8 (déjà corrigé)
- ❌ AUDIT-02: v-for sans :key (2 trouvés)
- ❌ AUDIT-03: Images alt manquants (14 trouvés)
- ⚠️ AUDIT-04: Contraste couleurs (test manuel)

---

## 🎯 PROCHAINES ÉTAPES

### Option 1 : Je commence maintenant

**Dans Claude Desktop** :

```
Claude, lis CLAUDE.md pour comprendre le projet, 
puis aide-moi à compléter les tâches AUDIT-02 et AUDIT-03 
du TODO.md (v-for :key + images alt)
```

### Option 2 : Je veux voir la progression d'abord

```bash
# Dans ton terminal
./progress.sh
```

### Option 3 : Je veux comprendre la stratégie Git

```bash
# Lire le workflow
cat WORKFLOW.md

# Ou dans VS Code
code WORKFLOW.md
```

---

## 💻 COMMANDES UTILES

### Voir où tu en es
```bash
./progress.sh               # Progression quick fixes
git status                  # Fichiers modifiés
git branch                  # Branches disponibles
```

### Développement
```bash
yarn dev                    # Dev server (http://localhost:3000)
yarn lint                   # Vérifier code
yarn build                  # Build production
```

### Git
```bash
git status                  # État actuel
git add <fichier>           # Ajouter fichier
git commit -m "fix: ..."    # Commit
git push                    # Push vers GitHub
```

---

## 🤖 PROMPTS CLAUDE CODE

### Pour corriger AUDIT-02 (v-for :key)

```
Claude, consulte le TODO.md tâche AUDIT-02.

Trouve tous les v-for sans :key dans:
- components/
- pages/

Et ajoute :key avec un identifiant unique.
Préfère item.slug ou item.id si disponible, sinon utilise index.
```

### Pour corriger AUDIT-03 (images alt)

```
Claude, consulte le TODO.md tâche AUDIT-03.

Ajoute les attributs alt manquants sur:
1. Toutes les balises <img>
2. Tous les <svg> (role="img" + aria-label)

Utilise des descriptions pertinentes basées sur le contexte.
```

### Pour tout faire d'un coup

```
Claude, lis CLAUDE.md puis exécute les tâches AUDIT-02 et AUDIT-03 
du TODO.md. Après chaque modification, teste avec yarn dev et fais 
un commit atomique.
```

---

## 📚 DOCUMENTATION DISPONIBLE

```
CLAUDE.md                   # Contexte projet (READ THIS FIRST)
TODO.md                     # Toutes les tâches organisées
WORKFLOW.md                 # Stratégie Git et workflow
AUDIT_BEABOT.md            # Audit technique complet
VUE_BEST_PRACTICES_AUDIT.md # Score bonnes pratiques
MIGRATION_PLAN_NUXT3.md    # Plan migration (plus tard)
progress.sh                 # Script progression
```

---

## 🎯 OBJECTIFS QUICK FIXES

### Résultat attendu
- ✅ Tous les v-for ont :key
- ✅ Toutes les images ont alt
- ✅ Contrastes WCAG AA conformes
- ✅ Lighthouse Accessibility: +15 points
- ✅ Build sans warning
- ✅ 3-4 commits atomiques
- ✅ PR prête à merger

### Workflow
```
1. Corrections → 2. Test → 3. Commit → 4. Push → 5. PR
```

---

## 🚨 EN CAS DE PROBLÈME

### Claude Code ne trouve pas les fichiers

```bash
# Vérifier que tu es dans le bon dossier
pwd
# Doit afficher: /Users/benoitabot/Sites/beabot

# Vérifier que les fichiers existent
ls -la CLAUDE.md TODO.md
```

### Erreur Git

```bash
# Voir l'état
git status

# Revenir en arrière (annuler modifs)
git restore .

# Changer de branch
git checkout master
git checkout fix/quick-fixes-p0
```

### Dev server ne démarre pas

```bash
# Nettoyer
rm -rf node_modules .nuxt
yarn install
yarn dev
```

---

## 💡 TIPS

1. **Commits atomiques** : 1 commit = 1 tâche du TODO.md
2. **Tester après chaque modif** : `yarn dev`
3. **Progress check** : `./progress.sh` régulièrement
4. **Messages clairs** : `git commit -m "fix(vue): Add :key to v-for"`

---

## 🎉 QUAND C'EST FINI

```bash
# 1. Vérifier que tout est OK
./progress.sh
yarn lint
yarn dev

# 2. Commit final si besoin
git add .
git commit -m "chore: Add workflow documentation"

# 3. Push
git push -u origin fix/quick-fixes-p0

# 4. Créer PR sur GitHub
# → Base: master
# → Compare: fix/quick-fixes-p0
```

---

**🚀 Tu es prêt ! Commence avec Claude Code maintenant.**

**📝 Prompt de démarrage suggéré** :
```
Claude, lis CLAUDE.md pour comprendre le contexte du projet BeAbot, 
puis aide-moi à corriger les problèmes AUDIT-02 et AUDIT-03 du TODO.md 
(ajouter :key sur v-for et alt sur images).
```

---

**Créé par** : Claude Code  
**Date** : 6 décembre 2025  
**Projet** : BeAbot  
**Branch** : fix/quick-fixes-p0
