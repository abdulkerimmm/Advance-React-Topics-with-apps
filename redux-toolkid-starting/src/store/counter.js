import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { count: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    incrementbyfive(state, action) {
      state.count = state.count + action.payload;
    },
    toggleHandler(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const CounterActions = counterSlice.actions; // this means actually actions means our functions so reducer part

export default counterSlice.reducer;
