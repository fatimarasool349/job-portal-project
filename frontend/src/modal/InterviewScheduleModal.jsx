import { useState } from "react";
import { IoClose } from "react-icons/io5";

function InterviewScheduleModal({ isOpen, onClose, onSave }) {
  const [form, setForm] = useState({
    date: "",
    time: "",
    mode: "Online",
    meetingLink: "",
    notes: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!form.date || !form.time) {
      alert("Please select date and time");
      return;
    }

    onSave(form);

    // reset form after save
    setForm({
      date: "",
      time: "",
      mode: "Online",
      meetingLink: "",
      notes: "",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl overflow-hidden">

        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-bold">
            Schedule Interview
          </h2>

          <button onClick={onClose}>
            <IoClose size={22} />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 space-y-4">

          {/* DATE */}
          <div>
            <label className="text-sm font-medium">
              Interview Date
            </label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>

          {/* TIME */}
          <div>
            <label className="text-sm font-medium">
              Interview Time
            </label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>

          {/* MODE */}
          <div>
            <label className="text-sm font-medium">
              Interview Mode
            </label>
            <select
              name="mode"
              value={form.mode}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            >
              <option value="Online">Online</option>
              <option value="Onsite">Onsite</option>
            </select>
          </div>

          {/* LINK */}
          <div>
            <label className="text-sm font-medium">
              Meeting Link
            </label>
            <input
              type="text"
              name="meetingLink"
              value={form.meetingLink}
              onChange={handleChange}
              placeholder="https://meet.google.com/..."
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>

          {/* NOTES */}
          <div>
            <label className="text-sm font-medium">
              Notes
            </label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={3}
              className="w-full border rounded-lg px-3 py-2 mt-1"
              placeholder="Add instructions..."
            />
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default InterviewScheduleModal;