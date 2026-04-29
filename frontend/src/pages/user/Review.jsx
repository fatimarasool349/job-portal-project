import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import RatingBar from "../../components/ViewDetail/RatingBar";
import RatingStar from "../../components/reviewForm/RatingStar";
import { createReview } from "../../api/reviewApi";

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
        const jobRes = await API.get(`/job/${id}`);
        const job = jobRes.data;

        const companyRes = await API.get(
          `/${job.companyId}`
        );

        setCompany(companyRes.data);

        setCategoryRatings(companyRes.data?.ratingBar || []);
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
        ...data,
        companyId: company?._id,
        rating: overallRating,
        ratingBar: categoryRatings,
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
    <main className="max-w-4xl mx-auto py-10">
      <h1 className="text-2xl font-bold">
        Write Review for {company.name}
      </h1>

      <RatingStar
        stars={overallRating}
        setStars={setOverallRating}
      />

      <RatingBar
        bar={categoryRatings}
        setBar={handleCategoryRate}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("title")}
          placeholder="Title"
        />

        <textarea {...register("review")} placeholder="Review" />

        <textarea {...register("pros")} placeholder="Pros" />

        <textarea {...register("cons")} placeholder="Cons" />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}