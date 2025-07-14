import { loadPage } from "./util/loadPage.js";
import { createMainPage } from "./pages/mainPage.js";
import { getUserData } from "./util/getUserData.js";

async function loadApp() {
  const state = {
    query,
    loading: false,
    error: null,
    results: [],
    selectedGuide: null,
  };
  console.log("User device info:", query);
  loadPage(createMainPage, state);
}

window.addEventListener("load", loadApp);
