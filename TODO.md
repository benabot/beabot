# ✅ TODO - BeAbot Nuxt 3 Optimisation Éco-conception

> **Objectif** : Améliorer les performances éco-conception et préparer la migration vers beabot.fr

**Projet** : BeAbot - Blog éco-conception web
**Date création** : 15 décembre 2025
**Dernière MAJ** : 21 décembre 2025
**Branche active** : `dev` (Nuxt 3)
**Sites** :

- 🟢 **Production** (Nuxt 3, master) : <https://beabot.netlify.app>
- 🔵 **Développement** (Nuxt 3, dev) : <https://dev-beabot.netlify.app>

---

## 📊 CONTEXTE ACTUEL

### Statut (18 décembre 2025)

**Migration Nuxt 3 terminée** - Phase 9 en cours, Phase 11 planifiée.

| Métrique | Site Prod | Site Dev | Statut |
|----------|-----------|----------|--------|
| **Framework** | Nuxt 3.14 | Nuxt 3.14 | ✅ Sync |
| **Poids HTML** | ~28 KB | ~28 KB | ✅ |
| **Requêtes HTTP** | ~16 | ~16 | 🔶 À optimiser |
| **Fonts** | System stack | System stack | ✅ |
| **EcoIndex** | B-C | B-C | 🔶 Objectif A |

---

## ✅ PHASE 10 : Migration domaine beabot.fr

> **Terminée le 18 décembre 2025**

- [x] DNS beabot.fr configuré
- [x] Domaine configuré dans Netlify
- [x] URLs mises à jour (netlify.toml, canonical, RSS, feeds)
- [x] Redirects en place
- [x] Testé et déployé

---

## ⏸️ PHASE 9 : Optimisations Éco-conception (en pause)

> **Reprise prévue après Phase 11**

### ✅ Tâches terminées

- [x] **ECO-9-01** : Supprimer script EcoIndex externe
- [x] **ECO-9-07** : Attributs width/height images
- [x] **ECO-9-13** : Lazy Loading composants décoratifs (-2 à -4 requêtes HTTP)
- [x] **ECO-9-19** : Simplifier structure HTML (-6 éléments DOM sur homepage)

### 📋 Tâches restantes (à reprendre)

- [x] ECO-9-15 : NuxtIsland pour zones non-interactives
- [x] ECO-9-17 : Inliner le CSS critique
- [x] ECO-9-18 : Remplacer SVG décoratifs par CSS
- [x] ECO-9-20 : Optimiser le composant Oeuf
- [x] ECO-9-21 : Delay Hydration

---

## 🎨 PHASE 11 : Homepage & Contact - Graphisme & Contenu 

> **Objectif** : Améliorer l'UX, le parcours utilisateur et les conversions tout en respectant l'éco-conception

### 📋 AUDIT RÉALISÉ (18 décembre 2025)

Audit complet UX/UI desktop et mobile réalisé sur :

- Page d'accueil (beabot.fr)
- Page contact (beabot.fr/contact)

---

### 🏠 HOMEPAGE - Tâches

#### PRIORITÉ 1 - Quick wins textuels

##### HP-11-01 : Nouveau tagline Hero

- [x] Créer branche `feature/hp-11-01-hero-tagline`
- [x] Remplacer "webdesign - développement - gestion de projet"
- **Proposition** :
  > "Des sites web qui respectent la planète sans sacrifier l'expérience"
  >
  > ou
  >
  > "Performance, accessibilité, sobriété : un web durable et beau"
- [x] Garder le Oeuf animé
- [x] Ajouter 2 CTAs visibles : [Découvrir →] (qui permet de descendre à la section suivante) [Me contacter]
- [x] Ou ajouter une flèche centré en bas du container pour inviter au scroll (cf. les autres flèches sur la page)
  - **Fichier** : `pages/index.vue` (section container-1)

##### HP-11-02 : Reformuler l'accroche en positif

~~- [X] Créer branche `feature/hp-11-02-accroche`~~

- [X] Remplacer le texte interrogatif/négatif
- **Texte actuel** :
  > "Vous avez sans doute entendu dire que le numérique émettrait plus de CO2 que le transport aérien ? C'est vrai. Peut-être pensez-vous que les data centers sont la source principale de cette pollution ? Pas tout à fait..."
- **Proposition** :
  > "**Le numérique pèse plus lourd que l'aviation** dans nos émissions de CO2. La bonne nouvelle ? **Chaque site peut faire partie de la solution**. Un site éco-conçu consomme moins, charge plus vite, et reste beau : c'est possible, et c'est ce que je fais."
