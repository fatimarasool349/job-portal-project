import API from "./axiosConfig.js";

export const getAllJobs = async () => {
  const res = await API.get("/job");
  return res.data.jobs;
};

export const getJobById = async (id) => {

  const res = await API.get(`/job/${id}`);
  return res.data.job;
};
export const getJobBySlug = async (slug) => {
      console.log("SLUG IN API:", slug); // 👈 debug

  const res = await API.get(`/job/${slug}`);
  console.log("API RESPONSE:", res.data);
  return res.data.job;
};

export const createJob = async (data) => {
  const res = await API.post("/job", data);
  return res.data;
};

export const deleteJob = async (id) => {
  const res = await API.delete(`/job/${id}`);
  return res.data;
};

export const updateJob = async (id, data) => {
  const res = await API.put(`/job/${id}`, data);
  return res.data;
};
