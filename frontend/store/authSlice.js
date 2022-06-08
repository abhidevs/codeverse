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
  userPosts: {},
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
    setUserPosts: (state, action) => {
      state.userPosts = { ...state.userPosts, ...action.payload };
    },
    addLikeToUserPost: (state, action) => {
      const { postId, likeId } = action.payload;
      state.userPosts[postId].likes.push(likeId);
    },
    removeLikeFromUserPost: (state, action) => {
      const { postId, likeId } = action.payload;
      const postLikes = state.userPosts[postId].likes.filter(
        (like) => like !== likeId
      );
      state.userPosts[postId].likes = postLikes;
    },
    deleteAllUserPosts: (state, action) => {
      state.userPosts = {};
    },
  },
});

export const {
  setUser,
  setAccessToken,
  setUserPosts,
  addLikeToUserPost,
  removeLikeFromUserPost,
  deleteAllUserPosts,
} = authSlice.actions;
export default authSlice.reducer;
