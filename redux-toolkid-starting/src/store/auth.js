import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: true };

const authSlice = createSlice({
  name: "authntication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const AuthActions = authSlice.actions;

export default authSlice.reducer;
