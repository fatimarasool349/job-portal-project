import logo from "./../../assets/svg/logo.svg";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <footer className="bg-white dark:bg-background-dark pt-20 pb-10 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="text-blue-600">
                  <img src={logo} alt="logo" />
                </div>
                <span className="text-xl font-bold tracking-tight">JobPortal</span>
              </div>
              <p className="text-slate-500 mb-6 max-w-sm">
                Connecting talent with opportunities. Your next big career move
                starts right here.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/"
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                >
                  <span className="material-symbols-outlined text-lg">public</span>
                </Link>
                <Link
                  to="/"
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                >
                  <span className="material-symbols-outlined text-lg">share</span>
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li>
                  <Link to="/" className="hover:text-blue-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-600 transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-600 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-600 transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Resources</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li>
                  <Link to="/" className="hover:text-blue-600 transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-600 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-600 transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-600 transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Contact</h4>

              <ul className="space-y-4 text-slate-500 text-sm">
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-gray-400" />
                  support@jobportal.com
                </li>

                <li className="flex items-center gap-2">
                  <FaPhone className="text-gray-400" />
                  +1 (555) 000-0000
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2026 JobPortal. All rights reserved.
            </p>
            <div className="flex gap-8 text-xs font-medium text-slate-400">
              <Link to="/" className="hover:text-blue-600">
                Privacy Policy
              </Link>
              <Link to="/" className="hover:text-blue-600">
                Terms of Service
              </Link>
              <Link to="/" className="hover:text-blue-600">
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
