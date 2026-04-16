import { MdOutlineCancel, MdOutlineMessage, MdCheckCircleOutline } from "react-icons/md";
function ActionButton({ onApprove, onReject, onMessage }) {
  return (
    <div className="flex gap-3">
      <button
        onClick={onApprove}
        className="px-6 py-2.5 bg-green-200 rounded-xl font-bold hover:opacity-90"
      >
        <MdCheckCircleOutline className="inline-block mr-1" />
        Approve
      </button>

      <button
        onClick={onReject}
        className="px-6 py-2.5 bg-red-200 rounded-xl font-bold"
      >
        <MdOutlineCancel className="inline-block mr-1" />
        Reject
      </button>

      <button 
      onClick={onMessage}
      className="px-4 py-2.5 bg-gray-300 font-bold border border-gray-200 rounded-xl">
        <MdOutlineMessage className="inline-block mr-1" />
        Message
      </button>
    </div>
  );
}

export default ActionButton;
