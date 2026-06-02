## Backlog final avant master (11 mai 2026)

1. [x] **`fix/seo-technical-cleanup`** — fait, mergé dans `dev` ; canonical homepage, meta descriptions critiques, `/404/` sitemap/statut, `twitter:card` simple ; commit `ea6d884 fix: corriger les métadonnées SEO techniques critiques`
2. [x] **`fix/seo-title-description-patterns`** — fait, mergé dans `dev` ; pattern `Titre | BeAbot`, entités HTML, descriptions ciblées ; commit `3a17826 fix: uniformiser titles et descriptions SEO`
3. [x] **`fix/internal-url-trailing-slashes`** — fait, mergé dans `dev` ; URLs internes HTML normalisées avec slash final, sans casser fichiers statiques, ancres, query strings, liens externes, `mailto:`, `tel:`, sitemap, RSS et JSON Feed ; diagnostic 68 routes OK : 26 `index.html`, 13 articles, 3 pages apps, sitemap 24 routes publiques, feeds 13 articles, pas de `/404/` dans sitemap
4. [x] **`fix/seo-json-ld-structured-data`** — fait, mergé dans `dev` ; JSON-LD via `innerHTML`, homepage `WebSite`/`Organization`/`Person`, `ContactPage`, articles avec `url` canonical ; commit `f48d425 fix: fiabiliser les données structurées SEO`
5. [x] **`content/freelance-local-signals`** — fait, mergé dans `dev` ; renforcer sobrement les signaux freelance/local/conversion sur homepage, contact, portfolio, éco-conception et Greenlight ; signal footer retiré après contrôle visuel ; mots-clés : freelance, mission, disponible, Lille, Compiègne, Amiens, Paris, remote, Hauts-de-France
6. [x] **`chore/audit-unused-dependencies`** — fait, mergé dans `dev` ; audit de `gray-matter`, `sass-loader` et dépendances suspectes ; `gray-matter` et `sass-loader` supprimés avec preuve ; aucun `npm install` ni `npm update`
7. [x] **`docs/nuxt-vite-warnings-audit`** — fait, mergé dans `dev` ; warnings Nuxt/Vite restants documentés sans optimisation de chunks ni modification de configuration build
8. [x] **`refactor/css-native-audit`** — fait, mergé dans `dev` ; audit Sass restant avant migration CSS moderne ; aucun style modifié ; rapport `migration-css-native-audit.md`
9. [x] **`docs/pre-master-final-check`** — fait localement ; validation finale de `dev` avant merge manuel vers `master`, sans modification de code applicatif
10. [x] **`fix/mobile-nav-close-on-link-click`** — fait localement ; fermeture du menu mobile au clic sur un lien interne avant merge master, sans rouvrir SEO, JSON-LD, URLs, dépendances, CSS natif ou warnings Nuxt/Vite

## Phase 31 — Apps positioning v2 (23 mai 2026)

> Branche : `feature/apps-positioning-v2`

### Refonte design apps finalisée avant merge `dev` — 2 juin 2026

- [x] Acter le commit final de référence : `4fdff1c fix: refine focusone duospend product sections`
- [x] Documenter que `/apps/` et `/en/apps/` sont redessinés selon la référence Cotypist : design rythmé, fond dégradé léger, cards premium claires et cohérence FR/EN
- [x] Documenter que les hubs `/apps/` et `/en/apps/` sont verrouillés pour l'instant
- [x] Documenter que toutes les pages `/apps/*/` et leurs équivalents EN gardent un seul CTA principal : `Voir comment ça marche` / `See how it works`
- [x] Documenter que les tarifs FocusOne et DuoSpend restent en cards
- [x] Documenter le séparateur visuel avant les blocs finaux `Support` et `Confidentialité` / `Privacy`
- [x] Documenter la suppression définitive des formulaires d'intérêt, de `#release-form`, des CTA `Être informé` / `Get launch updates` et de toute logique de liste d'attente
- [x] Poser le garde-fou : toute future correction sur `/apps/`, `/en/apps/` ou `/apps/*/` doit maintenir cette cohérence visuelle

### Décision finale : cadrage figé avant merge `dev` — 30 mai 2026

- [x] Fixer `/apps/` et `/en/apps/` avec un hero typographique sans images
- [x] Fixer FocusOne/DuoSpend FR/EN avec un seul CTA hero orienté fonctionnement : `Voir comment ça marche` / `See how it works`
- [x] Retirer toute mécanique lancement : pas de `#release-form`, pas de `release-form`, pas de CTA `Être informé` / `Get launch updates`
- [x] Conserver les sections tarifs en cards sur FocusOne et DuoSpend
- [x] Conserver intouchables les sections finales `Support` et `Confidentialité` / `Privacy` avec leurs ancres publiques
- [x] Maintenir la parité FR/EN (structure, ton produit, CTA)
- [x] Documenter que cette décision finale remplace la direction intermédiaire des CTA `Être informé` du 29 mai

### Direction visuelle Cotypist apps — 1er juin 2026

- [x] Appliquer une direction visuelle plus forte sur les 10 routes apps FR/EN sans nouvelle dépendance front, carrousel, vidéo, script tiers ou animation lourde
- [x] Garder les hubs `/apps/` et `/en/apps/` en hero typographique sans images
- [x] Renforcer le rythme éditorial, les espacements, les contrastes doux et les accents couleur par app
- [x] Supprimer les usages publics de `#release-form`, `Être informé` et `Get launch updates` sur Siturem et Meeting Mode
- [x] Aligner les CTA héros produits sur `Voir comment ça marche` / `See how it works`
- [x] Conserver les tarifs FocusOne/DuoSpend en cards
- [x] Préserver les sections finales `Support` et `Confidentialité` / `Privacy` et leurs ancres publiques

### Correction directionnelle : simplification apps — 29 mai 2026

- [x] Appliquer Frontend Review : identifier la dérive trop lourde, trop template SaaS, trop `cards partout`
- [x] Appliquer Frontend Skill : revenir à une page BeAbot plus éditoriale, respirante et premium sans nouvelle surcouche
- [x] Simplifier `/apps/` : hero texte seul, ligne de preuves, section `Deux usages très concrets`, manifeste court, section `Pratiquer, préparer`, liens finaux discrets
- [x] Simplifier `/en/apps/` avec la même logique adaptée
- [x] Simplifier `AppCard` : moins d'ombres, moins de badges, titre par usage, image produit comme preuve
- [x] Remplacer les CTA héros FocusOne/DuoSpend FR/EN par `Voir comment ça marche` / `Voir les tarifs` et `See how it works` / `See pricing`
- [x] Supprimer les sections `#release-form` FocusOne/DuoSpend FR/EN et les imports `AppReleaseInterestForm`
- [x] Préserver les sections finales `Support` et `Confidentialité` / `Privacy` et leurs ancres
- [x] Alléger les repères, points clés et tarifs des pages FocusOne/DuoSpend sans ajouter de nouvelle section
- [x] Renforcer `scripts/check-copy-quality.mjs` contre `Être informé`, `Get launch updates`, `#release-form`, `release-form`, `formulaire de lancement`, `liste d’attente`, `projets plus discrets` et `friction`
- [x] Valider `npm run check:copy`, `npm test`, `npm run generate`, `npm test` post-génération et `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs`
- [x] Contrôler en navigateur local `/apps/` desktop/mobile et vérifier les six routes générées prioritaires

### Dernier passage marketing et CTA — 29 mai 2026

- [x] Appliquer Frontend Review : hub encore trop proche d'une grille portfolio, CTA FocusOne/DuoSpend trop faibles, liens confidentialité dans les héros à retirer
- [x] Appliquer Frontend Skill : thèse visuelle, structure par usages, ligne de preuves, présence renforcée des captures FocusOne/DuoSpend
- [x] Repositionner `/apps/` avec le H1 `Des apps utiles pour garder le fil.`, preuve courte, sections `À utiliser au quotidien`, `Ouvrir. Faire. Fermer.` et `Pour pratiquer ou préparer`
- [x] Repositionner `/en/apps/` avec `Useful apps for keeping track.` et la même logique adaptée en anglais
- [x] Remplacer les CTA héros FocusOne FR/EN par `Être informé` / `Get launch updates` vers le formulaire existant `#release-form`
- [x] Remplacer les CTA héros DuoSpend FR/EN par `Être informé` / `Get launch updates` et `Voir l’app en images` / `View the app`
- [x] Ne pas modifier les sections finales `Support` et `Confidentialité` / `Privacy` ni leurs ancres
- [x] Renforcer `scripts/check-copy-quality.mjs` contre `friction`, `projets plus discrets`, `apps sobres`, `des apps simples`, `Voir la confidentialité` et `View privacy`
- [x] Valider `npm run check:copy`, `npm run generate`, `npm test`, `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs`
- [x] Contrôler en navigateur local desktop/mobile les six routes apps prioritaires

### Suivi éditorial et UX — 29 mai 2026

- [x] Reconstruire le contexte depuis le dépôt local, vérifier la branche et constater l'absence de `docs/apps-positioning-plan.md`
- [x] Retirer le wording public `friction` et les labels `apps principales` / `Core apps`
- [x] Repositionner `/apps/` et `/en/apps/` autour de FocusOne, DuoSpend, Siturem et Meeting Mode, avec FocusOne puis DuoSpend en première lecture
- [x] Corriger FocusOne FR/EN : H1 avec nom de l'app, CTA hero vers captures/tarifs, fil narratif plus concret, sobriété non mise en avant
- [x] Corriger DuoSpend FR/EN : chapô orienté projet de couple, titre de section moins négatif, positionnement sans banque connectée ni tableur
- [x] Ajouter `npm run check:copy` comme diagnostic local non bloquant, sans dépendance front ni ajout au bundle Nuxt
- [x] Valider `npm run check:copy`, `npm test`, `npm run generate`, `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs` et contrôle navigateur local des routes apps

- [x] Relire `AGENTS.md`, `BRANCHING_STRATEGY.md`, `docs/apps-positioning-plan.md` et `PROJECT_STATE.md`
- [x] Créer la branche depuis `dev` et vérifier `git status` + `git branch --show-current`
- [x] Auditer les routes apps existantes et les fichiers partagés (`data/apps.ts`, `data/apps-en.ts`, composants apps, SEO)
- [x] Repositionner `/apps/` comme hub produit FR : manifeste, principes communs, CTA final, et metadata SEO
- [x] Repositionner `/en/apps/` comme hub produit EN : manifeste adapté, principes communs, CTA final, et metadata SEO
- [x] Renforcer `/apps/focus-one/` : H1, angle \"compteur privé\", sections \"Pourquoi une seule habitude ?\", \"La boucle\", \"Pour quels usages ?\", \"Privé par défaut\", phrase de prudence
- [x] Renforcer `/en/apps/focus-one/` : H1, angle \"private streak counter\", sections \"Why only one habit?\", \"The loop\", \"Use cases\", \"Private by default\", safety sentence
- [x] Harmoniser légèrement les positionnements DuoSpend/Siturem dans les données FR/EN sans refonte complète
- [x] Vérifier et ajuster `useSeoMeta` + canonical + hreflang sur les hubs et FocusOne
- [x] Conserver les routes/slugs existants sans créer de nouvelles pages
- [x] Valider `npm test` (OK)
- [x] Valider `npm run generate` (OK, 92 routes prerendered)

## Phase 30 — Navigation mobile : fermeture au clic lien (12 mai 2026)

> Branche : `fix/mobile-nav-close-on-link-click`

