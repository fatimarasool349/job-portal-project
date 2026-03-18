function SearchBar({ job, setJob, location, setLocation, onSearch }) {
  return (
    <div className="flex gap-2 mb-2">
      <input
        type="text"
        placeholder="Job title"
        className="flex-1 p-3 border rounded-l-lg"
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        className="flex-1 p-3 border"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-6 rounded-r-lg"
        onClick={onSearch}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;