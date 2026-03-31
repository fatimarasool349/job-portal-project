import { Bell, LogOut } from "lucide-react";

 function Navbar({
  title = "Dashboard",
  userName = "Admin",
  role = "Super Admin",
  profileImage = "https://via.placeholder.com/40",
  notifications = 0,
  onLogout,
}) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 px-8 flex items-center justify-between sticky top-0 z-10">
      
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800">
        {title}
      </h2>

      <div className="flex items-center space-x-6">
        
        {/* Notification */}
        <button className="text-gray-400 hover:text-gray-600 relative">
          <Bell className="w-6 h-6" />

          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 flex items-center justify-center text-[10px] bg-red-500 text-white rounded-full h-4 w-4">
              {notifications}
            </span>
          )}
        </button>

        {/* User Section */}
        <div className="flex items-center space-x-4 border-l pl-6 border-gray-100">
          
          {/* Name */}
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-700">
              {userName}
            </p>
            <p className="text-xs text-gray-500">
              {role}
            </p>
          </div>

          {/* Avatar */}
          <img
            src={profileImage}
            alt="profile"
            className="h-10 w-10 rounded-full bg-gray-200 object-cover"
          />

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