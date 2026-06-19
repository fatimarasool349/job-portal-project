import {
  getUserRole,
  getRecruiterId,
  getCompanyId,
} from "../utils/authStorage";

export const useRole = () => {
  const role = getUserRole();
  const recruiterId = getRecruiterId();
  const recruiterCompanyId = getCompanyId();

  const isAdmin = role === "admin";
  const isRecruiter = role === "recruiter";


  const canViewAll = isAdmin;
  const canAdd = isAdmin || isRecruiter;
  const canEdit = isAdmin || isRecruiter;
  const canDelete = isAdmin || isRecruiter;

  const canAccessOwnDataOnly = isRecruiter;

  return {
    role,
    recruiterId,
    recruiterCompanyId,

    // roles
    isAdmin,
    isRecruiter,

    // permissions
    canViewAll,
    canAdd,
    canEdit,
    canDelete,
    canAccessOwnDataOnly,
  };
};