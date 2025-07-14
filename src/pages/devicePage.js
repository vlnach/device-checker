import { createDeviceView } from "../views/deviceView.js";
import { getUserData } from "../util/getUserData.js";
import { createMainPage } from "./mainPage.js";
import { loadPage } from "../util/loadPage.js";

export function createDevicePage(state) {
  const view = createDeviceView();

  getUserData().then((info) => {
    state.query = info;
    view.setDeviceInfo(info);
    view.enableButton();
  });

  view.onContinue(() => {
    loadPage(createMainPage, state);
  });

  return view;
}
