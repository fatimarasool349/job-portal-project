import { useState } from "react";
import CandidateTable from "../../components/adminComponents/candidate/CandidateTable";
import CandidateFilters from "../../components/adminComponents/candidate/CandidateFilters";
import Pagination from "../../components/adminComponents/Pagination";
import { initialCandidates } from "../../constant/admindata";
import AddCandidateModal from "../../modal/AddCandidateModal";

function ManageCandidate() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState(""); // search input state
  const [candidates, setCandidates] = useState([...initialCandidates]);
  const role = localStorage.getItem("role") || "Recruiter";
  const recruiterId = localStorage.getItem("recruiter_id");

  // 🔥 Role-based filtering
  const roleFilteredCandidates =
    role === "Admin"
      ? candidates
      : candidates.filter((c) => c.recruiter_id == recruiterId);

  const filteredCandidates = roleFilteredCandidates.filter((c) => {
    const matchesStatus = statusFilter === "All" || c.status === statusFilter;

    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.position.toLowerCase().includes(search.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  const [showModal, setShowModal] = useState(false);
  const [editingCandidate, setEditingCandidate] = useState(null);

  const handleAddCandidate = () => {
    setEditingCandidate(null);
    setShowModal(true);
  };

  const handleEditCandidate = (candidate) => {
    setEditingCandidate(candidate);
    setShowModal(true);
  };
  const handleDeleteCandidate = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this candidate?",
    );
    if (confirmDelete) {
      setCandidates((prev) => prev.filter((c) => c.id !== id));
    }
  };
  return (
    <section className="p-8 flex-1">
      <CandidateFilters
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        onAddCandidate={role === "Admin" ? handleAddCandidate : null}
        role={role}
      />
      <CandidateTable
        filteredCandidates={filteredCandidates}
        candidates={candidates}
        setCandidates={setCandidates}
        onEditCandidate={handleEditCandidate}
        onDeleteCandidate={
          role === "Admin" ? handleDeleteCandidate : null
        }
        role={role}
      />{" "}
      <Pagination
        currentPage={1}
        totalEntries={filteredCandidates.length}
        pageSize={10}
      />
      {showModal && role === "Admin" && (
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
