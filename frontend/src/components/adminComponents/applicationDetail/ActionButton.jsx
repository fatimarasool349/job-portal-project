import {
  MdOutlineCancel,
  MdOutlineMessage,
  MdCheckCircleOutline,
} from "react-icons/md";
function ActionButton({ status, onApprove, onReject, onMessage }) {
  const isFinal = status !== "pending";

  console.log("STATUS:", status, "FINAL:", isFinal);

  return (
    <div className="flex gap-3">
      <button
        onClick={onApprove}
        disabled={isFinal}
        className={`px-6 py-2.5 rounded-xl font-bold transition-all ${
          isFinal
            ? "bg-gray-300 cursor-not-allowed opacity-60"
            : "bg-green-200 hover:opacity-90"
        }`}
      >
        <MdCheckCircleOutline className="inline-block mr-1" />
        Approve
      </button>

      <button
        onClick={onReject}
        disabled={isFinal}
        className={`px-6 py-2.5 rounded-xl font-bold transition-all ${
          isFinal
            ? "bg-gray-300 cursor-not-allowed opacity-60"
            : "bg-red-200 hover:opacity-90"
        }`}
      >
        <MdOutlineCancel className="inline-block mr-1" />
        Reject
      </button>

      <button
        onClick={onMessage}
        className="px-4 py-2.5 bg-gray-300 font-bold border border-gray-200 rounded-xl"
      >
        <MdOutlineMessage className="inline-block mr-1" />
        Message
      </button>
    </div>
  );
}

export default ActionButton;
