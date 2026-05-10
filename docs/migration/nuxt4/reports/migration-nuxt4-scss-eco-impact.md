# SCSS-5 — Validation éco-impact CSS moderne

Date : 29 avril 2026

## Objectif

Valider l'éco-impact des étapes SCSS-1 à SCSS-4 en vérifiant que le CSS généré n'a pas grossi et que les imports explicites n'introduisent pas de duplication.

## Contexte

Étapes déjà réalisées :
- `SCSS-1` : inventaire
- `SCSS-2` : couleurs vers custom properties CSS
- `SCSS-3` : tokens typographiques simples vers custom properties CSS
- `SCSS-4` : imports SCSS explicites, `additionalData` vidé

## Mesure CSS globale

Voir :
- `scss-eco-assets-current-bytes.txt`
- `scss-eco-css-chunks-current.txt`
- `scss-eco-total-current.txt`
- `scss-eco-historical-comparison.txt`

| Étape | Total CSS | Écart | Décision |
|---|---:|---:|---|
| SCSS-2 première version | 224 089 | n/a | rejetée avant merge |
| SCSS-2 corrigé | 206 807 | -17 282 | conservée |
| SCSS-3 | 207 232 | +425 | conservée |
| SCSS-4 | 171 279 | -35 953 | conservée |
| SCSS-5 courant | 171 279 | 0 | validation positive |

## Chunks CSS

Résumé :
- nombre de fichiers CSS : 18
- plus gros chunk : `index.CbiT0l6m.css` — 24 055 octets
- CSS homepage :
  - `entry.B_fgAJq0.css`
  - `default.SEYJ-Rxi.css`
  - `vendor-libs.Df1OGHDb.css`
  - `index.1qW8q2Sl.css`
- évolution notable : le total CSS reste à 171 279 octets après merge sur `dev`, soit -35 953 octets par rapport à SCSS-3 et -35 528 octets par rapport à SCSS-2 corrigé.

## Duplication des tokens

Voir :
- `scss-eco-root-occurrences.txt`
- `scss-eco-color-token-occurrences.txt`
- `scss-eco-typo-token-occurrences.txt`
- `scss-eco-token-duplication-analysis.txt`

Conclusion :
- duplication détectée :
  - non

Le CSS généré est minifié : les fichiers `scss-eco-color-token-occurrences.txt` et `scss-eco-typo-token-occurrences.txt` sont vides parce que le grep ancré ne matche pas la ligne minifiée. Le fichier `scss-eco-root-occurrences.txt` confirme que les tokens couleur et typographie sont présents dans le chunk global, sans réémission dans chaque chunk de page.

## Imports explicites

Voir :
- `scss-eco-explicit-imports-check.txt`

Résultat :
- `TOTAL_DEPENDANCES_IMPLICITES` : 0

## Opportunités CSS moderne

Voir :
- `scss-eco-modern-css-opportunities.txt`
- `scss-eco-modern-css-opportunities-analysis.txt`

### Déjà fait

- custom properties couleur ;
- custom properties typo simples ;
- imports SCSS explicites ;
- suppression de l'injection globale `additionalData`.

### Opportunités sûres pour une prochaine branche

- remplacer localement des usages simples `$vert`, `$gris*`, `$bleu*`, `$jaune`, `$fond*` par `var(--color-...)` quand cela permet de supprimer un import `_colors.scss` entier ;
- remplacer localement `$bold`, `$normal`, `$light`, `$black` par `var(--font-weight-...)` quand cela permet de supprimer un import `_typo.scss` entier ;
- migrer les espacements simples `$space-*` vers des custom properties CSS dans une étape dédiée ;
- convertir progressivement les usages `min(max(...), ...)` hérités en `clamp(...)` si le rendu compilé reste strictement identique.

### À garder côté Sass pour l'instant

- `$breakpoint-tablet` ;
- maps typo ;
- calculs Sass fluides ;
- helpers complexes ;
- cas `color.adjust()` non couverts par fallback.

### Couleurs relatives CSS

Les couleurs relatives CSS peuvent permettre à terme de remplacer certains ajustements Sass par des calculs natifs, par exemple :

```css
hsl(from var(--color-green) h s calc(l + 8%))
rgb(from var(--color-green) r g b / 0.8)
oklch(from var(--color-green) calc(l * 0.9) c h)
```

Références consultées :
- MDN — Using relative colors : https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Colors/Using_relative_colors
- MDN — `calc()` : https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/calc
- Chrome Developers — CSS relative color syntax : https://developer.chrome.com/blog/css-relative-color-syntax

Décision :
- ne pas migrer massivement maintenant ;
- utiliser uniquement avec fallback ou `@supports` ;
- tester séparément la compatibilité navigateur ;
- éviter de dégrader l'accessibilité des contrastes.

## Micro-ajustements effectués

> Aucun micro-ajustement CSS applicatif n'a été effectué dans cette branche. SCSS-5 reste une validation d'impact et un cadrage des opportunités.

## Validation

- `npm run generate` : succès, 100 routes générées.
- `npm test` : succès.
- check SEO : succès.
- Lighthouse local :
  - non fait

Lighthouse local non relancé dans cette branche ; validation limitée au poids CSS, generate, tests et SEO check.

## Conclusion

- `SCSS-5` :
  - fait
- CSS généré :
  - réduit
- Décision :
  - validation positive
- Prochaine étape recommandée :
  - ne pas faire `SCSS-6` tout de suite ;
  - ouvrir une branche dédiée uniquement si un lot CSS moderne sûr est identifié.
