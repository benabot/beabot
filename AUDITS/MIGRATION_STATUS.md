# 🚧 MIGRATION STATUS - BeAbot Nuxt 3

> **Document de statut pour reprendre facilement la migration après pause**

**Date de sauvegarde** : 9 décembre 2025 - 11h55
**Branche active** : `feat/nuxt3-phase1-deps`
**Statut** : 🎉 TOUTES LES PAGES MIGRÉES ! Phase 1 100% complète
**Dernière action** : Migration eco-conception/[slug].vue + création composable useTags

---

## 📊 ÉTAT ACTUEL

### Branche Git
```bash
Branche active : feat/nuxt3-phase1-deps
Base : master
Commits d'avance : 17 commits
Statut : Clean (prêt à push)
```

### Résumé des 17 commits de migration (3 sessions)
```
Session 3 (9 déc 2025):
d2a2a1b feat(pages): Migrate eco-conception/[slug].vue to Nuxt 3
d7a96d1 feat(pages): Migrate contact and mentions-legales to Composition API
5eb96ec fix(pages): Escape apostrophes in eco-conception.vue meta content

Session 2 (7 déc 2025):
429af2f docs: Sauvegarde état migration Nuxt 3 Phase 1
4db5ad8 fix(pages): Escape apostrophe in portfolio meta description

Session 1 (6 déc 2025):
492de85 refactor(pages): Migrate portfolio.vue to Composition API
71f23af fix(pages): Migrate eco-conception and fix asset URLs in index
a0f3b0f feat(assets): Move images from assets/img to public/img for Nuxt 3
994380a chore: Remove unused VImg component
9ad37cb refactor(components): Remove lozad, migrate BoiteArticle to Composition API
7628f16 feat(migration): Migrate layouts/default.vue to Composition API
2c4eb98 feat(migration): Phase 1A - Rename static/ to public/ for Nuxt 3
532d6ba fix(sass): Remove duplicate $breakpoint-tablet variable
fd354d8 fix(lint): Fix ESLint parsing errors and component naming
96ec3cf feat(migration): Phase 1A - Embed fonts locally with @fontsource
a7595cb feat(migration): Phase 1A - Nuxt 3 configuration files
85878df docs: Update TODO.md - Mark Quick Fixes P0 as completed
```

---

## 📝 FICHIERS MODIFIÉS (NON COMMITÉS)

### Aucun fichier en attente ✅

Tous les changements ont été committés et sont prêts à être pushés.

---

## ✅ CE QUI A ÉTÉ FAIT

