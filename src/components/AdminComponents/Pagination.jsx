function Pagination({ currentPage = 1, totalEntries = 0, pageSize = 10 }) {
  const totalPages = Math.ceil(totalEntries / pageSize);
  return (
    <div className="p-6 bg-surface-container-low flex items-center justify-between">
      <p className="text-sm text-on-surface-variant">
        Showing {currentPage} to {Math.min(currentPage * pageSize, totalEntries)} of{" "}
        {totalEntries} entries
      </p>
      <div className="flex items-center gap-1">
        <button className="px-4 py-2 text-sm font-medium text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all disabled:opacity-50">
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`w-10 h-10 flex items-center justify-center rounded-full ${
              i + 1 === currentPage
                ? "bg-blue-600 text-white text-on-blue-600 font-bold shadow-md"
                : "hover:bg-surface-container-high text-on-surface font-medium transition-all"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button className="px-4 py-2 text-sm font-medium text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all">
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;