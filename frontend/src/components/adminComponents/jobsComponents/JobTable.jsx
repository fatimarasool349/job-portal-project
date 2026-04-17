import JobRow from "./JobRow";

function JobTable({ jobs, onDeleteJob, onEditJob }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">

      <table className="w-full text-left">
        <thead >
          <tr className="bg-blue-600 border-b border-slate-200">
            <th className="px-6 py-4 text-xs font-semibold text-white">Job Title</th>
            <th className="px-6 py-4 text-xs font-semibold text-white">Company</th>
            <th className="px-6 py-4 text-xs font-semibold text-white">Location</th>
            <th className="px-6 py-4 text-xs font-semibold text-white">Status</th>
            <th className="px-6 py-4 text-xs font-semibold text-white">Salary</th>
            <th className="px-6 py-4 text-xs font-semibold text-white">Posted Date</th>
            <th className="px-6 py-4 text-xs font-semibold text-white text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map((job) => (
            <JobRow
              key={job.id}
              job={job}
              onDeleteJob={onDeleteJob}
                onEditJob={onEditJob}
            />
          ))}
        </tbody>
      </table>
      </div> 
    </div>
  );
}

export default JobTable;