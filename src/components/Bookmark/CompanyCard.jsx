import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";

function CompanyCard({ company, job}) {
  const [showHours, setShowHours] = useState(false);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
      {/* Company Logo */}
      <div className="mx-auto mb-4 h-16 w-16 rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
        <div
          className="h-full w-full bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${job.icon})` }}
        ></div>
      </div>
      {/* Company Info */}
      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
        {company.name}
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        {company.industry} • {company.size}
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-col gap-2">
        {showHours && (
          <div className="flex items-center gap-2 mb-4 text-xs font-medium text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-4">
            <FaRegClock className="text-blue-600" />
            <span>
              Business Hours:{" "}
              <span className="text-blue-600 font-bold">
                {company.businessHours || "9:00 AM - 6:00 PM"}
              </span>
            </span>
          </div>
        )}
        <button
          onClick={() => setShowHours(!showHours)}
          className="w-full rounded-lg bg-blue-600 py-2 text-sm font-bold text-white transition-colors hover:bg-blue-700"
        >
          View Openings
        </button>

        <Link
          to={`/company/${company.name}`}
          className="w-full rounded-lg border border-slate-200 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
        >
          Company Profile
        </Link>
      </div>
    </div>
  );
}

export default CompanyCard;
