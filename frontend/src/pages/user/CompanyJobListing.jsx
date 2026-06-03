import { useEffect, useState } from "react";
import { useParams } from "react-router";

import JobListing from "../../components/CompanyJobListing/JobListing";
import CompanyHero from "../../components/companyJobListing/CompanyHero";

import { getCompanyBySlug } from "../../api/companyApi";
import { getJobsByCompany } from "../../api/jobApi";

function CompanyJobListing() {
  const { slug } = useParams();

  const [company, setCompany] = useState(null);

  const [jobs, setJobs] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        setLoading(true);

        const companyData =
          await getCompanyBySlug(slug);

        const jobsData =
          await getJobsByCompany(companyData._id);

        setCompany(companyData);

        setJobs(jobsData);

        console.log(
          "Company:",
          companyData
        );

        console.log("Jobs:", jobsData);
      } catch (error) {
        console.error(
          "Fetch Error:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyData();
  }, [slug]);

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  return (
    <main>
      {company && (
        <CompanyHero company={company} />
      )}

      <JobListing jobs={jobs} />
    </main>
  );
}

export default CompanyJobListing;