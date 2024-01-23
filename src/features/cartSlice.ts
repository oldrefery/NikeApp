import { createSlice } from "@reduxjs/toolkit";
import { ICartItem } from "../data/cart";

type SliceState = {
  items: ICartItem[];
  deliveryFee: number;
  freeDeliveryFrom: number;
};

const initialState: SliceState = {
  items: [],
  deliveryFee: 15,
  freeDeliveryFrom: 200,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const addedProduct = action.payload.product;
      const cartItem = state.items.find(
        (item) => item.product.id === addedProduct.id
      );
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.items.push({
          product: addedProduct,
          size: 42,
          quantity: 1,
        });
      }
    },
    changeQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const cartItem = state.items.find((i) => i.product.id === productId);

      if (cartItem) {
        if (cartItem) {
          cartItem.quantity += quantity;
        }

        if (cartItem.quantity <= 0) {
          state.items = state.items.filter((item) => item !== cartItem);
        }
      }
    },
  },
});

export const { addItem, changeQuantity } = cartSlice.actions;
