import { createSlice } from "@reduxjs/toolkit";

const allData = createSlice({
  name: "allData",
  initialState: [],
  reducers: {
    setData(state, action) {
      return [...action.payload];
    },
  },
});
export const { setData } = allData.actions;
export default allData.reducer;
