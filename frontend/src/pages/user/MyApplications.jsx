import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import { getMyApplicationsApi } from "../../api/applicationApi";
import { PUBLIC_ROUTES } from "../../constants/routes";

import Pagination from "../../components/common/Pagination";

import ApplicationHeader from "../../components/myApplication/ApplicationHeader";
import ApplicationFilters from "../../components/myApplication/ApplicationFilters";
import ApplicationCard from "../../components/myApplication/ApplicationCard";
import EmptyApplication from "../../components/myApplication/EmptyApplication";

export default function MyApplications() {
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const itemsPerPage = 5;

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await getMyApplicationsApi();

        setApplications(res.data);
      } catch (err) {
        if (err.response?.status === 401) {
          Swal.fire({
            icon: "warning",
            title: "Login Required",
            text: "Please login first.",
          }).then(() => {
            navigate(PUBLIC_ROUTES.LOGIN);
          });
        }
      }
    };

    fetchApplications();
  }, [navigate]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, status]);

  const filteredData = applications.filter((app) => {
    const matchSearch = (app.job?.title || "")
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchStatus =
      status === "All" || app.status === status;

    return matchSearch && matchStatus;
  });

  const totalPages = Math.ceil(
    filteredData.length / itemsPerPage
  );

  const startIndex =
    (currentPage - 1) * itemsPerPage;

  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 min-h-screen">

      <ApplicationHeader />

      <ApplicationFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      <div className="space-y-4">
        {filteredData.length === 0 ? (
          <EmptyApplication />
        ) : (
          paginatedData.map((app) => (
            <ApplicationCard
              key={app._id}
              app={app}
            />
          ))
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
}