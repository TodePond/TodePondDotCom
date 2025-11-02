const sortButton = document.getElementById("sort-button");
const timelineItems = [...document.querySelectorAll(".timeline-item")];

// Add initial order styles
timelineItems.forEach((item, index) => {
  item.style.order = index;
});

sortButton.addEventListener("click", () => {
  timelineItems.sort((a, b) => b.style.order - a.style.order);
  timelineItems.forEach((item, index) => {
    item.style.order = index;
  });

  if (sortButton.textContent === "↓ Oldest first") {
    sortButton.textContent = "↑ Newest first";
  } else {
    sortButton.textContent = "↓ Oldest first";
  }
});

/*
sandpond saga + videos
screenpond
cellpond
arroost
tadi lab
dreamberd
torn leaf
logiverse
pondiverse
make real
autocomplete for canvas
teach
agent starter kit
shader starter kit
unannounced fairy feature
pastagang + nudel
dogspinner

*/

const items = [
  {
    title: "SandPond",
    year: 2019,
  },
  {
    title: "CellPond",
    year: 2021,
  },
  {
    title: "Sandspiel Studio",
    year: 2022,
  },
  {
    title: "ScreenPond",
    year: 2022,
  },
  {
    title: "tldraw Enhanced Presence",
    year: 2022,
  },
  {
    title: "DreamBerd",
    year: 2022,
  },
  {
    title: "Arroost",
    year: 2023,
  },
  {
    title: "Tadi Web",
    year: 2023,
  },
  {
    title: "Make Real",
    year: 2023,
  },
  {
    title: "Torn Leaf",
    year: 2024,
  },
  {
    title: "Logiverse",
    year: 2024,
  },
  {
    title: "Pastagang",
    year: 2024,
  },
  {
    title: "Autocomplete For Canvas",
    year: 2024,
  },
  {
    title: "Teach",
    year: 2024,
  },
  {
    title: "Pondiverse",
    year: 2025,
  },
  {
    title: "tldraw Computer",
    year: 2025,
  },
  {
    title: "Agent Starter Kit For tldraw",
    year: 2025,
  },
  {
    title: "Shader Starter Kit For tldraw",
    year: 2025,
  },
  {
    title: "Dogspinner",
    year: 2025,
  },
  {
    title: "Unannounced Fairy Feature For tldraw",
    year: 2025,
  },
];
