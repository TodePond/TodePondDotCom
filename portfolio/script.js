const sortButton = document.getElementById("sort-button");
const timelineItems = [...document.querySelectorAll(".timeline-item")];

const footer = document.querySelector("footer");

// Add initial order styles
timelineItems.forEach((item, index) => {
  item.style.order = index;
  footer.style.order = index;
});

const loadedSort = localStorage.getItem("currentSort") ?? "oldest";
let currentSort = "oldest";

function updateSort(newSort) {
  if (newSort === currentSort) {
    return;
  }
  currentSort = newSort;
  timelineItems.sort((a, b) => b.style.order - a.style.order);
  timelineItems.forEach((item, index) => {
    item.style.order = index;
  });
  if (currentSort === "newest") {
    sortButton.textContent = "↑ Newest first";
    localStorage.setItem("currentSort", "newest");
  } else {
    sortButton.textContent = "↓ Oldest first";
    localStorage.setItem("currentSort", "oldest");
  }
}

const urlQuery = new URLSearchParams(window.location.search);
const sort = urlQuery.get("sort");
if (sort) {
  updateSort(sort);
}

sortButton.addEventListener("click", () => {
  updateSort(currentSort === "oldest" ? "newest" : "oldest");
});

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
    title: "Future of Coding",
    year: "???",
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
