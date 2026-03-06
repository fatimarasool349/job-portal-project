import { Link } from "react-router-dom";

function JobCard({ job }) {
  const Icon = job.icon;

  return (
    <div className="group relative flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition-all hover:border-primary hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-4">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-2">
            <div
              className={`size-full rounded flex items-center justify-center ${job.iconBg}`}
            >
              <Icon className={`${job.iconColor} text-2xl`} />
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
              {job.title}
            </h3>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
              <span>{job.company}</span>
              <span>{job.location}</span>
            </div>
          </div>
        </div>

        <span
          className={`rounded-full bg-blue-600/10 px-3 py-1 text-xs font-bold ${job.iconBg} ${job.textColor}`}
        >
          {job.type}
        </span>
      </div>

      {/* Always show description and details */}
      <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 mt-2">
        {job.description}
      </p>
      {job.responsibilities && (
        <ul className="list-disc pl-5 text-sm text-slate-500 dark:text-slate-400 mt-2">
          {job.responsibilities.map((res, i) => (
            <li key={i}>{res}</li>
          ))}
        </ul>
      )}
      {job.requirements && (
        <ul className="list-disc pl-5 text-sm text-slate-500 dark:text-slate-400 mt-2">
          {job.requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      )}

      <div className="mt-2 flex items-center justify-between">
        <div className="text-sm font-bold text-slate-900 dark:text-white">
          {job.salaryLabel}
        </div>
        <Link to="/viewdetailpage">
          <button className="rounded-lg bg-blue-600 px-3 py-1 text-sm font-bold text-white hover:opacity-90">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default JobCard;
