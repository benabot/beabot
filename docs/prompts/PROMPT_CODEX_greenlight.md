Tu travailles sur le repo BeAbot (Nuxt 3 / SSG).

================================================================
CONTEXTE
================================================================

Site en production : https://beabot.fr
Stack : Nuxt 3.14+ / Vue 3 (Composition API) / TypeScript / SCSS / Nuxt Content
Déploiement : Netlify (SSG)

En parallèle, une autre branche (`feat/home-v3-positioning`) refond la
home pour y intégrer un bloc Greenlight. Tu n'as pas à attendre ce
travail : tu bosses sur une branche indépendante, et les deux seront
mergées dans `dev` séparément.

================================================================
BRANCHE DE TRAVAIL
================================================================

- Pars de `dev`.
- Crée la branche `feat/greenlight-page` depuis `dev`.
- Si la branche existe déjà, checkout et poursuis dessus.
- Ne merge rien.
- Ne travaille jamais directement sur `dev` ou `master`.

================================================================
OBJECTIF
================================================================

Deux livrables distincts mais cohérents :

  1. Créer la page `/greenlight/` qui présente le produit (thème
     WordPress, versions free et premium).
  2. Mettre à jour la navigation globale du site pour intégrer
     Greenlight comme entrée principale.

Positionnement marketing de Greenlight :

  "Un socle WordPress premium, rapide, accessible et durable, pensé
  pour transformer la sobriété technique en avantage de marque et en
  levier de visibilité."

Distinction claire entre les deux versions :

  - Greenlight-free  = version légère, propre, personnalisable avec
                       Gutenberg. Pour démarrer.
  - Greenlight       = version premium avec SEO natif avancé et
                       personnalisation avancée. Pour les projets pros.

Ton à tenir :
  - Sobre, crédible, professionnel.
  - Pas marketing agressif.
  - Rapidité / visibilité / crédibilité / lisibilité / durabilité /
    maintenance / sobriété comme bénéfices mis en avant.
  - Les preuves techniques (pas de jQuery, DOM minimal, cache HTML,
    minification, nettoyage WordPress, etc.) sont présentes mais
    secondaires, pas en façade.

================================================================
FICHIERS PROBABLES À TOUCHER
================================================================

Création :
- `pages/greenlight.vue` (ou convention équivalente du projet)
- éventuels sous-composants dans `components/greenlight/`
- éventuellement `data/greenlight.ts` si externaliser le contenu est
  cohérent avec le pattern `data/apps.ts` déjà utilisé dans le projet

Modification :
- composant header / layout de navigation (à identifier dans le repo ;
  probablement `components/layout/Header.vue` ou un composant de menu
  dédié)
- footer si une liste de liens y figure déjà
- utilitaires SEO (`useSeoMeta`) pour les métadonnées de la nouvelle page

