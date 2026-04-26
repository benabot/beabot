# Skill — Playwright pour BeAbot

## Objectif

Utiliser Playwright pour vérifier les parcours critiques et les régressions visibles du site BeAbot, sans écrire une suite E2E lourde, fragile ou coûteuse à maintenir.

Le projet est un site **Nuxt 3 statique (SSG)** orienté :
- éco-conception,
- SEO,
- accessibilité,
- crédibilité professionnelle.

Les tests doivent rester proportionnés à cette réalité.

---

## Quand utiliser ce skill

Utiliser Playwright quand il faut :

- valider un **parcours utilisateur clé** ;
- vérifier qu’une page importante **rend correctement dans un vrai navigateur** ;
- contrôler une **navigation interne** ;
- tester un **formulaire** ;
- détecter une **régression UI légère** sur une vue stable ;
- vérifier l’absence d’**erreurs console bloquantes** ;
- confirmer des éléments visibles utiles au SEO et à l’accessibilité :
  - title,
  - H1,
  - liens,
  - boutons,
  - structure générale,
  - navigation clavier simple.

---

## Quand ne pas utiliser Playwright

Ne pas utiliser Playwright pour :

- tester de la logique métier déjà couverte par des tests unitaires ;
- tester chaque détail cosmétique ;
- multiplier les screenshots sans besoin clair ;
- vérifier des animations décoratives ;
- écrire des scénarios longs et fragiles ;
- compenser une absence de réflexion sur l’architecture du composant.

Si un test est trop dépendant de la structure DOM interne, il est probablement mal conçu.

---

## Priorités spécifiques BeAbot

Toujours prioriser :

1. **Pages clés**
   - `/`
   - `/eco-conception/`
   - `/portfolio/`
   - `/contact/`
   - une page article représentative

2. **Parcours critiques**
   - navigation entre pages principales ;
   - consultation d’un article ;
   - accès au portfolio ;
   - envoi ou validation du formulaire de contact ;
   - comportement mobile simple.

3. **Signaux de qualité**
   - aucun plantage JS visible ;
   - pas d’erreur console bloquante ;
   - H1 présent ;
   - titre cohérent ;
   - navigation fonctionnelle ;
   - éléments interactifs accessibles.

---

## Philosophie de test

### 1. Peu de scénarios, forte valeur

Préférer 4 à 8 bons tests qu’une suite massive.

Chaque test doit couvrir un besoin réel :
- « la homepage charge et mène aux sections clés »
- « la page contact reste utilisable »
- « un article est lisible et bien structuré »
- « le portfolio reste navigable sur mobile »

### 2. Tests robustes

Préférer :
- `getByRole()`
- `getByLabel()`
- `getByText()` avec discernement
- attributs dédiés si nécessaire (`data-testid` en dernier recours)

Éviter :
- sélecteurs CSS profonds ;
- dépendance à la hiérarchie exacte du DOM ;
- texte trop volatile ;
- classes utilitaires comme contrat de test.

### 3. Pas d’attente artificielle

Interdit sauf cas exceptionnel :
- `waitForTimeout(...)`

Préférer :
- `expect(locator).toBeVisible()`
- `expect(page).toHaveURL(...)`
- `waitForLoadState()` si justifié
- attente sur un élément métier réellement attendu

### 4. Non-régression visuelle légère seulement

Les screenshots sont autorisés uniquement :
- sur des vues stables ;
- sur peu de pages ;
- sur des composants ou sections à forte valeur ;
- si le risque de faux positifs reste faible.

Pas de snapshots massifs sur tout le site.

---

## Ce qu’il faut vérifier en priorité

### Homepage `/`
- le chargement sans erreur bloquante ;
- un `<title>` pertinent ;
- un seul H1 principal ;
- CTA visibles et utilisables ;
- navigation vers blog / portfolio / contact ;
- absence de régression majeure sur mobile.

### Blog `/eco-conception/`
- listing accessible ;
- liens vers les articles fonctionnels ;
- structure claire ;
- H1 présent ;
- navigation interne stable.

### Article
- title cohérent ;
- H1 présent ;
- contenu principal visible ;
- liens internes utilisables ;
- images importantes rendues correctement si présentes.

### Portfolio `/portfolio/`
- hero visible ;
- cartes projet visibles ;
- filtres utilisables si présents ;
- liens projet / contact fonctionnels ;
- comportement responsive simple.

### Contact `/contact/`
- champs accessibles ;
- labels présents ;
- soumission ou validation cohérente ;
- message d’erreur ou de succès compréhensible selon le cas.

---

## Accessibilité minimale à vérifier

Playwright ne remplace pas un audit complet, mais doit au moins aider à contrôler :

- présence d’un H1 ;
- boutons et liens accessibles par rôle ;
- labels de formulaire ;
- focus clavier simple sur les éléments critiques ;
- absence d’éléments interactifs inutilisables ;
- texte visible et structure compréhensible.

---

## SEO visible à vérifier

Sur les pages importantes, contrôler au minimum :

- `title` non vide et pertinent ;
- H1 présent ;
- canonical ou métadonnées si la tâche l’exige ;
- absence de contenu principal vide côté rendu ;
- liens internes cohérents.

Ne pas transformer les tests E2E en audit SEO exhaustif.

---

## Console et erreurs

Pour les pages critiques, surveiller :
- erreurs console ;
- erreurs réseau majeures ;
- exceptions JS non gérées.

Tolérance faible pour :
- erreurs runtime ;
- ressources essentielles cassées ;
- navigation interrompue.

---

## Contexte Nuxt 3 / SSG

Pour BeAbot :

- tester de préférence le **site généré** ou un environnement proche du rendu réel ;
- éviter les hypothèses propres au mode dev ;
- privilégier les scénarios compatibles avec une logique de site statique ;
- ne pas écrire des tests dépendants d’implémentations internes Nuxt si ce n’est pas nécessaire.

---

## Règles d’écriture

### Bonnes pratiques
- un test = une intention claire ;
- nommer les tests avec un résultat attendu ;
- garder les scénarios courts ;
- mutualiser la config sans rendre la lecture opaque ;
- commenter seulement quand c’est utile.

### À éviter
- gros tests fourre-tout ;
- assertions redondantes ;
- dépendance à l’ordre exact du DOM ;
- assertions sur des détails de style non essentiels ;
- code de test plus complexe que la fonctionnalité testée.

---

## Exemples de scénarios pertinents

- la homepage affiche son titre principal et permet d’aller vers le portfolio ;
- la page blog liste les articles et ouvre une fiche article ;
- la page contact affiche les champs attendus et bloque une soumission vide ;
- le portfolio reste lisible en viewport mobile ;
- une page article ne déclenche pas d’erreur console bloquante.

---

## Arbitrage éco-conception

Les tests E2E ont un coût :
- exécution,
- maintenance,
- temps humain.

Donc :
- tester peu ;
- tester juste ;
- tester les parcours qui protègent vraiment la qualité du site ;
- supprimer les scénarios redondants ou décoratifs.

Une suite Playwright sobre est préférable à une usine à gaz.