const sortButton = document.getElementById("sort-button");
const timelineItems = [...document.querySelectorAll(".timeline-item")];

const footer = document.querySelector("footer");

// Add initial order styles
timelineItems.forEach((item, index) => {
  item.style.order = index;
  footer.style.order = index;
});

const loadedSort = localStorage.getItem("currentSort") ?? "newest";
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

updateSort(loadedSort);

const urlQuery = new URLSearchParams(window.location.search);
const sort = urlQuery.get("sort");
if (sort) {
  updateSort(sort);
}

sortButton.addEventListener("click", () => {
  updateSort(currentSort === "oldest" ? "newest" : "oldest");
});
