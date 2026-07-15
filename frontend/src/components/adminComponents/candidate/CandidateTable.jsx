import CandidateRow from "./CandidateRow";

function CandidateTable({
  filteredCandidates,
  onEditCandidate,
  onDeleteCandidate,
  role,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-blue-600">
            <tr className=" border-b border-slate-200">
              <th className="px-6 py-4 text-xs font-semibold text-white">
                Name
              </th>

              <th className="px-6 py-4 text-xs font-semibold text-white">
                Email
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-white">
                Phone
              </th>
            
                <th className="px-6 py-4 text-xs font-semibold text-white">
                  Status
                </th>
              
              {role === "admin" && (
                <th className="px-6 py-4 text-xs font-semibold text-white text-right">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {filteredCandidates.map((candidate) => (
              <CandidateRow
                key={candidate._id}
                candidate={candidate}
                onEdit={onEditCandidate}
                onDelete={onDeleteCandidate}
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
