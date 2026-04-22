import axios from "axios";

const API = "http://localhost:5000/api/users";

export const getAllJobseekers = async () => {
  return await axios.get(`${API}/jobseekers`);
};
export const updateJobseeker = (id, data) =>
  axios.put(`${API}/jobseekers/${id}`, data);

export const deleteJobseeker = (id) =>
  axios.delete(`${API}/jobseekers/${id}`);

export const createJobseeker = (data) =>
  axios.post(`${API}/jobseekers`, data);