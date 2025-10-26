import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/donuts";

export const fetchDonuts = createAsyncThunk("donuts/fetchAll", async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

const donutsSlice = createSlice({
  name: "donuts",
  initialState: { items: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDonuts.pending, (state) => { state.status = "loading"; })
      .addCase(fetchDonuts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      });
  },
});

export default donutsSlice.reducer;
