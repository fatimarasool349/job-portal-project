import { useState } from "react";
import { jobData } from "../constant/data";
import CompanyGrid from "../components/companies/CompanyGrid";
import CompanySearch from "../components/companies/CompanySearch";
import Pagination from "../components/companies/Pagination";

function CompaniesPage() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const companiesPerPage = 6;

  // 1️⃣ extract unique companies
  const companies = Object.values(
    jobData.reduce((acc, job) => {
      const name = job.company.name;

      if (!acc[name]) {
        acc[name] = job.company;
      }

      return acc;
    }, {})
  );

  // 2️⃣ search filter
  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(search.toLowerCase()) ||
      company.industry.toLowerCase().includes(search.toLowerCase())
  );

  // 3️⃣ pagination logic
  const indexOfLast = currentPage * companiesPerPage;
  const indexOfFirst = indexOfLast - companiesPerPage;

  const currentCompanies = filteredCompanies.slice(
    indexOfFirst,
    indexOfLast
  );

  return (
    <main className="flex-1">
      <div className="mx-auto max-w-7xl px-4 py-8">

        <div className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Explore Top Companies
          </h2>

          <p className="text-slate-500">
            Discover the best places to work.
          </p>
        </div>

        {/* Search */}
        <CompanySearch search={search} setSearch={setSearch} />

        {/* Grid */}
        <CompanyGrid companies={currentCompanies} />

        {/* Pagination */}
        <Pagination
          totalItems={filteredCompanies.length}
          itemsPerPage={companiesPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

      </div>
    </main>
  );
}

export default CompaniesPage;