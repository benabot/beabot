# 📊 ÉTAT DU PROJET - BeAbot

> **Récapitulatif de l'état du projet au 2 juin 2026**

---

## 🔜 PROCHAINES ÉTAPES (ordonnées)

0. **Merge manuel `feature/apps-positioning-v2` -> `dev`** — Refonte finale des pages apps prête à intégrer après validation locale.
1. **Merge manuel `fix/mobile-nav-close-on-link-click` -> `dev`** — Correction mobile locale à valider puis merge/push par Benoît.
2. **Merge manuel `dev` -> `master`** — Après intégration du correctif mobile dans `dev`, Benoît garde le merge et le push.
3. **Validation preview/production après merge** — Vérifier pages principales, navigation mobile, sitemap, RSS, JSON Feed, canonical homepage et statut HTTP réel de `/404/` sur Netlify.
4. **Warnings Nuxt/Vite** — Warning sourcemap `nuxt:module-preload-polyfill` documenté et non bloquant ; circular chunk non reproduit. Rouvrir un lot uniquement sur preuve d'impact.
5. **Migration CSS native** — Suivre les lots CSS-2 à CSS-8 proposés dans `migration-css-native-audit.md`, sans refactor massif.
6. **Recherche UI / composant orphelin** — Si `AppSearchInput.vue` doit redevenir visible, choisir une page hôte et faire une vérification UX dédiée ; sinon documenter son statut orphelin dans un lot séparé.
7. **Lint global repo-wide** — `npm run lint:js` fonctionne avec la flat config Nuxt ESLint v1, mais `npm run lint` reste bloqué par `lint:prettier` sur des formatages historiques et `docs/migration/nuxt4/archive/audit-unused-depcheck.json` non JSON ; à traiter séparément.
8. **Audit sécurité npm** — `npm audit --audit-level=moderate` signalait 11 vulnérabilités lors de l'audit Nuxt 4 ; ne pas lancer `npm audit fix` sans lot dédié.
9. **DIR-* app directory** — Ne pas déplacer vers `app/` tant que Nuxt 4 fonctionne avec l'arborescence actuelle ; garder un lot dédié uniquement si une incompatibilité réelle apparaît.
10. **SCSS-6** — Reporté après audit CSS natif. La sortie complète de SCSS demande plusieurs lots progressifs : couleurs simples, typo, spacing, breakpoints, couleurs dérivées, réduction des imports Sass, puis décision de suppression Sass.

---

## 🧭 BACKLOG FINAL AVANT MASTER

### Apps positioning v2 — 23 mai 2026

Branche : `feature/apps-positioning-v2`

#### Refonte design apps finalisée — 2 juin 2026

- Commit final de référence : `4fdff1c fix: refine focusone duospend product sections`.
- Périmètre acté :
  - les hubs `/apps/` et `/en/apps/` sont redessinés et verrouillés pour l'instant ;
  - toutes les pages produits `/apps/*/` et leurs équivalents EN sont alignées sur la même direction visuelle ;
  - référence Cotypist retenue comme niveau de clarté et de rythme, sans copie ni ajout de dépendance.
- Décisions visuelles finales :
  - design plus rythmé, sections mieux scandées, fond dégradé léger et cohérence FR/EN ;
  - cards premium claires pour les usages, preuves produit, tarifs et contenus structurants ;
  - un seul CTA principal par page produit : `Voir comment ça marche` / `See how it works` ;
  - tarifs présentés en cards sur FocusOne et DuoSpend ;
  - séparateur visuel maintenu avant les blocs finaux `Support` et `Confidentialité` / `Privacy` ;
  - suppression confirmée des formulaires d'intérêt, de `#release-form`, des CTA `Être informé` / `Get launch updates` et de toute logique de liste d'attente.
- Garde-fou :
  - toute future correction sur `/apps/`, `/en/apps/` ou `/apps/*/` devra maintenir cette cohérence visuelle : rythme Cotypist, fond dégradé, cards premium claires, CTA unique, tarifs en cards, séparateur avant Support/Confidentialité, aucun formulaire d'intérêt.

#### Décisions finales de positionnement apps — 30 mai 2026

- Décisions de référence :
  - `/apps/` et `/en/apps/` conservent un hero typographique sans images ;
  - FocusOne et DuoSpend (FR/EN) utilisent un seul CTA hero vers le fonctionnement : `Voir comment ça marche` / `See how it works` ;
  - aucun formulaire de lancement : pas de `#release-form`, pas de wording `Être informé` / `Get launch updates` ;
  - les sections tarifs restent en cartes sur FocusOne et DuoSpend ;
  - les sections finales `Support` et `Confidentialité` / `Privacy` restent intouchables, avec leurs ancres publiques ;
  - parité FR/EN maintenue sur structure, intention éditoriale et CTA.
- Clarification :
  - cette décision finale remplace la direction intermédiaire du 29 mai liée aux CTA `Être informé` / `Get launch updates`.

#### Direction visuelle apps — 1er juin 2026

- Décision :
  - direction visuelle renforcée sur les 10 routes apps FR/EN, inspirée par la clarté de Cotypist sans copie ni surcouche lourde ;
  - hubs `/apps/` et `/en/apps/` conservés en hero typographique sans images, avec rythme plus éditorial et app accents par produit ;
  - pages FocusOne, DuoSpend, Siturem et Meeting Mode alignées sur une base visuelle commune : fonds légers, sections mieux scandées, images produit comme preuves, FAQ plus lisible ;
  - CTA héros produits limités à `Voir comment ça marche` / `See how it works` ;
  - aucun `#release-form`, aucun CTA `Être informé` / `Get launch updates`, aucune mécanique de liste d'attente ;
  - tarifs FocusOne et DuoSpend conservés en cards ;
  - sections finales `Support` et `Confidentialité` / `Privacy` non modifiées, ancres publiques préservées.

#### Correction directionnelle — 29 mai 2026

- Périmètre :
  - simplification forte de `/apps/` et `/en/apps/` après revue visuelle ;
  - retrait des CTA de lancement FocusOne/DuoSpend FR/EN ;
  - conservation stricte des sections finales `Support` et `Confidentialité` / `Privacy` sur FocusOne et DuoSpend.
