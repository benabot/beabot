---
title: Typographie et éco-conception
description: La typographie joue un rôle central dans l’éco-conception web, à la fois comme composant graphique et comme source de consommation de ressources. Cet article analyse ses impacts réels et propose des choix typographiques plus sobres et plus pertinents.
chapo: La typographie joue un rôle central dans l’éco-conception web, à la fois comme composant graphique et comme source de consommation de ressources. Cet article analyse ses impacts réels et propose des choix typographiques plus sobres et plus pertinents.
seo:
  title: Typographie et éco-conception
  description: La typographie joue un rôle central dans l’éco-conception web, à la fois comme composant graphique et comme source de consommation de ressources. Cet article analyse ses impacts réels et propose des choix typographiques plus sobres et plus pertinents.
date: 2025-12-15
updatedAt: 2025-12-15
temps: 10
tag: ['WebDesign', 'Typographie', 'Eco-conception']
---

Cette dernière décennie a vu l'émergence et la suprématie du recours aux polices web. En 2010, Google en mettant à disposition de chacun une multitude de polices gratuites a grandement contribué à un web graphiquement plus varié (relativisons : il y a 977 polices sur Google Fonts et la plupart des sites n'en utilisent que quelques-unes, la Roboto essentiellement). Cependant, ce service a un coût environnemental non négligeable. Chaque police nécessite une requête HTTP et pèse autant qu'une image optimisée (177 ko pour la Roboto non compressée). Certes, on pourra m'objecter que la plupart des sites sont réalisés avec les mêmes Google Fonts et que celles-ci sont en cache dans tous les navigateurs. Je préfère ne pas me reposer sur un élément qui ne dépend pas de moi. De plus, un cache de navigateur, peut-être (et doit être) vidé par l'internaute.
Au risque de faire hurler les designers web, et j'en suis un, on peut idéalement se passer de charger des polices web tout en réalisant un véritable travail graphique.
Avant de recourir à une telle « extrémité », il existe de multiples solutions pour optimiser l'usage des polices web.

## Les polices web : se limiter

Sur cet aspect encore l'éco-conception rejoint les problématiques liées au design. Dans les manuels de graphisme, il est de coutume de recommander un usage modéré du nombre de polices. En général on utilisera une sérif pour les titres et une sans-sérif pour le corps de texte. Ou l'inverse.
Ce principe, graphiquement efficace, permet de limiter les ressources chargées par la page web.
En allant un peu plus loin, on pourrait se dire qu'utiliser une police dans ses différentes déclinaisons (graisses) serait encore plus vertueux. Arial black pour tel élément, Arial bold pour autre, Arial regular ensuite et sa version Thin pour le reste. Concernant le graphisme c'est très efficace. Mais pour de la consommation de ressources, cela revient à charger plusieurs polices. Résultat identique.
Voyons concrètement comment fonctionne Google Fonts. Vous choisissez une police et éventuellement ses graisses. Google vous fournit un lien vers une feuille de style CSS via un CDN. Dans cette feuille de style, vous aurez autant de propriétés @font-face que de polices/graisse. Ces propriétés si elles sont appelées activeront la police en question (Google la cherche sur votre ordinateur dans un premier temps, si elle n'est pas présente il la téléchargera).
Nous avons donc une première requête HTTP pour le CSS puis d'autres pour chacune des polices activées et absentes de l'ordinateur du client. À cela, il convient d'ajouter le poids de la police. Google Fonts est un service vraiment intéressant à condition de se fixer des limites et de faire un solide travail de maquettage graphique en amont afin d'utiliser uniquement ce qui est nécessaire. Remarquons que Google, soucieux de la vitesse de chargement des pages comme critère de référencement, a mis en place une jauge pour vous indiquer l'impact de vos choix en termes de rapidité.

## Charger une police spécifique : seulement si on y est contraint

La propriété CSS @font-face permet de charger des polices vers le poste de l'internaute. Selon moi, cette solution ne doit être retenue uniquement si le client a une exigence typographique très particulière liée à sa charte graphique. Un usage modéré des polices web avec la mise en cache et l'utilisation d'un cdn reste préférable.

## Polices système

Plutôt que de charger une police externe on peut utiliser une police présente sur l'ordinateur du client avec la propriété CSS font-family. Problème : tout le monde ne possède pas les mêmes polices, cela dépend de l'OS notamment. Il convient alors d'en proposer plusieurs, la première disponible sera celle utilisée. Problème encore, on ne peut plus être certain de quelle police s'affichera sur l'écran, cela rend le travail typographique (règles d'espacement, de taille des caractères) aléatoire et risque de casser notre mise en page.
Cependant il existe quelques polices largement présentes, quel que soit l'OS (la Georgia, l'Arial et la Verdana sont largement sur tous les Mac ou PC, sur les mobiles c'est plus aléatoire : [http://www.awayback.com/index.php/2010/02/03/revised-font-stack/](http://www.awayback.com/index.php/2010/02/03/revised-font-stack/))

