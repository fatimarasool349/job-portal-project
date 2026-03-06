import React, { useState } from "react";
import Description from "./Description";
import Company from "./Company";
import Reviews from "./Review";
import {jobData,tabs} from "./../../constant/data.js"
import JobSidebar from "./JobSideBar.jsx";

function ViewDetail() {
  const [activeTab, setActiveTab] = useState("description");

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
        {activeTab === "description" && <Description job={jobData} />}
        {activeTab === "company" && <Company company={jobData.company} />}
        {activeTab === "reviews" && <Reviews reviews={jobData.reviews} company={jobData.company} />}
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        <JobSidebar job={jobData}/>
        
      </div>
    </div>
  );
}
export default ViewDetail;