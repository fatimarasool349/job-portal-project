import API from "./axiosConfig.js";

// GET notifications
export const getNotificationsApi = async () => {
  return await API.get("/notifications");
};

export const markNotificationsAsReadApi = async () => {
  return await API.put("/notifications/mark-read");
};