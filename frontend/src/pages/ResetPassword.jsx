import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { resetPassword } from "./../api/authApi";
import toast from "react-hot-toast";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      const response = await resetPassword(token, password);

      toast.success(response.message || "Password reset successfully");

      navigate("/login/jobseeker");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Failed to reset password"
      );
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">
        Reset Password
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New Password"
          className="w-full border p-3 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border p-3 rounded mb-4"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;