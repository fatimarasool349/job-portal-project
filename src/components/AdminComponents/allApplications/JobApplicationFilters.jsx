function JobApplicationFilters({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  roleFilter,
  setRoleFilter,
}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-6 flex flex-wrap items-center justify-between gap-4">
      {/* Search Input */}
      <div className="flex-1 min-w-[300px] relative">
        <input
          type="text"
          placeholder="Search candidates..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-4 pr-4 py-2 rounded-lg border border-slate-200 focus:ring-[#2463EB] focus:border-[#2463EB] text-sm"
        />
      </div>
      <div className="flex items-center gap-3">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded-lg px-3 py-2 text-sm"
        >
          <option value="All">Status: All</option>
          <option value="Pending">Status: Pending</option>
          <option value="Approved">Status: Approved</option>
          <option value="Rejected">Status: Rejected</option>
        </select>

        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="border rounded-lg px-3 py-2 text-sm"
        >
          <option value="All">Role: All</option>
          <option value="Designer">Role: Designer</option>
          <option value="Engineer">Role: Engineer</option>
        </select>
      </div>
    </div>
  );
}

export default JobApplicationFilters;
