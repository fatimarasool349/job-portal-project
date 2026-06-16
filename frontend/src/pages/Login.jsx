import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { PUBLIC_ROUTES } from "../constants/routes";
import { useLogin } from "../hooks/useLogin" 

function LoginPage() {
  const {
    role,
    errors,
    register,
    handleSubmit,
    onSubmit,
    emailPlaceholder,
    emailPattern,
    emailErrorMessage,
  } = useLogin();  

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
                  pattern: { value: emailPattern, message: emailErrorMessage },
                })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
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
                    if (value.length < 8) return "Password must be at least 8 characters";
                    if (!/[A-Z]/.test(value)) return "Password must include at least one uppercase letter";
                    if (!/[@$!%*?&]/.test(value)) return "Password must include at least one special character";
                    return true;
                  },
                })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
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
            <input type="checkbox" {...register("rememberMe")} className="mr-2" />
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