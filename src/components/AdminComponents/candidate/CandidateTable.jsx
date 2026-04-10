import React, { useState } from "react";
import CandidateRow from "./CandidateRow";

function CandidateTable({
  filteredCandidates,
  setCandidates,
  onEditCandidate,
    onDeleteCandidate,
    role,
}) {
  
  return (
    <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-600 border-b border-slate-200">
              <th className="px-6 py-4 text-xs font-semibold text-white">
                Name
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-white">
                Position
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-white">
                Contact Info
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-white">
                Status
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-white text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody >
            {filteredCandidates.map((candidate) => (
              <CandidateRow
                key={candidate.id}
                candidate={candidate}
                onEdit={onEditCandidate}
                onDelete={onDeleteCandidate} // ✅ delete function
                role={role}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CandidateTable;
