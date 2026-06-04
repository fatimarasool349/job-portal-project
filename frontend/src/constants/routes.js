export const PUBLIC_ROUTES = {
  HOME: "/",
  LOGIN: "/login/:role",
  SIGNUP: "/signup/:role",
  LOGOUT: "/logout/:role",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password/:token",
};

export const USER_ROUTES = {
  PROFILE: "/user-profile",
  FIND_JOBS: "/find-job",
  COMPANIES: "/companies",
  COMPANY_JOBS: "/companies/:slug",
  JOBS: "/jobs",
  JOB_DETAIL: "/job-detail-page/:slug",
  APPLY_JOB: "/jobs/:slug/apply",
  BOOKMARKS: "/bookmark",
  NOTIFICATIONS: "/notifications",
  MESSAGES: "/messages",
  MESSAGE_DETAIL: "/messages/:id",
  REVIEW: "/review/:slug",
  APPLICATIONS: "/my-applications",
  APPLICATION_DETAIL: "/my-applications/:publicId",

};

export const ADMIN_ROUTES = {
  DASHBOARD: "/dashboard",
  RECRUITERS: "/dashboard/recruiters",
  COMPANIES: "/dashboard/company",
  CANDIDATES: "/dashboard/candidates",
  JOBS: "/dashboard/jobs",
  APPLICATIONS: "/dashboard/applications",
  APPLICATION_DETAIL: "/dashboard/applications/:publicId",
  REVIEWS: "/dashboard/reviews",
  NOTIFICATIONS: "/dashboard/notifications",
  ANALYTICS: "/dashboard/analytics",
  SETTINGS: "/dashboard/settings",
  MESSAGES: "/dashboard/messages/:id",
};

export const AUTH_STATUS_ROUTES = {
  PENDING: "/pending",
  BLOCKED: "/blocked",
};

export const ERROR_ROUTES = {
  UNAUTHORIZED: "/unauthorized",
  NOT_FOUND: "/404",
};

export const ALL_ROUTES = {
  ...PUBLIC_ROUTES,
  ...USER_ROUTES,
  ...ADMIN_ROUTES,
  ...ERROR_ROUTES,
  ...AUTH_STATUS_ROUTES,
};
