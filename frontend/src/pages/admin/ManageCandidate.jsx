import { useState, useMemo, useCallback } from "react";
import CandidateTable from "../../components/adminComponents/candidate/CandidateTable";
import CandidateFilters from "../../components/adminComponents/candidate/CandidateFilters";
import Pagination from "../../components/adminComponents/common/Pagination";
import { initialCandidates } from "../../constant/index.js";
import AddCandidateModal from "../../modal/AddCandidateModal";
import { useRole } from "../../hooks/useRole";
import { usePagination } from "../../hooks/usePagination";
function ManageCandidate() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState(""); // search input state
  const [candidates, setCandidates] = useState([...initialCandidates]);
  const { role, recruiterId, canAdd, canEdit, canDelete, canViewAll } =
    useRole();

  const roleFilteredCandidates = useMemo(() => {
    return canViewAll
      ? candidates
      : candidates.filter((c) => c.recruiter_id == recruiterId);
  }, [candidates, canViewAll, recruiterId]);

  const filteredCandidates = useMemo(() => {
    return roleFilteredCandidates.filter((c) => {
      const matchesStatus = statusFilter === "All" || c.status === statusFilter;

      const matchesSearch =
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase()) ||
        c.position.toLowerCase().includes(search.toLowerCase());

      return matchesStatus && matchesSearch;
    });
  }, [roleFilteredCandidates, statusFilter, search]);
  
  const pageSize = 10;
  const { currentPage, paginatedData, setCurrentPage } = usePagination(
    filteredCandidates,
    pageSize
  );


  const [showModal, setShowModal] = useState(false);
  const [editingCandidate, setEditingCandidate] = useState(null);

  const handleAddCandidate = useCallback(() => {
    setEditingCandidate(null);
    setShowModal(true);
  }, []);

  const handleEditCandidate = useCallback((candidate) => {
    setEditingCandidate(candidate);
    setShowModal(true);
  }, []);
  const handleDeleteCandidate = useCallback(
    (id) => {
      if (!canDelete) return;

      const confirmDelete = window.confirm(
        "Are you sure you want to delete this candidate?",
      );

      if (confirmDelete) {
        setCandidates((prev) => prev.filter((c) => c.id !== id));
      }
    },
    [canDelete],
  );
  return (
    <section className="p-8 flex-1">
      <CandidateFilters
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        onAddCandidate={canAdd ? handleAddCandidate : null}
        role={role}
      />
      <CandidateTable
        filteredCandidates={paginatedData}
        candidates={candidates}
        setCandidates={setCandidates}
        onEditCandidate={canEdit ? handleEditCandidate : null}
        onDeleteCandidate={canDelete ? handleDeleteCandidate : null}
        role={role}
      />{" "}
     <Pagination
        currentPage={currentPage}
        totalEntries={filteredCandidates.length}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
      />
      {showModal &&  canAdd && (
        <AddCandidateModal
          onClose={() => setShowModal(false)}
          setData={setCandidates}
          existingData={editingCandidate}
        />
      )}
    </section>
  );
}

export default ManageCandidate;
