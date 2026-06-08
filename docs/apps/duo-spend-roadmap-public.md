# DuoSpend - Roadmap publique editorialisee

Date : 2026-06-04

## Objectif

Documenter une future page publique de roadmap pour DuoSpend, sans l'implementer maintenant.

La page doit renforcer la confiance autour de DuoSpend, montrer que l'app evolue, rendre visible une partie de la valeur future de DuoSpend Pro et collecter des idees utilisateurs sans transformer la roadmap en promesse contractuelle.

Cette page n'est pas le GitHub Project DuoSpend. Le GitHub Project reste l'outil interne de pilotage. La page publique doit etre simplifiee, editorialisee et comprehensible par une personne non technique.

## URL cible

URL recommandee pour la version francaise :

```text
/apps/duo-spend/a-venir/
```

Alternative acceptable si l'architecture du site prefere les slugs anglais pour les pages produit :

```text
/apps/duo-spend/roadmap/
```

Recommandation : utiliser `/apps/duo-spend/a-venir/` pour rester coherent avec une page produit francaise grand public. L'equivalent anglais pourra etre documente plus tard si la page est validee :

```text
/en/apps/duo-spend/roadmap/
```

## Positionnement editorial

La roadmap publique doit rester :

- lisible ;
- sobre ;
- non technique ;
- indicative ;
- orientee utilisateur ;
- compatible avec le positionnement privacy-friendly de DuoSpend.

Elle doit eviter :

- les dates promises ;
- "garanti" ;
- "sera disponible le..." ;
- le jargon GitHub ;
- les noms internes d'issues ;
- les details de migration ou de modele de donnees ;
- les engagements trop precis avant validation produit.

Note obligatoire a afficher :

```text
Cette feuille de route est indicative. Les priorites peuvent evoluer selon les retours utilisateurs, la qualite attendue et les contraintes techniques.
```

## Statuts publics

Les statuts publics doivent etre plus simples que les champs internes du GitHub Project.

| Statut public | Sens | Source interne possible |
|---|---|---|
| Disponible | Fonctionnalites deja livrees ou visibles dans l'app | Release actuelle / page produit |
| En cours | Qualite, corrections proches, ajustements deja actifs | `v1.0.x` |
| Prochainement | Fonctionnalites planifiees et coherentes avec la prochaine etape produit | `v1.1` |
| Plus tard | Fonctionnalites ambitieuses mais plausibles | `v1.2`, `v2.0` |
| A l'etude | Idees non promises, dependantes de retours ou de contraintes | `backlog`, `icebox`, `v2.x` |

## Structure de page proposee

### 1. Hero

Objectif : presenter la page sans effet d'annonce excessif.

Contenu possible :

```text
Ce qui arrive dans DuoSpend

DuoSpend evolue autour d'une idee simple : aider un couple a suivre ses projets communs et savoir qui doit combien a qui, sans compte bancaire connecte, sans pub et sans tracking.
```

CTA principal :

```text
Voir ce qui arrive
```

CTA secondaire :

```text
Proposer une idee
```

### 2. Disponible

Fonctionnalites deja livrees :

- projets de depenses a deux ;
- budget par projet ;
- depenses 50/50 ou personnalisees ;
- calcul "qui doit combien a qui" ;
- export PDF si disponible dans la version publiee ;
- widgets Pro si disponibles dans la version publiee ;
- app sans compte bancaire, sans publicite, sans tracking.

Regle editoriale : ne lister que ce qui est vraiment disponible dans la version publique ou TestFlight retenue pour communication.

### 3. En cours

Fonctionnalites reellement proches ou en finition :

- polish v1.0.x ;
- normalisation de l'affichage des devises ;
- corrections TestFlight / App Store ;
- ajustements UI legers ;
- amelioration de la lisibilite des montants.

Exemple de wording :

```text
Nous travaillons d'abord sur la clarte : montants mieux alignes, libelles plus nets et petits ajustements issus des tests.
```

### 4. Prochainement

Fonctionnalites planifiees, mais sans date :

- personnalisation des projets ;
- profils des deux membres du couple ;
- icones alternatives de l'app ;
- micro-celebrations sobres ;
- templates de projets.

Angle editorial :

```text
L'objectif est de rendre DuoSpend plus personnel sans le rendre plus complique.
```

### 5. Plus tard

Fonctionnalites plus ambitieuses :

- stats avancees ;
- categories ;
- recherche et filtres ;
- export PDF enrichi ;
- conversion manuelle de devises ;
- synchronisation entre deux comptes iCloud.

Angle editorial :

```text
Ces sujets demandent plus de soin : ils touchent a la lisibilite, a la confidentialite ou a la synchronisation des donnees.
```

### 6. A l'etude

Idees non promises :

- conversion automatique de devises ;
- pieces jointes / recus ;
- OCR ;
- integrations plus avancees.