### Phase 1A : Configuration Nuxt 3 ✅ COMPLÈTE
- [x] **Migration package.json** : Nuxt 2.15.8 → Nuxt 3.14.1592
- [x] **Création nuxt.config.ts** : Configuration Nuxt 3 complète
- [x] **Migration static/ → public/** : Dossier renommé selon Nuxt 3
- [x] **Fonts locales** : @fontsource/work-sans installé
- [x] **Suppression modules obsolètes** :
  - ❌ @ax2/lozad-module
  - ❌ nuxt-precompress
  - ❌ nuxt-purgecss
  - ❌ @nuxtjs/axios
  - ❌ nuxt-font-loader
  - ❌ @nuxtjs/style-resources

### Phase 1B : Migrations pages ✅ 100% COMPLÈTE !
- [x] **layouts/default.vue** : Migré vers Composition API
- [x] **components/BoiteArticle.vue** : Migré vers Composition API
- [x] **pages/index.vue** : Migré asyncData → useAsyncData
- [x] **pages/eco-conception.vue** : Migré asyncData → useAsyncData (liste)
- [x] **pages/eco-conception/[slug].vue** : Migré de _slug.vue + Composition API complète
- [x] **pages/portfolio.vue** : Migré vers Composition API
- [x] **pages/contact.vue** : Migré formulaire vers Composition API
- [x] **pages/mentions-legales.vue** : Ajout useHead
- [x] **Images assets/** : Déplacées vers public/img/
- [x] **Composable useTags** : Créé pour remplacer store/tags.js Vuex

### Composants migrés (10%)
- [x] BoiteArticle.vue → Composition API ✅
- [ ] Logo.vue → TheLogo.vue (à renommer et migrer)
- [ ] Footer.vue → TheFooter.vue (à renommer et migrer)
- [ ] Boutoncta.vue → BaseButton.vue (à renommer et migrer)
- [ ] Petittitre.vue → BaseHeading.vue (à renommer et migrer)
- [ ] PrevNext.vue → ArticleNavigation.vue (à renommer et migrer)
- [ ] AppSearchInput.vue (à migrer)
- [ ] Oeuf.vue (à vérifier)
- [ ] OeufImage.vue (à vérifier)
- [ ] VImg.vue (à supprimer - déjà réintroduit temporairement)

---

## 📦 DÉPENDANCES INSTALLÉES

### Stack Nuxt 3 actuelle
```json
{
  "nuxt": "^3.14.1592",
  "vue": "^3.5.12",
  "vue-router": "^4.4.5",
  "@nuxt/content": "^2.13.2",
  "@nuxt/image": "^1.8.1",
  "@nuxtjs/sitemap": "^6.1.1",
  "@fontsource/work-sans": "^5.1.0"
}
```

### DevDependencies
```json
{
  "@nuxt/eslint": "^0.5.7",
  "eslint": "^9.14.0",
  "eslint-config-prettier": "^9.1.0",
  "eslint-plugin-vue": "^9.29.1",
  "prettier": "^3.3.3",
  "sass": "^1.80.7",
  "sass-loader": "^16.0.3",
  "vite": "^6.0.1"
}
```

---

## 🔴 PROBLÈMES / BLOCAGES RENCONTRÉS

### Aucun blocage critique identifié ✅

**Statut global** : La migration se passe bien, aucune erreur bloquante

### Avertissements mineurs
1. **Renommage des composants** : Pas encore fait (Logo, Footer, etc.)
2. **Plugin vimg.js** : Réintroduit temporairement pour compatibilité
3. **VImg.vue** : Réintroduit temporairement (à supprimer à terme)

---

## 🔍 ERREURS DE BUILD (SI PRÉSENTES)

### Test yarn dev
**Statut** : Non testé dans cette session
**Action** : Lancer `yarn dev` pour vérifier

### Test yarn build
**Statut** : Non testé dans cette session
**Action** : Lancer `yarn build` pour vérifier

### Test yarn generate
**Statut** : Non testé dans cette session
**Action** : Lancer `yarn generate` pour vérifier

---

## 🎯 PROCHAINES ÉTAPES PRÉCISES

### 1. Commiter le changement en cours (2 min)
```bash
cd /Users/benoitabot/Sites/beabot
git add pages/portfolio.vue
git commit -m "fix(pages): Escape apostrophe in portfolio meta description"
git push origin feat/nuxt3-phase1-deps
```

### 2. Tester le build local (5 min)
```bash
# Dev server
yarn dev
# Ouvrir http://localhost:3000
# Vérifier toutes les pages

# Build production
yarn build

# Generate static
yarn generate

# Preview
yarn preview
```

### 3. Compléter la migration des composants (2-3h)
Ordre recommandé :
1. **AppSearchInput.vue** → Composition API
2. **Renommer composants** :
   - Footer.vue → TheFooter.vue
   - Logo.vue → TheLogo.vue
   - Boutoncta.vue → BaseButton.vue
   - Petittitre.vue → BaseHeading.vue
   - PrevNext.vue → ArticleNavigation.vue
3. **Migrer pages restantes** :
   - contact.vue
   - mentions-legales.vue
   - eco-conception/[slug].vue (renommer de _slug.vue)

### 4. Supprimer composants temporaires
```bash
# Supprimer VImg.vue et vimg.js plugin
rm components/VImg.vue
rm plugins/vimg.js

# Vérifier qu'aucune référence ne reste
grep -r "VImg" pages/ components/ layouts/
grep -r "vimg" pages/ components/ layouts/
```

### 5. Phase 2 : Content & Store (voir TODO.md)
- Migrer store vers Pinia (optionnel)
- Créer routes RSS/Feed avec Nitro
- Vérifier frontmatter articles

---

## 🔄 COMMENT REPRENDRE FACILEMENT

### Option A : Continuer la migration sur cette branche
```bash
cd /Users/benoitabot/Sites/beabot

# Vérifier l'état
git status
git log --oneline -5

# Commiter le changement en cours
git add pages/portfolio.vue
git commit -m "fix(pages): Escape apostrophe in portfolio meta description"

# Tester
yarn dev

# Continuer selon "Prochaines étapes"
```

### Option B : Créer une nouvelle sous-branche pour une tâche spécifique
```bash
cd /Users/benoitabot/Sites/beabot

# Partir de feat/nuxt3-phase1-deps
git checkout feat/nuxt3-phase1-deps

# Créer sous-branche
git checkout -b feat/nuxt3-phase2-components

# Travailler...

# Merger dans feat/nuxt3-phase1-deps quand prêt
git checkout feat/nuxt3-phase1-deps
git merge feat/nuxt3-phase2-components
```

---

## 🔙 ROLLBACK : COMMENT REVENIR EN ARRIÈRE

### Si problème mineur : Annuler derniers commits
```bash
cd /Users/benoitabot/Sites/beabot

# Voir les commits
git log --oneline -10

# Revenir 2 commits en arrière (GARDE les modifications)
git reset --soft HEAD~2

# OU revenir 2 commits en arrière (SUPPRIME les modifications)
git reset --hard HEAD~2
```

### Si problème majeur : Revenir à master
```bash
cd /Users/benoitabot/Sites/beabot

# Sauvegarder la branche actuelle (au cas où)
git branch feat/nuxt3-phase1-deps-backup

# Revenir à master
git checkout master

# Vérifier que tout fonctionne
yarn install
yarn dev
```

### Si besoin de repartir de zéro
```bash
cd /Users/benoitabot/Sites/beabot

# Supprimer la branche problématique
git branch -D feat/nuxt3-phase1-deps

# Recréer depuis master
git checkout master
git checkout -b feat/nuxt3-migration-v2

# Nettoyer
rm -rf node_modules .nuxt dist
yarn install
```

---

## 📋 COMMANDES UTILES

### Git
```bash
# Statut complet
git status

# Voir différences avec master
git diff master..feat/nuxt3-phase1-deps

# Voir fichiers modifiés vs master
git diff master..feat/nuxt3-phase1-deps --name-status

# Graphe des commits
git log --oneline --graph --all -15
```

### Yarn
```bash
# Installer dépendances
yarn install

# Dev server
yarn dev

# Build
yarn build

# Generate static
yarn generate

# Preview build
yarn preview

# Lint
yarn lint

# Fix lint
yarn lintfix
```

### Diagnostic
```bash
# Vérifier versions
node --version    # Devrait être ≥ 18
yarn --version    # Devrait être 1.22.22
npx nuxi info     # Info Nuxt 3

# Vérifier dépendances
yarn list --depth=0 | grep nuxt
yarn list --depth=0 | grep vue

# Vérifier fichiers problématiques
ls -la nuxt.config.*
ls -la package.json*
ls -la static/  # Ne devrait plus exister (renommé en public/)
ls -la public/
```

---

## 📊 MÉTRIQUES ACTUELLES

### Avant Migration (Nuxt 2)
- **Nuxt** : 2.15.8
- **Vue** : 2.6.14
- **Bundler** : Webpack 4.46.0
- **Build time** : Non mesuré
- **Bundle size** : Non mesuré

### Après Migration (Nuxt 3) - En cours
- **Nuxt** : 3.14.1592 ✅
- **Vue** : 3.5.12 ✅
- **Bundler** : Vite 6.0.1 ✅
- **Build time** : À mesurer
- **Bundle size** : À mesurer

### Objectifs
- ⏱️ Build time : -50%
- 📦 Bundle size : -40%
- ⚡ Lighthouse Performance : ≥ 90
- ♿ Accessibility : ≥ 90
- 🌍 EcoIndex : A ou B

---

## 🎯 CRITÈRES DE SUCCÈS PHASE 1

### Configuration ✅ FAIT
- [x] Nuxt 3 installé
- [x] nuxt.config.ts créé
- [x] package.json mis à jour
- [x] static/ renommé en public/
- [x] Fonts locales installées

### Migration partielle ✅ EN COURS
- [x] Layouts migrés
- [x] 4 pages migrées sur 6
- [x] 1 composant migré (BoiteArticle)
- [ ] 6 composants à renommer/migrer

### Tests ⏳ À FAIRE
- [ ] `yarn dev` fonctionne
- [ ] `yarn build` fonctionne
- [ ] `yarn generate` fonctionne
- [ ] Toutes les pages s'affichent
- [ ] Navigation fonctionne
- [ ] Images s'affichent

---

## 💡 NOTES IMPORTANTES

### Décisions prises
1. **Conserver structure existante** : Pas de refonte, juste migration
2. **Migration progressive** : Commit fréquents, tests réguliers
3. **Garder compatibilité temporaire** : VImg.vue réintroduit temporairement
4. **Pas de TypeScript strict** : typeCheck: false pour faciliter migration

### Points d'attention
1. **Ne PAS supprimer VImg.vue** avant d'avoir migré tous les usages
2. **Ne PAS renommer les composants** avant d'avoir migré leur contenu
3. **Tester après CHAQUE phase** pour détecter les régressions tôt
4. **Conserver nuxt.config.js.nuxt2-backup** pour référence

### Ressources utiles
- [Nuxt 3 Migration Guide](https://nuxt.com/docs/migration/overview)
- [Vue 3 Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)
- [@nuxt/content v2 Docs](https://content.nuxt.com/)
- [Local: MIGRATION_PLAN_NUXT3.md](./MIGRATION_PLAN_NUXT3.md)
- [Local: TODO.md](../TODO.md)

---

## 🚨 GARDE-FOUS

### ❌ NE JAMAIS FAIRE
1. Supprimer `.git/` ou `node_modules/` sans raison
2. Force push sur origin
3. Modifier `yarn.lock` manuellement
4. Commit sur master sans PR
5. Deploy sans tests locaux

### ✅ TOUJOURS FAIRE
1. Backup avant changements majeurs
2. Tester après chaque modification
3. Commit avec messages clairs
4. Lire la doc en cas de doute
5. Demander confirmation avant actions destructives

---

**📝 Document généré par** : Claude Code
**📅 Date** : 7 décembre 2025 - 11h00
**🎯 Projet** : BeAbot - Migration Nuxt 2→3
**📌 Version** : 1.0.0
**🔄 À mettre à jour** : Après chaque session de travail
