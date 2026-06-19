import API from "./axiosConfig";
export const registerUser = async (data, role) => {
  const response = await API.post("/auth/register", {
    ...data,
    role: role.toLowerCase(),
  });

  return response.data;
};
export const loginUser = async (email, password) => {
  const response = await API.post("/auth/login", {
    email,
    password,
  });
  console.log("Login response:", response.data);

  return response.data;
  
};

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