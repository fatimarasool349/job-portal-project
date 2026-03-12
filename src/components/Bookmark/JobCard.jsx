import { Link } from "react-router-dom";

 function JobCard({ job }) {
  return (
    <div className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div>
        <div className="mb-4 flex items-start justify-between">
          <div className="h-12 w-12 rounded-lg bg-slate-100 p-2 dark:bg-slate-800">
            <div
              className="h-full w-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${job.icon})` }}
            ></div>
          </div>
          
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
          {job.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
          {job.company.name} • {job.company.location}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
            {job.type}
          </span>
          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
          {job.salary}
          </span>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <Link
          to={`/jobs/${job.id}`}
          className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline"
        >
          View Details
        </Link>
        <button className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
          Unsave
        </button>
      </div>
    </div>
  );
}
export default JobCard;