- **Fichier** : `pages/index.vue` (section container-2)

##### HP-11-03 : Chiffres marquants section Impacts

~~- [x] Créer branche `feature/hp-11-03-impacts-chiffres~~

- [x] Remplacer les textes génériques par des données concrètes
- **Propositions** :

| # | Actuel | Proposé |
|---|--------|---------|
| 1 | "Des impacts sur l'émission de CO2, la consommation d'énergie et de ressources…" | "**4% des émissions mondiales de CO2** viennent du numérique – autant que l'aviation" |
| 2 | "…réparties entre les serveurs, le réseau et les utilisateurs." | "**2/3 de l'impact** vient de nos appareils, pas des serveurs" |
| 3 | "Les utilisateurs ont le plus fort impact sur l'environnement…" | "Un site lourd **accélère l'obsolescence** de vos appareils" |
| 4 | "…dés l'achat de leur appareil, avant même son utilisation." | "**Moins de ressources = plus de durabilité** pour tous" |

- **Fichier** : `pages/index.vue` (section impact)

##### HP-11-04 : Exemples concrets pour les 4 piliers

~~- [x] Créer branche `feature/hp-11-04-piliers-concrets`~~
- [x] Ajouter des exemples tangibles à chaque pilier
- **Propositions** :

| Pilier | Proposition |
|--------|-------------|
| **Durabilité** | "Un site de 500 Ko au lieu de 5 Mo permet à un smartphone de 5 ans de l'afficher sans lag" |
| **Efficience** | "Objectif : **-70% de poids** par rapport à un site classique, même résultat" |
| **Sobriété** | "Pas de carousel qui tourne dans le vide, pas de vidéo autoplay : **chaque élément a sa raison d'être**" |
| **Transversalité** | "Du brief au déploiement, **l'éco-conception guide chaque décision**" |

- **Fichiers** : `pages/index.vue` (sections container-3 et container-4)

---

#### PRIORITÉ 2 - Améliorations graphiques

##### HP-11-05 : Réduire hauteur Hero mobile

- [ ] Créer branche `feature/hp-11-05-hero-mobile`
- [ ] Passer de `min-height: 100vh` à `max-height: 70vh` sur mobile
- [ ] Réduire la taille du logo/forme décorative
- [ ] S'assurer que le contenu important est visible sans scroll
- **Impact éco** : Moins de scroll = moins d'énergie
- **Fichier** : `pages/index.vue` (styles container-1, #boite-logo)

##### HP-11-06 : Refonte layout section Impacts (2x2 grid)

- [x] Créer branche `feature/hp-11-06-impacts-grid`
- [x] Remplacer le layout 3 colonnes par css grid
- [x] Mettre les chiffres en typographie hero (grand)
- [x] Les blocs impacts doivent être des carrés responsives de la même taille
- **Impact éco** : -6 éléments DOM, structure simplifiée
- **Fichier** : `pages/index.vue` (section impact, styles)

##### HP-11-07 : Indicateur de progression scroll

- [ ] Créer branche `feature/hp-11-07-scroll-indicator`
- [ ] Ajouter une barre de progression fixe en haut
- [ ] Implémenter en CSS pur si possible (performance)
- **Code suggéré** :

```css
.scroll-indicator {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: var(--vert);
  width: var(--scroll-progress);
  z-index: 100;
}
```

- **Impact éco** : ~100 bytes CSS, aucune requête supplémentaire
- **Fichiers** : `layouts/default.vue` ou `app.vue`

---

#### PRIORITÉ 3 - Évolutions structurelles

##### HP-11-08 : Remplacer SVG Oeuf décoratifs par CSS

- [ ] Créer branche `feature/hp-11-08-oeuf-css`
- [ ] Identifier les Oeuf purement décoratifs (non interactifs)
- [ ] Les remplacer par des pseudo-éléments CSS avec `background-image`
- [ ] Conserver le composant Vue uniquement pour le hero animé
- **Impact éco** : -10 à -15 éléments DOM
- **Note** : Complémentaire à ECO-9-18 et ECO-9-20
- **Fichiers** : `pages/index.vue`, `assets/css/`

##### HP-11-09 : Accordéon piliers sur mobile (optionnel)

- [x] Créer branche `feature/hp-11-09-piliers-accordion`
- [x] Transformer les 4 piliers en accordéon sur mobile
- [x] Un seul ouvert à la fois pour économiser l'espace
- [x] Animation CSS (pas de JS si possible)
- **Impact éco** : Moins de scroll, meilleure UX mobile
- **Fichier** : `pages/index.vue`

---

### 📬 CONTACT - Tâches

#### PRIORITÉ 1 - Quick wins textuels

##### CT-11-01 : Titre et accroche engageants

- [x] Créer branche `feature/ct-11-01-contact-form`
- [x] Remplacer le titre "Contact" seul
- **Proposition** :

  > # Parlons de votre projet
>
  > Une question sur l'éco-conception ? Un site à créer ou optimiser ? Écrivez-moi, **je réponds personnellement sous 48h**.
- **Fichier** : `pages/contact.vue`

##### CT-11-02 : Labels humanisés

- [x] Travailler sur la branche `feature/ct-11-01-contact-form`
- [x] Modifier les labels du formulaire et activer l'auto-complétion avec les balises html
- **Propositions** :
  - "Nom" → "Votre nom"
  - "Email" → "Votre email"
  - "Message" → "Votre message (décrivez votre projet ou posez votre question)"
- [x] Modifier le bouton : "Envoyer" → "Envoyer mon message →"
- [x] Améliorer le message de confirmation :
  > ✓ Message envoyé ! Je vous recontacte très vite.
- [x] Opt-in obligatoire à cocher avec texte en lien vers la page http://localhost:3000/mentions-legales
- **Fichier** : `pages/contact.vue`

---

#### PRIORITÉ 2 - Layout et UX



## CT-11-03 : Page Contact — Layout 2 colonnes desktop

### 1. Setup
- [x] Créer la branche `feature/ct-11-03-contact-layout`
- [x] Vérifier le fichier cible : `pages/contact.vue`
- [x] Identifier / ajouter un wrapper racine `.contact-page`

---

### 2. Structure HTML (contact.vue)
- [x] Créer un wrapper `.contact-layout`
- [x] Créer une grille 2 colonnes (desktop)
  - [x] Colonne gauche : `.contact-aside`
  - [x] Colonne droite : `.contact-form-panel`

#### Colonne gauche — contenu
- [x] Déplacer le titre `<h1>` dans `.contact-aside`
- [x] Ajouter un bloc intro `.contact-intro`
- [x] Ajouter une promesse explicite (ex. réponse sous 48h)
- [x] Ajouter un bloc `.contact-infos`
  - [x] Email (mailto)
  - [x] Lien LinkedIn

#### Colonne droite — formulaire
- [x] Encapsuler le formulaire dans `.contact-form-panel`
- [x] Ajouter un wrapper `.contact-form`

---

### 3. Layout CSS (Grid / Responsive)
- [x] Implémenter un layout Grid desktop
  - [x] 2 colonnes (ex. 40% / 60% ou 1fr / 1.2fr)
  - [x] Gap horizontal cohérent avec le design system
- [x] Mobile
  - [x] Layout empilé
  - [x] Ordre logique : colonne gauche → formulaire
- [x] Définir une largeur max pour le formulaire (ex. 520–640px)

---

### 4. Panel formulaire (design)
- [x] Définir un fond distinct pour `.contact-form-panel`
- [x] Ajouter padding interne généreux
- [x] Ajouter bordure ou séparation visuelle
- [x] Définir un radius cohérent avec le site
- [x] Vérifier contraste fond / texte

---

### 5. Stylisation des champs
- [x] Styliser inputs text / email
- [x] Styliser textarea
  - [x] Hauteur confortable
  - [x] Resize vertical uniquement
- [x] Styliser labels
  - [x] Typographie (taille, graisse)
  - [x] Espacement label → champ
- [x] Harmoniser les espacements verticaux entre champs

---

### 6. États et interactions
- [x] Focus
  - [x] Supprimer styles natifs (outline / box-shadow)
  - [x] Implémenter `:focus-visible` accessible
- [x] Hover (léger)
- [x] Disabled (si applicable)
- [x] Error (prévoir classe `.is-error`)

---

### 7. Bouton d’envoi
- [x] Vérifier cohérence avec design system
- [x] États hover / focus / disabled
- [x] Zone cliquable confortable (mobile)

---

### 8. Accessibilité (a11y)
- [x] Associer chaque `label` à son champ (`for` / `id`)
- [x] Focus clavier visible et cohérent
- [x] Checkbox mentions légales accessible
- [x] Vérifier contrastes (WCAG AA minimum)

---

### 9. Validation finale
- [x] Test desktop (≥1200px)
- [x] Test tablette
- [x] Test mobile
- [x] Vérifier lisibilité globale
- [x] Vérifier absence de styles natifs résiduels


- **Structure** :

```
Desktop :
┌────────────────────────────────────────────────┐
│  Parlons de votre    │  ┌──────────────────┐  │
│  projet              │  │ Formulaire       │  │
│                      │  │                  │  │
│  [Texte intro]       │  │                  │  │
│                      │  │                  │  │
│  📧 hello@beabot.fr  │  │ [Envoyer →]      │  │
│  🔗 LinkedIn         │  └──────────────────┘  │
└────────────────────────────────────────────────┘
```

- **Fichier** : `pages/contact.vue`

##### CT-11-04 : Focus states accessibles

- [x] Travailler sur la branche `feature/ct-11-01-contact-form`
- [x] Améliorer le focus visible sur les inputs
- **Code suggéré** :

```css
input:focus,
textarea:focus {
  outline: 2px solid var(--vert);
  outline-offset: 2px;
}
```

- [ ] Tester avec navigation clavier
- **Fichier** : `pages/contact.vue` ou `assets/css/main.scss`

##### CT-11-05 : Email cliquable en alternative

- [x] Créer branche `feature/ct-11-05-contact-email`
- [x] Ajouter un lien mailto: visible comme alternative au formulaire
- [x] protéger ce mail du spam
- [x] Ajouter le lien LinkedIn
- **Fichier** : `pages/contact.vue`

---

### 📊 RÉCAPITULATIF PHASE 11

| ID | Tâche | Page | Priorité | Impact UX | Impact Eco |
|----|-------|------|----------|-----------|------------|
| HP-11-01 | Tagline Hero | Home | P1 | ⭐⭐⭐⭐⭐ | - |
| HP-11-02 | Accroche positive | Home | P1 | ⭐⭐⭐⭐ | - |
| HP-11-03 | Chiffres impacts | Home | P1 | ⭐⭐⭐⭐ | - |
| HP-11-04 | Piliers concrets | Home | P1 | ⭐⭐⭐⭐ | - |
| HP-11-05 | Hero mobile | Home | P2 | ⭐⭐⭐⭐ | ✅ |
| HP-11-06 | Grid impacts | Home | P2 | ⭐⭐⭐⭐ | ✅ -6 DOM |
| HP-11-07 | Scroll indicator | Home | P2 | ⭐⭐⭐ | ✅ |
| HP-11-08 | Oeuf → CSS | Home | P3 | ⭐⭐⭐ | ✅✅ -15 DOM |
| HP-11-09 | Accordéon mobile | Home | P3 | ⭐⭐⭐ | ✅ |
| CT-11-01 | Titre contact | Contact | P1 | ⭐⭐⭐⭐ | - |
| CT-11-02 | Labels humanisés | Contact | P1 | ⭐⭐⭐ | - |
| CT-11-03 | Layout 2 colonnes | Contact | P2 | ⭐⭐⭐⭐ | - |
| CT-11-04 | Focus states | Contact | P2 | ⭐⭐⭐ | - |
| CT-11-05 | Email alternatif | Contact | P2 | ⭐⭐⭐ | - |

---

## 📈 MÉTRIQUES CIBLES

### Éco-conception

- [x] EcoIndex : Score **A**
- [x] Requêtes HTTP : **< 12**
- [x] Poids page : **< 150KB**
- [x] CO2/page : **< 0.3g**
- [x] Éléments DOM : **< 800**

### Performance

- [x] Lighthouse Performance : **> 95**
- [x] LCP : **< 1.5s**
- [x] FID : **< 100ms**
- [x] CLS : **< 0.05**

### Accessibilité

- [x] Lighthouse Accessibility : **> 95**
- [x] WAVE : **0 erreurs**

### Conversion (Phase 11)

- [x] Temps sur page augmenté
- [x] Taux de rebond diminué
- [x] Formulaire contact soumis




## 🎨 PHASE 12 : Optimisation SEO

> **Objectif Phase 12** : Audit + corrections SEO techniques (URLs, canonicals, meta, JSON-LD, sitemap) à partir du rapport Screaming Frog.
>
> **Décision** : **toutes les URLs internes doivent finir par un slash** (sauf la racine `/`).
>
> **Contrainte Netlify** : ne pas tenter de normaliser le slash avec des redirects génériques. Corriger à la source (génération Nuxt + liens internes + canonicals + sitemap).

### ✅ PHASE 12 — Plan d’action (priorités)

#### P0 — Bloquants indexation / duplication
- [x] **SEO-12-01** : Normaliser les URLs (trailing slash) **sur tout le site**
- [x] **SEO-12-02** : Corriger les **canonicals incohérents** et toute canonical pointant vers une 3xx/4xx
- [ ] **SEO-12-03** : Corriger les erreurs critiques Screaming Frog
  - [x] `/portfolio/` (200) est canonisée vers `/eco-conception/portfolio` (404) → **corriger la canonical de la page portfolio**
  - [ ] Certaines URLs remontent en **502/504** (ex: `/contact`, une page d’article) → **reproduire via curl en local + deploy preview** et corriger (bug build/routing)

#### P1 — Qualité des meta + cohérence OG/Twitter
- [ ] **SEO-12-04** : Vérifier cohérence `title` / `meta description` / `og:*` / `twitter:*` sur toutes les pages
- [x] **SEO-12-05** : Aligner `og:url` sur la canonical (même URL, même trailing slash)

#### P2 — Données structurées + sitemap
- [x] **SEO-12-06** : Vérifier les JSON-LD `BlogPosting` des articles (IDs, dates, image, breadcrumbs)
- [x] **SEO-12-07** : Vérifier et corriger les URLs dans `sitemap.xml` (domaine + trailing slash)

---

### 🤖 Prompt Codex — Phase 12 (copier-coller)

```text
Objectif : optimiser le SEO technique en standardisant toutes les URLs CANONIQUES avec trailing slash (sauf "/"), en alignant canonical / OG / JSON-LD / sitemap / liens internes, et en corrigeant les erreurs détectées par Screaming Frog.

