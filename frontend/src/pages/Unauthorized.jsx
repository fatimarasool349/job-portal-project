import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PUBLIC_ROUTES } from "../constants/routes";

function Unauthorized() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="text-center px-6">
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600">
          403
        </h1>
        <p className="text-2xl font-semibold text-white mt-4">
          Access Denied
        </p>
        <p className="text-gray-400 mt-2 mb-8">
          You don't have permission to access this resource.
          {user && ` (Role: ${user.role})`}
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleGoBack}
            className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors duration-300"
          >
            Go Back
          </button>
          <Link
            to={PUBLIC_ROUTES.HOME}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Unauthorized;
