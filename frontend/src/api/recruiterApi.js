import API from "./axiosConfig.js";

export const getRecruiters = (params) =>
  API.get("/recruiters", { params });

export const updateRecruiter = (id, data) =>
  API.put(`/recruiters/${id}`, data);

export const deleteRecruiter = (id) =>
  API.delete(`/recruiters/${id}`);

export const assignCompanyToRecruiter = (id, companyId) =>
  API.put(`/recruiters/${id}/assign-company`, {
    companyId,
  });