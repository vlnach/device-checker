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
  const loading = el("div", { text: "Loading...", ref: "loading" });
  const error = el("div", { ref: "error" });
  error.style.color = "red";
  loading.style.display = "none";

  button.addEventListener("click", () => {
    const value = refs.input.value.trim();
    if (value) onSearch(value);
  });

  root.append(input, button, loading, error, results);

  function update(newState) {
    refs.loading.style.display = newState.loading ? "block" : "none";
    refs.error.textContent = newState.error || "";
    refs.results.innerHTML = "";
    if (newState.results?.length) {
      newState.results.forEach((guide) => {
        const item = document.createElement("div");
        item.textContent = guide.title;
        refs.results.appendChild(item);
      });
    }
  }

  return { root, update };
}
