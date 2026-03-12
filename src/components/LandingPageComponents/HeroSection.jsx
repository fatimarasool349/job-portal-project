import { heroData ,jobData } from "./../../constant/data.js";
import { useState } from "react";
function HeroSection() {
  const [job, setJob] = useState("");
  const [location, setLocation] = useState("");

  // Search handler
  const handleSearch = () => {
    // Example: filter heroData.jobs if it exists or just log inputs
    console.log("Searching for:", job, "in", location);

    // If you have job data array, you could filter it like:
    const results = jobData.filter(
      (item) =>
        item.name.toLowerCase().includes(job.toLowerCase()) &&
        item.location.toLowerCase().includes(location.toLowerCase())
    );
    console.log(results);
  };
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {heroData.title}{" "}
            <span className="text-blue-600">{heroData.highlight}</span>{" "}
            {heroData.subtitle}
          </h1>

          <p className="text-gray-600 mb-6">{heroData.description}</p>

          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder={heroData.placeholders.job}
              className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
            <input
              type="text"
              placeholder={heroData.placeholders.location}
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

          <div className="text-sm text-gray-400">
            Popular:{" "}
            {heroData.popularTags.map((tag, index) => (
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
            src={heroData.image}
            alt="Team working"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
