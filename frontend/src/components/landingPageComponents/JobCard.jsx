import { FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";
import { getBadgeColor } from "../../constant/index.js";
import { Link } from "react-router";
import { getImageUrl } from "../../utils/getImageUrl.js";

function JobCard({ job }) {
  const company = job.company || {};

  return (
    <div className="p-6 border border-slate-100 dark:border-slate-800 rounded-2xl hover:shadow-xl transition-shadow bg-slate-50/30 dark:bg-slate-800/50">
      {/* Badge */}
      <div className="flex justify-between items-start mb-4">
        <img
          src={getImageUrl(job.company?.logo) || "/default-company.png"}
          alt={company.name}
          className="w-10 h-10 object-contain"
        />{" "}
        <span
          className={`${getBadgeColor(job.jobType) || "bg-gray-100 text-gray-700"} text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider`}
        >
          {job.jobType}
        </span>
      </div>

      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
        {job.title}
      </h4>

      <p className="text-sm text-slate-500 mt-1">{company.name}</p>

      <div className="flex items-center gap-4 mt-6 text-sm text-slate-500">
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt />
          {job.location}
        </div>
        <div className="flex items-center gap-1">
          <FaMoneyBillWave />
          {job.salary}
        </div>
      </div>
      <Link to={`/viewdetailpage/${job._id}`}>
        <button className="w-full mt-6 py-3 border border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-colors">
          Apply Now
        </button>
      </Link>
    </div>
  );
}
export default JobCard;
