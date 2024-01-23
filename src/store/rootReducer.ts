import { combineReducers } from "@reduxjs/toolkit";
import { productsSlice } from "../features/productSlice";
export const rootReducer = combineReducers({
  products: productsSlice.reducer,
});
