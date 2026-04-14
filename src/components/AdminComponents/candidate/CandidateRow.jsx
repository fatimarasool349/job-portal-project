import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";

const statusColors = {
  Active: "bg-[#dcfce7] text-[#166534]",
  Pending: "bg-[#fef9c3] text-[#854d0e]",
  Inactive: "bg-[#fee2e2] text-[#991b1b]",
};

function CandidateRow({ candidate, onEdit, onDelete, role }) {
  return (
    <tr className="hover:bg-slate-50 transition">
      <td className="px-6 py-4 font-medium text-slate-800">
        <div className="flex items-center gap-3">
          <img
            alt={candidate.name}
            className="w-10 h-10 rounded-full object-cover"
            src={candidate.avatar}
          />
          <span className="font-semibold text-on-surface">
            {candidate.name}
          </span>
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-slate-600">
        {candidate.position}
      </td>
      <td className="px-6 py-4 text-sm text-slate-600">
        <div className="flex flex-col gap-1">
          {/* Email */}
          <div className="flex items-center gap-2">
            <TfiEmail />
            <span>{candidate.email}</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <FaPhoneAlt />
            <span>{candidate.phone || "N/A"}</span>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <span
          className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-tight ${
            statusColors[candidate.status]
          }`}
        >
          {candidate.status}
        </span>
      </td>
      <td className="px-6 py-4 text-right">
        {role === "admin" && (
        <div className="flex justify-end gap-2">
          <button
            onClick={() => onEdit(candidate)}
            className="p-2 text-on-surface-variant hover:bg-surface-container-high text-blue-600 rounded-lg transition-all"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => onDelete(candidate.id)}
            className="p-2 text-on-surface-variant hover:bg-surface-container-high hover:text-error rounded-lg transition-all"
          >
            <MdDelete />
          </button>
        </div>
        )}
      </td>
    </tr>
  );
}

export default CandidateRow;
