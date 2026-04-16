import { IoMdAdd } from "react-icons/io";
import {memo} from "react";

function CandidateFilters({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  onAddCandidate,
  role,
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
          className="rounded-lg border border-slate-200 text-sm focus:ring-[#2463EB] focus:border-[#2463EB] px-3 py-2"
        >
          <option value="All">Status: All</option>
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
          <option value="Inactive">Inactive</option>
        </select>

        {role === "admin" && (
          <button
            onClick={onAddCandidate}
            className="bg-[#2463EB] hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1"
          >
            <IoMdAdd />
            Add New Candidate
          </button>
        )}
      </div>
    </div>
  );
}

export default memo(CandidateFilters);
