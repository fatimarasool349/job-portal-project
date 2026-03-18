import { Link, useLocation } from "react-router-dom";
import { tabs } from "../../constant/data"; 

const slugify = (str) => str.toLowerCase().replace(/\s+/g, "-");

function NotificationTabs  () {
  const location = useLocation(); 

  return (
    <div className="mb-6 border-b border-slate-200 dark:border-slate-800">
      <nav className="-mb-px flex space-x-8 overflow-x-auto">
        {tabs.map((tab) => {
          const path = `/notifications/${slugify(tab)}`;
          const isActive = location.pathname === path;

          return (
            <Link
              key={tab}
              to={path}
              className={`border-b-2 pb-4 text-sm font-medium whitespace-nowrap ${
                isActive
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              {tab}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default NotificationTabs;