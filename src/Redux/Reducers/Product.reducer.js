import { createSlice } from "@reduxjs/toolkit";

export const productReducer = createSlice({
  name: "product",
  initialState: {
    products: [
      {
        id: 1,
        name: "UCB Sweat shirt",
        image:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20648580/2022/11/7/ad43ab73-2c6e-44c5-8105-9847aa76072f1667812264315Sweatshirts1.jpg",
        sizes: ["s", "m", "l", "xl", "xxl"],
        price: 299,
        discount: "10%",
      },
      {
        id: 2,
        name: "UCB printed T-shirt",
        image:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17784136/2022/11/16/fe6f4310-31f3-4d84-9a62-f731b666434a1668597595340-United-Colors-of-Benetton-Men-Fluorescent-Green-Pure-Cotton--1.jpg",
        sizes: ["s", "m", "l", "xl", "xxl"],
        price: 199,
        discount: "10%",
      },
      {
        id: 3,
        name: "UCB printed T-shirt",
        image:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17565108/2022/5/26/1ef99712-a3a9-4316-a4c4-31d799228a241653545662915-United-Colors-of-Benetton-Men-Black-Brand-Logo-Striped-Pure--1.jpg",
        sizes: ["s", "m", "l", "xl", "xxl"],
        price: 399,
        discount: "10%",
      },
      {
        id: 4,
        name: "UCB printed Full sleeve T-shirt",
        image:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19338406/2022/8/1/da9b86d8-4b41-48ca-9ac9-21435c5239631659356212653Sweatshirts1.jpg",
        sizes: ["s", "m", "l", "xl", "xxl"],
        price: 399,
        discount: "10%",
      },
    ],
  },
  reducers: {
    saveAllProducts: (state, action) => {
      console.log(state, action);
      state.products.push(action.payload);
    },
  },
});

export const { saveAllProducts } = productReducer.actions;
export default productReducer.reducer;
