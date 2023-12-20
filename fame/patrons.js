import { val } from "https://esm.town/v/todepond/val";

const heroes = await val("todepond.getHeroes");
const froggyHeroes = heroes.filter((h) => h.tier === "froggy");
const flappyHeroes = heroes.filter((h) => h.tier === "flappy");

const COLOUR_MAP = {
  fire: "Red",
  water: "Blue",
  air: "Cyan",
  sand: "Yellow",
  wood: "Orange",
  flower: "Pink",
  "pink sand": "Pink2",
  metal: "Silver",
  poison: "Purple",
  leaf: "Green",
  void: "Void",
  cloud: "White",
};

const createTree = (patrons) => {
  if (patrons.length === 0) return;
  createEntity("bottom.png", { x: 6000, ignoreSave: true });
  const patron0 = patrons[0];
  createEntity(`Colours/Flappy/${COLOUR_MAP[patron0.flavour]}.png`, {
    x: 5675,
    ignoreSave: true,
    y: 235,
    scale: 0.75,
    text: patron0.name,
  });
  for (let i = 1; i < patrons.length; i++) {
    createEntity("middle.png", {
      x: 6000 - (i - 1) * 24,
      ignoreSave: true,
      y: -(i - 1) * 656,
    });
    const patron = patrons[i];
    createEntity(`Colours/Flappy/${COLOUR_MAP[patron.flavour]}.png`, {
      x: 5675 - i * 24,
      ignoreSave: true,
      y: 240 - i * 656,
      scale: 0.75,
      text: patron.name,
    });
  }
  createEntity("top.png", {
    x: 6000 - (patrons.length - 2) * 24,
    ignoreSave: true,
    y: -(patrons.length - 2) * 656,
  });
};

console.log(heroes);
createTree(flappyHeroes);
