import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  applyJobApi,
  getAllApplicationsApi,
  getRecruiterApplicationsApi,
  deleteApplicationApi,
} from "../../api/applicationApi";

// APPLY
export const applyJob = createAsyncThunk("apply", async (formData) => {
  const res = await applyJobApi(formData);
  return res.data;
});

// GET ALL (Admin)
export const fetchAllApplications = createAsyncThunk("fetchAll", async () => {
  const res = await getAllApplicationsApi();
  return res.data;
});

// GET RECRUITER
export const fetchRecruiterApplications = createAsyncThunk(
  "fetchRecruiter",
  async () => {
    const res = await getRecruiterApplicationsApi();
    return res.data;
  },
);

// DELETE
export const deleteApplication = createAsyncThunk("delete", async (id) => {
  await deleteApplicationApi(id);
  return id;
});

const applicationSlice = createSlice({
  name: "applications",
  initialState: {
    applications: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(applyJob.fulfilled, (state, action) => {
        state.applications.unshift(action.payload.application);
      })

      // GET ALL
      .addCase(fetchAllApplications.fulfilled, (state, action) => {
        state.applications = action.payload;
      })

      // GET RECRUITER
      .addCase(fetchRecruiterApplications.fulfilled, (state, action) => {
        state.applications = action.payload;
      })

      // DELETE
      .addCase(deleteApplication.fulfilled, (state, action) => {
        state.applications = state.applications.filter(
          (app) => app._id !== action.payload,
        );
      });
  },
});

export default applicationSlice.reducer;
