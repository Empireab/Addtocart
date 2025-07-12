import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const Newitem = action.payload;

      const exist = state.cartItem.find((item) => item.id === Newitem.id);

      if (exist) {
        exist.quantity += 1;
      } else {
        state.cartItem.push({
          ...Newitem,
          quantity: 1,
        });
      }
    },

    removeFormCart: (state, actions) => {
      const id = actions.payload;

      state.cartItem = state.cartItem.filter((item) => item.id !== id);
    },
  },
});

export const { addToCart } = ProductSlice.actions;
