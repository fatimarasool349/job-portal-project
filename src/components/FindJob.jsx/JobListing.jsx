import { useState, useMemo } from "react";
import { jobsDataDescription } from "./../../constant/data.js";
import JobCard from "./JobCard";

function JobListing() {
  const [sortBy, setSortBy] = useState("Most Recent");
  const [currentPage, setCurrentPage] = useState(1);

  const jobsPerPage = 4;
  const sortedJobs = useMemo(() => {
    let sorted = [...jobsDataDescription];

    if (sortBy === "Highest Salary") {
      sorted.sort((a, b) => b.salary - a.salary);
    }

    if (sortBy === "Most Relevant") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }

    return sorted;
  }, [sortBy]);

  // Pagination Logic
  const totalPages = Math.ceil(sortedJobs.length / jobsPerPage);
  const paginatedJobs = sortedJobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage,
  );

  return (
    <section className="flex flex-1 flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Job Search Results
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Showing {sortedJobs.length} job openings
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Sort by:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-lg bg-white dark:bg-slate-800 py-1 pl-3 pr-8 text-sm shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-blue-600"
          >
            <option>Most Recent</option>
            <option>Highest Salary</option>
            <option>Most Relevant</option>
          </select>
        </div>
      </div>

      {/* Job Listings */}
      <div className="grid gap-4">
        {paginatedJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-center gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-4 py-2 border rounded-lg disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === index + 1 ? "bg-blue-600 text-white" : "border"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-4 py-2 border rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default JobListing;
