import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {
  // 1️⃣ Get role from localStorage
  const role = localStorage.getItem("role");

  // 2️⃣ If not logged in, redirect to default login page
  if (!role) {
    return <Navigate to="/login/jobseeker" replace />; // specify default login
  }

  // 3️⃣ If role is not allowed, redirect to unauthorized page
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // 4️⃣ If role is allowed, render children
  return children;
}

export default ProtectedRoute;