Contexte du projet : Nuxt 3 (ssr:true), génération statique via Netlify, NUXT_PUBLIC_SITE_URL présent (prod: https://beabot.fr). Modules: @nuxt/content, @nuxt/image, @nuxtjs/sitemap.

Décision :
- Convention d’URL : trailing slash PARTOUT (ex: /eco-conception/xxx/). Exception: "/".
- Ne PAS ajouter de redirects Netlify génériques pour gérer le slash. Corriger à la source.

Problèmes à corriger (Screaming Frog) :
- /portfolio/ (200) est canonisée vers /eco-conception/portfolio (404) => corriger canonical sur la page portfolio.
- Certaines URLs remontent en 502/504 (ex: /contact, une page d’article) => vérifier si reproductible via curl (local + deploy preview) et corriger si bug build/routing.
- Duplications /x et /x/ => mettre à jour le maillage interne pour pointer directement vers la version canonique.

Tâches :
1) Créer une utilitaire unique de normalisation URL (ex: utils/seo-url.ts)
   - ensureLeadingSlash(path)
   - withTrailingSlash(path): "/" -> "/", sinon s’assure que ça finit par "/"
   - canonicalUrl(siteUrl, path): combine siteUrl + withTrailingSlash(ensureLeadingSlash(path))
   - normalizeInternalHref(href): applique trailing slash uniquement aux liens internes
     (ne pas toucher : http(s), mailto:, tel:, #, fichiers .pdf/.png/.jpg/.svg/.webp, query-only)

2) Corriger tous les useHead/useSeoMeta :
   - Home : canonical = siteUrl + "/" (OK)
   - Hub /eco-conception : canonical = siteUrl + "/eco-conception/" ET og:url identique (aujourd’hui og:url sans slash -> à corriger)
   - Articles /eco-conception/[slug] :
     - canonicalUrl = siteUrl + "/eco-conception/" + slug + "/" (ajouter slash final)
     - og:url = canonicalUrl
     - JSON-LD : mainEntityOfPage.@id = canonicalUrl ; BreadcrumbList item 2 = siteUrl + "/eco-conception/" ; item 3 = canonicalUrl
   - Pages simples (portfolio, mentions-legales, contact, etc.) : canonical self-referential + trailing slash

