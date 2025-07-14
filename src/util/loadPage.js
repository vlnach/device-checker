export function loadPage(pageFactoryFn, state, ...args) {
  const appRoot = document.querySelector("#app-root");
  appRoot.innerHTML = "";
  const page = pageFactoryFn(state, ...args);
  appRoot.appendChild(page.root);
}
