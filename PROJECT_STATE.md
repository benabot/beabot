# 📊 ÉTAT DU PROJET - BeAbot

> **Récapitulatif de l'état du projet au 28 avril 2026**

---

## 🔜 PROCHAINES ÉTAPES (ordonnées)

1. **Review visuelle `/services/`** — Vérifier le rendu desktop/mobile de la branche `feat/design-services` avant merge dans `dev`.
2. **Lint global repo-wide** — `npm run lint` reste bloqué par des warnings/formatages historiques hors périmètre ; à traiter séparément avant les gros chantiers.
3. **Tests** — Lancer la suite de tests existante sur `dev` ; combler les manques critiques avant migration.
4. **Performance PSI mobile 99 → 100** — Éliminer les 3 CSS render-blocking identifiés dans l'audit PageSpeed Insights du 27 avril 2026 (`/_nuxt/entry.css` 444ms, `/_nuxt/default.css` 389ms, `/_nuxt/index.css` 441ms) — économie estimée 270ms LCP/FCP. Options détaillées dans `TODO.md` (Backlog Nuxt 4 / Étape 1).
5. **Refactor SCSS → CSS moderne** — Warnings Sass `if-function` corrigés le 27 avril 2026 dans `assets/css/vars/_typo.scss` (2 `if()` dépréciés → `@if`/`@else`) et `darken()` dans `BoiteArticle.vue` (→ `color.adjust()`). Refactor complet planifié (Étape 2b dans `TODO.md`).
6. **Migration Nuxt 4** — Branche `chore/nuxt4-migration` après validation des étapes 2–5 ; roadmap complète dans `TODO.md`.

---

## 🎯 SITUATION ACTUELLE

### Site en production

SiteURLStackBranchÉtat**Production**<https://beabot.fr>Nuxt 3.14master✅ Stable**Dev Preview**<https://dev-beabot.netlify.app>Nuxt 3.14dev✅ Tests

### Dernière mise à jour

**Services freelance — relief visuel & maillage (28 avril 2026)** — Branche `feat/design-services`.

- ✅ Page `/services/` retravaillée visuellement sans changer son positionnement commercial : hero enrichi, œufs décoratifs, accents colorés, bande sombre pour la zone d'intervention, CTA final plus incarné
- ✅ Les 3 familles d'offres sont conservées : WordPress, Vue.js / Nuxt, audit éco-conception & performance
- ✅ Section tarifs conservée et renommée **Fourchettes habituelles**, avec précision sur les ordres de grandeur selon périmètre, contenu, intégrations et complexité
- ✅ Maillage `/services/` renforcé vers `/portfolio/`, `/contact/`, `/eco-conception/`, `/greenlight/` et les articles longue traîne
- ✅ Liens retour sobres ajoutés ou contextualisés depuis `audit-site-web`, `wordpress-freelance-lille`, `refonte-site-eco-concu` et `wordpress-vs-nuxt` vers `/services/`
- ✅ `npm run generate` validé (100 routes)
- ✅ Prettier ciblé OK sur les fichiers modifiés ; ESLint ciblé sur `pages/services.vue` sans erreur
- ⚠️ `npm run lint` global reste non bloquant avec warnings/formatages historiques repo-wide

**SEO & Repositionnement freelance — phase 1 (27 avril 2026)** — Branche `feat/seo-for-freelance-v1`.

- ✅ Page `/services/` créée (H1 : "Missions freelance — WordPress, JavaScript (Vue.js), éco-conception") avec hero, 3 sections missions, zone géo, tarifs indicatifs, CTA final — JSON-LD `ProfessionalService` + `BreadcrumbList`
- ✅ Navigation principale et footer enrichis avec l’entrée `Services`
- ✅ CTA freelance ajouté en bas de `/eco-conception/` (eyebrow "Freelance disponible", signal Lille/HDF/remote)
- ✅ Encart "Faire faire son site Greenlight" ajouté sur `/greenlight/`
- ✅ 4 articles 2021-2022 mis à jour : `updatedAt: 2026-04-27`, note éditoriale en début de body, CTA freelance en conclusion
- ✅ Page `/eco-conception/` : les cartes affichent maintenant `updatedAt` quand plus récent que `date`
- ✅ `npm run generate` validé (84 routes)

**Formulaire d’intérêt apps (24 avril 2026)** — Mise à niveau du composant partagé `AppReleaseInterestForm` sur la branche `fix/app-release-interest-form`.

