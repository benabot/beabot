# Cahier des charges — Pages apps bilingues et support App Store

## 1. Contexte

Le site BeAbot est un site Nuxt 3 majoritairement francophone. Les pages `/apps/` et `/apps/{slug}/` servent à présenter les applications iOS/macOS de Benoît Abot et peuvent être liées depuis App Store Connect comme pages marketing, pages support ou pages de confidentialité.

Le choix d’architecture retenu est volontairement simple :

- ne pas installer de module i18n ;
- conserver les routes françaises existantes ;
- créer des routes anglaises explicites sous `/en/` ;
- centraliser autant que possible les données apps ;
- garder des pages statiques, sobres, faciles à générer et à auditer.

Les pages apps disposent déjà de FAQ, d’un lien de contact et d’une politique de confidentialité. Le présent chantier vise à harmoniser le multilingue, le support et le SEO sans refonte globale du site.

---

## 2. Objectifs

### Objectifs principaux

1. Créer une version anglaise des pages apps sous `/en/apps/`.
2. Créer une page contact anglaise sous `/en/contact/`.
3. Garantir une section support fonctionnelle sur toutes les pages apps françaises et anglaises.
4. Supprimer le fonctionnement par onglets multilingues pour les politiques de confidentialité des apps, sauf pour Siturem.
5. Aligner les sections support avec la FAQ et le bouton contact existants.
6. Ajouter ou vérifier les balises SEO multilingues : `canonical`, `hreflang`, `title`, `description`.
7. Vérifier que les routes anglaises sont générées et présentes dans le sitemap.
8. Alimenter `TODO.md` avec le plan d’action, le statut des tâches et les validations à réaliser.

### Objectifs secondaires

- Préparer des URLs stables pour App Store Connect.
- Améliorer le confort des utilisateurs non francophones.
- Ne pas diluer le positionnement principal francophone du site.
- Préserver l’approche éco-conçue : pas de dépendance i18n, pas de carrousel lourd, pas de JS inutile.

---

## 3. Hors périmètre

Ce chantier ne doit pas :

- traduire tout le site ;
- ajouter `@nuxtjs/i18n` ou une autre dépendance de traduction ;
- ajouter un sélecteur de langue global dans le header du site ;
- modifier en profondeur le design des pages apps ;
- modifier la stratégie éditoriale des articles `/eco-conception/` ;
- refondre le formulaire de contact au-delà du contexte support app ;
- ajouter de tracking, d’analytics ou de scripts tiers ;
- créer une nouvelle stack de contenu si les données actuelles suffisent.

---

## 4. Architecture des routes

### Routes françaises à conserver

Les routes françaises existantes restent les routes historiques.

```txt
/apps/
/apps/{slug}/
/apps/{slug}/#support
/apps/{slug}/#privacy
/contact/
```

Exemples :

```txt
/apps/focus-one/
/apps/focus-one/#support
/apps/focus-one/#privacy
/contact/?app=focus-one&type=support
```

### Routes anglaises à créer

```txt
/en/apps/
/en/apps/{slug}/
/en/apps/{slug}/#support
/en/apps/{slug}/#privacy
/en/contact/
```

Exemples :

```txt
/en/apps/focus-one/
/en/apps/focus-one/#support
/en/apps/focus-one/#privacy
/en/contact/?app=focus-one&type=support
```

### Slugs

Codex doit auditer les slugs réels du projet avant d’implémenter.

Ne pas renommer un slug existant sans nécessité. Si une app utilise déjà `/apps/duo-spend/`, conserver ce slug pour éviter les redirections inutiles.

---

## 5. Page contact anglaise

### Décision

Créer une vraie page anglaise :

```txt
/en/contact/
```

Ne pas se limiter à :

```txt
/contact/?lang=en
```

### Comportement attendu

La page `/en/contact/` doit :

- reprendre la logique du formulaire existant si un composant réutilisable existe ;
- afficher des textes anglais ;
- accepter les query params `app` et `type` ;
- afficher un contexte spécifique si `type=support` ;
- rester utilisable sans query params.

### Exemple de contexte support EN

```txt
You are contacting support for Focus One.
Please describe the issue, your device model, your system version, and the app version.
```

### Page contact FR

La page `/contact/` doit aussi être vérifiée pour les liens support français :

```txt
/contact/?app={slug}&type=support
```

Si ce contexte n’est pas encore affiché côté FR, ajouter un texte équivalent :

```txt
Vous contactez le support pour Focus One.
Décrivez le problème rencontré, le modèle de votre appareil, la version du système et la version de l’app.
```

---

## 6. Sections support

### Exigence générale

Chaque page app doit contenir une section support avec :

```html
<section id="support">
```

ou un équivalent HTML généré avec `id="support"`.

Cette exigence vaut pour :

