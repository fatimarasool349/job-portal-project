import Star from "./../../components/ViewDetail/Star";
import RatingBar from "./../../components/ViewDetail/RatingBar";
import { Link } from "react-router-dom";
import { companyReviewData } from "../../constant/data";

export default function Reviews({ company, job }) {
  // Find the reviews for this company using companyId
  const reviews = companyReviewData.find(r => r.companyId === company?.id);

  if (!company || !reviews) {
    return (
      <div className="text-center py-10 text-gray-500">
        No reviews available for this company
      </div>
    );
  }

  return (
    <section className="mt-10 pt-10 border-t border-slate-100 dark:border-slate-800">
      <div className="flex">
        <h3 className="flex-1 text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Employee Reviews
        </h3>
        <Link to={`/review/${job.id}`}>
          <button className="flex-1 text-md text-blue-600 border-2 border-r-2 border-blue-600">
            Write a Review
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="bg-blue-600/5 border border-blue-600/10 rounded-xl p-6 flex flex-col items-center justify-center text-center">
          <p className="text-5xl font-black text-blue-600 mb-2">
            {reviews.overallRating}
          </p>
          <Star stars={reviews.overallRating} />
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            {reviews.total} Total Reviews
          </p>
        </div>
        <RatingBar bar={reviews.ratingBar} />
      </div>

      {/* Review List */}
      <div className="space-y-6">
        {reviews.list.map((rev, idx) => (
          <div
            key={idx}
            className="p-6 border border-slate-100 dark:border-slate-800 rounded-xl"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <Star stars={rev.rating} />
                <h5 className="font-bold text-slate-900 dark:text-white">
                  {rev.title}
                </h5>
                <div className="flex text-xs text-slate-500 gap-2">
                  <p>{rev.role}</p>
                  <p>{company.name}</p>
                  <p>{rev.date}</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-bold text-green-600 mb-1">Pros</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {rev.pros}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-red-600 mb-1">Cons</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {rev.cons}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}