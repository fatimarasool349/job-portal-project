// Centralized localStorage auth management
// Single source of truth for auth state in localStorage

export const AUTH_STORAGE_KEYS = {
  TOKEN: "token",
  ROLE: "role",
  RECRUITER_ID: "recruiter_id",
  COMPANY_ID: "companyId",
  STATUS: "status",
  AUTH: "auth",
  PERSIST_ROOT: "persist:root",
};

/**
 * Get authentication token from localStorage
 * @returns {string|null} Auth token or null
 */
export const getAuthToken = () => localStorage.getItem(AUTH_STORAGE_KEYS.TOKEN);

/**
 * Get user role from localStorage
 * @returns {string} User role (defaults to 'recruiter')
 */
export const getUserRole = () =>
  localStorage.getItem(AUTH_STORAGE_KEYS.ROLE)?.trim().toLowerCase() ||
  "recruiter";

/**
 * Get recruiter ID from localStorage
 * @returns {string|null} Recruiter ID or null
 */
export const getRecruiterId = () =>
  localStorage.getItem(AUTH_STORAGE_KEYS.RECRUITER_ID);

/**
 * Get company ID from localStorage
 * @returns {string|null} Company ID or null
 */
export const getCompanyId = () =>
  localStorage.getItem(AUTH_STORAGE_KEYS.COMPANY_ID);

/**
 * Get user status from localStorage
 * @returns {string|null} User status or null
 */
export const getUserStatus = () =>
  localStorage.getItem(AUTH_STORAGE_KEYS.STATUS);

/**
 * Set authentication token in localStorage
 * @param {string} token Auth token
 */
export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem(AUTH_STORAGE_KEYS.TOKEN, token);
  }
};

/**
 * Set user role in localStorage
 * @param {string} role User role
 */
export const setUserRole = (role) => {
  if (role) {
    localStorage.setItem(AUTH_STORAGE_KEYS.ROLE, role);
  }
};

/**
 * Set recruiter ID in localStorage
 * @param {string} recruiterId Recruiter ID
 */
export const setRecruiterId = (recruiterId) => {
  if (recruiterId) {
    localStorage.setItem(AUTH_STORAGE_KEYS.RECRUITER_ID, recruiterId);
  }
};

/**
 * Set company ID in localStorage
 * @param {string} companyId Company ID
 */
export const setCompanyId = (companyId) => {
  if (companyId) {
    localStorage.setItem(AUTH_STORAGE_KEYS.COMPANY_ID, companyId);
  }
};

/**
 * Set user status in localStorage
 * @param {string} status User status
 */
export const setUserStatus = (status) => {
  if (status) {
    localStorage.setItem(AUTH_STORAGE_KEYS.STATUS, status);
  }
};

/**
 * Clear all auth-related data from localStorage
 */
export const clearAuthStorage = () => {
  Object.values(AUTH_STORAGE_KEYS).forEach((key) => {
    localStorage.removeItem(key);
  });
};

/**
 * Clear all auth storage (alternative name for common usage)
 */
export const clearAllAuthData = () => {
  clearAuthStorage();
};

export const removeAuthCache = () => {
  localStorage.removeItem(AUTH_STORAGE_KEYS.AUTH);
};
