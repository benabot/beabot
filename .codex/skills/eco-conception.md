# Skill — Éco-conception web

## But

Produire une solution sobre, utile, maintenable et compatible avec des terminaux modestes.

## Principe directeur

L’éco-conception ne consiste pas à “faire moins” par posture. Il s’agit de **faire mieux avec moins**.

## Ordre d’arbitrage

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

- le besoin est-il réel et précisément défini ?
- peut-on retirer une dépendance ?
- peut-on servir plus statique ?
- le JS ajouté est-il indispensable ?
- a-t-on limité les images et requêtes ?
- le rendu reste-t-il fluide sur appareil moyen ?
