import {  ShieldX } from "lucide-react";
import { Link } from "react-router-dom";
import { PUBLIC_ROUTES } from "../../constants/routes.js";

export default function BlockedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 flex items-center justify-center px-6">

      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-red-100 p-10 text-center">

        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
            <ShieldX className="w-10 h-10 text-red-600" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
          Account Restricted
        </h1>

        <p className="mt-6 text-lg text-gray-700 leading-8">
          Your recruiter account has been temporarily restricted by admin.
        </p>

        <p className="mt-3 text-gray-600 text-base leading-7">
          You currently do not have access to the recruiter dashboard
          or platform features.
        </p>

        <div className="mt-8 flex justify-center">
          <div className="px-5 py-2 rounded-full bg-red-50 border border-red-200 text-red-700 font-semibold text-sm">
            Access Blocked
          </div>
        </div>

        <div className="my-8 border-t border-gray-100"></div>

        <p className="text-sm text-gray-500 leading-6">
          If you believe this action was made by mistake,
          please contact platform support or admin.
        </p>

        <div className="mt-8">
          <Link
            to={PUBLIC_ROUTES.LOGIN.replace(":role","recruiter")}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition duration-200 shadow-md"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}