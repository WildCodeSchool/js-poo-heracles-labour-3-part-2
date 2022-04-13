/** Part for the starting instanciation */
/** creating the hero Heracles */
const Heracles = new Fighter('👨 Heracles', 20, 6, './images/heracles.svg', 5, 5);

/** Creating his weapon and associating it */
const weapon = new Weapon('sword', 10, './images/sword.svg');
Heracles.weapon = weapon;

/** Creating his shield and associating it */
const shield = new Shield('shield', 10, './images/shield.svg');
Heracles.shield = shield;

/** Creating all of his adversaries */
const bird1 = new Fighter('Bird', 25, 12, './images/bird.svg', 2, 3);
const bird2 = new Fighter('Bird', 25, 12, './images/bird.svg', 6, 8);
const bird3 = new Fighter('Bird', 25, 12, './images/bird.svg', 1, 7);

/** Creating the hero section in the html */
const fighterHtml = new FightersTemplate('fighters');
fighterHtml.createTemplate(Heracles, bird1);

/** The code from the part one of teh workshop */
const arena = new Arena(10, [bird1, bird2, bird3], Heracles);
const ArenaHTML = new ArenaTemplate('arena');
ArenaHTML.createArena(arena);

/** Your code goes Here */


/** Do not touch => allow the opening / closing of the hero information section */
let openingModal = true;
const openModal = () => {
  if (openingModal) {
    const heroInfo = new HeroInfoTemplate('heroInfo');
    heroInfo.createHeroInfoTemplate(Heracles);
    document.getElementById("heroInfo").style.display = "flex";
    openingModal = false;
  }
}

const closeModal = () => {
  const heroInfo = document.getElementById("heroInfo");
  heroInfo.style.display = "none";
  heroInfo.innerHTML = "";
  openingModal = true;
}
