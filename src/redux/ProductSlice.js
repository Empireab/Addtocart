import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItem.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItem.push({ ...newItem, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartItem = state.cartItem.filter((item) => item.id !== id);
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cartItem.find((item) => item.id === id);
      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cartItem.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cartItem = state.cartItem.filter((item) => item.id !== id);
      }
    },

    clearCart: (state) => {
      state.cartItem = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = ProductSlice.actions;

export default ProductSlice.reducer;
