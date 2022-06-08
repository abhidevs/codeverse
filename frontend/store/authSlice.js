import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:
    (typeof localStorage !== "undefined" &&
      JSON.parse(localStorage.getItem("codeverse_user"))) ||
    null,
  accessToken:
    (typeof localStorage !== "undefined" &&
      JSON.parse(localStorage.getItem("codeverse_userSession"))) ||
    "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

export const { setUser, setAccessToken } = authSlice.actions;
export default authSlice.reducer;
