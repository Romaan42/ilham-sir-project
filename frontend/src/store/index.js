import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./students";
import adminLoginSlice from "./adminLogin";

const store = configureStore({
  reducer: {
    students: studentSlice.reducer,
    adminLogin: adminLoginSlice,
  },
});

export default store;
