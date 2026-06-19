import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { useRole } from "../../../hooks/useRole";
import { useDispatch } from "react-redux";
import { updateApplicationStatus } from "../../../redux/slices/applicationSlice";
import InterviewScheduleModal from "../../../modal/InterviewScheduleModal.jsx";

function Header({ application }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { role } = useRole();

  const [openModal, setOpenModal] = useState(false);
  const isLocked = ["rejected", "hired"].includes(application.status);
  const isAccepted = application.status === "selected";
  const isInterviewDone = application.status === "interview completed";

  const handleStatusChange = (e) => {
    dispatch(
      updateApplicationStatus({
        id: application.publicId,
        status: e.target.value,
      }),
    );
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
        {/* LEFT SIDE */}
        <div>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-all"
          >
            <HiArrowLeft className="w-4 h-4" />
            Back to Application List
          </button>

          <div className="flex items-center gap-4 mt-2">
            <h1 className="text-3xl font-extrabold">Application Detail</h1>

            <span className="px-3 py-1 text-xs font-bold rounded-full bg-yellow-200 capitalize">
              {application.status.replaceAll("_", " ")}
            </span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        {role === "recruiter" && (
          <div className="flex items-center gap-4">
            <select
              value={application.status}
              onChange={handleStatusChange}
              disabled={isLocked}
              className={`border rounded-lg px-4 py-2 text-sm ${
                isLocked ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
            >
              {/* NORMAL FLOW */}
              {application.status !== "selected" ? (
                <>
                  <option value="applied">Applied</option>
                  <option value="under review">Under Review</option>
                  <option value="interview scheduled">
                    Interview Scheduled
                  </option>
                  <option value="interview completed">
                    Interview Completed
                  </option>
                  <option value="rejected">Rejected</option>
                  <option value="selected">Selected</option>
                </>
              ) : (
                <>
                  <option value="selected" disabled>
                    Selected
                  </option>
                  <option value="hired">Hired</option>
                </>
              )}
            </select>

            <button
              onClick={() => setOpenModal(true)}
              disabled={isLocked || isInterviewDone || isAccepted}
              className={`px-4 py-2 rounded-lg text-sm text-white transition
    ${
      isLocked || isInterviewDone || isAccepted
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-blue-600 hover:bg-blue-700"
    }`}
            >
              Schedule Interview
            </button>
          </div>
        )}
      </div>

      {/* MODAL */}
      <InterviewScheduleModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onSave={(data) => {
          dispatch(
            updateApplicationStatus({
              id: application.publicId,

              status: "interview scheduled",

              interviewDate: data.date,
              interviewTime: data.time,
              interviewMode: data.mode,
              meetingLink: data.meetingLink,
              notes: data.notes,
            }),
          );

          setOpenModal(false);
        }}
      />
    </>
  );
}

export default Header;
