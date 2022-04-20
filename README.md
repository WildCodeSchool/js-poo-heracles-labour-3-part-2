# Labors of Heracles #3: the birds of Lake Stymphalus
 
Prerequisite: clone this *repository*.

> Reminder => In this new challenge, we are integrating an HTML interface to improve our game.
So you will find an *index.html* file and a linked *style.css* file. At the bottom of the *index.html*, you will find the imports of the different *js* files. Please note that the order is important.
In the *index.html* file, there is almost nothing. The html templates are prepared and injected directly, as the objects are implemented. You can browse them but do not need to touch them on the process of the workshop. However, you will be ask to consume some of its features.

> The HTML `Hero` zone is created directly from the *index.js (line 18 to 20)*.

## Reminder part 1

> In the first part of the workshop, we integrated our `Fighter` into our `Arena`. For this, we learned the inheritance for our `Hero` and `Monster`. All is back and done yet (Correction)

## Keep your distance

> Now that the fighters all have a position, let's try to exploit this new information. First of all, it would be interesting to know the distance between the `hero` and each of the `monsters`.

- Reminder: to compute the distance between two points A and B on a map, apply the following formula (which is the Pythagorean theorem).

![](https://wikimedia.org/api/rest_v1/media/math/render/png/b337eb9100bc60a3125751271848230ad2a0d447)

HINT: in JS, the square root is calculated using the [`Math.sqrt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ sqrt) and power via the [`Math.pow()` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow).

Create a `getDistance()` method in Arena taking 2 `Fighter` objects as parameters, and returning the distance between these two fighters. Don't forget to round it to 2 decimals (`toFixed()`). Once done, refresh. The distance should be displayed on the map when hovering over a bird with the mouse.

- Now that you can calculate a distance, add the notion of "range" to the attacks. Basically, a fighter without a weapon should be able to hit only an adversary on an adjacent square. Add to `Fighter` the `range` property (float at 1 by default) and the `getRange()` method (which will return the value of the range property).

- In `Arena`, create an `isTouchable()` method taking the attacker as 1st parameter and the attacked as second. This method must return `true` if the attacked is within the range of the attacker, i.e. if the distance between the two fighters is less than or equal to the range (*use getRange()*) of the attacker. Once done, refresh. You should see the birds appear in color within range of Heracles, and in gray those that are not. Don't hesitate to modify the coordinates of the hero to make the distances vary.

- Then add a `range` property (float at 0.5 by default) on weapons.

- In `Hero` only, add a `getRange()` which will add to the base range of the fighter the range of the weapon he is carrying (for a `Hero`, it is therefore this method customized `getRange()` which will execute instead of `getRange()` from `Fighter`. So Heracles with a sword should have a range of 1.5 (which should allow him to attack diagonally now). Don't hesitate to change hero coordinates to see if all is working well.

- In *index.js*, create a new weapon `bow`, instance of Weapon, which has a range of 5, damage of 8, and the image 'bow.svg'. Assign this weapon to Heracles instead of his current sword. Refresh and check in the inventory that the weapon appears well.
On the map, you should see that the birds are "touchable" from further away since this weapon has a much larger *range*.

## End of the fight
> By artificially moving our hero on the map, he will be able to fight against each of the birds independently, without them being able to counterattack him. Victory is assured. Congratulation !!!
