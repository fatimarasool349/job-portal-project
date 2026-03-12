import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaBuilding,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import github from "./../assets/icons/github-logo.png";
import google from "./../assets/icons/google.png";

export default function SignUp({ role = "Job Seeker" }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onSubmit = (data) => {
    console.log(...data, role);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
        <div className="text-center mb-6">
          <h2 className="mt-4 text-xl font-semibold text-gray-700">
            Create your account
          </h2>
          <p className="text-gray-500 text-sm">
            Join thousands of professionals today
          </p>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="relative mt-1">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                {...register("fullName", { required: "Full name is required" })}
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                placeholder="John Doe"
              />
            </div>
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>
          {role === "Recruiter" && (
            <div>
              <label className="text-sm font-medium text-gray-700">
                Company Name
              </label>
              <div className="relative mt-1">
                <FaBuilding className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter your company name"
                  {...register("companyName", {
                    required:
                      role === "Recruiter" ? "Company name is required" : false,
                  })}
                  className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>
              {errors.companyName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.companyName.message}
                </p>
              )}
            </div>
          )}

          <div>
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="relative mt-1">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                placeholder="john@example.com"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div className="relative mt-1">
              <FaPhone className="absolute left-3 top-3 text-gray-400" />
              <input
                {...register("phone")}
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                placeholder="+1 555 000 0000"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative mt-1">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Minimum 8 characters required",
                  },
                })}
                className="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                placeholder="********"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative mt-1">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showConfirm ? "text" : "password"}
                {...register("confirmPassword", {
                  required: "Confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                className="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                placeholder="********"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-400"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:opacity-90 transition font-medium shadow-md"
          >
            Create Account
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">OR CONTINUE WITH</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <div className="flex gap-4">
          <button className="flex flex-1 flex-row gap-x-2 items-center justify-center py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
            <img src={google} className="w-5 h-5" />
            <span>Google</span>
          </button>
          <button className="flex  flex-1 flex-row items-center justify-center  py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
            <img src={github} className="w-5 h-5" />
            GitHub
          </button>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{" "}
          <Link
            to={`/login/${role.toLowerCase().replace(" ", "")}`}
            className="text-blue-600  cursor-pointer hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
