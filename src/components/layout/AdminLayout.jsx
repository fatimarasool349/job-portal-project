import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AdminSidebar from "../AdminComponents/common/AdminSidebar.jsx";
import Navbar from "../AdminComponents/common/Navbar.jsx";
import AdminFooter from "../AdminComponents/common/AdminFooter.jsx";
import { titles } from "../../constant/admindata.js";

function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentTitle = titles[location.pathname] || "Dashboard Overview";
  const role = localStorage.getItem("role"); // "admin" | "recruiter"
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar
          title={currentTitle}
          userName="Admin"
          role="Super Admin"
          notifications={2}
          onLogout={() => navigate(`/logout/${role}`)}
        />
        {/* Page Content */}
        <Outlet />
        <AdminFooter />
      </main>
    </div>
  );
}

export default AdminLayout;
