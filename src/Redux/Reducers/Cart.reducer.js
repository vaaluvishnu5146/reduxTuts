import { createSlice } from "@reduxjs/toolkit";

export const cartReducer = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItemToCart } = cartReducer.actions;
export default cartReducer.reducer;
