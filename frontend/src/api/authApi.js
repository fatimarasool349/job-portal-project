import API from "./axiosConfig";
export const forgotPassword = async (email) => {
  const response = await API.post("/auth/forgot-password", {
    email,
  });

  return response.data;
};

export const resetPassword = async (token, password) => {
  const response = await API.post(
    `/auth/reset-password/${token}`,
    {
      password,
    }
  );

  return response.data;
};