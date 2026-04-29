# 📊 ÉTAT DU PROJET - BeAbot

> **Récapitulatif de l'état du projet au 29 avril 2026**

---

## 🔜 PROCHAINES ÉTAPES (ordonnées)

1. **DEP-2 / Content v3 Lot 1** — Installer uniquement `@nuxt/content@3`, puis creer `content.config.ts` avec la collection `articles` documentee (`articles/**/*.md`, prefix `/eco-conception`) ; ne pas migrer sitemap/image/eslint.
2. **Sitemap / Image / ESLint** — Traiter séparément après Nuxt et Content : `@nuxtjs/sitemap`, `@nuxt/image`, puis `@nuxt/eslint` probablement en dernier.
3. **CONFIG-* restants selon besoin** — Les options Nuxt 4 ont ete auditees ; ne corriger que si un warning futur ou une mise a jour de module l'exige.
4. **DIR-* app directory** — Ne pas deplacer vers `app/` tant que Nuxt 4 fonctionne avec l'arborescence actuelle ; garder un lot dedie si besoin.
5. **Lint global repo-wide** — `npm run lint` reste bloqué par des warnings/formatages historiques hors périmètre ; à traiter séparément.
6. **SCSS-6** — Ne pas supprimer SCSS tout de suite. Ouvrir une branche dédiée uniquement si un lot CSS moderne sûr est identifié.

---

## 🎯 SITUATION ACTUELLE

### Site en production

SiteURLStackBranchÉtat**Production**<https://beabot.fr>Nuxt 3.14master✅ Stable**Dev Preview**<https://dev-beabot.netlify.app>Nuxt 3.14dev✅ Tests

### Branche active de migration

**`chore/nuxt4-migration`** — branche documentaire et préparatoire Nuxt 4.

- Base actuelle validée : Nuxt `4.4.2`, Nitro `2.13.3`, Vue `3.5.33`, Vite direct `6.4.1` (`7.3.2` côté builder Nuxt)
- `future.compatibilityVersion: 4` actif
- Génération statique validée : 100 routes prerendered
- Derniers commits documentaires :
  - `75d9207` — `docs: rafraichir baseline compat Nuxt 4`
  - `e1e6b6a` — `docs: cartographier migration Content v3`
  - `9e8423a` — `docs: auditer dependances avant Nuxt 4`
  - `bbe2924` — `chore: supprimer override interne Nuxt paths`
  - `7761c77` — `chore: auditer configuration Nuxt 4`

## Migration Nuxt 4 — état courant

Branche : `chore/nuxt4-migration`

Dernière décision :
- CONTENT-DOCS / DEP-2-PREP réalisé le 29 avril 2026.
- Résultat : succès.
- Version Nuxt : `4.4.2`.
- Rapport : `migration-nuxt4-content-v3-docs-audit.md`.
- Documentation officielle Nuxt Content v3 consultee :
  - collections, `content.config.ts`, sources, schema, `queryCollection`, API serveur, recherche, `<ContentRenderer>`, static hosting.
- Decisions preparees :
  - collection cible `articles` en `type: 'page'` ;
  - source cible `{ include: 'articles/**/*.md', prefix: '/eco-conception' }` ;
  - `queryContent()` -> `queryCollection()` ;
  - `findSurround()` -> `queryCollectionItemSurroundings()` ;
  - `serverQueryContent()` -> `queryCollection(event, ...)` pour les routes Nitro ;
  - `_path` -> `path`.
- Validation :
  - documentation only, aucune validation runtime necessaire.
- Prochaine étape :
  - lancer `DEP-2 / Content v3 Lot 1` uniquement quand l'installation `@nuxt/content@3` est explicitement demandee, avec decision prealable sur le validateur de schema.

Contraintes maintenues :
- Content v2 non migré dans CONTENT-DOCS.
- Aucun `content.config.ts` cree dans CONTENT-DOCS.
- Aucun déplacement vers `app/` dans CONTENT-DOCS.
- Modules sitemap/image/eslint non migrés dans CONTENT-DOCS.
- Aucune migration API Content faite dans CONTENT-DOCS.

### Dernière mise à jour

**Migration Nuxt 4 — audits préparatoires & ordre d'exécution (28–29 avril 2026)** — Branche `chore/nuxt4-migration`.

