import { IoMdSearch } from "react-icons/io";

function CompanySearch({ search, setSearch }) {
  return (
    <div className="mb-10 space-y-4">
      <div className="relative flex w-full flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <IoMdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search companies by name or industry"
            className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4"
          />
        </div>
      </div>
    </div>
  );
}

export default CompanySearch;
