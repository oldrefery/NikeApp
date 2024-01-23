import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "../features/productSlice";
import { rootReducer } from "./rootReducer";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
export type RootState = ReturnType<typeof rootReducer>;
