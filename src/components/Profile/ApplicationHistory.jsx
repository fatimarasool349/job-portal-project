import {applicationsData , statusStyles} from "./../../constant/data.js"
import {CiMenuKebab} from "react-icons/ci"


function ApplicationHistory({ applications = applicationsData }) {
  return (
    <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">history</span>
          Application History
        </h3>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span>Showing: {applications.length} Applications</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 dark:bg-slate-800/50 text-slate-500 text-xs font-bold uppercase tracking-wider">
              <th className="px-6 py-4">Job Role & Company</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Date Applied</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {applications.map((app) => (
              <tr
                key={app.id}
                className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                {/* Job Role & Company */}
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-900 dark:text-white">{app.role}</span>
                    <span className="text-sm text-slate-500">{app.company}</span>
                  </div>
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusStyles[app.status]}`}
                  >
                    {app.status}
                  </span>
                </td>

                {/* Date Applied */}
                <td className="px-6 py-4 text-sm text-slate-500">
                  {new Date(app.dateApplied).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </td>

                {/* Actions */}
                <td className="px-6 py-4 text-right">
                  <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                  <CiMenuKebab />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ApplicationHistory;