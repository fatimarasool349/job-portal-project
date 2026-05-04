import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AdminSidebar from "../adminComponents/common/AdminSidebar.jsx";
import Navbar from "../adminComponents/common/Navbar.jsx";
import AdminFooter from "../AdminComponents/common/AdminFooter.jsx";
import { titles } from "../../constants/index.js";
import { useRole } from "../../hooks/useRole.js";
import { useSelector } from "react-redux";
import defaultImage from "/src/assets/Images/default_img.png";
import { getImageUrl } from "../../utils/getImageUrl.js";

function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { role } = useRole();
  const { user } = useSelector((state) => state.auth);
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
          profileImage={
            user?.profileImage ? getImageUrl(user.profileImage) : defaultImage
          }
          onLogout={() => {
            localStorage.clear();
            navigate(`/logout/${role}`);
          }}
        />
        {/* Page Content */}
        <Outlet />
        <AdminFooter />
      </main>
    </div>
  );
}

export default AdminLayout;
