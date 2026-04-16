import ActionButton from "./ActionButton";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { useRole } from "../../../hooks/useRole";

function Header({ status, onApprove, onReject, onMessage }) {
  const Navigate = useNavigate();
  const { role } = useRole();
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
      <div>
        <button
          onClick={() => Navigate(-1)}
          className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-all"
        >
          <HiArrowLeft className="w-4 h-4" />
          Back to Application List
        </button>

        <div className="flex items-center gap-4 mt-2">
          <h1 className="text-3xl font-extrabold">Application Detail</h1>

          <span className="px-3 py-1 text-xs font-bold rounded-full bg-yellow-200">
            {status}
          </span>
        </div>
      </div>
      {role === "recruiter" && (
        <ActionButton
          onApprove={onApprove}
          onReject={onReject}
          onMessage={onMessage}
        />
      )}
    </div>
  );
}

export default Header;
