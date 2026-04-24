import { useState, useCallback, useEffect, useMemo } from "react";
import RecruiterTable from "../../components/adminComponents/recruiter/RecruiterTable.jsx";
import RecruiterFilter from "../../components/adminComponents/recruiter/RecruiterFilter.jsx";
import AddRecruiterModal from "../../modal/AddRecruiterModal.jsx";
import Pagination from "../../components/adminComponents/common/Pagination.jsx";

import { useFilteredRecruiters } from "../../hooks/useFiltersRecruiter.js";
import { useRole } from "../../hooks/useRole.js";
import { usePagination } from "../../hooks/usePagination.js";

import {
  getRecruiters,
  updateRecruiter,
  deleteRecruiter,
} from "../../api/recruiterApi.js";

function ManageRecruiter() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [editingRecruiter, setEditingRecruiter] = useState(null);
  const [loading, setLoading] = useState(false);

  const { canDelete, canAdd, canEdit } = useRole();

  // 🔹 FETCH RECRUITERS FROM API
  const fetchRecruiters = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getRecruiters();
      setData(res.data.recruiters || []);
    } catch (err) {
      console.error("Failed to fetch recruiters:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRecruiters();
  }, [fetchRecruiters]);

  // 🔹 FILTER
  const filteredData = useFilteredRecruiters(data, search, statusFilter);

  const pageSize = 10;

  const { currentPage, paginatedData, setCurrentPage } = usePagination(
    filteredData,
    pageSize
  );

  // 🔹 TOGGLE STATUS (API)
  const handleToggleStatus = useCallback(
    async (id, currentStatus) => {
      if (!canEdit) return;

      const newStatus =
        currentStatus === "Active" ? "Inactive" : "Active";

      try {
        await updateRecruiter(id, { status: newStatus });

        setData((prev) =>
          prev.map((rec) =>
            rec._id === id ? { ...rec, status: newStatus } : rec
          )
        );
      } catch (err) {
        console.error(err);
      }
    },
    [canEdit]
  );

  // 🔹 DELETE (API)
  const handleDeleteRecruiter = useCallback(
    async (id) => {
      if (!canDelete) return;

      const confirmDelete = window.confirm("Are you sure?");
      if (!confirmDelete) return;

      try {
        await deleteRecruiter(id);

        setData((prev) => prev.filter((rec) => rec._id !== id));
      } catch (err) {
        console.error(err);
      }
    },
    [canDelete]
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

      {loading ? (
        <p>Loading recruiters...</p>
      ) : (
        <RecruiterTable
          data={paginatedData}
          onEdit={setEditingRecruiter}
          onDeleteRecruiter={handleDeleteRecruiter}
          onToggleStatus={handleToggleStatus}
        />
      )}

      <Pagination
        currentPage={currentPage}
        totalEntries={filteredData.length}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
      />

      {showModal && (
        <AddRecruiterModal
          onClose={() => setShowModal(false)}
          setData={fetchRecruiters}
        />
      )}

      {editingRecruiter && canEdit && (
        <AddRecruiterModal
          onClose={() => setEditingRecruiter(null)}
          setData={fetchRecruiters}
          existingData={editingRecruiter}
        />
      )}
    </section>
  );
}

export default ManageRecruiter;