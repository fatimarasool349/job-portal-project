/**
 * API configuration and endpoints
 * Centralized API constants for consistency across the application
 */

export const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
export const API_VERSION = "api";
export const API_PREFIX = `${API_BASE_URL}/${API_VERSION}`;

/**
 * Auth endpoints
 */
export const AUTH_ENDPOINTS = {
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signup",
  LOGOUT: "/auth/logout",
  ME: "/auth/me",
  FORGOT_PASSWORD: "/auth/forgot-password",
  RESET_PASSWORD: "/auth/reset-password",
  REFRESH_TOKEN: "/auth/refresh-token",
};

/**
 * User endpoints
 */
export const USER_ENDPOINTS = {
  GET_ALL: "/users",
  GET_ONE: (id) => `/users/${id}`,
  CREATE: "/users",
  UPDATE: (id) => `/users/${id}`,
  DELETE: (id) => `/users/${id}`,
  GET_PROFILE: "/users/profile/me",
  UPDATE_PROFILE: "/users/profile/me",
};

/**
 * Candidate endpoints
 */
export const CANDIDATE_ENDPOINTS = {
  GET_ALL: "/candidates",
  GET_ONE: (id) => `/candidates/${id}`,
  CREATE: "/candidates",
  UPDATE: (id) => `/candidates/${id}`,
  DELETE: (id) => `/candidates/${id}`,
};

/**
 * Job endpoints
 */
export const JOB_ENDPOINTS = {
  GET_ALL: "/jobs",
  GET_ONE: (id) => `/jobs/${id}`,
  CREATE: "/jobs",
  UPDATE: (id) => `/jobs/${id}`,
  DELETE: (id) => `/jobs/${id}`,
  SEARCH: "/jobs/search",
};

/**
 * Application endpoints
 */
export const APPLICATION_ENDPOINTS = {
  GET_ALL: "/applications",
  GET_ONE: (id) => `/applications/${id}`,
  CREATE: "/applications",
  UPDATE: (id) => `/applications/${id}`,
  DELETE: (id) => `/applications/${id}`,
};

/**
 * Company endpoints
 */
export const COMPANY_ENDPOINTS = {
  GET_ALL: "/companies",
  GET_ONE: (id) => `/companies/${id}`,
  CREATE: "/companies",
  UPDATE: (id) => `/companies/${id}`,
  DELETE: (id) => `/companies/${id}`,
};

/**
 * Review endpoints
 */
export const REVIEW_ENDPOINTS = {
  GET_ALL: "/reviews",
  GET_ONE: (id) => `/reviews/${id}`,
  CREATE: "/reviews",
  UPDATE: (id) => `/reviews/${id}`,
  DELETE: (id) => `/reviews/${id}`,
};

/**
 * Notification endpoints
 */
export const NOTIFICATION_ENDPOINTS = {
  GET_ALL: "/notifications",
  GET_ONE: (id) => `/notifications/${id}`,
  MARK_AS_READ: (id) => `/notifications/${id}/read`,
  MARK_ALL_AS_READ: "/notifications/mark-all-as-read",
};