- [x] Créer la branche depuis `dev`
- [x] Relire `AGENTS.md`, `BRANCHING_STRATEGY.md`, `PROJECT_STATE.md` et `TODO.md`
- [x] Appliquer les skills locaux pertinents : quick-start, Vue/Nuxt 4, design-front, Playwright, éco-conception et planning
- [x] Identifier le composant responsable : `layouts/default.vue`, nav mobile en `<details>`, liens `AppLink`, état `showMobileMenu`
- [x] Reproduire le bug en navigateur mobile 390×844 : après clic `Services`, route `/services/` OK mais `<details>` encore ouvert et logo en état menu ouvert
- [x] Ajouter un test de non-régression `tests/mobile-nav.test.mjs` et observer l'échec avant correction
- [x] Corriger `layouts/default.vue` : `ref` sur le `<details>`, fermeture au clic des liens mobiles, fermeture au changement de route, `showMobileMenu` synchronisé
- [x] Préserver les liens internes avec slash final et ne pas modifier `AppLink`
- [x] Ajouter l'état accessible minimal : `aria-expanded` et `aria-controls` sur le `summary` mobile
- [x] Vérifier que le focus ne reste pas dans le menu fermé après clic lien
- [x] Vérifier le comportement clavier du `summary` mobile avec `Enter`
- [x] Vérifier le comportement desktop 1440×900 : nav mobile masquée, nav desktop visible, navigation desktop fonctionnelle
- [x] Valider le test ciblé : `node --test tests/mobile-nav.test.mjs tests/app-link.test.mjs`
- [x] Valider `npm test` : 49 pre-build checks, garde-fou Content et 25 tests Node OK
- [x] Valider `npm run generate` : 68 routes prerendered
- [x] Valider `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : OK
- [x] Valider `node scripts/check-scss-explicit-imports.mjs` : `TOTAL_DEPENDANCES_IMPLICITES=0`
- [x] Mettre à jour le statut final dans `PROJECT_STATE.md` après validations complètes
- [x] Risque restant : aucun risque local bloquant identifié ; validation preview Netlify à faire après merge manuel par Benoît

## Phase 29 — Validation finale pré-master (11 mai 2026)

> Branche : `docs/pre-master-final-check`

- [x] Créer la branche depuis `dev`
- [x] Relire `AGENTS.md`, `BRANCHING_STRATEGY.md`, `PROJECT_STATE.md`, `TODO.md`, `migration-nuxt-vite-warnings-audit.md`, `migration-css-native-audit.md` et `migration-unused-dependencies-audit.md`
- [x] Appliquer les skills locaux pertinents : quick-start, planning, Vue/Nuxt 4 et éco-conception
- [x] Vérifier que les rapports récents existent et restent cohérents
- [x] Valider `npm test` : 49 pre-build checks, garde-fou Content et 23 tests Node OK
- [x] Valider `npm run generate` : 68 routes prerendered
- [x] Valider `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : OK
- [x] Valider `node scripts/check-scss-explicit-imports.mjs` : `TOTAL_DEPENDANCES_IMPLICITES=0`
- [x] Contrôler les sorties générées : 29 fichiers HTML publics, 26 fichiers `index.html`, sitemap 24 URLs sans `/404/`, RSS 13 items, JSON Feed 13 items
- [x] Vérifier canonical homepage : `https://beabot.fr/`
- [x] Vérifier JSON-LD : 34 scripts `application/ld+json` parsables, avec `@type` ou `@graph` typé
- [x] Vérifier trailing slash : aucune URL HTML interne sans slash final après exclusion des fichiers statiques, dont le ZIP Greenlight
- [x] Vérifier dépendances : `gray-matter` et `sass-loader` absents des manifests, `sass` conservé
- [x] Noter les warnings : `zeroRuntime` sitemap informatif et warning sourcemap `nuxt:module-preload-polyfill` présents ; circular chunk non reproduit
- [x] Produire `pre-master-final-check.md`
- [x] Décision : état local prêt pour merge manuel `dev` -> `master` par Benoît
- [x] Hors périmètre respecté : aucun code applicatif, build/config, CSS/SCSS, contenu éditorial, `package.json` ou `package-lock.json` modifié
- [x] Points reportés : validation Netlify preview/production, statut HTTP réel de `/404/`, warnings Nuxt/Vite uniquement sur preuve d'impact, migration CSS native CSS-2 à CSS-8, lint global repo-wide, audit sécurité npm

## Phase 26 — Audit Sass restant / CSS natif (11 mai 2026)

> Branche : `refactor/css-native-audit`

- [x] Créer la branche depuis `dev`
- [x] Lire `docs/ressources/ressources.md` et distinguer les ressources Medium comme inspiration, pas consigne automatique
- [x] Croiser l'audit avec RWEB / GreenIT v5 et Front-End Performance Checklist
- [x] Établir une baseline CSS avant rédaction : 18 fichiers CSS, 171 523 octets, hash `ba0d818a9f0c3dbbda99661146aad5625e9822d64c57ba4a538079d331fd8e15`
- [x] Inventorier les usages Sass restants : 8 fichiers `.scss`, 28 blocs Vue `lang="scss"`, 57 `@use`, 586 variables Sass, 24 `color.adjust()`, 5 `math.div()`, 2 `map.get()`, 1 `@each`, 3 fonctions Sass, 80 `$breakpoint-tablet`, 54 `$space-*`
- [x] Vérifier `node scripts/check-scss-explicit-imports.mjs` : `TOTAL_DEPENDANCES_IMPLICITES=0`
- [x] Produire `migration-css-native-audit.md`
- [x] Classer les usages : migrable maintenant vers `var()`, migrable vers `clamp()`/`min()`/`max()`/`calc()`, migrable plus tard avec `@supports`, à garder en Sass, à risque visuel, à risque compatibilité
- [x] Proposer la feuille de route CSS-2 à CSS-8 : couleurs, typo, spacing, breakpoints, couleurs dérivées, réduction des imports Sass, décision SCSS-6
- [x] Décision : aucun style modifié, aucun fichier SCSS supprimé, aucune dépendance supprimée, aucun plugin PostCSS ajouté
- [x] Valider `npm test` : 49 pre-build checks, garde-fou Content et 23 tests Node OK
- [x] Valider `npm run generate` : 68 routes prerendered
- [x] Valider `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : OK
- [x] Vérifier que le CSS généré reste identique à la baseline : 18 fichiers CSS, 171 523 octets, hash `ba0d818a9f0c3dbbda99661146aad5625e9822d64c57ba4a538079d331fd8e15`
- [x] Risque restant : aucun risque de rendu identifié sur ce lot documentaire ; risques visuels et compatibilité reportés aux futurs lots CSS-2 à CSS-8

## Phase 27 — Audit dépendances suspectes restantes (11 mai 2026)

> Branche : `chore/audit-unused-dependencies`

- [x] Créer la branche depuis `dev` après intégration locale de `refactor/css-native-audit`
- [x] Lire `docs/migration/nuxt4/reports/migration-nuxt4-unused-files-audit.md` et `migration-css-native-audit.md`
- [x] Auditer `gray-matter` : aucune référence code/script/test utile, uniquement manifests et docs ; pas d'usage indirect identifié dans le lock par Nuxt Content, Nuxt ou Vite
- [x] Auditer `sass-loader` : aucune référence projet ni config Webpack/Rspack ; Vite compile SCSS via le préprocesseur `sass`, conservé
- [x] Vérifier que les fichiers SCSS restent présents : 8 fichiers `.scss` et 28 blocs Vue `lang="scss"`
- [x] Conserver `sass`
- [x] Conserver `prettier`, utilisé par `lint:prettier`, `lint` et `lintfix`
- [x] Conserver `eslint-config-prettier` et `eslint-plugin-vue`, déjà conservés par l'audit ESLint Nuxt 4 et à ne pas refactorer dans ce lot
- [x] Supprimer `gray-matter` et `sass-loader` de `package.json` et `package-lock.json`
- [x] Limiter le diff lock aux paquets supprimés et à leurs dépendances strictement associées
- [x] Produire `migration-unused-dependencies-audit.md`
- [x] Valider `npm test` : 49 pre-build checks, garde-fou Content et 23 tests Node OK
- [x] Valider `npm run generate` : 68 routes prerendered, build Nuxt 4 et compilation SCSS OK
- [x] Valider `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : OK
- [x] Valider `node scripts/check-scss-explicit-imports.mjs` : `TOTAL_DEPENDANCES_IMPLICITES=0`
- [x] Contrôles ciblés : build Nuxt 4, compilation SCSS, `TOTAL_DEPENDANCES_IMPLICITES=0`, package-lock diff limité, SEO/sitemap/JSON-LD/trailing slash/RSS/JSON Feed sans régression ; sitemap 24 URLs sans `/404/`, RSS et JSON Feed 13 items, 27 fichiers HTML publics
- [x] Risque restant : `node_modules` local peut afficher `gray-matter` et `sass-loader` comme `extraneous` car aucun install/prune n'est lancé ; pas de risque repo identifié

## Phase 28 — Audit warnings Nuxt/Vite restants (11 mai 2026)

> Branche : `docs/nuxt-vite-warnings-audit`

- [x] Créer la branche depuis `dev` après intégration locale de `chore/audit-unused-dependencies`
- [x] Lire `docs/migration/nuxt4/reports/migration-nuxt4-final-audit.md`, `migration-css-native-audit.md`, `migration-unused-dependencies-audit.md` et `docs/ressources/ressources.md`
- [x] Reproduire la génération avec `npm run generate`
- [x] Noter le contexte : Nuxt `4.4.2`, Nitro/Nitropack `2.13.4`, Vite builder `7.3.2`, Vite direct `6.4.2`, Vue `3.5.33`, génération statique
- [x] Confirmer le warning sourcemap `nuxt:module-preload-polyfill`
- [x] Confirmer que le warning `Circular chunk: vendor-nuxt -> vendor-libs -> vendor-nuxt` n'est plus reproduit sur l'état actuel
- [x] Vérifier que `nuxt.config.ts` ne contient plus de `manualChunks`
- [x] Produire `migration-nuxt-vite-warnings-audit.md`
- [x] Décision : ne pas modifier `nuxt.config.ts`, Vite, chunks, CSS/SCSS, Content, SEO, dépendances ou contenus dans ce lot
- [x] Proposer un futur chantier uniquement si mesure réelle : `perf/vite-chunk-audit` ou `docs/build-warnings-followup`
- [x] Contrôles ciblés post-génération : 68 routes prerendered, 29 fichiers HTML publics, 26 fichiers `index.html`, sitemap 24 URLs sans `/404/`, RSS 13 items, JSON Feed 13 items, 18 fichiers CSS pour 171 523 octets, 51 fichiers JS pour 871 923 octets observés
- [x] Valider `npm test` : 49 pre-build checks, garde-fou Content et 23 tests Node OK
- [x] Valider `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : OK
- [x] Valider `node scripts/check-scss-explicit-imports.mjs` : `TOTAL_DEPENDANCES_IMPLICITES=0`
- [x] Vérifier qu'aucun fichier build/config n'a été modifié par erreur : seuls `PROJECT_STATE.md`, `TODO.md` et `migration-nuxt-vite-warnings-audit.md` sont modifiés
- [x] Risque restant : warning sourcemap à surveiller si impact debugging, circular chunk à surveiller uniquement si futur chunking manuel

## Phase 25 — Signaux freelance/local sobres (11 mai 2026)

> Branche : `content/freelance-local-signals`

- [x] Créer la branche depuis `dev` après intégration locale des lots SEO techniques
- [x] Renforcer la homepage sans nouveau badge ni refonte : signal Lille, Hauts-de-France, remote et CTA de mission
- [x] Clarifier `/contact/` : missions WordPress, JavaScript, audit, éco-conception, zone d'intervention et remote
- [x] Cadrer `/portfolio/` comme preuve de missions web WordPress, JavaScript, Nuxt et éco-conception, sans masquer les apps iOS ni réorganiser les projets
- [x] Retirer la localisation globale du footer après contrôle visuel : la ligne alourdissait la zone légale
- [x] Ajouter sur `/eco-conception/` un CTA bas de page et du maillage sobre vers les articles longue traîne existants : audit, refonte et freelance WordPress Lille
- [x] Relier `/greenlight/` à une prestation WordPress possible sans modifier l'offre produit en profondeur
- [x] Décision éditoriale : ton factuel, pas de tarifs, pas de promesse de disponibilité précise, pas de nouvelle page ni nouvel article
- [x] Décision technique : pas de SCSS modifié, pas de helper URL, sitemap, JSON-LD ou dépendance modifiés
- [x] Valider `npm test` : 49 pre-build checks, garde-fou Content et 23 tests Node OK
- [x] Valider `npm run generate` : 68 routes prerendered
- [x] Valider `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : OK
- [x] Contrôles ciblés post-génération : signaux visibles sur `/`, `/contact/`, `/portfolio/`, `/eco-conception/` et `/greenlight/` ; signal footer supprimé ; page contact espacée de la navigation ; liens internes avec slash final ; articles longue traîne générés ; canonical, `/404/`, sitemap 24 routes sans `/404/`, titles, descriptions, JSON-LD, trailing slash, RSS et JSON Feed sans régression
- [x] Contrôle navigateur local : homepage desktop 1440×900 avec hero à 100vh et contenu contenu ; mobile 390×844 sans débordement horizontal, hero plus haut que 100vh par empilement responsive existant mais sans casse de mise en page
- [x] Risque restant : aucun risque local bloquant identifié ; validation preview Netlify à faire après merge manuel par Benoît

