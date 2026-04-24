import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function RecruiterRow({ recruiter, onEdit, onDeleteRecruiter }) {
  return (
    <tr className="hover:bg-slate-50 transition">
      <td className="px-6 py-4 font-medium text-slate-800">
        {recruiter.companyId?.name || "Not Assigned"}{" "}
      </td>

      <td className="px-6 py-4 text-sm text-slate-600">{recruiter.fullName}</td>

      <td className="px-6 py-4 text-sm text-slate-600">{recruiter.email}</td>

      <td className="px-6 py-4">
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            recruiter.status === "Active"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          {recruiter.status}
        </span>
      </td>

      <td className="px-6 py-4 text-right">
        <div className="flex justify-end gap-2">
          {/* Edit */}
          <button
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
            title="Edit"
            onClick={() => onEdit(recruiter)}
          >
            <FaEdit className="w-4 h-4" />
          </button>

          <button
            onClick={() => onDeleteRecruiter(recruiter.id)}
            className="p-2 text-gray-500 hover:bg-gray-100 hover:text-red-600 rounded-lg transition-all"
          >
            <MdDelete />
          </button>
        </div>
      </td>
    </tr>
  );
}
export default RecruiterRow;
