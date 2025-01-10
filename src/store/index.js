import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/conunterSlice";
import shopReducer from "../features/shopSlice";
import { shopApi } from "../services/shop";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    shop: shopReducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
});

setupListeners(store.dispatch);

export default store;
