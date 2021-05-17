import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import categoriesReducer from "../features/categories/categoriesSlice";
import productsReducer from "../features/products/productsSlice";
import productReducer from "../features/product/productSlice";
import cartReducer from "../features/cart/cartSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      categories: categoriesReducer,
      products: productsReducer,
      product: productReducer,
      cart: cartReducer,
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
