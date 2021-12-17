---
title: Qu’est-ce que l’éco-conception web
description: Sujet en vogue, l’éco-conception web, victime de son succès, est sujet d’une vague de greenwashing. Par delà les malentendus, tentons de clarifier le sujet.
temps: 15
tag: ['WebDesign', 'WordPress', 'Eco-conception']
---

L’urgence climatique nous impose de penser notre modèle de développement. Le numérique en tant qu’émetteur de gaz à effet de serre tout autant que vecteur d’une transformation de nos modes de vie est au cœur des changements contemporains. S’interroger sur la finalité du numérique, ses enjeux et ses <a  href="/eco-conception/La-consommation-energetique-du-numerique" class="lien--vert">impacts sur l’environnement</a> c’est aussi comprendre notre monde et se donner les moyens d’agir.
Plusieurs possibilités s’offrent à nous pour dépeindre l’éco-conception numérique, des plus techniques aux plus superficielles. J’ai choisi ici une approche ouverte et généraliste, accessible sans connaissance en programmation.
Pour ceux qui veulent du code, rassurez-vous, des articles plus techniques émailleront ce blog au fil du temps. Néanmoins, théoriser nos pratiques, réfléchir à nos choix technologiques ne peut qu’élargir l’horizon des développeurs.
  
## Définition en creux 
	
 Avant de décrire en détail ce que signifie selon moi une démarche d’éco-conception d’un site internet, tordons le cou à quelques idées reçues. L’éco-conception d’un projet web, ce n’est pas : 