```txt
/apps/{slug}/#support
/en/apps/{slug}/#support
```

### Raccord avec FAQ et bouton contact

Les sections support ne doivent pas être isolées du reste de la page. Elles doivent être cohérentes avec :

- la FAQ de l’app ;
- le bouton contact déjà présent ;
- la politique de confidentialité ;
- le statut de l’app si elle n’est pas encore publiée.

Le support doit suivre un parcours logique :

```txt
FAQ → Support → Contact
```

ou :

```txt
Support → FAQ utile → Contact
```

selon la structure actuelle de la page.

### Contenu minimal FR

```md
## Support

Vous avez une question, un bug à signaler ou une suggestion pour [Nom de l’app] ?

Consultez d’abord la FAQ ci-dessus : elle répond aux questions les plus fréquentes sur l’installation, l’usage, les données et la confidentialité.

Si le problème persiste, indiquez si possible :
- le modèle de votre appareil ;
- la version d’iOS, d’iPadOS ou de macOS ;
- la version de l’app ;
- les étapes permettant de reproduire le problème.

[Me contacter à propos de [Nom de l’app]](/contact/?app=[slug]&type=support)
```

### Contenu minimal EN

```md
## Support

Have a question, found a bug, or want to suggest an improvement for [App Name]?

Please check the FAQ above first: it covers the most common questions about setup, usage, data, and privacy.

If the issue persists, please include:
- your device model;
- your iOS, iPadOS, or macOS version;
- the app version;
- the steps needed to reproduce the issue.

[Contact support for [App Name]](/en/contact/?app=[slug]&type=support)
```

### Critères d’acceptation

- `/apps/{slug}/#support` fonctionne pour les pages françaises existantes.
- `/en/apps/{slug}/#support` fonctionne pour les pages anglaises.
- Le bouton contact FR pointe vers `/contact/?app={slug}&type=support`.
- Le bouton contact EN pointe vers `/en/contact/?app={slug}&type=support`.
- Les textes support ne contredisent pas la FAQ.
- Les informations demandées sont adaptées à la plateforme de l’app : iOS, iPadOS ou macOS.

---

## 7. Politique de confidentialité

### Décision

Ne plus utiliser d’onglets multilingues pour les politiques de confidentialité des apps, sauf pour Siturem.

### Règle générale pour les apps hors Siturem

Chaque locale affiche uniquement la politique correspondant à la langue de la page.

```txt
/apps/{slug}/#privacy        → politique en français
/en/apps/{slug}/#privacy     → politique en anglais
```

Pas d’onglet FR/EN sur ces pages.

### Exception Siturem

Siturem conserve une politique de confidentialité multilingue avec onglets :

- FR ;
- EN ;
- ES ;
- DE.

Cette exception doit être explicite dans le code ou dans les données pour éviter qu’un futur nettoyage supprime les langues supplémentaires.

### Comportement attendu

Pour une app standard :

- page FR : confidentialité en français uniquement ;
- page EN : confidentialité en anglais uniquement.

Pour Siturem :

- conserver les onglets FR, EN, ES, DE ;
- ouvrir la langue correspondant à la page si disponible ;
- conserver l’accès aux autres langues.

### Critères d’acceptation

- `/apps/focus-one/#privacy` affiche la confidentialité FR sans onglets multilingues.
- `/en/apps/focus-one/#privacy` affiche la confidentialité EN sans onglets multilingues.
- `/apps/siturem/#privacy` conserve les onglets FR, EN, ES, DE si la page existe.
- `/en/apps/siturem/#privacy` conserve les onglets FR, EN, ES, DE si la page existe.
- Aucune politique de confidentialité existante n’est supprimée sans vérification.

---

## 8. Données apps

### Objectif

Éviter de dupliquer toute la logique des pages apps entre FR et EN.

Codex doit auditer les fichiers existants, notamment :

```txt
data/apps.ts
pages/apps/
components/apps/
```

Puis proposer l’extension la plus sobre possible.

### Structure cible indicative

À adapter à l’existant :

```ts
type AppLocale = 'fr' | 'en'
type PrivacyLocale = 'fr' | 'en' | 'es' | 'de'

type LocalizedString = Partial<Record<AppLocale, string>>

type AppSupportContent = {
  intro: LocalizedString
  checklist: Partial<Record<AppLocale, string[]>>
  contactLabel: LocalizedString
}

type AppPrivacyContent = {
  mode: 'single-locale' | 'tabs'
  defaultLocales: AppLocale[]
  availableLocales: PrivacyLocale[]
  content: Partial<Record<PrivacyLocale, string>>
}

type AppItem = {
  slug: string
  name: string
  platform: string[]
  status: string
  title: LocalizedString
  description: LocalizedString
  metaTitle: LocalizedString
  metaDescription: LocalizedString
  faq: Partial<Record<AppLocale, Array<{ question: string; answer: string }>>>
  support: AppSupportContent
  privacy: AppPrivacyContent
}
```

