import { Link, useLocation } from "react-router-dom";

import { menuItems } from "../../../constant/admindata";

function AdminSidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full">
      {/* Logo */}
      <div className="p-6 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-blue-600 tracking-tight">
          JobPortal
        </h1>
        <p className="text-xs text-gray-500 uppercase font-semibold mt-1">
          Admin Panel
        </p>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
            const isActive = location.pathname === `${item.path}`;


          return (
            <Link
              to={`${item.path}`}
              key={item.path}
              className={`flex items-center w-full text-left px-4 py-3 rounded-xl transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100">
        <div className="bg-blue-50 p-4 rounded-xl">
          <p className="text-xs text-blue-800 font-semibold mb-1">
            Server Status
          </p>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-xs text-blue-600 font-medium italic">
              Operational
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
export default AdminSidebar;
