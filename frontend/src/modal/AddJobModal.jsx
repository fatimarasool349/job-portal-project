import { useState, useEffect } from "react";
import { getAllCompanies } from "../api/companyApi";

function AddJobModal({ onClose, onSave, existingData }) {
  const [companies, setCompanies] = useState([]);

  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    jobType: "Full-time",
    status: "Active",
    description: "",
    salary: "",
    responsibilities: "", // ✅ add
    requirements: "",
    recruiterId: localStorage.getItem("recruiter_id") || null,
  });

  // Load companies from API
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const data = await getAllCompanies();
        setCompanies(data);
      } catch (error) {
        console.log("Error loading companies:", error);
      }
    };

    fetchCompanies();
  }, []);

  // Prefill when editing
  useEffect(() => {
    if (existingData) {
      setForm({
        title: existingData.title || "",
        company: existingData.company?._id || existingData.company || "",
        location: existingData.location || "",
        jobType: existingData.jobType || "Full-time",
        status: existingData.status || "Active",
        description: existingData.description || "",
        salary: existingData.salary || "",
        responsibilities: existingData.responsibilities?.join("\n") || "",
        requirements: existingData.requirements?.join("\n") || "",
        recruiterId:
          existingData.recruiterId ||
          localStorage.getItem("recruiter_id") ||
          null,
      });
    }
  }, [existingData]);

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      createdBy: form.recruiterId,
      salary: form.salary ? Number(form.salary) : null,
      responsibilities: form.responsibilities
        ? form.responsibilities.split("\n")
        : [],
      requirements: form.requirements ? form.requirements.split("\n") : [],
    };

    await onSave(payload, existingData?._id);
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

          {/* Company Dropdown */}
          <select
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select Company</option>

            {companies.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
          </select>

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
            type="number"
            placeholder="Salary"
            value={form.salary}
            onChange={(e) => setForm({ ...form, salary: e.target.value })}
            className="w-full border p-2 rounded"
          />

          {/* Description */}
          <textarea
            placeholder="Job Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full border p-2 rounded"
            rows="3"
            required
          />
          <textarea
            placeholder="Responsibilities (one per line)"
            value={form.responsibilities}
            onChange={(e) =>
              setForm({ ...form, responsibilities: e.target.value })
            }
            className="w-full border p-2 rounded"
            rows="3"
          />

          <textarea
            placeholder="Requirements (one per line)"
            value={form.requirements}
            onChange={(e) => setForm({ ...form, requirements: e.target.value })}
            className="w-full border p-2 rounded"
            rows="3"
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
