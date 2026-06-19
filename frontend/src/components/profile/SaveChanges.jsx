import { FaRegSave } from "react-icons/fa";

const handleSaveAll = () => {
  alert("All changes saved successfully!");
  // Here you can call your API to save all changes
};

function SaveChanges() {
  return (
    <div>
      <div className="flex items-center justify-center p-8 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-800">
        <button
          onClick={handleSaveAll}
          className="flex items-center justify-center gap-2 px-12 py-4 bg-blue-600 text-white text-lg font-bold rounded-xl hover:bg-blue-600/90 transition-all shadow-xl shadow-blue-600/30 active:scale-95"
        >
          <FaRegSave className="h-6 w-6"/>
          Save All Changes
        </button>
      </div>
    </div>
  );
}

export default SaveChanges;
