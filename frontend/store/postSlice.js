import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: {},
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = { ...state.posts, ...action.payload };
    },
    addLikeToPost: (state, action) => {
      const { postId, likeId } = action.payload;
      state.posts[postId].likes.push({ _id: likeId });
    },
    removeLikeFromPost: (state, action) => {
      const { postId, likeId } = action.payload;
      const postLikes = state.posts[postId].likes.filter(
        (like) => like._id !== likeId
      );
      state.posts[postId].likes = postLikes;
    },
    deleteAllPosts: (state, action) => {
      state.posts = {};
    },
  },
});

export const { setPosts, deleteAllPosts, addLikeToPost, removeLikeFromPost } =
  postSlice.actions;
export default postSlice.reducer;
