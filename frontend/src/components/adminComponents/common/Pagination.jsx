function Pagination({
  currentPage = 1,
  totalEntries = 0,
  pageSize = 10,
  onPageChange,
}) {
  const totalPages = Math.max(1, Math.ceil(totalEntries / pageSize));
  return (
    <div className="p-6 bg-surface-container-low flex items-center justify-between">
      <p className="text-sm text-on-surface-variant">
        Showing {(currentPage - 1) * pageSize + 1} to{" "}
        {Math.min(currentPage * pageSize, totalEntries)} of {totalEntries}{" "}
        entries
      </p>

      <div className="flex items-center gap-1">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange && onPageChange(currentPage - 1)}
          className="px-4 py-2 text-sm disabled:opacity-50"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => onPageChange && onPageChange(i + 1)}
            className={`w-10 h-10 rounded-full ${
              i + 1 === currentPage
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange && onPageChange(currentPage + 1)}
          className="px-4 py-2 text-sm disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
