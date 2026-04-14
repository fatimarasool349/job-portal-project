import JobListing from "../../components/CompanyJobListing/JobListing";
import CompanyHero from "../../components/companyJobListing/CompanyHero";
import { companyData, jobData } from "../../constant/data";
import { useParams } from "react-router";

function CompanyJobListing() {

  const { id } = useParams();

  const company = companyData.find((c) => c.id === parseInt(id));
  const jobs = jobData.filter((j) => j.companyId === parseInt(id));
  console.log("Company ID:", id);
console.log("Jobs found:", jobs);

  return (
    <main>
      {company && <CompanyHero company={company} />}
      <JobListing jobs={jobs} />
    </main>
  );
}
export default CompanyJobListing;