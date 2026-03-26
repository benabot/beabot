# 📊 ÉTAT DU PROJET - BeAbot

> **Récapitulatif de l'état du projet au 26 mars 2026**

---

## 🎯 SITUATION ACTUELLE

### Site en production

| Site            | URL                            | Stack     | Branch | État      |
| --------------- | ------------------------------ | --------- | ------ | --------- |
| **Production**  | https://beabot.fr              | Nuxt 3.14 | master | ✅ Stable |
| **Dev Preview** | https://dev-beabot.netlify.app | Nuxt 3.14 | dev    | ✅ Tests  |

### Dernière mise à jour

**SEO Apps (26 mars 2026)** — Hardening SEO des pages `/apps/`, `/apps/duo-spend/` et `/apps/meeting-mode/`, avec alignement des métadonnées, des données structurées et des fichiers d’indexation.

- ✅ Titles corrigés pour supprimer le préfixe redondant `BeAbot -` quand le suffixe porte déjà la marque
- ✅ Meta descriptions vérifiées et conservées quand pertinentes, avec resserrage du texte Meeting Mode
- ✅ Open Graph / Twitter alignés sur les canoniques, avec `summary_large_image`
- ✅ Images sociales dédiées pour DuoSpend et Meeting Mode
- ✅ JSON-LD enrichi avec `CollectionPage` sur `/apps/` et `SoftwareApplication` sur les deux pages détail
- ✅ `BreadcrumbList`, `ItemList` et `FAQPage` conservés là où ils existaient déjà
- ✅ Contenu Meeting Mode renforcé naturellement sur l’expression `barre de menu`
- ✅ `sitemap.xml` généré automatiquement via `@nuxtjs/sitemap` avec domaine canonique `https://beabot.fr`
- ✅ `robots.txt` servi par la route serveur `server/routes/robots.txt.ts` et pointant vers `/sitemap.xml`
- ✅ Canonicals, `og:url` et trailing slash alignés sur `https://beabot.fr/.../`

**Navigation mobile (26 mars 2026)** — Correctif ciblé sur le menu mobile du layout principal.

- ✅ La nav desktop reste réservée au desktop, sans fuite visuelle sur mobile
- ✅ Le menu mobile continue de s’ouvrir uniquement au clic sur `beAbot + logo`
- ✅ `Apps` est conservé avant `Contact` dans le menu mobile

**Pages Apps (26 mars 2026)** — Landing `/apps/` + pages détail Meeting Mode / DuoSpend, sur la branche `style/apps-graphisme`.

- ✅ Landing `/apps/` structurée (hero, grille extensible, CTA explicites)
- ✅ Pages détail `/apps/meeting-mode/` + `/apps/duo-spend/`
- ✅ Breadcrumb UI + JSON-LD `BreadcrumbList`
- ✅ Section légale FR/EN avec onglets accessibles
- ✅ Formulaire “être informé” (Netlify Forms)
- ✅ Intégration des textes Meeting Mode + DuoSpend (présentation, FAQ, privacy)
- ✅ H1 de `/apps/` neutralisé sur `iOS` et `macOS`
- ✅ Galerie DuoSpend en grille 2x3 avec images entières et captions
- ✅ Card `Un solde` mise en avant avec description détaillée
- ✅ Wording DuoSpend révisé dans `data/apps.ts`
- ✅ Section confidentialité DuoSpend accessible via `#privacy`
- ✅ CTA de bas de page harmonisés avec le design system
- ✅ Lien `Apps` actif dans le footer
- ✅ Refonte Meeting Mode finalisée sur la base du template DuoSpend
- ✅ Hero Meeting Mode alimenté par `meeting-mode_hero.webp`
- ✅ Vignette listing Meeting Mode alimentée par `meeting-mode_vignette-apps.webp`
- ✅ Galerie Meeting Mode alimentée par les visuels avant/après, preset, actif et réglages
- ✅ Bloc before/after Meeting Mode intégré en pratique
- ✅ Confidentialité Meeting Mode accessible via `#privacy`
- ✅ Wording Meeting Mode réécrit dans `data/apps.ts`
- ✅ Lightbox native réutilisable branchée sur les galeries Apps
- ✅ Lightbox native corrigée pour rester masquée tant qu’elle n’est pas ouverte
- ✅ SEO des trois pages Apps finalisé et vérifié en build statique

