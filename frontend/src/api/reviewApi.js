import API from "./axiosConfig";

export const createReview = async (formData) => {
  const token = localStorage.getItem("token");

  return API.post("/reviews", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAllReviews = async () => {
  return API.get("/reviews");
};

export const getCompanyReviews = async (companyId) => {
  return API.get(`/reviews/company/${companyId}`);
  const res = await getCompanyReviews(companyId);

  setReviews(res.data.reviews);
  setAvgRating(res.data.averageRating);
};

export const getReviewById = async (id) => {
  return API.get(`/reviews/${id}`);
};

export const verifyReview = async (id) => {
  return API.patch(`/reviews/${id}/verify`);
};

export const flagReview = async (id) => {
  return API.patch(`/reviews/${id}/flag`);
};

export const deleteReview = async (id) => {
  return API.delete(`/reviews/${id}`);
};

export const getUserReviews = async (userId) => {
  return API.get(`/reviews/user/${userId}`);
};

export const getRecruiterReviews = async () => {
  return API.get("/reviews/recruiter");
  
};
export const getReviewByUUID = async (reviewId) => {
  return API.get(`/reviews/uuid/${reviewId}`);
};