import { useState } from "react";
import {
  jobTypes,
  experienceLevels,
  clearFilters,
} from "./../../constant/data.js";

function AsideFilters() {
  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    jobType: ["Full-time"], 
    experience: "All levels",
    salary: 80,
  });
  // Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Handle checkbox toggle
  const handleJobType = (type) => {
    setFilters((prev) => {
      const exists = prev.jobType.includes(type);
      return {
        ...prev,
        jobType: exists
          ? prev.jobType.filter((t) => t !== type)
          : [...prev.jobType, type],
      };
    });
  };
  return (
    <aside className="hidden lg:flex w-72 shrink-0 flex-col gap-8">
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Filters
          </h3>
          <button
            onClick={clearFilters}
            className="text-xs font-semibold text-primary hover:underline"
          >
            Clear all
          </button>
        </div>

        <div className="space-y-6">
          {/* Keywords */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Keywords
            </label>
            <input
              type="text"
              name="keyword"
              value={filters.keyword}
              onChange={handleChange}
              placeholder="Job title, skills..."
              className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-2 text-sm focus:border-primary focus:ring-primary dark:text-white"
            />
          </div>

          {/* Location */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={filters.location}
              onChange={handleChange}
              placeholder="City, state, or remote"
              className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-2 text-sm focus:border-primary focus:ring-primary dark:text-white"
            />
          </div>

          {/* Job Type */}
          <div className="flex flex-col gap-3">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Job Type
            </label>
            <div className="space-y-2">
              {jobTypes.map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={filters.jobType.includes(type)}
                    onChange={() => handleJobType(type)}
                    className="size-4 rounded border-slate-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {type}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Experience Level */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Experience Level
            </label>
            <select
              name="experience"
              value={filters.experience}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm px-3 py-2 focus:border-primary focus:ring-primary dark:text-white"
            >
              {experienceLevels.map((level) => (
                <option key={level}>{level}</option>
              ))}
            </select>
          </div>

          {/* Salary Range */}
          <div className="flex flex-col gap-4">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Salary Range
            </label>
            <div className="px-2">
              <input
                type="range"
                min="0"
                max="200"
                value={filters.salary}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    salary: e.target.value,
                  }))
                }
                className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 dark:bg-slate-700 accent-primary"
              />
              <div className="mt-2 flex justify-between text-xs font-medium text-slate-500">
                <span>$0k</span>
                <span>${filters.salary}k+</span>
                <span>$200k+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default AsideFilters;