**Phase 14 (Portfolio) terminée** — Prêt pour merge sur dev puis master.

- ✅ Correctif portfolio (25 janvier 2026) : affichage "BORDUR" + liens projet mis à jour vers bordur.fr
- ✅ Hero portfolio avec intro personnelle + CTAs
- ✅ Section compétences en rangée colorée + lien GitHub
- ✅ Cartes projet enrichies avec badges éco
- ✅ Timeline visuelle entre sections
- ✅ CTA final compact avec œufs décoratifs
- ✅ SEO complet (meta, og:, JSON-LD ProfilePage)

---

## 📈 PROGRESSION GLOBALE

```
Phase 1-8   - Migration Nuxt 3      [████████████████████] 100% ✅
Phase 9     - Éco-conception        [████████████████████] 100% ✅
Phase 10    - Domaine beabot.fr     [████████████████████] 100% ✅
Phase 11    - Homepage & Contact    [████████████████████] 100% ✅
Phase 12    - SEO Technique         [████████████████████] 100% ✅
Phase 14    - Portfolio Emploi      [████████████████████] 100% ✅
Pages Apps  - /apps + pages détail  [████████████████████] 100% ✅
Phase 13    - SEO Avancé & Contenu  [░░░░░░░░░░░░░░░░░░░░]   0% 🔜
Phase 15    - Side Projects         [░░░░░░░░░░░░░░░░░░░░]   0% 🔜
```

---

## ✅ CE QUI A ÉTÉ FAIT

### Phase 14 : Refonte Portfolio (22-23 décembre 2025)

#### Structure et contenu

- ✅ Hero avec nom, titre, accroche personnelle
- ✅ Baseline "15 ans d'expérience • Spécialiste éco-conception"
- ✅ CTAs : Voir mon CV (download) + Me contacter
- ✅ Formes décoratives (œufs colorés) en background

#### Section Réalisations

- ✅ Titre + accroche "Extraits de 15 ans de web"
- ✅ Filtres refondus (pills avec état actif)
- ✅ Données projets externalisées (`data/portfolio.ts`)
- ✅ Cartes projet enrichies (contexte, rôle, stack)
- ✅ Badges métriques éco (EcoIndex A, requêtes, poids)
- ✅ Lien "Lire l'article" si article associé

#### Timeline visuelle

- ✅ Points d'ancrage entre sections
- ✅ Lignes en dégradé + point vert avec halo
- ✅ Fil conducteur sobre et percutant

#### Section Compétences

- ✅ Layout 4 colonnes horizontales
- ✅ Couleurs différentes par catégorie (bleu, violet, vert, orange)
- ✅ Titres en uppercase avec bordure colorée
- ✅ Lien GitHub intégré en header

#### CTA Final

- ✅ Œufs décoratifs (symétrie avec Hero)
- ✅ Version compacte (titre + boutons)
- ✅ Boutons cohérents avec le reste du site

#### SEO

- ✅ Title optimisé recrutement
- ✅ Meta description orientée emploi/freelance
- ✅ Open Graph complet (og:title, og:description, og:type, og:url)
- ✅ JSON-LD ProfilePage + Person
- ✅ Canonical URL

### Phase 12 : SEO Technique (21 décembre 2025)

- ✅ URLs normalisées avec trailing slash
- ✅ Canonicals et og:url cohérents
- ✅ Sitemap.xml corrigé
- ✅ robots.txt dynamique
- ✅ JSON-LD FAQPage sur article FAQ

### Phase 11 : Homepage & Contact (18-20 décembre 2025)

- ✅ Hero avec nouveau tagline et CTAs
- ✅ Section Impacts avec chiffres concrets
- ✅ Piliers avec accordéon mobile
- ✅ Page contact 2 colonnes + formulaire humanisé

### Pages Apps (mars 2026)

- ✅ Landing `/apps/` avec hero + grille d’apps extensible
- ✅ Pages détail Meeting Mode + DuoSpend
- ✅ Breadcrumb UI + JSON-LD `BreadcrumbList`
- ✅ Section légale FR/EN (onglets accessibles)
- ✅ Formulaire d’intérêt “être informé”
- ✅ Intégration des textes Meeting Mode + DuoSpend (présentation, FAQ, privacy)
- ✅ CTA explicites “Découvrir …” sur la landing
- ✅ Lien `Apps` actif dans le footer
- ✅ Ajustements graphiques finaux sur `/apps/duo-spend/` (galerie 2x3, FAQ, confidentialité, card mise en avant)

