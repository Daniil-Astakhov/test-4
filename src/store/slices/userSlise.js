import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  currentUser: {
    name: "daniil",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const {
  showAuthMessage,
  hideAuthMessage,
  signOutSuccess,
  showLoading,
  setCurrentUser,
} = userSlice.actions;

export default userSlice.reducer;
