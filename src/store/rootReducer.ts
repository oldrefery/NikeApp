import { combineReducers } from "@reduxjs/toolkit";
import { productsSlice } from "../features/productSlice";
import { cartSlice } from "../features/cartSlice";
export const rootReducer = combineReducers({
  products: productsSlice.reducer,
  cart: cartSlice.reducer,
});
