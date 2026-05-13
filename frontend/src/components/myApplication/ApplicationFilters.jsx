export default function ApplicationFilters({
  search,
  setSearch,
  status,
  setStatus,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">

      <input
        className="w-full md:flex-1 px-4 py-3 border border-gray-300 hover:border-blue-500  focus:outline-none focus:ring focus:ring-blue-600 focus:border-blue-600  rounded-xl"
        placeholder="Search by job title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="w-full md:w-64 px-4 py-3 border border-gray-300 hover:border-blue-500  focus:outline-none focus:ring focus:ring-blue-600 focus:border-blue-600  rounded-xl"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>All</option>
        <option>pending</option>
        <option>accepted</option>
        <option>rejected</option>
      </select>
    </div>
  );
}