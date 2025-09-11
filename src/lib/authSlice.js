import React from 'react'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser:
    typeof window !== "undefined" && localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))
      : null,
};
export const authSlice =createSlice({
    name: "user",
  initialState,
  reducers:{
     currentUserInfo: (state, action) => {
      state.currentUser = action.payload;
    },
  }

})
export const {currentUserInfo} = authSlice.actions
  
export default authSlice.reducer;