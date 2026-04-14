import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AsideFilters from "../../components/findJob/AsideFilters";
import JobListing from "../../components/findJob/JobListing";
import { jobData, companyData } from "../../constant";

function FindJob() {
  const locationObj = useLocation();
  const query = new URLSearchParams(locationObj.search);

  const jobQuery = query.get("job") || "";
  const locationQuery = query.get("location") || "";

  const [results, setResults] = useState([]);
  // 👉 🔥 PUT YOUR CODE HERE
  useEffect(() => {
    const searchJob = jobQuery.toLowerCase().trim();
    const searchLocation = locationQuery.toLowerCase().trim();

    if (!searchJob && !searchLocation) {
      const allJobs = jobData.map((job) => {
        const company = companyData.find((c) => c.id === job.companyId);
        return { ...job, company };
      });

      setResults(allJobs);
      return;
    }

    const filteredJobs = jobData
      .map((job) => {
        const company = companyData.find((c) => c.id === job.companyId);

        const title = job.title?.toLowerCase() || "";
        const loc = job.location?.toLowerCase() || "";
        const companyName = company?.name?.toLowerCase() || "";

        let score = 0;

        // 🎯 scoring system
        if (title === searchJob) score += 3; // exact match
        if (title.includes(searchJob)) score += 2;
        if (companyName.includes(searchJob)) score += 2;
        if (loc.includes(searchLocation)) score += 1;

        return { ...job, company, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score); // 🔥 most relevant first
    setResults(filteredJobs);
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
