import { useState, useEffect } from "react";

import CompanyGrid from "../../components/companies/CompanyGrid";
import CompanySearch from "../../components/companies/CompanySearch";
import Pagination from "../../components/companies/Pagination";

import { getAllCompanies } from "../../api/companyApi";

function CompaniesPage() {
  // companies state
  const [companies, setCompanies] = useState([]);

  // search state
  const [search, setSearch] = useState("");

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);

  // loading state
  const [loading, setLoading] = useState(false);

  const companiesPerPage = 6;

  // FETCH COMPANIES
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);

        const data = await getAllCompanies();

        console.log("Fetched Companies:", data);

        setCompanies(data);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  // SEARCH FILTER
  const filteredCompanies = companies.filter((company) => {
    const name = company.name?.toLowerCase() || "";
    const industry = company.industry?.toLowerCase() || "";

    const query = search.toLowerCase();

    return name.includes(query) || industry.includes(query);
  });

  // RESET PAGE WHEN SEARCH CHANGES
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  // PAGINATION
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

        <CompanySearch search={search} setSearch={setSearch} />

        {loading ? (
          <div className="py-20 text-center">Loading companies...</div>
        ) : (
          <>
            {currentCompanies.length > 0 ? (
              <CompanyGrid companies={currentCompanies} />
            ) : (
              <div className="py-20 text-center text-gray-500">
                No companies found.
              </div>
            )}

            {/* Pagination */}
            <Pagination
              totalItems={filteredCompanies.length}
              itemsPerPage={companiesPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        )}
      </div>
    </main>
  );
}

export default CompaniesPage;
