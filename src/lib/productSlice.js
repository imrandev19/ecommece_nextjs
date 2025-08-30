import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCategory: "",
  currentProduct: "",
  viewProduct: null, // better to use null, not {}
  cart: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectedProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
    selectedSingleProduct: (state, action) => {
      state.viewProduct = action.payload;   // ✅ fix here
    },
    selectProductforAdd: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      // ✅ Remove only the product with the matching id
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("selectProductforAdd", JSON.stringify(state.cart));
    },
    setCart: (state, action) => {
      // ✅ Initialize cart from localStorage
      state.cart = action.payload;
    },
  },
});

export const { selectedProduct, selectedSingleProduct, selectProductforAdd, removeFromCart, setCart } =
  productSlice.actions;
export default productSlice.reducer;