### Règles

- Ne pas casser les pages FR.
- Ne pas renommer massivement les champs si ce n’est pas nécessaire.
- Préférer des helpers simples à une architecture i18n globale.
- Les apps standard doivent pouvoir afficher une confidentialité locale unique.
- Siturem doit pouvoir afficher des onglets multilingues.

---

## 9. SEO

### Canonical

Chaque page doit avoir son canonical propre.

FR :

```txt
https://beabot.fr/apps/{slug}/
```

EN :

```txt
https://beabot.fr/en/apps/{slug}/
```

### Hreflang

Chaque page app FR/EN doit déclarer :

```html
<link rel="alternate" hreflang="fr" href="https://beabot.fr/apps/{slug}/">
<link rel="alternate" hreflang="en" href="https://beabot.fr/en/apps/{slug}/">
<link rel="alternate" hreflang="x-default" href="https://beabot.fr/en/apps/{slug}/">
```

Pour les pages apps, `x-default` pointe vers la version anglaise.

### Métadonnées

Chaque page app doit avoir :

- `title` localisé ;
- `description` localisée ;
- `og:title` localisé ;
- `og:description` localisée ;
- `canonical` correct ;
- alternates `hreflang`.

### JSON-LD

Ajouter ou adapter un JSON-LD `SoftwareApplication` par page app.

Règles :

- URL localisée ;
- description localisée ;
- `operatingSystem` adapté ;
- `applicationCategory` si connu ;
- pas de prix inventé ;
- pas de lien App Store inventé ;
- pas de `offers` si le prix ou la disponibilité ne sont pas confirmés.

---

## 10. Sitemap

Codex doit vérifier que les routes anglaises sont présentes dans le sitemap généré.

Routes attendues a minima :

```txt
/en/apps/
/en/contact/
```

Et pour chaque app incluse :

```txt
/en/apps/{slug}/
```

Si les routes sont déclarées manuellement, les ajouter dans la configuration adaptée.

Si le sitemap est automatique, vérifier le résultat généré.

---

## 11. Navigation et maillage

### Pages FR

Ajouter un lien discret vers la version anglaise :

```txt
English version
```

Exemple :

```txt
/en/apps/focus-one/
```

### Pages EN

Ajouter un lien discret vers la version française :

```txt
Version française
```

Exemple :

```txt
/apps/focus-one/
```

### Header global

Ne pas ajouter de sélecteur de langue global tant que le site entier n’est pas bilingue.

---

## 12. Accessibilité

Vérifications obligatoires :

- un seul H1 par page ;
- hiérarchie H2/H3 cohérente ;
- liens explicites ;
- boutons contact explicites ;
- focus visible ;
- section `#support` accessible au clavier ;
- section `#privacy` accessible au clavier ;
- attributs `alt` sur les captures ;
- pas de contenu uniquement accessible par hover.

Exemples de liens corrects :

```txt
Contacter le support de Focus One
Contact support for Focus One
```

Exemples à éviter :

```txt
Cliquez ici
Click here
```

---

## 13. Performance et sobriété

Ne pas introduire :

- module i18n ;
- carrousel JS ;
- dépendance de traduction ;
- composant client lourd ;
- script tiers ;
- vidéo autoplay ;
- tracking supplémentaire.

À vérifier :

- images optimisées ;
- dimensions explicites sur les images ;
- `loading="lazy"` sur les images secondaires ;
- génération statique OK ;
- pas de duplication inutile de gros médias.

---

## 14. Mise à jour de `TODO.md`

Codex doit alimenter `TODO.md` avant ou pendant l’implémentation.

### Emplacement

Ajouter une section dédiée dans `TODO.md`, par exemple :

```md
## Apps — internationalisation légère et support App Store
```

Si une section apps existe déjà, l’étendre sans doublon.

### Checklist minimale à ajouter

```md
### Apps — internationalisation légère et support App Store

#### Décisions

- [x] Ne pas utiliser `@nuxtjs/i18n`.
- [x] Créer des routes explicites sous `/en/`.
- [x] Créer `/en/contact/`.
- [x] Conserver `/apps/{slug}/#support` pour les pages françaises existantes.
- [x] Utiliser une politique de confidentialité locale unique par page app standard.
- [x] Conserver les onglets de confidentialité multilingues uniquement pour Siturem.
- [x] Aligner les sections support avec la FAQ et le bouton contact.

#### Implémentation