---

## 📂 BRANCHES GIT

### Branches actives

| Branche                      | Description          | État                   |
| ---------------------------- | -------------------- | ---------------------- |
| `master`                     | Production beabot.fr | 🔒 Stable              |
| `dev`                        | Développement        | ✅ Phase 12 prête      |
| `feature/portfolio-redesign` | Refonte portfolio    | ✅ **Prêt pour merge** |
| `style/apps-graphisme`       | Pages Apps           | ✅ En cours            |

### Workflow de merge

```bash
# 1. Merger portfolio sur dev
git checkout dev
git merge feature/portfolio-redesign --no-ff -m "feat: Phase 14 Portfolio redesign"
git push origin dev

# 2. Tester sur dev-beabot.netlify.app

# 3. Merger sur master
git checkout master
git merge dev --no-ff -m "feat: Phase 12 SEO + Phase 14 Portfolio"
git push origin master
```

---

## 🔧 STACK TECHNIQUE ACTUELLE

```json
{
  "framework": "Nuxt 3.14+",
  "vue": "3.5+",
  "bundler": "Vite 6",
  "cms": "@nuxt/content v2.13+",
  "image": "@nuxt/image",
  "sitemap": "@nuxtjs/sitemap v6.1.5",
  "fonts": "System font stack",
  "node": "≥ 18",
  "package-manager": "npm",
  "hosting": "Netlify (SSG)"
}
```

---

## 🎯 PROCHAINES ÉTAPES

### Priorité 1 : Merge et déploiement

1. Merger `feature/portfolio-redesign` → `dev`
2. Valider sur dev-beabot.netlify.app
3. Merger `dev` → `master`
4. Vérifier en production

### Priorité 2 : Phase 13 — SEO Avancé & Contenu

1. Vérifier propriété beabot.fr dans Google Search Console
2. Soumettre sitemap
3. Rédiger 2-3 articles à fort potentiel SEO

### Priorité 3 : Phase 15 — Side Projects

1. Créer section "Explorations" ou "Side Projects"
2. Ajouter projets JS/expérimentations
3. Différencier visuellement des projets clients

### Priorité 4 : Finaliser Pages Apps

1. Ajouter les visuels définitifs quand ils seront disponibles
2. Finaliser le wording et le SEO sur `/apps/` et les pages enfants
3. Confirmer la configuration d’envoi des formulaires mail côté Netlify Forms
4. Ajouter les URLs App Store et ajuster les CTA quand disponibles
5. Lancer un audit graphique UX/UI

---

## 📊 MÉTRIQUES

### Actuelles

| Métrique        | Valeur |
| --------------- | ------ |
| EcoIndex        | B-C    |
| Requêtes HTTP   | ~16    |
| Poids page      | ~150KB |
| Lighthouse Perf | 85-90  |

### Cibles

| Métrique      | Objectif |
| ------------- | -------- |
| EcoIndex      | A        |
| Requêtes HTTP | < 12     |
| Poids page    | < 100KB  |
| Lighthouse    | > 95     |

---

## 📚 DOCUMENTATION

| Fichier                            | Description                 |
| ---------------------------------- | --------------------------- |
| `TODO.md`                          | Tâches et phases            |
| `PROJECT_STATE.md`                 | Ce fichier                  |
| `CLAUDE.md`                        | Contexte technique          |
| `BRANCHING_STRATEGY.md`            | Stratégie Git               |
| `PORTFOLIO_REDESIGN.md`            | Specs refonte portfolio     |
| `PORTFOLIO_VISUAL_IMPROVEMENTS.md` | Améliorations visuelles     |
| `data/portfolio.ts`                | Données projets structurées |

---

## 🔗 RESSOURCES

### Sites

- **Production** : https://beabot.fr
- **Dev** : https://dev-beabot.netlify.app
- **GitHub** : https://github.com/benabot/beabot

### Outils

- EcoIndex : https://www.ecoindex.fr/
- Lighthouse : https://pagespeed.web.dev/
- Search Console : https://search.google.com/search-console

---

**📝 Généré le** : 23 décembre 2025
**🔄 Branche analysée** : feature/portfolio-redesign
**🎯 Prochaine action** : Merge → dev → master
