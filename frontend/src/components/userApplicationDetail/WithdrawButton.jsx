import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import { withdrawApplication } from "../../api/applicationApi";

export default function WithdrawButton({ publicId }) {

  const navigate = useNavigate();

  const handleWithdraw = async () => {

    const result = await Swal.fire({
      title: "Withdraw Application?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      confirmButtonText: "Yes, Withdraw",
    });

    if (!result.isConfirmed) {return;}

    try {

      const res = await withdrawApplication(publicId);

      await Swal.fire({
        icon: "success",
        title: "Withdrawn",
        text: res.data.message,
      });

      navigate(-1);

    } catch (error) {

      Swal.fire({
        icon: "error",
        title: "Error",
        text:
          error?.response?.data?.message ||
          "Failed to withdraw application",
      });
    }
  };

  return (
    <button
      onClick={handleWithdraw}
      className="w-full border border-red-500 text-red-500 py-3 rounded-xl hover:bg-red-50 transition font-medium"
    >
      Withdraw Application
    </button>
  );
}