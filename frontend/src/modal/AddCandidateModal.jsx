import { useState, useEffect } from "react";
import { addCandidate, updateCandidate } from "../api/candidateApi";
import { updateJobseeker, createJobseeker } from "../api/userApi";


function AddCandidateModal({ onClose, setData, existingData }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    profileImage: "",
  });

  useEffect(() => {
    if (existingData) {
      setForm({
        fullName: existingData.fullName,
        email: existingData.email,
        phone: existingData.phone || "",
        profileImage: existingData.profileImage || "",
      });
    }
  }, [existingData]);

  // Convert uploaded file to base64 for preview & storage
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, profileImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };
  const fullPhone = `+92${form.phone}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...form,
        phone: `+92${form.phone}`,
      };

      if (existingData) {
        await updateJobseeker(existingData._id, payload);
      } else {
        await createJobseeker(payload);
      }


      // 🔥 refresh parent data
      setData(); // we will fix this next
      onClose();
    } catch (error) {
      console.error("Error saving candidate:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-[400px]">
        <h2 className="text-lg font-semibold mb-4">
          {existingData ? "Edit Candidate" : "Add Candidate"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Candidate Name"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />
          <div className="flex">
            <span className="px-3 flex items-center bg-gray-100 border border-r-0 rounded-l">
              +92
            </span>
            <input
              type="tel"
              placeholder="3XXXXXXXXX"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border p-2 rounded-r"
              required
            />
          </div>
          {/* <input
            type="text"
            placeholder="Position"
            value={form.position}
            onChange={(e) => setForm({ ...form, position: e.target.value })}
            className="w-full border p-2 rounded"
            required
          /> */}

          {/* Image upload */}
          <div>
            <label className="block text-sm font-medium mb-1">Avatar</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full"
            />
            {form.profileImage && (
              <img
                src={form.profileImage}
                alt="preview"
                className="mt-2 w-20 h-20 object-cover rounded-full"
              />
            )}
          </div>

          {/* <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            className="w-full border p-2 rounded"
          >
            <option value="Pending">Pending</option>
            <option value="Shortlist">Shortlist</option>
            <option value="Rejected">Rejected</option>
          </select> */}

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

export default AddCandidateModal;
