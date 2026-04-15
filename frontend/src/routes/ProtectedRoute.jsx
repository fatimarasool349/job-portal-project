import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children, allowedRoles }) {
  const { isAuthenticated, role } = useSelector((state) => state.auth);

  const normalizedRole = role?.trim()?.toLowerCase() || "";
  const normalizedAllowedRoles =
    allowedRoles?.map((r) => r.toLowerCase()) || [];

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (
    normalizedAllowedRoles.length &&
    !normalizedAllowedRoles.includes(normalizedRole)
  ) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

export default ProtectedRoute;