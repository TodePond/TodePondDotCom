const makePatron = ({
  name,
  tier = "Froggy",
  element = "Fire",
  username = name,
}) => {
  const patron = { name, tier, element, username };
  return patron;
};

const froggyHeroes = [
  makePatron({ name: "Flora Caulton", element: "Wood" }),
  makePatron({ name: "Sebastian Andreasson", element: "Sand" }),
  makePatron({ name: "Max Bittker", element: "Fire" }),
  makePatron({ name: "@walpolea", element: "Air" }),
  makePatron({ name: "Gill W", element: "Sky" }),
  makePatron({ name: "Latchy", element: "Wood" }),
  makePatron({ name: "Florent Loock", element: "Fire" }),
  makePatron({ name: "George McGhee", element: "Sand" }),
  makePatron({ name: "Dimitar Irinkov", element: "Fire" }),
  makePatron({ name: "@poorsquid", element: "Leaf" }),
  makePatron({
    name: "The Saddest Biccy - A Pitiful Digestive",
    element: "Leaf",
  }),
  makePatron({ name: "Magnogen", element: "Water" }),
  makePatron({ name: "Chrysophlax", element: "Fire" }),
  makePatron({ name: "SeungBum Kim", element: "Fire" }),
  makePatron({ name: "Collo", element: "Fire" }),
  makePatron({ name: "Andy Bayer", element: "Fire" }),
  makePatron({ name: "Erik Jonasson", element: "Leaf" }),
  makePatron({ name: "livcomp", element: "Poison" }),
  makePatron({ name: "Hayden Jackson", element: "Fire" }),
  makePatron({ name: "Brian Zindler", element: "Fire" }),
  makePatron({ name: "antovsky", element: "Sand" }),
  makePatron({ name: "Patrick Kennedy", element: "Cloud" }),
  makePatron({ name: "Ax2u", element: "Poison" }),
  makePatron({ name: "Filip Optołowicz" }),
  makePatron({ name: "Matt Giallourakis" }),
  makePatron({ name: "Willhart", element: "Wood" }),
  makePatron({ name: "Maxence", element: "Air" }),
  makePatron({
    name: "Anton Little",
    element: "Water",
    special: "Blue Flannel",
  }),
  makePatron({ name: "stolksdorf", element: "Air" }),
  makePatron({ name: "culi", element: "Leaf" }),
  makePatron({ name: "Raphaël de Courville", element: "Sand" }),
  makePatron({ name: "Craig Fouts" }),
  makePatron({ name: "Monad", element: "Metal" }),
  makePatron({ name: "Sage Fiorentino-Lange", element: "Leaf" }),
  makePatron({ name: "SimplyLinn", element: "Poison", special: "#926aa4" }),
  makePatron({ name: "Fuzzyzilla", element: "Leaf" }),
  makePatron({ name: "disconcision", element: "Poison" }),
  makePatron({ name: "Scott Cardoza" }),
  makePatron({ name: "Desktoy Sam", element: "Wood" }),
  makePatron({ name: "alex" }),
  makePatron({ name: "Mollie Rose" }),
  makePatron({ name: "Jethro" }),
  makePatron({ name: "John Fresco", element: "Sand" }),
  makePatron({ name: "Kyle" }),
  makePatron({ name: "Steve Ruiz", element: "Wood" }),
  makePatron({ name: "MG" }),
  makePatron({ name: "migujorg" }),
  makePatron({ name: "Jimmy Miller" }),
  makePatron({ name: "Vanawy", element: "Flower" }),
  makePatron({ name: "gay spider", element: "Flower" }),
  makePatron({ name: "Richard Forney" }),
  makePatron({ name: "Tanz", element: "Poison" }),
  makePatron({ name: "Booyah", element: "Fire" }),
  makePatron({ name: "Julia V", element: "Poison" }),
  makePatron({ name: "OmniToad", element: "Air" }),
  makePatron({ name: "Don't Be TREE" }),
  makePatron({ name: "Patrick Taynor", element: "Poison" }),
  makePatron({ name: "Márton Klecska" }),
  makePatron({ name: "Andrew Walker" }),
  makePatron({ name: "Max Goodhart" }),
  makePatron({ name: "Titouan" }),
  makePatron({ name: "Max", element: "Fire" }),
  makePatron({ name: "Jack Wild", element: "Wood" }),
  makePatron({ name: "Lewis", element: "Sand" }),
  makePatron({ name: "Guillaume Bergerot", element: "Sand" }),
  makePatron({ name: "Chris", element: "Air" }),
  makePatron({ name: "Pellerin Léonard" }),
  makePatron({ name: "Bruno Dantas", element: "Leaf" }),
  makePatron({ name: "Oliver", element: "Water" }),
  makePatron({ name: "Anna Chamberlain", element: "Fire" }),
  makePatron({ name: "Sawyer McLane", element: "Fire" }),
  makePatron({ name: "Peter Brodersen", element: "Leaf" }),
  makePatron({ name: "Surma" }),
  makePatron({ name: "dan-lee", element: "Fire" }),
  makePatron({ name: "João Guilherme Madeira Araújo", element: "Fire" }),
  makePatron({ name: "Wilsown", element: "Fire", username: "MarcoPPino" }),
  makePatron({ name: "Angelo Ashmore" }),
  makePatron({ name: "Alec Resnick" }),
  makePatron({ name: "Eliko" }),
  makePatron({ name: "Meow", element: "Air" }),
  makePatron({ name: "Proxtx" }),
  makePatron({ name: "Allain Lalonde", element: "Poison" }),
  makePatron({ name: "domlazic" }),
  makePatron({ name: "n-gons", element: "Water" }),
  makePatron({ name: "Kybe" }),
  makePatron({ name: "Robb Beal" }),
  makePatron({ name: "Russel Simmons" }),
  makePatron({ name: "Joshix", element: "Pink Sand" }),
  makePatron({ name: "Ell" }),
  makePatron({ name: "parameterized", element: "Poison" }),
  makePatron({ name: "SNDTST", element: "Fire" }),
  makePatron({ name: "SomehowSane", element: "Sand" }),
  makePatron({ name: "Das Gürteltier" }),
  makePatron({ name: "Murch" }),
  makePatron({ name: "transistor fet", element: "Cloud" }),
  makePatron({ name: "Books", element: "Poison" }),
  makePatron({ name: "forresto", element: "Leaf" }),
  makePatron({ name: "k", element: "Metal" }),
  makePatron({ name: "Nona", element: "Flower" }),
  makePatron({ name: "Laure B", element: "Air" }),
  makePatron({ name: "nach", element: "Poison" }),
  makePatron({ name: "Benjamin Wrensch", element: "Poison" }),
];

