import React, { useReducer } from "react";
import CartContext from "./cart-context";

const initialState = {
  items: [],
  totalAmount: 0,
};
//REDUCER FUNCTION
const reducer = (state, action) => {
  if (action.type === "ADD") {
    const updateTotalAmount =
      state.totalAmount + action.payload.amount * action.payload.price;
    let updateItems;
    const existItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    let existItem = state.items[existItemIndex];
    if (existItem) {
      const updateItem = {
        ...existItem,
        amount: existItem.amount + action.payload.amount,
      };
      updateItems = [...state.items];
      updateItems[existItemIndex] = updateItem;
    } else {
      updateItems = state.items.concat(action.payload);
    }
    return { items: updateItems, totalAmount: updateTotalAmount };
  }

  if (action.type == "REMOVE") {
    let updateItems2;
    const existItemIndex2 = state.items.findIndex(
      (item) => item.id === action.payload
    );
    let existItem2 = state.items[existItemIndex2];
    const updateTotalAmount = state.totalAmount - existItem2.price;
    if (existItem2.amount === 1) {
      updateItems2 = state.items.filter((item) => item.id !== action.payload);
    } else {
      const updateItem2 = {
        ...existItem2,
        amount: existItem2.amount - 1,
      };
      updateItems2 = [...state.items];
      updateItems2[existItemIndex2] = updateItem2;
    }
    return { items: updateItems2, totalAmount: updateTotalAmount };
  }

  if (action.type === "RESET") {
    return initialState;
  }
  return initialState;
};

const CartProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("items", state.items);

  const addItemToCartHandler = (item) => {
    dispatch({ type: "ADD", payload: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const resetItemFromCartHandler = (id) => {
    dispatch({ type: "RESET" });
  };

  const cartcontext = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    resetItems: resetItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
