import { createDeviceView } from "../views/deviceView.js";
import { getUserData } from "../util/getUserData.js";
import { loadPage } from "../util/loadPage.js";
import { createMainPage } from "./mainPage.js";

export function createDevicePage(state, onContinue) {
  const view = createDeviceView();

  view.setState({ loading: true });

  getUserData().then((info) => {
    state.query = info;
    view.setState({ loading: false, text: `Your device: ${info}` });
  });

  view.onContinue(() => {
    loadPage(createMainPage, state);
  });

  return view;
}
