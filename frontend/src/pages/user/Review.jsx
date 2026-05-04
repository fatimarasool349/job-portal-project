import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import RatingBar from "../../components/ViewDetail/RatingBar";
import RatingStar from "../../components/reviewForm/RatingStar";
import { createReview ,getCompanyReviews } from "../../api/reviewApi";
import { getJobById } from "../../api/jobApi";
import { getCompanyById } from "../../api/companyApi";

export default function Review() {
  const { id } = useParams();

  const [company, setCompany] = useState(null);
  const [overallRating, setOverallRating] = useState(0);
  const [categoryRatings, setCategoryRatings] = useState([]);

  const { register, handleSubmit, reset } = useForm();

  // GET JOB → COMPANY
  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const job = await getJobById(id);
        console.log("Fetched Job:", job);

        // const companyRes = await getCompanyById(job.company);

        setCompany(job.company);

        setCategoryRatings(job.company?.ratingBar || []);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCompany();
  }, [id]);

  // SAFE CATEGORY UPDATE
  const handleCategoryRate = (index, value) => {
    setCategoryRatings((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, rating: value } : item
      )
    );
  };

  // SUBMIT REVIEW
  const onSubmit = async (data) => {
  try {
    await createReview({
      title: data.title,
      review: data.review,
      pros: data.pros,
      cons: data.cons,
      companyId: company?._id,
      jobId: id,

      // ✅ FIXED NAMES
      overallRating: overallRating,
      categoryRatings: categoryRatings,
    });

    reset();
    setOverallRating(0);
    setCategoryRatings([]);
    alert("Review submitted!");
  } catch (err) {
    console.log(err);
  }
};

  if (!company) return <div>Loading...</div>;

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