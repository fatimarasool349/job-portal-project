import { useState, useMemo ,useEffect} from "react";
import JobApplicationTable from "../../components/adminComponents/allApplications/JobApplicationTable";
import JobApplicationFilters from "../../components/adminComponents/allApplications/JobApplicationFilters";
import Pagination from "../../components/adminComponents/common/Pagination";
import { useRole } from "../../hooks/useRole";
import { usePagination } from "../../hooks/usePagination";
import { useSelector , useDispatch } from "react-redux";
import { fetchAllApplications, fetchRecruiterApplications } from "../../redux/slices/applicationSlice";
function ManageJobApplications() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [roleFilter, setRoleFilter] = useState("All");
  const [search, setSearch] = useState("");
  const { role, recruiterId, canViewAll } = useRole();
 

const dispatch = useDispatch();

const applications = useSelector(
  (state) => state.applications.applications
);

  useEffect(() => {
    if (canViewAll) {
      dispatch(fetchAllApplications());
    } else {
      dispatch(fetchRecruiterApplications());
    }
  }, [dispatch, canViewAll]);


 const roleFiltered = useMemo(() => {
  return canViewAll
    ? applications
    : applications.filter((a) => a.recruiter_id == recruiterId);
}, [applications, canViewAll, recruiterId]);

const filteredApplications = useMemo(() => {
  return roleFiltered.filter((app) => {
    const matchStatus =
      statusFilter === "All" || app.status === statusFilter;

    const matchRole =
      roleFilter === "All" || app.position === roleFilter;
    const fullName = `${app.firstName} ${app.lastName}`;

    const matchSearch =
      fullName.toLowerCase().includes(search.toLowerCase()) ||
      (app.email && app.email.toLowerCase().includes(search.toLowerCase()));

    return matchStatus && matchRole && matchSearch;
  });
}, [roleFiltered, statusFilter, roleFilter, search]);
 
const pageSize = 10;
const { currentPage, paginatedData, setCurrentPage } = usePagination(
  filteredApplications,
  pageSize
);
  return (
    <section className="p-8 space-y-8 flex-1">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold">Job Applications</h1>
          <p className="text-sm text-gray-500">
            Manage and review incoming applications
          </p>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 border rounded-xl text-sm">
            Filters
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm">
            Export CSV
          </button>
        </div>
      </div>
      <JobApplicationFilters
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        roleFilter={roleFilter}
        setRoleFilter={setRoleFilter}
      />

      <JobApplicationTable
        applications={paginatedData}
        role={role}
      />

    <Pagination
        currentPage={currentPage}
        totalEntries={filteredApplications.length}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
      />
    </section>
  );
}

export default ManageJobApplications;