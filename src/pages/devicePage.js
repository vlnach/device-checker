import { createDeviceView } from "../views/deviceView.js";
import { getUserData } from "../util/getUserData.js";
import { loadPage } from "../util/loadPage.js";
import { createMainPage } from "./mainPage.js";

export function createDevicePage(state, onContinue) {
  const view = createDeviceView();

  view.setState({ loading: true });

  getUserData().then((info) => {
    const startTime = Date.now();
    const elapsed = Date.now() - startTime;
    const remaining = 3000 - elapsed;

    state.query = info;

    setTimeout(
      () => {
        view.setState({ loading: false, text: `Your device: ${info}` });
      },
      remaining > 0 ? remaining : 0
    );
  });

  view.onContinue(() => {
    loadPage(createMainPage, state);
  });

  return view;
}
