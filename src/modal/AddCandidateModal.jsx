import { useState, useEffect } from "react";

function AddCandidateModal({ onClose, setData, existingData }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    status: "Active",
    avatar: "", // this will store base64 string of uploaded image
  });

  useEffect(() => {
    if (existingData) {
      setForm({
        name: existingData.name,
        email: existingData.email,
        phone: existingData.phone || "",
        position: existingData.position,
        status: existingData.status || "Active",
        avatar: existingData.avatar || "",
      });
    }
  }, [existingData]);

  // Convert uploaded file to base64 for preview & storage
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };
const fullPhone = `+92${form.phone}`;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (existingData) {
      setData((prev) =>
        prev.map((cand) =>
          cand.id === existingData.id ? { ...cand, ...form } : cand,
        ),
      );
    } else {
      const newCandidate = {
        id: Date.now(),
        ...form,
        phone: fullPhone,
      };
      setData((prev) => [...prev, newCandidate]);
    }

    onClose();
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
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
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
          <input
            type="text"
            placeholder="Position"
            value={form.position}
            onChange={(e) => setForm({ ...form, position: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />

          {/* Image upload */}
          <div>
            <label className="block text-sm font-medium mb-1">Avatar</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full"
            />
            {form.avatar && (
              <img
                src={form.avatar}
                alt="preview"
                className="mt-2 w-20 h-20 object-cover rounded-full"
              />
            )}
          </div>

          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            className="w-full border p-2 rounded"
          >
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
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

export default AddCandidateModal;