## Phase 24 — URLs internes avec slash final (11 mai 2026)

> Branche : `fix/internal-url-trailing-slashes`

- [x] Créer la branche depuis `dev` après merge local des lots SEO prérequis
- [x] Auditer `canonicalUrl`, `absoluteUrl`, `withTrailingSlash` et `normalizeInternalHref`
- [x] Renforcer les exceptions fichiers de `normalizeInternalHref` : manifest, robots, images modernes, assets Nuxt, map/wasm et archive zip
- [x] Préserver les ancres, query strings, liens externes, `mailto:` et `tel:`
- [x] Corriger `AppLink` pour préserver le slash final des liens internes rendus en nouvel onglet
- [x] Normaliser les liens Markdown internes sans slash final dans `wordpress-eco-conception.md`
- [x] Normaliser l'action du formulaire contact vers `/contact/`
- [x] Renforcer les tests `seo-url`, `app-link`, `generated-pages` et `scripts/seo-check.mjs`
- [x] Valider `npm test` : 49 pre-build checks, garde-fou Content et 23 tests Node OK
- [x] Valider `npm run generate` : 68 routes prerendered
- [x] Valider `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : OK
- [x] Contrôles ciblés post-génération : liens internes HTML vérifiés sur 27 fichiers HTML, fichiers statiques sans slash ajouté, ancres conservées, liens externes conservés, aucun `mailto:`/`tel:` généré et cas couverts par tests unitaires, sitemap 24 routes avec slash final et sans `/404/`, RSS, JSON Feed, JSON-LD et non-régressions SEO OK
- [x] Diagnostic pré-merge de l'écart de comptage Nitro : `dev` génère 72 routes et la branche 68, mais les deux sorties contiennent les mêmes 26 `index.html`, les mêmes 13 articles `/eco-conception/.../`, les mêmes 3 pages `/apps/.../`, `404.html`, `sitemap.xml`, `rss.xml` et `feed.json`
- [x] Confirmer que les 24 routes du sitemap sont identiques entre `dev` et la branche, toutes canoniques avec slash final et sans `/404/`
- [x] Identifier les 4 routes Nitro non pertinentes supprimées du crawl : variantes sans slash `/eco-conception/images-eco-conception`, `/eco-conception/l-eco-conception-web`, `/eco-conception/theme-wordpress-eco-conception`, `/eco-conception/typographie-ecoconception`, issues des liens Markdown désormais normalisés
- [x] Risque restant : aucun risque local identifié ; validation preview Netlify à faire après merge manuel par Benoît

## Phase 23 — Données structurées JSON-LD minimales (11 mai 2026)

> Branche : `fix/seo-json-ld-structured-data`

- [x] Créer la branche depuis `dev` après intégration des correctifs SEO technique et titles/descriptions
- [x] Corriger le rendu des scripts `application/ld+json` : utiliser `innerHTML` au lieu de `children` pour produire du JSON parsable dans le HTML statique
- [x] Conserver et renforcer la homepage : `Organization` + `Person` existants, ajout sobre de `WebSite` dans le `@graph`
- [x] Vérifier `/contact/` : `ContactPage` présent, sobre et vérifiable
- [x] Renforcer les articles éco-conception : `BlogPosting` conserve `author`, `datePublished`, `dateModified` si disponible, et ajoute `url` alignée sur la canonical
- [x] Renforcer les tests HTML générés contre JSON-LD invalide, script vide, attribut `children`, `@type`/`@graph` absent, `ContactPage` absent, article sans `author`/`datePublished`/`url`
- [x] Renforcer `scripts/seo-check.mjs` avec les mêmes contrôles JSON-LD post-génération
- [x] Conserver `/eco-conception/faq-eco-conception/` en `FAQPage` sans forcer `BlogPosting`, car ce n'est pas un article éditorial
- [x] Valider `npm test` : 49 pre-build checks, garde-fou Content et 23 tests Node OK
- [x] Valider `npm run generate` : 72 routes prerendered
- [x] Valider `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : OK
- [x] Contrôles ciblés post-génération : scripts LD+JSON valides sur 24 routes sitemap, homepage `Person`/`WebSite`, `/contact/` `ContactPage`, articles `BlogPosting` avec `author`/`datePublished`/`url`, non-régression canonical home, sitemap `/404/`, titles, descriptions et `[object Object]`
- [x] Risque restant : aucun risque local identifié ; validation preview Netlify à faire après merge manuel par Benoît

## Phase 22 — Uniformisation SEO titles & descriptions (11 mai 2026)

> Branche : `fix/seo-title-description-patterns`

- [x] Remplacer le template global historique `BeAbot - Titre` par le pattern `Titre | BeAbot`
- [x] Corriger le template central dans `app.vue`, qui imposait encore le préfixe `BeAbot -`
- [x] Corriger les entités HTML visibles dans les titles/H1 ciblés : `/apps/`, `/portfolio/` et articles concernés
- [x] Raccourcir ou clarifier les titles signalés : images, mentions légales, typographie, WordPress éco-conception, page pilier éco-conception
- [x] Raccourcir les descriptions trop longues : `/greenlight/`, `/eco-conception/l-eco-conception-web/`, `/eco-conception/la-consommation-energetique-du-numerique/`, `/eco-conception/theme-wordpress-eco-conception/`, `/eco-conception/typographie-ecoconception/`
- [x] Aligner les `og:description` sur les meta descriptions pour les pages corrigées ou conserver la constante partagée existante
- [x] Renforcer `scripts/seo-check.mjs` et les tests générés pour refuser `BeAbot -`, `&amp;`, `&#x27;`, `&#39;` et les titles hors pattern
- [x] Valider `npm test` : 49 pre-build checks, garde-fou Content et 22 tests Node OK
- [x] Valider `npm run generate` : 72 routes prerendered
- [x] Valider `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : OK
- [x] Contrôles ciblés post-génération : aucun title ciblé avec `&amp;`, `&#x27;` ou `&#39;`, pattern `Titre | BeAbot` OK, descriptions ciblées entre 120 et 160 caractères, non-régression canonical/homepage, `[object Object]` et sitemap `/404/`
- [ ] Risque restant : la plage 120–160 caractères reste un objectif SEO local, pas une règle stricte universelle pour les pages hors sitemap comme `/404/` ou `/merci/`

## Phase 21 — Stabilisation SEO technique critique (11 mai 2026)

> Branche : `fix/seo-technical-cleanup`

- [x] Vérifier la canonical homepage via `canonicalUrl(config.public.siteUrl, '/')` : sortie attendue `https://beabot.fr/`
- [x] Blinder la meta description article contre les valeurs non textuelles pour éviter une sérialisation `[object Object]`
- [x] Étendre les garde-fous SEO HTML aux pages ciblées : `/apps/`, `/portfolio/`, `/mentions-legales/`, `/contact/`, `/eco-conception/audit-eco-conception/`, `/eco-conception/comment-reduire-le-poids-d-un-site-web/`
- [x] Vérifier les descriptions courtes/tronquées et `og:description` sur les pages du périmètre via `scripts/seo-check.mjs`
- [x] Exclure `/404/` du sitemap : configuration existante conservée et contrôle ajouté au check SEO
- [x] Corriger le cas `/404/` HTTP 200 côté Netlify avec redirects `/404` et `/404/` vers `/404.html` en statut 404
- [x] Vérifier `twitter:card` sur `/mentions-legales/` et `/portfolio/` via le check SEO HTML
- [x] Valider `npm test` : 22 tests Node OK, 49 pre-build checks OK
- [x] Valider `npm run generate` : 72 routes prerendered
- [x] Valider `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs` : OK
- [x] Contrôles ciblés post-génération : aucun `[object Object]` dans les HTML, canonical home `https://beabot.fr/`, sitemap sans `https://beabot.fr/404/`, metas ciblées vérifiées
- [ ] Risque restant : le statut HTTP réel de `/404/` dépend du comportement Netlify en preview/production ; à confirmer après déploiement, sans merge automatique vers `master`

## Phase 17 — SEO & Repositionnement freelance (26 avril 2026)

> Basé sur `audit-seo-2026-04-26.md` + `audit-contenu-positionnement-2026-04-26.md`  
> Branche : `fix/seo-meta` pour les corrections techniques, `content/repositionnement-freelance` pour le contenu

---

## Phase 20 — Services freelance : relief visuel & maillage (28 avril 2026)

> Branche : `feat/design-services`

- [x] Retravailler `/services/` sans changer le fond général ni casser la logique commerciale existante
- [x] Ajouter du relief visuel inspiré de `/eco-conception/` : œufs décoratifs, accents colorés, bande sombre, rythme entre sections
- [x] Conserver les familles d'offres WordPress, Vue.js / Nuxt et audit éco-conception & performance
- [x] Renommer `Tarifs indicatifs` en **Fourchettes habituelles** et clarifier le rôle d'ordre de grandeur budgétaire
- [x] Renforcer le maillage `/services/` → articles : audit site web, WordPress freelance Lille, refonte éco-conçue, WordPress vs Nuxt
- [x] Renforcer le maillage `/services/` → `/portfolio/`, `/contact/`, `/eco-conception/` et `/greenlight/`
- [x] Ajouter des liens retour sobres depuis les 4 articles longue traîne vers `/services/`
- [x] Ajuster la micro-copy de `/services/` pour clarifier les personas : agences, entreprises, indépendants et petites structures
- [x] Faire passer la navigation en clair sur la section sombre `Zone d'intervention` via le pattern existant `data-nav-theme="light"`
- [x] Valider `npm run generate` : 100 routes générées
- [x] Vérifier Prettier sur les fichiers modifiés
- [x] Vérifier ESLint ciblé sur `pages/services.vue` : 0 erreur, warnings de style Vue uniquement
- [ ] Lint global repo-wide à traiter séparément : `npm run lint` reste bloqué par des warnings/formatages historiques hors périmètre

---

## Backlog — Migration Nuxt 4

> Prérequis à compléter dans l'ordre avant d'ouvrir une branche de migration.

### Étape 0 — Tests & couverture

- [x] Lancer la suite de tests existante et s'assurer qu'elle passe à 100% sur `dev` avant toute migration
- [x] Documenter les tests manquants critiques (pages, composants, utils SEO) et les ajouter si nécessaire

> Audit préparatoire réalisé le 28 avril 2026 sur `chore/nuxt-4-A` après activation de `future.compatibilityVersion: 4`.
> À refaire explicitement sur `dev` avant toute branche de migration réelle.
> Couverture préparatoire enrichie sur `chore/nuxt-4-A` : tests critiques ajoutés pour URLs SEO, `AppLink`, pages SSG, feeds et requêtes Content v2.

- [x] **TEST-AUDIT-1** — Lancer la suite existante sur la branche d'audit : `npm test`
  - Résultat : ✅ 49 checks passés, 0 warning, 0 erreur
  - Sortie brute supprimée lors de `CLEANUP-ROOT` ; synthèse conservée dans `docs/migration/nuxt4/reports/migration-nuxt4-tests-coverage.md`.
- [x] **TEST-AUDIT-2** — Lancer le check SEO existant sur le build statique disponible
  - Commande : `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs`
  - Résultat : ✅ `OK SEO checks passed.`
  - Sortie brute supprimée lors de `CLEANUP-ROOT` ; synthèse conservée dans `docs/migration/nuxt4/reports/migration-nuxt4-tests-coverage.md`.
- [x] **TEST-AUDIT-3** — Documenter les manques critiques avant migration Nuxt 4
  - Rapport : `docs/migration/nuxt4/reports/migration-nuxt4-tests-coverage.md`
- [x] **TEST-1** — Ajouter des tests unitaires pour `utils/seo-url.ts`
  - Couvrir : `absoluteUrl`, `canonicalUrl`, `withTrailingSlash`, `normalizeInternalHref`
  - Critique : URLs canoniques, trailing slash, assets avec extension, query strings et ancres
- [x] **TEST-2** — Ajouter un test de rendu/comportement pour `components/AppLink.vue`
  - Couvrir : liens internes normalisés, liens externes inchangés, ancres et query strings
  - Critique : maillage interne et convention SEO trailing slash
- [x] **TEST-3** — Ajouter des smoke tests SSG pour les pages clés
  - Pages : `/`, `/eco-conception/`, un article, `/portfolio/`, `/services/`, `/contact/`
  - Critique : build statique, balises SEO minimales, canonical et `og:url`
