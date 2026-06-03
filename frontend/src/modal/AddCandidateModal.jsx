import { useState, useEffect } from "react";
import { updateJobseeker } from "../api/userApi";

function AddCandidateModal({ onClose, existingData, setData }) {
  const [status, setStatus] = useState("active");

  useEffect(() => {
    if (existingData) {
      setStatus(existingData.status || "active");
    }
  }, [existingData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateJobseeker(existingData._id, {
        status,
      });

      setData(); // refresh list
      onClose();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  if (!existingData) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-[350px]">

        {/* Header */}
        <h2 className="text-lg font-semibold mb-4">
          Update User Status
        </h2>

        {/* User Info (READ ONLY) */}
        <div className="text-sm mb-4 space-y-1">
          <p><b>Name:</b> {existingData.fullName}</p>
          <p><b>Email:</b> {existingData.email}</p>
          <p><b>Role:</b> {existingData.role}</p>
        </div>

        {/* Status Only */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="active">Active</option>
            <option value="blocked">Blocked</option>
           
          </select>

          {/* Buttons */}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 bg-gray-200 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-3 py-2 bg-blue-600 text-white rounded"
            >
              Update
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddCandidateModal;