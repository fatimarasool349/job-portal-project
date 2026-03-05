import { Link } from "react-router-dom";
import logo from "./../assets/svg/logo.svg";
import profile from "./../assets/icons/profile.jpg"
function Header() {
  return (
    <div className="font-sans bg-gray-50">
<header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <div className="flex items-center space-x-2 text-xl font-bold text-blue-600">
          <img src={logo} alt="logo" className="h-6 w-6 object-contain" />
          <span>JobPortal</span>
        </div>

        <nav className="hidden md:flex space-x-6">
          <Link to="/findjob" className="text-gray-700 hover:text-blue-600  transition">
            Find Jobs
          </Link>
          <Link to="/" className="text-gray-700 hover:text-blue-600  transition">
            Companies
          </Link>
          <Link to="/" className="text-gray-700 hover:text-blue-600  transition">
            Salaries
          </Link>
          <Link to="/" className="text-gray-700 hover:text-blue-600  transition">
            Resources
          </Link>
        </nav>

        <div className="flex items-center space-x-6">
          <Link to="/login/jobseeker" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Login
          </Link>
          <Link to="/userprofile">
          <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden cursor-pointer border-2 border-white ring-2 ring-gray-100">
            <img
              alt="User Profile"
              className="w-full h-full object-cover"
              src={ profile}
            />
          </div>
          </Link>
        </div>

      </div>
    </header>
    </div>
    
  );
}

export default Header;