---
title: La petite boucle, éco-conception d'un thème WordPress
description: Eco-conception et WordPress, cas concret avec un thème WordPress éco-conçu pour le site de la petite boucle.
temps: 3
tag: ['WebDesign', 'WordPress', 'Eco-conception']
---


## Demande/besoins
*[la petite boucle](https://www.lapetiteboucle.fr)* est une association qui collecte des cartouches d’encre et de toner usagés à l’aide d’un triporteur électrique.
Cette association, qui s’inscrit dans une démarche écologique forte, souhaitait refaire son site afin de le remettre au gout du jour tout en minimisant son impact environnemental.
 
## Ancien site
<v-img src="lpb.jpeg" alt="la petite boucle ancien site"></v-img>
L’ancien site de *la petite boucle* était un WordPress réalisé avec un thème enfant de *generatepress*. 
Le site proposait de nombreuses fonctionnalités :
- 2 formulaires de contact
- carte 
- agenda

Ces fonctionnalités étaient mises en œuvre à l’aide de plugins qui activaient JQuery dans WordPress et chargeaient leurs CSS partout dans le site.
De même, une autre bibliothèque JavaScript ( GSAP ) était requise pour les nombreuses animations.

Enfin, ce site avait recours à 4 polices de caractère différentes et donc autant de requêtes HTTP vers Google Font.

Notons que les images, le CSS et le JS étaient optimisés ( réduction du poids, minimisation et concaténation ) 

Au final la page d’accueil du site pesait **1,27 Mo** et présentait **27 requêtes HTTP**.

## Nouveau site
<v-img src="lpb-new.jpeg" alt="la petite boucle nouveau site"></v-img>
 Après une phase d’échanges actifs avec le client pour déterminer quels étaient ses besoins et ses préférences graphiques, nous avons convenu de développer un thème WordPress et de ne retenir que des fonctionnalités réellement nécessaires.
 
### Éco-conception d’un thème WordPress
Ce thème a été conçu avec l’idée de réduire l’impact environnemental du site. À chaque phase du projet, l’éco-conception était au centre des préoccupations.
Il s’agit de réduire au maximum les charges réseau tant en quantité qu’en nombre ( images, typos, styles, scripts ) et d’optimiser le traitement des ressources ( requêtes à la base de données, complexité du DOM, etc. ) afin de moins solliciter les terminaux. Le site s’affichera correctement sur un vieux terminal. 

### Fonctionnalités
Le projet correspond aux besoins en fonctionnalités du client ( formulaire de contact, modèle d’article, modifications sur les pages ) tout en allégeant le cœur de WordPress.
Ainsi, ce thème ne supporte pas les styles des blocs Gutenberg ( 79 k en moins, tout de même ! ).
Les différentes fonctionnalités dans l’admin de WordPress ( formulaire de contact y compris ) ne nécessitent pas l’adjonction de plugins supplémentaires.

### Typographie
Le site repose sur un travail typographique soigné. Il n’a cependant pas recours aux web-fonts.
À la place, il utilise, pour les polices **sans sérif**, un *system font stack* ( on utilise par défaut la police du système d’exploitation ) :

```	css
--global--font-primary:  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
```

Les polices **monospace** sont rendus grâce à un recours à des *safe fonts* ( polices très répandues sur les terminaux des utilisateurs, quels qu’ils soient ) :

```css
--global--font-secondary : Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
```


### Iconographie
Il est fait recours autant que possible aux images en svg. Celles-ci sont chargées grâce à un *sprite cheet* unique.
Le choix d’images matricielles traité en duotone permet de réduire le poids initial des images et de pousser plus loin leur compression ( avec dégradation ) sans que cela soir visible dans le rendu final.

### CSS/HTML
Avoir une bonne logique sémantique du HTML et un *design system* permet de limiter la taille du CSS notamment pour les *media queries*. Le CSS est structuré de manière à être le plus réutilisable possible tout en gardant une bonne maintenabilité.

On recourt aux ```div``` uniquement quand cela est nécessaire.
Résultat, les pages comprennent peu d’éléments du DOM. Ce qui favorise l’accessibilité et la lisibilité pour les robots tout en allégeant le traitement de l’affichage des pages par les navigateurs. 

### JavaScript
Le JavaScript n’est pas utilisé sur ce site. JQuery est désactivé par défaut dans le thème.

## Bilan
Au final, le site de *la petite boucle* a subi une cure de jouvence tant au niveau du design, plus proche des canons actuels, que des fonctionnalités qu’il propose. Celles-ci correspondant à des besoins réels, tournés vers l’utilisateur.
Il a également suivi une cure d’amaigrissement : **la page d’accueil ne représente plus que 295 ko et 9 requêtes HTTP**.

Le site, éco-conçu, répond d'avantage aux besoins et à l’identité du client tout en mettant en œuvre une économie de moyens pour parvenir à ce résultat.

> Découvrir le site de [la petite boucle](https://www.lapetiteboucle.fr)
> 
> Explorer le [thème WordPress sur GitHub](https://github.com/benabot/lapetiteboucle)