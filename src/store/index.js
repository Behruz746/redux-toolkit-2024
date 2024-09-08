import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slice/todoSlice";

export default configureStore({
  reducer: { todos: todoReducer },
  devTools: process.env.NODE_ENV !== "production", // for redux dev tool
});
