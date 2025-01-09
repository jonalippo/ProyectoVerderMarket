import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/conunterSlice";

export default configureStore({
  reducer: { counter: counterReducer },
});
