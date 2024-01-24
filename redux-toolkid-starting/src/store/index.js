import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counter";
import AuthReducer from "./auth";

const store = configureStore({
  reducer: {
    counter: CounterReducer, /// this means is our values essenatially reducer means initialState and name so i mean our values
    auth: AuthReducer,
  },
});

export default store;
