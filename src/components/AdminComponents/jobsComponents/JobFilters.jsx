function JobFilters({ search, setSearch, jobType, setJobType, onAddJob }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      
      <div className="flex flex-col sm:flex-row items-center gap-3 flex-1 max-w-2xl">
        
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            placeholder="Search job title or company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-4 pr-4 py-2 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Filter */}
        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          className="w-full sm:w-48 py-2 bg-white border border-gray-200 rounded-xl"
        >
          <option value="">All Job Types</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="remote">Remote</option>
          <option value="contract">Contract</option>
        </select>
      </div>

      {/* Button */}
      <button onClick={onAddJob} className="px-6 py-2.5 bg-blue-600 text-white rounded-xl">
        + Post Job
      </button>
    </div>
  );
}

export default JobFilters;