- Changements livrés :
  - hubs FR/EN allégés : plus de composition hero massive, moins de cartes, structure plus éditoriale (`Deux usages très concrets`, manifeste court, liens finaux discrets) ;
  - `AppCard` simplifié : métadonnées sobres, titre d'usage, image produit comme preuve, moins de surfaces et d'ombres ;
  - CTA héros FocusOne/DuoSpend remplacés par `Voir comment ça marche` / `Voir les tarifs` et `See how it works` / `See pricing` ;
  - sections `#release-form` FocusOne/DuoSpend FR/EN supprimées, sans modifier les ancres `#support` et `#privacy` ;
  - `check:copy` renforcé contre les CTA de lancement, `#release-form`, `formulaire de lancement`, `liste d’attente`, `projets plus discrets` et `friction`.
- Validation locale :
  - `npm run check:copy` : OK, warnings de diagnostic restants sur textes longs/répétitions historiques ;
  - `npm test` : OK avant génération puis OK après génération, 33 tests Node sur l'HTML généré ;
  - `npm run generate` : OK, 92 routes prerendered ;
  - `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : OK ;
  - contrôle navigateur local desktop/mobile sur `/apps/` et contrôle HTML généré des six routes prioritaires : nouveaux CTA présents, aucun `#release-form` sur FocusOne/DuoSpend FR/EN.
- Notes :
  - le warning sourcemap `nuxt:module-preload-polyfill` reste inchangé et non bloquant ;
  - `docs/apps-positioning-plan.md` reste absent du dépôt local.

#### Dernier passage marketing et CTA — 29 mai 2026

- Périmètre :
  - amélioration finale de la vitrine `/apps/` et `/en/apps/` avant merge `dev` ;
  - renforcement des CTA héros FocusOne et DuoSpend FR/EN ;
  - conservation des sections finales `Support` et `Confidentialité` / `Privacy` sur les pages produit.
- Changements livrés :
  - hubs FR/EN repositionnés autour de l'idée `garder le fil` / `keeping track`, avec ligne de preuves, sections par usage et CTA final orienté besoin ;
  - FocusOne et DuoSpend mis en avant dans le hero et dans les cartes du quotidien, avec promesses plus concrètes ;
  - CTA héros FocusOne/DuoSpend reliés au formulaire Netlify existant `#release-form`, sans nouvelle intégration ;
  - CTA secondaires héros reliés aux galeries d'images, plus de lien confidentialité depuis le hero ;
  - `check:copy` renforcé contre `friction`, `projets plus discrets`, `apps sobres`, `des apps simples`, `Voir la confidentialité` et `View privacy`.
- Validation locale :
  - `npm run check:copy` : OK, 22 warnings de diagnostic restants sur textes légaux/répétitions structurelles ;
  - `npm run generate` : OK, 92 routes prerendered ;
  - `npm test` : OK, 49 pre-build checks et 33 tests Node sur l'HTML généré ;
  - `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : OK ;
  - contrôle navigateur local desktop/mobile sur les six routes prioritaires : H1 attendus, CTA héros corrects, pas de wording interdit, pas de débordement horizontal.
- Notes :
  - le warning sourcemap `nuxt:module-preload-polyfill` reste inchangé et non bloquant ;
  - le hub mobile laisse désormais apparaître le début de la section `À utiliser au quotidien`.

#### Suivi éditorial et UX — 29 mai 2026

- Périmètre :
  - correction éditoriale des hubs apps FR/EN, FocusOne FR/EN et DuoSpend FR/EN ;
  - conservation des sections finales `Support` et `Confidentialité` / `Privacy` sur FocusOne et DuoSpend ;
  - ajout d'un diagnostic local `npm run check:copy`, non bloquant et sans dépendance front.
- Changements livrés :
  - wording public `friction`, `apps principales`, `Core apps` et titres `Le problème` / `The problem` retirés des pages concernées ;
  - `/apps/` et `/en/apps/` réordonnées autour de FocusOne, DuoSpend, Siturem puis Meeting Mode, avec FocusOne et DuoSpend plus visibles ;
  - FocusOne FR/EN recentré sur une promesse à tenir, avec CTA hero vers captures et tarifs ;
  - DuoSpend FR/EN recentré sur les projets de couple : voyage, emménagement, mariage, travaux, sans banque connectée ni tableur.
- Validation locale :
  - `npm run check:copy` : OK, warnings de diagnostic restants sur textes légaux/répétitions structurelles ;
  - `npm test` : OK, 49 pre-build checks et 33 tests Node après génération ;
  - `npm run generate` : OK, 92 routes prerendered ;
  - `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : OK ;
  - contrôle navigateur local sur `/apps/`, `/en/apps/`, FocusOne FR/EN et DuoSpend FR/EN : H1 attendus, aucun wording `friction`, pas de titres `Le problème` / `The problem`, pas d'erreur console.
- Notes :
  - `docs/apps-positioning-plan.md` est absent du dépôt local ; aucun fichier de remplacement exact trouvé ;
  - `textlens` n'a pas été ajouté : Context7 ne retourne pas de bibliothèque TextLens identifiable, seulement des outils voisins comme `textlint`.

- Périmètre :
  - uniformisation des pages apps existantes (`/apps/`, `/en/apps/`, produits FR/EN) sans création de routes ;
  - priorité éditoriale sur `FocusOne` FR/EN, avec renforcement du positionnement \"one promise / one tap\".
- Changements livrés :
  - hubs FR/EN repositionnés comme vitrine produit avec manifeste, principes communs, CTA de démarrage, et metadata mises à jour ;
  - `FocusOne` FR/EN clarifiés avec sections dédiées (pourquoi une seule habitude, boucle, usages, privé par défaut, phrase de prudence) ;
  - ajustements légers de cohérence sur DuoSpend/Siturem via `data/apps.ts` et `data/apps-en.ts` ;
  - canonical/hreflang vérifiés et alignés sur hubs + FocusOne ;
  - JSON-LD existant conservé (`CollectionPage` hubs, `SoftwareApplication` produits).
- Validation locale :
  - `npm test` : OK ;
  - `npm run generate` : OK, 92 routes prerendered ;
  - warning non bloquant inchangé : sourcemap `nuxt:module-preload-polyfill`.
- Contraintes respectées :
  - aucune route créée/supprimée ;
  - aucun slug modifié ;
  - aucun script tiers ajouté.

