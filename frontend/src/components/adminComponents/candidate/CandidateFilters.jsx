import { memo } from "react";

function CandidateFilters({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
}) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">

      {/* Search */}
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Search candidates by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-4 pr-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-lg border border-slate-200 text-sm px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Status</option>
          <option value="active">Active</option>
          <option value="Blocked">Blocked</option>
        </select>

      </div>
    </div>
  );
}

export default memo(CandidateFilters);