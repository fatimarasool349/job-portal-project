import { useState, useMemo, useEffect } from "react";
import JobCard from "./JobCard.jsx";
import { jobData as initialJobs, companyData } from "../../constants/index.js"; // replace with API later
import Pagination from "../common/Pagination.jsx";

function JobListing({ jobs }) {
  const [sortBy, setSortBy] = useState("Most Relevant");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4;

 

  useEffect(() => {
    setCurrentPage(1);
  }, [jobs]);

  function getMinSalary(salary) {

    if (!salary) return 0;

    // If number → return directly
    if (typeof salary === "number") {
      return salary;
    }

    // If string → clean it
    if (typeof salary === "string") {
      const cleanStr = salary.replace(/[\$,]/g, "").toLowerCase();

      if (cleanStr.includes("negotiable")) return 0;

      const match = cleanStr.match(/\d+/);
      return match ? Number(match[0]) : 0;
    }

    return 0;
  }

  // Sorting
  const sortedJobs = useMemo(() => {
    let sorted = [...jobs];

    if (sortBy === "Highest Salary") {
      sorted.sort((a, b) => getMinSalary(b.salary) - getMinSalary(a.salary));
    }

    if (sortBy === "Most Relevant") {
      sorted.sort((a, b) => (b.score || 0) - (a.score || 0));
    }

    if (sortBy === "Most Recent") {
      sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return sorted;
  }, [jobs, sortBy]);

  // Pagination
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
          <JobCard key={job._id} job={job} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
}

export default JobListing;
