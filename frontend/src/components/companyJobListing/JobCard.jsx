import { getBadgeColor } from "../../constant";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

function JobCard({ job }) {
  const handleSaveJob = () => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

    const isAlreadySaved = savedJobs.some((j) => j.id === job.id);
    if (isAlreadySaved) {
      alert("Job already saved!");
      return;
    }

    savedJobs.push(job);

    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
    alert("Job saved successfully!");
  };

  return (
    <article className="job-card bg-white border border-slate-200 p-6 rounded-xl transition-all duration-200">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`px-2 py-1 text-xs font-bold uppercase rounded ${
                getBadgeColor(job.jobType)
              }`}
            >
              {job.type}
            </span>
            <span className="text-slate-400 text-sm">Posted recently</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-1">{job.title}</h3>
          <p className="text-slate-600 mb-4">{job.description.slice(0, 100)}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {job.skills &&
              job.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
          </div>
        </div>
        <div className="flex flex-row sm:flex-col gap-2 w-full sm:w-auto">
          <Link to={`/viewdetailpage/${job.id}`}>
            <button className="flex-1 bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
              View Details
            </button>
          </Link>
          <button
            onClick={handleSaveJob}
            className="w-full py-3 px-4 bg-transparent border-2 border-slate-200 dark:border-slate-700 hover:border-blue-600 hover:text-blue-600 text-slate-700 dark:text-slate-300 font-bold rounded-lg transition-all flex items-center justify-center gap-2 group"
          >
            Save
            <FaRegBookmark />
          </button>
        </div>
      </div>
    </article>
  );
}

export default JobCard;
