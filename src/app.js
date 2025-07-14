import { loadPage } from "./util/loadPage.js";
import { createDevicePage } from "./pages/devicePage.js";
import { getUserData } from "./util/getUserData.js";

async function loadApp() {
  const query = await getUserData();

  const state = {
    query,
    loading: false,
    error: null,
    results: [],
    selectedGuide: null,
  };

  loadPage(createDevicePage, state);
}

window.addEventListener("load", loadApp);
