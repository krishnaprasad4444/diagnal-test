import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: [],
  error: "",
  currentPage: 1,
  title: "",
};

const request = (state) => {
  state.loading = true;
};

const succes = (state, { payload }) => {
  state.loading = false;
  state.data.push(...(payload?.page["content-items"].content || []));
  state.currentPage = parseInt(payload?.page["page-num-requested"] || 0) + 1;
  state.title = payload?.page["title"] || "";
};

const failure = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getMoviesRequest: request,
    getMoviesSuccess: succes,
    getMoviesFailure: failure,
  },
});

export const { actions, reducer } = moviesSlice;