1. **`fix/seo-technical-cleanup`** — État : fait, mergé dans `dev`. Objet : canonical homepage, meta descriptions critiques, `/404/` sitemap/statut, `twitter:card` simple. Commit connu : `ea6d884 fix: corriger les métadonnées SEO techniques critiques`.
2. **`fix/seo-title-description-patterns`** — État : fait, mergé dans `dev`. Objet : pattern `Titre | BeAbot`, entités HTML, descriptions ciblées. Commit connu : `3a17826 fix: uniformiser titles et descriptions SEO`.
3. **`fix/internal-url-trailing-slashes`** — État : fait, mergé dans `dev`. Objet : URLs internes HTML avec slash final, exceptions fichiers statiques/assets/ancres/query/liens externes, sitemap, RSS et JSON Feed. Diagnostic validé : 26 `index.html`, 13 articles, 3 pages apps, sitemap 24 routes publiques, feeds 13 articles, pas de `/404/` dans sitemap.
4. **`fix/seo-json-ld-structured-data`** — État : fait, mergé dans `dev`. Objet : JSON-LD via `innerHTML`, homepage `WebSite`/`Organization`/`Person`, `ContactPage`, articles avec `url` canonical. Commit connu : `f48d425 fix: fiabiliser les données structurées SEO`.
5. **`content/freelance-local-signals`** — État : fait, mergé dans `dev`. Objet : renforcer sobrement les signaux freelance/local/conversion sur homepage, contact, portfolio, éco-conception et Greenlight ; signal footer retiré après contrôle visuel. Mots-clés : freelance, mission, disponible, Lille, Compiègne, Amiens, Paris, remote, Hauts-de-France.
6. **`chore/audit-unused-dependencies`** — État : fait, mergé dans `dev`. Objet : audit des dépendances suspectes restantes ; `gray-matter` et `sass-loader` supprimés avec preuve ; aucun `npm install` ni `npm update`.
7. **`docs/nuxt-vite-warnings-audit`** — État : fait, mergé dans `dev`. Objet : documenter les warnings Nuxt/Vite restants sans optimiser les chunks ni modifier la configuration build.
8. **`refactor/css-native-audit`** — État : fait, mergé dans `dev`. Objet : audit final Sass restant avant migration CSS moderne ; aucun style modifié ; rapport `migration-css-native-audit.md`.
9. **`docs/pre-master-final-check`** — État : fait localement. Objet : validation finale de `dev` avant merge manuel vers `master`, sans modification de code applicatif.
10. **`fix/mobile-nav-close-on-link-click`** — État : fait localement. Objet : fermer la navigation mobile au clic sur un lien interne et synchroniser `aria-expanded`, sans modifier le desktop ni les URLs.

---

## 🎯 SITUATION ACTUELLE

### Navigation mobile — fermeture au clic lien — 12 mai 2026

Branche : `fix/mobile-nav-close-on-link-click`

- Périmètre :
  - correction limitée à `layouts/default.vue` ;
  - ajout d'un test ciblé `tests/mobile-nav.test.mjs` ;
  - documentation dans `PROJECT_STATE.md` et `TODO.md`.
- Bug constaté :
  - en viewport mobile 390×844 sur `http://localhost:3000/portfolio/`, après ouverture du menu mobile, un clic sur `Services` changeait la route vers `/services/` mais le `<details>` restait ouvert ;
  - l'état visuel restait ouvert (`logo-gris`) et le menu continuait à recouvrir la page.
- Correction :
  - le `<details>` mobile est référencé via `mobileMenuDetails` ;
  - les liens du menu mobile appellent `closeMobileMenu()` au clic ;
  - le changement de route appelle aussi `closeMobileMenu()` pour couvrir les navigations internes ;
  - `showMobileMenu` reste synchronisé avec l'état natif du `<details>` ;
  - `aria-expanded` et `aria-controls` sont ajoutés au `summary` mobile ;
  - le focus actif dans le menu est relâché quand le menu se ferme.
- Validations manuelles mobiles :
  - ouverture du menu puis clic sur `Services`, `Portfolio`, `Greenlight`, `Éco-conception`, `Apps`, `Contact` et `Accueil` : route correcte, menu fermé, `aria-expanded="false"`, logo hors état ouvert ;
  - clic clavier `Enter` sur le `summary` : ouverture puis fermeture conservées, `aria-expanded` synchronisé ;
  - aucun focus restant dans le menu fermé après clic lien ;
  - trailing slash des liens internes préservé.
- Validation desktop :
  - viewport 1440×900 : nav mobile masquée, nav desktop visible, clic desktop vers `/services/` fonctionnel.
- Validations automatisées :
  - test rouge observé avant correction sur `tests/mobile-nav.test.mjs` ;
  - test ciblé `node --test tests/mobile-nav.test.mjs tests/app-link.test.mjs` : OK après correction ;
  - `npm test` : OK, 49 pre-build checks, garde-fou Content et 25 tests Node ;
  - `npm run generate` : OK, 68 routes prerendered ;
  - `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : OK ;
  - `node scripts/check-scss-explicit-imports.mjs` : OK, `TOTAL_DEPENDANCES_IMPLICITES=0`.
- Risques restants :
  - aucun risque local bloquant identifié ;
  - validation preview Netlify à faire après merge manuel par Benoît.

### Validation finale pré-master — 11 mai 2026

Branche : `docs/pre-master-final-check`

- Périmètre :
  - création du rapport `pre-master-final-check.md` ;
  - vérification de `PROJECT_STATE.md`, `TODO.md` et des rapports récents `migration-css-native-audit.md`, `migration-unused-dependencies-audit.md`, `migration-nuxt-vite-warnings-audit.md` ;
  - relance des validations finales avant merge manuel `dev` -> `master` ;
  - contrôles ciblés sur `.output/public`, dépendances et warnings.
- Constat :
  - `npm run generate` réussit avec 68 routes prerendered ;
  - sorties générées : 29 fichiers HTML publics, 26 fichiers `index.html`, sitemap 24 URLs sans `/404/`, RSS 13 items, JSON Feed 13 items ;
  - canonical homepage OK : `https://beabot.fr/` ;
  - JSON-LD valide : 34 scripts `application/ld+json` parsables avec `@type` ou `@graph` typé ;
  - URLs internes HTML cohérentes avec le slash final ; aucun lien HTML interne sans slash final détecté après exclusion des fichiers statiques, dont le ZIP Greenlight ;
  - aucun `[object Object]` dans les HTML générés ;
  - dépendances : `gray-matter` et `sass-loader` absents des manifests, `sass` conservé ;
  - warnings observés : `zeroRuntime` sitemap informatif et warning sourcemap `nuxt:module-preload-polyfill` ; circular chunk non reproduit.
