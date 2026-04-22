Tu travailles sur le repo BeAbot (Nuxt 3 / SSG).

================================================================
CONTEXTE
================================================================

Site en production : https://beabot.fr
Stack : Nuxt 3.14+ / Vue 3 (Composition API) / TypeScript / SCSS / Nuxt Content
Déploiement : Netlify (SSG)

La spec de cette phase est documentée dans le fichier :
  docs/HOMEPAGE_REDESIGN_V3.md

Lis-la intégralement avant de commencer. Elle fait foi en cas d'ambiguïté avec ce prompt.

================================================================
BRANCHE DE TRAVAIL
================================================================

- Pars de `dev`.
- Crée la branche `feat/home-v3-positioning` depuis `dev`.
- Si la branche existe déjà, checkout et poursuis dessus.
- Ne merge rien.
- Ne travaille jamais directement sur `dev` ou `master`.

================================================================
OBJECTIF
================================================================

Refondre la homepage pour recentrer le site sur l'activité professionnelle
(développement WordPress + JavaScript) tout en conservant l'éco-conception
comme différenciateur central.

Positionnement à tenir :

  "Développeur web spécialisé en éco-conception"

L'éco-conception n'est NI cachée, NI expliquée sur la home. Elle est
intégrée comme une spécialité professionnelle :
- posée dans le H1 du hero,
- prouvée juste après par des métriques,
- intégrée dans chaque bloc de services,
- résumée (pas développée) dans la section approche,
- linkée vers /eco-conception/ qui reste la page pilier pédagogique.

