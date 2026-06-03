import { FaBuilding } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineUpdate } from "react-icons/md";

import { formatDate } from "../../utils/formatDate";
import { getImageUrl } from "../../utils/getImageUrl";

export default function ApplicationHeader({ data }) {
  return (
    <>
      <nav className="flex items-center gap-2 mb-6 text-gray-500">
        <span>Applications</span>
        <span>›</span>
        <span className="text-blue-600 font-semibold">{data.job?.title}</span>
      </nav>

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
                  <span>Applied {formatDate(data.appliedDate)}</span>
                </div>
              </div>
            </div>
          </div>

          <span className={`px-4 py-2 rounded-full text-sm font-semibold capitalize bg-blue-100 text-blue-700 h-fit
            
                ${
                  data.status === "selected"
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
    </>
  );
}
