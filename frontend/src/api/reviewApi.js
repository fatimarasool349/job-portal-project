import API from "./axiosConfig";

export const createReview = async (formData) => {
  const res = await API.post("/reviews", formData);
  return res.data;
};

export const getAllReviews = async () => {
  const res = await API.get("/reviews");
  return res.data;
};

export const getCompanyReviews = async (companyId) => {
  const res = await API.get(`/reviews/company/${companyId}`);
  return res.data;
};

export const getReviewById = async (id) => {
  const res = await API.get(`/reviews/${id}`);
  return res.data;
};

export const verifyReview = async (id) => {
  const res = await API.patch(`/reviews/${id}/verify`);
  return res.data;
};

export const flagReview = async (id) => {
  const res = await API.patch(`/reviews/${id}/flag`);
  return res.data;
};

export const deleteReview = async (id) => {
  const res = await API.delete(`/reviews/${id}`);
  return res.data;
};

export const getUserReviews = async (userId) => {
  const res = await API.get(`/reviews/user/${userId}`);
  return res.data;
};

export const getRecruiterReviews = async () => {
  const res = await API.get("/reviews/recruiter");
  return res.data;
};

export const getReviewByUUID = async (reviewId) => {
  const res = await API.get(`/reviews/uuid/${reviewId}`);
  return res.data;
};