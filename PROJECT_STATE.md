# 📊 ÉTAT DU PROJET - BeAbot

> **Récapitulatif de l'état du projet au 29 avril 2026**

---

## 🔜 PROCHAINES ÉTAPES (ordonnées)

1. **Preview Nuxt 4** — Déployer/valider une preview Netlify de `chore/nuxt4-migration` avant toute décision de merge vers `dev`.
2. **Documentation stack Nuxt 4** — Mettre a jour dans un lot separe `README.md`, `AGENTS.md`, `CLAUDE.md` et les descriptions de skills qui mentionnent encore Nuxt 3 / Content v2 / sitemap v6.
3. **Recherche UI / composant orphelin** — Si `AppSearchInput.vue` doit redevenir visible, choisir une page hote et faire une verification UX dediee ; sinon documenter son statut orphelin dans un lot separe.
4. **URL hygiene articles Markdown** — Corriger dans un lot dedie les 5 liens internes d'article sans slash final detectes pendant `DEP-2-E`, sans melanger avec les migrations de dependances.
5. **Lint global repo-wide** — `npm run lint:js` fonctionne avec la flat config Nuxt ESLint v1, mais `npm run lint` reste bloque par `lint:prettier` sur des formatages historiques et `audit-unused-depcheck.json` non JSON ; a traiter separement.
6. **Audit securite npm** — `npm audit --audit-level=moderate` signale 11 vulnerabilites ; ne pas lancer `npm audit fix` sans lot dedie.
7. **DIR-* app directory** — Ne pas deplacer vers `app/` tant que Nuxt 4 fonctionne avec l'arborescence actuelle ; garder un lot dedie uniquement si une incompatibilite reelle apparait.
8. **SCSS-6** — Ne pas supprimer SCSS tout de suite. Ouvrir une branche dédiée uniquement si un lot CSS moderne sûr est identifié.

---

## 🎯 SITUATION ACTUELLE

### Site en production

SiteURLStackBranchÉtat**Production**<https://beabot.fr>Nuxt 3.14master✅ Stable**Dev Preview**<https://dev-beabot.netlify.app>Nuxt 3.14dev✅ Tests

### Branche active de migration

**`chore/nuxt4-migration`** — branche documentaire et préparatoire Nuxt 4.

- Base actuelle validée : Nuxt `4.4.2`, Nitro `2.13.3`, Vue `3.5.33`, Vite direct `6.4.1` (`7.3.2` côté builder Nuxt)
- `future.compatibilityVersion: 4` actif
- Génération statique validée après DEP-4 : 72 routes prerendered
- Derniers commits documentaires :
  - `75d9207` — `docs: rafraichir baseline compat Nuxt 4`
  - `e1e6b6a` — `docs: cartographier migration Content v3`
  - `9e8423a` — `docs: auditer dependances avant Nuxt 4`
  - `bbe2924` — `chore: supprimer override interne Nuxt paths`
  - `7761c77` — `chore: auditer configuration Nuxt 4`

## Migration Nuxt 4 — état courant

Branche : `chore/nuxt4-migration`

Dernière décision :
- NUXT4-FINAL-AUDIT réalisé le 10 mai 2026.
- Résultat : branche `chore/nuxt4-migration` cohérente après DEP-1 à DEP-5, prête pour validation preview.
- Version Nuxt : `4.4.2`.
- Version Content : `@nuxt/content@3.13.0`.
- Version Image : `@nuxt/image@2.0.0`.
- Version sitemap : `@nuxtjs/sitemap@8.0.15`.
- Version ESLint Nuxt : `@nuxt/eslint@1.15.2`.
- Rapport : `migration-nuxt4-final-audit.md`.
- Changements appliques :
  - aucun changement applicatif ;
  - audit final des versions, anciennes APIs, config Nuxt, routes, feeds, SEO, lint JS, npm audit et documentation obsolète ;
  - aucune correction opportuniste appliquee.
- Validation :
  - `npm test` : OK ;
  - `npm run generate` : OK ;
  - check SEO : OK ;
  - routes prerendered : 72 ;
  - `npm run lint:js` : OK, 0 erreur, 101 warnings historiques ;
  - `npm run lint` : bloque par `lint:prettier` sur formatages historiques et `audit-unused-depcheck.json` non JSON, non corrige dans DEP-5 ;
  - `npm audit --audit-level=moderate` : 11 vulnerabilites documentees, aucun `npm audit fix` lance ;
  - RSS : `/rss.xml` genere ;
  - JSON Feed : `/feed.json` genere ;
  - sitemap : 13 URLs articles + archive `/eco-conception/`.
- Audit URLs :
  - aucune URL `/articles/`, `[object Object]` ou `undefined` dans les sorties Content generees ;
  - 5 liens Markdown internes sans slash final detectes dans un article existant, reportes hors DEP-2 car les changements editoriaux etaient exclus.
- Audit documentation :
  - `README.md`, `AGENTS.md` et `CLAUDE.md` mentionnent encore l'ancienne stack Nuxt 3 / Content v2 / sitemap v6 ;
  - mise a jour reportee dans un lot documentaire post-preview.
- Warnings non bloquants :
  - warning sitemap `zeroRuntime` ;
  - sourcemap `nuxt:module-preload-polyfill` ;
  - circular chunk `vendor-nuxt -> vendor-libs -> vendor-nuxt`.
