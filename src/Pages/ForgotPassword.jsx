import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link , useLocation} from "react-router-dom";
import forgotPassword from "./../assets/svg/forgotPassword.svg"
import backArrow from "./../assets/svg/backArrow.svg"
import forwordArrow from "./../assets/svg/forwardArrow.svg"
import {FaEnvelope} from "react-icons/fa";

function ForgotPassword() {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const role = searchParams.get("role") || "jobseeker";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = (data) => {
    console.log("Reset link sent to:", data.email);
    setSuccess(true);
    reset(); 
  };

  return (
    <main className="grow flex items-center justify-center px-4 py-12 bg-gray-100">
      <div className="w-full max-w-md ">
        {/* Forgot Password Card */}
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 p-8">

          {/* Success Message */}
          {/* {success && (
            <div className="mb-6 flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-lg">
              <span className="material-symbols-outlined text-green-600 dark:text-green-400">
                check_circle
              </span>
              <p className="text-green-700 dark:text-green-300 text-sm font-medium">
                Reset link sent successfully to your email.
              </p>
            </div>
          )} */}

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
             <img src={forgotPassword} alt="" className="material-symbols-outlined text-primary !text-3xl" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Forgot Password
            </h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Enter your email address to receive a password reset link
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
              >
                Email address
              </label>
              <div className="relative mt-1">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                
                <input
                  id="email"
                  type="email"
                  placeholder="name@email.com"
                  className={`w-full pl-10 pr-4 py-3 dark:bg-blue-600 rounded-lg text-slate-900 border border-gray-300 dark:text-white focus:ring-2 focus:outline-none focus:ring-blue-600 transition-all duration-200 placeholder:text-slate-400`
                    }
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-/90 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span>Send Reset Link</span>
             <img src={forwordArrow} alt="arrow" className="material-symbols-outlined !text-lg group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Back to Login */}
          <div className="mt-8 text-center text-blue-600">
            <Link to={`/login/${role}`}
              className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 group"
            >
              <img src={backArrow} alt="back tp login" className="material-symbols-outlined !text-base group-hover:-translate-x-1 transition-transform"/>
                
              
              Back to Login
            </Link>
          </div>
        </div>

   
      </div>
    </main>
  );
}

export default ForgotPassword;