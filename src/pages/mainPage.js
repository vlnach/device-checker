import { createMainView } from "../views/mainView.js";
import { fetchGuidesByQuery } from "../util/fetchData.js";

export function createMainPage(state) {
  const onSearch = async (query) => {
    state.query = query;
    state.loading = true;
    state.error = null;
    state.results = [];
    view.update(state);

    try {
      const data = await fetchGuidesByQuery(query);
      state.results = data;
    } catch (err) {
      state.error = err.message;
    }

    state.loading = false;
    view.update(state);
  };

  const view = createMainView({ state, onSearch });
  return view;
}
