# 🎨 Phase 14.2 — Améliorations visuelles Portfolio

> **Branche** : `feature/portfolio-redesign` (ne pas merger, commits OK)
> **Objectif** : Améliorer la clarté, le dynamisme et la lisibilité de la page portfolio

---

## 📊 Diagnostic

### Problèmes identifiés

| Section | Problème | Impact |
|---------|----------|--------|
| Bloc Réalisations | Noyé dans la page, pas de séparation | Lecture confuse |
| Filtres | Pills grises, peu engageantes | Interaction faible |
| Cartes projet | Trop denses, hiérarchie faible | Fatigue visuelle |
| Métriques éco | Noyées dans le texte | USP invisible |
| Zigzag layout | Lecture difficile | Perte d'attention |
| Compétences | Liste de courses, pas de rupture | Section ignorée |

---

## 🎯 Objectifs

1. **Bloc Filtres/Titre** : Créer un vrai header de section distinct
2. **Cartes Réalisations** : Simplifier, hiérarchiser, mettre en valeur les métriques
3. **Section Compétences** : Rupture visuelle forte, présentation en cards

---

## 📐 Spécifications détaillées

### 1. Bloc Réalisations (header de section)

#### Structure HTML
```html
<section class="section-realisations">
  <header class="section-header">
    <div class="section-header__text">
      <h2>Réalisations</h2>
      <p class="section-header__count">7 projets • dont 3 éco-conçus</p>
    </div>
    <nav class="filters" role="tablist" aria-label="Filtrer les projets">
      <!-- Pills -->
    </nav>
  </header>
  
  <div class="projects-grid">
    <!-- Cartes -->
  </div>
</section>
```

#### Style
- **Fond** : Légèrement différencié (bordure ou fond très subtil)
- **Titre** : Plus gros (clamp(1.5rem, 4vw, 2rem)), avec trait dessous
- **Compteur** : Texte gris, taille réduite
- **Filtres** : Pills avec fond blanc, bordure visible, état actif en couleur
- **Layout** : Flex, titre à gauche, filtres à droite (mobile : empilé)

#### Filtres améliorés
```css
.filter-pill {
  padding: 0.5rem 1rem;
  border: 2px solid rgba(0, 0, 0, 0.15);
  border-radius: 999px;
  background: white;
  cursor: pointer;
  transition: all 0.15s ease;
}

.filter-pill:hover {
  border-color: var(--bleu1);
}

.filter-pill.active {
  background: var(--bleu1);
  color: white;
  border-color: var(--bleu1);
}
```

---

### 2. Cartes Réalisations

#### Objectif
Simplifier pour mettre en valeur : Image → Titre → Métriques → CTA

#### Hiérarchie typographique
| Élément | Style |
|---------|-------|
| Titre | `font-size: 1.4rem`, `font-weight: 700`, noir |
| Sous-titre | `font-size: 0.95rem`, gris moyen |
| Contexte | Masqué ou très discret |
| Rôle | `font-size: 0.85rem`, gris clair |
| Stack | Chips petites (0.7rem) |
| Métriques | **Badge vert visible** |

#### Badge métriques (projets éco-conçus)
```html
<div class="eco-badge">
  <span class="eco-badge__score">EcoIndex A</span>
  <span class="eco-badge__detail">4 requêtes • < 200 Ko</span>
</div>
```

```css
.eco-badge {
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  border: 1px solid #a5d6a7;
  border-radius: 12px;
  padding: 0.75rem 1rem;
  margin: 1rem 0;
}

.eco-badge__score {
  font-weight: 700;
  color: #2e7d32;
  font-size: 1.1rem;
}

.eco-badge__detail {
  display: block;
  font-size: 0.8rem;
  color: #558b2f;
  margin-top: 0.25rem;
}
```

#### Layout des cartes
**Option recommandée** : Garder le zigzag mais avec plus d'espace et moins de contenu visible.

Ou passer en **grille 2 colonnes** :
```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}
```

---

### 3. Section Compétences

#### Rupture visuelle
```css
.section-competences {
  background: #1a237e; /* Bleu foncé */
  color: white;
  padding: 4rem 0;
  margin-top: 4rem;
}
```

