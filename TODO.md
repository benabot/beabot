# ✅ TODO - BeAbot Nuxt 3 Optimisation Éco-conception

> **Objectif** : Améliorer les performances éco-conception et le référencement

**Projet** : BeAbot - Blog éco-conception web
**Date création** : 15 décembre 2025
**Dernière MAJ** : 23 avril 2026
**Branche active** : `fix/footer-clip-transparent`
**Sites** :

- 🟢 **Production** (Nuxt 3, master) : <https://beabot.fr>
- 🔵 **Développement** (Nuxt 3, dev) : <https://dev-beabot.netlify.app>

---

## 📊 CONTEXTE ACTUEL

### Statut (23 avril 2026)

**Fix Footer transparent (23 avril 2026)** — Correction du sommet organique du footer, sur la branche `fix/footer-clip-transparent`.

- [x] Faux SVG de vague retiré du footer
- [x] Découpe supérieure douce appliquée directement au footer via masque CSS
- [x] Gros padding global de transition retiré pour laisser le footer s’emboîter sous `main`
- [x] Solution CSS sans dépendance, sans script et sans décor peint
- [x] Marges basses ajoutées sur `/contact/` et `/portfolio/` pour éviter que la vague ne morde le contenu

**Phase 19 Rythme visuel Éco-conception (23 avril 2026)** — Amélioration de la hiérarchie visuelle de `/eco-conception/`, sur la branche `feature/eco-conception-visual-rhythm`.

- [x] Hero renforcé avec deux œufs décoratifs discrets en arrière-plan
- [x] Sections `impacts`, `bénéfices`, `ressources` et `FAQ` différenciées pour casser l’uniformité des blocs clairs
- [x] Section définition conservée comme pivot sombre avec plus de respiration et de contraste interne
- [x] Grilles impacts/bénéfices/articles rendues moins homogènes par des accents visuels sobres
- [x] Archive éditoriale gardée intacte côté contenu, mais mieux hiérarchisée visuellement
- [x] FAQ rééquilibrée avec un grand œuf organique sous l’introduction
- [x] Navigation desktop rendue claire au survol des sections sombres marquées

**Phase 18 Page pilier Éco-conception (23 avril 2026)** — Refonte de `/eco-conception/` en page pilier éditoriale + archive, sur la branche `feature/eco-conception-pillar`.

- [x] Hero reconstruit pour positionner clairement l’éco-conception web comme méthode de conception
- [x] Bloc de repères éditoriaux ajouté pour cadrer ce que l’éco-conception est et n’est pas
- [x] Section impacts du numérique hiérarchisée avec 4 repères chiffrés issus des contenus existants
- [x] Bloc définition / principes ajouté autour de 4 axes : utile, utilisable, sobre, durable
- [x] Bloc bénéfices concrets recentré sur vitesse, SEO, accessibilité, maintenance, crédibilité et cohérence RSE
- [x] Section ressources refondue en gardant le rôle d’archive éditoriale (articles, filtres, recherche)
- [x] FAQ intégrée directement dans la page via `details` tout en conservant l’article FAQ existant
- [x] CTA final aligné avec la home et enrichi d’un lien secondaire vers Greenlight
- [x] Direction visuelle rééquilibrée pour garder une majorité de fond clair sur la page, sans bloc sombre dominant
- [x] Rythme visuel renforcé avec des respirations sombres et le retour des œufs décoratifs BeAbot
- [x] Bloc archive densifié visuellement avec plus d’œufs, plus de relief et des cartes moins uniformes
- [x] SEO mis à jour pour la page pilier avec canonical, OG, `CollectionPage + ItemList` conservé et `FAQPage` ajouté
- [x] Parent `pages/eco-conception.vue` simplifié pour ne plus injecter de H1 ni de métadonnées parasites
- [x] Validation `npm run generate` + `NUXT_PUBLIC_SITE_URL=https://beabot.fr node scripts/seo-check.mjs`
- [x] `npm run lint` lancé : warnings historiques du dépôt confirmés, pas de blocage spécifique à cette tâche