Ce que tu ne fais PAS :
- Pas de landing générique "freelance WordPress".
- Pas de suppression de contenu pédagogique (il reste disponible via
  /eco-conception/ ; sa migration éventuelle n'est pas dans ce scope).
- Pas de modification de la navigation globale (autre prompt).
- Pas de nouvelle dépendance, pas de web font, pas de script externe.
- Pas de refonte des pages internes (portfolio, blog, apps, contact,
  eco-conception).

================================================================
FICHIERS PROBABLES À TOUCHER
================================================================

- `pages/index.vue` (principal)
- composants liés à la home si nécessaire (créer des sous-composants
  dans `components/home/` si la page devient trop longue)
- styles SCSS associés avec parcimonie
- utilitaires SEO existants (`useSeoMeta`, `utils/seo-url.ts`) pour les
  métadonnées

Ne touche PAS :
- `layouts/default.vue` (sauf nécessité absolue liée au SEO global)
- composants de navigation (`components/layout/Header.vue` ou équivalent)
- `data/portfolio.ts` (à consommer en lecture seule)
- pages du blog, du portfolio, des apps, du contact

================================================================
STRUCTURE EXACTE ATTENDUE
================================================================

La home est découpée en 8 sections dans cet ordre :

  1. Hero
  2. Preuves chiffrées
  3. Services
  4. Réalisations
  5. Greenlight
  6. Approche
  7. Articles
  8. CTA final

Le contenu détaillé de chaque section est dans
`docs/HOMEPAGE_REDESIGN_V3.md` — utilise-le comme source unique de vérité.

Points d'attention par section :

Section 1 — Hero
  - H1 : "Développeur web spécialisé en éco-conception"
  - Sous-titre et paragraphe : voir spec
  - 3 CTA (Réalisations / Contact / Greenlight)

Section 2 — Preuves chiffrées
  - 3 métriques : EcoIndex A, Lighthouse 99/96/100/100, ~150 Ko
  - Affichage SOBRE : pas de graphiques lourds, pas d'animations coûteuses
  - Pas de gauge, pas de compteur animé, pas de lib externe
  - Simple typographie large + éventuellement SVG inline très légers

Section 3 — Services
  - 3 blocs : WordPress éco-conçus / Interfaces JS sobres / Audits éco-conception
  - Chaque bloc intègre l'angle éco-conception dans sa proposition, pas en
    bloc séparé
  - Un seul CTA de section vers /contact/

Section 4 — Réalisations
  - Réutilise le composant de carte projet existant si possible
  - Consomme `data/portfolio.ts` en lecture seule
  - Affiche 3 ou 4 projets prioritaires : La Cyclo-Plomberie, La petite
    boucle, BORDUR, éventuellement un projet JS/front
  - CTA vers /portfolio/

Section 5 — Greenlight
  - Nouvelle section sur la home
  - Un paragraphe + 2 sous-blocs (Greenlight-free / Greenlight)
  - CTA principal vers /greenlight/
  - CTA secondaire "Télécharger Greenlight-free" UNIQUEMENT si un lien
    stable existe déjà dans le projet (sinon supprime ce CTA, n'invente rien)

Section 6 — Approche
  - Volontairement COURTE (2-3 phrases max)
  - Renvoie vers /eco-conception/

Section 7 — Articles
  - Réutilise le composant existant si disponible
  - Sinon, liste simple des 3 derniers articles

Section 8 — CTA final
  - 2 boutons : Contact + Portfolio

================================================================
SEO ET MÉTADONNÉES
================================================================

Mets à jour les métadonnées SEO de la home pour refléter le nouveau
positionnement :

  title : "Benoît Abot - Développeur web spécialisé en éco-conception"
  description : "Développeur web WordPress et JavaScript spécialisé en
  éco-conception. Sites sobres, rapides, durables. Portfolio, thème
  Greenlight, articles."

(Ajuste finement la longueur : title <= 60 caractères visibles dans
les SERPs, description 150-160 caractères.)

Utilise `useSeoMeta` comme dans le reste du projet.

Conserve les JSON-LD existants (Organization / Person). Mets à jour
le `jobTitle` s'il ne reflète plus le positionnement.

Conserve la canonical existante (https://beabot.fr/).

Ne casse pas les données structurées existantes.

================================================================
CONTRAINTES TECHNIQUES
================================================================

- Pas de nouvelle dépendance npm.
- Pas de web font.
- Pas de script externe.
- HTML sémantique strict : <section>, <article>, <h1>/<h2>, pas de
  <div> à la place d'un élément sémantique quand c'est évitable.
- Un seul <h1> sur la page.
- Hiérarchie Hn propre (h1 > h2 > h3, pas de saut).
- DOM léger, pas de wrapper inutile.
- Accessibilité :
    - contrastes cohérents avec le design system
    - focus visibles sur tous les éléments interactifs
    - respect de `prefers-reduced-motion` si des transitions sont ajoutées
    - attributs ARIA uniquement si nécessaire (préférer HTML natif)
- Variables CSS / tokens SCSS existants réutilisés.
- Si tu crées des sous-composants, place-les dans `components/home/`.
- Composition API, TypeScript, `<script setup lang="ts">`.
- Pas de state global ajouté. Les composables existants suffisent.

================================================================
CONTRAINTES UX / RÉDACTIONNELLES
================================================================

- Sections nettes et respirantes.
- Un seul message par section, une seule hiérarchie claire.
- Ton professionnel, sobre, crédible. Pas marketing agressif, pas
  pédagogique lourd.
- Pas de superlatifs creux ("incroyable", "révolutionnaire", etc.).
- Si un contenu existait déjà sur la home actuelle et qu'il est
  supprimé par cette refonte, NOTE-LE dans le rapport final pour que
  je sache ce qui a disparu (en particulier si des paragraphes
  pédagogiques sur l'éco-conception sont retirés, je veux savoir où
  ils devront potentiellement être remigrés sur /eco-conception/).

================================================================
PATTERNS DU PROJET À RESPECTER
================================================================

- Utilise `AppLink` (ou équivalent) pour les liens internes si c'est la
  convention déjà en place.
- Utilise les classes utilitaires et composants déjà existants quand
  c'est possible plutôt que d'en créer de nouveaux.
- Respecte la convention de nommage des composants (PascalCase).
- Respecte l'ordonnancement des sections SFC : template / script / style.
- Pas de CSS global ajouté. Tout reste scoped ou dans les fichiers
  SCSS dédiés déjà existants.

================================================================
VALIDATION
================================================================

1. Lance `npm run generate`. Le build doit passer sans erreur.
2. Si un script de validation SEO léger existe déjà dans le projet
   (`node scripts/seo-check.mjs` ou équivalent), lance-le et corrige
   les erreurs bloquantes liées à la home.
3. Si `npm run lint` est configuré et rapide, lance-le.
4. Vérifie visuellement (au moins mentalement d'après les fichiers
   modifiés) que :
   - les 8 sections sont présentes dans le bon ordre
   - il y a bien un seul <h1>
   - tous les liens internes pointent vers des routes existantes ou
     vers /greenlight/ (qui n'existe pas encore — c'est l'autre phase).
     Pour /greenlight/, garde le lien : il sera résolu quand la page
     sera créée.

================================================================
LIVRABLE ATTENDU À LA FIN
================================================================

Donne-moi un rapport synthétique contenant :

  1. La liste des fichiers créés, modifiés, supprimés.
  2. Le résumé des choix de structure / arbitrages pris.
  3. La liste des contenus retirés de la home (pour migration future
     éventuelle vers /eco-conception/).
  4. Le résultat brut de `npm run generate` (erreurs éventuelles).
  5. Les éventuels points bloquants ou questions restantes.

Reste sur la branche `feat/home-v3-positioning`. Ne merge rien.