Ce choix, plutôt restreint, peut paraitre terne au regard des polices web plus « modernes ». Néanmoins, avec un peu de CSS, on va pouvoir améliorer cela.

## System font stack

Une autre possibilité, plus élégante, consiste à employer la police du système d'exploitation (OS) de l'internaute. Les utilisateurs de Window auront la police que déploie celui-ci pour son interface, ceux d'IOS celle d'IOS etc. C'est une méthode utilisée par les sites Medium, Github et l'interface admin de WordPress.
Il y a plusieurs avantages à procéder de la sorte, d'une part en termes d'UX on crée une continuité graphique entre l'interface de l'OS et le site. D'autre part, la police de l'OS est forcément disponible et l'OS est optimisé pour utiliser cette police. Sans faire télécharger quoi que ce soit à l'utilisateur, vous aurez accès à une police de qualité, bien crénée ainsi qu'à ses différentes graisses.

Il suffit, presque, de choisir system-ui en valeur pour la propriété font-family. Je dis presque, car system-ui n'est pas reconnu par tous les navigateurs (IE et Edge, forcément, et Firefox) et qu'on ne peut pas appeler la police système avec Windows de cette manière. Il faut rajouter d'autres valeurs après system-ui pour être certain d'afficher la police de l'OS.

```css
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Oxygen, Cantarell, sans-serif;
}
```

Cette méthode permet de choisir à coup sûr quelle police sera affichée sur le navigateur du client en fonction de son OS. Cependant, on en revient à notre problème de police dans la mise en page avec toutefois le bénéfice d'accéder maintenant à des polices qualitatives. Nous avons une belle typo, maintenant améliorons tout cela avec du CSS.

## Le CSS à la rescousse

Comme toujours, on peut presque tout réaliser à l'aide du CSS. En chargeant une seule police web d'une seule graisse (ou en utilisant les polices système, auquel cas il faudra faire de nombreux essais) il est tout à fait possible d'obtenir des variations typographiques pointues.

### Impératif : les unités relatives

Pour garantir un bon ajustement de nos polices au sein de la mise en page et comme on doit toujours penser responsive, il est important de travailler avec des valeurs relatives. Plus de **px** pour la taille des polices. À la place on peut utiliser le em ou le rem. Cela améliorera par ailleurs l'accessibilité de votre site, car la taille des caractères sera relative à la taille de caractère réglé par l'utilisateur sur son navigateur (par défaut 18px).
On peut aussi donner une taille aux caractères en fonction de la largeur de l'écran avec l'unité **vw** (solution plus adapté aux titres ou aux « gros » éléments typographiques. Prendre garde à indiquer des valeurs différentes dans les **@media-queries**)

```css
/* Le titre fera toujours 11% de la largeur de l'écran */
H1 {
  font-size: 11vw;
}
```


### Largeur des paragraphes

