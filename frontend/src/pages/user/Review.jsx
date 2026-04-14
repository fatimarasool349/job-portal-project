import { useParams } from "react-router-dom";
import {
  jobData,
  companyData,
  companyReviewData,
  defaultValues,
} from "../../constant";
import RatingBar from "../../components/ViewDetail/RatingBar";
import RatingStar from "../../components/reviewForm/RatingStar";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Review() {
  const { id } = useParams();
  const job = jobData.find((j) => j.id === parseInt(id));
  const company = job ? companyData.find((c) => c.id === job.companyId) : null;
  // Safety check
  const reviews = companyReviewData.find((r) => r.companyId === company?.id) ||
    job?.reviews || { overallRating: 0, ratingBar: [] };
  const [overallRating, setOverallRating] = useState(
    reviews.overallRating || 0,
  );
  const [categoryRatings, setCategoryRatings] = useState(
    reviews.ratingBar.map((cat) => ({ ...cat })) || [],
  );

  const { register, handleSubmit, reset } = useForm({ defaultValues });

  const handleCategoryRate = (index, value) => {
    const newRatings = [...categoryRatings];
    newRatings[index].rating = value;
    setCategoryRatings(newRatings);
  };

  const onSubmit = (data) => {
    console.log({ ...data, overallRating, categoryRatings });
    reset();
    setOverallRating(0);
    setCategoryRatings(reviews.ratingBar ? reviews.ratingBar.map(cat => ({ ...cat })) : []);

  };

  if (!job) return <div>Job not found</div>; // fallback if ID is wrong

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold mb-4">{`Write a Review for ${company?.name||"Company"}`}</h1>

      <section className="mb-8">
        <h2 className="text-sm font-semibold uppercase mb-2">Overall Rating</h2>
        <RatingStar stars={overallRating} setStars={setOverallRating} />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <RatingBar
          bar={categoryRatings}
          setBar={handleCategoryRate}
          size="text-3xl"
        />
      </section>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <input
          {...register("title")}
          placeholder="Review Title"
          className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-600"
        />
        <textarea
          {...register("review")}
          placeholder="Your review..."
          className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-600"
          rows={5}
        />
        <div className="flex gap-4">
          <textarea
            {...register("pros")}
            placeholder="Pros"
            className="w-1/2 p-3 rounded-xl border"
            rows={4}
          />
          <textarea
            {...register("cons")}
            placeholder="Cons"
            className="w-1/2 p-3 rounded-xl border"
            rows={4}
          />
        </div>
        <label className="flex items-center gap-2">
          <input type="checkbox" {...register("anonymous")} />
          Submit anonymously
        </label>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl"
        >
          Submit Review
        </button>
      </form>
    </main>
  );
}
export default Review;
