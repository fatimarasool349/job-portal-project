import axios from "axios";

const  JOB_API = "http://localhost:5000/api/job";
const getToken = () => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  return auth?.token;
};
export const getAllJobs = async () => {
  const res = await axios.get(JOB_API);
  return res.data.jobs;
};

// CREATE job
export const createJob = async (data) => {
      const token = getToken();

  const res = await axios.post(JOB_API, data, {
     headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

// DELETE job
export const deleteJob = async (id) => {
  const res = await axios.delete(`${JOB_API}/${id}`);
  return res.data;
};

// UPDATE job
export const updateJob = async (id, data) => {
  const res = await axios.put(`${JOB_API}/${id}`, data);
  return res.data;
};