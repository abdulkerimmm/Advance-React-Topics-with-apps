import { configureStore } from "@reduxjs/toolkit";
import cartValues from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartValues,
  },
});

export default store;
