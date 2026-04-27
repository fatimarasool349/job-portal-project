import API from "./axiosConfig.js";

export const getCandidates = () => API.get("/candidate");

export const addCandidate = (data) => API.post("/candidate", data);

export const updateCandidate = (id, data) =>
  API.put(`/candidate/${id}`, data);

export const deleteCandidate = (id) =>
  API.delete(`/candidate/${id}`);