- Validations locales :
  - `npm test` : OK, 49 pre-build checks, garde-fou Content et 23 tests Node ;
  - `npm run generate` : OK, 68 routes prerendered ;
  - `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : OK ;
  - `node scripts/check-scss-explicit-imports.mjs` : OK, `TOTAL_DEPENDANCES_IMPLICITES=0`.
- Décisions :
  - prêt pour merge manuel `dev` -> `master` par Benoît ;
  - aucune modification de code applicatif, build/config, CSS/SCSS, contenu éditorial ou dépendances ;
  - pas de `npm install`, `npm update`, `npm prune` ou `npm audit fix`.
- Risques restants :
  - statut HTTP réel de `/404/` à confirmer sur Netlify preview/production ;
  - warnings Nuxt/Vite à surveiller seulement si impact runtime/debugging mesuré ;
  - lint global repo-wide, audit sécurité npm, migration CSS native et éventuel déplacement `app/` restent des chantiers séparés.

### Audit warnings Nuxt/Vite — 11 mai 2026

Branche : `docs/nuxt-vite-warnings-audit`

- Périmètre :
  - création du rapport `migration-nuxt-vite-warnings-audit.md` ;
  - reproduction des warnings via `npm run generate` ;
  - documentation du warning sourcemap `nuxt:module-preload-polyfill` ;
  - vérification du warning historique `Circular chunk: vendor-nuxt -> vendor-libs -> vendor-nuxt` ;
  - observation des sorties CSS/JS sans modification de configuration.
- Constat :
  - contexte observé : Nuxt `4.4.2`, Nitro/Nitropack `2.13.4`, Vite builder `7.3.2`, Vite direct `6.4.2`, Vue `3.5.33`, génération statique ;
  - `npm run generate` réussit avec 68 routes prerendered ;
  - warning sourcemap `nuxt:module-preload-polyfill` encore présent pendant le build client Vite ;
  - warning circular chunk non reproduit sur l'état actuel ;
  - `nuxt.config.ts` ne contient plus de `manualChunks`, cohérent avec le correctif runtime Netlify précédent.
- Décisions :
  - aucune modification de `nuxt.config.ts`, Vite, chunks, CSS/SCSS, Content, SEO, dépendances ou contenus ;
  - warning sourcemap classé faible, impact probable limité aux sourcemaps/devtools tant qu'aucune erreur runtime n'est observée ;
  - warning circular chunk classé historique à surveiller seulement si un futur lot touche au chunking ;
  - futur chantier possible uniquement sur preuve : `perf/vite-chunk-audit` ou `docs/build-warnings-followup`.
- Validations locales :
  - `npm run generate` : OK, 68 routes prerendered ;
  - `npm test` : OK, 49 pre-build checks, garde-fou Content et 23 tests Node ;
  - `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : OK ;
  - `node scripts/check-scss-explicit-imports.mjs` : OK, `TOTAL_DEPENDANCES_IMPLICITES=0` ;
  - contrôles ciblés post-génération : 29 fichiers HTML publics, 26 fichiers `index.html`, sitemap 24 URLs sans `/404/`, RSS 13 items, JSON Feed 13 items, 18 fichiers CSS pour 171 523 octets et 51 fichiers JS pour 871 923 octets observés ;
  - contrôle de périmètre : aucun fichier build/config (`nuxt.config.ts`, Vite, package manifests) modifié.
- Risque restant :
  - le warning sourcemap peut gêner le debugging source-map, mais aucun impact runtime local n'est constaté ; le circular chunk doit rester surveillé si un futur lot réintroduit du chunking manuel.

### Audit dépendances suspectes restantes — 11 mai 2026

Branche : `chore/audit-unused-dependencies`

- Périmètre en cours :
  - audit de `gray-matter`, `sass-loader`, `eslint-config-prettier`, `eslint-plugin-vue` et `prettier` ;
  - création du rapport `migration-unused-dependencies-audit.md` ;
  - suppression de `gray-matter` et `sass-loader` de `package.json` et `package-lock.json` avec retrait des entrées lock strictement associées ;
  - conservation de `sass`, car il reste 8 fichiers `.scss` et 28 blocs Vue `lang="scss"` ;
  - conservation de `eslint-config-prettier`, `eslint-plugin-vue` et `prettier` par prudence, sans refactor ESLint/formatage dans ce lot.
- Preuves :
  - `gray-matter` n'a plus d'import, require ou appel applicatif ; le lock ne montre pas d'usage indirect par Nuxt Content, Nuxt ou Vite ;
  - `sass-loader` n'a aucun usage projet ni configuration Webpack/Rspack ; Vite supporte SCSS via le paquet préprocesseur, et `sass` reste installé ;
  - `prettier` est appelé par `lint:prettier`, `lint` et `lintfix` ;
  - `eslint.config.mjs` utilise encore des règles Vue et l'audit Nuxt ESLint précédent avait explicitement conservé les dépendances ESLint.
- Décisions :
  - aucun `npm install`, `npm update`, `npm prune`, `npm audit fix` ou depcheck ajouté ;
  - ne pas supprimer `sass` ;
  - ne pas modifier SCSS, Content, SEO, chunks Nuxt/Vite ou contenu éditorial ;
  - accepter que `npm ls` puisse afficher les paquets supprimés comme `extraneous` dans le `node_modules` local tant qu'aucun install/prune n'est lancé.
