import { useState } from "react";
import JobFilters from "../../components/adminComponents/jobsComponents/JobFilters";
import JobTable from "../../components/adminComponents/jobsComponents/JobTable";
import Pagination from "../../components/adminComponents/Pagination";
import { initialJobs } from "../../constant/admindata";
import AddJobModal from "../../modal/AddJobModal";

function ManageJobs() {
  const [jobs, setJobs] = useState(initialJobs);
  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  // 🔥 Get role & recruiter_id from localStorage
  const role = localStorage.getItem("role") || "recruiter"; // default to recruiter if not set
  const recruiterId = localStorage.getItem("recruiter_id");

  // 🔥 Filter jobs based on role first
  const roleFilteredJobs =
    role === "admin"
      ? jobs // Super Admin sees all jobs
      : jobs.filter((job) => job.recruiter_id == recruiterId); // Recruiter sees only their jobs

  // 🔥 Apply search and type filters
  const filteredJobs = roleFilteredJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    const matchesType = jobType === "" || job.type.toLowerCase() === jobType;

    return matchesSearch && matchesType;
  });

  const handleDeleteJob = (id) => {
    const confirmDelete = window.confirm("Delete this job?");
    if (confirmDelete) {
      setJobs((prev) => prev.filter((job) => job.id !== id));
    }
  };
  const handleAddJob = () => {
    setEditingJob(null);
    setShowModal(true);
  };

  const handleEditJob = (job) => {
    setEditingJob(job);
    setShowModal(true);
  };

  return (
    <main className="p-8 flex-1">
      <JobFilters
        search={search}
        setSearch={setSearch}
        jobType={jobType}
        setJobType={setJobType}
        onAddJob={handleAddJob}
      />

      <JobTable
        jobs={filteredJobs}
        onDeleteJob={handleDeleteJob}
        onEditJob={handleEditJob}
      />

      <Pagination
        currentPage={1}
        totalEntries={filteredJobs.length}
        pageSize={10}
      />

      {showModal && (
        <AddJobModal
          onClose={() => setShowModal(false)}
          setData={setJobs}
          existingData={editingJob}
        />
      )}
    </main>
  );
}

export default ManageJobs;