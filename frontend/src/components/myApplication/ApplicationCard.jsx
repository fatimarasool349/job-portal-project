import { USER_ROUTES } from "../../constants/routes";
import { getImageUrl } from "../../utils/getImageUrl";
import ApplicationStatusBadge from "./ApplicationStatusBadge";
import { useNavigate } from "react-router-dom";


export default function ApplicationCard({ app }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate({ pathname: USER_ROUTES.APPLICATION_DETAIL.replace(':publicId', app.publicId) });
  };
  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 p-6 border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition">

      <div className="flex gap-4 items-start">

        <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg">
          <img
            src={getImageUrl(app.company?.logo)}
            alt="Company Logo"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold">
            {app.job?.title}
          </h2>

          <p className="text-sm text-gray-500 flex gap-3 flex-wrap">
            <span>{app.company?.name}</span>

            <span>{app.job?.location}</span>

            <span>
              {new Date(app.appliedDate).toLocaleDateString()}
            </span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ApplicationStatusBadge
          status={app.status}
        />

        <button  className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg" onClick={handleViewDetails}>
          View Details
        </button>
      </div>
    </div>
  );
}