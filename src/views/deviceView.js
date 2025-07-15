import { loader } from "../util/loader.js";

export function createDeviceView() {
  const root = document.createElement("div");
  root.className = "device-view";

  root.innerHTML = `
    <h2>Analyzing your device…</h2>
    <div class="loader" style="margin: 20px 0;"></div>
    <p class="info" style="display: none;"></p>
    <button disabled style="display: none;">Continue</button>
  `;

  const loaderContainer = root.querySelector(".loader");
  const info = root.querySelector(".info");
  const button = root.querySelector("button");

  const spinner = loader();
  loaderContainer.appendChild(spinner);

  function setState({ loading = false, text = "" }) {
    loaderContainer.style.display = loading ? "block" : "none";
    info.style.display = loading ? "none" : "block";
    button.style.display = loading ? "none" : "inline-block";
    button.disabled = loading;
    info.textContent = text;
  }

  function onContinue(handler) {
    button.addEventListener("click", handler);
  }

  return { root, setState, onContinue };
}
