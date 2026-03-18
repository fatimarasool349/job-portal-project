import { heroData } from "../../constant/data";
import { useState } from "react";
import { useSearch } from "../../hooks/useSearch.js";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

function HeroSection() {
  const [job, setJob] = useState("");
  const [location, setLocation] = useState("");

  const { results, handleSearch } = useSearch(job, location);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col items-center md:flex-row gap-10">
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {heroData?.title}{" "}
          <span className="text-blue-600">{heroData?.highlight}</span>{" "}
          {heroData?.subtitle}
        </h1>

        <p className="text-gray-600 mb-6">{heroData?.description}</p>

        <SearchBar
          job={job}
          setJob={setJob}
          location={location}
          setLocation={setLocation}
          onSearch={handleSearch}
        />

        <SearchResults results={results} />
      </div>

      <div className="flex-1">
        <img
          src={heroData?.image}
          alt="Team"
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}

export default HeroSection;