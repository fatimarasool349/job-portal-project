
import {FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";
import {badgeColors} from "./../../constant/data.js"


function JobCard({ icon, title, company, location, salary, type, typeColor }) {
  return (
    <div className="p-6 border border-slate-100 dark:border-slate-800 rounded-2xl hover:shadow-xl transition-shadow bg-slate-50/30 dark:bg-slate-800/50">
      {/* Badge */}
      <div className="flex justify-between items-start mb-4">
        {icon}
        <span
          className={`${badgeColors[typeColor]} text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider`}
        >
          {type}
        </span>
      </div>

      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
        {title}
      </h4>

      <p className="text-sm text-slate-500 mt-1">{company}</p>

      <div className="flex items-center gap-4 mt-6 text-sm text-slate-500">
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt />
          {location}
        </div>
        <div className="flex items-center gap-1">
          <FaMoneyBillWave />
          {salary}
        </div>
      </div>

      <button className="w-full mt-6 py-3 border border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-colors">
        Apply Now
      </button>
    </div>
  );
}
export default JobCard;