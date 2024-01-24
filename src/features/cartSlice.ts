import { createSelector, createSlice } from "@reduxjs/toolkit";
import { ICartItem } from "../data/cart";
import { RootState } from "../store/store";

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
export const selectNumberOfItems = (state: RootState) =>
  state.cart.items.length;

export const selectSubtotal = (state: RootState) =>
  state.cart.items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

const cartSelector = (state: RootState) => state.cart;

export const selectDelivery = createSelector(
  cartSelector,
  selectSubtotal,
  (cart, subtotal) => (subtotal >= cart.freeDeliveryFrom ? 0 : cart.deliveryFee)
);

export const selectTotal = createSelector(
  selectSubtotal,
  selectDelivery,
  (subtotal, delivery) => subtotal + delivery
);
