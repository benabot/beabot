## Phase 17 — SEO & Repositionnement freelance (26 avril 2026)

> Basé sur `audit-seo-2026-04-26.md` + `audit-contenu-positionnement-2026-04-26.md`  
> Branche : `fix/seo-meta` pour les corrections techniques, `content/repositionnement-freelance` pour le contenu

---

## Backlog — Migration Nuxt 4

> Prérequis à compléter dans l'ordre avant d'ouvrir une branche de migration.

### Étape 0 — Tests & couverture
- [ ] Lancer la suite de tests existante et s'assurer qu'elle passe à 100% sur `dev` avant toute migration
- [ ] Documenter les tests manquants critiques (pages, composants, utils SEO) et les ajouter si nécessaire

### Étape 1 — Performance (PageSpeed Insights : 99 → 100 mobile)
> Source : audit PSI du 27 avril 2026 (screenshot)
- [ ] **PSI-1** — Éliminer les 3 CSS render-blocking (`/_nuxt/entry.css`, `/_nuxt/index.css`, `/_nuxt/default.css`) — économie estimée : 270 ms LCP/FCP
  - Option A : `inlineSSRStyles: true` (déjà désactivé intentionnellement — réévaluer)
  - Option B : charger les CSS non-critiques en `<link rel="preload">` + swap
  - Option C : CSS critique inline via plugin Vite Extract Critical
- [ ] **PSI-2** — Réduire la chaîne critique maximale (444 ms sur `entry.css`) — envisager un split CSS plus fin ou un lazy-load des styles de pages non-homepage
- [ ] **PSI-3** — Valider le score PSI mobile = 100 après corrections

### Étape 2 — Audit fichiers inutiles
- [ ] Lister et supprimer les fichiers orphelins : composants non importés, images inutilisées dans `/public/img/`, scripts de la racine sans appelant
- [ ] Vérifier que `getSiteMeta.js` (vestige Nuxt 2, marqué `deprecated`) n'est plus importé dans aucun composant — le supprimer
- [ ] Auditer les dépendances `package.json` non utilisées (`npm-check` ou équivalent)
- [ ] Vérifier les routes générées (81 actuellement) : confirmer qu'aucune page fantôme n'est incluse dans le build

### Étape 2b — Refactor SCSS → CSS moderne

> **Contexte :** le projet utilise `sass` avec l'API `modern-compiler` (déjà configurée dans `vite.css.preprocessorOptions`). Les warnings de dépréciation `if-function` dans `assets/css/vars/_typo.scss` ont été **corrigés le 27 avril 2026** (remplacement des `if()` Sass par `@if`/`@else`). Le refactor complet est une étape séparée.

**Objectif :** migrer les variables SCSS vers des custom properties CSS (`--var`) là où c'est pertinent, pour bénéficier de la cascade native, réduire la dépendance à SCSS et préparer la migration Nuxt 4.

- [ ] **SCSS-1** — Inventaire : lister toutes les variables SCSS (`$var`) utilisées dans les composants scoped vs les fichiers globaux (`vars/`, `main.scss`)
- [ ] **SCSS-2** — Migrer les variables de couleurs (`$vert`, `$gris1`…) de `vars/_colors.scss` vers des custom properties CSS dans `:root` — garder les aliases SCSS pour la période de transition
- [ ] **SCSS-3** — Migrer les variables de typographie (`$breakpoint-tablet`, tailles fluides) vers des custom properties ou des `@layer` CSS
- [ ] **SCSS-4** — Remplacer les `@use` globaux injectés via `vite.css.preprocessorOptions.additionalData` par des imports explicites dans chaque fichier qui en a besoin (meilleure traçabilité, compatible Nuxt 4)
- [ ] **SCSS-5** — Valider l'éco-impact : vérifier que le CSS généré n'a pas grossi (poids `/_nuxt/*.css` avant/après)
- [ ] **SCSS-6** — Supprimer SCSS entièrement si la migration est complète et que tous les composants utilisent CSS natif + custom properties

### Étape 3 — Migration Nuxt 4
- [ ] Lire le guide de migration officiel Nuxt 4 et lister les breaking changes impactant le projet
- [ ] Créer la branche `chore/nuxt4-migration` depuis `dev` à jour
- [ ] Mettre à jour `nuxt`, `@nuxt/content`, `@nuxt/image`, `@nuxtjs/sitemap` vers les versions compatibles Nuxt 4
- [ ] Corriger les breaking changes identifiés (Composition API, `useHead`, routeur, Content v3 si applicable)
- [ ] Valider `npm run generate` + suite de tests + PSI après migration
- [ ] Merger sur `dev` puis `master` après validation complète

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
