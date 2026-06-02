import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { getAllJobs } from "../../api/jobApi";
import { getRecommendedJobs } from "../../api/recommendedJobApi";

import { jobData, companyData } from "../../constants/index.js";
import JobCard from "./JobCard.jsx";

function JobFeatures({ type = "featured" }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const visibleJobs = expanded ? jobs : jobs.slice(0, 3);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);

        let res;

        if (type === "recommended") {
          res = await getRecommendedJobs();
        } else {
          res = await getAllJobs();
        }

        setJobs(res?.data || res || []);
      } catch (error) {
        console.log("Error loading jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [type]);

  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              {type === "recommended" ? "Recommended Jobs" : "Featured Jobs"}
            </h2>

            <p className="mt-2 text-slate-600 dark:text-slate-400">
              {type === "recommended"
                ? "Jobs picked for you based on your activity and profile."
                : "Hand-picked opportunities from our top partner companies."}
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
          {loading ? (
            <p className="text-gray-500">Loading jobs...</p>
          ) : visibleJobs.length === 0 ? (
            <p className="text-gray-500">No jobs found.</p>
          ) : (
            visibleJobs.map((job) => <JobCard key={job._id} job={job} />)
          )}
        </div>
      </div>
    </section>
  );
}

export default JobFeatures;
