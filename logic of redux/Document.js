const redux = require("redux");

const reducerfunction = (state = { count: 5 }, action) => {
  if (action.type === "increment") {
    return {
      state: state.count + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      state: state.count - 1,
    };
  }
  return state;
};

const store = redux.createStore(reducerfunction);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: "increment" }); // {count:6}
store.dispatch({ type: "decrement" }); // {count:4}
store.dispatch({ type: "" }); // {count:5}
