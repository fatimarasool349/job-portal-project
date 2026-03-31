import { useState, useEffect } from "react";
import { companyData } from "../../constant/data";
import CompanyGrid from "../../components/companies/CompanyGrid";
import CompanySearch from "../../components/companies/CompanySearch";
import Pagination from "../../components/companies/Pagination";

function CompaniesPage() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const companiesPerPage = 6;

  // 2️⃣ search filter
  const filteredCompanies = companyData.filter((company) => {
    const name = company.name?.toLowerCase() || "";
    const industry = company.industry?.toLowerCase() || "";
    const query = search.toLowerCase();
    return name.includes(query) || industry.includes(query);
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  // 3️⃣ pagination logic
  const indexOfLast = currentPage * companiesPerPage;
  const indexOfFirst = indexOfLast - companiesPerPage;

  const currentCompanies = filteredCompanies.slice(indexOfFirst, indexOfLast);

  return (
    <main className="flex-1">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Explore Top Companies
          </h2>

          <p className="text-slate-500">Discover the best places to work.</p>
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
