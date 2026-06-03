/**
 * Application user roles
 * Centralized role definitions for consistency across the app
 */

export const USER_ROLES = {
  ADMIN: "admin",
  RECRUITER: "recruiter",
  CANDIDATE: "candidate",
};

export const ROLE_NAMES = {
  [USER_ROLES.ADMIN]: "Admin",
  [USER_ROLES.RECRUITER]: "Recruiter",
  [USER_ROLES.CANDIDATE]: "Candidate",
};

// Role-based permissions
export const ROLE_PERMISSIONS = {
  [USER_ROLES.ADMIN]: ["all"],
  [USER_ROLES.RECRUITER]: ["manage_candidates", "manage_jobs", "view_applications"],
  [USER_ROLES.CANDIDATE]: ["apply_jobs", "view_profile", "bookmark_jobs"],
};
