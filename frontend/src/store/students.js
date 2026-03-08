import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/axiosConfig";

export const getAllStudents = createAsyncThunk("getstudents", async () => {
  const res = await api.get("/students-data");
  if (res) return res.data;
});

const studentSlice = createSlice({
  name: "student",
  initialState: {
    loading: false,
    students: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllStudents.pending, (state) => {
        state.loading = true;
        state.students = [];
      })
      .addCase(getAllStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
      })
      .addCase(getAllStudents.rejected, (state) => {
        state.loading = false;
        state.students = [];
      });
  },
});

export default studentSlice;
