import { IoIosCloseCircleOutline } from "react-icons/io";
import RatingStar from "../components/reviewForm/RatingStar";
import { FaBuilding } from "react-icons/fa";


function ReviewModal({ review, onClose, onVerify, onFlag }) {
  if (!review) {return null;}

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-slate-200">
          <div>
            <h2 className="text-xl font-bold">Full Review Detail</h2>
            <p className="text-xs text-gray-500">Submission ID: #{review._id}</p>
          </div>

          <button onClick={onClose}>
            <IoIosCloseCircleOutline size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Company + User */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center">
              <FaBuilding />
            </div>

            <div>
              <h3 className="text-xl font-bold">{review.company.name}</h3>
              <p className="text-sm text-gray-500">
                {review.role} •{" "}
                {review.anonymous ? "Anonymous" : "Verified Employee"}
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="bg-gray-50 p-4 rounded-xl">
            <h4 className="font-bold mb-2">Overall Rating</h4>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-indigo-600">
                {review.overallRating}.0
              </span>
              <RatingStar stars={review.overallRating} readonly={true} />
            </div>
          </div>

          {/* Category Scores */}
          {review.categories && (
            <div>
              <h4 className="text-sm font-bold mb-3">Category Scores</h4>

              {Object.entries(review.categories).map(([key, value]) => (
                <div key={key} className="mb-3">
                  <div className="flex justify-between text-xs font-bold">
                    <span>{key}</span>
                    <span className="text-indigo-500">{value}</span>
                  </div>

                  <div className="h-1.5 bg-gray-200 rounded-full mt-1">
                    <div
                      className="h-full bg-indigo-500 rounded-full"
                      style={{ width: `${value * 20}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Review Content */}
          <div>
            <h4 className="text-lg font-bold mb-2">{review.title}</h4>

            <p className="text-gray-600 leading-relaxed whitespace-pre-wrap break-words">
              {review.review}
            </p>
          </div>

          {/* Pros / Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-400">
              <h5 className="font-bold text-green-600 mb-2">Pros</h5>
              <p>{review.pros}</p>
            </div>

            <div className="bg-red-50 p-4 rounded-xl border-l-4 border-red-400">
              <h5 className="font-bold text-red-600 mb-2">Cons</h5>
              <p>{review.cons}</p>
            </div>
          </div>
        </div>

        {/* Footer (Optional Actions) */}
        <div className="p-4 border-t border-slate-200 flex justify-end gap-3">
          <button
            onClick={onFlag}
            className="px-4 py-2 text-sm bg-gray-100 rounded-lg"
          >
            Flag
          </button>
          <button
            onClick={onVerify}
            className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg"
          >
            Mark Verified
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewModal;
