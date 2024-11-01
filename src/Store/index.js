import { configureStore } from "@reduxjs/toolkit";

import allData from "./Slices/allData";
import wishListData from "./Slices/wishList";
import categoryData from "./Slices/categoryData";
const store = configureStore({
  reducer: {
    allData: allData,
    wishListData: wishListData.reducer,
    categoryData: categoryData,
  },
});

export default store;
