import API from "./axiosConfig.js";

export const getAllCompanies = async () => {
  const res = await API.get("/company");
  console.log("API RESPONSE:", res.data);
  return res.data;
};

export const getCompanyById = async (id) => {
  const res = await API.get(`/company/${id}`);
  return res.data;
};

export const createCompany = async (data) => {
  const res = await API.post("/company", data);
  return res.data;
};

export const updateCompany = async (id, data) => {
  const res = await API.put(`/company/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const deleteCompany = async (id) => {
  const res = await API.delete(`/company/${id}`);
  return res.data;
};

export const getMyCompany = async () => {
  const res = await API.get("/company/my-company");
  return res.data;
};