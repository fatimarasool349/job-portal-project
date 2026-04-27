import { Link } from "react-router-dom";
import { getBadgeColor } from "../../constant";
import { FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
import { getImageUrl } from "../../utils/getImageUrl";

function JobCard({ job }) {
  return (
    <div className="group relative flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition-all hover:border-blue-600 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-4">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-2">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-2">
              <img
                src={getImageUrl(job.company?.logo) || "/default-company.png"}
                alt={job.title}
                className="w-8 h-8 object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
              {job.title}
            </h3>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <FaBuilding className="text-xs" />
                {job.company.name}
              </span>

              <span className="flex items-center gap-1">
                <FaMapMarkerAlt className="text-xs" />
                {job.company.location}
              </span>
            </div>
          </div>
        </div>

        <span
          className={`rounded-full bg-blue-600/10 px-3 py-1 text-xs font-bold  ${getBadgeColor(job.jobType)}`}
        >
          {job.jobType}
        </span>
      </div>

      {/* Always show description and details */}
      <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 mt-2">
        {job.description}
      </p>

      <div className="mt-2 flex items-center justify-between">
        <div className="text-sm font-bold text-slate-900 dark:text-white">
          {job.salary ? `Rs ${job.salary}` : "Negotiable"}
        </div>
        <Link to={`/viewdetailpage/${job._id}`}>
          <button className="rounded-lg bg-blue-600 px-3 py-1 text-sm font-bold text-white hover:opacity-90">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default JobCard;
