import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Suspense } from "react";
import LoadingScreen from "../pages/LoadingScreen";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { PUBLIC_ROUTES } from "../constants/routes";

/**
 * ProtectedRoute Component
 * Handles authentication and role-based access control
 *
 * @param {React.ReactNode} children - Components to render if authorized
 * @param {string[]} allowedRoles - Array of roles allowed to access the route
 * @param {boolean} fallback - Show loading screen while suspending
 */
function ProtectedRoute({
  children,
  allowedRoles = [],
  fallback = <LoadingScreen />,
}) {
  const navigate = useNavigate();
  const { isAuthenticated, role, user } = useSelector((state) => state.auth);

  const normalizedRole = role?.trim()?.toLowerCase() || "";
  const normalizedAllowedRoles = allowedRoles.map((r) => r.toLowerCase());

  useEffect(() => {
    if (!isAuthenticated || !user) {
      toast.error("Please login first");
      navigate(
        PUBLIC_ROUTES.LOGIN.replace(
          ":role",
          role?.toLowerCase()?.replace(" ", ""),
        ),
        { replace: true },
      );
    }
  }, [isAuthenticated, user, navigate]);

  if (!isAuthenticated || !user) {
    return null;
  }

  if (user.status === "blocked") {
    return <Navigate to="/blocked" replace />;
  }
  if (normalizedRole === "recruiter" && user.status === "pending") {
    return <Navigate to="/pending" replace />;
  }
  if (
    normalizedAllowedRoles.length > 0 &&
    !normalizedAllowedRoles.includes(normalizedRole)
  ) {
    return <Navigate to="/unauthorized" replace />;
  }
  return <Suspense fallback={fallback}>{children}</Suspense>;
}

export default ProtectedRoute;
