# 🎯 HOMEPAGE REDESIGN V3 — Positionnement hybride

> **Cadrage de la refonte homepage et de l'introduction de Greenlight**

**Date création** : 18 avril 2026
**Projet** : BeAbot — beabot.fr
**Branche de travail** : `feat/home-v3-positioning`
**Phase** : Phase 16 — Repositionnement commercial

---

## 🎯 OBJECTIF

Recentrer le site sur l'activité professionnelle (développement WordPress + JavaScript) et introduire Greenlight comme produit, **sans diluer l'angle éco-conception** qui constitue le différenciateur commercial principal.

---

## 🧭 POSITIONNEMENT

### Avant (home actuelle)
> « BeAbot parle d'éco-conception web. »

Ton de vitrine éditoriale / pédagogique. Forte crédibilité mais faible conversion commerciale.

### Après (home refondue)
> « Benoît Abot est développeur web spécialisé en éco-conception. »

Ton d'offre de services. L'éco-conception reste le différenciateur central, mais elle devient une **spécialité professionnelle** plutôt qu'un sujet pédagogique.

### Règle directrice

**L'éco-conception n'est ni cachée, ni expliquée.** Elle est posée comme signature dans le hero, intégrée dans chaque service, et prouvée par des métriques concrètes. Le contenu pédagogique long reste accessible via `/eco-conception/` (page pilier).

---

## ❌ CE QUE NOUS NE FAISONS PAS

- Nous ne transformons pas la home en landing générique « développeur freelance WordPress ».
- Nous ne reléguons pas l'éco-conception en section 6 sur 8.
- Nous ne supprimons aucun contenu pédagogique existant : il migre vers `/eco-conception/` si besoin.
- Nous n'ajoutons pas de dépendance, pas de web font, pas de script externe.
- Nous ne touchons pas à l'architecture du blog, du portfolio, des pages apps.

---

## 🏗️ ARCHITECTURE DE LA NOUVELLE HOME

### Structure (8 sections)

1. **Hero** — positionnement + angle éco-conception intégré
2. **Preuves chiffrées** — EcoIndex, Lighthouse, poids (3 métriques)
3. **Services** — 3 offres avec angle éco-conception intégré dans chaque
4. **Réalisations** — 3 à 4 projets mis en avant
5. **Greenlight** — produit (nouvelle section)
6. **Approche** — résumé court de la méthode, lien vers `/eco-conception/`
7. **Articles** — derniers articles du blog
8. **CTA final** — commercial, avec angle éco-conception explicite

---

## 📝 CONTENU DÉTAILLÉ

### Section 1 — Hero

**H1 :**
> Développeur web spécialisé en éco-conception

**Sous-titre :**
> Sites WordPress et interfaces JavaScript sobres, rapides et durables.
> 15 ans d'expérience, spécialiste du numérique responsable.

**Paragraphe court :**
> Je conçois des sites et des applications web avec une attention particulière portée à la performance, à l'accessibilité, à la sobriété technique et à la qualité du code. Résultat : des projets plus légers, plus lisibles, plus faciles à maintenir.

**CTA :**
- Primaire : Voir mes réalisations → `/portfolio/`
- Secondaire : Me contacter → `/contact/`
- Tertiaire (texte) : Découvrir Greenlight → `/greenlight/`

---

### Section 2 — Preuves chiffrées

**Titre :**
> Ce site applique ce que je vends

**Sous-texte court :**
> Pas de démonstration théorique : les chiffres ci-dessous sont mesurés sur beabot.fr.

**3 métriques affichées :**

| Métrique       | Valeur                |
| -------------- | --------------------- |
| **EcoIndex**   | A                     |
| **Lighthouse** | 99 / 96 / 100 / 100   |
| **Poids page** | ~150 Ko               |

Affichage sobre, pas de graphiques lourds, pas d'animations coûteuses. SVG inline ou simple typographie large.

**Lien discret :**
> Méthode de mesure → `/eco-conception/`

---

### Section 3 — Services

**Titre :**
> Ce que je fais

