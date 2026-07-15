import { IoMdArrowRoundForward } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {FiExternalLink} from "react-icons/fi"
import { Link } from "react-router-dom";
import { getImageUrl } from "../../utils/getImageUrl";
import { USER_ROUTES } from "../../constants/routes";

function JobSidebar({ job }) {
  const navigate = useNavigate();
  if (!job) {return null;} 
 
  const handleSaveJob = () => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

    const isAlreadySaved = savedJobs.some((j) => j.id === job.id);
    if (isAlreadySaved) {
      alert("Job already saved!");
      return;
    }

    savedJobs.push(job);
    if (!job?.company) {return null;}

    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
    alert("Job saved successfully!");
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm sticky top-24">
      <div className="space-y-4">
        <button
          onClick={() => navigate(USER_ROUTES.APPLY_JOB.replace(":slug", job.slug))}
          className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-600/90 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2"
        >
          Apply Now
          <IoMdArrowRoundForward />
        </button>
        <button
          onClick={handleSaveJob}
          className="w-full py-3 px-4 bg-transparent border-2 border-slate-200 dark:border-slate-700 hover:border-blue-600 hover:text-blue-600 text-slate-700 dark:text-slate-300 font-bold rounded-lg transition-all flex items-center justify-center gap-2 group"
        >
          <FaRegBookmark />
          Save Job
        </button>

      </div>

      <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
        <h4 className="font-bold text-slate-900 dark:text-white mb-4">
          About
        </h4>
        <div className="flex items-center gap-4 mb-4">
          <div className="size-12 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-100 dark:border-slate-700">
            <img
              className="w-8 h-8 object-contain"
              alt={`${job.company.name} logo`}
              src={getImageUrl(job.company.logo)}
            />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              {job.company.name}
            </p>
            <p className="text-xs text-slate-500">
              {job.company.industry} • {job.company.size}
            </p>
          </div>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
          {job.company?.about1}
        </p>

        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
          {job.company?.about2}
        </p>
        <Link to={job.company.website}
          className="text-blue-600 text-sm font-bold flex items-center gap-1 hover:underline"
        >
          View company profile
          <FiExternalLink className="material-symbols-outlined text-xs" />
        </Link>
      </div>
    </div>
  );
}

export default JobSidebar;
