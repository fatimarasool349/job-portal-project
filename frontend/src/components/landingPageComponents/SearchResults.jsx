import { useNavigate } from "react-router-dom";

function SearchResults({ results }) {
  const navigate = useNavigate();

  if (results.length === 0) return null;

  return (
    <div className="mt-6">
      {results.map((item) => (
        <div
          key={item.id}
          className="p-4 border rounded mb-2 hover:bg-gray-50 cursor-pointer"
          onClick={() => {
            if (item.type === "job") {
              navigate(`/viewdetailpage/${item.id}`);
            }
          }}
        >
          {item.type === "job" ? (
            <div>
              {item.title} at {item.company?.name || "Unknown Company"} —{" "}
              {item.location}
            </div>
          ) : (
            <div>
              {item.name} — {item.location}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SearchResults;