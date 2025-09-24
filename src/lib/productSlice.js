import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCategory: "",
  currentProduct: "",
  viewProduct: null,
  cart: [],
};

// ✅ helper to load cart for specific user
const loadCart = (userId) => {
  if (typeof window !== "undefined" && userId) {
    const saved = localStorage.getItem("cart_" + userId);
    return saved ? JSON.parse(saved) : [];
  }
  return [];
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectedProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
    selectedSingleProduct: (state, action) => {
      state.viewProduct = action.payload;
    },

    // ✅ add product to user-specific cart
    selectProductforAdd: (state, action) => {
      const { product, userId } = action.payload;
      if (!userId) return;

      const existingIndex = state.cart.findIndex(
        (item) => item._id === product._id
      );

      if (existingIndex >= 0) {
        state.cart[existingIndex].quantity =
          (state.cart[existingIndex].quantity || 1) + 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("cart_" + userId, JSON.stringify(state.cart));
    },

    // ✅ remove product from user-specific cart
    removeFromCart: (state, action) => {
      const { _id, userId } = action.payload;
      if (!userId) return;

      state.cart = state.cart.filter((item) => item._id !== _id);
      localStorage.setItem("cart_" + userId, JSON.stringify(state.cart));
    },

    // ✅ set cart for current user
    setCart: (state, action) => {
      state.cart = action.payload;
    },

    // ✅ clear user cart
    clearCart: (state, action) => {
      const userId = action.payload;
      state.cart = [];
      localStorage.setItem("cart_" + userId, JSON.stringify([]));
    },
  },
});

export const {
  selectedProduct,
  selectedSingleProduct,
  selectProductforAdd,
  removeFromCart,
  setCart,
  clearCart,
} = productSlice.actions;

export default productSlice.reducer;
