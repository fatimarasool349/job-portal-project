import { useState, useMemo, useCallback, useEffect } from "react";
import JobFilters from "../../components/adminComponents/jobsComponents/JobFilters";
import JobTable from "../../components/adminComponents/jobsComponents/JobTable";
import Pagination from "../../components/adminComponents/common/Pagination";
import AddJobModal from "../../modal/AddJobModal";
import { useRole } from "../../hooks/useRole";
import { usePagination } from "../../hooks/usePagination";
import {
  createJob,
  getAllJobs,
  deleteJob,
  updateJob,
} from "../../api/jobApi";

function ManageJobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  const { recruiterId, canAdd, canDelete, canEdit, canViewAll } =
    useRole();

  const fetchJobs = async () => {
    try {
      const data = await getAllJobs();
      setJobs(data || []);
    } catch (error) {
      console.log("FETCH ERROR:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleCreateJob = async (jobData, jobId) => {
    try {
      if (!jobData.title || !jobData.description) {
        alert("Title and Description are required");
        return;
      }

      const payload = {
        ...jobData,
        salary: jobData.salary ? Number(jobData.salary) : 0,
        status: jobData.status,   

      };

      if (jobId) {
        await updateJob(jobId, payload); 
      } else {
        await createJob(payload); 
      }

      await fetchJobs();
    } catch (error) {
      console.log("SAVE ERROR:", error);
    }
  };

  const handleDeleteJob = useCallback(
    async (id) => {
      if (!canDelete) return;

      const confirmDelete = window.confirm("Delete this job?");
      if (!confirmDelete) return;

      try {
        await deleteJob(id);
        await fetchJobs(); // refresh
      } catch (error) {
        console.log("DELETE ERROR:", error);
      }
    },
    [canDelete]
  );

  const handleAddJob = () => {
    setEditingJob(null);
    setShowModal(true);
  };

  const handleEditJob = (job) => {
    setEditingJob(job);
    setShowModal(true);
  };

  const roleFilteredJobs = useMemo(() => {
    if (canViewAll) return jobs;
    return jobs.filter(
      (job) => job.createdBy?._id === recruiterId
    );
  }, [jobs, recruiterId, canViewAll]);

  const filteredJobs = useMemo(() => {
    return roleFilteredJobs.filter((job) => {
      const matchesSearch =
        job.title?.toLowerCase().includes(search.toLowerCase()) ||
        (job.company?.name || "")
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesType =
        jobType === "" ||
        job.jobType?.toLowerCase() === jobType.toLowerCase();

      return matchesSearch && matchesType;
    });
  }, [roleFilteredJobs, search, jobType]);

  const pageSize = 10;
  const { currentPage, paginatedData, setCurrentPage } =
    usePagination(filteredJobs, pageSize);

  useEffect(() => {
    setCurrentPage(1);
  }, [jobs, search, jobType]);

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

      {showModal && (
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