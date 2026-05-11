import { useNavigate } from "react-router-dom";
import { PUBLIC_ROUTES } from "../../constants/routes";

export default function LoginPopup({ isOpen, onClose }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl text-center w-[300px]">
        <h2 className="text-lg font-semibold mb-2">
          Login Required
        </h2>

        <p className="text-gray-600 mb-4">
          Please login to continue
        </p>

        <div className="flex gap-3 justify-center">
          <button
            onClick={() => navigate(PUBLIC_ROUTES.LOGIN)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Login
          </button>

          <button
            onClick={onClose}
            className="border px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}