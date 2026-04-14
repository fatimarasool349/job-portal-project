import { Form } from "react-hook-form";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

function SearchBar({ job, setJob, location, setLocation, onSearch }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
      className="w-full max-w-2xl bg-white rounded-xl shadow-lg flex items-center overflow-hidden border border-gray-100"
    >
      {/* Job Input */}
      <div className="flex items-center flex-1 px-4">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Job title or keyword"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          className="w-full py-3 outline-none"
        />
      </div>

      {/* Divider */}
      <div className="h-6 w-px bg-gray-300"></div>

      {/* Location Input */}
      <div className="flex items-center flex-1 px-4">
        <FaMapMarkerAlt className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="City or remote"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full py-3 outline-none"
        />
      </div>

      {/* Button */}
      <button
        onClick={onSearch}
        className="bg-blue-600 text-white px-6 py-3 m-1 rounded-xl hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
