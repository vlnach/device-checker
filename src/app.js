export function loadApp() {
  const state = {
    query: "",
    loading: false,
    error: null,
    results: [],
    selectedGuide: null,
  };

  loadPage(createMainPage, state);
}

window.addEventListener("load", loadApp);
