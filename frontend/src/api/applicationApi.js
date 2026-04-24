import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/application",
});

export const applyJobApi = (formData) =>
  API.post("/apply", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// 👉 Get all applications (Admin)
export const getAllApplicationsApi = () =>
  API.get("/");

// 👉 Get recruiter applications
export const getRecruiterApplicationsApi = () =>
  API.get("/recruiter");

// 👉 Delete application
export const deleteApplicationApi = (id) =>
  API.delete(`/${id}`);