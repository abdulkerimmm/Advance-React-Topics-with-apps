import { createStore } from "redux";

const initialState = { count: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      count: state.count + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      count: state.count - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "incrementbyfive") {
    return {
      count: state.count + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggleHandler") {
    return {
      count: state.count,
      showCounter: !state.showCounter,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
