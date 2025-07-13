export function createGuideListItemView(guide) {
  const root = document.createElement("div");
  root.className = "guide-card";

  root.innerHTML = `
    <h2>${guide.title}</h2>
    <p>${guide.summary || "No description available."}</p>
    <a href="${guide.url}" target="_blank">Open Guide</a>
  `;

  return { root };
}
