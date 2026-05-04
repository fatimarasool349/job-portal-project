import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { PUBLIC_ROUTES, ADMIN_ROUTES } from "../constants/routes";

import { loginSuccess } from "../redux/slices/authSlice";
import axios from "axios";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { role: rawRole } = useParams();
  const role = rawRole?.trim().toLowerCase();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  
  const onSubmit = async (data) => {
    try {
      console.log("Sending login request...");
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: data.email,
        password: data.password,
      });
      console.log("Response:", res.data);

      const { token, user } = res.data;
      console.log("LOGIN USER:", res.data.user);

   dispatch(
  loginSuccess({
    user: user,   // keep full object
    token,
    role: user.role,
    company: user.companyId || null,

  }),
);
      localStorage.setItem("token", token);
      localStorage.setItem("companyId", user.companyId);

      // localStorage.setItem(
      //   "auth",
      //   JSON.stringify({
      //     user: {
      //       id: user._id || user.id,
      //       fullName: user.fullName,
      //       email: user.email,
      //       phone: user.phone,
      //       role: user.role,
      //       profileImage: user.profileImage,
      //     },
      //     token,
      //     role: user.role,
      //     isAuthenticated: true,
      //   }),
      // );

      localStorage.setItem("role", user.role);

      if (user.role === "recruiter") {
        localStorage.setItem("recruiter_id", user._id);
        navigate(ADMIN_ROUTES.DASHBOARD);
      } else if (user.role === "admin") {
        navigate(ADMIN_ROUTES.DASHBOARD);
      } else {
        navigate(PUBLIC_ROUTES.HOME);
      }
    } catch (error) {
      const backendErrors = error.response?.data?.errors;

      console.log("ERROR:", error.response?.data);

      if (backendErrors) {
        Object.keys(backendErrors).forEach((field) => {
          setError(field, {
            type: "server",
            message: backendErrors[field],
          });
        });
      } else {
        alert(error.response?.data?.message || "Something went wrong");
      }
    }
  };

  const emailPlaceholder =
    role === "recruiter"
      ? "recruiter@company.com"
      : role === "admin"
        ? "admin@yourdomain.com"
        : "abc@email.com";

  const emailPattern =
    role === "recruiter"
      ? /^[a-zA-Z0-9._%+-]+@(?!yourdomain\.com|email\.com|yahoo\.com|hotmail\.com)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      : role === "admin"
        ? /^[a-zA-Z0-9._%+-]+@yourdomain\.com$/ // only allow your domain for admin
        : /^[a-zA-Z0-9._%+-]+@(?!yourdomain\.com$)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailErrorMessage =
    role === "recruiter"
      ? "Please use a company email address"
      : role === "admin"
        ? "Admin email must be @yourdomain.com"
        : "Invalid Email Address";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Secure Login</h1>
          <p className="text-gray-500">Access your professional dashboard</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email Address</label>
            <div className="relative mt-1">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder={emailPlaceholder}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: emailPattern,
                    message: emailErrorMessage,
                  },
                })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <div className="relative mt-1">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                placeholder="password"
                {...register("password", {
                  required: "Password is required",
                  validate: (value) => {
                    if (value.length < 8)
                      return "Password must be at least 8 characters";
                    if (!/[A-Z]/.test(value))
                      return "Password must include at least one uppercase letter";
                    if (!/[@$!%*?&]/.test(value))
                      return "Password must include at least one special character";
                    return true;
                  },
                })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
            <div className="text-right mt-1">
              <Link
                to={`${PUBLIC_ROUTES.FORGOT_PASSWORD}?role=${role.toLowerCase().replace(" ", "")}`}
                className="text-blue-600 text-sm"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              {...register("rememberMe")}
              className="mr-2"
            />
            <label>Remember me</label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Don't have an account?{" "}
          <Link
            to={PUBLIC_ROUTES.SIGNUP.replace(":role", role.toLowerCase().replace(" ", ""))}
            className="text-blue-600 font-semibold"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
export default LoginPage;
