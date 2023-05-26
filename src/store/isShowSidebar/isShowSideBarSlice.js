import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false };
export const isShowSideBarSlice = createSlice({
  name: "productModal",
  initialState,
  reducers: {
    toggle: (state, action) => {
      state.value = !state.value;
    },
  }
});
export const { toggle } = isShowSideBarSlice.actions;
export default isShowSideBarSlice.reducer