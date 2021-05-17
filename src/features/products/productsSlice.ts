import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCategories } from "./productsAPI";

export const getCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => await fetchCategories()
);

export interface CategoriesState {
  list: string[];
  status: "loading" | "success" | "failed";
  error: string;
}

const initialState: CategoriesState = {
  list: [],
  status: null,
  error: null,
};

const categoriesSlide = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        if (Array.isArray(payload)) {
          state.status = "success";
          state.list = payload;
        } else {
          state.error = payload;
          state.status = "failed";
        }
      })
      .addCase(getCategories.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default categoriesSlide.reducer;
