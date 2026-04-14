import { useState, useCallback } from "react";
import RecruiterTable from "../../components/adminComponents/recruiter/RecruiterTable.jsx";
import RecruiterFilter from "../../components/adminComponents/recruiter/RecruiterFilter.jsx";
import { initialRecruiterData } from "../../constant/index.js";
import AddRecruiterModal from "../../modal/AddRecruiterModal.jsx";
import Pagination from "../../components/adminComponents/common/Pagination.jsx";
import { useFilteredRecruiters } from "../../hooks/useFiltersRecruiter.js";
import { useRole } from "../../hooks/useRole.js";
import { usePagination } from "../../hooks/usePagination.js";

function ManageRecruiter() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([...initialRecruiterData]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [editingRecruiter, setEditingRecruiter] = useState(null);
  const { role, canDelete, canAdd, canEdit } = useRole();
    const filteredData = useFilteredRecruiters(data, search, statusFilter);

      const pageSize = 10;


  const { currentPage, paginatedData, setCurrentPage } = usePagination(
    filteredData,
    pageSize,
  );

  const handleToggleStatus = useCallback(
    (id) => {
      if (!canEdit) return;

      setData((prev) =>
        prev.map((rec) =>
          rec.id === id
            ? {
                ...rec,
                status: rec.status === "Active" ? "Inactive" : "Active",
              }
            : rec,
        ),
      );
    },
    [canEdit],
  );
  const handleDeleteRecruiter = useCallback(
    (id) => {
      if (!canDelete) return; 

      const confirmDelete = window.confirm("Are you sure you want to delete?");
      if (confirmDelete) {
        setData((prev) => prev.filter((rec) => rec.id !== id));
      }
    },
    [canDelete],
  );

  return (
    <section className="p-8 flex-1">
      <RecruiterFilter
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        onAddClick={canAdd ? () => setShowModal(true) : null}
      />
      <RecruiterTable
        data={paginatedData}
        onEdit={setEditingRecruiter} 
        onDeleteRecruiter={handleDeleteRecruiter}
      />
      {showModal && (
        <AddRecruiterModal
          onClose={() => setShowModal(false)}
          setData={setData}
        />
      )}
      {editingRecruiter && canEdit && (
        <AddRecruiterModal
          onClose={() => setEditingRecruiter(null)}
          setData={setData}
          existingData={editingRecruiter}
        />
      )}
       <Pagination
        currentPage={currentPage}
        totalEntries={filteredData.length}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
      />
    </section>
  );
}
export default ManageRecruiter;
