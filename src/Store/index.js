import { configureStore } from "@reduxjs/toolkit";

import allData from "./Slices/allData";
import wishListData from "./Slices/wishList";
const store = configureStore({
  reducer: {
    allData: allData,
    wishListData: wishListData.reducer,
  },
});

export default store;