3) Corriger prev/next (findSurround + transformArticleLink)
   - transformArticleLink doit produire une URL canonique avec slash final.

4) Normaliser les liens internes (code) :
   - Header/Footer/Nav + boutons + prev/next : tous les liens internes doivent pointer vers la version avec slash final.
   - Implémenter un composant AppLink (wrapper de NuxtLink) qui applique normalizeInternalHref.

5) Normaliser les liens internes dans content/**/*.md :
   - Script Node qui scanne et convertit les liens internes "/x" -> "/x/" (avec exclusions ci-dessus).

6) Sitemap (nuxtjs/sitemap) :
   - Mettre à jour la config routes: actuellement elle renvoie `/eco-conception/${slug}` (sans slash).
   - Corriger pour renvoyer `/eco-conception/${slug}/`.
   - Vérifier que toutes les <loc> internes du sitemap finissent par "/" (sauf "/") et que le domaine est NUXT_PUBLIC_SITE_URL.

7) Tests de cohérence (post-build) :
   - Ajouter scripts/seo-check.mjs qui:
     - parse .output/public/sitemap.xml : échoue si un <loc> interne manque trailing slash
     - parse .output/public/robots.txt : vérifie que la ligne Sitemap pointe vers `${NUXT_PUBLIC_SITE_URL}/sitemap.xml`
     - (optionnel) vérifie quelques pages HTML (home + hub + 1 article + portfolio + mentions) : canonical et og:url cohérents et avec slash.

