# 🎨 AUDIT PHASE 4 - CSS & DOM OPTIMIZATION

> **Date** : 15 décembre 2025
> **Branche** : `optim/eco-phase-4`
> **Objectif** : Identifier et supprimer le CSS inutilisé + Optimiser la structure DOM

---

## 📊 RÉSULTATS DE L'AUDIT

### Métriques actuelles

| Métrique | Valeur | Statut | Objectif |
|----------|--------|--------|----------|
| **HTML Size** | 28.6 KB | ✅ Excellent | < 30 KB |
| **DOM Elements** | ~524 éléments | ✅ Excellent | < 1500 éléments |
| **Total CSS** | 68 KB (12 fichiers) | ⚠️ À optimiser | Réduire |
| **Largest CSS** | 16 KB (entry.css) | ⚠️ À optimiser | Fragmenter |

### Distribution des fichiers CSS

```
16K  entry.B8jsYLi6.css          (CSS principal)
12K  index.CvbzJ0zi.css          (Homepage)
12K  default.GhFZ2kk2.css        (Layout)
12K  _slug_.DOk-8Ur5.css         (Articles)
8.0K index.DB7B45cJ.css
5.0K BaseButton.CV8hoyZE.css
4.2K BoiteArticle.BKX8lt6N.css
2.7K portfolio.DxvKa-YU.css
2.2K mentions-legales.olkArJ_c.css
2.1K Oeuf.DcGeFRpi.css
2.0K eco-conception.BzlO_oqJ.css
575B contact.DyVP7x1j.css
```

---

## 🔍 ANALYSE CSS INUTILISÉ

### Classes utilitaires dans main.scss

#### ✅ Classes UTILISÉES (à conserver)
- **Couleurs** : `.fond-gris`, `.fond-clair`, `.text-gris1-6`, `.text-blanc`, `.text-vert`
- **Typographie** : `.text-fin`, `.text-normal`, `.text-bold`, `.text-black`
- **Typography features** : `.chiffre-onum` (utilisé dans TheFooter.vue)
- **Espacement** : `.mt-1`, `.mt-2`, `.ml-1`, `.ml-2`
- **Transitions** : `.scale-enter-active`, `.scale-leave-active`
- **Layout** : `.container`, `.title`, `.seepost`

#### ❌ Classes INUTILISÉES (à supprimer)
1. **`.chiffre-lnum`** - Jamais utilisée (chiffres lining)
2. **`.lettre-smcp`** - Utilisée uniquement en 3 endroits mais génère du code font-feature-settings inutile
3. **`.fixe`** - Jamais utilisée (position: fixed)
4. **`.intro-enter-active`, `.intro-leave-active`** - Transitions inutilisées (code mort ~40 lignes)
5. **Plusieurs couleurs** : `.jaune`, `.bleu1`, `.bleu2`, `.vert` (backgrounds inutilisés, utiliser directement les variables)

### CSS commenté (à supprimer)

```scss
// Lignes 103-108: h1-h6 commentés
// Lignes 187-189: paragraphes commentés
// Lignes 224-239: h1-h4 commentés
// Lignes 241-256: .container commentés
// Lignes 473-533: .intro transitions commentées (60 lignes!)
// Lignes 536-552: media queries h1-h4 commentés
```

**Total** : ~150 lignes de code commenté à supprimer

---

## 🏗️ ANALYSE DOM

### Structure actuelle (homepage)

- **Total éléments** : ~524 ✅
- **Profondeur DOM** : Raisonnable
- **Éléments inutiles** : Aucun identifié

### Optimisations possibles

1. **SVG inline** : De nombreux SVG Oeuf répétés
   - Solution : Considérer `<use>` pour réutiliser les formes
   - Impact : Réduction ~5-10% HTML

2. **Éléments wrapper** : Structure globale correcte
   - Pas d'optimisation majeure nécessaire

---

## 📋 RECOMMANDATIONS PHASE 4

### Priorité HAUTE (à faire)

1. **Supprimer CSS inutilisé**
   - `.chiffre-lnum`, `.fixe`
   - `.intro-*` transitions (40 lignes)
   - Classes utilitaires couleur non utilisées

2. **Supprimer code commenté**
   - ~150 lignes à nettoyer
   - Réduction estimée : -10% taille CSS

3. **Minification supplémentaire**
   - Déjà activée ✅ (Terser + Nitro)

### Priorité MOYENNE (optionnel)

4. **Optimiser `.lettre-smcp`**
   - Utilisée uniquement 3x
   - Considérer inline CSS pour ces 3 cas
   - Économie : ~30 lignes

5. **Refactoriser classes couleur**
   - Utiliser variables SCSS directement dans composants
   - Au lieu de classes utilitaires

### Priorité BASSE (Phase 5)

6. **SVG sprites**
   - Mutualiser les Oeuf SVG
   - Impact modéré : -5-10% HTML

---

## 💡 IMPACTS ESTIMÉS

### Après suppression CSS inutilisé

| Métrique | Avant | Après (estimé) | Gain |
|----------|-------|----------------|------|
| **main.scss** | 553 lignes | ~380 lignes | **-31%** |
| **CSS total** | 68 KB | ~58 KB | **-15%** |
| **CSS entry** | 16 KB | ~13 KB | **-18%** |

### Métriques finales attendues

- ✅ HTML : 28.6 KB (maintenu)
- ✅ DOM : 524 éléments (maintenu)
- 🎯 CSS : -10 KB (-15%)
- 🎯 Code plus maintenable

---

## 🎯 PLAN D'ACTION

### Étape 1 : Nettoyage CSS (30 min)
1. Supprimer `.chiffre-lnum`, `.fixe`, `.intro-*`
2. Supprimer tout le code commenté
3. Vérifier que rien ne casse

### Étape 2 : Build et tests (10 min)
1. `npm run generate`
2. Vérifier tailles CSS
3. Tests visuels sur toutes les pages

### Étape 3 : Documentation (5 min)
1. Commit avec détails
2. Mise à jour TODO.md

---

**📊 Conclusion** : Le site est déjà très bien optimisé (524 DOM elements, 28.6 KB HTML). L'opportunité principale est le **nettoyage du CSS inutilisé** pour gagner ~10 KB et améliorer la maintenabilité.

**🎯 Prochain commit** : Suppression CSS inutilisé et code commenté