- Validations locales :
  - `npm test` : OK, 49 pre-build checks, garde-fou Content et 23 tests Node ;
  - `npm run generate` : OK, 68 routes prerendered, build Nuxt 4 et compilation SCSS OK sans `sass-loader` déclaré ;
  - `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : OK ;
  - `node scripts/check-scss-explicit-imports.mjs` : OK, `TOTAL_DEPENDANCES_IMPLICITES=0` ;
  - contrôles ciblés : `package.json` et `package-lock.json` valides, aucun résidu `gray-matter`/`sass-loader` dans les manifests, sitemap 24 URLs sans `/404/`, RSS et JSON Feed 13 items, 27 fichiers HTML publics.
- Risque restant :
  - le `node_modules` local peut encore afficher `gray-matter` et `sass-loader` comme `extraneous` tant qu'aucun install/prune n'est lancé ; ce n'est pas un risque repo puisque les manifests ont été nettoyés.

### Audit Sass restant / CSS natif — 11 mai 2026

Branche : `refactor/css-native-audit`

- Périmètre en cours :
  - création du rapport `migration-css-native-audit.md` ;
  - inventaire des usages Sass restants : 8 fichiers `.scss`, 28 blocs Vue `lang="scss"`, 57 `@use`, 586 occurrences de variables Sass, 24 `color.adjust()`, 5 `math.div()`, 2 `map.get()`, 1 boucle `@each`, 3 fonctions Sass, 80 occurrences de `$breakpoint-tablet` et 54 usages `$space-*` ;
  - `node scripts/check-scss-explicit-imports.mjs` confirme `TOTAL_DEPENDANCES_IMPLICITES=0` ;
  - baseline CSS avant audit : 18 fichiers CSS, 171 523 octets, hash global `ba0d818a9f0c3dbbda99661146aad5625e9822d64c57ba4a538079d331fd8e15`.
- Décisions :
  - aucune modification de style dans ce lot ;
  - aucune suppression de fichier SCSS, dépendance, config Nuxt/Vite ou plugin ;
  - les ressources Medium de `docs/ressources/ressources.md` restent de la veille, pas des consignes ;
  - GreenIT/RWEB et la Front-End Performance Checklist sont retenus comme garde-fous : budget CSS, pas de dépendance inutile, progressive enhancement, mesure avant/après ;
  - roadmap retenue : CSS-2 couleurs simples vers `var()`, CSS-3 typographie native avec `clamp()`, CSS-4 spacing tokens CSS, CSS-5 breakpoints/media queries, CSS-6 couleurs dérivées avec fallbacks, CSS-7 réduction des imports Sass, CSS-8 décision SCSS-6.
- Validations locales :
  - `npm test` : OK, 49 pre-build checks, garde-fou Content et 23 tests Node ;
  - `npm run generate` : OK, 68 routes prerendered ;
  - `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : OK ;
  - `node scripts/check-scss-explicit-imports.mjs` : OK, `TOTAL_DEPENDANCES_IMPLICITES=0` ;
  - contrôle CSS généré : inchangé par rapport à la baseline, 18 fichiers CSS, 171 523 octets, hash global `ba0d818a9f0c3dbbda99661146aad5625e9822d64c57ba4a538079d331fd8e15`.
- Risque restant :
  - aucun risque de rendu identifié sur ce lot documentaire ; les risques visuels et compatibilité sont reportés dans les futurs lots CSS-2 à CSS-8 avec validations ciblées.

### Signaux freelance/local — 11 mai 2026

Branche : `content/freelance-local-signals`

- Périmètre en cours :
  - homepage renforcée sans nouveau badge ni changement de structure : signal Lille/Hauts-de-France/remote et CTA de mission ;
  - `/contact/` clarifiée sur les types de missions WordPress, JavaScript, audit et éco-conception, avec zone d'intervention et remote ;
  - `/portfolio/` cadré comme preuve de missions web WordPress, JavaScript, Nuxt et éco-conception, sans réorganiser ni masquer les apps ;
  - `/eco-conception/` enrichie avec un CTA bas de page et des liens sobres vers les articles longue traîne existants ;
  - `/greenlight/` relie le thème à une mission WordPress possible sans modifier l'offre produit en profondeur.
- Décisions :
  - aucun nouvel article, aucune nouvelle page `/services` ou `/freelance` ;
  - pas de changement SCSS : seules des classes et structures existantes sont réutilisées ;
  - le ton reste factuel, sans tarifs, promesses de disponibilité précises ni repositionnement commercial lourd ;
  - signal freelance/local retiré du footer après contrôle visuel, car la ligne alourdissait la zone légale ;
  - les metas ajustées uniquement sur `/contact/` et `/portfolio/`, pour refléter le positionnement freelance/local sans casser le pattern SEO.
- Validations locales :
  - `npm test` : OK, 49 pre-build checks, garde-fou Content et 23 tests Node ;
  - `npm run generate` : OK, 68 routes prerendered ;
  - `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : OK ;
  - contrôles ciblés post-génération : signaux visibles sur `/`, `/contact/`, `/portfolio/`, `/eco-conception/` et `/greenlight/` ; signal footer supprimé ; page contact espacée de la navigation ; liens internes ajoutés avec slash final ; articles longue traîne `/eco-conception/audit-site-web/`, `/eco-conception/refonte-site-eco-concu/`, `/eco-conception/wordpress-freelance-lille/` et `/eco-conception/wordpress-vs-nuxt/` générés ; sitemap avec 24 routes publiques et sans `/404/` ; RSS et JSON Feed valides avec 13 articles ; JSON-LD parsable ; descriptions ciblées textuelles entre 129 et 158 caractères ; 26 fichiers `index.html` publics ;
  - contrôle navigateur local : homepage desktop 1440×900 avec hero à 100vh et contenu contenu dans le hero ; mobile 390×844 sans débordement horizontal, hero plus haut que 100vh par empilement responsive existant mais sans casse de mise en page.
- Risque restant :
  - aucun risque local bloquant identifié ; validation preview Netlify à faire après merge manuel par Benoît.

### Trailing slashes internes — 11 mai 2026

Branche : `fix/internal-url-trailing-slashes`

- Périmètre en cours :
  - helpers `canonicalUrl`, `absoluteUrl`, `withTrailingSlash` et `normalizeInternalHref` audités ;
  - exceptions fichiers renforcées pour ne pas ajouter de slash aux fichiers statiques, images modernes, manifest, robots, assets Nuxt et archive Greenlight ;
  - `AppLink` conserve le slash final quand un lien interne est rendu en `<a>` natif pour un nouvel onglet ;
  - liens Markdown internes de `wordpress-eco-conception.md` normalisés avec slash final ;
  - `seo-check` et les tests HTML générés renforcés sur les attributs `href`, `src` et `action`.
- Décisions :
  - les corrections portent uniquement sur les URLs, pas sur le wording éditorial, les titles/descriptions, le JSON-LD métier, le SCSS, les dépendances, les chunks ou Netlify ;
  - les fichiers statiques, feeds, assets Nuxt, ancres, query strings, liens externes, `mailto:` et `tel:` restent des exceptions explicites.
  - diagnostic pré-merge sur l'écart `npm run generate` : `dev` annonce 72 routes prerendered et la branche 68, mais les artefacts publics sont identiques sur les pages utiles : 26 fichiers `index.html`, 13 routes `/eco-conception/.../`, 3 routes `/apps/.../`, `404.html`, `sitemap.xml`, `rss.xml` et `feed.json` présents des deux côtés.
  - raison probable de l'écart 72 → 68 : Nitro ne crawle plus 4 variantes non canoniques sans slash issues de liens Markdown corrigés dans `wordpress-eco-conception.md` (`/eco-conception/images-eco-conception`, `/eco-conception/l-eco-conception-web`, `/eco-conception/theme-wordpress-eco-conception`, `/eco-conception/typographie-ecoconception`). Ces variantes n'étaient pas des pages publiques distinctes ; elles écrivaient les mêmes sorties que les URLs canoniques avec slash.
  - l'ancien chiffre 100 routes correspond à une base antérieure aux nettoyages Nuxt/SEO actuels et ne sert pas de référence pour cette branche ; la référence comparable est `dev` à 72 routes.
- Validations locales :
  - `npm test` : OK, 49 pre-build checks, garde-fou Content et 23 tests Node ;
  - `npm run generate` : OK, 68 routes prerendered ;
  - `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : OK ;
  - contrôles ciblés post-génération : liens internes HTML vérifiés sur 27 fichiers HTML, fichiers statiques sans slash ajouté, ancres conservées, liens externes conservés, aucun `mailto:`/`tel:` généré et cas couverts par tests unitaires, sitemap 24 routes avec slash final et sans `/404/`, RSS et JSON Feed valides, JSON-LD cohérent avec canonical articles/home/contact, canonical home `https://beabot.fr/`, titles/descriptions sans régression et aucun `[object Object]`.
  - comparaison `dev` vs branche : aucune route sitemap absente ou ajoutée, aucun fichier `_payload.json` utile absent ou ajouté, RSS et JSON Feed à 13 articles chacun.
