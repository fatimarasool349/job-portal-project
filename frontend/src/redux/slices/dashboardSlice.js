import { createSlice } from "@reduxjs/toolkit";
import { stats, actions, activities } from "../../constants";

const initialState = {
  stats: stats,
  actions: actions,
  activities: activities,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setStats: (state, action) => {
      state.stats = action.payload;
    },
    setActions: (state, action) => {
      state.actions = action.payload;
    },
    setActivities: (state, action) => {
      state.activities = action.payload;
    },
  },
});

export const { setStats, setActions, setActivities } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;