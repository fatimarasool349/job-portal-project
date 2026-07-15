import { MdCheckCircleOutline, MdRadioButtonChecked } from "react-icons/md";

function Description({ job }) {
  if (!job) {return <div className="text-gray-500 py-4">No job description available</div>;}

  return (
    <section className="prose prose-slate dark:prose-invert max-w-none">
      {/* The Role */}
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The Role</h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
        {job.description || "No description provided."}
      </p>

      {/* Key Responsibilities */}
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Key Responsibilities</h3>
      <ul className="space-y-3 list-none p-0">
        {Array.isArray(job.responsibilities) && job.responsibilities.length > 0 ? (
          job.responsibilities.map((resp, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
            >
              <MdCheckCircleOutline className="text-blue-600 mt-1" />
              {resp}
            </li>
          ))
        ) : (
          <li className="text-slate-500 dark:text-slate-400">No responsibilities listed.</li>
        )}
      </ul>

      {/* Requirements */}
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 mt-8">Requirements</h3>
      <ul className="space-y-3 list-none p-0">
        {Array.isArray(job.requirements) && job.requirements.length > 0 ? (
          job.requirements.map((req, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
            >
              <MdRadioButtonChecked className="text-blue-600 mt-1" />
              {req}
            </li>
          ))
        ) : (
          <li className="text-slate-500 dark:text-slate-400">No requirements listed.</li>
        )}
      </ul>
    </section>
  );
}

export default Description;