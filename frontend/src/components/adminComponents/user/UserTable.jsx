import UserRow from "./UserRow";

export default function UserTable({
  data,
  onEdit,
  onDelete,
  onToggleStatus,
  onView,
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
                Email
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-white">
                Role
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
            {data.map((user) => (
              <UserRow
                key={user._id}
                user={user}
                onEdit={onEdit}
                onDelete={onDelete}
                onToggleStatus={onToggleStatus}
                onViewDetails={onView}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}