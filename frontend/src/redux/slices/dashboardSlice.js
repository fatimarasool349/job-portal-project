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

// const initialState = {
//   stats: stats,
//   actions: actions,
//   activities: activities,
// };

// const dashboardSlice = createSlice({
//   name: "dashboard",
//   initialState,
//   reducers: {
//     setStats: (state, action) => {
//       state.stats = action.payload;
//     },
//     setActions: (state, action) => {
//       state.actions = action.payload;
//     },
//     setActivities: (state, action) => {
//       state.activities = action.payload;
//     },
//   },
// });

// export const { setStats, setActions, setActivities } =
//   dashboardSlice.actions;

// export default dashboardSlice.reducer;