- [x] **TEST-4** — Ajouter des tests de non-régression pour `rss.xml` et `feed.json`
  - Couvrir : génération sans erreur, URLs avec trailing slash, dates valides, échappement XML/JSON
  - Critique : endpoints serveur impactés par la migration Content v2 → v3
- [x] **TEST-5** — Ajouter un check ciblé sur les requêtes Content utilisées par les pages articles
  - Couvrir : liste articles, page article, navigation précédent/suivant, tags
  - Critique : APIs `queryContent`, `serverQueryContent`, `_path` identifiées comme cassantes en Nuxt/Content v3

### Étape 1 — Performance (PageSpeed Insights : 99 → 100 mobile)

> Source : audit PSI du 27 avril 2026 (screenshot)
> Audit local : `docs/migration/nuxt4/reports/migration-nuxt4-psi-audit.md`

- [ ] **PSI-1** — Éliminer les 3 CSS render-blocking (`/_nuxt/entry.css`, `/_nuxt/index.css`, `/_nuxt/default.css`) — économie estimée : 270 ms LCP/FCP
  - Option A : `inlineSSRStyles: true` (déjà désactivé intentionnellement — réévaluer)
  - Option B : charger les CSS non-critiques en `<link rel="preload">` + swap
  - Option C : CSS critique inline via plugin Vite Extract Critical
  - Note : `inlineSSRStyles: true` a été testé puis reverté le 28 avril 2026. La validation publique sur `https://dev-beabot.netlify.app/` donnait un score mobile 98 contre 99 sur `https://beabot.fr/` avant intervention, avec `vendor-libs.css` et `entry.css` encore render-blocking. Approche abandonnée.
  - Note : score mobile 100 atteint sur `dev`, mais item conservé ouvert faute de validation détaillée de l’audit correspondant.
- [ ] **PSI-2** — Réduire la chaîne critique maximale (444 ms sur `entry.css`) — envisager un split CSS plus fin ou un lazy-load des styles de pages non-homepage
  - Note : la validation publique sur `dev` indiquait une chaîne critique maximale de 837 ms après `inlineSSRStyles: true`. La réduction n’est donc pas validée. Exploration séparée nécessaire sur `vendor-libs.css` et `entry.css`.
  - Note : score mobile 100 atteint sur `dev`, mais item conservé ouvert faute de validation détaillée de l’audit correspondant.
- [x] **PSI-3** — Valider le score PSI mobile = 100 après corrections
  - Validation : PageSpeed Insights mobile sur `https://dev-beabot.netlify.app/`, rapport du 28 avril 2026 à 17:57:04.
  - Résultat : Performance 100, Accessibilité 96, Bonnes pratiques 100, SEO 100.
  - Note : score atteint après revert de `inlineSSRStyles` à `false`; la stratégie CSS externe/cache est conservée.

### Étape 2 — Audit fichiers inutiles

> Audit réalisé le 28 avril 2026 sur `chore/nuxt4-unused-files-audit`.
> Rapport : `docs/migration/nuxt4/reports/migration-nuxt4-unused-files-audit.md`.

- [x] Lister les fichiers orphelins potentiels ; supprimer uniquement ceux prouvés inutilisés
- [x] Vérifier que `getSiteMeta.js` (vestige Nuxt 2, marqué `deprecated`) n'est plus importé dans aucun composant — le supprimer si présent et inutilisé
- [x] Auditer les dépendances `package.json` non utilisées (`npm-check` ou équivalent)
  - Note : aucune dépendance modifiée ; `gray-matter` et `sass-loader` restent à vérifier dans une branche séparée.
- [x] Vérifier les routes générées : documenter le nombre observé et confirmer qu'aucune page fantôme n'est incluse dans le build

### Étape 2b — Refactor SCSS → CSS moderne

> **Contexte :** le projet utilise `sass` avec l'API `modern-compiler` (déjà configurée dans `vite.css.preprocessorOptions`). Les warnings de dépréciation `if-function` dans `assets/css/vars/_typo.scss` ont été **corrigés le 27 avril 2026** (remplacement des `if()` Sass par `@if`/`@else`). Le refactor complet est une étape séparée.

**Objectif :** migrer les variables SCSS vers des custom properties CSS (`--var`) là où c'est pertinent, pour bénéficier de la cascade native, réduire la dépendance à SCSS et préparer la migration Nuxt 4.

- [x] **SCSS-1** — Inventaire : lister toutes les variables SCSS (`$var`) utilisées dans les composants scoped vs les fichiers globaux (`vars/`, `main.scss`)
  - Rapport : `docs/migration/nuxt4/reports/migration-nuxt4-scss-inventory.md`
  - Sorties brutes `scss-inventory-*.txt` supprimées lors de `CLEANUP-ROOT` ; synthèse conservée dans le rapport.
  - Aucun style modifié ; aucune variable migrée ; aucune dépendance modifiée.
- [x] **SCSS-2** — Migrer les variables de couleurs (`$vert`, `$gris1`…) de `vars/_colors.scss` vers des custom properties CSS dans `:root` — garder les aliases SCSS pour la période de transition
  - Rapport : `docs/migration/nuxt4/reports/migration-nuxt4-scss-colors.md`
  - Les aliases SCSS sont conservés pour transition.
  - Les usages `color.adjust()` conservent des valeurs Sass raw (`*-raw`) pour éviter de casser la compilation.
  - Les custom properties sont déclarées une seule fois dans le CSS global pour éviter la duplication liée à `additionalData`.
  - Éco-impact résumé dans `docs/migration/nuxt4/reports/migration-nuxt4-scss-colors.md` ; sortie brute supprimée lors de `CLEANUP-ROOT`.
- [x] **SCSS-3** — Migrer les variables de typographie (`$breakpoint-tablet`, tailles fluides) vers des custom properties ou des `@layer` CSS
  - Rapport : `docs/migration/nuxt4/reports/migration-nuxt4-scss-typography.md`
  - Migration partielle volontaire : tokens typographiques simples exposés en custom properties CSS ; `$breakpoint-tablet`, maps et calculs Sass conservés.
  - Les custom properties typo sont déclarées une seule fois dans le CSS global pour éviter la duplication liée à `additionalData`.
- [x] **SCSS-4** — Remplacer les `@use` globaux injectés via `vite.css.preprocessorOptions.additionalData` par des imports explicites dans chaque fichier qui en a besoin (meilleure traçabilité, compatible Nuxt 4)
  - Rapport : `docs/migration/nuxt4/reports/migration-nuxt4-scss-explicit-imports.md`
  - Les imports SCSS globaux ne sont plus injectés via `additionalData`.
  - Les fichiers consommateurs déclarent explicitement leurs dépendances SCSS.
  - `api: modern-compiler` est conservé.
  - Éco-impact résumé dans `docs/migration/nuxt4/reports/migration-nuxt4-scss-explicit-imports.md` ; sortie brute supprimée lors de `CLEANUP-ROOT`.
- [x] **SCSS-5** — Valider l'éco-impact : vérifier que le CSS généré n'a pas grossi (poids `/_nuxt/*.css` avant/après)
  - Rapport : `docs/migration/nuxt4/reports/migration-nuxt4-scss-eco-impact.md`
  - CSS total mesuré après SCSS-4/5 : 171 279 octets.
  - Résultat : CSS réduit par rapport aux étapes précédentes.
  - `TOTAL_DEPENDANCES_IMPLICITES=0` confirmé.
  - Opportunités CSS moderne documentées : `var()`, `calc()`, `clamp()`, `min()`, `max()`, `color-mix()` et couleurs relatives CSS.
  - Aucune suppression complète de SCSS dans cette étape.
- [ ] **SCSS-6** — Supprimer SCSS entièrement si la migration est complète et que tous les composants utilisent CSS natif + custom properties
  - Décision SCSS-6 réalisée : `docs/migration/nuxt4/reports/migration-nuxt4-scss-6-decision.md`.
  - Décision : reporter après preview Nuxt 4 ; ne pas faire avant merge `dev`.
  - Raison : 8 fichiers `.scss`, 28 fichiers Vue en `lang="scss"`, 511 occurrences `$...`, helpers `sass:color`, `sass:math`, `sass:map`, fonctions et maps encore actifs.
  - `sass`, `sass-loader` et `vite.css.preprocessorOptions.scss` restent nécessaires tant que ces usages existent.
  - Point à intégrer au futur lot : `pages/contact.vue` contient une valeur `$gris3` dans un bloc CSS non SCSS.

### Étape 3 — Migration Nuxt 4

> Audit réalisé le 27 avril 2026 — basé sur la doc officielle Nuxt 4 et l'analyse du code existant.
> Référence : https://nuxt.com/docs/getting-started/upgrade#migrating-to-nuxt-4

---

#### 3.0 — Pré-migration : activer le mode compatibilité Nuxt 4

- [x] **COMPAT-1** — Ajouter `future: { compatibilityVersion: 4 }` dans `nuxt.config.ts`
- [x] **COMPAT-2** — Lancer `npm run generate` et documenter tous les warnings/erreurs dans `docs/migration/nuxt4/reports/migration-nuxt4-warnings.md`   - Refresh réalisé le 29 avril 2026 sur `chore/nuxt4-migration` après Étape 2b SCSS : `npm test` OK, `npm run generate` OK, 100 routes prerendered, aucun warning Nuxt 4 bloquant identifié.
- [x] **COMPAT-3** — Lancer `npx codemod@0.18.7 nuxt/4/migration-recipe` pour identifier les transformations automatisables   - Refresh codemod réalisé le 29 avril 2026 : `npx --no-install codemod nuxt/4/migration-recipe --dry-run` échoue car `codemod@1.9.0` n'est pas installé localement. Aucun install interactif lancé.
- [x] **COMPAT-4** — Créer la branche `chore/nuxt4-migration` depuis `dev` à jour

---

#### 3.1 — Mise à jour des dépendances

> DEP-AUDIT réalisé le 29 avril 2026 sur `chore/nuxt4-migration`.
> Objectif : comparer versions déclarées, versions installées et ordre réel de mise à jour avant `DEP-1`.
> Rapports :
> - `docs/migration/nuxt4/reports/migration-nuxt4-dep-audit.md`
> - `docs/migration/nuxt4/reports/dep-audit-update-order.md`
> - sorties brutes `dep-audit-*.txt` supprimées lors de `CLEANUP-ROOT`
> Aucun changement de dépendance effectué dans cette étape.

Ordre recommandé (mettre à jour et tester une par une) :

| #   | Dépendance        | Version actuelle | Version cible Nuxt 4 | Breaking changes                                                           | Impact |
| --- | ----------------- | ---------------- | -------------------- | -------------------------------------------------------------------------- | ------ |
| 1   | `nuxt`            | 4.4.2            | 4.4.2                | Voir sections 3.2–3.5                                                      | 🔴     |
| 2   | `@nuxt/content`   | 3.13.0           | 3.13.0               | API entièrement refondue (voir 3.3)                                        | 🔴     |
| 3   | `vue`             | ^3.5.12          | ^3.5+                | Aucun — compatible                                                         | 🟢     |
| 4   | `vue-router`      | ^4.4.5           | ^4.5+                | Aucun — compatible                                                         | 🟢     |
| 5   | `@nuxt/image`     | 2.0.0            | 2.0.0                | Compatible Nuxt 4 ; provider `none` utilisé car aucun composant Nuxt Image n'est rendu aujourd'hui | 🟡     |
| 6   | `@nuxtjs/sitemap` | 8.0.15           | 8.0.15               | v6 incompatible avec Content v3 via import interne `#content/server`       | 🟠     |
| 7   | `@nuxt/eslint`    | 1.15.2           | 1.15.2               | Config flat ESLint minimale ; lint Prettier global reste hors périmètre    | 🟠     |
| 8   | `eslint`          | ^9.14.0          | ^9.x                 | Compatible                                                                 | 🟢     |
| 9   | `sass`            | ^1.80.7          | ^1.80+               | Compatible                                                                 | 🟢     |
| 10  | `sass-loader`     | ^16.0.3          | ^16+                 | Compatible                                                                 | 🟢     |
| 11  | `vite`            | ^6.0.1           | ^6+                  | Nuxt 4 utilise Vite Environment API — géré par Nuxt                        | 🟢     |

