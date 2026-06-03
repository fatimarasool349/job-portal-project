import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  FaBuilding,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineUpdate } from "react-icons/md";
import { BsCalendarEvent } from "react-icons/bs";

import { getApplicationById } from "../../api/applicationApi";
import { formatDate } from "../../utils/formatDate";
import { getImageUrl } from "../../utils/getImageUrl";

export default function UserApplicationDetail() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { publicId } = useParams();

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const res = await getApplicationById(publicId);
        setData(res.data);
      } catch (err) {
        console.error("Error fetching application:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchApplication();
  }, [publicId]);

  if (loading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  if (!data) {
    return <div className="p-10 text-center">No data found</div>;
  }

  return (
    <main className="max-w-6xl mx-auto px-4 md:px-8 py-8 mb-20">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 mb-6 text-gray-500">
        <span>Applications</span>
        <span>›</span>
        <span className="text-blue-600 font-semibold">
          {data.job?.title}
        </span>
      </nav>

      {/* HEADER */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 mb-6 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden">
              <img
                src={getImageUrl(data.company?.logo)}
                alt="Company"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {data.job?.title}
              </h1>

              <div className="flex flex-wrap gap-4 text-gray-500 text-sm mt-2">
                <div className="flex items-center gap-1">
                  <FaBuilding />
                  <span>{data.company?.name}</span>
                </div>

                <div className="flex items-center gap-1">
                  <IoLocationSharp />
                  <span>{data.job?.location}</span>
                </div>

                <div className="flex items-center gap-1">
                  <MdOutlineUpdate />
                  <span>
                    Applied {formatDate(data.appliedDate)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* STATUS BADGE */}
          <div>
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold capitalize
                ${
                  data.status === "accepted"
                    ? "bg-green-100 text-green-700"
                    : data.status === "rejected"
                    ? "bg-red-100 text-red-700"
                    : data.status === "interview"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-yellow-100 text-yellow-700"
                }
              `}
            >
              {data.status}
            </span>
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          {/* DESCRIPTION */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">
              Job Description
            </h2>

            <p className="text-gray-600 mb-6">
              {data.job?.description}
            </p>

            <h3 className="font-semibold mb-2">
              Responsibilities
            </h3>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              {data.job?.responsibilities?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h3 className="font-semibold mt-6 mb-2">
              Requirements
            </h3>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              {data.job?.requirements?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* NOTES */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <div className="flex justify-between mb-3">
              <h2 className="text-xl font-semibold">My Notes</h2>

              <button className="text-blue-600 hover:underline">
                Edit
              </button>
            </div>

            <p className="text-gray-500 italic">
              {data.coverLetter || "No notes added yet."}
            </p>
          </section>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-6">

          {/* =========================
              PENDING STATUS
          ========================== */}
          {data.status === "pending" && (
            <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-yellow-500 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <MdOutlineUpdate className="text-yellow-500 text-xl" />

                <h3 className="text-lg font-semibold">
                  Status Update
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Your application is currently being reviewed by
                our hiring team. We will notify you once there
                is an update.
              </p>

              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    Applied on
                  </span>

                  <span className="font-semibold">
                    {formatDate(data.appliedDate)}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    Last updated
                  </span>

                  <span className="font-semibold">
                    {formatDate(data.updatedAt)}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* =========================
              INTERVIEW STATUS
          ========================== */}
          {data.status === "interview" && (
            <section className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-lg font-semibold mb-5 flex items-center gap-2">
                <BsCalendarEvent />
                Interview Details
              </h2>

              <div className="space-y-4">
                <div>
                  <p className="font-medium">
                    Interview Scheduled
                  </p>

                  <p className="text-sm opacity-80">
                    HR team will contact you shortly with
                    interview timing.
                  </p>
                </div>

                <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
                  Prepare for Interview
                </button>
              </div>
            </section>
          )}

          {/* =========================
              ACCEPTED STATUS
          ========================== */}
          {data.status === "accepted" && (
            <section className="bg-green-600 text-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <FaCheckCircle className="text-3xl" />

                <h2 className="text-2xl font-bold">
                  Next Steps
                </h2>
              </div>

              <p className="mb-6 leading-relaxed text-green-50">
                Congratulations! We're excited to have you
                join the team. Our HR team will reach out
                with onboarding details shortly.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-white/10 rounded-xl">
                  <FaCheckCircle className="mt-1" />

                  <div>
                    <p className="font-semibold">
                      Background Check
                    </p>

                    <p className="text-sm text-green-100">
                      In progress
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-white/10 rounded-xl opacity-80">
                  <BsCalendarEvent className="mt-1" />

                  <div>
                    <p className="font-semibold">
                      Onboarding Paperwork
                    </p>

                    <p className="text-sm text-green-100">
                      Unlocks after verification
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* =========================
              REJECTED STATUS
          ========================== */}
          {data.status === "rejected" && (
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <FaTimesCircle className="text-red-500 text-2xl" />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Application Status
              </h3>

              <p className="text-gray-600 mb-6">
                Thank you for your interest in{" "}
                {data.company?.name}. Although we won't be
                moving forward at this time, we encourage you
                to apply for future roles.
              </p>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <h4 className="font-semibold mb-4">
                  Application Timeline
                </h4>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">
                      Applied
                    </span>

                    <span>
                      {formatDate(data.appliedDate)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">
                      Review Started
                    </span>

                    <span>
                      {formatDate(data.updatedAt)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">
                      Closed
                    </span>

                    <span>
                      {formatDate(data.updatedAt)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* COMPANY OVERVIEW */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h2 className="text-sm text-gray-500 mb-3 uppercase tracking-wide">
              Company Overview
            </h2>

            <p className="text-gray-600 text-sm mb-5 leading-relaxed">
              {data.company?.about1 ||
                data.company?.description}
            </p>

            <div className="text-sm space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Size</span>

                <span className="font-medium">
                  {data.company?.size}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Industry
                </span>

                <span className="font-medium">
                  {data.company?.industry}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Location
                </span>

                <span className="font-medium">
                  {data.company?.location}
                </span>
              </div>
            </div>
          </section>

          {/* WITHDRAW */}
          {data.status !== "accepted" && (
            <button className="w-full border border-red-500 text-red-500 py-3 rounded-xl hover:bg-red-50 transition font-medium">
              Withdraw Application
            </button>
          )}
        </aside>
      </div>
    </main>
  );
}