Angle editorial :

```text
Certaines idees sont utiles sur le papier, mais peuvent alourdir l'app ou poser des questions de confidentialite. Elles restent a l'etude.
```

## DuoSpend Pro dans la roadmap

La page peut rendre visible la valeur future de DuoSpend Pro, sans transformer chaque bloc en argumentaire commercial.

Promesse Pro a garder en tete :

```text
DuoSpend Pro = projets illimites, personnalisation, lecture avancee du couple, stats utiles et confort en voyage.
```

Presentation recommandee :

- mentionner clairement les fonctionnalites Pro quand c'est utile ;
- garder une version gratuite saine et credible ;
- ne pas presenter Pro comme une punition ;
- eviter de promettre qu'une fonctionnalite Pro arrivera a une date precise ;
- ne pas decrire les limites Free/Premium avec trop de granularite avant implementation.

## CTA et feedback utilisateur

Deux CTA legers sont recommandes :

```text
Voir ce qui arrive
Proposer une idee
```

### Option A - Mailto simple

Lien possible :

```text
mailto:hello@beabot.fr?subject=Idee%20DuoSpend
```

Avantages :

- immediat ;
- zero outil ;
- coherent avec un lancement sobre ;
- pas de dependance externe ;
- pas de compte utilisateur requis.

Inconvenient :

- tri manuel.

### Option B - Page support / formulaire

Avantages :

- plus propre ;
- peut qualifier les demandes ;
- peut centraliser support, bugs et idees.

Inconvenients :

- demande une page ou un formulaire ;
- peut introduire une dette de maintenance ;
- verifier privacy et anti-spam.

### Option C - GitHub Discussions public

Avantages :

- gratuit ;
- transparent ;
- adapte a un public technique.

Inconvenients :

- compte GitHub requis ;
- moins adapte aux utilisateurs grand public ;
- expose davantage le processus interne.

### Option D - Outil dedie type Featurebase / Canny

Avantages :

- votes ;
- statuts ;
- commentaires ;
- roadmap publique complete.

Inconvenients :

- outil externe ;
- potentiellement payant ;
- trop tot avant traction reelle ;
- peut contredire le positionnement sobre / privacy-friendly si mal configure.

### Recommandation

MVP :

- page statique ;
- CTA "Proposer une idee" vers `mailto:hello@beabot.fr` ou l'email support DuoSpend retenu ;
- tri manuel des retours.

Plus tard :

- GitHub Discussions ou outil dedie seulement si les demandes deviennent regulieres ;
- eviter un outil externe avant d'avoir assez de traction pour justifier sa maintenance.

## Integration future dans l'app DuoSpend

Ne pas implementer maintenant.

Emplacement futur possible : bas des Reglages, section DuoSpend.

Structure indicative :

```text
DuoSpend
- A venir
- Proposer une idee
- Notes de version
- Support
- Confidentialite
```

Contraintes :

- CTA discret ;
- ne pas gener l'usage principal ;
- ouvrir une page web externe ;
- ne pas transformer les reglages en page marketing ;
- ne pas afficher de notification ou de badge pour pousser la roadmap ;
- verifier que les liens respectent les localisations FR/EN.

## Relation avec le GitHub Project interne

Le GitHub Project reste interne.

La page publique ne doit pas :

- exposer les numeros d'issues ;
- exposer les priorites P0/P1/P2 ;
- exposer les champs `Version`, `Track`, `Effort` ;
- exposer les sujets techniques non arbitrés ;
- promettre le contenu exact d'un sprint.

Mapping indicatif :

| Public | Interne |
|---|---|
| En cours | `v1.0.x` |
| Prochainement | `v1.1` |
| Plus tard | `v1.2`, `v2.0` |
| A l'etude | `backlog`, `icebox`, `v2.x` |

La page publique doit etre mise a jour manuellement et volontairement, pas synchronisee automatiquement avec GitHub.

## Hors scope

Ne pas faire dans ce lot :

- creer la page Nuxt ;
- ajouter une route ;
- ajouter un formulaire ;
- ajouter une dependance ;
- ajouter un outil de feedback externe ;
- modifier l'app iOS DuoSpend ;
- connecter GitHub Project au site ;
- publier la roadmap ;
- promettre une date de livraison ;
- ouvrir un canal public de commentaires sans moderation prevue.

## Criteres d'acceptation avant implementation

Avant de creer la page :

- valider le slug FR et l'eventuel slug EN ;
- valider l'email ou canal de feedback ;
- verifier les fonctionnalites vraiment disponibles dans l'app publique ;
- choisir les formulations Free / Pro visibles ;
- verifier que la page reste sobre et indexable ;
- prevoir un lien discret depuis la page DuoSpend existante ;
- prevoir une mise a jour manuelle apres chaque release majeure.
