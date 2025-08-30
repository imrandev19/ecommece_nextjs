import { createSlice } from '@reduxjs/toolkit';
const initialState ={
    currentCategory:"",
    viewProduct:{}
}
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    selectedCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
    selectedProduct:(state,action)=>{
      state.viewProduct =action.payload
    }
  },
});

export const { selectedProduct } = productSlice.actions;

export default productSlice.reducer;