Ne touche PAS :
- `pages/index.vue` (refondue dans l'autre branche)
- les pages du blog, du portfolio, des apps, du contact, de l'éco-conception

================================================================
TÂCHE 1 — PAGE /greenlight/
================================================================

Structure attendue (10 sections) :

----------------------------------------------------------------
Section 1 — Hero
----------------------------------------------------------------

H1 :
  "Greenlight — thème WordPress éco-conçu"

Sous-titre :
  "Un socle WordPress premium, rapide, accessible et durable, pensé
  pour transformer la sobriété technique en avantage de marque et en
  levier de visibilité."

Paragraphe :
  "Greenlight est un thème WordPress conçu pour produire des sites
  plus rapides, plus sobres, plus lisibles et plus crédibles, sans
  dépendre d'une usine à gaz technique. Il s'adresse aux entreprises,
  marques éditoriales, indépendants, structures locales et
  organisations qui veulent un site professionnel, clair et
  maintenable dans la durée."

CTA :
  - Primaire : Découvrir Greenlight → ancre vers Section 5 (#versions)
  - Secondaire : Télécharger Greenlight-free
      → UNIQUEMENT si un lien réel existe déjà ; sinon supprime ce CTA
  - Tertiaire : Me contacter pour un projet sur mesure → /contact/

----------------------------------------------------------------
Section 2 — Pourquoi Greenlight
----------------------------------------------------------------

Titre : "Un thème WordPress qui va à l'essentiel"

Paragraphe expliquant le contre-pied face aux thèmes WordPress lourds,
surdesignés, pleins d'options et de dépendances. Voir le contenu détaillé
en bas de ce prompt (section "ÉLÉMENTS RÉDACTIONNELS").

----------------------------------------------------------------
Section 3 — Ce que Greenlight apporte concrètement
----------------------------------------------------------------

Titre : "Ce que Greenlight apporte concrètement"

4 sous-parties (cartes ou blocs) :
  - Un site plus crédible
  - Une meilleure base de visibilité
  - Une expérience plus fluide
  - Une sobriété technique utile

----------------------------------------------------------------
Section 4 — Pour quels projets ?
----------------------------------------------------------------

Titre : "Pour quels projets ?"

Liste simple :
  - site vitrine d'entreprise
  - média éditorial
  - site de marque orienté contenu
  - activité locale ou B2B qui veut rassurer et convertir
  - organisation avec une démarche RSE ou de sobriété numérique

----------------------------------------------------------------
Section 5 — Deux versions selon vos besoins (ancre #versions)
----------------------------------------------------------------

Titre : "Deux versions selon vos besoins"

Deux sous-blocs côte à côte (ou tableau comparatif si l'intégration
est propre visuellement, sinon cartes comparatives simples) :

  Bloc A — Greenlight-free
    - Base légère, propre, personnalisable avec Gutenberg
    - Thème léger
    - Structure claire
    - Approche sobre et maintenable
    - Cadre pertinent pour un site simple ou un premier projet
    - PAS de réglages SEO avancés
    - PAS d'options de personnalisation avancées
    - CTA : Télécharger Greenlight-free
      (UNIQUEMENT si un lien réel existe)

  Bloc B — Greenlight (premium)
    - SEO natif avancé
    - Réglages de personnalisation avancés
    - Structure éditoriale plus riche
    - Meilleure maîtrise de l'image de marque
    - Base de travail plus solide pour un projet pro ou sur mesure
    - CTA : Découvrir Greenlight (ancre vers FAQ ou CTA final)

----------------------------------------------------------------
Section 6 — Ce que Greenlight "vend" réellement
----------------------------------------------------------------

Titre : "Ce que Greenlight apporte côté business"

4 sous-parties :
  - Une image de marque plus nette
  - Une base plus propre pour le SEO
  - Une meilleure conversion par la sobriété
  - Une cohérence entre discours et mise en œuvre

----------------------------------------------------------------
Section 7 — Une approche plus durable de WordPress
----------------------------------------------------------------

Titre : "Une approche plus durable de WordPress"

C'est ICI et SEULEMENT ici que tu introduis les preuves techniques
secondaires :
  - poids réduit
  - peu de scripts, pas de jQuery
  - structure sémantique claire
  - mise en page simple à maintenir
  - optimisation des images
  - minification
  - cache HTML
  - nettoyage des éléments WordPress inutiles

Formulation : liste ou paragraphes courts, sans jargon excessif.

----------------------------------------------------------------
Section 8 — Base pour du sur-mesure
----------------------------------------------------------------

Titre : "Greenlight peut aussi servir de base à un site sur mesure"

Court paragraphe expliquant que Greenlight peut être utilisé tel quel
ou comme base pour une réalisation sur mesure.

CTA :
  - Me parler d'un projet → /contact/

----------------------------------------------------------------
Section 9 — FAQ courte
----------------------------------------------------------------

Titre : "Questions fréquentes"

4 questions :
  - Greenlight-free suffit-il pour un site simple ?
  - Quelle est la différence principale avec Greenlight ?
  - Greenlight est-il adapté à un site éditorial ?
  - L'éco-conception nuit-elle au design ?

Les réponses détaillées sont dans la section "ÉLÉMENTS RÉDACTIONNELS"
en bas de ce prompt.

Utilise le pattern FAQ (éventuellement `<details>` natif) déjà en place
dans le projet si pertinent.

----------------------------------------------------------------
Section 10 — CTA final
----------------------------------------------------------------

Titre : "Commencer simplement, ou aller plus loin"

Paragraphe court :
  "Greenlight-free permet de découvrir l'approche sur une base légère
  et propre. Greenlight va plus loin pour les projets qui ont besoin
  de visibilité, de maîtrise et de souplesse."

CTA :
  - Télécharger Greenlight-free (si lien réel, sinon supprimer)
  - Découvrir Greenlight (ancre #versions ou CTA principal vers contact)
  - Me contacter → /contact/

================================================================
TÂCHE 2 — NAVIGATION
================================================================

Identifie le ou les composants qui portent la navigation principale et
le footer (probablement `components/layout/Header.vue`, un menu mobile
dédié, et un `Footer.vue`).

Mets à jour la navigation principale pour l'ordre suivant :

  1. Logo → /
  2. Portfolio → /portfolio/
  3. Greenlight → /greenlight/      (NOUVELLE ENTRÉE)
  4. Éco-conception → /eco-conception/
  5. Apps → /apps/
  6. Contact → /contact/

Contraintes :
  - Si la nav desktop et la nav mobile sont deux composants ou deux
    structures distinctes, mets à JOUR les deux de manière cohérente.
  - Garde le comportement actuel du logo (clic = retour accueil).
  - Si la nav utilise une liste de liens externalisée (tableau TS ou
    composable), modifie cette liste à un seul endroit.
  - Respecte les styles d'état actif déjà en place.
  - Vérifie que l'état actif fonctionne sur `/greenlight/` et sur ses
    éventuels enfants.

Footer :
  - Si une liste de liens de navigation existe dans le footer, ajoute-y
    Greenlight dans un ordre cohérent avec la nav principale.

================================================================
SEO ET MÉTADONNÉES
================================================================

Sur la page Greenlight :

  title : "Greenlight — Thème WordPress éco-conçu | BeAbot"
        (à ajuster pour rester sous ~60 caractères visibles)

  description : "Greenlight, thème WordPress sobre et rapide. Versions
  free et premium, SEO natif avancé, personnalisation avancée. Pour
  des sites professionnels, crédibles et durables."
        (150-160 caractères)

  canonical : https://beabot.fr/greenlight/

  og:title, og:description, og:url, og:type (website ou article selon
  convention du projet)

  twitter:card : summary_large_image (aligné avec les pages apps)

  og:image : si une image dédiée Greenlight existe déjà, utilise-la ;
  sinon, réutilise l'image OG générique du site (ne crée pas d'image,
  ne référence pas un fichier qui n'existe pas)

JSON-LD :
  - Ajoute `Product` ou `SoftwareApplication` (aligné avec le pattern
    des pages apps : `SoftwareApplication`) pour décrire Greenlight.
  - Ne pas inventer de prix, de nombre d'installations, de ratings.
    Seuls les champs pour lesquels tu as une information fiable
    doivent être renseignés.
  - Ajoute `BreadcrumbList` si ce pattern est déjà en place ailleurs.

Ne casse pas les données structurées globales (Organization / Person).

================================================================
CONTRAINTES TECHNIQUES
================================================================

- Pas de nouvelle dépendance npm.
- Pas de web font.
- Pas de script externe.
- HTML sémantique strict : <section>, <article>, <h1>, <h2>, <nav>,
  <details> pour la FAQ si ce pattern est déjà utilisé ailleurs.
- Un seul <h1> sur la page.
- Hiérarchie Hn propre.
- DOM léger, pas de wrapper inutile.
- Accessibilité :
    - contrastes cohérents avec le design system
    - focus visibles
    - `prefers-reduced-motion` respecté
    - ARIA uniquement si nécessaire
- Variables CSS / tokens SCSS existants réutilisés.
- Composition API, TypeScript, `<script setup lang="ts">`.
- Suivre le pattern `data/apps.ts` pour externaliser le contenu
  structuré si c'est plus propre (sections, FAQ, liste des cas
  d'usage) → `data/greenlight.ts`. À toi de juger.

================================================================
ÉLÉMENTS RÉDACTIONNELS À INTÉGRER
================================================================

--- Section 2 — Pourquoi Greenlight (contenu) ---

"Le marché WordPress est saturé de thèmes lourds, surdesignés, remplis
d'options, de dépendances et d'effets qui finissent souvent par
ralentir le site, compliquer sa maintenance et brouiller son message.

Greenlight prend le contre-pied de cette logique. Il ne cherche pas à
impressionner par l'accumulation. Il cherche à fournir une base solide
pour construire un site plus rapide, plus lisible, plus crédible et
plus durable."

--- Section 3 — Ce que Greenlight apporte (détails des 4 cartes) ---

Un site plus crédible
  "Greenlight repose sur une esthétique éditoriale sobre et maîtrisée :
  hiérarchie visuelle nette, rythme typographique précis, lignes fines,
  palette resserrée, accents marqués sans surcharge. Le résultat n'est
  pas austère. Il est clair, sérieux, premium et lisible."

Une meilleure base de visibilité
  "Greenlight est pensé pour offrir une structure propre, lisible et
  exploitable pour le référencement, sans empiler des plugins pour des
  fonctions essentielles."

Une expérience plus fluide
  "Moins d'artifices, moins de friction, moins de bruit visuel : le
  contenu, l'offre et les appels à l'action ressortent mieux."

Une sobriété technique utile
  "La légèreté du thème ne sert pas seulement à faire propre. Elle
  réduit la complexité, améliore la stabilité et limite la dette
  technique."

--- Section 6 — Ce que Greenlight "vend" (détails des 4 points) ---

Une image de marque plus nette
  "Greenlight aide à produire un site qui inspire confiance : plus
  lisible, plus rigoureux, plus maîtrisé."

Une base plus propre pour le SEO
  "Le site est pensé pour être indexé proprement dès la base, sans
  dépendance excessive pour des fonctions essentielles."

Une meilleure conversion par la sobriété
  "Moins de lenteur, moins de distraction, moins de complexité visuelle :
  les messages et les offres ressortent mieux."

Une cohérence entre discours et mise en œuvre
  "Pour les structures qui parlent d'impact, de sobriété ou de
  durabilité, le site peut enfin incarner ce discours au lieu de
  seulement le revendiquer."

--- Section 9 — FAQ (réponses) ---

Q : Greenlight-free suffit-il pour un site simple ?
R : "Oui. Greenlight-free est pensé pour fournir une base légère,
propre et personnalisable avec Gutenberg."

Q : Quelle est la différence principale avec Greenlight ?
R : "Greenlight ajoute les réglages SEO avancés et les options de
personnalisation avancées, avec un cadre plus complet pour des usages
professionnels."

Q : Greenlight est-il adapté à un site éditorial ?
R : "Oui. Sa logique de mise en page et sa sobriété en font un bon
socle pour des projets orientés contenu."

Q : L'éco-conception nuit-elle au design ?
R : "Non. L'objectif n'est pas de faire moins par principe, mais de
faire mieux avec moins de complexité inutile."

================================================================
CE QUE TU NE DOIS PAS INVENTER
================================================================

- Pas de prix.
- Pas de témoignages.
- Pas de captures d'écran si le repo n'en contient pas dans
  `public/img/greenlight/` ou équivalent.
- Pas de date de sortie.
- Pas de nombre de téléchargements / d'installations.
- Pas de roadmap publique.
- Pas de lien de téléchargement inventé.

Si un contenu, une image, un lien ou une métrique est nécessaire et
que tu n'as pas de source fiable dans le projet, OMETS-LE. Dans le
rapport final, liste ces éléments manquants pour que Benoît puisse
les fournir dans une passe ultérieure.

================================================================
VALIDATION
================================================================

1. Lance `npm run generate`. Le build doit passer sans erreur.
2. Vérifie que `/greenlight/` est bien générée dans le build statique.
3. Vérifie que la navigation (desktop et mobile) affiche bien
   Greenlight dans le bon ordre.
4. Vérifie que les liens internes depuis la page Greenlight pointent
   vers des routes existantes (/contact/, ancres internes).
5. Si un script SEO léger existe (`node scripts/seo-check.mjs`),
   lance-le.
6. Si `npm run lint` est configuré et rapide, lance-le.

================================================================
LIVRABLE ATTENDU À LA FIN
================================================================

Donne-moi un rapport synthétique contenant :

  1. La liste des fichiers créés, modifiés, supprimés.
  2. Le résumé de l'architecture de la page /greenlight/ (composants
     créés, données externalisées, pattern utilisé).
  3. Le résumé des changements de navigation (desktop + mobile + footer).
  4. La liste des éléments manquants (images, liens de téléchargement,
     etc.) à fournir ultérieurement.
  5. Le résultat brut de `npm run generate`.
  6. Les éventuels points bloquants ou questions restantes.

Reste sur la branche `feat/greenlight-page`. Ne merge rien.
