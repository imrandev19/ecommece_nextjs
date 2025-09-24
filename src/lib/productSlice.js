import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCategory: "",
  currentProduct: "",
  viewProduct: null,
  cart: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // ✅ Set current product id (if needed)
    selectedProduct: (state, action) => {
      state.currentProduct = action.payload;
    },

    // ✅ Save product for single view page
    selectedSingleProduct: (state, action) => {
      state.viewProduct = action.payload;
    },

    // ✅ Add to cart (with quantity + merge if already exists)
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.cart.find((p) => p._id === item._id);

      if (existing) {
        existing.quantity += item.quantity || 1;
      } else {
        state.cart.push({ ...item, quantity: item.quantity || 1 });
      }

      // persist cart per user
      if (item.userId) {
        localStorage.setItem("cart_" + item.userId, JSON.stringify(state.cart));
      }
    },

    // ✅ Remove item from cart
    removeFromCart: (state, action) => {
      const { _id, userId } = action.payload;
      state.cart = state.cart.filter((item) => item._id !== _id);

      if (userId) {
        localStorage.setItem("cart_" + userId, JSON.stringify(state.cart));
      }
    },

    // ✅ Initialize cart (from localStorage or API)
    setCart: (state, action) => {
      state.cart = action.payload;
    },

    // ✅ Clear cart (useful after checkout)
    clearCart: (state, action) => {
      state.cart = [];
      if (action.payload?.userId) {
        localStorage.removeItem("cart_" + action.payload.userId);
      }
    },
  },
});

// ✅ Export actions
export const {
  selectedProduct,
  selectedSingleProduct,
  addToCart,
  removeFromCart,
  setCart,
  clearCart,
} = productSlice.actions;

export default productSlice.reducer;
