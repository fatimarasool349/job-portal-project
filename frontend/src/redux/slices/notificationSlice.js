import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getNotificationsApi,
  markNotificationsAsReadApi,
} from "../../api/notificationApi";

// GET NOTIFICATIONS
export const fetchNotifications = createAsyncThunk(
  "notifications/fetch",

  async (token) => {
    const res = await getNotificationsApi(token);
    return res.data.notifications;
  },
);
export const markNotificationsAsRead = createAsyncThunk(
  "notifications/mark-read",
  async (token) => {
    const res = await markNotificationsAsReadApi(token);
    return res.data;
  },
);
console.log("THUNK HIT");

const notificationSlice = createSlice({
  name: "notifications",
  initialState: {
    notifications: [],
    loading: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications = action.payload;
      })
      .addCase(fetchNotifications.rejected, (state) => {
        state.loading = false;
      })
      .addCase(markNotificationsAsRead.fulfilled, (state) => {
        state.notifications = state.notifications.map((n) => ({
          ...n,
          isRead: true,
        }));
      });
  },
});

export default notificationSlice.reducer;
