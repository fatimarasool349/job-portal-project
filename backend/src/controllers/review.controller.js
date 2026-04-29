import Review from "../models/review.model.js";

export const createReview = async (req, res) => {
  try {
    const {
      jobId,
      companyId,
      title,
      review,
      pros,
      cons,
      overallRating,
      categoryRatings,
      anonymous,
    } = req.body;

    const userId = req.user.id; // from JWT middleware

    const newReview = await Review.create({
      user: userId,
      job: jobId,
      company: companyId,
      title,
      reviewText: review,
      pros,
      cons,
      overallRating,
      categoryRatings,
      anonymous,
    });

    res.status(201).json({
      success: true,
      message: "Review submitted successfully",
      review: newReview,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getAllReviews = async (req, res) => {
  const reviews = await Review.find()
    .populate("user", "name")
    .populate("company", "name");

  res.json(reviews);
};

export const getCompanyReviews = async (req, res) => {
  const { companyId } = req.params;

  const reviews = await Review.find({ company: companyId })
    .populate("user", "name")
    .sort({ createdAt: -1 });
      const ratingBar = []; // calculate later if needed


  res.json(reviews);
};