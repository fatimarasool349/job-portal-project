import { useRef, useEffect } from "react";
function SkillModel({ show, onClose, onAdd, newSkill, setNewSkill }) {
  const inputRef = useRef(null);
  useEffect(() => {
    if (show && inputRef.current) {
      inputRef.current.focus();
    }
  }, [show]);

  if (!show) {return null;}
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg w-80">
        <h3 className="text-lg font-bold mb-4">Add New Skill</h3>
        <input
          ref={inputRef}
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Enter skill name"
          className="w-full p-2 mb-4 border rounded-lg dark:bg-slate-800 dark:text-white"
          onKeyDown={(e) => {
            if (e.key === "Enter") {onAdd();}
          }}
        />
        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-slate-700"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-primary-hover transition-colors"
            onClick={onAdd}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default SkillModel;
