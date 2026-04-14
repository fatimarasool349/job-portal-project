 function SearchFilter({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  onAddClick,  
}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-6 flex flex-wrap items-center justify-between gap-4">
      
      {/* Search */}
      <div className="flex-1 min-w-[300px] relative">
        <input
          type="text"
          placeholder="Search recruiters or companies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-4 pr-4 py-2 rounded-lg border border-slate-200 focus:ring-[#2463EB] focus:border-[#2463EB] text-sm"
        />
      </div>

      {/* Filter + Button */}
      <div className="flex items-center gap-3">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-lg border border-slate-200 text-sm focus:ring-[#2463EB]"
        >
          <option value="All">Status: All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <button
         onClick={onAddClick} className="bg-[#2463EB] hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
          Add New Recruiter
        </button>
      </div>
    </div>
  );
}
export default SearchFilter;