- [ ] Auditer `pages/apps`, `components/apps` et `data/apps.ts`.
- [ ] Identifier les slugs réels des apps.
- [ ] Ajouter les contenus anglais dans la structure de données existante.
- [ ] Créer `/en/apps/`.
- [ ] Créer les pages `/en/apps/{slug}/`.
- [ ] Créer `/en/contact/`.
- [ ] Vérifier ou ajouter `id="support"` sur toutes les pages apps FR.
- [ ] Ajouter `id="support"` sur toutes les pages apps EN.
- [ ] Harmoniser les boutons contact FR avec `/contact/?app={slug}&type=support`.
- [ ] Harmoniser les boutons contact EN avec `/en/contact/?app={slug}&type=support`.
- [ ] Remplacer les onglets de confidentialité par un affichage local unique pour les apps standard.
- [ ] Conserver les onglets FR/EN/ES/DE pour Siturem.
- [ ] Ajouter canonical et hreflang FR/EN/x-default.
- [ ] Ajouter ou adapter le JSON-LD `SoftwareApplication`.
- [ ] Vérifier le sitemap.

#### Validation

- [ ] `npm test`
- [ ] `npm run generate`
- [ ] `NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs`
- [ ] Vérifier `/apps/{slug}/#support`.
- [ ] Vérifier `/en/apps/{slug}/#support`.
- [ ] Vérifier `/apps/{slug}/#privacy`.
- [ ] Vérifier `/en/apps/{slug}/#privacy`.
- [ ] Vérifier `/contact/?app={slug}&type=support`.
- [ ] Vérifier `/en/contact/?app={slug}&type=support`.
```

---

## 15. Plan d’action recommandé

### Phase 0 — Préparation Git

```bash
git checkout dev
git pull origin dev
git checkout -b feature/apps-en-support
```

### Phase 1 — Audit

```bash
git status
find pages/apps -maxdepth 2 -type f -print
find pages/en -maxdepth 3 -type f -print 2>/dev/null || true
find components -maxdepth 3 -type f | grep -i app || true
grep -R "support\\|privacy\\|FAQ\\|faq\\|contact" -n pages components data
grep -R "useHead\\|useSeoMeta\\|canonical\\|hreflang\\|SoftwareApplication\\|sitemap" -n pages components composables utils server nuxt.config.ts
```

### Phase 2 — TODO.md

Avant les grosses modifications, ajouter la section de suivi dans `TODO.md`.

### Phase 3 — Données apps

- Étendre `data/apps.ts` ou les fichiers équivalents.
- Ajouter les contenus EN nécessaires.
- Prévoir le cas Siturem.
- Préserver les pages FR.

### Phase 4 — Pages anglaises

Créer :

```txt
pages/en/apps/index.vue
pages/en/apps/{slug}.vue
pages/en/contact.vue
```

ou l’équivalent compatible avec la structure actuelle.

### Phase 5 — Support

- Vérifier les ancres FR existantes.
- Ajouter les ancres manquantes.
- Aligner FAQ, support et bouton contact.
- Ajouter les liens avec query params.

### Phase 6 — Confidentialité

- Supprimer les onglets multilingues pour les apps standard.
- Conserver l’exception Siturem.
- Vérifier les ancres `#privacy`.

### Phase 7 — SEO

- Ajouter canonical.
- Ajouter hreflang.
- Ajouter `x-default` vers EN.
- Adapter JSON-LD.
- Vérifier sitemap.

### Phase 8 — Validation

```bash
npm test
npm run generate
NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs
```

### Phase 9 — Compte rendu

Codex doit fournir :

- fichiers modifiés ;
- routes ajoutées ;
- validations exécutées ;
- éventuels points reportés ;
- extrait de `TODO.md` mis à jour.

---

## 16. Critères d’acceptation globaux

Le chantier est validable si :

- les pages FR existantes continuent de fonctionner ;
- `/apps/{slug}/#support` fonctionne pour chaque page app française existante ;
- `/en/apps/` existe ;
- `/en/apps/{slug}/` existe pour chaque app retenue ;
- `/en/apps/{slug}/#support` fonctionne ;
- `/en/contact/` existe ;
- les liens contact sont localisés ;
- les politiques de confidentialité standard ne sont plus en onglets multilingues ;
- Siturem conserve FR, EN, ES, DE ;
- la FAQ, le support et le bouton contact sont cohérents ;
- canonical et hreflang sont corrects ;
- le sitemap contient les routes EN ;
- les tests passent ;
- la génération Nuxt passe ;
- le check SEO passe ou est explicitement étendu.

---

## 17. Convention de commit

```bash
git commit -m "feat: add English app pages and localized support flow

- Add /en/apps routes without i18n module
- Add /en/contact support entry point
- Ensure #support anchors on French and English app pages
- Localize app privacy display except Siturem multilingual policy
- Add localized SEO metadata and hreflang links
- Update TODO.md with implementation checklist"
```
