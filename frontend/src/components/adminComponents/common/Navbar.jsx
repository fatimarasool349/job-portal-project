import { Bell, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useRole } from "../../../hooks/useRole.js";

function Navbar({
  title = "Dashboard",
  userName = "Admin",
  profileImage = "",
  notifications = 0,
  onLogout,
}) {
  const { role } = useRole();

  const notificationCount = role === "admin" ? notifications : 0;

  const profileLink =
    role === "admin"
      ? "/dashboard/settings"
      : role === "recruiter"
        ? "/dashboard/settings"
        : "/profile";

  return (
    <header className="h-16 bg-white border-b border-gray-200 px-8 flex items-center justify-between sticky top-0 z-10">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

      <div className="flex items-center space-x-6">
        {role !== "Job Seeker" && (
          <Link
            to="/dashboard/notifications"
            className="text-gray-400 hover:text-gray-600 relative"
          >
            <Bell className="w-6 h-6" />

            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center text-[10px] bg-red-500 text-white rounded-full h-4 w-4">
                {notificationCount}
              </span>
            )}
          </Link>
        )}

        <div className="flex items-center space-x-4 border-l pl-6 border-gray-100">
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-700">{userName}</p>
            <p className="text-xs text-gray-500">{role}</p>
          </div>

          <Link to={profileLink}>
            <img
              src={profileImage}
              alt="profile"
              className="h-10 w-10 rounded-full bg-gray-200 object-cover"
            />
          </Link>

          <button
            onClick={onLogout}
            className="bg-gray-100 p-2 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
