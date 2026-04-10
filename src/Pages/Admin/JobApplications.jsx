import { useState } from "react";
import JobApplicationTable from "../../components/adminComponents/allApplications/JobApplicationTable";
import JobApplicationFilters from "../../components/adminComponents/allApplications/JobApplicationFilters";
import Pagination from "../../components/adminComponents/Pagination";
import { initialApplications } from "../../constant/admindata";

function ManageJobApplications() {
  const [applications, setApplications] = useState(initialApplications);
  const [statusFilter, setStatusFilter] = useState("All");
  const [roleFilter, setRoleFilter] = useState("All");
  const [search, setSearch] = useState("");

  const role = localStorage.getItem("role") || "recruiter";
  const recruiterId = localStorage.getItem("recruiter_id");

  // 🔥 Role-based filtering
  const roleFiltered =
    role === "admin"
      ? applications
      : applications.filter((a) => a.recruiter_id == recruiterId);

  const filteredApplications = roleFiltered.filter((app) => {
    const matchStatus =
      statusFilter === "All" || app.status === statusFilter;

    const matchRole =
      roleFilter === "All" || app.position === roleFilter;

    const matchSearch =
      app.name.toLowerCase().includes(search.toLowerCase()) ||
      app.email.toLowerCase().includes(search.toLowerCase());

    return matchStatus && matchRole && matchSearch;
  });

//   // 📊 Stats
//   const stats = {
//     total: applications.length,
//     reviewed: applications.filter((a) => a.status === "Approved").length,
//     pending: applications.filter((a) => a.status === "Pending").length,
//     rejected: applications.filter((a) => a.status === "Rejected").length,
//   };

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

      {/* Stats */}
      {/* <div className="grid md:grid-cols-4 gap-6">
        <StatCard title="Total Applications" value={stats.total} />
        <StatCard title="Reviewed" value={stats.reviewed} />
        <StatCard title="Pending" value={stats.pending} />
        <StatCard title="Rejected" value={stats.rejected} />
      </div> */}

      {/* Filters */}
      <JobApplicationFilters
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        roleFilter={roleFilter}
        setRoleFilter={setRoleFilter}
      />

      {/* Table */}
      <JobApplicationTable
        applications={filteredApplications}
        setApplications={setApplications}
        role={role}
      />

      {/* Pagination */}
      <Pagination
        currentPage={1}
        totalEntries={filteredApplications.length}
        pageSize={10}
      />
    </section>
  );
}

export default ManageJobApplications;