- [x] **TEST-GUARD Nuxt 4** — Adapter `scripts/pre-build-check.js` pour accepter Nuxt 3 et Nuxt 4 pendant la migration
  - Rapport : `docs/migration/nuxt4/reports/migration-nuxt4-test-guard.md`
  - Raison : `DEP-1` était bloqué par le message `Nuxt 3 not in dependencies`.
  - Le garde-fou refuse toujours l'absence de `nuxt` et les majors autres que 3 ou 4.
  - `npm test`, `npm run generate` et check SEO validés.
- [x] **DEP-1** — Mettre à jour `nuxt` vers la dernière version 4.x
  - Rapport : `docs/migration/nuxt4/reports/migration-nuxt4-dep-1-retry.md`
  - Version installée : `nuxt@4.4.2`
  - `npm test`, `npm run generate` et check SEO validés.
  - Routes prerendered : 100.
  - Warnings non bloquants documentés : sourcemap `nuxt:module-preload-polyfill`, circular chunk `vendor-nuxt -> vendor-libs -> vendor-nuxt`.
  - `@nuxt/content`, `@nuxt/image`, `@nuxtjs/sitemap` et `@nuxt/eslint` non migrés dans cette étape.
- [x] **DEP-2** — Mettre à jour `@nuxt/content` vers 3.x (après avoir migré les APIs — voir 3.3)
  - CONTENT-DOCS réalisé : `docs/migration/nuxt4/reports/migration-nuxt4-content-v3-docs-audit.md`.
  - Ne pas lancer avant décision explicite sur le schéma `content.config.ts` et le validateur requis par la documentation officielle.
  - DEP-2-A réalisé partiellement : `docs/migration/nuxt4/reports/migration-nuxt4-dep-2-a.md`.
  - Version installée : `@nuxt/content@3.13.0`.
  - `content.config.ts` minimal créé pour `articles`.
  - `npm test` OK.
  - `npm run generate` bloqué par les imports v2 `#content/server` dans RSS/JSON Feed et `@nuxtjs/sitemap` v6.
  - Ne pas cocher `DEP-2` avant migration des APIs v2 restantes.
  - DEP-2-B réalisé partiellement : `docs/migration/nuxt4/reports/migration-nuxt4-dep-2-b.md`.
  - RSS et JSON Feed migrés vers `queryCollection(event, 'articles')`.
  - `npm test` OK.
  - Blocage `@nuxtjs/sitemap` v6 traité ensuite dans `DEP-3`.
  - DEP-2-C réalisé : `docs/migration/nuxt4/reports/migration-nuxt4-dep-2-c-pages.md`.
  - Schéma `articles` enrichi dans `content.config.ts` avec les champs frontmatter nécessaires (`date`, `updatedAt`, `tag`, SEO, images, conversion).
  - `zod@3.25.76` ajouté en dépendance directe car le schéma Content l'importe explicitement.
  - Pages et composants principaux migrés vers `queryCollection`, `queryCollectionItemSurroundings` et `path`.
  - RSS, JSON Feed et sitemap revalidés après schéma complet.
  - `npm test`, `npm run generate` et check SEO OK ; routes prerendered : 72.
  - DEP-2-D réalisé : `docs/migration/nuxt4/reports/migration-nuxt4-dep-2-d-search.md`.
  - Recherche `AppSearchInput.vue` migrée vers `queryCollection('articles')`, `LIKE`, `.orWhere(...)`, `.all()` et `path`.
  - `npm test`, `npm run generate` et check SEO OK ; routes prerendered : 72.
  - DEP-2-E audit final réalisé : `docs/migration/nuxt4/reports/migration-nuxt4-dep-2-final-audit.md`.
  - Plus aucune API Content v2 applicative détectée dans `pages/`, `components/`, `composables/`, `layouts/`, `server/`, `utils/`, `scripts/`, `nuxt.config.ts`, `app.vue` et `error.vue`.
  - `utils/getRoutes.js`, utilitaire orphelin Nuxt Content v2 documenté par les audits précédents, supprimé pendant l'audit final.
  - Garde-fou `scripts/check-content-queries.mjs` étendu aux dossiers utilitaires et scripts applicatifs.
  - `npm test`, `npm run generate` et check SEO OK ; routes prerendered : 72.
  - RSS, JSON Feed et sitemap générés ; sitemap : 13 URLs articles + archive `/eco-conception/`.
  - Note hors périmètre DEP-2 : 5 liens Markdown internes sans slash final restent dans un article existant ; pas de changement éditorial dans cet audit.
- [x] **DEP-3** — Vérifier compatibilité `@nuxtjs/sitemap` 6.x avec Nuxt 4 ; mettre à jour vers 7.x si requis
  - DEP-2-B : nécessaire avant validation complète, car `@nuxtjs/sitemap` v6 importe encore `#content/server`.
  - Rapport : `docs/migration/nuxt4/reports/migration-nuxt4-dep-3-sitemap.md`.
  - Version installée : `@nuxtjs/sitemap@8.0.15`.
  - `npm test` OK.
  - `npm run generate` termine avec `.output/public` généré et `/sitemap.xml` présent.
  - Check SEO OK.
  - Routes sitemap vérifiées : 13 URLs articles + archive `/eco-conception/` dans `.output/public/sitemap.xml`.
  - Warnings/erreurs non corrigés dans ce lot : warning `zeroRuntime`, sourcemap `nuxt:module-preload-polyfill`, circular chunk, pages Vue encore en `queryContent`, RSS/JSON Feed bloqués par le champ Content `date` non déclaré.
  - Prochaine étape : `DEP-2-C / Content pages APIs` et schéma Content complet.
  - Les erreurs pages Vue et champ Content `date` ont été traitées ensuite dans `DEP-2-C`.
- [x] **DEP-4** — Vérifier compatibilité `@nuxt/image` ; mettre à jour si nécessaire
  - Rapport : `docs/migration/nuxt4/reports/migration-nuxt4-dep-4-image.md`.
  - Version installée : `@nuxt/image@2.0.0`.
  - Seule dépendance directe modifiée dans `package.json` : `@nuxt/image`.
  - Configuration minimale : `image.provider: 'none'` pour éviter la route IPX, car le projet utilise actuellement des `<img>` natifs et aucun `NuxtImg` / `NuxtPicture`.
  - `quality`, `format: ['webp']`, `screens` et presets existants conservés.
  - `npm test`, `npm run generate` et check SEO OK ; routes prerendered : 72.
  - Pages avec images vérifiées dans `.output/public` : home, portfolio, apps, Greenlight, pages apps ; aucune image locale manquante détectée.
  - `@nuxt/eslint` non migré dans cette étape ; aucun déplacement vers `app/`, aucun changement CSS/design/chunks.
- [x] **DEP-5** — Mettre à jour `@nuxt/eslint` vers 1.x si requis par Nuxt 4
  - Rapport : `docs/migration/nuxt4/reports/migration-nuxt4-dep-5-eslint.md`.
  - Version installée : `@nuxt/eslint@1.15.2`.
  - Seule dépendance directe cible modifiée : `@nuxt/eslint`.
  - Configuration migrée vers `eslint.config.mjs`; ancienne `.eslintrc.cjs` supprimée car incompatible avec l'export ESM de `@nuxt/eslint-config` v1.
  - Script `lint:js` simplifié en `eslint .`.
  - `npm test`, `npm run generate` et check SEO OK ; routes prerendered : 72.
  - `npm run lint:js` OK avec 0 erreur et 101 warnings historiques.
  - `npm run lint` reste bloqué par `lint:prettier` sur des formatages repo-wide historiques et `docs/migration/nuxt4/archive/audit-unused-depcheck.json` non JSON ; aucune correction globale lancée.
  - `eslint-config-prettier`, `eslint-plugin-vue` et `prettier` conservés.
- [x] **NUXT4-FINAL-AUDIT** — Auditer la stabilisation post DEP-1 à DEP-5 avant décision preview/merge
  - Rapport : `docs/migration/nuxt4/reports/migration-nuxt4-final-audit.md`.
  - Versions finales confirmées : Nuxt `4.4.2`, Content `3.13.0`, sitemap `8.0.15`, image `2.0.0`, ESLint `1.15.2`.
  - `npm test`, `npm run generate`, check SEO et `npm run lint:js` validés.
  - Routes prerendered : 72.
  - Décision : branche cohérente pour validation preview ; ne pas merger directement dans `dev` ou `master` sans preview/revue.
  - Déplacement vers `app/` non requis avant preview tant que Nuxt 4 fonctionne avec l'arborescence actuelle.
  - Warnings restants reportés en lots séparés : sitemap `zeroRuntime`, sourcemap, circular chunk, lint Prettier, npm audit.
- [x] **NUXT4-DEV-READINESS** — Décider les correctifs nécessaires avant merge vers `dev`
  - Rapport : `docs/migration/nuxt4/reports/migration-nuxt4-dev-readiness.md`.
  - Décision avant merge `dev` : faire uniquement un lot documentaire minimal pour aligner `AGENTS.md`, `CLAUDE.md` et éventuellement `README.md` avec la stack Nuxt 4 réelle.
  - À reporter après preview : lint Prettier global, `docs/migration/nuxt4/archive/audit-unused-depcheck.json`, audit sécurité npm, liens Markdown sans slash final, warnings ESLint historiques, warnings sourcemap/circular chunk, recherche UI, SCSS-6.
  - À ne pas faire dans la migration Nuxt 4 : déplacement `app/`, refactor CSS/design, `npm audit fix`, correction lint globale ou merge direct vers `master`.
- [x] **SCSS-6-DECISION** — Décider la sortie complète de SCSS avant merge `dev`
  - Rapport : `docs/migration/nuxt4/reports/migration-nuxt4-scss-6-decision.md`.
  - Décision : reporter `SCSS-6` après preview Nuxt 4.
  - La branche Nuxt 4 fonctionne avec SCSS ; `SCSS-4/5` ont déjà supprimé l'injection globale `additionalData` et validé l'éco-impact.
  - Aucun style, aucune dépendance, aucun fichier applicatif modifié.
- [x] **DOCS-STACK-NUXT4** — Mettre à jour la documentation stack avant merge `dev`
  - Rapport : `docs/migration/nuxt4/reports/migration-nuxt4-docs-stack.md`.
  - `AGENTS.md`, `CLAUDE.md` et `README.md` alignés sur Nuxt `4.4.2`, Content `3.13.0`, sitemap `8.0.15`, image `2.0.0` et ESLint Nuxt `1.15.2`.
  - SCSS documenté comme encore utilisé ; `SCSS-6` reste ouvert et reporté après preview.
  - Aucun code applicatif, aucune dépendance, aucun CSS/SCSS modifié.
- [x] **FIX-PREVIEW éco-conception** — Réparer les régressions visibles de `/eco-conception/` après Content v3
  - Rapport : `docs/migration/nuxt4/reports/migration-nuxt4-fix-eco-conception-page.md`.
  - Filtres par thème et recherche locale réparés via normalisation locale de `article.tag`.
  - FAQ réparée via lecture Content v3 `body.value`, avec compatibilité `body.children`.
  - `npm test`, `npm run generate`, check SEO et `npm run lint:js` validés ; routes prerendered : 72.
  - Vérification navigateur locale effectuée sur `/eco-conception/` : filtres `Tout`, `Éco-conception`, `WordPress`, `Performance`, recherches avec/sans résultat, FAQ visible.
  - Aucune dépendance modifiée ; aucun merge vers `dev` ou `master`.
- [x] **FIX-NETLIFY-RUNTIME éco-conception** — Réparer l'erreur runtime Netlify qui cassait l'hydratation de `/eco-conception/`
  - Rapport : `docs/migration/nuxt4/reports/migration-nuxt4-fix-netlify-runtime.md`.
  - Cause : découpage manuel `manualChunks` créant un cycle `vendor-nuxt -> vendor-libs -> vendor-nuxt` et une TDZ runtime dans le chunk Nuxt/router.
  - Correction : suppression du chunking manuel Rollup dans `nuxt.config.ts`, sans modifier les pages ni les dépendances.
  - `npm test`, `npm run generate`, check SEO dev et `npm run lint:js` validés.
  - Vérification statique locale `/eco-conception/` validée : filtres, recherche, FAQ et console sans erreur.
  - Aucun merge vers `dev` ou `master`.
- [x] **CLEANUP-ROOT** — Ranger les rapports et sorties d'audit avant merge `dev`
  - Rapport : `docs/migration/nuxt4/reports/migration-nuxt4-cleanup-root.md`.
  - Rapports utiles déplacés vers `docs/migration/nuxt4/reports/`.
  - Fichiers ambigus conservés dans `docs/migration/nuxt4/archive/`.
  - Sorties `.txt` brutes supprimées de la racine car résumées par les rapports Markdown.
  - `npm test`, `npm run generate`, check SEO et `npm run lint:js` validés ; routes prerendered : 72.
  - Aucun code applicatif, aucune dépendance, aucun CSS/SCSS modifié.
