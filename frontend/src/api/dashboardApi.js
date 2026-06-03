import API from "./axiosConfig.js";

export const fetchDashboardData = async () => {
  const token = localStorage.getItem("token");

  const res = await API.get("/dashboard", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};