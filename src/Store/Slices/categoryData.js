import { createSlice } from "@reduxjs/toolkit";

const categoryData = createSlice({
  name: "categoryData",
  initialState: [],
  reducers: {
    setCategoryData(state, action) {
      return [...action.payload];
    },
  },
});
export const { setCategoryData } = categoryData.actions;
export default categoryData.reducer;
