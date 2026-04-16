import { useState } from "react"; 

function Notes() {
  const [note, setNote] = useState("");
  const [savedNote, setSavedNote] = useState("");


  const handleSave = () => {
    setSavedNote(note);
    alert("Note saved!"); 
  };
  

  return (
    <section className="bg-white rounded-xl p-6 border">
      <h3 className="text-xs font-bold uppercase mb-4">Recruiter Notes</h3>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="w-full min-h-[150px] p-4 border rounded-lg"
        placeholder="Add notes..."
      />

      <div className="mt-4 flex justify-end gap-2">
        <button
          className="text-blue-500 font-bold"
          onClick={handleSave}
        >
          Save
        </button>

        {savedNote && (
          <span className="text-green-600 font-medium">Saved!</span>
        )}
      </div>
    </section>
  );
}

export default Notes;