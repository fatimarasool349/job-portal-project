import { useState, useEffect } from "react";

function AddJobModal({ onClose, onSave, existingData }) {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    jobType: "Full-time",
    status: "Active",
    description: "",
    salary: "",
    recruiterId: localStorage.getItem("recruiter_id") || null,
  });

  // Prefill when editing
  useEffect(() => {
    if (existingData) {
      setForm({
        title: existingData.title || "",
        company: existingData.company || "",
        location: existingData.location || "",
        jobType: existingData.jobType || "Full-time",
        status: existingData.status || "Active",
        description: existingData.description || "",
        salary: existingData.salary || "",
        recruiterId:
          existingData.recruiterId ||
          localStorage.getItem("recruiter_id") ||
          null,
      });
    }
  }, [existingData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const recruiterId = localStorage.getItem("recruiter_id");

    if (existingData) {
      // UPDATE job
      onSave((prev) =>
        prev.map((job) =>
          job.id === existingData.id
            ? {
                ...job,
                ...form,
                recruiterId,
              }
            : job
        )
      );
    } else {
      // ADD job
      const newJob = {
        id: Date.now(),
        ...form,
        recruiterId,
        createdAt: new Date().toISOString(),
      };

      onSave((prev) => [...prev, newJob]);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-[400px]">
        <h2 className="text-lg font-semibold mb-4">
          {existingData ? "Edit Job" : "Add Job"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          {/* Job Title */}
          <input
            type="text"
            placeholder="Job Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />

          {/* Company */}
          <input
            type="text"
            placeholder="Company Name"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />

          {/* Location */}
          <input
            type="text"
            placeholder="Location"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />

          {/* Job Type */}
          <select
            value={form.jobType}
            onChange={(e) => setForm({ ...form, jobType: e.target.value })}
            className="w-full border p-2 rounded"
          >
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Remote">Remote</option>
            <option value="Contract">Contract</option>
          </select>

          {/* Salary */}
          <input
            type="text"
            placeholder="Salary (e.g. 50000 - 80000)"
            value={form.salary}
            onChange={(e) => setForm({ ...form, salary: e.target.value })}
            className="w-full border p-2 rounded"
          />

          {/* Description */}
          <textarea
            placeholder="Job Description"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            className="w-full border p-2 rounded"
            rows="3"
            required
          />

          {/* Status */}
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            className="w-full border p-2 rounded"
          >
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Closed">Closed</option>
            <option value="Draft">Draft</option>
          </select>

          {/* Buttons */}
          <div className="flex justify-end gap-2 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Save
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddJobModal;