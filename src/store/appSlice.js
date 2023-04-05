import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUsername: "",
  activeSearch: false,
  searchHistory: [],
  searchResults: {},
  isLoading: false,
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
      state.searchResults = {
        ...state.searchResults,
        [payload.username]: payload.payload,
      };
      state.isLoading = false;
    },
    updateSearchStatus: (state, { payload }) => {
      state.activeSearch = payload;
    },
    updateLoadingStatus: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
});

export const {
  updateSearch,
  addToResult,
  updateSearchStatus,
  updateLoadingStatus,
} = appSlice.actions;

export default appSlice.reducer;
