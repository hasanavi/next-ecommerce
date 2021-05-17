import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import categoriesReducer from "../features/categories/categoriesSlice";
import productsReducer from "../features/products/productsSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      categories: categoriesReducer,
      products: productsReducer,
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
