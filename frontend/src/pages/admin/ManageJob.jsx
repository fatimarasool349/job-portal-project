import { useState, useMemo, useCallback, useEffect } from "react";
import JobFilters from "../../components/adminComponents/jobsComponents/JobFilters";
import JobTable from "../../components/adminComponents/jobsComponents/JobTable";
import Pagination from "../../components/adminComponents/common/Pagination";
import { initialJobs } from "../../constant/index.js";
import AddJobModal from "../../modal/AddJobModal";
import { useRole } from "../../hooks/useRole";
import { usePagination } from "../../hooks/usePagination";
import { createJob } from "../../api/jobApi";

function ManageJobs() {
  const [jobs, setJobs] = useState(initialJobs);
  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const { role, recruiterId, canAdd, canDelete, canEdit, canViewAll } =
    useRole();

  const handleCreateJob = async (jobData) => {
    try {
      const res = await createJob(jobData);

      setJobs((prev) => [res.job, ...prev]);
    } catch (error) {
      console.log(error);
    }
  };

  const roleFilteredJobs = useMemo(() => {
    return canViewAll
      ? jobs
      : jobs.filter(
          (job) => (job.recruiterId || job.recruiter_id) == recruiterId,
        );
  }, [jobs, canViewAll, recruiterId]);

  const filteredJobs = useMemo(() => {
    return roleFilteredJobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        (job.company?.name || job.company || "")
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesType =
        jobType === "" || job.jobType?.toLowerCase() === jobType.toLowerCase();
      return matchesSearch && matchesType;
    });
  }, [roleFilteredJobs, search, jobType]);
  const pageSize = 10;
  const { currentPage, paginatedData, setCurrentPage } = usePagination(
    filteredJobs,
    pageSize,
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [jobs, search, jobType]);

  const handleDeleteJob = useCallback(
    (id) => {
      if (!canDelete) return; //

      const confirmDelete = window.confirm("Delete this job?");
      if (confirmDelete) {
        setJobs((prev) =>
          prev.filter((job) => job.id !== id && job._id !== id),
        );
      }
    },
    [canDelete],
  );
  const handleAddJob = useCallback(() => {
    setEditingJob(null);
    setShowModal(true);
  }, [canAdd]);

  const handleEditJob = useCallback(
    (job) => {
      setEditingJob(job);
      setShowModal(true);
    },
    [canEdit],
  );

  return (
    <main className="p-8 flex-1">
      <JobFilters
        search={search}
        setSearch={setSearch}
        jobType={jobType}
        setJobType={setJobType}
        onAddJob={canAdd ? handleAddJob : null}
      />

      <JobTable
        jobs={paginatedData}
        onDeleteJob={canDelete ? handleDeleteJob : null}
        onEditJob={canEdit ? handleEditJob : null}
      />

      <Pagination
        currentPage={currentPage}
        totalEntries={filteredJobs.length}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
      />

      {showModal && canAdd && (
        <AddJobModal
          onClose={() => setShowModal(false)}
          onSave={handleCreateJob}
          existingData={editingJob}
        />
      )}
    </main>
  );
}

export default ManageJobs;
