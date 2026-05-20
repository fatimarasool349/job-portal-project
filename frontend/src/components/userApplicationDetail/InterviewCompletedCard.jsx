import { FaClipboardCheck } from "react-icons/fa";
import { formatDate } from "../../utils/formatDate";

export default function InterviewCompletedCard({ data }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-purple-500 border border-gray-200">

      <div className="flex items-center gap-3 mb-4">
        <FaClipboardCheck className="text-purple-500 text-2xl" />

        <h3 className="text-xl font-semibold">
          Interview Completed
        </h3>
      </div>

      <p className="text-gray-600 leading-relaxed">
        Thank you for attending the interview.
        Our hiring team is currently evaluating
        your performance and will update you soon.
      </p>

      <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">
            Interview Date
          </span>

          <span className="font-semibold">
            {formatDate(data.interview?.date)}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">
            Status Updated
          </span>

          <span className="font-semibold">
            {formatDate(data.updatedAt)}
          </span>
        </div>

      </div>
    </div>
  );
}