**Phase 17 Greenlight (22 avril 2026)** — Page `/greenlight/` et intégration dans la navigation principale, sur la branche `feature/greenlight-page`.

- [x] Page produit `/greenlight/` créée avec hero, bénéfices, comparatif de versions, FAQ et CTA final
- [x] Positionnement Greenlight recentré sur rapidité, visibilité, crédibilité, lisibilité et durabilité
- [x] Différence Greenlight-free / Greenlight rendue explicite sans inventer de lien de téléchargement
- [x] Navigation principale réordonnée avec entrée `Greenlight`
- [x] Footer mis à jour avec lien `Greenlight`
- [x] CTA existants de la home vérifiés sur `/greenlight/`
- [x] Deuxième passe commerciale sur `/greenlight/` : hero plus fort, preuves free visibles, distinctions free/premium clarifiées et CTA de choix renforcé
- [x] Navigation de `/greenlight/` repassée en foncé pour mieux lire la page produit claire
- [x] Validation `npm run generate` + `NUXT_PUBLIC_SITE_URL=https://beabot.fr node scripts/seo-check.mjs`

**Phase 16 Homepage V3 (22 avril 2026)** — Refonte de la home selon le positionnement hybride services + éco-conception, sur la branche `feature/home-v3-positioning`.

- [x] Hero repositionné sur l’offre de développement web éco-conçu
- [x] Bloc de preuves chiffrées recentré sur les métriques de beabot.fr
- [x] Section services reconstruite autour de 3 offres lisibles
- [x] Section réalisations recentrée sur 4 projets prioritaires
- [x] Bloc Greenlight intégré sans inventer de lien de téléchargement
- [x] Section approche raccourcie avec lien vers `/eco-conception/`
- [x] Articles déplacés plus bas dans la page avec logique de listing conservée
- [x] CTA final réaligné sur la promesse WordPress sobre, rapide et durable
- [x] SEO homepage mis à jour (title, description, JSON-LD Organization / Person)
- [x] Navigation desktop recalée sur le hero (masquée sur `.home-hero`, visible ensuite)
- [x] Hover des cartes de réalisations recentré sur un zoom image plus doux et plus long, sans mouvement du texte
- [x] Validation `npm run generate` + `NUXT_PUBLIC_SITE_URL=https://beabot.fr node scripts/seo-check.mjs`

**Phase 14 Portfolio + Homepage Mobile** — Prêt pour merge sur master.

**Patch Portfolio (25 janvier 2026)** — Correctif d’affichage projet BORDUR.

**Pages Apps (26 mars 2026)** — Landing `/apps/` + pages détail Meeting Mode / DuoSpend.

- [x] Recomposition de la landing `/apps/` (hero, grille, CTA, cartes)
- [x] Intégration des images DuoSpend dans les cartes et la page détail
- [x] Hiérarchie visuelle du milieu de page DuoSpend (galerie, FAQ, confidentialité)
- [x] Ancre `#privacy` auto-ouverte sur la section confidentialité
- [x] CTA de bas de page harmonisés avec le design system
- [x] H1 de `/apps/` neutralisé sur `iOS` et `macOS`
- [x] Galerie DuoSpend réorganisée en 2x3 avec images entières
- [x] Card `Un solde` mise en avant avec description détaillée
- [x] Formulaire d’intérêt et lien `/contact/` conservés sur les pages enfants
- [x] Référence `preview.src` de DuoSpend alignée sur `duospend-hero.webp`
- [x] Wording DuoSpend mis à jour dans `data/apps.ts`
- [x] Navigation mobile corrigée pour masquer la nav desktop et conserver `Apps` avant `Contact`
- [x] Refonte Meeting Mode (hero, before/after, galerie, FAQ, confidentialité)
- [x] Preview Meeting Mode activée dans la landing `/apps/`
- [x] Galerie Meeting Mode alimentée par les visuels macOS du dossier `public/img/apps/`
- [x] Ancre `#privacy` auto-ouverte sur la confidentialité Meeting Mode
- [x] Wording Meeting Mode aligné dans `data/apps.ts`
- [x] Lightbox native réutilisable pour les galeries DuoSpend et Meeting Mode

