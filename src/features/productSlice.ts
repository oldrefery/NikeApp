import { createSlice } from "@reduxjs/toolkit";
import { IProduct, products } from "../data/products";

type SliceState = {
  products: IProduct[];
  selectedProduct: IProduct | null;
};

const initialState: SliceState = {
  products: products,
  selectedProduct: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      const productId = action.payload;
      state.selectedProduct =
        state.products.find((product) => product.id === productId) || null;
    },
  },
});

export const { setSelectedProduct } = productsSlice.actions;
