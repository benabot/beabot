# 🔧 NETLIFY BUILD IMAGE - MISE À JOUR VERS UBUNTU 24.04

> **Date** : 15 décembre 2025
> **Branche** : `optim/eco-phase-7`
> **Problème** : Warning Netlify "Upcoming Focal build image deprecation"

---

## 🎯 PROBLÈME

Malgré la configuration `image = "ubuntu-24.04"` dans `netlify.toml`, le warning persiste :

```
Upcoming Focal build image deprecation
Your project is using the Focal build image which will be deprecated
starting January 1, 2026.
Build image: Ubuntu Focal 20.04
We recommend updating as soon as possible
```

---

## 🔍 CAUSE

**Netlify utilise une hiérarchie de configuration** :

1. **Interface Web Netlify** (priorité la plus haute)
2. **Fichier `netlify.toml`** (priorité moyenne)
3. **Détection automatique** (priorité la plus basse)

Si une configuration est définie dans l'interface web, elle **override** le fichier `netlify.toml`.

---

## ✅ SOLUTION

### Étape 1 : Vérifier netlify.toml (Déjà fait ✅)

Le fichier `netlify.toml` est correctement configuré :

```toml
[build]
  # Use supported build image (Noble LTS until 2029)
  image = "ubuntu-24.04"
```

### Étape 2 : Mettre à jour dans l'interface Netlify 🔴 **ACTION REQUISE**

**Pour le site de dev (dev-beabot.netlify.app)** :

1. Se connecter à https://app.netlify.com
2. Sélectionner le site **dev-beabot**
3. Aller dans **Site configuration** → **Build & deploy**
4. Section **Build image selection**
5. Choisir **Ubuntu Noble 24.04** dans le menu déroulant
6. Cliquer sur **Save**

**Pour le site de prod (beabot.netlify.app)** :

1. Sélectionner le site **beabot**
2. Répéter les mêmes étapes
3. Sauvegarder

---

## 📸 CAPTURES D'ÉCRAN (Guide visuel)

### Navigation

```
Netlify Dashboard
  └─ Sites
      └─ dev-beabot (ou beabot)
          └─ Site configuration
              └─ Build & deploy
                  └─ Build image selection
                      └─ Choisir "Ubuntu Noble 24.04"
                      └─ Save
```

### Avant la modification

```
Build image selection
┌─────────────────────────────────────────────┐
│ Ubuntu Focal 20.04 ⚠️                       │
└─────────────────────────────────────────────┘

⚠️ Support ending January 1, 2026
```

### Après la modification

```
Build image selection
┌─────────────────────────────────────────────┐
│ Ubuntu Noble 24.04 ✅                       │
└─────────────────────────────────────────────┘

✅ LTS support until 2029
```

---

## 🔄 VÉRIFICATION

### Après modification dans l'interface Netlify

1. **Trigger un nouveau déploiement** :
   - Soit via `git push`
   - Soit via "Trigger deploy" dans Netlify

2. **Vérifier les logs de build** :
   ```
   Build image: ubuntu-24.04 ✅
   ```

3. **Vérifier la disparition du warning** :
   - Aller dans **Site configuration** → **Build & deploy**
   - Le warning ⚠️ ne doit plus apparaître

---

## 📋 CHECKLIST

### Site dev-beabot.netlify.app

- [x] `netlify.toml` mis à jour (ubuntu-24.04)
- [ ] Interface Netlify mise à jour
- [ ] Build test réussi
- [ ] Warning disparu

### Site beabot.netlify.app (Production)

- [x] `netlify.toml` mis à jour (ubuntu-24.04)
- [ ] Interface Netlify mise à jour
- [ ] Build test réussi
- [ ] Warning disparu

---

## 🎓 POURQUOI CETTE HIÉRARCHIE ?

Netlify permet de **tester différentes configurations** sans modifier le code :

1. **Développement rapide** : Tester un build image différent sans commit
2. **Override temporaire** : Résoudre un problème urgent
3. **Configuration par environnement** : Dev vs Prod

**Bonne pratique** :
- ✅ Toujours définir dans `netlify.toml` (versionné, documenté)
- ⚠️ Éviter les overrides dans l'interface (non tracés, oubliés)
- 🔄 Synchroniser interface et fichier

---

## 📊 VERSIONS UBUNTU SUPPORTÉES PAR NETLIFY

| Version | Nom | Support | Fin de support | Statut |
|---------|-----|---------|----------------|--------|
| 16.04 | Xenial | ❌ | 2021-04-30 | Déprécié |
| 18.04 | Bionic | ❌ | 2023-05-31 | Déprécié |
| 20.04 | Focal | ⚠️ | **2026-01-01** | **Fin proche** |
| 22.04 | Jammy | ✅ | 2027-04 | Supporté |
| **24.04** | **Noble** | ✅ | **2029-04** | **Recommandé** |

**Recommandation** : Ubuntu 24.04 Noble (LTS jusqu'en 2029)

---

## 🔗 RESSOURCES

### Documentation Netlify

- [Build image selection](https://docs.netlify.com/configure-builds/overview/#build-image-selection)
- [Build configuration priority](https://docs.netlify.com/configure-builds/file-based-configuration/#settings-priority)
- [Ubuntu LTS releases](https://wiki.ubuntu.com/Releases)

### Fichiers du projet

- Configuration : `/netlify.toml`
- Documentation : `/AUDITS/NETLIFY_BUILD_IMAGE_UPDATE.md`

---

## ⚡ ALTERNATIVE : Forcer via Environment Variable

Si la modification dans l'interface ne fonctionne pas, essayer via variable d'environnement :

1. Dans Netlify : **Site configuration** → **Environment variables**
2. Ajouter :
   ```
   Key: BUILD_IMAGE
   Value: ubuntu-24.04
   ```
3. Sauvegarder et redéployer

**Note** : Cette méthode n'est **pas documentée officiellement** et peut ne pas fonctionner. Privilégier la modification dans l'interface.

---

## 📝 LOGS DE BUILD À SURVEILLER

### Build réussi (ubuntu-24.04)

```bash
12:00:00 PM: Build ready to start
12:00:02 PM: Build image: ubuntu-24.04 ✅
12:00:03 PM: Starting Nuxt build...
12:00:10 PM: Build complete!
```

### Build échouant (focal toujours actif)

```bash
12:00:00 PM: Build ready to start
12:00:02 PM: Build image: ubuntu-20.04 ⚠️
12:00:02 PM: ⚠️ Warning: Focal build image will be deprecated
```

---

## 🎯 RÉSUMÉ

### Problème

- ❌ Warning "Focal build image deprecation"
- ❌ Build image = ubuntu-20.04 (via interface Netlify)
- ✅ netlify.toml = ubuntu-24.04 (mais overridé)

### Solution

1. ✅ Mettre à jour `netlify.toml` (déjà fait)
2. 🔴 **Action requise** : Mettre à jour dans l'interface Netlify
3. ✅ Vérifier dans les logs : "Build image: ubuntu-24.04"

### Impact

- 🌟 Support jusqu'en 2029 (vs 2026)
- 🚀 Versions logicielles plus récentes
- 📦 Node.js, Python, etc. à jour
- 🔒 Sécurité améliorée

---

**📅 Prochaine étape** : Après avoir modifié dans l'interface Netlify, vérifier que le warning a disparu et documenter la résolution dans PROJECT_STATE.md

---

**📝 Document créé par** : Claude Code
**📅 Date** : 15 décembre 2025
**🔄 Branche** : `optim/eco-phase-7`
**⚠️ Statut** : ACTION REQUISE (modification interface Netlify)
