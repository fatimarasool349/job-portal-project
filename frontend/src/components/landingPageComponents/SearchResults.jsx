import { useNavigate } from "react-router-dom";
import { USER_ROUTES } from "../../constants/routes";
import { useParams } from "react-router-dom";

function SearchResults({ results }) {
  const navigate = useNavigate();
  const { slug } = useParams();

  if (results.length === 0) return null;

  return (
    <div className="mt-6">
      {results.map((item) => (
        <div
          key={item.id}
          className="p-4 border text-lg  border-gray-300 rounded mb-2 hover:bg-gray-50  hover:border-blue-500 cursor-pointer"
          onClick={() => {
            if (item.type === "job") {
              navigate(USER_ROUTES.JOB_DETAIL.replace(":slug", item.slug));
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