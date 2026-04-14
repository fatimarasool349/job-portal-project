import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import applicationReducer from "./slices/applicationSlice";
import dashboardReducer from "./slices/dashboardSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,

    applications: applicationReducer,
    dashboard: dashboardReducer,
  },
});