Toujours dans ce sens, mais également pour améliorer la lisibilité de nos textes, on peut limiter la largeur de nos paragraphes d'un certain nombre de caractères (en général on recommande 75 signes max) avec l'unité **ch** qui correspond à la largeur du zéro de la police utilisée.

```css
/* Les paragraphes ne feront jamais plus que 75 signes en largeur */
p {
  max-width: 75ch;
}
```



### Un peu de graisse

Pour la graisse il y a bien entendu la propriété **font-style** avec ces valeurs **bold** et **italic** qui permettent de synthétiser un gras et un italique artificiels si la police n'en propose pas. Au cas où la police propose un jeu de graisse composite (c'est le cas de la plupart des polices système, au pire vous aurez du gras et du normal) la propriété **font-weight** permet d'accéder à cette variété (valeurs de 100 à 900, 100 étant de l'ultra Thin, 400 équivaut à la graisse normale et 900 à l'ultra bold).
**Font-stretch** va vous autoriser de plus ou moins condenser les caractères. Attention cela ne fonctionne uniquement que sur une police qui comprend des variantes condensées.

### Espacement des caractères

Un autre aspect trop souvent négligé : il est possible de jouer sur l'espacement des caractères avec la propriété **letter-spacing**. Les polices système sont normalement de la belle ouvrage et correctement crénées (si leur crénage ne vous convient pas vous pouvez le désactiver avec la propriété **font-kerning: none;**). En modifiant l'espacement entre les caractères, on peut apporter de la variété typographique en n'utilisant qu'une seule police.
Vous pouvez le [tester ici](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_letter-spacing) (comme toujours il est préférable d'utiliser des valeurs relatives).
Attention toutefois à rester lisible et à bien tester son usage sur chacune des polices que vous souhaitez utiliser.

### Interligne

Toujours au rayon des propriétés CSS qui permettent à peu de frais de proposer une expérience typographique riche : **line-height**. Elle permet de varier l'espacement entre les lignes et fonctionne de pair avec **font-size**. On préconise un interligne de 1,5 fois la taille de la police pour une bonne lisibilité, en jouant avec cette valeur vous pourrez introduire de fines variations dans votre mise en page qui feront la différence.

### Font-smooth et text-rendering : non merci

Je ne cherche pas l'exhaustivité, il existe encore d'autres propriétés CSS plus ou moins utiles pour s'amuser avec les polices et le texte. Cependant, en voici deux dont je ne recommande pas l'usage : **font-smooth** et **text-rendering**. Font-smooth permet de « corriger » et de lisser les polices dont l'affichage pixelisé peut être problématique sur des écrans de type retina. Text-rendering dit au navigateur s'il doit optimiser les polices ou non.
Dans le cadre d'une démarche d'éco-conception, **font-smooth** et **text-rendering** sont à proscrire, car si vous optez pour les polices systèmes, vous utilisez des polices optimisées pour l'affichage sur leur système, d'autre part, cette propriété va solliciter inutilement votre processeur pour un résultat superflu.

## A vous de jouer

J'espère vous avoir convaincu qu'un usage créatif de la typographie est possible tout en s'inscrivant dans une démarche d'éco-conception. Voici ce qu'il faut retenir :

-   limitez le recours aux polices web du type Google Fonts
-   préférez utiliser les polices présentes sur l'ordinateur du visiteur
-   domptez l'affichage de ces polices grâce au system font stack
-   soyez créatifs avec le CSS

> Pour en savoir plus :
>
> - [Les polices par défaut selon les différents systèmes d'exploitation](https://www.granneman.com/webdev/coding/css/fonts-and-formatting/default-fonts)
> - [Le system font stack en détails](https://fontsarena.com/blog/operating-systems-default-sans-serif-fonts/)
> - [Un system font stack régulièrement mis à jour](https://gist.github.com/don1138/52a49e5ae896d82820f7ec2d0e1dea6d)
