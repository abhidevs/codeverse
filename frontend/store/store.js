import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import auth from "./authSlice";
import post from "./postSlice";

const combinedReducer = combineReducers({
  auth,
  post,
});

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    console.log(action.payload);
    const nextState = {
      ...state,
      auth: {
        user: action.payload.user || state.auth.user,
        accessToken: action.payload.accessToken || state.auth.accessToken,
      },
      post: {
        posts: { ...state.post.posts, ...action.payload.post.posts },
      },
    };

    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer: masterReducer,
  });

export const wrapper = createWrapper(makeStore, { debug: true });