- [x] **DEP-6** — Supprimer `"#internal/nuxt/paths": "./nuxt.paths.mjs"` de `package.json` `imports` — override interne Nuxt 3 probablement incompatible avec Nuxt 4
  - Rapport : `docs/migration/nuxt4/reports/migration-nuxt4-dep-6.md`
  - Suppression réalisée avant `DEP-1`.
  - `npm test`, `npm run generate` et check SEO validés.
  - Aucune dépendance modifiée ; `package-lock.json` inchangé.

---

#### 3.2 — Restructuration répertoires (`app/` directory)

Nuxt 4 déplace `srcDir` vers `app/` par défaut. Fichiers à déplacer :

| Source (racine)                  | Destination (`app/`)          |
| -------------------------------- | ----------------------------- |
| `assets/`                        | `app/assets/`                 |
| `components/` (20 fichiers .vue) | `app/components/`             |
| `composables/useTags.ts`         | `app/composables/useTags.ts`  |
| `layouts/default.vue`            | `app/layouts/default.vue`     |
| `layouts/error.vue`              | `app/layouts/error.vue`       |
| `pages/` (14 fichiers .vue)      | `app/pages/`                  |
| `utils/seo-url.ts`               | `app/utils/seo-url.ts`        |
| `utils/portfolioItems.ts`        | `app/utils/portfolioItems.ts` |
| `app.vue`                        | `app/app.vue`                 |
| `error.vue`                      | `app/error.vue`               |

Fichiers qui **restent à la racine** (pas de déplacement) :

| Fichier/Dossier        | Raison                                              |
| ---------------------- | --------------------------------------------------- |
| `nuxt.config.ts`       | Config racine                                       |
| `content/`             | Répertoire content — résolu depuis rootDir          |
| `data/`                | Pas un dossier Nuxt standard — vérifier les imports |
| `public/`              | Résolu depuis rootDir                               |
| `server/` (3 fichiers) | `serverDir` reste `<rootDir>/server`                |
| `scripts/`             | Pas un dossier Nuxt                                 |

- [ ] **DIR-1** — Créer `app/` et déplacer les dossiers listés ci-dessus
- [ ] **DIR-2** — Mettre à jour les imports `~/` — ils pointeront vers `app/` automatiquement, mais vérifier :
  - `import { canonicalUrl, withTrailingSlash } from '~/utils/seo-url'` (dans 4 pages + composants)
  - `import { ref, watch } from 'vue'` (pas de changement — auto-import)
  - `@use "~/assets/css/vars/_colors.scss"` dans `vite.css.preprocessorOptions.scss.additionalData`
- [ ] **DIR-3** — Vérifier que `data/portfolio.ts` et `data/apps.ts` sont accessibles depuis `app/` (ajouter un alias ou déplacer dans `app/data/`)
- [ ] **DIR-4** — Vérifier que les server components `components/server/*.server.vue` fonctionnent depuis `app/components/server/`

---

#### 3.3 — 🔴 Breaking changes `@nuxt/content` v2 → v3

**C'est le changement le plus impactant de la migration.** L'API est entièrement refondue.

> CONTENT-PREP réalisé le 29 avril 2026 sur `chore/nuxt4-migration`.
> Rapports :
> - `docs/migration/nuxt4/reports/content-prep-query-map.md`
> - `docs/migration/nuxt4/reports/content-prep-v2-v3-mapping.md`
> - `docs/migration/nuxt4/reports/content-prep-content-config-plan.md`
> - `docs/migration/nuxt4/reports/content-prep-migration-order.md`
> - `docs/migration/nuxt4/reports/content-prep-tests-plan.md`
> Aucun changement de dépendance, aucune migration API, aucun déplacement vers `app/`.
>
> CONTENT-DOCS / DEP-2-PREP réalisé le 29 avril 2026 avec documentation officielle Nuxt Content v3.
> Rapport : `docs/migration/nuxt4/reports/migration-nuxt4-content-v3-docs-audit.md`
> Décisions préparatoires :
> - collection cible `articles` en `type: 'page'` ;
> - source cible `{ include: 'articles/**/*.md', prefix: '/eco-conception' }` ;
> - `queryContent()` → `queryCollection()` ;
> - `findSurround()` → `queryCollectionItemSurroundings()` ;
> - `serverQueryContent()` → `queryCollection(event, ...)` pour routes Nitro ;
> - `_path` → `path`.
> Aucun `npm install`, aucun `content.config.ts`, aucune migration API.

- [x] **CONTENT-DOCS** — Auditer la documentation officielle Nuxt Content v3 avant `DEP-2`
  - Rapport : `docs/migration/nuxt4/reports/migration-nuxt4-content-v3-docs-audit.md`
  - Documentation only, aucune validation runtime nécessaire.
  - Points critiques documentés : source de collection, schéma minimal, API server, recherche, RSS/JSON Feed, sitemap, TOC, trailing slashes.

##### 3.3.1 — `queryContent()` → `queryCollection()`

| Fichier                           | Lignes  | Code actuel                                                               | Migration                                                                        |
| --------------------------------- | ------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `pages/index.vue`                 | 430-436 | `queryContent('articles').only([...]).sort({ date: -1 }).limit(2).find()` | `queryCollection('articles').select([...]).order('date', 'DESC').limit(2).all()` |
| `pages/eco-conception/index.vue`  | 651-654 | `queryContent('articles').only([...]).sort({ date: -1 }).find()`          | `queryCollection('articles').select([...]).order('date', 'DESC').all()`          |
| `pages/eco-conception/index.vue`  | 659     | `queryContent('articles', 'faq-eco-conception').findOne()`                | `queryCollection('articles').where('stem', '=', 'faq-eco-conception').first()`   |
| `pages/eco-conception/[slug].vue` | 140     | `queryContent('articles', route.params.slug).findOne()`                   | `queryCollection('articles').where('stem', '=', slug).first()`                   |
| `components/HomeEcoArticles.vue`  | 50-54   | `queryContent('articles').only([...]).sort({ date: -1 }).limit(2).find()` | Idem index.vue                                                                   |

- [x] **CONTENT-1** — Migrer les 5 appels `queryContent()` → `queryCollection()` dans les fichiers ci-dessus
  - DEP-2-C : `pages/index.vue`, `pages/eco-conception/index.vue`, `pages/eco-conception/[slug].vue` et `components/HomeEcoArticles.vue` migrés.
  - DEP-2-D : exception restante `components/AppSearchInput.vue` migrée.
  - DEP-2-E : audit final confirme l'absence de `queryContent()` applicatif.

##### 3.3.2 — `findSurround()` → `queryCollectionItemSurroundings()`

| Fichier                           | Lignes  | Code actuel                                                                                             |
| --------------------------------- | ------- | ------------------------------------------------------------------------------------------------------- |
| `pages/eco-conception/[slug].vue` | 149-152 | `queryContent('articles').only(['title', '_path']).sort({ date: 1 }).findSurround(article.value._path)` |

- [x] **CONTENT-2** — Migrer `findSurround()` → `queryCollectionItemSurroundings()` avec la nouvelle syntaxe
  - DEP-2-C : page article migrée et `ArticleNavigation` adapté à `path`.

##### 3.3.3 — `serverQueryContent()` supprimé

| Fichier                      | Lignes | Code actuel                                                                                                                      |
| ---------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `server/routes/rss.xml.ts`   | 1, 7   | `import { serverQueryContent } from '#content/server'` + `serverQueryContent(event, 'articles').sort({ $numeric: true }).find()` |
| `server/routes/feed.json.ts` | 1, 6   | Idem                                                                                                                             |
| `nuxt.config.ts`             | 265    | `const { serverQueryContent } = await import('#content/server')` dans `sitemap.routes`                                           |

- [x] **CONTENT-3** — Réécrire `rss.xml.ts` sans `serverQueryContent` — utiliser l'API server de Content v3
  - DEP-2-A : blocage generate confirme sur `#content/server`.
  - DEP-2-B : migré vers `queryCollection(event, 'articles')`, `_path` remplacé par `path`, `npm test` OK.
- [x] **CONTENT-4** — Réécrire `feed.json.ts` sans `serverQueryContent`
  - DEP-2-A : blocage generate confirme sur `#content/server`.
  - DEP-2-B : migré vers `queryCollection(event, 'articles')`, `_path` remplacé par `path`, `npm test` OK.
- [x] **CONTENT-5** — Réécrire `sitemap.routes` dans `nuxt.config.ts` sans `serverQueryContent` — ⚠️ vérifier si `@nuxtjs/sitemap` 7.x génère les routes automatiquement depuis Content v3
  - DEP-2-A : blocage generate confirme aussi dans `@nuxtjs/sitemap` v6, qui importe encore `#content/server`.
  - DEP-2-B : import `#content/server` supprimé du projet et routes articles remplacées par `urls: getArticleSitemapRoutes`; blocage restant dans le handler interne `@nuxtjs/sitemap` v6, à traiter en `DEP-3`.
  - DEP-3 : `@nuxtjs/sitemap@8.0.15` installé, handler Content v3 disponible, `/sitemap.xml` généré avec 13 URLs articles + archive.

##### 3.3.4 — `.where()` query syntax refondu

| Fichier                         | Lignes | Code actuel                                                                                       |
| ------------------------------- | ------ | ------------------------------------------------------------------------------------------------- |
| `components/AppSearchInput.vue` | 33-41  | `.where({ $or: [{ title: { $contains: newQuery } }, { description: { $contains: newQuery } }] })` |

Content v3 utilise une syntaxe SQL-like : `.where('title', 'LIKE', '%query%')`. L'opérateur `$or` n'existe plus.

- [x] **CONTENT-6** — Réécrire le search dans `AppSearchInput.vue` avec la nouvelle syntaxe `.where()` ou utiliser `queryCollectionSearchSections()` (remplaçant de `searchContent()`)
  - DEP-2-D : migré vers `queryCollection('articles')`, `.orWhere(...)`, `LIKE`, `.limit(6)` et `.all()`.
  - `queryCollectionSearchSections()` non utilisé : l'ancien comportement cherchait uniquement dans `title` et `description`.
  - Garde-fou Content mis à jour : plus aucune exception applicative `queryContent()`.
  - Note : le composant n'est pas monté dans les pages générées actuelles ; vérification UX interactive à traiter seulement si une page hôte est réintroduite.

##### 3.3.5 — `._path` → `.path` (underscore prefix supprimé)

Toutes les propriétés internes préfixées `_` sont renommées en Content v3.

| Fichier                           | Occurrences                                       |
| --------------------------------- | ------------------------------------------------- |
| `pages/eco-conception/[slug].vue` | `article.value._path` (lignes 147, 152, 158)      |
| `pages/eco-conception/index.vue`  | `article._path` dans le template                  |
| `pages/index.vue`                 | `article._path` dans le template                  |
| `components/HomeEcoArticles.vue`  | `article._path` dans le template                  |
| `server/routes/rss.xml.ts`        | `article._path` (ligne 37)                        |
| `server/routes/feed.json.ts`      | `article._path` (ligne 29)                        |
| `nuxt.config.ts`                  | `article._path` dans `sitemap.routes` (ligne 267) |

- [x] **CONTENT-7** — Remplacer `._path` par `.path` dans tous les fichiers listés (7 fichiers, ~12 occurrences)
  - DEP-2-C : usages applicatifs listés remplacés ; les seules occurrences `_path` restantes sont des garde-fous ou historiques documentés dans les scripts.
  - DEP-2-E : audit final confirme l'absence de `_path` dans le code applicatif, hors motif de garde-fou.

##### 3.3.6 — `<ContentRenderer>` — API modifiée

| Fichier                           | Lignes  | Code actuel                                           |
| --------------------------------- | ------- | ----------------------------------------------------- |
| `pages/eco-conception/[slug].vue` | 106-111 | `<ContentRenderer v-if="article" :value="article" />` |

- [x] **CONTENT-8** — Vérifier que `<ContentRenderer :value="article" />` fonctionne toujours avec Content v3 — ⚠️ à tester manuellement, le composant est conservé mais son API peut avoir changé
  - DEP-2-C : article généré vérifié, corps Markdown rendu et tests post-génération OK.

##### 3.3.7 — Configuration `content:` dans `nuxt.config.ts`

