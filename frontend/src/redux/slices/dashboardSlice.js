import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDashboardData } from "../../api/dashboardApi";

export const getDashboardData = createAsyncThunk(
  "dashboard/getData",
  async () => {
    return await fetchDashboardData();
  },
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    stats: [],
    actions: [],
    activities: [],
    charts: {
      jobsPerMonth: [],
      applicationsPerMonth: [],
      jobsByCategory: [],
      topCategories: [],
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDashboardData.fulfilled, (state, action) => {
      state.stats = action.payload.stats;
      state.actions = action.payload.actions;
      state.activities = action.payload.activities;
      state.charts = action.payload.charts;
    });
  },
});

export default dashboardSlice.reducer;

