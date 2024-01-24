import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalAmount: 0,
  isActive: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log("trigereddd");
      console.log("action.payload:", action);
      const existItem = state.cart.findIndex(
        (item) => item.title === action.payload.title
      );
      console.log("existItem:", existItem);
      if (existItem !== -1) {
        // const uptadedProduct = {
        //   ...state.cart[existItem],
        //   quantity: state.cart[existItem].quantity + 1,
        // };
        // state.cart[existItem] = uptadedProduct;
        state.cart[existItem].quantity++;
      } else {
        state.cart.push(action.payload);
      }
      state.totalAmount = state.totalAmount + action.payload.price;
    },
    increaseProduct: (state, action) => {
      state.totalAmount = state.totalAmount + action.payload.price;
      const index = state.cart.findIndex(
        (item) => item.title === action.payload.title
      );
      const uptadedProduct = {
        ...state.cart[index],
        quantity: state.cart[index].quantity + 1,
      };
      state.cart[index] = uptadedProduct;
    },
    decreaseProduct: (state, action) => {
      state.totalAmount = state.totalAmount - action.payload.price;
      const index = state.cart.findIndex(
        (item) => item.title === action.payload.title
      );
      if (state.cart[index].quantity > 1) {
        // const uptadedProduct = {
        //   ...state.cart[index],
        //   quantity: state.cart[index].quantity - 1,
        // };
        // state.cart[index] = uptadedProduct;
        state.cart[index].quantity--;
      } else {
        state.cart = state.cart.filter(
          (item) => item.title !== action.payload.title
        );
      }
    },
    showCartHandler: (state) => {
      state.isActive = !state.isActive;
    },
  },
});

export const { addItem, increaseProduct, showCartHandler, decreaseProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