- Risque restant :
  - aucun risque local identifié ; validation preview Netlify à faire après merge manuel par Benoît.

### Fiabilisation JSON-LD SEO — 11 mai 2026

Branche : `fix/seo-json-ld-structured-data`

- Périmètre en cours :
  - scripts `application/ld+json` rendus en contenu de script via `innerHTML`, pour éviter le JSON dans un attribut `children` non parsable ;
  - homepage conservée avec `Organization` et `Person`, et ajout sobre d'un `WebSite` dans le `@graph` ;
  - `/contact/` conserve un `ContactPage` sobre et vérifiable ;
  - articles éco-conception enrichis avec une propriété `url` alignée sur la canonical existante ;
  - tests HTML générés et `scripts/seo-check.mjs` renforcés pour refuser JSON-LD invalide, script vide, attribut `children`, absence de `@type`/`@graph`, `ContactPage` absent, et article sans `author`/`datePublished`/`url`.
- Décisions :
  - correction appliquée à tous les scripts JSON-LD déclarés avec le même bug de rendu, sans modifier les metas titles/descriptions ni le contenu visible ;
  - `/eco-conception/faq-eco-conception/` reste une `FAQPage` et n'est pas forcée en `BlogPosting`, car ce n'est pas un article éditorial ;
  - aucun changement redirections, sitemap, SCSS, dépendances, Content v3, structure `app/` ou chunking.
- Validations locales :
  - `npm test` : OK, 49 pre-build checks, garde-fou Content et 23 tests Node ;
  - `npm run generate` : OK, 72 routes prerendered ;
  - `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : OK ;
  - contrôles ciblés post-génération : scripts `application/ld+json` valides sur les 24 routes du sitemap, homepage avec `Person`/`WebSite`, `/contact/` avec `ContactPage`, articles avec `BlogPosting` + `author` + `datePublished` + `url`, canonical home `https://beabot.fr/`, sitemap sans `/404/`, titles/descriptions sans régression et aucun `[object Object]`.
- Risque restant :
  - aucun risque local identifié ; à confirmer en preview Netlify après merge manuel par Benoît.

### Uniformisation SEO titles & descriptions — 11 mai 2026

Branche : `fix/seo-title-description-patterns`

- Périmètre appliqué :
  - template global normalisé vers `Titre | BeAbot` ;
  - `app.vue` corrigé car il forçait encore `BeAbot - Titre` ;
  - titles/H1 ciblés nettoyés des `&amp;`, `&#x27;` et `&#39;` visibles dans la sortie générée ;
  - titles trop longs ou trop courts ajustés sur `/apps/`, `/mentions-legales/`, `/eco-conception/images-eco-conception/`, `/eco-conception/typographie-ecoconception/`, `/eco-conception/wordpress-eco-conception/` et la page pilier `/eco-conception/` ;
  - descriptions ciblées raccourcies sur `/greenlight/`, `/eco-conception/l-eco-conception-web/`, `/eco-conception/la-consommation-energetique-du-numerique/`, `/eco-conception/theme-wordpress-eco-conception/` et `/eco-conception/typographie-ecoconception/` ;
  - `og:description` alignées sur les meta descriptions pour `/contact/`, `/portfolio/` et les pages utilisant une constante SEO partagée ;
  - `scripts/seo-check.mjs` et les tests HTML générés renforcés pour contrôler le pattern des titles.
- Décisions :
  - aucun changement de redirection Netlify ;
  - aucun changement sitemap hors contrôle de non-régression ;
  - aucun changement SCSS, dépendance, JSON-LD, Content v3, structure `app/` ou chunking.
- Risque restant :
  - `/404/` et `/merci/` peuvent rester hors de la plage 120–160 caractères car ce sont des pages non éditoriales/hors sitemap.
- Validations locales :
  - `npm test` : OK, 49 pre-build checks, garde-fou Content et 22 tests Node ;
  - `npm run generate` : OK, 72 routes prerendered ;
  - `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : OK ;
  - contrôles ciblés post-génération : aucun title ciblé avec `&amp;`, `&#x27;` ou `&#39;`, pattern `Titre | BeAbot` OK, descriptions ciblées entre 120 et 160 caractères, canonical homepage toujours `https://beabot.fr/`, aucun `[object Object]` dans les HTML, sitemap sans `/404/`.

### Stabilisation SEO technique critique — 11 mai 2026

Branche : `fix/seo-technical-cleanup`

