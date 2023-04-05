import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUsername: "",
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
    },
    addToResult: (state, { payload }) => {
      //   state.searchResults = [...state.searchResults, payload];
      state.searchResults = {
        ...state.searchResults,
        [payload.username]: payload.payload,
      };
    },
  },
});

export const { updateSearch, addToResult } = appSlice.actions;

export default appSlice.reducer;
