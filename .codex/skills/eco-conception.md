# Skill — Éco-conception web

## But

Produire une solution sobre, utile, maintenable et compatible avec des terminaux modestes.

Cette fiche locale se lit pour un audit, une optimisation ou un arbitrage de conception BeAbot. Elle complète `AGENTS.md` ; son format Markdown actuel ne constitue pas une skill native `SKILL.md` ni un agent configuré.

## Références W3C

Sources consultées le **24 octobre 2026** :

- [Web Sustainability Guidelines (WSG)](https://www.w3.org/TR/web-sustainability-guidelines/) : recommandations et critères de réussite.
- [WSG Impact Ratings (WSG-IR)](https://www.w3.org/TR/wsg-ir/) : aide à la priorisation ; [version consultée du 16 octobre 2026](https://www.w3.org/TR/2026/DNOTE-wsg-ir-20261016/).

WSG-IR est un **Group Note Draft**, travail en cours non endossé par le W3C ou ses membres. Vérifier sa version avant de réutiliser une cotation.

### Lire les évaluations d’impact

- Dimensions : **People** (personnes), **Planet** (environnement), **Prosperity** (prospérité).
- Par dimension : `Indeterminate = 0`, `Low = 1`, `Medium = 2`, `High = 3`.
- Horizon de réalisation de l’impact : `Short = 3`, `Medium = 2`, `Long = 1`. Cet horizon ne mesure pas l’effort d’implémentation.
- Score = somme des trois dimensions + points de l’horizon, comptés une seule fois.
- Exemple : optimisation des médias = `1 + 3 + 2 + 3 = 9`.
- Les cotations concernent chaque recommandation, sans cumul entre recommandations. Un impact indéterminé reste à examiner ; zéro traduit l’incertitude.

## Méthode d’audit et de priorisation pour BeAbot

1. Définir la page, le parcours et le besoin utilisateur concernés ; relever l’état initial dans les sources et le rendu réels.
2. Couvrir les leviers utiles au périmètre : parcours et accessibilité, code et médias, hébergement, utilité et maintenance du contenu. Pour l’hébergement, distinguer les données vérifiées des informations fournisseur manquantes.
3. Relier chaque constat à la recommandation WSG pertinente, avec son lien et la version consultée. Reprendre la cotation WSG-IR publiée et sa justification ; signaler une correspondance absente ou incertaine.
4. Prioriser selon le problème observé, la cotation, la portée locale, l’effort, les risques et les dépendances. Le score seul ne décide pas de l’ordre des travaux ; les règles BeAbot ci-dessous restent applicables.
5. Associer chaque action à une preuve avant/après : octets transférés, requêtes, poids JS/CSS, travail CPU/GPU si pertinent, cache/compression observés ou réussite du parcours et contrôles d’accessibilité. Indiquer outil, conditions et limites.

Format conseillé pour chaque recommandation : **constat et preuve → lien WSG/version → People/Planet/Prosperity, horizon et score publiés → action locale, effort et risque → validation attendue**.

Un score WSG-IR n’est ni une mesure des émissions du site ni une certification BeAbot. Ne pas additionner les scores pour produire une note du site. Un meilleur Lighthouse, EcoIndex ou poids transféré ne suffit pas à annoncer un gain carbone chiffré : expliciter la méthode et les hypothèses de toute estimation.

## Principe directeur

L’éco-conception ne consiste pas à “faire moins” par posture. Il s’agit de **faire mieux avec moins**.

## Ordre d’arbitrage

Point de départ local, à ajuster avec les constats de l’audit et la méthode ci-dessus :

1. supprimer les fonctionnalités non essentielles
2. simplifier le parcours utilisateur
3. réduire les dépendances
4. réduire le poids transféré
5. réduire le travail du navigateur
6. réduire les appels réseau et serveur
7. mesurer puis ajuster

## Règles concrètes

### Fonctionnel
- éliminer le superflu
- préférer pagination à scroll infini
- limiter carrousels, animations, widgets tiers
- respecter la réduction des animations demandée par l’utilisateur et permettre l’arrêt des animations concernées
- proposer de l’asynchrone si cela évite des blocages

### Front
- viser un DOM simple et peu profond
- préférer HTML/CSS aux artifices JS
- n’utiliser JavaScript que lorsqu’il apporte un vrai gain fonctionnel
- éviter les bibliothèques lourdes pour des besoins simples
- favoriser les pages statiques
- lazy-load seulement ce qui est réellement non critique

### Typographie
- privilégier la system font stack
- éviter les web fonts externes
- travailler la hiérarchie typographique avec CSS avant d’ajouter une fonte

### Images et médias
- compresser avant import
- servir le bon format et la bonne taille
- déclarer dimensions / ratio pour éviter les décalages
- préférer SVG pour l’interface
- éviter autoplay vidéo / audio
- limiter les GIF animés

### Réseau et serveur
- limiter le nombre de requêtes HTTP
- externaliser CSS/JS pour le cache
- compresser les fichiers texte
- définir une politique de cache claire
- éviter les redirections inutiles

## Pour BeAbot

- cohérent avec `AGENTS.md`
- pas de scripts tiers inutiles
- pas de web fonts externes
- pas d’effet visuel gratuit
- toute solution doit être compatible avec un blog SSG orienté SEO

## Checklist rapide avant merge

- les recommandations sont-elles sourcées et leur applicabilité justifiée ?
- a-t-on distingué cotation publiée, bénéfice attendu et mesure locale ?
- le besoin est-il réel et précisément défini ?
- peut-on retirer une dépendance ?
- peut-on servir plus statique ?
- le JS ajouté est-il indispensable ?
- a-t-on limité les images et requêtes ?
- le rendu reste-t-il fluide sur appareil moyen ?
- les preuves avant/après et les limites de validation sont-elles indiquées ?
