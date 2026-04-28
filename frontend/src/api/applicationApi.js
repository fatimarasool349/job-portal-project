import API from "./axiosConfig";



export const applyJobApi = async (formData) => {
 

  return API.post(
    "/application/apply",
    formData,
    
  );
};

export const getAllApplicationsApi = () =>
  API.get("/application");

export const getRecruiterApplicationsApi = () =>
  API.get("/application/recruiter");

export const deleteApplicationApi = (id) =>
  API.delete(`/application/${id}`);

export const updateApplicationStatusApi = (id, status) =>
  API.patch(`/application/${id}`, { status });

