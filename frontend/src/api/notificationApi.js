import API from "./axiosConfig.js";


// GET notifications
export const getNotificationsApi = async (token) => {
  return await API.get("/notifications"
  );
};

export const markNotificationsAsReadApi = async () => {
  return await API.put("/notifications/mark-read");
};