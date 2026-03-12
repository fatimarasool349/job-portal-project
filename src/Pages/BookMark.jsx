import { useState } from "react";
import { jobData, } from "../constant/data"; 
import JobCard from "../components/BookMark/JobCard";
import CompanyCard from "../components/BookMark/CompanyCard";

function BookMark() {
  const [activeTab, setActiveTab] = useState("jobs");

  return (
    <main className="mx-auto w-full max-w-7xl flex-grow px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Saved Items
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Manage your bookmarked opportunities and explore suggested companies.
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-8 border-b border-slate-200 dark:border-slate-800">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab("jobs")}
            className={`px-1 pb-4 text-sm font-semibold ${
              activeTab === "jobs"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400"
            }`}
          >
            Saved Jobs
            <span className="ml-2 rounded-full bg-blue-600/10 px-2 py-0.5 text-xs font-medium text-blue-600">
              {jobData.length}
            </span>
          </button>
        </nav>
      </div>

      {/* Saved Jobs */}
      {activeTab === "jobs" && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobData.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}

    
    </main>
  );
}

export default BookMark;