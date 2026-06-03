import RecruiterRow from "./RecruiterRow";

export default function RecruiterTable({
  data,
  onEdit,
  onDeleteRecruiter,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-600">
              <th className="px-6 py-4 text-xs font-semibold text-white">
                Company
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-white">
                Name
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-white">
                Email
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-white">
                Status
              </th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-white">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <RecruiterRow
                key={item._id}
                recruiter={item}
                onEdit={onEdit}
                onDeleteRecruiter={onDeleteRecruiter}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}