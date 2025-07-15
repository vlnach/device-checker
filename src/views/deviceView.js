import { loader } from "../util/loader.js";

export function createDeviceView() {
  const root = document.createElement("div");
  root.className = "device-view";

  root.innerHTML = `
    <h2>Your used device. Checked & Verified.</h2>
<p>This tool helps verify common issues and quality indicators of used laptops before purchase.</p>
    <div class="loader-container" style="margin: 20px 0;"></div>
    <p class="info" style="display: none;"></p>
    <button disabled style="display: none;">Help to check</button>
  `;

  const loaderContainer = root.querySelector(".loader-container");
  loaderContainer.appendChild(loader());

  const info = root.querySelector(".info");
  const button = root.querySelector("button");

  const about = document.createElement("div");
  about.className = "about-section";
  about.innerHTML = `
  <p style="margin-top: 40px; font-size: 0.9rem; color: #555;">
    This tool helps you verify the condition of second-hand laptops — fast, free, and browser-based. 
    We guide you through the most common checks for your model.
  </p>`;
  root.appendChild(about);

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
