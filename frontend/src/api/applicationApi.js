import API from "./axiosConfig";

export const applyJobApi = async (formData) => {
  return API.post("/application/apply", formData);
};

export const getAllApplicationsApi = () => API.get("/application");
export const getMyApplicationsApi = () => API.get("/application/my");

export const getRecruiterApplicationsApi = () =>
  API.get("/application/recruiter");

export const deleteApplicationApi = (publicId) =>
  API.delete(`/application/${publicId}`);
export const getApplicationById = (publicId) =>
  API.get(`/application/${publicId}`);

export const updateApplicationStatusApi = (publicId, status) =>
  API.patch(`/application/${publicId}`, { status });

export const withdrawApplication = (publicId) =>
  API.delete(`/application/withdraw/${publicId}`);