**Sous-titre :**
> Trois types de missions, une même approche : faire mieux avec moins de complexité inutile.

**3 blocs :**

#### Bloc A — Sites WordPress éco-conçus
Thèmes sur mesure, refonte, allègement d'existant, optimisation des performances. L'objectif : un site qui ne pèse plus trois Mo pour afficher une page de contact, qui reste maintenable dans le temps, et qui passe EcoIndex A.

#### Bloc B — Interfaces et applications JavaScript sobres
Vue, Nuxt, JavaScript vanilla. Composants, intégrations, applications web conçues avec une logique de simplicité et de lisibilité. Pas d'usine à gaz côté front, pas de dépendance superflue.

#### Bloc C — Audits et optimisation éco-conception
Diagnostic de l'existant, plan d'action priorisé, accompagnement de la mise en œuvre. Avec des métriques concrètes (EcoIndex, Lighthouse, poids, requêtes) plutôt que des arguments abstraits.

**CTA de section :**
- Discuter d'un projet → `/contact/`

---

### Section 4 — Réalisations

**Titre :**
> Réalisations

**Sous-titre :**
> Extraits de 15 ans de web. Projets WordPress et front-end conçus avec la même logique de sobriété technique.

**3 à 4 cartes mises en avant, puisées dans `data/portfolio.ts` :**
- La Cyclo-Plomberie
- La petite boucle
- BORDUR
- Un projet JS / front si pertinent (pour équilibrer le message)

Réutiliser le composant existant de carte portfolio (cohérence visuelle avec la page `/portfolio/`).

**CTA :**
- Voir le portfolio complet → `/portfolio/`

---

### Section 5 — Greenlight

**Titre :**
> Greenlight

**Sous-titre :**
> Mon thème WordPress éco-conçu, en version gratuite et premium.

**Paragraphe :**
> Greenlight est un socle WordPress sobre, rapide, accessible et durable, pensé pour produire des sites plus crédibles, plus lisibles et plus faciles à maintenir. Disponible en version gratuite pour découvrir l'approche, et en version premium pour les projets professionnels avec SEO natif avancé et personnalisation étendue.

**2 sous-blocs courts (cartes) :**

- **Greenlight-free** — Base légère, propre, personnalisable avec Gutenberg. Pour démarrer simplement.
- **Greenlight** — Version premium avec SEO natif avancé et personnalisation avancée. Pour les projets professionnels.

**CTA :**
- Primaire : Découvrir Greenlight → `/greenlight/`
- Secondaire (uniquement si un lien stable existe déjà) : Télécharger Greenlight-free

---

### Section 6 — Approche

**Titre :**
> Une approche sobre, sans sacrifier la qualité

**Sous-titre :**
> Performance, accessibilité, sobriété : une méthode de conception, pas un argument décoratif.

**Paragraphe (court, 2-3 phrases max) :**
> L'éco-conception n'est pas une couche marketing ajoutée après coup. C'est une manière de concevoir le projet dès le départ : limiter le superflu, garder ce qui sert réellement l'usage, construire des sites plus légers, plus rapides et plus durables.

**CTA :**
- Comprendre l'éco-conception web → `/eco-conception/`

**Remarque :** Cette section est volontairement courte. Le contenu pédagogique long (impacts du numérique, définitions, FAQ) reste sur `/eco-conception/` qui devient la page pilier.

---

### Section 7 — Articles

Réutiliser le composant existant qui liste les derniers articles du blog.

**Titre :**
> Articles

**Sous-titre :**
> Notes, retours d'expérience et analyses autour de l'éco-conception web, de WordPress et des choix techniques durables.

**CTA :**
- Voir le blog → `/articles/` (ou URL équivalente en place)

---

### Section 8 — CTA final

**Titre :**
> Un site WordPress plus propre, plus rapide, plus durable ?

**Paragraphe court :**
> Je peux intervenir sur la conception, le développement, l'optimisation ou la mise en place d'une base technique sobre.

**CTA :**
- Me contacter → `/contact/`
- Voir mes réalisations → `/portfolio/`

---

## 🗺️ IMPACT SUR `/eco-conception/`