- [x] Renommage public "chasse-patate" → "BORDUR"
- [x] Liens projet mis à jour (topette.netlify.app → bordur.fr)

| Métrique            | Valeur                   | Statut |
| ------------------- | ------------------------ | ------ |
| **Framework**       | Nuxt 3.14                | ✅     |
| **URLs**            | Trailing slash normalisé | ✅     |
| **Portfolio**       | Refonte complète         | ✅     |
| **Homepage**        | Améliorations mobile UX  | ✅     |
| **Structured Data** | Toutes pages principales | ✅     |
| **EcoIndex**        | A                        | ✅     |
| **Lighthouse**      | 99 / 96 / 100 / 100      | ✅     |

---

## ✅ PHASES TERMINÉES

### Phase 14 : Refonte Portfolio + Homepage Mobile ✅

> **Terminée le 24 décembre 2025**
> **Branche** : `dev`

#### Portfolio - Structure et contenu

- [x] **PF-14-01** : Section Hero avec intro personnelle + CTAs (CV, Contact)
- [x] **PF-14-02** : Section compétences techniques (4 colonnes colorées)
- [x] **PF-14-03** : Données projets enrichies (contexte, rôle, résultats)
- [x] **PF-14-04** : CTA final avec œufs décoratifs + liens CV/Contact

#### Portfolio - Design et UX

