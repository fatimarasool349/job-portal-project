function CompanyFilters({ search, setSearch, onAddCompany }) {
  return (
    <div className="flex justify-between mb-6">
      <input
        type="text"
        placeholder="Search company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-1/3"
      />

      <button
        onClick={onAddCompany}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Company
      </button>
    </div>
  );
}

export default CompanyFilters;