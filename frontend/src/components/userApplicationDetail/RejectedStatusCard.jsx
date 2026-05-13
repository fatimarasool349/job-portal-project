import { FaTimesCircle } from "react-icons/fa";
import { formatDate } from "../../utils/formatDate";

export default function RejectedStatusCard({ data }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">

      {/* Icon */}
      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
        <FaTimesCircle className="text-red-500 text-2xl" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-3">
        Application Status
      </h3>

      {/* Message */}
      <p className="text-gray-600 mb-6">
        Thank you for your interest in{" "}
        <span className="font-medium">
          {data.company?.name}
        </span>
        . Although we won't be moving forward at this
        time, we encourage you to apply for future roles.
      </p>

      {/* Timeline */}
      <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">

        <h4 className="font-semibold mb-4">
          Application Timeline
        </h4>

        <div className="space-y-3 text-sm">

          <div className="flex justify-between">
            <span className="text-gray-500">
              Applied
            </span>

            <span>
              {formatDate(data.appliedDate)}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">
              Review Started
            </span>

            <span>
              {formatDate(data.updatedAt)}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">
              Closed
            </span>

            <span>
              {formatDate(data.updatedAt)}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}