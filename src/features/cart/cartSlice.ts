import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  items: number;
}

const ISSERVER = typeof window === "undefined";

let initialCartItem: number = 0;

if (!ISSERVER) {
  initialCartItem = localStorage.getItem("cartItem")
    ? JSON.parse(localStorage?.getItem("cartItem"))
    : 0;
}

const initialState: CartState = {
  items: initialCartItem,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      state.items += 1;
      localStorage?.setItem("cartItem", JSON.stringify(state.items));
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
