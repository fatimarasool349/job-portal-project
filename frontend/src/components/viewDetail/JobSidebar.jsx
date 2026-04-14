import { IoMdArrowRoundForward } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { companyData } from "../../constant";

function JobSidebar({ job }) {
  const navigate = useNavigate();
  if (!job) return null; // safety
  const company = companyData.find((c) => c.id === job.companyId);
  // Function to save job to localStorage
  const handleSaveJob = () => {
    // Get saved jobs from localStorage, or empty array
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

    // Check if job is already saved
    const isAlreadySaved = savedJobs.some((j) => j.id === job.id);
    if (isAlreadySaved) {
      alert("Job already saved!");
      return;
    }

    // Add the current job
    savedJobs.push(job);

    // Save back to localStorage
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
    alert("Job saved successfully!");
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm sticky top-24">
      <div className="space-y-4">
        <button
          onClick={() => navigate(`/jobs/${job.id}/apply`)}
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

        {/* Skill Match */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Skill Match
            </span>
            <span className="text-sm font-bold text-primary">
              {job.skillMatchPercentage}%
            </span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5">
            <div
              className="bg-primary h-2.5 rounded-full"
              style={{ width: `${job.skillMatchPercentage}%` }}
            ></div>
          </div>
          <p className="text-[11px] text-slate-500 mt-2">
            You match {job.skillsMatched} out of {job.skillsRequired} skills
            required for this role based on your profile.
          </p>
        </div>
      </div>

      {/* About Company */}
      <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
        <h4 className="font-bold text-slate-900 dark:text-white mb-4">
          About {company.name}
        </h4>
        <div className="flex items-center gap-4 mb-4">
          <div className="size-12 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-100 dark:border-slate-700">
            <img
              className="w-8 h-8 object-contain"
              alt={`${company.name} logo`}
              src={company.logo}
            />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              {company.name}
            </p>
            <p className="text-xs text-slate-500">
              {company.industry} • {company.size}
            </p>
          </div>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
          {job.description}
        </p>
        <a
          className="text-primary text-sm font-bold flex items-center gap-1 hover:underline"
          href={company.website}
        >
          View company profile
          <span className="material-symbols-outlined text-xs">open_in_new</span>
        </a>
      </div>

      {/* Recruiter Insight */}
      <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/10">
        <div className="flex items-start gap-3">
          <span className="material-symbols-outlined text-primary">
            lightbulb
          </span>
          <div className="text-xs leading-normal">
            <p className="font-bold text-slate-900 dark:text-white mb-1">
              Recruiter Insight
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              Applications for this role usually get a response within
              <span className="text-primary font-semibold">
                {" "}
                {job.recruiterResponseTime}
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobSidebar;
