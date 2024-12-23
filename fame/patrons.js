import { val } from "https://esm.town/v/todepond/val";

const heroes = await val("todepond.getHeroes", {});
const froggyHeroes = heroes.filter((h) => h.tier === "froggy");
const flappyHeroes = heroes.filter((h) => h.tier === "flappy");
const beepyHeroes = heroes.filter((h) => h.tier === "beepy");

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

const createScreen = (patrons) => {
  if (patrons.length === 0) return;
  for (let i = 0; i < patrons.length; i++) {
    const patron = patrons[i];
    createEntity(`Colours/Beepy/${COLOUR_MAP[patron.flavour]}.png`, {
      x: 8000,
      y: -i * 656 * 0.75 + 400,
      scale: 0.75,
      text: patron.name,
      ignoreSave: true,
    });
  }

  const yMidPoint = (patrons.length * 656 * 0.75 + 400) / 2;
  const rectHeight = patrons.length * 656 * 0.75 + 200;

  createEntity("rect", {
    x: 8000,
    y: 800,
    width: 1000,
    height: rectHeight,
    ignoreSave: true,
  });
};

const createPond = (patrons) => {
  if (patrons.length === 0) return;
  for (const [i, patron] of patrons.entries()) {
    const froggyPosition = froggyPositions[i];
    if (!froggyPosition) {
      alert(
        "Not enough froggy positions!!! The pond is overflowing!!! 🐸🐸🐸!!! Please let @TodePond know :)"
      );
      break;
    }
    const { flipped, x, y } = froggyPosition;
    createEntity(
      `Colours/Froggy${COLOUR_MAP[patron.flavour]}${flipped ? "Flip" : ""}.png`,
      {
        x,
        y,
        scale: 1.0,
        text: patron.name,
        ignoreSave: true,
      }
    );
  }
};

