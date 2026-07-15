import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  applyJobApi,
  getAllApplicationsApi,
  getRecruiterApplicationsApi,
  deleteApplicationApi,
  updateApplicationStatusApi,
} from "../../api/applicationApi";
export const applyJob = createAsyncThunk(
  "apply",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await applyJobApi(formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Something went wrong",
      );
    }
  },
);

// GET ALL (Admin)
export const fetchAllApplications = createAsyncThunk("fetchAll", async () => {
  const res = await getAllApplicationsApi();
  return res.data;
});

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

export const updateApplicationStatus = createAsyncThunk(
  "updateStatus",
  async ({ id, ...data }) => {
    const res = await updateApplicationStatusApi(id, data);
    return res.data.application;
  },
);

const applicationSlice = createSlice({
  name: "applications",
  initialState: {
    applications: [],
    loading: false,
    aiAnalysis: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(applyJob.fulfilled, (state, action) => {
        state.applications.unshift(action.payload.application);
        state.aiAnalysis = action.payload.aiAnalysis;

      })
      .addCase(applyJob.rejected, () => {})

      .addCase(fetchAllApplications.fulfilled, (state, action) => {
        state.applications = action.payload;
      })

      .addCase(fetchRecruiterApplications.fulfilled, (state, action) => {
        state.applications = action.payload;
      })

      .addCase(deleteApplication.fulfilled, (state, action) => {
        state.applications = state.applications.filter(
          (app) => app._id !== action.payload,
        );
      })
      .addCase(updateApplicationStatus.fulfilled, (state, action) => {
        const updatedApp = action.payload;

        const index = state.applications.findIndex(
          (app) => app.publicId === updatedApp.publicId,
        );

        if (index !== -1) {
          state.applications[index] = updatedApp;
        }
      });
  },
});

export default applicationSlice.reducer;
