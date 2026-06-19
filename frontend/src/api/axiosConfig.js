import axios from "axios";

const AUTH_STORAGE_KEYS = [
  "token",
  "role",
  "recruiter_id",
  "companyId",
  "status",
  "auth",
  "persist:root",
];

let isRedirectingOn401 = false;

const clearAuthStorage = () => {
  AUTH_STORAGE_KEYS.forEach((key) => {
    localStorage.removeItem(key);
  });
};

const shouldSkip401Redirect = (pathname = "") => {
  return (
    pathname.startsWith("/login/") ||
    pathname.startsWith("/signup/") ||
    pathname.startsWith("/forgot-password") ||
    pathname.startsWith("/reset-password")
  );
};

const getRoleAwareLoginPath = () => {
  const rawRole = localStorage.getItem("role");
  const normalizedRole = rawRole?.trim()?.toLowerCase()?.replaceAll(" ", "");
  return `/login/${normalizedRole || "jobseeker"}`;
};

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  timeout: 15000,
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (!(config.data instanceof FormData)) {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => Promise.reject(error),
);

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const currentPath = window.location.pathname;

      if (!isRedirectingOn401 && !shouldSkip401Redirect(currentPath)) {
        isRedirectingOn401 = true;
        const loginPath = getRoleAwareLoginPath();

        clearAuthStorage();
        window.location.replace(loginPath);
      }
    }
    return Promise.reject(error);
  },
);

export default API;
