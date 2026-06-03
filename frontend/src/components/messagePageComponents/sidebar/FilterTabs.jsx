import { useState } from "react";



function FilterTabs( { role }) {
  const tabs =
  role === "recruiter"
    ? ["All", "Candidates", "Unread"]
    : ["All", "Unread", "Recruiters"];
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="p-4">
      <div className="flex gap-2 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition
              ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterTabs;