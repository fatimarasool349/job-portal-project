import { createSlice } from "@reduxjs/toolkit";
import { applicationsData, initialApplications } from "../../constant";

const applicationSlice = createSlice({
  name: "applications",
  initialState: {
    applications: initialApplications,
  },

  reducers: {
    updateApplicationStatus: (state, action) => {
      const { id, status } = action.payload;

      const app = state.applications.find((application) => application.id === id);
      if (app) {
        app.status = status;
      }
    },
    deleteApplication: (state, action) => {
  state.applications = state.applications.filter(
    (application) => application.id !== action.payload
  );
},
  },
});

export const { updateApplicationStatus, deleteApplication } = applicationSlice.actions;
export default applicationSlice.reducer;