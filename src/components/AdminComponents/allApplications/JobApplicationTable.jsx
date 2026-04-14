import { FaCheckCircle, FaTimesCircle, FaTrash } from "react-icons/fa";
import { FaFileAlt, FaGlobe, FaLinkedin } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";
import { getStatusStyle } from "../../../constant/admindata";

import { MdDelete } from "react-icons/md";
function JobApplicationTable({ applications, setApplications, role }) {
  const openLink = (url) => {
    if (!url) return;
    window.open(url, "_blank");
  };
  const handleDelete = (id) => {
    if (window.confirm("Delete this application?")) {
      setApplications((prev) => prev.filter((a) => a.id !== id));
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-600 border-b border-slate-200">
              <th className="px-6 py-4 text-xs font-semibold text-white">
                Candidate
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-white">
                Contact
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-white">
                Position
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-white">
                Links
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-white">
                Cover Letter
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-white">
                Status
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-white text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="hover:bg-slate-50 transition">
                {/* Candidate */}
                <td className="px-6 py-4 font-medium text-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-xs">
                      {app.name?.charAt(0)}
                    </div>

                    <div>
                      <p className="font-semibold">{app.name}</p>
                      <p className="text-xs text-gray-500">{app.position}</p>
                    </div>
                  </div>
                </td>

                {/* Contact */}
                <td className="px-6 py-4 text-sm text-slate-600">
                  <p>{app.email}</p>
                  <p className="text-gray-500">{app.phone}</p>
                </td>

                {/* Position */}
                <td className="px-6 py-4 text-sm text-slate-600">
                  {app.position}
                </td>

                <td className="px-6 py-4 text-sm text-slate-600">
                  <div className="flex gap-3 text-gray-500">
                    {/* Resume */}
                    <button
                      onClick={() => openLink(resume)}
                      title="Resume"
                      className="hover:text-blue-600 hover:scale-110 transition-all"
                    >
                      <FaFileAlt size={18} />
                    </button>

                    {/* Portfolio */}
                    <button
                      onClick={() => openLink(portfolio)}
                      title="Portfolio"
                      className="hover:text-blue-600 hover:scale-110 transition-all"
                    >
                      <FaGlobe size={18} />
                    </button>

                    {/* LinkedIn */}
                    <button
                      onClick={() => openLink(linkedin)}
                      title="LinkedIn"
                      className="hover:text-blue-600 hover:scale-110 transition-all"
                    >
                      <FaLinkedin size={18} />
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  <p className="text-xs text-on-surface-variant line-clamp-1 max-w-[200px]">
                    {app.coverLetter}
                  </p>
                </td>

                {/* Status */}
                <td className="px-6 py-4 text-sm text-slate-600">
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusStyle(app.status)}`}>
                    {app.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4 text-sm text-slate-600 text-right space-x-2">
                  <Link to={`/dashboard/applications/${app.id}`} title="View">
                    <button className="p-2 text-blue-600 hover:bg-gray-100  rounded-lg transition-all">
                      <GrView />
                    </button>
                  </Link>

                  {role === "recruiter" && (
                    <>
                      {/* Approve */}
                      {/* <button
                        className="p-2 bg-green-100 text-green-600 hover:bg-green-200 rounded-lg transition"
                        title="Approve"
                      >
                        <FaCheckCircle size={16} />
                      </button> */}

                      {/* Reject */}
                      {/* <button
                        className="p-2 bg-red-100 text-red-600 hover:bg-red-200 rounded-lg transition"
                        title="Reject"
                      >
                        <FaTimesCircle size={16} />
                      </button> */}

                      {/* Delete */}
                      <button
                        onClick={() => handleDelete(app.id)}
                        className=" text-gray-500 hover:bg-gray-100 hover:text-red-600 rounded-lg transition-all"
                        title="Delete"
                      >
                        <MdDelete size={16} />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default JobApplicationTable;
