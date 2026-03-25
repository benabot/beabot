# ✅ TODO - BeAbot Nuxt 3 Optimisation Éco-conception

> **Objectif** : Améliorer les performances éco-conception et le référencement

**Projet** : BeAbot - Blog éco-conception web
**Date création** : 15 décembre 2025
**Dernière MAJ** : 25 mars 2026
**Branche active** : `feat/apps-pages`
**Sites** :

- 🟢 **Production** (Nuxt 3, master) : <https://beabot.fr>
- 🔵 **Développement** (Nuxt 3, dev) : <https://dev-beabot.netlify.app>

---

## 📊 CONTEXTE ACTUEL

### Statut (25 mars 2026)

**Phase 14 Portfolio + Homepage Mobile** — Prêt pour merge sur master.

**Patch Portfolio (25 janvier 2026)** — Correctif d’affichage projet BORDUR.

**Pages Apps (25 mars 2026)** — Landing `/apps/` + pages détail Meeting Mode / DuoSpend.

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

### Pages Apps : structure simplifiée ✅

> **Terminée le 25 mars 2026**
> **Branche** : `feat/apps-pages`

- [x] **APP-16-01** : Créer la page `/apps/`
- [x] **APP-16-02** : Créer la page `/apps/meeting-mode/`
- [x] **APP-16-03** : Créer la page `/apps/duo-spend/`
- [x] **APP-16-04** : Externaliser le contenu apps dans `data/apps.ts`
- [x] **APP-16-05** : Ajouter une section légale FR / EN provisoire
- [x] **APP-16-06** : Prévoir un formulaire “être informé de la sortie de l'app”
- [x] **APP-16-07** : Ajouter un fil d’Ariane UI + JSON-LD `BreadcrumbList`
- [x] **APP-16-08** : Simplifier `/apps/` en index extensible
- [x] **APP-16-09** : Ajouter le lien `Apps` dans le footer avec état actif sur les sous-pages

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

- [ ] **SEO-13-01** : Vérifier la propriété beabot.fr
- [ ] **SEO-13-02** : Soumettre le sitemap
- [ ] **SEO-13-03** : Demander l'indexation des pages principales
- [ ] **SEO-13-04** : Analyser les Core Web Vitals après 2 semaines

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
- [ ] EcoIndex : Objectif A

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
