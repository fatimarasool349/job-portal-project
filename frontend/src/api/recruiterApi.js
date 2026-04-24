import axios from "axios";

const API = "http://localhost:5000/api/recruiters";

export const getRecruiters = (params) =>
  axios.get(API, { params });

export const updateRecruiter = (id, data) =>
  axios.put(`${API}/${id}`, data);

export const deleteRecruiter = (id) =>
  axios.delete(`${API}/${id}`);

export const assignCompanyToRecruiter = (id, companyId) =>
  axios.put(`${API}/${id}/assign-company`, {
    companyId,
  });