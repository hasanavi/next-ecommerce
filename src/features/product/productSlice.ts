import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProduct } from "./productAPI";
import type { Product } from "./productAPI";

export const getProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id: string) => await fetchProduct(id)
);

export interface ProductState {
  product: Product;
  status: "loading" | "success" | "failed";
  error: string;
}

const initialState: ProductState = {
  product: {
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  },
  status: null,
  error: null,
};

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProduct.fulfilled, (state, { payload }) => {
        if (typeof payload === "object") {
          state.status = "success";
          state.product = payload;
        } else {
          state.error = payload;
          state.status = "failed";
        }
      })
      .addCase(getProduct.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default productsSlice.reducer;