const flappyHeroes = [
  makePatron({ name: "Blendi Goose", element: "Air" }),
  makePatron({ name: "Hunter Irving", element: "Cloud" }),
  makePatron({ name: "rjt", element: "Pink Sand" }),
  makePatron({ name: "Jerbaloot", element: "Sand" }),
  makePatron({ name: "Diego F. Goberna", element: "Pink Sand" }),
  makePatron({ name: "Bryn", element: "Poison" }),
  makePatron({ name: "jack", element: "Cloud" }),
  makePatron({ name: "stereoknife", element: "Leaf" }),
  makePatron({ name: "Cathrine Vaage", element: "Fire" }),
  makePatron({ name: "an guy", element: "Cloud" }),
  makePatron({ name: "Julian de Convenent", element: "Cloud" }),
  makePatron({ name: "Peter Wright", element: "Leaf" }),
  makePatron({ name: "xavie", element: "Metal" }),
  makePatron({ name: "Havu", element: "Water" }),
  makePatron({ name: "Matic Gostiša", element: "Wood" }),
  makePatron({ name: "Haploid", element: "Fire" }),
  makePatron({ name: "netux", element: "Wood" }),
  makePatron({ name: "Jmal116", element: "Fire" }),
];

for (const [, v] of flappyHeroes) {
  v.tier = "Flappy";
}

const checkAllPatronsAreThere = () => {
  for (const froggyHero of froggyHeroes) {
    const { name } = froggyHero;
    if (SAVE.includes(name)) {
      console.log("Found", name);
    } else {
      console.error("Missing", name);
    }
  }

  for (const [, entity] of entities) {
    if (
      entity.text === "" ||
      entity.text === undefined ||
      entity.text === "undefined"
    )
      continue;
    if (froggyHeroes.find((f) => f.name === entity.text)) continue;
    if (flappyHeroes.find((f) => f.name === entity.text)) continue;
    console.error("Extra", entity.text);
  }
};

const COLOUR_MAP = {
  Fire: "Red",
  Water: "Blue",
  Air: "Cyan",
  Sand: "Yellow",
  Wood: "Orange",
  Flower: "Pink",
  "Pink Sand": "Pink2",
  Metal: "Silver",
  Poison: "Purple",
  Leaf: "Green",
  Void: "Void",
  Cloud: "White",
};

const createTree = (patrons) => {
  if (patrons.length === 0) return;
  const bottom = createEntity("bottom.png", { x: 6000, ignoreSave: true });
  const patron0 = patrons[0];
  const berd0 = createEntity(
    `Colours/Flappy/${COLOUR_MAP[patron0.element]}.png`,
    {
      x: 5675,
      ignoreSave: true,
      y: 235,
      scale: 0.75,
      text: patron0.name,
    }
  );
  for (let i = 1; i < patrons.length; i++) {
    const middle = createEntity("middle.png", {
      x: 6000 - (i - 1) * 24,
      ignoreSave: true,
      y: -(i - 1) * 656,
    });
    const patron = patrons[i];
    const berd = createEntity(
      `Colours/Flappy/${COLOUR_MAP[patron.element]}.png`,
      {
        x: 5675 - i * 24,
        ignoreSave: true,
        y: 240 - i * 656,
        scale: 0.75,
        text: patron.name,
      }
    );
  }
  const top = createEntity("top.png", {
    x: 6000 - (patrons.length - 2) * 24,
    ignoreSave: true,
    y: -(patrons.length - 2) * 656,
  });
};

on.load(() => {
  createTree(flappyHeroes);
  checkAllPatronsAreThere();
});
