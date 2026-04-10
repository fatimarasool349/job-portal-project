import { Bell, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar({
  title = "Dashboard",
  userName = "Admin",
  profileImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuBs0h0p0JxvaWG_ZWzL_bxgMtP1Wpwaj-w08SKllyyfD7Jxn-QioB3udjNGimRl6D4MHfEU--r8B8vMN6ncAUE9HO57rFs3mvL2I5r8hGeJajjYKqNyLaVxQmxqGjDDk1ga6Zb4o3ABkHh6k_S-Huf8qW7f-gqfny9ICQ6FLhcE5Z5Z9owaT-rdcF0ZHbvku9nZLwQkodUx2b-6qyJhBB454cUq8DGyF0t-trdWfRPCWuJ9EzFo6ghW_bOthveteZjEuanYqCv8MnQv",
  notifications = 0,
  onLogout,
}) {
  // 🔥 Get role from localStorage for dynamic display
  const role = localStorage.getItem("role") || "recruiter"; // Default to recruiter if not set

  // Optional: dynamic notification count for different roles
  const notificationCount = role === "admin" ? notifications : 0;

  // Optional: profile link based on role
  const profileLink =
    role === "admin"
      ? "/dashboard/settings"
      : role === "recruiter"
      ? "/dashboard/settings"
      : "/profile";

  return (
    <header className="h-16 bg-white border-b border-gray-200 px-8 flex items-center justify-between sticky top-0 z-10">
      
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

      <div className="flex items-center space-x-6">
        
        {/* Notification */}
        {role !== "Job Seeker" && (
          <button className="text-gray-400 hover:text-gray-600 relative">
            <Bell className="w-6 h-6" />
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center text-[10px] bg-red-500 text-white rounded-full h-4 w-4">
                {notificationCount}
              </span>
            )}
          </button>
        )}

        {/* User Section */}
        <div className="flex items-center space-x-4 border-l pl-6 border-gray-100">
          
          {/* Name & Role */}
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-700">{userName}</p>
            <p className="text-xs text-gray-500">{role}</p>
          </div>

          {/* Avatar */}
          <Link to={profileLink}>
            <img
              src={profileImage}
              alt="profile"
              className="h-10 w-10 rounded-full bg-gray-200 object-cover"
            />
          </Link>

          {/* Logout */}
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