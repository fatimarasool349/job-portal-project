import { useState } from "react";
import RecruiterTable from "../../components/adminComponents/recruiter/RecruiterTable.jsx";
import SearchFilter from "../../components/adminComponents/recruiter/SearchFilter.jsx";
import { initialRecruiterData } from "../../constant/admindata.js";
import AddRecruiterModal from "../../modal/AddRecruiterModal.jsx";
import Pagination from "../../components/adminComponents/Pagination.jsx";

function ManageRecruiter() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([...initialRecruiterData]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [editingRecruiter, setEditingRecruiter] = useState(null);

  const filteredData = data.filter((item) => {
    const matchesSearch =
      item.company.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });
  const handleToggleStatus = (id) => {
    setData((prev) =>
      prev.map((rec) =>
        rec.id === id
          ? { ...rec, status: rec.status === "Active" ? "Inactive" : "Active" }
          : rec,
      ),
    );
  };
  const handleDeleteRecruiter = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      setData((prev) => prev.filter((rec) => rec.id !== id));
    }
  };

  return (
    <section className="p-8 flex-1">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        onAddClick={() => setShowModal(true)}
      />
      <RecruiterTable
        data={filteredData}
        onEdit={setEditingRecruiter} // pass handler for editing
        onDeleteRecruiter={handleDeleteRecruiter}
      />
      {/* // add new recriter modal */}
      {showModal && (
        <AddRecruiterModal
          onClose={() => setShowModal(false)}
          setData={setData}
        />
      )}
      {editingRecruiter && (
        <AddRecruiterModal
          onClose={() => setEditingRecruiter(null)}
          setData={setData}
          existingData={editingRecruiter} // pass the recruiter to edit
        />
      )}
      <Pagination
        currentPage={1}
        totalEntries={filteredData.length}
        pageSize={10}
      />
    </section>
  );
}
export default ManageRecruiter;
