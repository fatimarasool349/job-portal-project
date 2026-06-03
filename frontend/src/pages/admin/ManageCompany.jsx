import { useState, useMemo, useEffect, useCallback } from "react";
import { useRole } from "../../hooks/useRole";
import { usePagination } from "../../hooks/usePagination";
import CompanyFilters from "../../components/adminComponents/companyComponents/companyFilters";
import CompanyTable from "../../components/adminComponents/companyComponents/CompanyTable";
import Pagination from "../../components/adminComponents/common/Pagination";
import AddCompanyModal from "../../modal/AddCompanyModal";

import {
  getAllCompanies,
  createCompany,
  updateCompany,
  deleteCompany,
} from "../../api/companyApi";

function ManageCompany() {
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingCompany, setEditingCompany] = useState(null);

  const { canAdd, canEdit, canDelete } = useRole();

  // FETCH
  const fetchCompanies = async () => {
    try {
      const data = await getAllCompanies();
      setCompanies(data || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  // CREATE / UPDATE
  const handleSaveCompany = async (data, id) => {
    if (id) {
      await updateCompany(id, data);
    } else {
      await createCompany(data);
    }
    await fetchCompanies();
  };

  // DELETE
  const handleDelete = useCallback(
    async (id) => {
      if (!canDelete) return;

      const confirm = window.confirm("Delete this company?");
      if (!confirm) return;

      await deleteCompany(id);
      fetchCompanies();
    },
    [canDelete]
  );

  // EDIT
  const handleEdit = (company) => {
    setEditingCompany(company);
    setShowModal(true);
  };

  // ADD
  const handleAdd = () => {
    setEditingCompany(null);
    setShowModal(true);
  };

  // FILTER
  const filteredCompanies = useMemo(() => {
    return companies.filter((c) =>
      c.name?.toLowerCase().includes(search.toLowerCase())
    );
  }, [companies, search]);

  // PAGINATION
  const pageSize = 10;
  const { currentPage, paginatedData, setCurrentPage } =
    usePagination(filteredCompanies, pageSize);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  return (
    <main className="p-8 flex-1">
      <CompanyFilters
        search={search}
        setSearch={setSearch}
        onAddCompany={canAdd ? handleAdd : null}
      />

      <CompanyTable
        companies={paginatedData}
        onEdit={canEdit ? handleEdit : null}
        onDelete={handleDelete}
      />

      <Pagination
        currentPage={currentPage}
        totalEntries={filteredCompanies.length}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
      />

      {showModal && (
        <AddCompanyModal
          onClose={() => setShowModal(false)}
          onSave={handleSaveCompany}
          existingData={editingCompany}
        />
      )}
    </main>
  );
}

export default ManageCompany;