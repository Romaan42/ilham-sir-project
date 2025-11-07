import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/axiosConfig";

export const adminLogin = createAsyncThunk(
  "adminLogin/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post("/admin-login", credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const checkAdminLogin = createAsyncThunk(
  "adminLogin/checkLogin",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/admin-check-login");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Not logged in");
    }
  }
);

export const adminLogout = createAsyncThunk("adminLogout", async () => {
  await api.get("/admin-logout");
});

const adminLoginSlice = createSlice({
  name: "adminLogin",
  initialState: {
    loginLoading: true,
    adminData: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state) => {
        state.loginLoading = true;
        state.error = null;
      })
      .addCase(adminLogin.fulfilled, (state, action) => {
        state.adminData = action.payload;
        state.error = null;
        state.loginLoading = false;
      })
      .addCase(adminLogin.rejected, (state, action) => {
        state.adminData = null;
        state.error = action.payload;
        state.loginLoading = false;
      })
      .addCase(checkAdminLogin.pending, (state) => {
        state.loginLoading = true;
      })
      .addCase(checkAdminLogin.fulfilled, (state, action) => {
        state.loginLoading = false;
        state.adminData = action.payload;
      })
      .addCase(checkAdminLogin.rejected, (state) => {
        state.loginLoading = false;
        state.adminData = null;
      })
      .addCase(adminLogout.fulfilled, (state) => {
        state.adminData = null;
      });
  },
});

export default adminLoginSlice.reducer;
