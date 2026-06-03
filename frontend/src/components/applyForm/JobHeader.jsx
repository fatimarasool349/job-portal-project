import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaBuilding, FaRegClock } from "react-icons/fa";

function JobHeader({ job,company}) {
  const navigate = useNavigate();

  if (!job) return null; 

  return (
    <div className="mb-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 text-sm font-semibold mb-4 "
      >
        <IoMdArrowRoundBack className="text-blue-600 text-md mr-1" />
        Back to Job Description
      </button>

      <div className="flex flex-col gap-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">
          Apply for {job.title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-neutral-soft font-medium">
          <span className="flex text-slate-500 items-center gap-1">
            <FaBuilding />
            {company?.name || "Unknown Company"}
          </span>

          <span className="flex text-slate-500 items-center gap-1">
            <FaLocationDot />
            {company?.location || "Remote"}
          </span>

          <span className="flex text-slate-500 items-center gap-1">
            <FaRegClock />
            {job.jobType || "unspecfied"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default JobHeader;