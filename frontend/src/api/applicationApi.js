import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/application",
});


export const applyJobApi = async (formData) => {
  const token = localStorage.getItem("token"); // 👈 GET TOKEN

  if (!token) {
    console.error("❌ No token found");
    throw new Error("Not authenticated");
  }

  return axios.post(
    "http://localhost:5000/api/application/apply",
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`, // 👈 VERY IMPORTANT
        // Don't manually set Content-Type for FormData - let axios handle it
      },
    }
  );
};

// 👉 Get all applications (Admin)
export const getAllApplicationsApi = () =>
  API.get("/");

// 👉 Get recruiter applications
export const getRecruiterApplicationsApi = () =>
  API.get("/recruiter");

// 👉 Delete application
export const deleteApplicationApi = (id) =>
  API.delete(`/${id}`);