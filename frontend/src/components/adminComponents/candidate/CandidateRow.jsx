import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";
import { memo } from "react";
import {getImageUrl} from "../../../utils/getImageUrl";
import { getStatusStyle } from "../../../constants";
const CandidateRow = memo(({ candidate, onEdit, onDelete, role }) => {
  return (
    <tr className="hover:bg-slate-50 transition">
      <td className="px-6 py-4 font-medium text-slate-800">
        <div className="flex items-center gap-3">
          {candidate.profileImage && (
            <img
              alt={candidate.fullName}
              className="w-10 h-10 rounded-full object-cover"
              src={getImageUrl(candidate.profileImage)}
            />
          )}
          <span className="font-semibold text-on-surface">
            {candidate.fullName}
          </span>
        </div>
      </td>

      <td className="px-6 py-4 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <TfiEmail className="text-blue-500" />
          <span className="break-all">{candidate.email}</span>
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-green-500" />
          <span>{candidate.phone || "N/A"}</span>
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getStatusStyle(
              candidate.status,
            )}`}
          >
            {candidate.status || "N/A"}
          </span>
        </div>
      </td>
      {/* <td className="px-6 py-4">
        <span
          className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-tight ${
            statusColors[candidate.status]
          }`}
        >
          {candidate.status}
        </span>
      </td> */}
      {role === "admin" && (
        <td className="px-6 py-4 text-right">
          <div className="flex justify-end gap-2">
            <button
              onClick={() => onEdit(candidate)}
              className="p-2 text-on-surface-variant hover:bg-surface-container-high text-blue-600 rounded-lg transition-all"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => onDelete(candidate._id)}
              className="p-2 text-on-surface-variant hover:bg-surface-container-high hover:text-error rounded-lg transition-all"
            >
              <MdDelete />
            </button>
          </div>
        </td>
      )}
    </tr>
  );
});

export default CandidateRow;
