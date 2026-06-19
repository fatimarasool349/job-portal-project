import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import RatingBar from "../../components/ViewDetail/RatingBar";
import RatingStar from "../../components/reviewForm/RatingStar";
import { createReview } from "../../api/reviewApi";
import { getJobBySlug } from "../../api/jobApi";
import LoginPopup from "../../components/common/LoginPopup";
import { toast } from "react-hot-toast";

export default function Review() {
  const { slug } = useParams();
  const [company, setCompany] = useState(null);
  const [job, setJob] = useState(null);
  const [overallRating, setOverallRating] = useState(0);
  const [categoryRatings, setCategoryRatings] = useState([]);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      anonymous: false,
    },
  });
  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const res = await getJobBySlug(slug);
        setCompany(res.company);
        setJob(res);

        setCategoryRatings(res.company?.ratingBar || []);
      } catch (_err) {
        toast.error("Unable to load review form");
      }
    };

    fetchCompany();
  }, [slug]);

  const handleCategoryRate = (index, value) => {
    setCategoryRatings((prev) =>
      prev.map((item, i) => (i === index ? { ...item, rating: value } : item)),
    );
  };

  const onSubmit = async (data) => {
    try {
      if (!job?._id || !company?._id) {
        alert("Job or Company not loaded yet");
        return;
      }
      if (overallRating === 0) {
        setError("overallRating", {
          type: "manual",
          message: "Please select a rating",
        });
        return;
      }

      await createReview({
        title: data.title,
        review: data.review,
        pros: data.pros,
        cons: data.cons,
        companyId: company?._id,
        jobId: job?._id,

        overallRating: overallRating,
        categoryRatings: categoryRatings,
        anonymous: data.anonymous,
      });
      reset({
        anonymous: false,
      });
      setOverallRating(0);
      setCategoryRatings([]);
      toast.success("Review submitted successfully!");
    } catch (err) {
      if (err.response?.status === 401) {
        setShowLoginPopup(true);
      } else {
        toast.error(err.response?.data?.message || "Failed to submit review");
      }
    }
  };

  if (!company) {return <div>Loading...</div>;}

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold mb-4">{`Write a Review for ${company?.name || "Company"}`}</h1>

      <section className="mb-8">
        <h2 className="text-sm font-semibold uppercase mb-2">Overall Rating</h2>
        <RatingStar
          stars={overallRating}
          setStars={(value) => {
            setOverallRating(value);
            clearErrors("overallRating");
          }}
        />
        {errors.overallRating && (
          <p className="text-red-500 text-sm mt-2">
            {errors.overallRating.message}
          </p>
        )}
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
          {...register("title", { required: "Title is required" })}
          placeholder="Review Title"
          className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-600"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}

        <textarea
          {...register("review", { required: "Review is required" })}
          placeholder="Your review..."
          className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-600"
          rows={5}
        />
        {errors.review && (
          <p className="text-red-500 text-sm">{errors.review.message}</p>
        )}
        <div className="flex gap-4">
          <div className="w-1/2 flex flex-col">
            <textarea
              {...register("pros", { required: "Pros are required" })}
              placeholder="Pros"
              className=" p-3 rounded-xl border"
              rows={4}
            />
            {errors.pros && (
              <p className="text-red-500 text-sm">{errors.pros.message}</p>
            )}
          </div>
          <div className="w-1/2 flex flex-col">
            <textarea
              {...register("cons", { required: "Cons are required" })}
              placeholder="Cons"
              className=" p-3 rounded-xl border"
              rows={4}
            />
            {errors.cons && (
              <p className="text-red-500 text-sm">{errors.cons.message}</p>
            )}
          </div>
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
      <LoginPopup
        isOpen={showLoginPopup}
        onClose={() => setShowLoginPopup(false)}
      />
    </main>
  );
}
