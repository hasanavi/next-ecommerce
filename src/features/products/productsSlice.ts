import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "./productsAPI";
import type { Product } from "./productsAPI";

export const getProducts = createAsyncThunk(
  "products/fetchProducts",
  async (category: string) => await fetchProducts(category)
);

export interface ProductsState {
  list: Product[];
  status: "loading" | "success" | "failed";
  error: string;
}

const initialState: ProductsState = {
  list: [],
  status: null,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        if (Array.isArray(payload)) {
          state.status = "success";
          state.list = payload;
        } else {
          state.error = payload;
          state.status = "failed";
        }
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default productsSlice.reducer;
