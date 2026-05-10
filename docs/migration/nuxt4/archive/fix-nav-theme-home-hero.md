# Fix nav sections sombres + hero homepage

Date : 28 avril 2026

## Problèmes

1. Sur `/portfolio/`, la navigation restait noire sur les sections sombres.
2. Sur `/eco-conception/`, la navigation restait noire sur certaines sections sombres.
3. Sur `/`, le hero dépassait 100vh depuis l'ajout du badge “Disponible pour missions”.

## Corrections

- `/portfolio/` :
  - sections sombres validées avec le pattern existant `data-nav-theme="light"` : hero noir et bloc compétences/contact.
- `/eco-conception/` :
  - ajout de `data-nav-theme="light"` sur la section promesse sombre ;
  - ajout de `data-nav-theme="light"` sur la section principes sombre ;
  - ajout de `data-nav-theme="light"` sur le CTA final sombre.
- `/` :
  - suppression du badge “Disponible pour missions” dans le hero.

## Validation

- `npm test` : succès
- `npm run generate` : succès
- check SEO : succès
- HTML Portfolio :
  - `fix-nav-theme-portfolio-html-check.txt`
- HTML Éco-conception :
  - `fix-nav-theme-eco-html-check.txt`
- Badge home :
  - `fix-home-hero-badge-check.txt`