Ou alternative sobre :
```css
.section-competences {
  background: #f5f5f5;
  border-top: 3px solid var(--bleu1);
  padding: 4rem 0;
  margin-top: 4rem;
}
```

#### Layout en cards
```html
<section class="section-competences">
  <div class="container">
    <h2>Compétences</h2>
    
    <div class="skills-grid">
      <article class="skill-card">
        <h3>🎨 Front-end</h3>
        <ul>
          <li>Vue.js / Nuxt</li>
          <li>HTML / CSS / JS</li>
          <li>TypeScript</li>
        </ul>
      </article>
      
      <article class="skill-card">
        <h3>⚙️ Back-end / CMS</h3>
        <ul>
          <li>PHP / WordPress</li>
          <li>API REST</li>
          <li>SQL</li>
        </ul>
      </article>
      
      <!-- etc. -->
    </div>
  </div>
</section>
```

```css
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
}

.skill-card h3 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.skill-card ul {
  list-style: none;
  padding: 0;
}

.skill-card li {
  padding: 0.25rem 0;
  font-size: 0.9rem;
  opacity: 0.9;
}
```

---

## ✅ Checklist d'implémentation

### Étape 1 : Bloc Réalisations ✅ TERMINÉ

- [x] Restructurer le header de section
- [x] Agrandir le titre "Réalisations"
- [x] Ajouter trait bleu sous le titre
- [x] Refondre les pills des filtres (fond blanc, bordure 2px, état actif bleu)
- [x] Ajouter focus states accessibles

### Étape 2 : Cartes Réalisations ✅ TERMINÉ

- [x] Augmenter la taille des titres (clamp 1.4-1.8rem)
- [x] Supprimer le bloc "Rôle" (trop verbeux)
- [x] Créer badge éco-conception avec fond vert, bordure, icône 🌱
- [x] Ajouter plus d'espacement entre cartes (var(--space-6/7))
- [x] Simplifier tags et boutons CTA
- [x] **AJOUT** : Densifier les espacements internes des cartes

### Étape 3 : Section Compétences ✅ TERMINÉ

- [x] Ajouter fond gris dégradé avec trait fin bleu (version douce)
- [x] Transformer listes en cards avec fond blanc
- [x] Ajouter émojis aux titres (🎨 🌱 ⚙️ 🛠️)
- [x] Grid responsive 4 cols desktop / 2 tablette / 1 mobile
- [x] **AJOUT** : Remplacer le trait bleu épais par un dégradé subtil

### Étape 4 : Corrections finales ✅ TERMINÉ

- [x] Supprimer soulignements des liens "Lire l'article" (hover animé)
- [x] Densifier les cartes projet (réduction gaps internes)
- [x] Améliorer séparation section Compétences (trait dégradé)

---

## 🔄 Dernières mises à jour

- [x] Hiérarchie interne des cartes : titre > sous-titre > métriques > tags
- [x] Métriques éco limitées à 2 valeurs visibles
- [x] Tags limités à 2 + “+n” avec tooltip accessible (hover/focus/clavier)
- [x] CTA “Voir le site” aligné et stable (desktop à droite, mobile plein largeur)
- [x] Contraste adouci sur textes secondaires (section-count, labels filtres)
- [x] Suppression des micro-textes de transition (respiration via espacements)

---

## 📁 Fichiers concernés

| Fichier | Modifications |
|---------|---------------|
| `pages/portfolio.vue` | Header section, filtres, layout |
| `components/BoiteArticle.vue` | Simplification, EcoBadge |
| `components/EcoBadge.vue` | Nouveau composant (optionnel) |
| `assets/css/vars/_colors.scss` | Variables si nécessaire |

---

## 🚨 Contraintes

- **Branche** : Rester sur `feature/portfolio-redesign`
- **Commits** : OK, mais pas de merge
- **Éco-conception** : Pas de dépendances, CSS pur, SVG si icônes
- **Accessibilité** : Focus states, ARIA sur filtres
- **Mobile-first** : Tester sur 375px

---

**📝 Créé le** : 22 décembre 2025
**🎯 Priorité** : Haute