- 	**du code magique qui rendrait le site plus soutenable**, évidemment le code doit être optimisé, mais a lui seul il n’est pas un levier significatif pour réduire l’empreinte carbone du site ;
- 	**se soucier uniquement de l’hébergement** alors que le site consommerait beaucoup d’énergie ;
- 	**que de l’optimisation** (pour accélérer le temps de chargement du site), certes l’optimisation web et l’éco-conception partagent beaucoup de techniques, mais ne répondent pas tout à fait aux mêmes objectifs ;
- 	**croire que c’était mieux avant** et rester sur de vieilles technos (2 exemples : PHP 7 est beaucoup plus performant que ses prédécesseurs. Un site « optimisé » pour un vieux navigateur comme Internet Explorer, c’est du code en plus pour faire tourner le site. Qui plus est sur un logiciel très énergivore comparé à des navigateurs modernes  ;
- 	avoir un site très engagé, en ce qui concerne le discours en faveur de la protection de l’environnement, mais qui consommerait beaucoup de ressources - **la fin ne justifie pas les moyens** ;  
- à l’inverse, produire un site laid qui aurait le mérite d’accorder son discours à sa mise en œuvre, mais qui, faute d’attrait, ne capterait pas l’attention de ses visiteurs.

L’éco-conception, ce n’est rien de tout cela en particulier, mais c’est l’ensemble de ces points, plus d’autres, qu’on articulera pour répondre à des objectifs.

## Objectifs

Une définition large et abstraite de l’éco-conception d’un projet web pourrait être : intégrer la question du respect de l’environnement à chacune des étapes de l’élaboration du projet dès les premières esquisses du besoin. Cette question sera centrale au travers des éléments du projet et sur la durée de son cycle de vie. C'est l'esprit de la norme iso 14062:2002 : [Intégration des aspects environnementaux dans la conception et le développement de produit](https://www.iso.org/fr/standard/33020.html).
 
Définition complète, mais vague. 

Nous savons concrètement quels sont les impacts du numérique sur l’environnement : consommation énergétique des infrastructures d’internet (les serveurs, les réseaux et les terminaux) et surtout la fabrication de ces différents équipements. Afin de limiter les impacts environnementaux d’internet, on peut se fixer l’objectif, plus concret, de restreindre les échanges (électriques) — en nombre et en taille — entre les différents composants du réseau et de limiter les traitements complexes qui vont sursolliciter nos machines. **On limite ainsi la consommation électrique de nos appareils durant leur phase d’usage et surtout leur usure et donc leur remplacement prématuré, car le principal levier pour limiter les impacts environnementaux du numérique c’est d’éviter l’obsolescence des appareils/équipements (3/4 des émissions de gaz à effet de serre en équivalent carbone provient de la fabrication des équipements)**.

Je suis convaincu qu’internet demeure un formidable outil pour élaborer et promouvoir un modèle d’être au monde plus responsable. À l’évidence, communiquer par ce média consomme de l’énergie et génère une empreinte carbone, comme toute activité humaine. Cependant, échanger, s’informer et générer du commun à l’aide d’internet contribue, aussi, à la prise de conscience de l’urgence climatique. S’informer pour agir, c’est aussi ça le web.
 
Avançons méthodologiquement et tentons de nous appuyer sur ces éléments pour agir pas à pas en définissant des objectifs des plus globaux aux plus précis et quantifiables.


### Web éthique

<div class="citation">Un travelling est une affaire de morale <br />- <span class="auteur">J. L. Godard</span></div>

Designer, c’est faire des choix. Des choix qui auront toujours une incidence plus large que celle qu’on leur attribue de prime abord.
Mettre en place un scroll infini, c’est réjouissant techniquement, mais c’est avant tout faire le choix de capter le plus longtemps possible l’attention du visiteur. Le plus souvent pour lui soumettre de la publicité.
D’un point de vue purement utilitariste, on pourrait résumer ainsi cette opération : dépenser de l’énergie d’une part pour en dépenser davantage d’autre part.
Voici un exemple, parmi d’autres, ou l’éthique du design est centrale dans une perspective d’éco-conception.
Au-delà des aspects ergonomiques et de design, un projet éco-conçu c’est aussi un projet qui d’une manière ou d’une autre apporte une contribution bénéfique à la société ou à la protection des écosystèmes. Je me vois mal créer un site techniquement sobre en ressource pour vendre des 4x4 diesel…

Plus concrètement, dans le cadre d’un site qui offrirait un service à l’intérêt environnemental avéré, il convient de s’interroger sur l’utilité des fonctionnalités proposées. A-t-on besoin d’un slider, d’une myriade d’animations, etc. pour énoncer clairement l’objet du site ? 
À l’inverse, se priver de ressources graphiques et construire un site dépouillé à l’extrême risque de détourner le visiteur du message qu’on souhaite lui délivrer.  La phase de webdesign est primordiale pour agir avec efficacité sur l’impact environnemental d’un site web : un design efficace et pertinent, c’est autant de solutions techniques coûteuses en moins pour remplir nos objectifs de bonne communication.

La question du design est primordiale pour l’éco-conception web, elle a pour cœur l’efficacité d’une communication qui accorderait sa finalité (ce qu’on veut dire) et les moyens mis en œuvre pour la restituer (comment le dit-on). 

OBJECTIF : comment et pourquoi produit-on un service ?
Se questionner sur l’intérêt et les moyens graphiques retenus pour créer un site. La phase de web-design est primordial pour agir avec efficacité sur l'impact environnemental d'un site web : un design efficace et pertinent c'est autant de solutions techniques coûteuses en moins pour remplir nos objectifs de bonne communication.


### Réutilisabilité

<div class="citation">Quand je paye une dette, c’est un devoir que je remplis ; quand je fais un don, c’est un plaisir que je me donne <br />-
<span class="auteur">Jean-Jacques Rousseau</span></div>


La notion de réutilisabilité est courante en informatique, comprenons-la comme un développement durable au sens propre.
Elle consiste tout d’abord à rendre son code accessible à tous pour faciliter les coopérations.
Une solution efficace sera répliquable et modifiable facilement. De même, écrire sur le sujet et diffuser des ressources, on croise ici le chemin de l’open source.


La réutilisabilité, c’est aussi éviter la dette technologique. Produire un site en choisissant des technos à la mode comme le dernier framework du moment peut être tentant, mais on risque de s’enfermer dans une dépendance à l’égard d’une technologie spécifique. C’est problématique. Le site risque de ne pas pouvoir évoluer en dehors de ce cadre ou sinon au prix de beaucoup de travail. Qu’est-ce qui se passe si cette technologie n’est plus mise à jour ? J’ai passé beaucoup de temps à apprendre cette techno, donc je ne veux pas en sortir, etc. Afin d’éviter cette impasse, il est préférable de :
 - privilégier les technos natives des navigateurs web (HTML, CSS et JS) ;
 - se documenter avant de s’orienter vers tel ou tel framework ou langage ;
 - faire une veille technologique pointue, être curieux et tester ;
 - écrire du code modulable et portable.


Personnellement, n’ayant pas le temps de réinventer la roue, j’ai décidé d’éco-concevoir mes sites en m’appuyant sur les outils les plus répandus (WordPress pour les CMS, VueJs pour les frameworks JS et Nuxt pour les générateurs de site statique). C’est à la fois plus pertinent en matière d’échelle et de partage d’expérience.
Le Webdesign à son tour participe à la réutilisabilité. Tout comme les technos, il évolue sans cesse. Sans vouloir tuer le métier, il me paraît judicieux de faire des choix pérennes dans ce domaine également. Ne pas céder aux sirènes des tendances d’UI éphémères, c’est éviter l’obsolescence graphique de son site à court terme.
Objectifs : Moins les dépendances technologiques sont nombreuses dans un projet et mieux c’est. Celui-ci sera plus modulable, évolutif et partageable.
Préférer utiliser des outils technologiques et des composants graphiques qui ont fait leurs preuves. Réduire l’empreinte carbone d’un site tournant sous WordPress, c’est potentiellement être en mesure de réduire l’empreinte carbone de 40 % des sites…

### Réduire l’empreinte CO<sub>2</sub> 

<div class="citation">Il y a très loin de la velléité à la volonté, de la volonté à la résolution, de la résolution au choix des moyens, du choix des moyens à l’application <br />- <span class="auteur">Cardinal de Retz</span></div>


Le vif du sujet ! Réduire l’empreinte carbone du site web organiquement. En guise de rappel : internet est un réseau matériel constitué de serveurs qui vont stocker des données, d’un réseau en lui-même par lequel transitent les données et de terminaux/clients sur lesquels les données vont être utilisées.
À chacune de ces étapes correspond une consommation électrique spécifique qui occasionne des émissions de CO<sub>2</sub>.
Cependant, c’est la fabrication des différents équipements du réseau (serveurs, câbles et terminaux) qui génère le plus d’émissions de CO<sub>2</sub> et de pollution.

**Limiter l’obsolescence des équipements** et donc, leur renouvellement prématuré est le principal levier pour réduire les impacts du numérique sur l’environnement. L’électricité endommage les composants de nos téléphones et ordinateurs. Mais, à l’exception des batteries, ces composants (processeurs, carte graphique) sont rarement en fin de vie lorsque nous renouvelons notre équipement. Ce qui motive leur remplacement, c’est qu’ils ne sont plus calibrés (notamment en mémoire vive) pour fonctionner correctement avec les dernières applications web ou desktops[^1]. En clair : notre vieux téléphone rame sur le site d’Apple, il est temps d’en changer !

Un site éco-conçu proposera un service qui pourra tourner sans problème sur de vieux appareils en limitant la taille et la complexité des ressources nécessaires à son affichage et en veillant à ne pas être trop gourmand en mémoire vive (c’est la quantité de mémoire vive qui fait défaut sur les vieux ordinateurs). Attention toutefois, prendre en compte la compatibilité avec le vieux matériel ne veut pas dire se soucier des logiciels dépréciés. Même en utilisant un ordinateur hors d’âge (dans une certaine limite, bien entendu) rien n’empêche de faire tourner un navigateur récent plus respectueux des standards du web et moins énergivore qu’Internet Explorer !

**Limiter la consommation énergétique nécessaire pour utiliser le site**  est le deuxième levier de levier pour atteindre notre objectif. 
Cette préoccupation concerne tant les serveurs, le réseau, que les terminaux.
Si les choix graphiques sont faits en cohérence avec l’objet du site, qu’ils sont réalisés avec une recherche d’efficacité communicationnelle et une économie de moyen, cette partie, tout en étant d’un enjeu primordial, n’en est pas moins aisé à développer.
Intervenons, d’une part, afin de limiter les charges réseau en taille et en nombre, et d’autre part, pour limiter l’exécution de scripts complexes qui sollicitent la carte graphique (CPU), grande consommatrice d’énergie. 
Cette stratégie d’économie de moyens s’appuiera sur des mesures de performance et d’usage de la CPU tout au long du développement du projet. L’éco-conception digitale s’inscrit dans une culture de mesures à toutes les étapes du projet. Des outils classiques dédiés à la performance du site (en gros sa rapidité d’affichage) existent. En partie pertinents dans le cadre de l’éco-conception ils méritent qu’on les associe avec des outils plus spécifiques qui pointeront la consommation énergétique.
Ces deux derniers points, bien que proches de l’optimisation web, s’en démarquent à la fois dans leur finalité — le but n’est pas d’avoir un site rapide au détriment de son empreinte carbone — que dans son périmètre — dès les prémices du projet jusqu’a son utilisation quotidienne.
Si le projet de site comprend de nombreuses fonctionnalités, graphiques, notamment, à l’utilité peu évidente, leur mise en œuvre technique économe en énergie risque de s’avérer ardue. C’est pour cela que le web design est fondamental dans le cadre d’une démarche d’éco-conception. Recueillir les besoins du client et les traduire graphiquement avec pertinence, c’est déjà éviter de recourir à des solutions trop couteuses lors du développement.
Les solutions couteuses sont celles qui, je le rappelle, vont générer des requêtes HTTP inappropriées à la fois en taille et en nombre (on allège la charge sur le réseau et les serveurs) et surtout celles qui vont nécessiter un traitement complexe et énergivore (on sollicite moins les terminaux, garantissant leur durabilité). 

Nos précédents objectifs couvraient l’ensemble de l’écosystème du web (serveurs, réseaux, terminaux), ce dernier se fixe presque exclusivement sur **les serveurs et leur consommation électrique**. Loin de l’image répandue d’un internet qui polluerait à cause de la multiplication des serveurs et services cloud, voici ce qu’on peut en dire. 
Au-delà du critère de la source énergétique utilisée, il faut garder à l’esprit que les émissions carbone d’un serveur, tout comme celles d’un terminal, sont avant tout réalisées lors de sa fabrication. Ne pas oublier, aussi, que la durée de vie d’un serveur est supérieur à celle d’un terminal.
Pour répondre à notre objectif de réduction de l’empreinte carbone, attribuons de l’importance au choix d’un hébergeur qui utiliserait des énergies renouvelables et qui, méfions-nous du greenwashing, communiquerait avec transparence sur le sujet.
Cependant, remarquons également la distance physique entre le serveur et le client. Par exemple, utiliser un hébergeur 100 % renouvelable au Texas pour un site aux usagers très concentrés géographiquement de l’autre côté de l’océan atlantique (le site d’une commune française, d’une association locale…) ne paraît pas pertinent concernant la dépense énergétique globale. L’économie réalisée du côté du serveur risque de ne pas compenser la dépense énergétique accrue par la distance parcourue sur le réseau.
Veiller à économiser de l’énergie serveur c’est également choisir une technologie appropriée et mise à jour : PHP 7 consomme moins de ressources que ses anciennes versions, par exemple.
Pour résumé, le choix de l’hébergeur doit se faire sur plusieurs critères, dont l’utilisation d’une alimentation électrique renouvelable. Privilégier un serveur technologiquement à jour et géographiquement proche du public qui visitera le site s’avère judicieux.

Objectifs : limiter la consommation énergétique nécessaire à l’usage d’un site en réduisant les charges réseau — en taille et en nombre — ainsi qu’en n’exécutant pas du code trop gourmand en ressources.  



## Moyens

Répondre aux objectifs que nous avons détaillés pour éco-concevoir un service web passe par un ensemble de moyens. Là aussi, sans rentrer dans des considérations trop techniques - que vous retrouverez par ailleurs sur ce blog, je décrie les différents concepts qui guident une démarche d’éco-conception.

### Transversalité

Vous avez pu vous en rendre compte, l’éco-conception ce n’est pas juste du code magique, ou une éolienne reliée à un serveur, ou encore un site épuré et rapide. Présente à toutes les étapes d’un projet web, sans en négliger aucune, elle nécessite des qualités transversales chez ses acteurs. Le Webdesign occupe toutefois une place privilégiée. En ce sens qu’il doit être à l’écoute des besoins des clients pour leur offrir le service le plus approprié tout en ayant une connaissance pointue des couts énergétiques qu’engendreront ces choix graphiques, le Webdesign est quasiment la pierre angulaire de l’édifice. Empathie, sens graphique, sensibilité à l’expérience utilisateur, connaissance technique de la chaine du web — du serveur aux terminaux — et de ses impacts en CO<sub>2</sub>, conscience environnementale, pédagogie et volonté de transmettre, autant de qualités pour bâtir un site web respectueux de l’environnement.

Cette démarche doit se décliner à toutes les étapes du projet : de la définition du besoin avec le client à sa sensibilisation aux bonnes pratiques pour actualiser son site. **Plus la question de l’environnement intervient tôt dans un projet, plus celui-ci pourra ériger des leviers forts pour réduire son impact sur l’environnement**. 

### Durabilité

Concevoir un site web en prenant soin de ses impacts environnementaux, c’est une démarche de développement durable qui est temporelle à de nombreux égards.


La **durabilité du design**, c’est permettre la pérennité du contenu délivré en choisissant des éléments graphiques stables et efficaces sur le long terme. Être à la pointe des tendances, c’est attrayant, refaire son site chaque saison l’est moins. 

La **durabilité technologique**, c’est choisir des technologies persistantes qui ont fait leurs preuves et le continueront. Celles-ci doivent être modulables (on peut modifier une partie du système sans tout changer), permutables (on peut en changer sans reconstruire l’ensemble), opiniâtres (elles perdureront malgré les modes) et évolutives (elles endureront les mises à jour et améliorations).

> Supposons que je veuille animer un élément sur un site sans certitude quant à son intérêt dans le temps. J’ai tout intérêt à isoler ce morceau de code afin qu’il puisse être mis à jour sans avoir à bouleverser tout l’édifice.

En dernier lieu, il convient de former correctement le client afin qu’ils puissent alimenter son site sans remettre en cause les bénéfices acquis par une conception éco-responsable. Il sera sensibilisé aux techniques de l’éco-conception et accompagné dans l’amélioration de son site, car un site web ne cesse jamais d’évoluer.

### Sobriété

#### Fonctionnelle
Proposer un service correspondant à un besoin avéré et aux fonctionnalités simples. Un site éco-conçu représente, sans excès ni fioritures, un canal de communication efficace. On prend souvent l’exemple des moteurs de recherche. Google propose une seule fonctionnalité sur sa page de recherche : une barre de recherche. Yahoo fournit une multitude d’autres services autour de la simple recherche. Pour une fonctionnalité similaire, la page plus simple de Google consommera moins de ressources. On appelle cela la **sobriété fonctionnelle**. 
Prise en compte dès le recueil des besoins du client, la sobriété fonctionnelle est un levier majeur de l’éco-conception. C’est **éviter, lors du développement, l’élaboration de code inutile** ; autant de ressources économisées.

> Continuons avec l’exemple des animations. Atout majeur pour améliorer l’expérience utilisateur, utilisons-les cependant à bon escient, car elles génèrent un cout environnemental non négligeable. La question de leur pertinence doit primer toute autre considération.

#### Technique

Lors de la conception du site, réfléchir aux moyens qu’on emploiera pour le réaliser est primordial. À cette étape on pourra s’orienter vers différentes solutions techniques. Il convient, en connaissance de cause, de **faire des choix technologiques afin de réduire l’empreinte carbone du site tout en fournissant un service optimal**. Ces choix auront des répercussions en termes de complexité de la page web, de charge du processeur ce qui réduira la consommation énergétique des utilisateurs et améliorera la longévité de leur équipement. De même, ces décisions minimiseront les impacts sur le réseau et le serveur (poids final du site, nombre de requêtes serveur pour l’afficher).

> Après sélection des animations pertinentes pour le propos il reste à choisir la techno employée pour les réaliser. Est-ce pertinent de charger des bibliothèques externes volumineuses pour animer quelques éléments ? Existe-t-il des solutions natives, plus sobres et efficaces ? La règle est simple, si j’ai vraiment besoin de cet élément je dois privilégier les technos les plus sobres pour le réaliser (HTML et CSS) : le JavaScript est le dernier recours !


### Efficience

Éco-concevoir un site web, c’est mettre au cœur d’un projet la question de l’efficience : **utiliser le minimum de ressources pour obtenir un résultat identique à un produit conçu de manière conventionnelle**. 
L’efficience va au-delà de la simple efficacité apportée par l’optimisation. Son périmètre est plus large, car on parle ici de garantir une bonne expérience utilisateur et de communiquer convenablement un message tout en mesurant les ressources que cela implique. L’efficience est une économie de moyen utilisé en vue de délivrer une information, et ce, de la manière la plus optimale.


> Terminons l’exemple de l’animation, j’en ai vraiment besoin, il n’y a pas de solution en CSS, je dois utiliser le JavaScript. Plutôt que de charger une bibliothèque externe qui occasionne une requête réseau supplémentaire, je vais privilégier le JavaScript natif (vanille) et surveiller son impact sur la RAM et la CPU. 


Le maitre mot pour l’efficience est la mesure ; **se mesurer dans ces choix technologiques et mesurer leurs impacts**. Pour cela, des outils classiques existent. Intégrés aux navigateurs, ils vont nous permettre de mesurer certains paramètres pertinents comme la charge CPU, l’usage de la RAM et l’exécution des scripts.
D’autres outils, dédiés à la performance web et à la vitesse, peuvent nous renseigner sur d’autres paramètres comme les éléments qui bloquent le rendu de la page. Enfin, des outils plus spécifiques à l’éco-conception apportent un bon complément et d’autres mesures : nombre de requêtes, taille du DOM, bonnes pratiques, etc. 

	

## Bénéfices

La préservation des ressources naturelles et la limitation des émissions de CO<sub>2</sub> sont en soi des objectifs de premier ordre. Les bonnes pratiques de l’éco-conception offrent, indirectement, d’autres bénéfices.

S’interroger sur les choix d’interfaces et de fonctionnalités pertinentes conduit à mener une réflexion poussée sur l’expérience utilisateur. Soucieux de l’environnement et de l’humain, un site éco-conçu apportera tout naturellement une expérience utilisateur de qualité.

L’UX est un des critères d’un bon positionnement dans les moteurs de recherche. La vitesse de chargement du site, un autre. Or, en privilégiant des solutions sobres et efficientes, un site éco-conçu augmente ses chances d’être parmi les plus rapides. 

Ces deux aspects permettent à un tel site d’augmenter son score SEO, sans travail spécifique.

Bon pour la planète, bon pour les utilisateurs, bon pour le référencement, voici le cercle vertueux de l'éco-conception.


### Ressources

[^1]: [https://www.greenit.fr/2020/11/25/pourquoi-changeons-nous-de-smartphone/](https://www.greenit.fr/2020/11/25/pourquoi-changeons-nous-de-smartphone/)