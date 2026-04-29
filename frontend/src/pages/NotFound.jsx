import { Link } from "react-router-dom";
import { PUBLIC_ROUTES } from "../constants/routes";

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="text-center px-6">
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          404
        </h1>
        <p className="text-2xl font-semibold text-white mt-4">
          Page Not Found
        </p>
        <p className="text-gray-400 mt-2 mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          to={PUBLIC_ROUTES.HOME}
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
