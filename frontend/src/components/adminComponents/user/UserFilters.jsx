function UserFilters({
  search,
  setSearch,
  roleFilter,
  setRoleFilter,
  statusFilter,
  setStatusFilter,
}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-6">

      <div className="flex flex-wrap items-center gap-4 justify-between">

        {/* Search */}
        <input
          type="text"
          placeholder="Search by name or email..."
          className="border border-slate-300 px-4 py-2 rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Role Filter */}
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="border border-slate-300 px-4 py-2 rounded-md w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="All">All Roles</option>
          <option value="jobseeker">Jobseeker</option>
          <option value="recruiter">Recruiter</option>
        </select>

        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-slate-300 px-4 py-2 rounded-md w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="All">All Status</option>
          <option value="active">Active</option>
          <option value="blocked">Blocked</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
        </select>

      </div>
    </div>
  );
}

export default UserFilters;