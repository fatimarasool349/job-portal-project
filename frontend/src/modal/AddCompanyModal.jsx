import { useEffect, useState } from "react";
import { IoIosAddCircle, IoIosRemoveCircle  } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";



function AddCompanyModal({ onClose, onSave, existingData }) {
  const [form, setForm] = useState({
    name: "",
    industry: "",
    location: "",
    website: "",
    logo: "",

    about1: "",
    about2: "",
    size: "",
    businessHours: "",

    stats: [{ label: "", value: "" }],
    culture: [{ title: "", description: "" }],
    photos: [],
  });
  // Fill form when editing
  useEffect(() => {
    if (existingData) {
      setForm({
        name: existingData.name || "",
        industry: existingData.industry || "",
        location: existingData.location || "",
        website: existingData.website || "",
        logo: existingData.logo || "",

        about1: existingData.about1 || "",
        about2: existingData.about2 || "",
        size: existingData.size || "",
        businessHours: existingData.businessHours || "",

        stats: existingData.stats || [],
        culture: existingData.culture || [],
        photos: existingData.photos || [],
      });
    }
  }, [existingData]);

  // Image upload (base64 for now)
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({
          ...prev,
          logo: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      stats: form.stats.filter((s) => s.label.trim() && s.value.trim()),
      culture: form.culture.filter(
        (c) => c.title.trim() && c.description.trim(),
      ),
    };

    onSave(payload, existingData?._id);
    onClose();
  };
  const addStat = () => {
    setForm((prev) => ({
      ...prev,
      stats: [...prev.stats, { label: "", value: "" }],
    }));
  };

  const removeStat = (index) => {
    setForm((prev) => ({
      ...prev,
      stats: prev.stats.filter((_, i) => i !== index),
    }));
  };

  const handleStatChange = (index, field, value) => {
    const updated = [...form.stats];
    updated[index][field] = value;

    setForm((prev) => ({
      ...prev,
      stats: updated,
    }));
  };
  const handlePhotosUpload = (e) => {
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        setForm((prev) => ({
          ...prev,
          photos: [...prev.photos, reader.result],
        }));
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[420px] max-h-[90vh] overflow-y-auto rounded-xl p-6 shadow-xl scrollbar-thin">
        {/* Title */}
        <h2 className="text-xl font-bold mb-4">
          {existingData ? "Edit Company" : "Add Company"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Company Name */}
          <input
            type="text"
            placeholder="Company Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />

          {/* Industry */}
          <input
            type="text"
            placeholder="Industry"
            value={form.industry}
            onChange={(e) => setForm({ ...form, industry: e.target.value })}
            className="w-full border p-2 rounded"
          />

          {/* Location */}
          <input
            type="text"
            placeholder="Location"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className="w-full border p-2 rounded"
          />
          <textarea
            placeholder="About Company 1"
            value={form.about1}
            onChange={(e) => setForm({ ...form, about1: e.target.value })}
            className="w-full border p-2 rounded"
          />
          <textarea
            placeholder="About Company 2"
            value={form.about2}
            onChange={(e) => setForm({ ...form, about2: e.target.value })}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Company Size"
            value={form.size}
            onChange={(e) => setForm({ ...form, size: e.target.value })}
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Business Hours"
            value={form.businessHours}
            onChange={(e) =>
              setForm({ ...form, businessHours: e.target.value })
            }
            className="w-full border p-2 rounded"
          />
          {/* Website */}
          <input
            type="text"
            placeholder="Website URL"
            value={form.website}
            onChange={(e) => setForm({ ...form, website: e.target.value })}
            className="w-full border p-2 rounded"
          />
          <div className="border p-3 rounded space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="font-bold">Company Stats</h3>

              <button
                type="button"
                onClick={addStat}
                className="text-blue-600 text-2xl"
              >
                <IoIosAddCircle />
              </button>
            </div>

            {form.stats.map((stat, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Label (e.g Employees)"
                  value={stat.label}
                  onChange={(e) =>
                    handleStatChange(index, "label", e.target.value)
                  }
                  className="w-1/2 border p-2 rounded"
                />

                <input
                  type="text"
                  placeholder="Value (e.g 200+)"
                  value={stat.value}
                  onChange={(e) =>
                    handleStatChange(index, "value", e.target.value)
                  }
                  className="w-1/2 border p-2 rounded"
                />

                <button
                  type="button"
                  onClick={() => removeStat(index)}
                  className="text-red-500 text-2xl "
                >
                  <IoIosRemoveCircle/>
                </button>
              </div>
            ))}
          </div>

          <div className="border p-3 rounded space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="font-bold">Company Culture</h3>

              <button
                type="button"
                onClick={() =>
                  setForm((prev) => ({
                    ...prev,
                    culture: [...prev.culture, { title: "", description: "" }],
                  }))
                }
                className="text-blue-600 text-2xl"
              >
                <IoIosAddCircle/>
              </button>
            </div>

            {form.culture.map((item, index) => (
              <div key={index} className="space-y-2 border p-2 rounded">
                {/* Title */}
                <input
                  type="text"
                  placeholder="Culture Title (e.g Team Work)"
                  value={item.title}
                  onChange={(e) => {
                    const updated = [...form.culture];
                    updated[index].title = e.target.value;

                    setForm((prev) => ({
                      ...prev,
                      culture: updated,
                    }));
                  }}
                  className="w-full border p-2 rounded"
                />

                {/* Description */}
                <textarea
                  placeholder="Description (e.g We work together as a team...)"
                  value={item.description}
                  onChange={(e) => {
                    const updated = [...form.culture];
                    updated[index].description = e.target.value;

                    setForm((prev) => ({
                      ...prev,
                      culture: updated,
                    }));
                  }}
                  className="w-full border p-2 rounded"
                />

                {/* Remove */}
                <button
                  type="button"
                  onClick={() =>
                    setForm((prev) => ({
                      ...prev,
                      culture: prev.culture.filter((_, i) => i !== index),
                    }))
                  }
                  className="text-red-500 text-xl"
                >
                  <FaTrashAlt/>
                </button>
              </div>
            ))}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Company Photos
            </label>

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handlePhotosUpload}
              className="w-full"
            />

            <div className="flex gap-2 mt-2 flex-wrap">
              {form.photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt="company"
                  className="w-16 h-16 object-cover rounded"
                />
              ))}
            </div>
          </div>

          {/* Logo Upload */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Company Logo
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="w-full"
            />

            {form.logo && (
              <img
                src={form.logo}
                alt="logo preview"
                className="mt-2 w-16 h-16 object-cover rounded"
              />
            )}
          </div>

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
              {existingData ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCompanyModal;
