import { useState, useEffect } from "react";
import { searchJobs } from "../api/jobApi";

export function useSearch(job, location) {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => clearTimeout(delay);
  }, [job, location]);

  const handleSearch = async () => {
    try {
      const searchJob = job.trim();
      const searchLocation = location.trim();

      // Empty search
      if (!searchJob && !searchLocation) {
        setResults([]);
        setError("");
        return [];
      }

      const jobs = await searchJobs(searchJob, searchLocation);

      // No results found
      if (!jobs || jobs.length === 0) {
        if (searchLocation && searchJob) {
          setError(`No jobs found for "${searchJob}" in "${searchLocation}"`);
        } else if (searchLocation) {
          setError(`No jobs found in "${searchLocation}"`);
        } else {
          setError(`No jobs found for "${searchJob}"`);
        }

        setResults([]);
        return [];
      }

      const formattedJobs = jobs.map((item) => ({
        ...item,
        type: "job",
      }));

      setResults(formattedJobs);
      setError(""); // clear error if success

      return formattedJobs;
    } catch (error) {
      console.error(error);

      setResults([]);
      setError("Something went wrong. Please try again.");

      return [];
    }
  };

  return { results, error, handleSearch };
}
