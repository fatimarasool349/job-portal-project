import { useState, useEffect, useRef } from "react";
import { useNavigate,Link, useLocation } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import { CiLogout, CiBookmark } from "react-icons/ci";
import { MdArrowDropDown } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { initialUserData } from "../../constant";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();


  const role = localStorage.getItem("userRole") || "jobseeker";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
 
  return (
    <div className="font-sans bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 text-xl font-bold text-blue-600">
            <img src={logo} alt="logo" className="h-6 w-6 object-contain" />
            <span>JobPortal</span>
          </div>

          <nav className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600  transition"
            >
              Home
            </Link>
            <Link
              to="/findjob"
              className="text-gray-700 hover:text-blue-600  transition"
            >
              Find Jobs
            </Link>
            <Link
              to="/companies"
              className="text-gray-700 hover:text-blue-600  transition"
            >
              Companies
            </Link>
            <Link
              to={"notifications/:tab"}
              className="text-gray-700 hover:text-blue-600  transition"
            >
              Notifications
            </Link>
            <Link
              to="/messages"
              className="text-gray-700 hover:text-blue-600  transition"
            >
              Messages
            </Link>
          </nav>

          <div className="flex items-center space-x-6 relative">
            <Link
              to="/login/jobseeker"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              Login
            </Link>
            {/* Profile + Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 h-10 w-auto rounded-full bg-gray-200 overflow-hidden border-2 border-white ring-2 ring-gray-100 cursor-pointer">
                <img
                  alt="User Profile"
                  className="w-10 h-10 object-cover rounded-full"
                  src={initialUserData.profilePic}
                />
                <MdArrowDropDown className="text-gray-600 text-xl" />
              </button>

              {/* Dropdown menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl z-50">
                  {/* User info */}
                  <div className="p-4 border-b border-slate-100 dark:border-slate-800">
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      {initialUserData.name}
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-400">
                      {initialUserData.email}
                    </p>
                  </div>

                  {/* Menu links */}
                  <div className="p-2">
                    <Link
                      to="/userprofile"
                      className="flex items-center gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    >
                      <FaUser className="text-lg" />
                      My Profile
                    </Link>
                    <Link
                      to="/bookmark"
                      className="flex items-center gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    >
                      <CiBookmark className="text-lg" />
                      Saved Items
                    </Link>
                    
                  </div>

                  {/* Logout button */}
                  <div className="p-2 border-t border-slate-100 dark:border-slate-800">
                    <Link
                      to={`/logout/${role.toLowerCase()}`} // Dynamic based on role
                        state={{ from: location.pathname }} // <-- pass current page

                      className="flex w-full items-center gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    >
                      <CiLogout className="text-lg" />
                      Log Out
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
