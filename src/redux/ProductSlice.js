import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
  },
  reducers: {
    addToCart: (state, action) => {},
  },
});

export const { addToCart } = ProductSlice.actions;
