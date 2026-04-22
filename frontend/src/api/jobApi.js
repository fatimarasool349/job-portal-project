import axios from "axios";

const  JOB_API = "http://localhost:5000/api/job";
const getToken = () => {
  return localStorage.getItem("token");
};
export const getAllJobs = async () => {
  const res = await axios.get(JOB_API);
  return res.data.jobs;
};
export const getJobById = async (id) => {
  const res = await axios.get(`${JOB_API}/${id}`);
  return res.data.job;
};

export const createJob = async (data) => {
  const token = getToken();

  console.log("AUTH TOKEN:", token); // 👈 ADD THIS

  const res = await axios.post(JOB_API, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const deleteJob = async (id) => {
  const token = localStorage.getItem("token");

  const res = await axios.delete(`${JOB_API}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const updateJob = async (id, data) => {
  const token = localStorage.getItem("token");

  const res = await axios.put(`${JOB_API}/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};