import { Link } from "react-router-dom";
import {breadcrumbItems} from "./../../constant/data.js"


function BreadCrumbs() {
  return (
        <nav className="flex items-center gap-2 mb-6 text-sm font-medium text-slate-500 dark:text-slate-400">
      {breadcrumbItems.map((item, index) => {
        const isLast = index === breadcrumbItems.length - 1;
        return (
          <span key={index} className="flex items-center gap-2">
            {isLast ? (
              <span className="text-slate-900 dark:text-slate-200">{item.label}</span>
            ) : (
              <Link to={item.path} className="hover:text-blue">
                {item.label}
              </Link>
            )}
            {/* {!isLast && (
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            )} */}
          </span>
        );
      })}
    </nav>
  )
}

export default BreadCrumbs
