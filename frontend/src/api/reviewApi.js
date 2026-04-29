import API from "./axiosConfig";
export const createReview = async (formData) => {
 

  return API.post(
    "/reviews",
    formData,
    
  );
};
export const getAllReviews = async () => {
  return API.get("/reviews");
};

export const getCompanyReviews = async (companyId) => {
  return API.get(`/reviews/${companyId}`);
};