- Périmètre appliqué :
  - canonical homepage conservée via `canonicalUrl(config.public.siteUrl, '/')`, sortie attendue `https://beabot.fr/` ;
  - description article normalisée pour ignorer les valeurs non textuelles avant écriture des metas, afin d'éviter `[object Object]` si un frontmatter SEO devient invalide ;
  - `scripts/seo-check.mjs` étendu aux pages critiques demandées et aux contrôles `[object Object]`, descriptions trop courtes, `og:description`, canonical home, absence de `/404/` dans le sitemap, `twitter:card` sur `/mentions-legales/` et `/portfolio/` ;
  - tests générés étendus aux pages SEO critiques ;
  - redirects Netlify `/404` et `/404/` vers `/404.html` en statut 404.
- Décisions :
  - pas d'uniformisation globale des titres ;
  - pas de changement SCSS, Content, dépendances, chunks, positionnement freelance/local ou JSON-LD global ;
  - correction HTTP `/404/` traitée uniquement côté Netlify, car c'est la solution simple et sûre pour l'hébergement statique.
- Risque restant :
  - le statut HTTP réel de `/404/` doit être confirmé sur preview Netlify après déploiement.
- Validations locales :
  - `npm test` : OK, 49 pre-build checks, garde-fou Content et 22 tests Node ;
  - `npm run generate` : OK, 72 routes prerendered ;
  - `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : OK ;
  - contrôles ciblés post-génération : aucun `[object Object]` dans les HTML, canonical home `https://beabot.fr/`, sitemap sans `https://beabot.fr/404/`, descriptions et `og:description` des pages ciblées OK, `twitter:card` présent sur `/mentions-legales/` et `/portfolio/`.

### Site en production

SiteURLStackBranchÉtat**Production**<https://beabot.fr>Nuxt 3.14master✅ Stable**Dev Preview**<https://dev-beabot.netlify.app>Nuxt 4.4dev⚠️ Correctif runtime `/eco-conception/` prêt à merger depuis `fix/netlify-eco-conception-runtime`

### Branche active de migration

**`fix/netlify-eco-conception-runtime`** — branche de correctif issue de `dev` après merge Nuxt 4.

- Base actuelle validée : Nuxt `4.4.2`, Nitro `2.13.3`, Vue `3.5.33`, Vite direct `6.4.1` (`7.3.2` côté builder Nuxt)
- `future.compatibilityVersion: 4` actif
- Génération statique validée après FIX-NETLIFY-RUNTIME éco-conception : 72 routes prerendered
- Derniers commits documentaires :
  - `75d9207` — `docs: rafraichir baseline compat Nuxt 4`
  - `e1e6b6a` — `docs: cartographier migration Content v3`
  - `9e8423a` — `docs: auditer dependances avant Nuxt 4`
  - `bbe2924` — `chore: supprimer override interne Nuxt paths`
  - `7761c77` — `chore: auditer configuration Nuxt 4`

## Migration Nuxt 4 — état courant

Branche : `fix/netlify-eco-conception-runtime`

Dernière décision :
- FIX-NETLIFY-RUNTIME réalisé le 10 mai 2026.
- Résultat : correctif ciblé prêt pour merge manuel vers `dev`.
- Version Nuxt : `4.4.2`.
- Version Content : `@nuxt/content@3.13.0`.
- Version Image : `@nuxt/image@2.0.0`.
- Version sitemap : `@nuxtjs/sitemap@8.0.15`.
- Version ESLint Nuxt : `@nuxt/eslint@1.15.2`.
- Rapport : `docs/migration/nuxt4/reports/migration-nuxt4-fix-netlify-runtime.md`.
- Cause racine :
  - le chunking manuel `vite.build.rollupOptions.output.manualChunks` forçait les internals Nuxt et les dépendances dans des chunks `vendor-*` ;
  - Netlify exposait une TDZ runtime dans le chunk Nuxt/router : `Cannot access 'e' before initialization` ;
  - le warning local `Circular chunk: vendor-nuxt -> vendor-libs -> vendor-nuxt` confirmait le cycle de chunks.
- Correction appliquée :
  - suppression du bloc `manualChunks` custom dans `nuxt.config.ts` ;
  - aucune modification de page, de Content, de dépendance, de CSS/SCSS ou de contenu éditorial.
- Stack documentée :
  - Nuxt `4.4.2` ;
  - Vue `3.5.33` ;
  - Nitro `2.13.x` ;
  - Vite `7.3.x` côté builder Nuxt, `6.4.x` direct ;
  - `@nuxt/content@3.13.0` avec `content.config.ts` ;
  - `@nuxtjs/sitemap@8.0.15` ;
  - `@nuxt/image@2.0.0` ;
  - `@nuxt/eslint@1.15.2` avec `eslint.config.mjs` ;
  - `zod@3.25.76` pour le schéma Content.
- Décision SCSS conservée :
  - SCSS reste utilisé ;
  - `SCSS-6` reste ouvert et reporté après preview Nuxt 4 ;
  - `sass`, `sass-loader` et config SCSS Vite restent nécessaires.
- Validation :
  - `npm test` : OK ;
  - `npm run generate` : OK ;
  - `NUXT_PUBLIC_SITE_URL=https://dev-beabot.netlify.app node scripts/seo-check.mjs` : OK après génération avec l'URL dev ;
  - `npm run lint:js` : OK avec 94 warnings historiques, 0 erreur ;
  - routes prerendered : 72 ;
  - `npm run lint` : bloque par `lint:prettier` sur formatages historiques et `docs/migration/nuxt4/archive/audit-unused-depcheck.json` non JSON, non corrige dans DEP-5 ;
  - `npm audit --audit-level=moderate` : 11 vulnerabilites documentees, aucun `npm audit fix` lance ;
  - RSS : `/rss.xml` genere ;
  - JSON Feed : `/feed.json` genere ;
  - sitemap : 13 URLs articles + archive `/eco-conception/`.
- Vérification navigateur `/eco-conception/` :
  - filtres `Tout`, `Éco-conception`, `WordPress`, `Performance` OK ;
  - recherches `WordPress`, `images` et sans résultat OK ;
  - FAQ visible avec 4 items ;
  - console locale statique sans erreur runtime ;
  - aucune URL `/articles/`, `[object Object]` ou `undefined` détectée.
- Audit URLs :
  - aucune URL `/articles/`, `[object Object]` ou `undefined` dans les sorties Content generees ;
  - 5 liens Markdown internes sans slash final detectes dans un article existant, reportes hors DEP-2 car les changements editoriaux etaient exclus.
- Audit documentation :
  - `README.md`, `AGENTS.md` et `CLAUDE.md` sont alignés sur la stack Nuxt 4 réelle ;
  - `SCSS-6` reste documenté comme reporté après preview Nuxt 4.
