import { SlCalender } from "react-icons/sl";
import { MdOutlineSchedule } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";

function JobHeaderCard({ job }) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 mb-8 border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex gap-5">
          {/* Company Logo */}
          <div className="size-16 md:size-20 rounded-xl bg-primary/10 flex items-center justify-center overflow-hidden shrink-0 border border-primary/20">
            <img
              className="w-12 h-12 object-contain"
              src={job.icon}
              alt={job.company.name + " logo"}
            />
          </div>

          {/* Job Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-1">
              {job.title}
            </h1>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-slate-600 dark:text-slate-400 text-sm">
              {/* Company Name */}
              <span className="flex items-center gap-1 font-semibold text-primary">
                <FaBuilding />
                {job.company.name}
              </span>

              {/* Location */}
              <span className="flex items-center gap-1">
                <FaLocationDot />
                {job.company.location}
              </span>

              {/* Job Type */}
              <span className="flex items-center gap-1">
                <MdOutlineSchedule />
                {job.type}
              </span>

              {/* Posted Time */}
              <span className="flex items-center gap-1 text-green-600 dark:text-green-400 font-medium">
                <SlCalender />
                {new Date(job.postedDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobHeaderCard;
