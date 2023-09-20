import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice";

export const store = configureStore({
  reducer: {
    cartReducer,
  },
});
// npm i @reduxjs/toolkit
//  npm i react-redux

// 1 store => register slice
// we use store as a provider