- ✅ Les pages `/apps/siturem/`, `/apps/duo-spend/` et `/apps/meeting-mode/` conservent le CTA `Être informé`
- ✅ Le CTA descend vers la section `#release-form` et ouvre un vrai formulaire Netlify
- ✅ Champs `nom` optionnel, `email` obligatoire, `app` préremplie et consentement explicite
- ✅ États succès / erreur et validation client ajoutés sans backend ni dépendance externe

**Page Siturem (24 avril 2026)** — Création de `/apps/siturem/` sur la branche `feature/add-siturem-portfolio`, puis simplification après revue en retirant le bloc visuel intermédiaire jugé superflu.

- ✅ Page Siturem ajoutée sur le modèle des autres pages Apps
- ✅ Galerie alimentée avec les visuels `public/img/siturem/`
- ✅ Politique de confidentialité intégrée en FR / EN / ES / DE
- ✅ Bloc visuel intermédiaire retiré pour garder une page plus sobre

**Fix Liens tags article + bas de page (24 avril 2026)** — Correctif ciblé sur les pages articles éco-conception et synchronisation de l’archive filtrée.

- ✅ Les tags cliquables des articles pointent vers `/eco-conception/?tag=...#eco-archive`
- ✅ Le filtre actif est conservé via la query string `?tag=`
- ✅ Le conteneur principal des pages article dispose d’un padding bas dédié pour éviter le recouvrement par le footer
- ✅ Validation `npm run generate` OK
- ✅ Vérifications desktop et mobile réalisées sur les pages concernées

**Fix Footer transparent (23 avril 2026)** — Correction de l’intégration organique du footer sur la branche `fix/footer-clip-transparent`.

- ✅ Faux SVG de vague retiré du footer
- ✅ Sommet organique appliqué directement au footer via masque CSS
- ✅ Transparence réelle conservée dans la découpe, sans vague peinte ni fond simulé
- ✅ Masque borné à une hauteur de vague fixe pour éviter les bandes blanches sur la home
- ✅ Chevauchement footer/main conservé, mais sans gros padding global
- ✅ Marges basses ciblées sur `/contact/` et `/portfolio/` pour empêcher la vague de mordre le contenu
- ✅ Footer marqué `data-nav-theme="light"` pour garder la navigation lisible au survol de la zone sombre
- ✅ Validation `npm run generate` OK
- ⚠️ `npm run lint` reste non bloquant avec des warnings historiques repo-wide

**Phase 19 Rythme visuel Éco-conception (23 avril 2026)** — Amélioration visuelle de `/eco-conception/`.

- ✅ Alternance clair/sombre renforcée sans transformer la page en landing gadget
- ✅ Œufs décoratifs réintroduits dans le hero, les transitions, l’archive, la FAQ et le CTA final
- ✅ FAQ rééquilibrée avec une présence organique plus forte à gauche de l’introduction
- ✅ Navigation desktop rendue claire au survol des sections sombres marquées
- ✅ `npm run generate` et `seo-check` validés

**Phase 18 Page pilier Éco-conception (23 avril 2026)** — Refonte de `/eco-conception/` en page pilier éditoriale + archive.

- ✅ Fusion de l’ancienne approche éditoriale de la home avec l’archive d’articles éco-conception
- ✅ Hero, repères, impacts, définition, bénéfices, ressources, FAQ et CTA final restructurés
- ✅ Page conservée comme point d’entrée SEO et archive de blog
- ✅ Données structurées `CollectionPage + ItemList` conservées et `FAQPage` ajoutée
- ✅ Parent `pages/eco-conception.vue` simplifié pour éviter les métadonnées parasites

**Phase 17 Greenlight (22 avril 2026)** — Page `/greenlight/` et intégration dans la navigation principale.

- ✅ Page produit Greenlight créée avec hero, bénéfices, comparatif de versions, FAQ et CTA final
- ✅ Navigation principale et footer enrichis avec l’entrée `Greenlight`
- ✅ Positionnement recentré sur rapidité, visibilité, crédibilité, lisibilité, durabilité et maintenance simplifiée
- ✅ Deuxième passe commerciale: hero split plus affirmé, preuves Greenlight-free visibles, différence free/premium clarifiée et CTA de choix renforcé
- ✅ Navigation de la page Greenlight repassée en foncé pour mieux lire le produit sur fond clair
- ✅ Validation `npm run generate` relancée après la refonte et le réglage de la nav

**Phase 16 Homepage V3 (22 avril 2026)** — Refonte de la home selon le positionnement hybride services + éco-conception.

- ✅ Hero repositionné sur l’offre de développement web éco-conçu
- ✅ Sections preuves chiffrées, services, réalisations, Greenlight, approche, articles et CTA final reconstruites
