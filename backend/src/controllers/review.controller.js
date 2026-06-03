import Review from "../models/review.model.js";
import User from "../models/users.model.js";
import Company from "../models/company.model.js";
import { v4 as uuidv4 } from "uuid";
import slugify from "slugify";

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

    if (!companyId || !overallRating) {
      return res.status(400).json({
        success: false,
        message: "Company and rating are required",
      });
    }

    const newReview = await Review.create({
      user: req.user.id,
      job: jobId,
      company: companyId,
      title,
      reviewText: review,
      pros,
      cons,
      overallRating,
      categoryRatings,
      anonymous: anonymous || false,
      reviewId: uuidv4(), // 👈 UUID here
      slug: slugify(title + "-" + Date.now(), {
        lower: true,
        strict: true,
      }),
    });

    res.status(201).json({
      success: true,
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
  try {
    const { companyId } = req.params;

    const reviews = await Review.find({ company: companyId })
      .populate("user", "name")
      .populate("company", "name")
      .sort({ createdAt: -1 });
    const total = await Review.countDocuments({ company: companyId });

    const avgRating =
      reviews.reduce((acc, r) => acc + r.overallRating, 0) /
      (reviews.length || 1);

    res.json({
      reviews,
      total: reviews.length,
      averageRating: avgRating.toFixed(1),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id)
      .populate("user", "name email")
      .populate("company", "name");

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const verifyReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { verified: true },
      { new: true },
    );

    res.json({ success: true, review });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const flagReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { flagged: true },
      { new: true },
    );

    res.json({ success: true, review });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);

    res.json({ success: true, message: "Review deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getUserReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ user: req.params.userId })
      .populate("company", "name")
      .sort({ createdAt: -1 });

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getRecruiterReviews = async (req, res) => {
  try {
    console.log("USER IN RECRUITER API:", req.user);

    const companyId = req.user.company;

    if (!companyId) {
      return res
        .status(400)
        .json({ message: "Company not found for recruiter" });
    }

    const companyIds = [companyId];

    const reviews = await Review.find({
      company: { $in: companyIds },
    })
      .populate("user", "name")
      .populate("company", "name")
      .sort({ createdAt: -1 });

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getReviewByUUID = async (req, res) => {
  try {
    const review = await Review.findOne({
      reviewId: req.params.reviewId,
    });

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
