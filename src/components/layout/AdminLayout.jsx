import { Outlet,useLocation } from "react-router-dom";
import AdminSidebar from "../AdminComponents/common/AdminSidebar.jsx";
import Navbar from "../AdminComponents/common/Navbar.jsx";
import AdminFooter from "../AdminComponents/common/AdminFooter.jsx";
import { titles } from "../../constant/admindata.js";


function AdminLayout() {
      const location = useLocation();
    const currentTitle =
    titles[location.pathname] || "Dashboard Overview";
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
          onLogout={() => alert("Logout")}
        />
        {/* Page Content */}
          <Outlet />
        <AdminFooter />
      </main>
    </div>
  );
}

export default AdminLayout;
