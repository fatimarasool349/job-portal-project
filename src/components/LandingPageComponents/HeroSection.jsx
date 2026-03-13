import { heroData, jobData, companyData } from "./../../constant/data.js";
import { useState } from "react";

function HeroSection() {
  const [job, setJob] = useState("");
  const [location, setLocation] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Filter jobData
    const jobResults = jobData.filter((item) => {
      const jobTitle = item.title?.toLowerCase() || "";
      const jobLocation = item.location?.toLowerCase() || "";
      return (
        jobTitle.includes(job.toLowerCase()) &&
        jobLocation.includes(location.toLowerCase())
      );
    });

    // Optionally filter companyData
    const companyResults = companyData.filter((item) => {
      const companyName = item.name?.toLowerCase() || "";
      const companyLocation = item.location?.toLowerCase() || "";
      return (
        companyName.includes(job.toLowerCase()) &&
        companyLocation.includes(location.toLowerCase())
      );
    });

    // Combine results if needed
    setResults([...jobResults, ...companyResults]);
  };

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {heroData?.title || "Find your"}{" "}
            <span className="text-blue-600">
              {heroData?.highlight || "Dream Job"}
            </span>{" "}
            {heroData?.subtitle || "today"}
          </h1>

          <p className="text-gray-600 mb-6">{heroData?.description}</p>

          {/* Search bar */}
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder={heroData?.placeholders?.job || "Job title"}
              className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
            <input
              type="text"
              placeholder={heroData?.placeholders?.location || "Location"}
              className="flex-1 p-3 border border-gray-300 focus:outline-none"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button
              className="bg-blue-600 text-white px-6 rounded-r-lg hover:bg-blue-700"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          {/* Search results */}
          {results.length > 0 && (
            <div className="mt-6">
              {results.map((item) => (
                <div
                  key={item.id}
                  className="p-4 border rounded mb-2 hover:bg-gray-50"
                >
                  {item.title
                    ? `${item.title} at ${item.company.name} — ${item.location}`
                    : `${item.name} — ${item.location}`}
                </div>
              ))}
            </div>
          )}

          {/* Popular tags */}
          <div className="text-sm text-gray-400 mt-4">
            Popular:{" "}
            {heroData?.popularTags?.map((tag, index) => (
              <span key={index}>
                {tag}
                {index !== heroData.popularTags.length - 1 && " · "}
              </span>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src={heroData?.image}
            alt="Team working"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}

export default HeroSection;