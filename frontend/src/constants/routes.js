/**
 * Application route paths
 * Centralized route definitions for consistency and maintainability
 */

// Public routes
export const PUBLIC_ROUTES = {
  HOME: "/",
  LOGIN: "/login/:role",
  SIGNUP: "/signup/:role",
  LOGOUT: "/logout/:role",
  FORGOT_PASSWORD: "/forgotPassword",
};

// User routes (accessible to authenticated users)
export const USER_ROUTES = {
  PROFILE: "/userprofile",
  FIND_JOBS: "/findjob",
  COMPANIES: "/companies",
  COMPANY_JOBS: "/companies/:id",
  JOB_DETAIL: "/viewdetailpage/:id",
  APPLY_JOB: "/jobs/:jobId/apply",
  BOOKMARKS: "/bookmark",
  NOTIFICATIONS: "/notifications/:tab",
  MESSAGES: "/messages",
  MESSAGE_DETAIL: "/messages/:id",
  REVIEW: "/review/:id",
};

// Admin routes
export const ADMIN_ROUTES = {
  DASHBOARD: "/dashboard",
  RECRUITERS: "/dashboard/recruiters",
  COMPANIES: "/dashboard/company",
  CANDIDATES: "/dashboard/candidates",
  JOBS: "/dashboard/jobs",
  APPLICATIONS: "/dashboard/applications",
  APPLICATION_DETAIL: "/dashboard/applications/:id",
  REVIEWS: "/dashboard/reviews",
  NOTIFICATIONS: "/dashboard/notifications",
  ANALYTICS: "/dashboard/analytics",
  SETTINGS: "/dashboard/settings",
  MESSAGES: "/dashboard/messages/:id",
};

// Error routes
export const ERROR_ROUTES = {
  UNAUTHORIZED: "/unauthorized",
  NOT_FOUND: "/404",
};

// All routes combined
export const ALL_ROUTES = {
  ...PUBLIC_ROUTES,
  ...USER_ROUTES,
  ...ADMIN_ROUTES,
  ...ERROR_ROUTES,
};
