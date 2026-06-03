import {
  Eye,
  Pencil,
  Trash2,
  ShieldOff,
  ShieldCheck,
} from "lucide-react";
function UserRow({
  user,
  onEdit,
  onDelete,
  onToggleStatus,
  onViewDetails,
}) {
  const isRecruiter = user.role === "recruiter";
  const isBlocked = user.status === "blocked";

  return (
    <tr className="border-b border-gray-50 hover:bg-slate-50 transition">

      {/* Name */}
      <td className="px-6 py-4 flex items-center gap-3">
        {user.profileImage ? (
          <img
            src={user.profileImage}
            alt="user"
            className="w-8 h-8 rounded-full object-cover"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm uppercase">
            {user.fullName?.charAt(0) || "U"}
          </div>
        )}

        <span className="font-medium">
          {user.fullName || "N/A"}
        </span>
      </td>

      {/* Email */}
      <td className="px-6 py-4">
        {user.email || "N/A"}
      </td>

      {/* Role */}
      <td className="px-6 py-4 capitalize">
        {user.role || "N/A"}
      </td>

      {/* Status */}
      <td className="px-6 py-4">
        <span
          className={`px-2 py-1 text-xs rounded-full ${
            user.status === "active" || user.status === "approved"
              ? "bg-green-100 text-green-700"
              : user.status === "pending"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {user.status || "unknown"}
        </span>
      </td>

      {/* Actions */}
      <td className="px-6 py-4 text-right space-x-2">

        {/* View */}
        <button
          onClick={() => onViewDetails?.(user)}
          className="text-blue-600 text-sm hover:underline"
        >
          <Eye size={18}/>
        </button>

        {/* Edit */}
        {onEdit && (
          <button
            onClick={() => onEdit(user)}
            className="text-yellow-600 text-sm hover:underline"
          >
            <Pencil size={18}/>
          </button>
        )}

        {/* Approve (Recruiter only) */}
        {isRecruiter && user.status === "pending" && onToggleStatus && (
          <button
            onClick={() => onToggleStatus(user._id, "approved")}
            className="text-green-600 text-sm hover:underline"
          >
            <ShieldCheck/>
          </button>
        )}

        {/* Block / Unblock */}
        {onToggleStatus && user.status !== "pending" && (
          <button
            onClick={() =>
              onToggleStatus(
                user._id,
                isBlocked ? "active" : "blocked"
              )
            }
            className="text-orange-600 text-sm hover:underline"
          >
            {isBlocked ? "Unblock" : "Block"}
          </button>
        )}

        {/* Delete */}
        {onDelete && (
          <button
            onClick={() => onDelete(user._id)}
            className="text-red-600 text-sm hover:underline"
          >
            Delete
          </button>
        )}
      </td>
    </tr>
  );
}

export default UserRow;