```ts
// Configuration actuelle (v2)
content: {
  highlight: { theme: 'dark-plus', preload: [...] },
  markdown: { toc: { depth: 3 }, remarkPlugins: [], rehypePlugins: [] }
}
```

Content v3 utilise un fichier `content.config.ts` séparé pour définir les collections et les sources.

- [x] **CONTENT-9** — Créer `content.config.ts` avec la définition de la collection `articles`
  - Rapport : `docs/migration/nuxt4/reports/migration-nuxt4-dep-2-a.md`
  - Collection minimale `articles` créée en `type: 'page'`.
  - Source : `{ include: 'articles/**/*.md', prefix: '/eco-conception' }`.
  - Schéma custom reporté pour ne pas ajouter de dépendance directe hors `@nuxt/content`.
  - DEP-2-C : schéma enrichi ajouté avec `zod@3.25.76` en dépendance directe.
- [x] **CONTENT-10** — Migrer la config `highlight` et `markdown` vers le nouveau format Content v3
  - Rapport : `docs/migration/nuxt4/reports/migration-nuxt4-dep-2-a.md`
  - Config déplacée vers `content.build.markdown`.
  - `highlight.preload` remplacé par `highlight.langs`.
  - `content.experimental.sqliteConnector: 'native'` ajouté pour éviter `better-sqlite3`.
- [x] **CONTENT-11** — Vérifier que `article.body.toc.links` (utilisé dans `[slug].vue` pour le sommaire) est toujours disponible en v3
  - DEP-2-C : sommaire `Chapitres` vérifié dans la page article générée.

##### 3.3.8 — Composants supprimés

`ContentDoc`, `ContentList`, `ContentNavigation`, `ContentQuery` sont supprimés en v3. **Aucun n'est utilisé dans le projet** → pas d'impact.

##### 3.3.9 — Ordre de tri par défaut

Content v3 trie alphabétiquement par défaut (au lieu de numériquement). Vérifier que les `.sort({ date: -1 })` explicites suffisent.

- [x] **CONTENT-12** — Vérifier l'ordre de tri des articles après migration (les sorts explicites devraient suffire)
  - DEP-2-C : requêtes migrées en `.order('date', 'DESC')`; RSS/JSON Feed vérifiés avec les articles les plus récents en tête.

---

#### 3.4 — Breaking changes `nuxt.config.ts`

> CONFIG-AUDIT Nuxt 4 réalisé le 29 avril 2026 sur `chore/nuxt4-migration`.
> Rapport : `docs/migration/nuxt4/reports/migration-nuxt4-config-audit.md`
> Changement appliqué : `experimental.inlineSSRStyles` → `features.inlineStyles`.
> Options auditées et conservées sans changement : `experimental.defaults.nuxtLink.prefetch`, `router.options`, `routeRules.noScripts`, hooks sitemap.
> Aucun changement de dépendance, aucune migration Content, aucun déplacement vers `app/`.

##### 3.4.1 — `experimental.inlineSSRStyles` → `features.inlineStyles`

```ts
// Actuel (nuxt.config.ts:309)
experimental: {
  inlineSSRStyles: false,
}

// Nuxt 4
features: {
  inlineStyles: false, // ou true — comportement changé : seul le CSS Vue est inline, le global reste en fichier séparé
}
```

- [x] **CONFIG-1** — Migrer `experimental.inlineSSRStyles` → `features.inlineStyles` et réévaluer la valeur (`false` était choisi pour meilleur cache — le comportement par défaut Nuxt 4 est déjà plus granulaire)
  - Rapport : `docs/migration/nuxt4/reports/migration-nuxt4-config-audit.md`
  - `features.inlineStyles: false` appliqué.
  - `npm test`, `npm run generate` et check SEO validés.

##### 3.4.2 — `experimental.defaults.nuxtLink.prefetch`

```ts
// Actuel (nuxt.config.ts:311-313)
experimental: {
  defaults: {
    nuxtLink: {
      prefetch: false
    }
  }
}
```

- [ ] **CONFIG-2** — Vérifier si `experimental.defaults.nuxtLink.prefetch` est toujours au même chemin en Nuxt 4 — ⚠️ à vérifier manuellement
  - CONFIG-AUDIT : option conservée, car le schéma local Nuxt 4 la référence encore et `npm run generate` ne signale aucun warning.

##### 3.4.3 — `router.options.prefetchLinks` et `linkPrefetchedClass`

```ts
// Actuel (nuxt.config.ts:184-189)
router: {
  options: {
    linkPrefetchedClass: 'nuxt-link-prefetched',
    prefetchLinks: false,
  }
}
```

- [ ] **CONFIG-3** — Vérifier que `router.options` est inchangé en Nuxt 4 — ⚠️ à vérifier manuellement
  - CONFIG-AUDIT : `prefetchLinks` et `linkPrefetchedClass` conservés, aucun warning observé.

##### 3.4.4 — `routeRules.noScripts`

```ts
// Actuel (nuxt.config.ts:117-118)
routeRules: {
  '/': { prerender: true, noScripts: true },
  '/mentions-legales/': { prerender: true, noScripts: true },
}
```

- [ ] **CONFIG-4** — Vérifier que `noScripts: true` est toujours supporté en Nuxt 4 — ⚠️ à vérifier manuellement
  - CONFIG-AUDIT : `routeRules.noScripts` conservé, validation `generate` et check SEO OK.

##### 3.4.5 — Nitro hooks sitemap

```ts
// Actuel (nuxt.config.ts:285-297)
nitro: {
  hooks: {
    'sitemap:resolved': (ctx) => { ... },
    'sitemap:output': (ctx) => { ... },
  }
}
```

Ces hooks viennent de `@nuxtjs/sitemap`, pas de Nitro. Leur compatibilité dépend de la version de `@nuxtjs/sitemap` utilisée avec Nuxt 4.

- [ ] **CONFIG-5** — Tester les hooks `sitemap:resolved` et `sitemap:output` après mise à jour de `@nuxtjs/sitemap`
  - CONFIG-AUDIT : hooks présents dans `@nuxtjs/sitemap` 6.1.5 et generate OK ; à revalider pendant `DEP-3`.

##### 3.4.6 — Flags expérimentaux supprimés

Ces flags n'existent plus en Nuxt 4 (valeur fixe) — les supprimer de la config si présents :

- `experimental.treeshakeClientOnly` → toujours `true`
- `experimental.configSchema` → toujours `true`
- `experimental.polyfillVueUseHead` → toujours `false`
- `experimental.respectNoSSRHeader` → toujours `false`

- [ ] **CONFIG-6** — Supprimer les flags expérimentaux obsolètes (aucun n'est actuellement défini → pas d'action, mais vérifier après `compatibilityVersion: 4`)
  - CONFIG-AUDIT : aucun des flags listés n'est présent dans `nuxt.config.ts`.

##### 3.4.7 — `vite.css.preprocessorOptions.scss`

```ts
// Actuel
scss: {
  additionalData: '@use "~/assets/css/vars/_colors.scss" as *; ...',
  api: 'modern-compiler',
}
```

- [ ] **CONFIG-7** — Vérifier que `additionalData` avec `~/` résout correctement vers `app/assets/` après restructuration — ⚠️ critique car utilisé globalement

---

#### 3.5 — Breaking changes composants, pages et composables

##### 3.5.1 — `useAsyncData` : `data` default `undefined` au lieu de `null`

6 appels `useAsyncData` dans le projet. Vérifier les guards `if (!data.value)` vs `if (data.value === null)`.

| Fichier                               | Pattern actuel                              | Impact |
| ------------------------------------- | ------------------------------------------- | ------ |
| `pages/eco-conception/[slug].vue:138` | `article.value?._path` (optional chaining)  | 🟢 OK  |
| `pages/eco-conception/[slug].vue:144` | `surroundArticles.value?.[0]`               | 🟢 OK  |
| `pages/eco-conception/index.vue:648`  | `articles.value` dans template avec `v-for` | 🟢 OK  |
| `pages/eco-conception/index.vue:657`  | `faqArticle.value` dans template            | 🟢 OK  |
| `pages/index.vue:430`                 | `articles` dans template                    | 🟢 OK  |
| `components/HomeEcoArticles.vue:49`   | `articles` dans template                    | 🟢 OK  |

- [ ] **ASYNC-1** — Valider que tous les guards utilisent optional chaining (`?.`) et non des comparaisons strictes à `null`

##### 3.5.2 — `useAsyncData` : shallow reactivity par défaut

`data` est maintenant un `shallowRef` au lieu d'un `ref`. Les mutations de propriétés ne déclenchent plus la réactivité.

- [ ] **ASYNC-2** — Vérifier qu'aucun code ne mute directement les propriétés de `data.value` (ex: `article.value.title = '...'`). Si c'est le cas, ajouter `{ deep: true }`.

##### 3.5.3 — Unhead v2 : propriétés supprimées

Propriétés supprimées dans `useHead()` : `vmid`, `hid`, `children`, `body`.

- [ ] **HEAD-1** — Grep `vmid|hid|children|body` dans les appels `useHead()` — **aucun trouvé actuellement** → 🟢 pas d'action

##### 3.5.4 — Unhead v2 : tri par Capo.js

Les tags `<head>` sont triés automatiquement par Capo.js pour optimiser le chargement. Peut changer l'ordre des `<meta>` et `<link>`.

- [ ] **HEAD-2** — Vérifier visuellement le `<head>` après migration — impact probable sur l'ordre des meta OG/Twitter mais pas fonctionnel

##### 3.5.5 — Noms de composants normalisés

`SomeFolder/MyComponent.vue` a maintenant le nom `SomeFolderMyComponent`. Impact sur `<KeepAlive>` filters.

- [ ] **COMP-1** — Vérifier qu'aucun `<KeepAlive>` n'utilise des noms de composants hardcodés — **aucun `KeepAlive` trouvé** → 🟢 pas d'action

##### 3.5.6 — Import inutilisé dans `rss.xml.ts`

```ts
// server/routes/rss.xml.ts:2
import { SitemapStream, streamToPromise } from 'sitemap'
```

Cet import est **inutilisé** (le RSS est généré manuellement en string). Le package `sitemap` n'est pas dans `package.json`.

- [x] **CLEAN-1** — Supprimer l'import mort `import { SitemapStream, streamToPromise } from 'sitemap'` dans `server/routes/rss.xml.ts`

##### 3.5.7 — `useTags` composable (état partagé)

```ts
// composables/useTags.ts — utilise useState() (Nuxt natif)
export const useTags = () => {
  const tag = useState<string>('currentTag', () => '')
  ...
}
```

`useState()` est compatible Nuxt 4. Pas de Pinia dans le projet.

- [ ] **STATE-1** — Vérifier que `useState()` fonctionne identiquement après migration → 🟢 probable pas d'action

---

#### 3.6 — TypeScript

- [ ] **TS-1** — Nuxt 4 active `noUncheckedIndexedAccess: true` — vérifier si des erreurs TS apparaissent (projet utilise `strict: false` et `typeCheck: false` → impact limité)
- [ ] **TS-2** — Nuxt 4 génère des tsconfig séparés (`.nuxt/tsconfig.app.json`, `.nuxt/tsconfig.server.json`, etc.) — mettre à jour `tsconfig.json` avec les références

---

#### 3.7 — Validation post-migration

- [ ] **VALID-1** — `npm run generate` sans erreur ni warning
- [ ] **VALID-2** — `node scripts/seo-check.mjs` — toutes les vérifications SEO passent
- [ ] **VALID-3** — Vérifier manuellement les 5 pages clés dans le navigateur : `/`, `/eco-conception/`, `/eco-conception/[un-article]/`, `/portfolio/`, `/services/`
- [ ] **VALID-4** — PSI mobile score ≥ 99
- [ ] **VALID-5** — Sitemap XML valide (`/sitemap.xml`) — toutes les URLs avec trailing slash
- [ ] **VALID-6** — RSS (`/rss.xml`) et JSON Feed (`/feed.json`) fonctionnels
- [ ] **VALID-7** — EcoIndex ≥ A
- [ ] **VALID-8** — JSON-LD valide sur toutes les pages (tester avec Google Rich Results Test)
- [ ] **VALID-9** — Robots.txt correct (`/robots.txt`)
- [ ] **VALID-10** — Recherche articles (`AppSearchInput`) fonctionnelle
- [ ] **VALID-11** — Navigation prev/next articles fonctionnelle
- [ ] **VALID-12** — Filtres tags sur `/eco-conception/` fonctionnels
- [ ] **VALID-13** — Merger sur `dev` puis `master` après validation complète

