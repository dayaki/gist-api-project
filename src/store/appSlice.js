import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUsername: "",
  activeSearch: false,
  searchHistory: [],
  searchResults: {},
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateSearch: (state, { payload }) => {
      state.searchHistory.push(payload);
      state.currentUsername = payload;
      state.activeSearch = true;
    },
    addToResult: (state, { payload }) => {
      //   state.searchResults = [...state.searchResults, payload];
      state.searchResults = {
        ...state.searchResults,
        [payload.username]: payload.payload,
      };
    },
    updateSearchStatus: (state, { payload }) => {
      state.activeSearch = payload;
    },
  },
});

export const { updateSearch, addToResult, updateSearchStatus } =
  appSlice.actions;

export default appSlice.reducer;
