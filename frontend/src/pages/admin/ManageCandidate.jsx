import { useState, useMemo, useCallback, useEffect } from "react";
import CandidateTable from "../../components/adminComponents/candidate/CandidateTable";
import CandidateFilters from "../../components/adminComponents/candidate/CandidateFilters";
import Pagination from "../../components/adminComponents/common/Pagination";
import AddCandidateModal from "../../modal/AddCandidateModal";
import { useRole } from "../../hooks/useRole";
import { usePagination } from "../../hooks/usePagination";
import { getAllJobseekers, deleteJobseeker } from "../../api/userApi";

function ManageCandidate() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [candidates, setCandidates] = useState([]);
  const { role, canAdd, canEdit, canDelete } = useRole();

  const fetchCandidates = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getAllJobseekers();
      setCandidates(res.data.users);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCandidates();
  }, [fetchCandidates]);

  

  const filteredCandidates = useMemo(() => {
    return candidates.filter((c) => {
      const matchesStatus = statusFilter === "All" || c.status === statusFilter;

      const matchesSearch =
        c.fullName?.toLowerCase().includes(search.toLowerCase()) ||
        c.email?.toLowerCase().includes(search.toLowerCase());

      return matchesStatus && matchesSearch;
    });
  }, [candidates, statusFilter, search]);

  const pageSize = 10;
  const { currentPage, paginatedData, setCurrentPage } = usePagination(
    filteredCandidates,
    pageSize,
  );

  const [showModal, setShowModal] = useState(false);
  const [editingCandidate, setEditingCandidate] = useState(null);

  const handleAddCandidate = useCallback(() => {
    setEditingCandidate(null);
    setShowModal(true);
  }, []);

  const handleEditCandidate = useCallback((user) => {
    setEditingCandidate(user);
    setShowModal(true);
  }, []);
  const handleDeleteCandidate = useCallback(
    async (id) => {
      if (!canDelete) {return;}

      const confirmDelete = window.confirm(
        "Are you sure you want to delete this candidate?",
      );

      if (!confirmDelete) {return;}

      try {
        await deleteJobseeker(id);

        setCandidates((prev) => prev.filter((user) => user._id !== id));
      } catch (err) {
        console.error(err);
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
      {loading ? (
        <p>Loading candidates...</p>
      ) : (
        <CandidateTable
          filteredCandidates={paginatedData}
          candidates={candidates}
          setCandidates={setCandidates}
          onEditCandidate={canEdit ? handleEditCandidate : null}
          onDeleteCandidate={canDelete ? handleDeleteCandidate : null}
          role={role}
        />
      )}
      <Pagination
        currentPage={currentPage}
        totalEntries={filteredCandidates.length}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
      />
      {showModal && (
        <AddCandidateModal
          onClose={() => setShowModal(false)}
          setData={fetchCandidates}
          existingData={editingCandidate}
        />
      )}
    </section>
  );
}

export default ManageCandidate;
