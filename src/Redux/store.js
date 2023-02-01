import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Reducers/Todo.reducer";
import productReducer from "./Reducers/Product.reducer";
import cartReducer from "./Reducers/Cart.reducer";

// WE NEED CONFIGURE STORE FUNCTION
// WE NEED ROOT REDUCER

export default configureStore({
  reducer: {
    todo: todoReducer,
    product: productReducer,
    cart: cartReducer,
  },
});
