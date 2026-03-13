import React, { useState } from "react";
import Description from "./Description";
import Company from "./Company";
import Reviews from "./Review";
import JobSidebar from "./JobSidebar.jsx";
import { getTabs ,companyData} from "./../../constant/data.js";

function ViewDetail({ job }) {
  const [activeTab, setActiveTab] = useState("description");
    const company = companyData.find(c => c.id === job.companyId);


  if (!job) {
    return <div className="text-center py-10 text-gray-500">No job data available</div>;
  }

  const tabs = getTabs(job);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column */}
      <div className="lg:col-span-2 space-y-8">
        {/* Tabs */}
        <div className="border-b border-slate-200 dark:border-slate-800 flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`pb-4 border-b-2 font-semibold text-sm transition-colors ${
                activeTab === tab.id
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "description" && <Description job={job} />}
        {activeTab === "company" && <Company company={company} />}
        {activeTab === "reviews" && <Reviews company={company} job={job} />}
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        <JobSidebar job={job} />
      </div>
    </div>
  );
}

export default ViewDetail;