import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) {

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pages = [...Array(totalPages).keys()].map((n) => n + 1);

  return (
    <div className="mt-12 flex items-center justify-center gap-2">

      {/* Previous */}
      <button
        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        className="h-10 w-10 border rounded-lg flex items-center justify-center"
      >
        <FaChevronLeft/>
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`h-10 w-10 flex items-center justify-center rounded-lg text-sm font-bold
          ${currentPage === page
              ? "bg-blue-600 text-white"
              : "text-slate-600"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() =>
          setCurrentPage((p) => Math.min(p + 1, totalPages))
        }
        className="h-10 w-10 border rounded-lg flex items-center justify-center"
      >
        <FaChevronRight/>
      </button>

    </div>
  );
}

export default Pagination;