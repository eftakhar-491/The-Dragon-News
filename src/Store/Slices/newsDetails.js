import { createSlice } from "@reduxjs/toolkit";

const newsDetails = createSlice({
  name: "allData",
  initialState: [],
  reducers: {
    setNewsDetails(state, action) {
      return [...action.payload];
    },
  },
});
export const { setNewsDetails } = newsDetails.actions;
export default newsDetails.reducer;
