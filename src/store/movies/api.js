import { actions } from "./";

export default {
  getMovies: (currentPage) => async (dispatch) => {
    dispatch(actions.getMoviesRequest());
    try {
      const data = await import(
        `../../assets/data/CONTENTLISTINGPAGE-PAGE${currentPage}.json`
      );
      dispatch(actions.getMoviesSuccess(data.default));
    } catch (e) {
      dispatch(actions.getMoviesFailure(e?.message));
    }
  },
};