8) Investiguer 502/504 :
   - Ajouter un script de diagnostic (scripts/check-routes.mjs) qui lance quelques requêtes (fetch) sur un serveur local preview.
   - Vérifier reproduction via curl :
     - curl -I http://localhost:PORT/contact/
     - curl -I http://localhost:PORT/eco-conception/<slug>/
   - Identifier si l’erreur vient du build, du prerender, d’un fetch content, ou d’un routeRules.

Livrables :
- Travailler à partir de la branch dev sur la branch feature/seo-optim-2  avec : utilitaire URL, correction useHead/OG/JSON-LD, normalisation liens (code + markdown), correction sitemap routes + trailing slash, scripts de checks, et correctifs 502/504 si reproductibles.
- Tu peux tester et commit sur feature/seo-optim-2 mais ne fais pas de merge
- Repasser Screaming Frog après merge : objectif 0 canonicals vers 3xx/4xx, 0 duplications 200, 0 inlinks qui tapent une 301.
```

---

### 🔧 Notes techniques (Nuxt config actuelle)
- `runtimeConfig.public.siteUrl` via `NUXT_PUBLIC_SITE_URL` : conserver comme source de vérité.
- `@nuxtjs/sitemap` : `routes()` renvoie des URLs **avec slash final**.
- `netlify.toml` : `pretty_urls = true` (garde la décision trailing slash et évite de lutter via redirects).

---

## 📚 RESSOURCES TECHNIQUES

### Solutions Nuxt 3 pour réduire les requêtes

1. **Lazy Components** : Préfixe `Lazy` pour charger à la demande
2. **Server Components** : Suffixe `.server.vue` pour skip hydratation
3. **NuxtIsland** : Composant wrapper pour zones statiques
4. **Manual Chunks** : Regrouper vendor intelligemment
5. **CSS extraction** : `extractCSS: true` ou `cssCodeSplit: false`

### Solutions pour réduire le DOM

1. **CSS pseudo-elements** : `::before`/`::after` au lieu de vraies balises
2. **Vue 3 fragments** : `<template>` sans wrapper
3. **Server Components** : Pas d'hydratation = DOM client léger
4. **Conditional rendering** : `v-if` plutôt que `v-show` pour éléments lourds

### Référentiels

- [GreenIT 115 bonnes pratiques v5](https://rweb.greenit.fr)
- [RGESN 78 critères](https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/)
- [Nuxt Performance](https://nuxt.com/docs/getting-started/deployment#optimizing-performance)
- [Vue Performance](https://vuejs.org/guide/best-practices/performance.html)

---

## 📋 HISTORIQUE DES PHASES

| Phase | Description | Statut |
|-------|-------------|--------|
| 1-4 | Migration Nuxt 3 | ✅ Complété |
| 5 | Finalisation (cache, 404, footer) | ✅ Complété |
| 6 | Bug fixes production | ✅ Complété |
| 7 | Netlify build image | ✅ Complété |
| 8 | Tests et validation | ✅ Complété |
| 9 | Optimisations éco-conception | ⏸️ En pause |
| 10 | Migration domaine beabot.fr | ✅ Complété |
| 11 | Homepage & Contact redesign | Complété |
| **12** | **Optimisations SEO** | 🔄 **Active** |

---

**📝 Maintenu par** : Claude Code et Codex
**📅 Dernière MAJ** : 21 décembre 2025
**🎯 Phase actuelle** : Phase 12 - Optimisations SEO
