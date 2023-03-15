import { configureStore } from "@reduxjs/toolkit";

import { reducer as moviesReducer } from "./movies";

export default configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
