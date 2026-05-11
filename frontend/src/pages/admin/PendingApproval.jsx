import { ShieldCheck } from "lucide-react";
import { ADMIN_ROUTES, PUBLIC_ROUTES } from "../../constants/routes";
import { Link } from "react-router-dom";

export default function PendingApproval() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-6">

      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-blue-100 p-10 text-center">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
            <ShieldCheck className="w-10 h-10 text-blue-600" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
          Your Request is Under Review
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-700 leading-8">
          Thank you for signing up as a recruiter on{" "}
          <span className="font-semibold text-blue-600">
            JobPortal
          </span>.
        </p>

        <p className="mt-3 text-gray-600 text-base leading-7">
          Your recruiter account is currently pending admin approval.
          Please wait while we verify your company and account details.
        </p>

        {/* Status Badge */}
        <div className="mt-8 flex justify-center">
          <div className="px-5 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-semibold text-sm">
            Pending Approval
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-100"></div>

        {/* Footer Text */}
        <p className="text-sm text-gray-500 leading-6">
          You will receive access to the recruiter dashboard
          once your account has been approved by admin.
        </p>

        {/* Login Button */}
        <div className="mt-8">
          <Link
            to={PUBLIC_ROUTES.LOGIN.replace(":role","recruiter")}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-200 shadow-md"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}