import { createGuideListItemView } from "./guideListItemView.js";
import { loader } from "../util/loader.js";

export function createMainView({ state, onSearch }) {
  const refs = {};

  function el(tag, options = {}) {
    const e = document.createElement(tag);
    if (options.className) e.className = options.className;
    if (options.text) e.textContent = options.text;
    if (options.placeholder) e.placeholder = options.placeholder;
    refs[options.ref] = e;
    return e;
  }

  const root = el("div", { className: "main-view" });
  const input = el("input", { placeholder: "Enter device", ref: "input" });
  const button = el("button", { text: "Search", ref: "button" });
  const results = el("div", { ref: "results" });

  const loading = loader(); // Create a loader element
  refs.loading = loading;
  loading.style.display = "none";

  const error = el("div", { ref: "error" });
  error.style.color = "red";

  button.addEventListener("click", () => {
    const value = refs.input.value.trim();
    if (value) onSearch(value);
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      button.click();
    }
  });

  root.append(input, button, loading, error, results);

  function update(newState) {
    if (newState.loading) {
      refs.loading.style.display = "flex";
      refs.loading.classList.add("fadeInOut");
    } else {
      refs.loading.classList.remove("fadeInOut");
      refs.loading.style.display = "none";
    }

    refs.error.textContent = newState.error || "";
    refs.results.innerHTML = "";

    if (newState.results?.length) {
      newState.results.forEach((guide) => {
        const { root: item } = createGuideListItemView(guide);
        results.appendChild(item);
      });
    }
    if (newState.error === "not_found") {
      refs.error.textContent =
        "No results found. Please try a different query.";
    } else if (typeof newState.error === "string") {
      refs.error.textContent = newState.error;
    }
  }

  return { root, update };
}
