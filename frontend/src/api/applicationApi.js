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

export const deleteApplicationApi = (publicId) =>
  API.delete(`/application/${publicId}`);

export const updateApplicationStatusApi = (publicId, status) =>
  API.patch(`/application/${publicId}`, { status });

