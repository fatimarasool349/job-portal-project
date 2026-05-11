import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { getImageUrl } from "../../../utils/getImageUrl";

function CompanyRow({ company, onDelete, onEdit }) {
  return (
    <tr className="border-b border-gray-50 hover:bg-slate-50 transition">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <img
            src={getImageUrl(company.logo)}
            alt="logo"
            className="w-10 h-10 rounded object-cover border"
          />

          {/* Name */}
          <span className="font-medium">{company.name}</span>
        </div>
      </td>

      <td className="px-6 py-4">{company.about1 || "N/A"}</td>

      <td className="px-6 py-4">{company.location || "N/A"}</td>

      <td className="px-6 py-4 text-blue-600">
        <a href={company.website} target="_blank">
          Visit
        </a>
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center justify-end gap-3 h-full">
          <button
            onClick={() => onEdit(company)}
            className="text-blue-600 text-lg hover:scale-110 transition"
          >
            <FaEdit />
          </button>

          <button
            onClick={() => onDelete(company._id)}
            className="text-red-600 text-lg hover:scale-110 transition"
          >
            <MdDelete />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default CompanyRow;
