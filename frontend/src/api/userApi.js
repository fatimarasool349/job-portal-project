import API from "./axiosConfig.js";

export const getAllJobseekers = async () => {
  return await API.get(`/users/jobseekers`);
};
export const updateJobseeker = (id, data) =>
  API.put(`/users/jobseekers/${id}`, data);

export const deleteJobseeker = (id) =>
  API.delete(`/users/jobseekers/${id}`);

export const createJobseeker = (data) =>
  API.post(`/users/jobseekers`, data);