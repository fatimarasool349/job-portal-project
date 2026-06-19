import API from "./axiosConfig.js";

export const fetchDashboardData = async () => {
  const res = await API.get("/dashboard");

  return res.data;
};