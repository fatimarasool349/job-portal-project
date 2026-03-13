import  { useState } from "react";
import { FaArrowRight} from "react-icons/fa";

import { jobData, companyData} from "./../../constant/data.js"
import JobCard from "./JobCard.jsx";


function FeaturedJobs() {
  const [expanded, setExpanded] = useState(false);
    const visibleJobs = expanded ? jobData : jobData.slice(0, 3);


 

  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Featured Jobs
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Hand-picked opportunities from our top partner companies.
            </p>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="text-blue-600 font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            {expanded ? "Show less" : "View all jobs"}
            <FaArrowRight
              className={`text-sm transition-transform ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Grid */}
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleJobs.map((job) => {
          const company = companyData.find(c => c.id === job.companyId);
          return(
            <JobCard
              key={job.id}
              icon={<img src={job.icon} alt={job.title} />}
              title={job.title}
              company={company.name}
              location={company.location}
              salary={job.salary}
              type={job.type}
              typeColor={job.typeColor}
            />
          )


            
})}
        </div>
      </div>
    </section>
  );
}



export default FeaturedJobs;
