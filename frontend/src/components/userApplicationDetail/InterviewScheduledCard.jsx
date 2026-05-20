import { BsCameraVideoFill } from "react-icons/bs";
import { formatDate } from "../../utils/formatDate";

export default function InterviewScheduledCard({ data }) {
  const interview = data?.interview;

  const openMeeting = () => {
    if (interview?.meetingLink) {
      window.open(interview.meetingLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-blue-500 border border-gray-200">

      <div className="flex items-center gap-3 mb-4">
        <BsCameraVideoFill className="text-blue-500 text-2xl" />
        <h3 className="text-xl font-semibold">Interview Scheduled</h3>
      </div>

      <p className="text-gray-600 leading-relaxed">
        Your interview has been scheduled successfully.
        Please review the details below and attend on time.
      </p>

      <div className="mt-6 space-y-4">

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Interview Date</span>
          <span className="font-semibold">
            {formatDate(interview?.date)}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Interview Time</span>
          <span className="font-semibold">
            {interview?.time || "Not set"}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Mode</span>
          <span className="font-semibold">
            {interview?.mode || "Not set"}
          </span>
        </div>

        {interview?.notes && (
          <div className="text-sm">
            <p className="text-gray-500 mb-1">Notes</p>
            <p className="font-medium text-gray-800 bg-gray-50 p-3 rounded-lg">
              {interview.notes}
            </p>
          </div>
        )}

        {/* MEETING LINK */}
        {interview?.meetingLink && (
          <button
            onClick={openMeeting}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl transition font-medium"
          >
            Join Meeting
          </button>
        )}

      </div>
    </div>
  );
}