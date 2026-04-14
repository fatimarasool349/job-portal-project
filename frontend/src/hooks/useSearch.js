import { useState, useEffect } from "react";
import { jobData, companyData } from "../constant";

export function useSearch(job, location) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const delay = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => clearTimeout(delay);
  }, [job, location]);

 const handleSearch = () => {
  const searchJob = job.toLowerCase().trim();
  const searchLocation = location.toLowerCase().trim();

  if (!searchJob && !searchLocation) {
    setResults([]);
    return []; 
  }

  const jobResults = jobData
    .map((job) => {
      const company = companyData.find((c) => c.id === job.companyId);
      return { ...job, company, type: "job" };
    })
    .filter((item) => {
      const jobTitle = item.title?.toLowerCase() || "";
      const jobLocation = item.location?.toLowerCase() || "";
      return (
        (!searchJob || jobTitle.includes(searchJob)) &&
        (!searchLocation || jobLocation.includes(searchLocation))
      );
    });

  const companyResults = companyData
    .map((item) => ({ ...item, type: "company" }))
    .filter((item) => {
      const name = item.name?.toLowerCase() || "";
      const loc = item.location?.toLowerCase() || "";
      return (
        (!searchJob || name.includes(searchJob)) &&
        (!searchLocation || loc.includes(searchLocation))
      );
    });

  const finalResults = [...jobResults, ...companyResults];

  setResults(finalResults);
  return finalResults; // 👈 important
};

  return { results, handleSearch };
}