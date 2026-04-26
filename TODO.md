- \[x\] Page produit `/greenlight/` créée avec hero, bénéfices, comparatif de versions, FAQ et CTA final
- \[x\] Positionnement Greenlight recentré sur rapidité, visibilité, crédibilité, lisibilité et durabilité
- \[x\] Différence Greenlight-free / Greenlight rendue explicite sans inventer de lien de téléchargement
- \[x\] Navigation principale réordonnée avec entrée `Greenlight`
- \[x\] Footer mis à jour avec lien `Greenlight`
- \[x\] CTA existants de la home vérifiés sur `/greenlight/`
- \[x\] Deuxième passe commerciale sur `/greenlight/` : hero plus fort, preuves free visibles, distinctions free/premium clarifiées et CTA de choix renforcé
- \[x\] Navigation de `/greenlight/` repassée en foncé pour mieux lire la page produit claire
- \[x\] Validation `npm run generate` + `NUXT_PUBLIC_SITE_URL=https://beabot.fr node scripts/seo-check.mjs`

**Phase 16 Homepage V3 (22 avril 2026)** — Refonte de la home selon le positionnement hybride services + éco-conception, sur la branche `feature/home-v3-positioning`.

- \[x\] Hero repositionné sur l’offre de développement web éco-conçu
- \[x\] Bloc de preuves chiffrées recentré sur les métriques de [beabot.fr](http://beabot.fr)
- \[x\] Section services reconstruite autour de 3 offres lisibles
- \[x\] Section réalisations recentrée sur 4 projets prioritaires
- \[x\] Bloc Greenlight intégré sans inventer de lien de téléchargement
- \[x\] Section approche raccourcie avec lien vers `/eco-conception/`
- \[x\] Articles déplacés plus bas dans la page avec logique de listing conservée
- \[x\] CTA final réaligné sur la promesse WordPress sobre, rapide et durable
- \[x\] SEO homepage mis à jour (title, description, JSON-LD Organization / Person)
- \[x\] Navigation desktop recalée sur le hero (masquée sur `.home-hero`, visible ensuite)
- \[x\] Hover des cartes de réalisations recentré sur un zoom image plus doux et plus long, sans mouvement du texte
- \[x\] Validation `npm run generate` + `NUXT_PUBLIC_SITE_URL=https://beabot.fr node scripts/seo-check.mjs`

**Phase 14 Portfolio + Homepage Mobile** — Prêt pour merge sur master.

**Patch Portfolio (25 janvier 2026)** — Correctif d’affichage projet BORDUR.

**Pages Apps (26 mars 2026)** — Landing `/apps/` + pages détail Meeting Mode / DuoSpend.

- \[x\] Recomposition de la landing `/apps/` (hero, grille, CTA, cartes)

- \[x\] Intégration des images DuoSpend dans les cartes et la page détail

- \[x\] Hiérarchie visuelle du milieu de page DuoSpend (galerie, FAQ, confidentialité)

- \[x\] Ancre `#privacy` auto-ouverte sur la section confidentialité

- \[x\] CTA de bas de page harmonisés avec le design system

- \[x\] H1 de `/apps/` neutralisé sur `iOS` et `macOS`

- \[x\] Galerie DuoSpend réorganisée en 2x3 avec images entières

- \[x\] Card `Un solde` mise en avant avec description détaillée

- \[x\] Formulaire d’intérêt et lien `/contact/` conservés sur les pages enfants

- \[x\] Référence `preview.src` de DuoSpend alignée sur `duospend-hero.webp`

- \[x\] Wording DuoSpend mis à jour dans `data/apps.ts`

- \[x\] Navigation mobile corrigée pour masquer la nav desktop et conserver `Apps` avant `Contact`

- \[x\] Refonte Meeting Mode (hero, before/after, galerie, FAQ, confidentialité)

- \[x\] Preview Meeting Mode activée dans la landing `/apps/`

- \[x\] Galerie Meeting Mode alimentée par les visuels macOS du dossier `public/img/apps/`

- \[x\] Ancre `#privacy` auto-ouverte sur la confidentialité Meeting Mode

- \[x\] Wording Meeting Mode aligné dans `data/apps.ts`

- \[x\] Lightbox native réutilisable pour les galeries DuoSpend et Meeting Mode

- \[x\] Renommage public "chasse-patate" → "BORDUR"

- \[x\] Liens projet mis à jour (topette.netlify.app → [bordur.fr](http://bordur.fr))

MétriqueValeurStatut**Framework**Nuxt 3.14✅**URLs**Trailing slash normalisé✅**Portfolio**Refonte complète✅**Homepage**Améliorations mobile UX✅**Structured Data**Toutes pages principales✅**EcoIndex**A✅**Lighthouse**99 / 96 / 100 / 100✅

---

## ✅ PHASES TERMINÉES

### Phase 14 : Refonte Portfolio + Homepage Mobile ✅

> **Terminée le 24 décembre 2025Branche** : `dev`

#### Portfolio - Structure et contenu

- \[x\] **PF-14-01** : Section Hero avec intro personnelle + CTAs (CV, Contact)
- \[x\] **PF-14-02** : Section compétences techniques (4 colonnes colorées)
- \[x\] **PF-14-03** : Données projets enrichies (contexte, rôle, résultats)
- \[x\] **PF-14-04** : CTA final avec œufs décoratifs + liens CV/Contact

#### Portfolio - Design et UX

- \[x\] **PF-14-05** : Filtres refondus (boutons visuels, compteur dynamique)
- \[x\] **PF-14-06** : Cartes projet améliorées (hiérarchie typo, badges éco)
- \[x\] **PF-14-07** : Bloc métriques sur projets éco-conçus (EcoIndex, poids, requêtes)
- \[x\] **PF-14-08** : Responsive mobile
- \[x\] **PF-14-16** : Timeline sobre entre sections (points d'ancrage visuels)
- \[x\] **PF-14-17** : Compétences en rangée horizontale avec couleurs par catégorie
- \[x\] **PF-14-18** : CTA final compact avec œufs (symétrie avec Hero)
- \[x\] **PF-14-19** : Lien GitHub intégré dans section Compétences
- \[x\] **PF-14-20** : Ajustements finaux (CTA height, object-position images, spacing)

#### Portfolio - SEO et accessibilité

- \[x\] **PF-14-09** : Meta description orientée recrutement
- \[x\] **PF-14-10** : JSON-LD ProfilePage + Person
- \[x\] **PF-14-11** : Attributs ARIA sur filtres interactifs
- \[x\] **PF-14-12** : Focus states accessibles

#### Portfolio - Données structurées
