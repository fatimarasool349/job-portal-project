import React, { useState } from "react";
import JobCard from "./JobCard";

 function JobListing({ jobs }) {
  const [filter, setFilter] = useState("All");

  const filteredJobs =
    filter === "All" ? jobs : jobs.filter((job) => job.type === filter);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Filter */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-900">
          Current Job Openings ({filteredJobs.length})
        </h2>
        <select
          className="rounded-md border-slate-300 text-sm focus:border-blue-600 focus:ring-blue-600"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Full-time</option>
          <option>Remote</option>
          <option>Contract</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-6">
        
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}
export default JobListing;