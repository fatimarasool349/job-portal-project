import Star from "./../../components/ViewDetail/Star";
import RatingBar from "./../../components/ViewDetail/RatingBar";
import { Link } from "react-router-dom";
import API from "../../api/axiosConfig";
import { useEffect, useState } from "react";

export default function Reviews({ company, job }) {
  const [reviews, setReviews] = useState({
    overallRating: 0,
    total: 0,
    ratingBar: [],
    list: [],
  });

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await API.get(
          `/reviews/${company?._id}`
        );

        const data = res.data;

        setReviews({
          overallRating: data?.overallRating || 0,
          total: data?.total || 0,
          ratingBar: data?.ratingBar || [],
          list: data?.list || [],
        });
      } catch (error) {
        console.log(error);
      }
    };

    if (company?._id) {
      fetchReviews();
    }
  }, [company]);

  if (!company) {
    return (
      <div className="text-center py-10 text-gray-500">
        Company not found
      </div>
    );
  }

  return (
    <section className="mt-10 pt-10 border-t border-slate-100 dark:border-slate-800">
      <div className="flex">
        <h3 className="flex-1 text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Employee Reviews
        </h3>

        <Link to={`/review/${company?._id}`}>
          <button className="flex-1 text-md text-blue-600 border-2 border-blue-600">
            Write a Review
          </button>
        </Link>
      </div>

      {/* SUMMARY */}
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

        <RatingBar bar={reviews.ratingBar || []} />
      </div>

      {/* REVIEW LIST */}
      <div className="space-y-6">
        {reviews?.list?.length === 0 ? (
          <div className="text-center text-gray-500 py-6 border rounded-xl">
            No reviews yet. Be the first to review this company ⭐
          </div>
        ) : (
          reviews?.list?.map((rev, idx) => (
            <div key={idx} className="p-6 border rounded-xl">
              <Star stars={rev.rating} />

              <h5 className="font-semibold mt-2">{rev.title}</h5>

              <div className="mt-3">
                <p className="text-green-600 font-bold">Pros</p>
                <p>{rev.pros}</p>
              </div>

              <div className="mt-2">
                <p className="text-red-600 font-bold">Cons</p>
                <p>{rev.cons}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}