- [x] **PF-14-05** : Filtres refondus (boutons visuels, compteur dynamique)
- [x] **PF-14-06** : Cartes projet améliorées (hiérarchie typo, badges éco)
- [x] **PF-14-07** : Bloc métriques sur projets éco-conçus (EcoIndex, poids, requêtes)
- [x] **PF-14-08** : Responsive mobile
- [x] **PF-14-16** : Timeline sobre entre sections (points d'ancrage visuels)
- [x] **PF-14-17** : Compétences en rangée horizontale avec couleurs par catégorie
- [x] **PF-14-18** : CTA final compact avec œufs (symétrie avec Hero)
- [x] **PF-14-19** : Lien GitHub intégré dans section Compétences
- [x] **PF-14-20** : Ajustements finaux (CTA height, object-position images, spacing)

#### Portfolio - SEO et accessibilité

- [x] **PF-14-09** : Meta description orientée recrutement
- [x] **PF-14-10** : JSON-LD ProfilePage + Person
- [x] **PF-14-11** : Attributs ARIA sur filtres interactifs
- [x] **PF-14-12** : Focus states accessibles

#### Portfolio - Données structurées

- [x] **PF-14-13** : Données projets externalisées dans `data/portfolio.ts`
- [x] **PF-14-14** : Intégration des données dans portfolio.vue
- [x] **PF-14-15** : Composant carte projet enrichi

#### Homepage - Améliorations mobile (24 déc)

- [x] **HP-14-21** : Numéros piliers (1-4) plus visibles (clamp 2.5-3.5rem, font-weight black)
- [x] **HP-14-22** : Labels catégorie améliorés (font-weight 600, letter-spacing 0.08em)
- [x] **HP-14-23** : Titres verts articles section mieux distingués (font-weight black mobile)
- [x] **HP-14-24** : CTAs standardisés (font-weight 500, letter-spacing 0.05em)
- [x] **HP-14-25** : Layout mobile piliers optimisé (spacing vertical cohérent)
- [x] **HP-14-26** : Hero typo ajustée (h1 plus gros, sous-titre plus fin)
- [x] **HP-14-27** : Container-2 100vh + espacement généreux (padding 5rem)
- [x] **HP-14-28** : Container-2 typo améliorée (line-height 1.75-1.8, letter-spacing)
- [x] **HP-14-29** : Container-2 alignement responsive (justify desktop, center mobile)
- [x] **HP-14-30** : Container-2 césure adaptée (auto desktop, none mobile)

### Pages Apps : structure + contenu ✅

> **Terminée le 26 mars 2026**
> **Branche** : `style/apps-graphisme`

- [x] **APP-16-01** : Créer la page `/apps/`
- [x] **APP-16-02** : Créer la page `/apps/meeting-mode/`
- [x] **APP-16-03** : Créer la page `/apps/duo-spend/`
- [x] **APP-16-04** : Externaliser le contenu apps dans `data/apps.ts`
- [x] **APP-16-05** : Ajouter une section légale FR / EN provisoire
- [x] **APP-16-06** : Prévoir un formulaire “être informé de la sortie de l'app”
- [x] **APP-16-07** : Ajouter un fil d’Ariane UI + JSON-LD `BreadcrumbList`
- [x] **APP-16-08** : Simplifier `/apps/` en index extensible
- [x] **APP-16-09** : Ajouter le lien `Apps` dans le footer avec état actif sur les sous-pages
- [x] **APP-16-10** : Recomposer la landing `/apps/` (hero, grille, CTA explicites)
- [x] **APP-16-11** : Intégrer les textes DuoSpend (présentation, FAQ, privacy FR/EN)
- [x] **APP-16-12** : Intégrer les textes Meeting Mode (présentation, FAQ, privacy FR/EN)
- [x] **APP-16-13** : Corriger le breadcrumb non-sticky (nav fixe isolée)
- [x] **APP-16-14** : Mettre à jour les résumés courts dans la landing `/apps/`
- [x] **APP-16-15** : Ajouter la galerie DuoSpend en 2x3 avec captions sous chaque image
- [x] **APP-16-16** : Mettre en avant la card `Un solde` avec description dédiée
- [x] **APP-16-17** : Corriger la référence image principale DuoSpend via `preview.src`
- [x] **APP-16-18** : Corriger l’affichage par défaut de la lightbox native des galeries
- [x] **APP-16-19** : Finaliser le SEO des pages `/apps/`, `/apps/duo-spend/` et `/apps/meeting-mode/`
- [x] **APP-16-20** : Aligner titles, meta descriptions, OG, Twitter et canonical sur `https://beabot.fr`
- [x] **APP-16-21** : Ajouter `CollectionPage` sur `/apps/` et `SoftwareApplication` sur les pages détail
- [x] **APP-16-22** : Vérifier `sitemap.xml` et `robots.txt` sur le domaine canonique

#### Reste à faire (Apps)

**/apps/**

- [ ] Finaliser le wording de la landing
- [ ] Remplacer les derniers placeholders visuels si de nouveaux assets arrivent

**/apps/duo-spend/** + **/apps/meeting-mode/**

- [ ] Ajouter les visuels définitifs quand ils seront disponibles
- [ ] Vérifier le wording final App Store / contact
- [ ] Confirmer la configuration d’envoi des formulaires mail côté Netlify Forms
- [ ] Finaliser la direction visuelle des deux pages enfants après intégration des derniers assets
- [ ] Vérifier l’ergonomie du bloc confidentialité + ancre `#privacy` sur Meeting Mode

**Audit graphique UX/UI**

- [ ] Créer l’audit graphique UX/UI

**Tests**

- [ ] Lancer les tests pour ces pages (`npm run lint`, `npm run generate`, `node scripts/seo-check.mjs`)

### Phase 12 : Optimisation SEO ✅

> **Terminée le 21 décembre 2025**

- [x] **SEO-12-01** : Normaliser les URLs (trailing slash)
- [x] **SEO-12-02** : Corriger les canonicals incohérents
- [x] **SEO-12-05** : Aligner og:url sur les canonicals
- [x] **SEO-12-06** : JSON-LD BlogPosting vérifiés
- [x] **SEO-12-07** : Sitemap.xml corrigé
- [x] **SEO-12-08** : Frontmatter SEO + updatedAt sur articles
- [x] **SEO-12-10** : JSON-LD FAQPage sur article FAQ
- [x] Utilitaire `utils/seo-url.ts` créé
- [x] Scripts de validation SEO créés

### Phase 11 : Homepage & Contact Redesign ✅

> **Terminée le 20 décembre 2025**

- [x] Hero avec tagline et CTAs
- [x] Section Impacts avec chiffres
- [x] Piliers avec accordéon mobile
- [x] Page contact 2 colonnes
- [x] Formulaire humanisé + RGPD

### Phase 10 : Migration domaine beabot.fr ✅

> **Terminée le 18 décembre 2025**

- [x] DNS et HTTPS configurés
- [x] Redirects Netlify en place

### Phase 9 : Optimisations Éco-conception ✅

> **Terminée le 17 décembre 2025**

- [x] System font stack
- [x] Lazy loading composants
- [x] Server components
- [x] Manual chunking JS
- [x] CSS externe optimisé

---

## 🔜 PROCHAINES ÉTAPES

### Immédiat : Merge dev → master

```bash
# Depuis dev (déjà fait)
git push origin dev

# Après validation sur dev-beabot.netlify.app
git checkout master
git merge dev --no-ff -m "feat: Phase 12 SEO + Phase 14 Portfolio + Structured Data"
git push origin master
```

---

## 🔄 PHASE 13 : SEO Avancé & Contenu

> **Objectif** : Améliorer le référencement par le contenu

### P0 — Google Search Console

- [x] **SEO-13-01** : Vérifier la propriété beabot.fr
- [x] **SEO-13-02** : Soumettre le sitemap
- [x] **SEO-13-03** : Demander l'indexation des pages principales
- [x] **SEO-13-04** : Analyser les Core Web Vitals après 2 semaines

### P1 — Structured Data ✅

- [x] **SEO-13-05** : useSeoMeta() sur Contact avec og:url
- [x] **SEO-13-06** : Meta descriptions spécifiques Contact
- [x] **SEO-13-07** : JSON-LD Organization sur homepage
- [x] **SEO-13-07b** : JSON-LD CollectionPage + ItemList sur /eco-conception/

### P2 — Contenu SEO

- [ ] **SEO-13-08** : Article "Comment réduire le poids d'un site web"
- [ ] **SEO-13-09** : Article "Audit éco-conception : par où commencer"
- [ ] **SEO-13-10** : Article "Les outils de mesure d'impact environnemental"

### P3 — Backlinks & Visibilité

- [ ] **SEO-13-11** : Soumettre sur annuaires éco-conception
- [ ] **SEO-13-12** : Guest posts sur blogs tech

---

## 🔄 PHASE 15 : Side Projects (à venir)

> **Objectif** : Ajouter une section side projects JS sur le portfolio

- [ ] **SP-15-01** : Créer section "Side Projects" distincte
- [ ] **SP-15-02** : Ajouter 3-5 projets JS/expérimentations
- [ ] **SP-15-03** : Design cohérent mais différencié des projets clients

---

## ⏸️ BACKLOG

### Performance

- [ ] Réduire hauteur Hero mobile
- [ ] Indicateur de progression scroll

### Éco-conception

- [ ] Requêtes HTTP : Objectif < 12
- [x] EcoIndex : Objectif A

---

## 📊 MÉTRIQUES CIBLES

| Métrique        | Actuel | Cible       |
| --------------- | ------ | ----------- |
| EcoIndex        | B-C    | **A**       |
| Requêtes HTTP   | ~16    | **< 12**    |
| Poids page      | ~150KB | **< 100KB** |
| Lighthouse Perf | 85-90  | **> 95**    |

---

## 📋 HISTORIQUE DES PHASES

| Phase  | Description            | Statut | Date            |
| ------ | ---------------------- | ------ | --------------- |
| 1-8    | Migration Nuxt 3       | ✅     | Nov-Déc 2025    |
| 9      | Éco-conception         | ✅     | 17 déc 2025     |
| 10     | Domaine beabot.fr      | ✅     | 18 déc 2025     |
| 11     | Homepage & Contact     | ✅     | 20 déc 2025     |
| 12     | SEO technique          | ✅     | 21 déc 2025     |
| **14** | **Portfolio redesign** | ✅     | **23 déc 2025** |
| 13     | SEO avancé & Contenu   | 🔜     | À venir         |
| 15     | Side Projects          | 🔜     | À venir         |

---

**📝 Maintenu par** : Claude
**📅 Dernière MAJ** : 23 décembre 2025
**🎯 Prochaine action** : Merge feature/portfolio-redesign → dev → master
