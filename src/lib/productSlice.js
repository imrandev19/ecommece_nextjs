import { createSlice } from '@reduxjs/toolkit';
const initialState ={
    currentCategory:"",
    viewProduct:{}
}
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    selectedProduct: (state, action) => {
      state.currentCategory = action.payload;
    },
  },
});

export const { selectedProduct } = productSlice.actions;

export default productSlice.reducer;