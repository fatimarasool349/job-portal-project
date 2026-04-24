import axios from "axios";

const COMPANY_API = "http://localhost:5000/api/company";

// token helper
const getToken = () => localStorage.getItem("token");

export const getAllCompanies = async () => {
  const res = await axios.get(COMPANY_API);
  console.log("API RESPONSE:", res.data); // 🔥 add this

  return res.data;
};

export const getCompanyById = async (id) => {
  const res = await axios.get(`${COMPANY_API}/${id}`);
  return res.data;
};

export const createCompany = async (data) => {
  const token = getToken();

  const res = await axios.post(COMPANY_API, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const updateCompany = async (id, data) => {
  const token = getToken();

  const res = await axios.put(`${COMPANY_API}/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};

export const deleteCompany = async (id) => {
  const token = getToken();

  const res = await axios.delete(`${COMPANY_API}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
