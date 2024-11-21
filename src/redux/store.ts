
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import globalSlice from "./Features/adminSlice";
import productSlice from "./Features/productSlice";
import loadingSlice from "./Features/loadingSlice";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Features/cartSlice";

// Redux store'unuzu yapılandırın
export const store = configureStore({
  reducer: {
    cart:cartSlice,
    productSlice,
    loadingSlice,
  },
  devTools:process.env.NODE_ENV!=="production",
});

// RootState ve AppDispatch türlerini çıkarın
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

