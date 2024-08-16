export function titleToPath(title) {
  return title
    .replaceAll("VIDEO VOTE: ", "")
    .replaceAll("'", "")
    .replaceAll(":", "")
    .replaceAll("+", "and")
    .replaceAll(" ", "-")
    .toLowerCase();
}

export async function fetchItems() {
  let response;
  try {
    response = await fetch("/pondcast/index.xml");
  } catch (error) {
    // console.error("Failed to fetch feed:", error);
    return [];
  }
  const text = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "application/xml");
  const itemElements = Array.from(doc.querySelectorAll("item"));
  const items = [];
  for (const itemElement of itemElements) {
    const title = itemElement.querySelector("title").textContent;
    const pubDate = new Date(itemElement.querySelector("pubDate").textContent);
    items.push({ title, pubDate });
  }

  return items.sort((a, b) => b.pubDate - a.pubDate);
}