- Prochaine étape :
  - valider une preview Netlify de `chore/nuxt4-migration` avant toute decision de merge ;
  - ne pas deplacer vers `app/` avant preview, car aucune incompatibilite Nuxt 4 ne l'impose aujourd'hui.

Contraintes maintenues :
- Aucun déplacement vers `app/` dans NUXT4-FINAL-AUDIT.
- Aucun changement CSS/design fait dans NUXT4-FINAL-AUDIT.
- Aucune correction globale lint, Prettier ou chunks faite dans NUXT4-FINAL-AUDIT.
- Aucun contenu editorial ni lien Markdown corrige dans NUXT4-FINAL-AUDIT.
- Aucun merge vers `dev` ou `master`.
- `npm audit fix` non lance.

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
- ✅ DEP-2-A realise :
  - `@nuxt/content@3.13.0` installe
  - `content.config.ts` cree avec collection minimale `articles`
  - config Content v3 adaptee dans `nuxt.config.ts`
  - `npm test` OK
  - `npm run generate` bloque par `#content/server`, documente sans migration en vrac
- ✅ DEP-2-B realise :
  - RSS et JSON Feed migres vers `queryCollection(event, 'articles')`
  - routes articles sitemap remplacees par une source statique locale `content/articles/*.md`
  - `npm test` OK
  - `npm run generate` bloque uniquement par l'integration interne `@nuxtjs/sitemap` v6 qui importe encore `#content/server`
  - prochaine etape : `DEP-3 / Sitemap Content v3`
- ✅ DEP-3 realise :
  - `@nuxtjs/sitemap@8.0.15` installe car v6 n'offrait pas d'option locale pour desactiver uniquement la route Content obsolete
  - `/sitemap.xml` genere et contient 14 URLs articles `/eco-conception/`
  - `npm test` OK
  - `npm run generate` termine avec `.output/public`, mais revele les prochaines erreurs Content : pages `queryContent` et champ SQL `date` absent pour RSS/JSON Feed
  - check SEO OK
  - prochaine etape : `DEP-2-C / Content pages APIs`
- ✅ DEP-2-C realise :
  - schema `articles` enrichi dans `content.config.ts` avec `zod@3.25.76` ajoute en dependance directe
  - homepage, archive, page article, `HomeEcoArticles` et `ArticleNavigation` migres vers Content v3
  - `findSurround()` remplace par `queryCollectionItemSurroundings()`
  - RSS, JSON Feed et sitemap revalides apres correction du champ SQL `date`
  - `npm test` OK, `npm run generate` OK, check SEO OK
  - routes prerendered : 72
  - reste : `CONTENT-6 / AppSearchInput.vue`, dernier usage applicatif Content v2 documente
- ✅ DEP-2-D realise :
  - `components/AppSearchInput.vue` migre vers `queryCollection('articles')`, `LIKE`, `.orWhere(...)`, `.all()` et `path`
  - garde-fou Content durci : plus aucune exception applicative `queryContent()`
  - `npm test` OK, `npm run generate` OK, check SEO OK
  - routes prerendered : 72
  - `package.json` et `package-lock.json` inchanges
  - prochaine etape : audit final Content v3 avant cloture `DEP-2`
- ✅ DEP-2-E realise :
  - audit final Content v3 valide : plus aucune API Content v2 applicative detectee
  - `utils/getRoutes.js`, utilitaire orphelin Content v2, supprime
  - garde-fou `scripts/check-content-queries.mjs` etendu a `composables`, `utils` et `scripts`
  - `DEP-2` cloture dans `TODO.md`
  - `npm test` OK, `npm run generate` OK, check SEO OK
  - routes prerendered : 72
  - RSS, JSON Feed et sitemap generes
  - `package.json` et `package-lock.json` inchanges
- ✅ DEP-4 realise :
  - `@nuxt/image` migre de `1.11.0` reel / `^1.8.1` declare vers `2.0.0`
  - `image.provider: 'none'` ajoute pour eviter IPX tant qu'aucun composant Nuxt Image n'est rendu
  - `npm test` OK, `npm run generate` OK, check SEO OK
  - routes prerendered : 72
  - pages avec images verifiees dans `.output/public`
  - `@nuxt/eslint` non migre
- ✅ DEP-5 realise :
  - `@nuxt/eslint` migre de `0.5.7` reel / `^0.5.7` declare vers `1.15.2`
  - config ESLint migree de `.eslintrc.cjs` vers `eslint.config.mjs`
  - script `lint:js` simplifie en `eslint .`
  - `npm test` OK, `npm run generate` OK, check SEO OK
  - routes prerendered : 72
  - `npm run lint:js` OK avec 0 erreur et 101 warnings historiques
  - `npm run lint` reste bloque par `lint:prettier` sur formatages historiques et `audit-unused-depcheck.json` non JSON
- ✅ NUXT4-FINAL-AUDIT realise :
  - versions finales confirmees : Nuxt `4.4.2`, Content `3.13.0`, sitemap `8.0.15`, image `2.0.0`, ESLint `1.15.2`
  - aucune dependance Nuxt 3 imbriquee inattendue detectee dans `npm ls`
  - aucune API Content v2 applicative active restante
  - `npm test` OK, `npm run generate` OK, check SEO OK, `npm run lint:js` OK
  - routes prerendered : 72
  - `npm audit --audit-level=moderate` documente 11 vulnerabilites, sans `npm audit fix`
  - decision : branche prete pour validation preview, mais pas pour merge direct sans preview/revue
  - decision : pas de deplacement vers `app/` avant preview tant que l'arborescence actuelle reste validee

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
