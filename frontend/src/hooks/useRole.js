export const useRole = () => {
  const role = localStorage.getItem("role")?.trim().toLowerCase() || "recruiter";
  const recruiterId = localStorage.getItem("recruiter_id");
  const recruiterCompanyId = localStorage.getItem("companyId")

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