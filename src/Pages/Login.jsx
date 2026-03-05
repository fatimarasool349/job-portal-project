import { useForm } from "react-hook-form";
import github from "./../assets/icons/github-logo.png";
import google from "./../assets/icons/google.png";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

function LoginPage({ role = "Job Seeker" }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", { ...data, role });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Secure Login</h1>
          <p className="text-gray-500">Access your professional dashboard</p>
        </div>

        {/* <div className="flex justify-between mb-4 bg-gray-100 rounded-lg p-1">
          {["Job Seeker", "Recruiter", "Admin"].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              className={`flex-1 py-2 rounded-lg ${
                role === r ? "bg-white text-blue-600" : "text-gray-600"
              }`}
            >
              {r}
            </button>
          ))}
        </div> */}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Email Address</label>
            <div className="relative mt-1">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="email"
                placeholder={
                  role === "Recruiter"
                    ? "recruiter@company.com"
                    : "abc@email.com"
                }
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      role === "Recruiter"
                        ? /^[a-zA-Z0-9._%+-]+@(?!email\.com|yahoo\.com|hotmail\.com)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                        : /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message:
                      role === "Recruiter"
                        ? "Please use a company email address"
                        : "Invalid Email Address",
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
                to={`/forgotPassword?role=${role.toLowerCase().replace(" ", "")}`}
                className="text-blue-600 text-sm"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

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
          Don't have an account?{" "}
          <Link
            to={`/signup/${role.toLowerCase().replace(" ", "")}`}
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
