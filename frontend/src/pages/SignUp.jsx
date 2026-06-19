import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link, useParams } from "react-router-dom";
import { PUBLIC_ROUTES, ADMIN_ROUTES, AUTH_STATUS_ROUTES } from "../constants/routes";
import toast from "react-hot-toast";

import axios from "axios";
import {
  FaUser,
  FaBuilding,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/slices/authSlice";
export default function SignUp() {
  const { role } = useParams();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        { ...data, role: role.toLowerCase() },
      );
      console.log("ROLE FROM PARAMS:", role);
      console.log("USER FROM BACKEND:", response.data.user);

      const user = response.data?.user;
      const token = response.data?.token;

      console.log("Signup success:", user);

      dispatch(
        loginSuccess({
          user,
          token,
          role: user.role,
          company: user.companyId || null,
        }),
      );
      localStorage.setItem("companyId", user.companyId);
      toast.success("Account created successfully!");

      if (user.role === "recruiter") {
        localStorage.setItem("recruiter_id", user._id);
        navigate(AUTH_STATUS_ROUTES.PENDING);
      } else if (user.role === "admin") {
        navigate(ADMIN_ROUTES.DASHBOARD);
      } else {
        navigate(PUBLIC_ROUTES.HOME);
      }
    } catch (error) {
      console.log("Signup error:", error.response?.data);

      const res = error.response;

      if (res?.data?.errors) {
        Object.keys(res.data.errors).forEach((field) => {
          setError(field, {
            type: "manual",
            message: res.data.errors[field],
          });
        });
      } else {
        toast.error(res?.data?.message || "Something went wrong");
        setError("root", {
          type: "manual",
          message: res?.data?.message || "Something went wrong",
        });
      }
    }
  };
  const emailPattern =
    role === "recruiter";
      // ? /^[a-zA-Z0-9._%+-]+@(?!email\.com|gmail\.com|yahoo\.com|hotmail\.com)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      // : /^[a-zA-Z0-9._%+-]+@(?!gmail\.com|yahoo\.com|hotmail\.com|outlook\.com)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
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
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="John Doe"
              />
            </div>
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>
          {role === "recruiter" && (
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
                      role === "recruiter" ? "Company name is required" : false,
                  })}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: emailPattern,
                    message: "Please enter a valid email address",
                  },
                })}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                  validate: (value) => {
                    if (value.length < 8)
                      {return "Password must be at least 8 characters";}
                    if (!/[A-Z]/.test(value))
                      {return "Password must include at least one uppercase letter";}
                    if (!/[@$!%*?&]/.test(value))
                      {return "Password must include at least one special character";}
                    return true;
                  },
                })}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
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

        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{" "}
          <Link
            to={PUBLIC_ROUTES.LOGIN.replace(
              ":role",
              role.toLowerCase().replace(" ", ""),
            )}
            className="text-blue-600  cursor-pointer hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
