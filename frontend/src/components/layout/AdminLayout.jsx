import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AdminSidebar from "../adminComponents/common/AdminSidebar.jsx";
import Navbar from "../adminComponents/common/Navbar.jsx";
import AdminFooter from "../AdminComponents/common/AdminFooter.jsx";
import { titles } from "../../constant/index.js";
import { useRole } from "../../hooks/useRole.js";

function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { role } = useRole();
  const notificationCount = role === "admin" ? 2 : 0;

  const currentTitle = titles[location.pathname] || "Dashboard Overview";
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        <Navbar
          title={currentTitle}
          userName="Admin"
          role="Super Admin"
          notifications={notificationCount}
          profileImage = {"https://lh3.googleusercontent.com/aida-public/AB6AXuBs0h0p0JxvaWG_ZWzL_bxgMtP1Wpwaj-w08SKllyyfD7Jxn-QioB3udjNGimRl6D4MHfEU--r8B8vMN6ncAUE9HO57rFs3mvL2I5r8hGeJajjYKqNyLaVxQmxqGjDDk1ga6Zb4o3ABkHh6k_S-Huf8qW7f-gqfny9ICQ6FLhcE5Z5Z9owaT-rdcF0ZHbvku9nZLwQkodUx2b-6qyJhBB454cUq8DGyF0t-trdWfRPCWuJ9EzFo6ghW_bOthveteZjEuanYqCv8MnQv"}

          onLogout={() =>{ 
             localStorage.clear();
             navigate(`/logout/${role}`)}}
        />
        {/* Page Content */}
        <Outlet />
        <AdminFooter />
      </main>
    </div>
  );
}

export default AdminLayout;
