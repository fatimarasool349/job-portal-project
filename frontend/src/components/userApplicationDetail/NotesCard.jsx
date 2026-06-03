export default function NotesCard({ notes }) {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
      <div className="flex justify-between mb-3">
        <h2 className="text-xl font-semibold">My Notes</h2>

        <button className="text-blue-600 hover:underline">
          Edit
        </button>
      </div>

      <p className="text-gray-500 italic">
        {notes || "No notes added yet."}
      </p>
    </section>
  );
}