---

#### 3.8 — Warnings supplémentaires découverts (27 avril 2026)

- [ ] **NEW-1** — Configuration npm utilisateur `python` inconnue
  - Impact : 🟢
  - Fichier : configuration npm utilisateur hors dépôt
  - Référence : `docs/migration/nuxt4/reports/migration-nuxt4-warnings.md`
  - Message exact :
    ```text
    npm warn Unknown user config "python". This will stop working in the next major version of npm. See `npm help npmrc` for supported config options.
    ```
  - Note : warning npm émis avant les scripts, sans blocage du build statique.

- [ ] **NEW-2** — Configuration npm environnement `python` inconnue
  - Impact : 🟢
  - Fichier : configuration npm environnement hors dépôt
  - Référence : `docs/migration/nuxt4/reports/migration-nuxt4-warnings.md`
  - Message exact :
    ```text
    npm warn Unknown env config "python". This will stop working in the next major version of npm. See `npm help npmrc` for supported config options.
    ```
  - Note : warning npm émis pendant la chaîne `pregenerate`, sans blocage du build statique.

---

### 🔴 Critique — bugs à corriger immédiatement

- [x] **C1** — ~~Meta description `[object Object]` sur `/eco-conception/comment-reduire-le-poids-d-un-site-web/`~~ — `seo.description` YAML quoté ✓
- [x] **C2** — ~~Meta description `L` sur `/mentions-legales/`~~ — `useSeoMeta({ description })` ajouté ✓
- [x] **C3** — ~~Descriptions tronquées sur `/apps/`, `/portfolio/`, `/eco-conception/audit-eco-conception/`, `/contact/`~~ — apostrophes supprimées des descriptions ✓
- [x] **C4** — ~~Canonical homepage sans trailing slash~~ — faux positif confirmé : `canonicalUrl()` déjà correct (`utils/seo-url.ts:33`) ✓
- [x] **C5** — ~~`/404/` répond HTTP 200~~ — redirect Netlify `status = 404` ajouté dans `netlify.toml` ✓
- [x] **C6** — ~~`/404/` dans le sitemap~~ — exclue via `sitemap.exclude` dans `nuxt.config.ts` ✓
- [x] **C7** — ~~`pages/portfolio.vue` utilise `useHead()`~~ — migré vers `useSeoMeta()` avec twitter:card, twitter:title, twitter:description ✓
- [x] **C8** — ~~Chapô affiché en JSON brut sur `theme-wordpress` et `typographie`~~ — `:` non quoté dans le frontmatter YAML causait le parse en objet — frontmatters corrigés ✓
- [x] **C9** — ~~Erreur `#app-manifest` en mode dev~~ — artefact de cache `.nuxt` local — résolu par `rm -rf .nuxt && npm run dev` — rien à committer ✓

---

### 🟠 Important — corriger dans la semaine

#### SEO technique

- [x] **I1** — ~~Entités HTML `&amp;` et `&#8209;` dans le H1 portfolio~~ — remplacés par caractères Unicode directs dans `pages/portfolio.vue` ✓
- [x] **I2** — ~~Pattern titles articles `BeAbot - Titre`~~ — `titleTemplate: '%s | BeAbot'` dans `[slug].vue` ; `| BeAbot` retiré du frontmatter `comment-reduire...` ✓
- [x] **I3** — ~~Title `/images-eco-conception/` trop long (78 car.)~~ — seo.title raccourci à 59 car. → 68 avec suffixe ✓
- [x] **I4** — ~~JSON-LD `@type: ?`~~ — faux positif de l'audit Python, confirmé ✓ par Claude Code (JSON-LD complet et valide sur toutes les pages)
- [x] **I5** — ~~`og:title` de `/mentions-legales/` désynchronisé~~ — résolu par C2 (`ogTitle: 'Mentions légales — BeAbot'` dans `useSeoMeta()`) ✓
- [x] **I6** — ~~Descriptions >160 car. sur 5 articles~~ — reformulées à ≤155 car. dans 4 frontmatters ✓
- [x] **I7** — ~~JSON-LD `Article` manquant~~ — `BlogPosting` déjà présent avec `author.url`, `datePublished`, `dateModified` ; `author.url` ajouté ✓
- [x] **I8** — ~~`og:image` absent sur `/portfolio/`~~ — `ogImage` ajouté dans `useSeoMeta()` ✓
- [x] **I9** — ~~`useHead` statique à setup time~~ — remplacé par `useHead(computed(() => ...))` pour réactivité client ✓

#### Repositionnement freelance

- [x] **A1** — ~~"freelance" absent du H1~~ — H1 : "Développeur web freelance spécialisé en éco-conception" ✓
- [x] **A2** — ~~Zone géo absente du hero~~ — `Lille · Hauts-de-France · Remote` sous le subtitle ✓
- [x] **A3** — ~~Badge disponibilité absent~~ — pastille verte animée "Disponible pour missions" avant le H1 ✓
- [x] **A4** — ~~`<title>` homepage générique~~ — `Benoît Abot — Développeur web freelance WordPress & Nuxt | Lille` ✓
- [x] **A5** — ~~Contact sans zone géo~~ — `Basé à Lille · Disponible en remote et en présentiel (Hauts-de-France)` ✓
- [x] **A6** — ~~Footer sans mention géo~~ — `Benoît Abot · Développeur web freelance · Lille` dans le footer ✓
- [x] **B6** — ~~JSON-LD `Person` sans localisation~~ — `workLocation`, `areaServed`, `availableChannel` ajoutés ✓

---

### 🟡 Mineur / Backlog

#### SEO technique

- [x] **M1** — ~~`twitter:card` absente sur `/mentions-legales/`~~ — `twitterCard`, `twitterTitle`, `twitterImage` ajoutés dans `useSeoMeta()` ✓
- [x] **M2** — ~~`og:image` générique sur les articles~~ — champ `seo.ogImage` ajouté dans le frontmatter des 3 articles les plus récents (`typographie`, `wordpress`, `theme-wordpress`) ✓
- [x] **M3** — ~~H1 trop courts sur les pages apps~~ — DuoSpend (68 car.) ✓, Meeting Mode (68 car.) ✓, `/apps/` index (51 car.) ✓
- [x] **M4** — ~~JSON-LD `Person` / `WebSite` manquant homepage~~ — confirmé ✓ présent par Claude Code
- [x] **M5** — ~~JSON-LD `ContactPage` manquant sur `/contact/`~~ — schéma `ContactPage` ajouté dans `useHead()` ✓
- [x] **M6** — ~~Titles trop courts sur 2 articles~~ — `seo.title` enrichis : "...polices système vs web fonts" et "...thèmes sobres et performants" ✓
- [x] **M7** — ~~Convention images Markdown non documentée~~ — section ajoutée dans `AGENTS.md` ✓
- [x] **M8** — ~~`og:image:width` / `og:image:height` absents~~ — `ogImageWidth: 1200, ogImageHeight: 630` ajoutés sur 8 fichiers ✓
- [x] **M9** — ~~Meta description homepage à 142 car.~~ — 154 car. avec dimension freelance + géo ✓

#### Contenu & conversion freelance

- [x] **B1** — Créer une page `/services/` avec types de missions, zones, tarifs indicatifs
<!-- - [ ] **B2** — Portfolio : ajouter la localisation des clients là où applicable
- [ ] **B3** — Portfolio : réduire la visibilité des apps iOS (section séparée ou masquée par défaut) -->
- [x] **B4** — Ajouter CTA freelance en bas de `/eco-conception/`
- [x] **B5** — Ajouter encart "Faire faire son site sur Greenlight" sur `/greenlight/`

#### Articles à écrire (SEO longue traîne local)

- [x] Mettre à jour les 4 articles de 2021-2022 (`updatedAt: 2026-04-27` + note éditoriale + CTA freelance en conclusion) + afficher date modif dans cartes /eco-conception/ ✓
- [x] Article : "Développeur WordPress freelance à Lille : comment choisir ?" → `/eco-conception/wordpress-freelance-lille/`
- [x] Article : "Refonte de site éco-conçu : méthode et budget" → `/eco-conception/refonte-site-eco-concu/`
- [x] Article : "Audit de site web : ce que j'analyse et ce que ça coûte" → `/eco-conception/audit-site-web/`
- [x] Article : "WordPress vs Nuxt pour un site vitrine éco-conçu" → `/eco-conception/wordpress-vs-nuxt/`

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

### Apps — internationalisation légère et support App Store

#### Décisions

- [x] Ne pas utiliser `@nuxtjs/i18n`.
- [x] Créer des routes explicites sous `/en/`.
- [x] Créer `/en/contact/`.
- [x] Conserver `/apps/{slug}/#support` pour les pages françaises existantes.
- [x] Créer `/en/apps/{slug}/#support` pour les pages anglaises.
- [x] Utiliser une politique de confidentialité locale unique par page app standard.
- [x] Conserver les onglets de confidentialité multilingues uniquement pour Siturem.
- [x] Aligner les sections support avec la FAQ et le bouton contact.

#### Implémentation

- [x] Auditer `pages/apps`, `components/apps` et `data/apps.ts`.
- [x] Identifier les slugs réels des apps.
- [x] Ajouter les contenus anglais dans la structure de données existante.
- [x] Créer `/en/apps/`.
- [x] Créer les pages `/en/apps/{slug}/`.
- [x] Créer `/en/contact/`.
- [x] Vérifier ou ajouter `id="support"` sur toutes les pages apps FR.
- [x] Ajouter `id="support"` sur toutes les pages apps EN.
- [x] Harmoniser les boutons contact FR avec `/contact/?app={slug}&type=support`.
- [x] Harmoniser les boutons contact EN avec `/en/contact/?app={slug}&type=support`.
- [x] Remplacer les onglets de confidentialité par un affichage local unique pour les apps standard.
- [x] Conserver les onglets FR/EN/ES/DE pour Siturem.
- [x] Ajouter canonical et hreflang FR/EN/x-default.
- [x] Ajouter ou adapter le JSON-LD `SoftwareApplication`.
- [x] Vérifier le sitemap.

#### Validation

- [x] `npm test`
- [x] `npm run generate`
- [x] `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs`
- [x] Vérifier les redirections `/en` et `/en/` vers `/en/apps/`.
- [x] Vérifier `/apps/{slug}/#support`.
- [x] Vérifier `/en/apps/{slug}/#support`.
- [x] Vérifier `/apps/{slug}/#privacy`.
- [x] Vérifier `/en/apps/{slug}/#privacy`.
- [x] Vérifier `/contact/?app={slug}&type=support`.
- [x] Vérifier `/en/contact/?app={slug}&type=support`.

#### Validation effectuée

- [x] `npm test`
- [x] `npm run generate`
- [x] `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs`

#### Notes

- Siturem conserve les onglets FR/EN/ES/DE sur les pages FR et EN.
- Les autres apps affichent désormais une politique locale unique (FR sur `/apps/*`, EN sur `/en/apps/*`).
- Correctif bloquant: redirections Netlify `/en` et `/en/` ajoutées vers `/en/apps/` pour éviter l'index de dossier.
- Correctif bloquant: JSON-LD EN `SoftwareApplication.author.url` aligné sur `https://beabot.fr/` (pas `/en/`).
- Correctif bloquant: pages contact FR/EN sans réécriture d'URL au chargement; la navigation support utilise des liens `href` standards.
- Correctif contenu EN: labels galerie Focus One vérifiés/corrigés (`alt`, `figcaption`, `aria-label`) et harmonisés côté pages EN.
- Ajustement UX: sur `/apps/` et `/en/apps/`, les visuels des cartes apps sont cliquables et pointent vers la page app correspondante.
- Ajustement contenu EN: captions galerie traduits en anglais pour `/en/apps/meeting-mode/`, `/en/apps/duo-spend/` et `/en/apps/siturem/`.
- Ajustement UX: suppression du second lien support sous le formulaire final sur les pages apps FR/EN (section `#support` conservée).
- Ajustement i18n léger: footer avec libellés EN sur `/en/*`, en conservant le footer FR inchangé ailleurs.

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

MétriqueValeurStatut**Framework**Nuxt 4.4✅**URLs**Trailing slash normalisé✅**Portfolio**Refonte complète✅**Homepage**Améliorations mobile UX✅**Structured Data**Toutes pages principales✅**EcoIndex**A✅**Lighthouse**99 / 96 / 100 / 100✅

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