La page `/eco-conception/` devient officiellement la **page pilier** sur le sujet. Tout contenu pédagogique long qui serait déplacé depuis la home doit y être intégré (impacts du numérique, définitions, FAQ, etc.).

**Cette migration de contenu n'est pas dans le scope de cette phase.** Elle fera l'objet d'une phase ultérieure si nécessaire. Pour l'instant, on se contente de :

1. Simplifier la home (selon ce cadrage).
2. Vérifier que `/eco-conception/` reste accessible et cohérente.
3. Créer les liens depuis la home vers `/eco-conception/` aux bons endroits.

---

## 🧭 NAVIGATION

### Ordre souhaité du menu principal

1. Logo → `/`
2. Portfolio → `/portfolio/`
3. **Greenlight → `/greenlight/`** *(nouvelle entrée)*
4. Éco-conception → `/eco-conception/`
5. Apps → `/apps/`
6. Contact → `/contact/`

### Remarque importante

La mise à jour de la navigation est **portée par la phase Greenlight** (prompt Codex distinct). La refonte de la home ne touche pas à la navigation.

---

## 🎨 CONTRAINTES TECHNIQUES ET UX

### Contraintes techniques

- **Pas de nouvelle dépendance.**
- **Pas de web font.** System font stack uniquement.
- **Pas de script externe.**
- Structure HTML sémantique.
- DOM léger. Pas de wrapper inutile.
- Accessibilité : hiérarchie Hn propre, contrastes, focus visibles, `prefers-reduced-motion` respecté.
- Cohérence avec le design system existant (variables CSS, tokens).
- Conserver les métadonnées SEO existantes et les mettre à jour si le positionnement change.

### Contraintes UX

- Sections nettes, respirantes.
- Hiérarchie visuelle claire (un titre principal par section, pas de fouillis).
- Esthétique cohérente avec le reste du site.
- Ton **professionnel, sobre, crédible**. Ni marketing agressif, ni pédagogie universitaire.

### Réutilisation de l'existant

Autant que possible, réutiliser :
- Les composants de carte projet (`components/portfolio/*`).
- Les composants de carte article.
- Les utilitaires SEO (`utils/seo-url.ts`, `useSeoMeta`).
- Les variables SCSS existantes (couleurs, espacements, typo).

---

## 📊 SEO

### Title
Avant : *« BeAbot - Blog sur l'éco-conception web »* (ou équivalent actuel)
Après : **« Benoît Abot - Développeur web spécialisé en éco-conception »**

### Meta description
> Développeur web WordPress et JavaScript spécialisé en éco-conception. Sites sobres, rapides, durables. Portfolio, thème Greenlight, articles.

(150-160 caractères, à ajuster finement.)

### Données structurées

- Conserver `Organization` / `Person` déjà en place.
- Mettre à jour `jobTitle` pour refléter le nouveau positionnement si nécessaire.
- Ajouter `Product` sur la section Greenlight si c'est propre (sinon laisser la page `/greenlight/` porter le JSON-LD produit).

---

## ✅ LIVRABLES ATTENDUS

1. Branche `feat/home-v3-positioning` basée sur `dev`.
2. Home refondue selon le cadrage ci-dessus.
3. Métadonnées SEO mises à jour.
4. `npm run generate` sans erreur bloquante.
5. Rapport synthétique à la fin : fichiers modifiés, arbitrages pris, résultat du build.

---

## 🔀 DÉCOUPAGE DES PROMPTS CODEX

Pour éviter de mélanger des scopes distincts, le travail est découpé en **deux prompts Codex** :

1. **Prompt 1 — Refonte de la home** (ce cadrage) → branche `feat/home-v3-positioning`
2. **Prompt 2 — Page `/greenlight/` + mise à jour navigation** → branche `feat/greenlight-page`

Les deux branches partent de `dev`. Elles peuvent être développées en parallèle et mergées indépendamment dans `dev`.

---

**📝 Cadrage rédigé par** : Claude
**📅 Créé le** : 18 avril 2026
**🎯 Prochaine action** : Lancer le prompt Codex « home v3 »
