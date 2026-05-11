import { useState, useEffect } from "react";
import axios from "axios";
import API from "../api/axiosConfig";
import { updateRecruiter } from "../api/recruiterApi";

function AddRecruiterModal({ onClose, setData, existingData }) {
  const [companies, setCompanies] = useState([]);
  const token = localStorage.getItem("token");
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    companyId: "",
    fullName: "",
    email: "",
    status: "Active",
  });

  // Load companies from DB
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await API.get("/company", {
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        });
        setCompanies(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCompanies();
  }, [token]);

  // Fill form when editing
  useEffect(() => {
    if (existingData) {
      setForm({
        companyId: existingData.companyId?._id || "",
        fullName: existingData.fullName,
        email: existingData.email,
        status: existingData.status || "Active",
      });
    }
  }, [existingData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateRecruiter(existingData._id, {
        companyId: form.companyId,
        status: form.status,
      });

      await setData(); // refetch from backend
      onClose();
    } catch (error) {
      const res = error.response;

      const field = res?.data?.field;
      const message = res?.data?.message;

      // ✅ field-level error (BEST CASE)
      if (field) {
        setErrors((prev) => ({
          ...prev,
          [field]: message,
        }));
        return;
      }

      // fallback error
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-[420px]">
        <h2 className="text-lg font-semibold mb-4">Edit Recruiter</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Company (assign only) */}
          <select
            value={form.companyId}
            onChange={(e) => {
              setForm({ ...form, companyId: e.target.value });

              setErrors((prev) => ({
                ...prev,
                companyId: "",
              }));
            }}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Company</option>

            {companies.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
          </select>
          {errors.companyId && (
            <p className="text-red-500 text-sm mt-1">{errors.companyId}</p>
          )}

          {/* Name (read-only) */}
          <input
            value={form.fullName}
            disabled
            className="w-full border p-2 rounded bg-gray-100"
          />

          {/* Email (read-only) */}
          <input
            value={form.email}
            disabled
            className="w-full border p-2 rounded bg-gray-100"
          />

          {/* Status */}
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            className="w-full border p-2 rounded"
          >
            <option value="Active">Active</option>
            <option value="pending">Pending</option>
            <option value="blocked">Blocked</option>
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

export default AddRecruiterModal;