- Rangement documentation :
  - rapports utiles conservés sous `docs/migration/nuxt4/reports/` ;
  - fichiers ambigus conservés sous `docs/migration/nuxt4/archive/` ;
  - racine libérée des fichiers `migration-nuxt4-*.md`, `content-prep-*.md`, `dep-audit-*.md` et sorties `.txt` d'audit.
- Warnings non bloquants :
  - warning sitemap `zeroRuntime` ;
  - sourcemap `nuxt:module-preload-polyfill` ;
  - warning esbuild `Duplicate key "provider"` dans le bundle serveur `ProseImg`.
- Prochaine étape :
  - merger manuellement `fix/netlify-eco-conception-runtime` vers `dev` ;
  - redéployer Netlify dev avec clear cache ;
  - vérifier `/eco-conception/` sur la preview.

Contraintes maintenues :
- Aucun déplacement vers `app/` dans FIX-NETLIFY-RUNTIME.
- Aucun changement CSS/design fait dans FIX-NETLIFY-RUNTIME.
- Aucune correction globale lint ou Prettier faite dans FIX-NETLIFY-RUNTIME.
- Aucun contenu editorial ni lien Markdown corrige dans FIX-NETLIFY-RUNTIME.
- Aucune dépendance modifiée dans FIX-NETLIFY-RUNTIME.
- Aucune page ni composant modifié dans FIX-NETLIFY-RUNTIME.
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
  - rapports : `docs/migration/nuxt4/reports/migration-nuxt4-content-prep.md`, `docs/migration/nuxt4/reports/content-prep-query-map.md`, `docs/migration/nuxt4/reports/content-prep-v2-v3-mapping.md`, `docs/migration/nuxt4/reports/content-prep-content-config-plan.md`, `docs/migration/nuxt4/reports/content-prep-migration-order.md`, `docs/migration/nuxt4/reports/content-prep-tests-plan.md`
- ✅ DEP-AUDIT réalisé :
  - `package.json` comparé au lock et à `npm ls`
  - versions cibles vérifiées via `npm view` sans installation : `nuxt@4.4.2`, `@nuxt/content@3.13.0`, `@nuxt/image@2.0.0`, `@nuxtjs/sitemap@8.0.14`, `@nuxt/eslint@1.15.2`
  - override interne `#internal/nuxt/paths` confirmé présent
  - ordre recommandé : `DEP-6` → `DEP-1` → `CONFIG-*`/`DIR-*` si nécessaire → `DEP-2` Content → `DEP-3` sitemap → `DEP-4` image → `DEP-5` eslint
  - rapports : `docs/migration/nuxt4/reports/migration-nuxt4-dep-audit.md`, `docs/migration/nuxt4/reports/dep-audit-update-order.md` ; sorties brutes `dep-audit-*.txt` supprimées lors de `CLEANUP-ROOT`
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
  - `npm run lint` reste bloque par `lint:prettier` sur formatages historiques et `docs/migration/nuxt4/archive/audit-unused-depcheck.json` non JSON
- ✅ NUXT4-FINAL-AUDIT realise :
  - versions finales confirmees : Nuxt `4.4.2`, Content `3.13.0`, sitemap `8.0.15`, image `2.0.0`, ESLint `1.15.2`
  - aucune dependance Nuxt 3 imbriquee inattendue detectee dans `npm ls`
  - aucune API Content v2 applicative active restante
  - `npm test` OK, `npm run generate` OK, check SEO OK, `npm run lint:js` OK
  - routes prerendered : 72
  - `npm audit --audit-level=moderate` documente 11 vulnerabilites, sans `npm audit fix`
  - decision : branche prete pour validation preview, mais pas pour merge direct sans preview/revue
  - decision : pas de deplacement vers `app/` avant preview tant que l'arborescence actuelle reste validee
- ✅ NUXT4-DEV-READINESS realise :
  - seul correctif recommande avant merge `dev` : documentation stack minimale pour `AGENTS.md`, `CLAUDE.md` et éventuellement `README.md`
  - peut attendre après preview : lint Prettier global, `docs/migration/nuxt4/archive/audit-unused-depcheck.json`, audit sécurité npm, liens Markdown internes sans slash final, warnings ESLint historiques, warnings sourcemap/circular chunk, recherche UI, SCSS-6
  - à ne pas faire dans cette migration : `app/` sans incompatibilité réelle, refactor CSS/design, `npm audit fix`, correction lint globale, merge vers `master`
- ✅ FIX-PREVIEW éco-conception realise :
  - filtres par thème, recherche locale et FAQ de `/eco-conception/` réparés après Content v3
  - `npm test` OK, `npm run generate` OK, check SEO OK, `npm run lint:js` OK
  - routes prerendered : 72
  - vérification navigateur locale OK sur les filtres, recherches, FAQ et URLs publiques
  - aucune dépendance, aucun CSS/design, aucun contenu éditorial et aucun merge modifiés
- ✅ CLEANUP-ROOT realise :
  - rapports Markdown utiles déplacés vers `docs/migration/nuxt4/reports/`
  - fichiers ambigus déplacés vers `docs/migration/nuxt4/archive/`
  - sorties `.txt` brutes d'audit supprimées de la racine
  - `TODO.md` et `PROJECT_STATE.md` mis à jour avec les nouveaux chemins
  - aucun code applicatif, aucune dépendance, aucun CSS/SCSS et aucun merge modifiés
- ✅ SCSS-6-DECISION realise :
  - inventaire final avant décision : 8 fichiers `.scss`, 28 fichiers Vue `lang="scss"`, 511 occurrences `$...`
  - helpers Sass encore actifs : `sass:color`, `sass:math`, `sass:map`, fonctions, maps typo et espacements fluides
  - décision : ne pas supprimer SCSS avant merge `dev`, reporter après preview Nuxt 4 sur branche dédiée
  - aucun style, aucune dépendance et aucun code applicatif modifiés
- ✅ DOCS-STACK-NUXT4 realise :
  - `AGENTS.md`, `CLAUDE.md` et `README.md` alignés sur Nuxt 4, Content v3, sitemap v8, image v2 et Nuxt ESLint v1
  - `content.config.ts`, `zod`, SCSS encore utilisé et absence de déplacement vers `app/` documentés
  - `SCSS-6` conservé ouvert et reporté après preview Nuxt 4
  - `npm test` OK ; aucun code applicatif, aucune dépendance et aucun CSS/SCSS modifiés

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