const froggyPositions = [
  { flipped: false, x: 914, y: 1011 },
  { flipped: false, x: 431, y: 604 },
  { flipped: true, x: 88, y: 219 },
  { flipped: false, x: 1287, y: 602 },
  { flipped: true, x: 809, y: 239 },
  { flipped: true, x: -137, y: 743 },
  { flipped: true, x: 271, y: 1055 },
  { flipped: false, x: 421, y: -162 },
  { flipped: false, x: 1546, y: 32 },
  { flipped: true, x: -456, y: 432 },
  { flipped: false, x: 1614, y: 961 },
  { flipped: true, x: 1066, y: -281 },
  { flipped: false, x: 1878, y: 473 },
  { flipped: true, x: -270, y: -104 },
  { flipped: false, x: 1905, y: -299 },
  { flipped: false, x: 2202, y: 873 },
  { flipped: true, x: 529, y: -627 },
  { flipped: false, x: 1172, y: -770 },
  { flipped: false, x: 2552, y: 233 },
  { flipped: true, x: -587, y: 949 },
  { flipped: true, x: -617, y: -423 },
  { flipped: false, x: 2527, y: -230 },
  { flipped: true, x: -961, y: 272 },
  { flipped: true, x: 135, y: -945 },
  { flipped: false, x: 1658, y: -1056 },
  { flipped: true, x: 1216, y: -1375 },
  { flipped: false, x: 628, y: -1249 },
  { flipped: true, x: -468, y: -853 },
  { flipped: true, x: 775, y: 1443 },
  { flipped: false, x: 1997, y: 1365 },
  { flipped: true, x: -273, y: -1313 },
  { flipped: false, x: 2657, y: -1026 },
  { flipped: false, x: 2087, y: -1298 },
  { flipped: false, x: 2158, y: -814 },
  { flipped: false, x: 1652, y: -1599 },
  { flipped: true, x: 841, y: -1637 },
  { flipped: true, x: 67, y: -1702 },
  { flipped: true, x: -1139, y: -163 },
  { flipped: false, x: 2197, y: -1759 },
  { flipped: true, x: -1168, y: -594 },
  { flipped: true, x: -899, y: -1246 },
  { flipped: true, x: -593, y: -1659 },
  { flipped: true, x: 494, y: -1983 },
  { flipped: false, x: 1789, y: -2035 },
  { flipped: true, x: -177, y: -2071 },
  { flipped: true, x: -218, y: 1314 },
  { flipped: false, x: 2668, y: 1140 },
  { flipped: true, x: 217, y: 1557 },
  { flipped: false, x: 3106, y: 888 },
  { flipped: false, x: 3156, y: 444 },
  { flipped: true, x: 1048, y: 1866 },
  { flipped: false, x: 1761, y: 1815 },
  { flipped: true, x: -187, y: 1897 },
  { flipped: true, x: -807, y: 1757 },
  { flipped: true, x: 478, y: 1990 },
  { flipped: true, x: -1258, y: 875 },
  { flipped: true, x: -1018, y: 1319 },
  { flipped: true, x: -1465, y: 434 },
  { flipped: false, x: 3194, y: 1384 },
  { flipped: true, x: -1445, y: 1640 },
  { flipped: false, x: 2726, y: -1930 },
  { flipped: false, x: 2862, y: -1465 },
  { flipped: false, x: 2938, y: -632 },
  { flipped: false, x: 3749, y: 268 },
  { flipped: true, x: -1699, y: -28 },
  { flipped: false, x: 3652, y: 709 },
  { flipped: true, x: -1483, y: -1052 },
  { flipped: false, x: 3562, y: -500 },
  { flipped: false, x: 3257, y: -1752 },
  { flipped: false, x: 3618, y: -1425 },
  { flipped: false, x: 3831, y: -931 },
  { flipped: false, x: 3235, y: -12 },
  { flipped: true, x: 1227, y: -1929 },
  { flipped: false, x: 3732, y: 1149 },
  { flipped: false, x: 4055, y: -163 },
  { flipped: false, x: 4226, y: -586 },
  { flipped: true, x: -1755, y: -472 },
  { flipped: false, x: 4297, y: 411 },
  { flipped: true, x: -1872, y: 853 },
  { flipped: true, x: -2089, y: 408 },
  { flipped: true, x: -2020, y: 1371 },
  { flipped: true, x: -2048, y: -897 },
  { flipped: true, x: -1862, y: -1413 },
  { flipped: true, x: -2267, y: -161 },
  { flipped: true, x: -2497, y: 982 },
  { flipped: true, x: -2620, y: 211 },
  { flipped: true, x: -2485, y: -617 },
  { flipped: true, x: -2449, y: -1215 },
  { flipped: false, x: 3911, y: -1799 },
  { flipped: true, x: -1244, y: -1564 },
  { flipped: true, x: -1087, y: -2026 },
  { flipped: true, x: -2909, y: -246 },
  { flipped: true, x: -1706, y: -1939 },
  { flipped: true, x: -3276, y: 169 },
  { flipped: true, x: -2931, y: -854 },
  { flipped: false, x: 4263, y: -1242 },
  { flipped: true, x: -2324, y: -1662 },
  { flipped: true, x: -2939, y: 588 },
  { flipped: false, x: 4201, y: 910 },
  { flipped: false, x: 4733, y: -861 },
  { flipped: false, x: 2629, y: 1650 },
  { flipped: true, x: -3308, y: -1164 },
];

