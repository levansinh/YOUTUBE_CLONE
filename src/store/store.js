import { configureStore } from "@reduxjs/toolkit";
import isShowSideBarSlice from "./isShowSidebar/isShowSideBarSlice";
export const store = configureStore({
  reducer: {
    isShowSideBar: isShowSideBarSlice,
  },
});
