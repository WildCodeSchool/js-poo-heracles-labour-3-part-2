# Travaux d'Héraclès #3 : les oiseaux du lac Stymphale
 
Prérequis : cloner ce *repository*.


> Rappel => Dans cette nouvelle épreuve, nous intégrons une interface HTML pour améliorer notre jeu.
Tu trouveras donc un fichier *index.html* et un fichier *style.css* lié. En bas du *index.html*, tu trouveras les imports des différents fichiers *js*. Attention, l'ordre est important.
Dans le fichier *index.html*, il n'y a presque rien. Les templates html sont préparés et injectés directement, au fur et à mesure de l'implémentation des objets. Tu peux les parcourir mais n'a pas besoin d'y toucher pour le fonctionnement du workshop. Tu seras par contre amener à consommer certaines de ses fonctionnalités.

> La zone `Hero` du HTML est directement crée à partir du *index.js (ligne 18 à 20)*.

## Rappel part 1

> Dans la première partie du workshop, nous avons intégré nos `Fighter` à notre `Arena`. Pour cela, nous appris l'héritage pour nos `Hero` et `Monster`. Tout est fait et en place (correction)



## Garder ses distances

> Maintenant que les combattants ont tous une position, essayons d'exploiter cette nouvelle information. Tout d'abord, il serait intéressant de connaître la distance entre le `héros` et chacun des `monstres`.

- Rappel : Pour calculer la distance entre deux points A et B sur une carte, cela revient à appliquer la formule suivante (qui n'est ni plus ni moins que le théorème de pythagore).

![](https://wikimedia.org/api/rest_v1/media/math/render/png/b337eb9100bc60a3125751271848230ad2a0d447)

HINT: en JS, la racine carrée se calcule grace à la [fonction `Math.sqrt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt) et la puissance via l'[fonction `Math.pow()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow).

Créer une méthode `getDistance()` dans Arena prenant 2 objets `Fighter` en paramètre, qui retournera la distance entre ces deux combattants. N'oublie pas de l'arrondir à 2 chiffres après la virgule (`toFixed()`). Une fois cela réalisé, réactualise. La distance devrait s'afficher sur la carte au survol d'un oiseau par la souris.

- Maintenant que tu peux calculer un éloignement, ajoute la notion de "portée" aux attaques. De base, un combattant sans arme ne devrait pas pouvoir frapper plus loin qu'un adversaire sur une case adjacente. Ajoute à `Fighter` la propriété `range` (float à 1 par défaut) et la méthode `getRange()` (qui retournera la valeur de la propriété range).

- Dans `Arena`, créé une méthode `isTouchable()` prenant en 1er paramètre l'attaquant et en second l'attaqué. Cette méthode doit renvoyer `true` si l'attaqué est à portée de l'attaquant, c'est-à-dire si ça distance entre les deux combattants est bien inférieure ou égale à la portée (*utilise getRange()*) de l'attaquant. Une fois cela fait, actualise. Tu devrais voir apparaître en couleur les oiseaux à portée d'Héraclès, et en grisé ceux qui ne le sont pas. N'hésite pas à modifier les coordonnées du héro pour faire varier les distances.

- Ajoute ensuite une propriété `range` (float à 0.5 par défaut) sur les armes.

- Dans `Hero` uniquement, ajoute un `getRange()` qui aditionnera la portée de base du combattant à celle de l'arme qu'il porte (pour un `Hero`, c'est donc cette méthode `getRange()` modifiée qui s'exécutera et non plus celle de `Fighter`. Ainsi Heracles avec une épée devrait avoir une portée de 1.5 (ce qui doit lui permettre d'attaquer maintenant en diagonale). Le *range* s'affiche également dans l'inventaire du héros. Bouge le personnage pour vérifier que cela fonctionne.

- Dans *index.js*, crée une nouvelle arme `bow`, instance de Weapon, qui possède un range de 5, des dégâts à 8, et l'image 'bow.svg' . Attribue cette arme à Héraclès en remplacement de son actuelle épée. Actualise et vérifie dans l'inventaire que l'arme apparaît bien.
Sur la carte, tu devrais constater que les oiseaux sont "atteignables" de plus loin puisque cette arme a un *range* bien plus important.

## Fin du combat
> En déplacant artificiellement notre héros sur la carte, il pourra ainsi se battre contre chaqu'un des oiseaux indépendemment, sans que ceux ci puisse le contre attaquer. La victoire est assurée. Félicitations !!!