const createAmbience = () => {
  // prettier-ignore
  const ambienceEntities = [{"id":102,"source":"bottom.png","image":{},"x":6000,"y":0,"z":0,"scale":1,"rotation":0,"text":"","ignoreSave":true},{"id":103,"source":"Colours/Flappy/Cyan.png","image":{},"x":5675,"y":235,"z":0,"scale":0.75,"rotation":0,"text":"Blendi Goose","ignoreSave":true},{"id":104,"source":"middle.png","image":{},"x":6000,"y":0,"z":0,"scale":1,"rotation":0,"text":"","ignoreSave":true},{"id":105,"source":"Colours/Flappy/White.png","image":{},"x":5651,"y":-416,"z":0,"scale":0.75,"rotation":0,"text":"Hunter Irving","ignoreSave":true},{"id":106,"source":"middle.png","image":{},"x":5976,"y":-656,"z":0,"scale":1,"rotation":0,"text":"","ignoreSave":true},{"id":107,"source":"Colours/Flappy/Pink2.png","image":{},"x":5627,"y":-1072,"z":0,"scale":0.75,"rotation":0,"text":"rjt","ignoreSave":true},{"id":108,"source":"middle.png","image":{},"x":5952,"y":-1312,"z":0,"scale":1,"rotation":0,"text":"","ignoreSave":true},{"id":109,"source":"Colours/Flappy/Yellow.png","image":{},"x":5603,"y":-1728,"z":0,"scale":0.75,"rotation":0,"text":"Jerbaloot","ignoreSave":true},{"id":110,"source":"middle.png","image":{},"x":5928,"y":-1968,"z":0,"scale":1,"rotation":0,"text":"","ignoreSave":true},{"id":111,"source":"Colours/Flappy/Pink2.png","image":{},"x":5579,"y":-2384,"z":0,"scale":0.75,"rotation":0,"text":"Diego F. Goberna","ignoreSave":true},{"id":112,"source":"middle.png","image":{},"x":5904,"y":-2624,"z":0,"scale":1,"rotation":0,"text":"","ignoreSave":true},{"id":113,"source":"Colours/Flappy/Purple.png","image":{},"x":5555,"y":-3040,"z":0,"scale":0.75,"rotation":0,"text":"Bryn","ignoreSave":true},{"id":114,"source":"middle.png","image":{},"x":5880,"y":-3280,"z":0,"scale":1,"rotation":0,"text":"","ignoreSave":true},{"id":115,"source":"Colours/Flappy/White.png","image":{},"x":5531,"y":-3696,"z":0,"scale":0.75,"rotation":0,"text":"jack","ignoreSave":true},{"id":116,"source":"middle.png","image":{},"x":5856,"y":-3936,"z":0,"scale":1,"rotation":0,"text":"","ignoreSave":true},{"id":117,"source":"Colours/Flappy/Green.png","image":{},"x":5507,"y":-4352,"z":0,"scale":0.75,"rotation":0,"text":"stereoknife","ignoreSave":true},{"id":118,"source":"middle.png","image":{},"x":5832,"y":-4592,"z":0,"scale":1,"rotation":0,"text":"","ignoreSave":true},{"id":119,"source":"Colours/Flappy/Red.png","image":{},"x":5483,"y":-5008,"z":0,"scale":0.75,"rotation":0,"text":"Cathrine Vaage","ignoreSave":true},{"id":120,"source":"middle.png","image":{},"x":5808,"y":-5248,"z":0,"scale":1,"rotation":0,"text":"","ignoreSave":true},{"id":121,"source":"Colours/Flappy/White.png","image":{},"x":5459,"y":-5664,"z":0,"scale":0.75,"rotation":0,"text":"an guy","ignoreSave":true},{"id":122,"source":"middle.png","image":{},"x":5784,"y":-5904,"z":0,"scale":1,"rotation":0,"text":"","ignoreSave":true},{"id":123,"source":"Colours/Flappy/White.png","image":{},"x":5435,"y":-6320,"z":0,"scale":0.75,"rotation":0,"text":"Julian de Convenent","ignoreSave":true},{"id":124,"source":"middle.png","image":{},"x":5760,"y":-6560,"z":0,"scale":1,"rotation":0,"text":"","ignoreSave":true},{"id":125,"source":"Colours/Flappy/Green.png","image":{},"x":5411,"y":-6976,"z":0,"scale":0.75,"rotation":0,"text":"Peter Wright","ignoreSave":true},{"id":126,"source":"middle.png","image":{},"x":5736,"y":-7216,"z":0,"scale":1,"rotation":0,"text":"","ignoreSave":true},{"id":127,"source":"Colours/Flappy/Silver.png","image":{},"x":5387,"y":-7632,"z":0,"scale":0.75,"rotation":0,"text":"xavie","ignoreSave":true},{"id":128,"source":"middle.png","image":{},"x":5712,"y":-7872,"z":0,"scale":1,"rotation":0,"text":"","ignoreSave":true},{"id":129,"source":"Colours/Flappy/Blue.png","image":{},"x":5363,"y":-8288,"z":0,"scale":0.75,"rotation":0,"text":"Havu","ignoreSave":true},{"id":130,"source":"middle.png","image":{},"x":5688,"y":-8528,"z":0,"scale":1,"rotation":0,"text":"","ignoreSave":true},{"id":131,"source":"Colours/Flappy/Orange.png","image":{},"x":5339,"y":-8944,"z":0,"scale":0.75,"rotation":0,"text":"Matic Gostiša","ignoreSave":true},{"id":132,"source":"middle.png","image":{},"x":5664,"y":-9184,"z":0,"scale":1,"rotation":0,"text":"","ignoreSave":true},{"id":133,"source":"Colours/Flappy/Red.png","image":{},"x":5315,"y":-9600,"z":0,"scale":0.75,"rotation":0,"text":"Haploid","ignoreSave":true},{"id":134,"source":"middle.png","image":{},"x":5640,"y":-9840,"z":0,"scale":1,"rotation":0,"text":"","ignoreSave":true},{"id":135,"source":"Colours/Flappy/Orange.png","image":{},"x":5291,"y":-10256,"z":0,"scale":0.75,"rotation":0,"text":"netux","ignoreSave":true},{"id":136,"source":"middle.png","image":{},"x":5616,"y":-10496,"z":0,"scale":1,"rotation":0,"text":"","ignoreSave":true},{"id":137,"source":"Colours/Flappy/Red.png","image":{},"x":5267,"y":-10912,"z":0,"scale":0.75,"rotation":0,"text":"Jmal116","ignoreSave":true},{"id":138,"source":"top.png","image":{},"x":5616,"y":-10496,"z":0,"scale":1,"rotation":0,"text":"","ignoreSave":true},{"id":139,"source":"Grass2Flip.png","image":{},"x":2914,"y":-105,"z":0,"scale":0.6634,"rotation":0,"text":"undefined","ignoreSave":true},{"id":140,"source":"Grass2.png","image":{},"x":-505,"y":1669,"z":0,"scale":0.7098,"rotation":0,"text":"undefined","ignoreSave":true},{"id":141,"source":"Grass2.png","image":{},"x":-877,"y":871,"z":0,"scale":0.5652,"rotation":0,"text":"undefined","ignoreSave":true},{"id":142,"source":"Grass2Flip.png","image":{},"x":1549,"y":-376,"z":0,"scale":0.6437,"rotation":3.3262,"text":"undefined","ignoreSave":true},{"id":143,"source":"Grass2.png","image":{},"x":1545,"y":-351,"z":0,"scale":0.4732,"rotation":0,"text":"undefined","ignoreSave":true},{"id":144,"source":"Grass2Flip.png","image":{},"x":-490,"y":1707,"z":0,"scale":0.4709,"rotation":0,"text":"undefined","ignoreSave":true},{"id":145,"source":"Grass.png","image":{},"x":-25,"y":-382,"z":0,"scale":0.8531,"rotation":0,"text":"undefined","ignoreSave":true},{"id":146,"source":"Grass2.png","image":{},"x":-151,"y":-419,"z":0,"scale":0.7277,"rotation":0,"text":"undefined","ignoreSave":true},{"id":147,"source":"GrassFlip.png","image":{},"x":1401,"y":1572,"z":0,"scale":0.995,"rotation":0,"text":"undefined","ignoreSave":true},{"id":148,"source":"Grass2Flip.png","image":{},"x":1534,"y":1552,"z":0,"scale":0.7845,"rotation":0,"text":"undefined","ignoreSave":true},{"id":149,"source":"Flower.png","image":{},"x":1506,"y":1551,"z":0,"scale":0.416,"rotation":0,"text":"undefined","ignoreSave":true},{"id":150,"source":"Flower.png","image":{},"x":-948,"y":716,"z":0,"scale":0.4732,"rotation":87.1535,"text":"undefined","ignoreSave":true},{"id":151,"source":"Flower.png","image":{},"x":1504,"y":-473,"z":0,"scale":0.3405,"rotation":38.0634,"text":"undefined","ignoreSave":true},{"id":152,"source":"Flower.png","image":{},"x":1584,"y":-537,"z":0,"scale":0.4541,"rotation":53.6506,"text":"undefined","ignoreSave":true},{"id":153,"source":"Grass2.png","image":{},"x":2163,"y":221,"z":0,"scale":0.5006,"rotation":0,"text":"undefined","ignoreSave":true},{"id":154,"source":"Grass2Flip.png","image":{},"x":2171,"y":218,"z":0,"scale":0.4907,"rotation":0,"text":"undefined","ignoreSave":true},{"id":155,"source":"Grass2.png","image":{},"x":-684,"y":109,"z":0,"scale":0.5296,"rotation":0,"text":"undefined","ignoreSave":true},{"id":156,"source":"Grass.png","image":{},"x":2608,"y":759,"z":0,"scale":0.9405,"rotation":0,"text":"undefined","ignoreSave":true},{"id":157,"source":"Flower.png","image":{},"x":2506,"y":746,"z":0,"scale":0.4518,"rotation":53.6506,"text":"undefined","ignoreSave":true},{"id":158,"source":"Grass2.png","image":{},"x":852,"y":697,"z":0,"scale":0.527,"rotation":0,"text":"undefined","ignoreSave":true},{"id":159,"source":"Grass2.png","image":{},"x":818,"y":-784,"z":0,"scale":0.5006,"rotation":0,"text":"undefined","ignoreSave":true},{"id":160,"source":"Grass2Flip.png","image":{},"x":826,"y":-787,"z":0,"scale":0.4907,"rotation":0,"text":"undefined","ignoreSave":true},{"id":161,"source":"Grass2.png","image":{},"x":269,"y":-1242,"z":0,"scale":0.5101,"rotation":0,"text":"undefined","ignoreSave":true},{"id":162,"source":"Flower.png","image":{},"x":228,"y":-1378,"z":0,"scale":0.4057,"rotation":151.8003,"text":"undefined","ignoreSave":true},{"id":163,"source":"Grass2Flip.png","image":{},"x":-891,"y":-695,"z":0,"scale":0.6437,"rotation":3.3262,"text":"undefined","ignoreSave":true},{"id":164,"source":"Grass2.png","image":{},"x":-895,"y":-670,"z":0,"scale":0.4057,"rotation":0,"text":"undefined","ignoreSave":true},{"id":165,"source":"Flower.png","image":{},"x":-849,"y":-833,"z":0,"scale":0.3942,"rotation":38.0634,"text":"undefined","ignoreSave":true},{"id":166,"source":"Grass2.png","image":{},"x":2435,"y":-1282,"z":0,"scale":0.5101,"rotation":0,"text":"undefined","ignoreSave":true},{"id":167,"source":"Flower.png","image":{},"x":2429,"y":-1426,"z":0,"scale":0.4057,"rotation":234.3996,"text":"undefined","ignoreSave":true},{"id":168,"source":"Grass2.png","image":{},"x":908,"y":-1964,"z":0,"scale":0.5006,"rotation":0,"text":"undefined","ignoreSave":true},{"id":169,"source":"Grass2Flip.png","image":{},"x":917,"y":-1952,"z":0,"scale":0.4207,"rotation":0,"text":"undefined","ignoreSave":true},{"id":170,"source":"Grass2.png","image":{},"x":2164,"y":1908,"z":0,"scale":0.5006,"rotation":0,"text":"undefined","ignoreSave":true},{"id":171,"source":"Grass2Flip.png","image":{},"x":2172,"y":1910,"z":0,"scale":0.4907,"rotation":0,"text":"undefined","ignoreSave":true},{"id":172,"source":"Grass2Flip.png","image":{},"x":2190,"y":-2081,"z":0,"scale":0.6634,"rotation":0,"text":"undefined","ignoreSave":true},{"id":173,"source":"Grass2Flip.png","image":{},"x":-652,"y":-1963,"z":0,"scale":0.6437,"rotation":3.3262,"text":"undefined","ignoreSave":true},{"id":174,"source":"Grass2.png","image":{},"x":-656,"y":-1938,"z":0,"scale":0.4732,"rotation":0,"text":"undefined","ignoreSave":true},{"id":175,"source":"Flower.png","image":{},"x":-697,"y":-2060,"z":0,"scale":0.3405,"rotation":38.0634,"text":"undefined","ignoreSave":true},{"id":176,"source":"Flower.png","image":{},"x":-617,"y":-2124,"z":0,"scale":0.4541,"rotation":53.6506,"text":"undefined","ignoreSave":true},{"id":177,"source":"Grass2Flip.png","image":{},"x":-1579,"y":1320,"z":0,"scale":0.5688,"rotation":0,"text":"undefined","ignoreSave":true},{"id":178,"source":"Grass2.png","image":{},"x":-1595,"y":1324,"z":0,"scale":0.5296,"rotation":0,"text":"undefined","ignoreSave":true},{"id":179,"source":"Grass2.png","image":{},"x":3141,"y":-1024,"z":0,"scale":0.6389,"rotation":0,"text":"undefined","ignoreSave":true},{"id":180,"source":"Grass.png","image":{},"x":3250,"y":-905,"z":0,"scale":0.9405,"rotation":0,"text":"undefined","ignoreSave":true},{"id":181,"source":"Flower.png","image":{},"x":3284,"y":-982,"z":0,"scale":0.472,"rotation":134.5973,"text":"undefined","ignoreSave":true},{"id":182,"source":"Grass2Flip.png","image":{},"x":-2942,"y":1070,"z":0,"scale":0.5688,"rotation":0,"text":"undefined","ignoreSave":true},{"id":183,"source":"Grass2.png","image":{},"x":-2951,"y":1098,"z":0,"scale":0.3854,"rotation":0,"text":"undefined","ignoreSave":true},{"id":184,"source":"Grass2Flip.png","image":{},"x":-2941,"y":-1317,"z":0,"scale":0.6437,"rotation":3.3262,"text":"undefined","ignoreSave":true},{"id":185,"source":"Grass2.png","image":{},"x":-2945,"y":-1292,"z":0,"scale":0.4732,"rotation":0,"text":"undefined","ignoreSave":true},{"id":186,"source":"Flower.png","image":{},"x":-2986,"y":-1414,"z":0,"scale":0.3405,"rotation":38.0634,"text":"undefined","ignoreSave":true},{"id":187,"source":"Flower.png","image":{},"x":-2906,"y":-1478,"z":0,"scale":0.4541,"rotation":53.6506,"text":"undefined","ignoreSave":true},{"id":188,"source":"Grass.png","image":{},"x":-3560,"y":-324,"z":0,"scale":0.8958,"rotation":0,"text":"undefined","ignoreSave":true},{"id":189,"source":"Grass2.png","image":{},"x":-3383,"y":-333,"z":0,"scale":0.5617,"rotation":15.0754,"text":"undefined","ignoreSave":true},{"id":190,"source":"Grass2.png","image":{},"x":4211,"y":1369,"z":0,"scale":0.5006,"rotation":0,"text":"undefined","ignoreSave":true},{"id":191,"source":"Grass2Flip.png","image":{},"x":4219,"y":1366,"z":0,"scale":0.4907,"rotation":0,"text":"undefined","ignoreSave":true},{"id":192,"source":"Flower.png","image":{},"x":-3695,"y":-296,"z":0,"scale":0.4744,"rotation":53.6506,"text":"undefined","ignoreSave":true},{"id":193,"source":"GrassFlip.png","image":{},"x":4701,"y":-233,"z":0,"scale":0.995,"rotation":0,"text":"undefined","ignoreSave":true},{"id":194,"source":"Grass2Flip.png","image":{},"x":4834,"y":-253,"z":0,"scale":0.7845,"rotation":0,"text":"undefined","ignoreSave":true},{"id":195,"source":"Grass2.png","image":{},"x":4500,"y":-1487,"z":0,"scale":0.5006,"rotation":0,"text":"undefined","ignoreSave":true},{"id":196,"source":"Grass2Flip.png","image":{},"x":4509,"y":-1475,"z":0,"scale":0.4417,"rotation":0,"text":"undefined","ignoreSave":true}]
  for (const entity of ambienceEntities) {
    // if (entity.ignoreSave) continue;
    if (entity.text !== "undefined") continue;
    // if (entity.source === "")
    createEntity(entity.source, {
      x: entity.x,
      y: entity.y,
      scale: entity.scale,
      rotation: entity.rotation,
      text: entity.text,
      ignoreSave: true,
    });
  }
};

console.log(heroes);
window.heroes = heroes;
createPond(froggyHeroes);
createTree(flappyHeroes);
createScreen(beepyHeroes);
createAmbience();
document.querySelector("#loading").style.opacity = 0;
window.val = val;

// window._supporters = backup.map((hero) => {
//   return {
//     id: hero.supporter,
//     email: hero.email,
//     secret: crypto.randomUUID(),
//   };
// });

// window._heroes = backup.map((hero) => {
//   return {
//     supporter: hero.supporter,
//     name: hero.name,
//     flavour: hero.flavour,
//     tier: hero.tier,
//   };
// });
