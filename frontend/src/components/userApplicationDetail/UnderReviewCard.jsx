import { MdOutlineUpdate } from "react-icons/md";
import { formatDate } from "../../utils/formatDate";

export default function UnderReviewCard({ data }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-yellow-500 border border-gray-200">

      <div className="flex items-center gap-2 mb-4">
        <MdOutlineUpdate className="text-yellow-500 text-2xl" />

        <h3 className="text-xl font-semibold">
          Under Review
        </h3>
      </div>

      <p className="text-gray-600 leading-relaxed">
        Your application is currently under review by
        our recruitment team. We appreciate your patience.
      </p>

      <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">
            Applied On
          </span>

          <span className="font-semibold">
            {formatDate(data.appliedDate)}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">
            Last Updated
          </span>

          <span className="font-semibold">
            {formatDate(data.updatedAt)}
          </span>
        </div>

      </div>
    </div>
  );
}