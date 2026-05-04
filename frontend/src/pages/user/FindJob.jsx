import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AsideFilters from "../../components/findJob/AsideFilters";
import JobListing from "../../components/findJob/JobListing";
import { jobData, companyData } from "../../constants";
import { getAllJobs } from "../../api/jobApi";

function FindJob() {
  const locationObj = useLocation();
  const query = new URLSearchParams(locationObj.search);

  const jobQuery = query.get("job") || "";
  const locationQuery = query.get("location") || "";

  const [results, setResults] = useState([]);
  // 👉 🔥 PUT YOUR CODE HERE
  useEffect(() => {
    const fetchJobs = async () => {
      const jobs = await getAllJobs();

      const searchJob = jobQuery.toLowerCase().trim();
      const searchLocation = locationQuery.toLowerCase().trim();

      if (!searchJob && !searchLocation) {
        setResults(jobs);
        return;
      }

      const filteredJobs = jobs
        .map((job) => {
          const title = job.title?.toLowerCase() || "";
          const loc = job.location?.toLowerCase() || "";
          const companyName = job.company?.name?.toLowerCase() || "";

          let score = 0;

          if (title === searchJob) score += 3;
          if (title.includes(searchJob)) score += 2;
          if (companyName.includes(searchJob)) score += 2;
          if (searchLocation && loc.includes(searchLocation)) score += 1;
          return { ...job, score };
        })
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score);

      setResults(filteredJobs);
    };

    fetchJobs();
  }, [jobQuery, locationQuery]);

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <main className="mx-auto flex w-full max-w-7xl flex-1 gap-8 p-4 md:p-10">
        <AsideFilters />
        <JobListing jobs={results} />
      </main>
    </div>
  );
}

export default FindJob;
