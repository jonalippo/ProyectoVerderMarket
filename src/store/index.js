import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/conunterSlice";
import shopReducer from "../features/shopSlice";
import { shopApi } from "../services/shop";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ordersApi } from "../services/orders";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    shop: shopReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware, ordersApi.middleware),
});

setupListeners(store.dispatch);

export default store;
