import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/candidate",
});

API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");

    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);



export const getCandidates = () => API.get("/");

export const addCandidate = (data) => API.post("/", data);

export const updateCandidate = (id, data) =>
  API.put(`/${id}`, data);

export const deleteCandidate = (id) =>
  API.delete(`/${id}`);