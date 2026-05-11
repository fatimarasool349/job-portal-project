import React, { useState } from "react";
import JobCard from "./JobCard";

function JobListing({ jobs }) {
  const [filter, setFilter] = useState("all");

  const filteredJobs =
    filter === "all"
      ? jobs
      : jobs.filter((job) => job.jobType?.toLowerCase() === filter);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Filter */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-900">
          Current Job Openings ({filteredJobs.length})
        </h2>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="full-time">Full-time</option>
          <option value="remote">Remote</option>
          <option value="contract">Contract</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredJobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </section>
  );
}
export default JobListing;