- ✅ Étape 0 tests renforcée : tests unitaires SEO URL, contrat `AppLink`, smoke tests pages générées, tests RSS/JSON Feed, garde-fou Content v2 via `scripts/check-content-queries.mjs`
- ✅ Étape 2 fichiers inutiles traitée : 26 fichiers suivis Git supprimés, dont composants/images/scripts orphelins ; `getSiteMeta.js` supprimé ; aucune dépendance modifiée
- ✅ Étape 2b SCSS avancée :
  - couleurs SCSS exposées en custom properties CSS avec aliases de transition
  - tokens typographiques simples exposés en custom properties CSS
  - imports SCSS explicites ajoutés dans 27 fichiers
  - `additionalData` vidé
  - dépendances implicites SCSS restantes : 0
  - CSS généré stabilisé à 171 279 octets, soit -35 953 octets après suppression de l'injection globale
- ✅ Refresh compatibilité Nuxt 4 après SCSS :
  - `npm test` OK : 49 pre-build checks, Content v2 query checks OK, 18 tests Node OK
  - `npm run generate` OK : 100 routes prerendered
  - aucun warning Nuxt 4 bloquant identifié
  - codemod non lancé avec installation : `npx --no-install codemod ...` documenté comme indisponible localement
- ✅ CONTENT-PREP réalisé :
  - 12 fichiers impactés cartographiés
  - 7 appels applicatifs `queryContent()`
  - 6 occurrences applicatives `serverQueryContent`
  - 1 usage `findSurround()`
  - 32 occurrences applicatives `_path`
  - fichiers les plus risqués : `pages/eco-conception/[slug].vue`, `server/routes/rss.xml.ts`, `server/routes/feed.json.ts`, `nuxt.config.ts`, `components/AppSearchInput.vue`
  - rapports : `migration-nuxt4-content-prep.md`, `content-prep-query-map.md`, `content-prep-v2-v3-mapping.md`, `content-prep-content-config-plan.md`, `content-prep-migration-order.md`, `content-prep-tests-plan.md`
- ✅ DEP-AUDIT réalisé :
  - `package.json` comparé au lock et à `npm ls`
  - versions cibles vérifiées via `npm view` sans installation : `nuxt@4.4.2`, `@nuxt/content@3.13.0`, `@nuxt/image@2.0.0`, `@nuxtjs/sitemap@8.0.14`, `@nuxt/eslint@1.15.2`
  - override interne `#internal/nuxt/paths` confirmé présent
  - ordre recommandé : `DEP-6` → `DEP-1` → `CONFIG-*`/`DIR-*` si nécessaire → `DEP-2` Content → `DEP-3` sitemap → `DEP-4` image → `DEP-5` eslint
  - rapports : `migration-nuxt4-dep-audit.md`, `dep-audit-update-order.md`, `dep-audit-target-versions.txt`, `dep-audit-peer-risks.txt`
- ✅ Aucune dépendance modifiée dans les audits `CONTENT-PREP` et `DEP-AUDIT`
- ✅ Aucune migration API Content faite
- ✅ Aucun `content.config.ts` créé
- ✅ Aucun fichier déplacé vers `app/`
- ✅ CONTENT-DOCS / DEP-2-PREP réalisé :
  - documentation officielle Nuxt Content v3 consultee
  - source cible recommandee : `{ include: 'articles/**/*.md', prefix: '/eco-conception' }`
  - API server cible pour RSS/JSON Feed : `queryCollection(event, 'articles')`
  - recherche cible documentee : `.where(...).orWhere(...)` ou `queryCollectionSearchSections()`
  - point a decider avant DEP-2 : validateur de schema (`zod`) non installe en dependance directe aujourd'hui

**Services freelance — relief visuel & maillage (28 avril 2026)** — Branche `feat/design-services`.

- ✅ Page `/services/` retravaillée visuellement sans changer son positionnement commercial : hero enrichi, œufs décoratifs, accents colorés, bande sombre pour la zone d'intervention, CTA final plus incarné
- ✅ Les 3 familles d'offres sont conservées : WordPress, Vue.js / Nuxt, audit éco-conception & performance
- ✅ Section tarifs conservée et renommée **Fourchettes habituelles**, avec précision sur les ordres de grandeur selon périmètre, contenu, intégrations et complexité
- ✅ Micro-copy ajustée pour rendre l'offre lisible par agences, entreprises, indépendants et petites structures sans jargon inutile
- ✅ Navigation claire activée sur la section sombre `Zone d'intervention` via `data-nav-theme="light"`
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
