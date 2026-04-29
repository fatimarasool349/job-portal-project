import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Suspense } from "react";
import LoadingScreen from "../pages/LoadingScreen";

/**
 * ProtectedRoute Component
 * Handles authentication and role-based access control
 * 
 * @param {React.ReactNode} children - Components to render if authorized
 * @param {string[]} allowedRoles - Array of roles allowed to access the route
 * @param {boolean} fallback - Show loading screen while suspending
 */
function ProtectedRoute({ children, allowedRoles = [], fallback = <LoadingScreen /> }) {
  const { isAuthenticated, role, user } = useSelector((state) => state.auth);

  // Normalize role for comparison
  const normalizedRole = role?.trim()?.toLowerCase() || "";
  const normalizedAllowedRoles = allowedRoles.map((r) => r.toLowerCase());

  // Check if user is authenticated
  if (!isAuthenticated || !user) {
    return <Navigate to="/" replace />;
  }

  // Check if user has required role
  if (normalizedAllowedRoles.length > 0 && !normalizedAllowedRoles.includes(normalizedRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Wrap with Suspense for lazy-loaded components
  return <Suspense fallback={fallback}>{children}</Suspense>;
}

export default ProtectedRoute;