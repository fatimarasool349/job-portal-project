import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const statusColors = {
  Active: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Draft: "bg-gray-100 text-gray-600",
  Closed: "bg-red-100 text-red-700",
};

function JobRow({ job, onDeleteJob, onEditJob }) {
  return (
    <tr className="hover:bg-gray-50">
      
      <td className="px-6 py-4">
        <div>
          <p className="font-semibold">{job.title}</p>
          <p className="text-xs text-gray-500">{job.type}</p>
        </div>
      </td>

      <td className="px-6 py-4">{job.company}</td>
      <td className="px-6 py-4">{job.location}</td>

      <td className="px-6 py-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[job.status]}`}>
          {job.status}
        </span>
      </td>

      <td className="px-6 py-4 text-right">
        <div className="flex justify-end gap-2">
          
          <button onClick={()=>{onEditJob(job)}} className="p-2 text-blue-600 hover:bg-blue-50 rounded">
            <FaEdit />
          </button>

          <button
            onClick={() => onDeleteJob(job.id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded"
          >
            <MdDelete />
          </button>

        </div>
      </td>
    </tr>
  );
}

export default JobRow;