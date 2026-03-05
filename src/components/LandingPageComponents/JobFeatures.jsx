import React, { useState } from "react";
import { FaArrowRight, FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";

import {badgeColors, jobsData} from "./../../constant/data.js"


function FeaturedJobs() {
  const [expanded, setExpanded] = useState(false);
    const visibleJobs = expanded ? jobsData : jobsData.slice(0, 3);

 

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
          {visibleJobs.map((job) => (
            <JobCard
              key={job.id}
              icon={<img src={job.icon} alt={job.title} />}
              title={job.title}
              company={job.company}
              location={job.location}
              salary={job.salary}
              type={job.type}
              typeColor={job.typeColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function JobCard({ icon, title, company, location, salary, type, typeColor }) {
  return (
    <div className="p-6 border border-slate-100 dark:border-slate-800 rounded-2xl hover:shadow-xl transition-shadow bg-slate-50/30 dark:bg-slate-800/50">
      {/* Badge */}
      <div className="flex justify-between items-start mb-4">
        {icon}
        <span
          className={`${badgeColors[typeColor]} text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider`}
        >
          {type}
        </span>
      </div>

      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
        {title}
      </h4>

      <p className="text-sm text-slate-500 mt-1">{company}</p>

      <div className="flex items-center gap-4 mt-6 text-sm text-slate-500">
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt />
          {location}
        </div>
        <div className="flex items-center gap-1">
          <FaMoneyBillWave />
          {salary}
        </div>
      </div>

      <button className="w-full mt-6 py-3 border border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-colors">
        Apply Now
      </button>
    </div>
  );
}

export default FeaturedJobs;
