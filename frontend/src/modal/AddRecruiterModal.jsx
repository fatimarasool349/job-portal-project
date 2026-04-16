import { useState, useEffect } from "react";

function AddRecruiterModal({ onClose, setData, existingData }) {
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    status: "Active", 
  });

  useEffect(() => {
    if (existingData) {
      setForm({
        company: existingData.company,
        name: existingData.name,
        email: existingData.email,
        status: existingData.status || "Active", 
      });
    }
  }, [existingData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (existingData) {
      // Edit recruiter
      setData((prev) =>
        prev.map((rec) =>
          rec.id === existingData.id ? { ...rec, ...form } : rec
        )
      );
    } else {
      // Add recruiter
      const newRecruiter = {
        id: Date.now(),
        ...form, // ✅ includes status
      };
      setData((prev) => [...prev, newRecruiter]);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-[400px]">
        <h2 className="text-lg font-semibold mb-4">
          {existingData ? "Edit Recruiter" : "Add Recruiter"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Company Name"
            value={form.company}
            className="w-full border p-2 rounded"
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            required
          />

          <input
            type="text"
            placeholder="Recruiter Name"
            value={form.name}
            className="w-full border p-2 rounded"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            className="w-full border p-2 rounded"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          {/* ✅ NEW STATUS FIELD */}
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            className="w-full border p-2 rounded"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

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

export default AddRecruiterModal;