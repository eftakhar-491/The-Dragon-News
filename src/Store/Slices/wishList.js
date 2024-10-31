import { createSlice } from "@reduxjs/toolkit";

const wishListData = createSlice({
  name: "wishListData",
  initialState: [],
  reducers: {
    setWishListData(state, action) {
      return [...action.payload];
    },
  },
});

export default wishListData;
