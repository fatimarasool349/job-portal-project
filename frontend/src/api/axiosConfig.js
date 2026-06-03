import axios from "axios";

// Create axios instance
const API = axios.create({
  baseURL: "http://localhost:5000/api",

});

// Add request interceptor to attach token to all requests
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log("✅ Token attached to request:", config.url);
    }

    // 🔥 Detect FormData
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle token expiration
API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
    //   localStorage.removeItem("token");
    //   localStorage.removeItem("role");
    //   localStorage.removeItem("recruiter_id");
    //   // Redirect to login
    //   window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default API;
