import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchHistory: [],
  searchResults: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
});

export default appSlice.reducer;
