import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: String,
  rating: Number,
});

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },

    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
    },

    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },

    title: String,
    reviewText: String,
    pros: String,
    cons: String,

    overallRating: {
      type: Number,
      min: 1,
      max: 5,
    },

    categoryRatings: [categorySchema],

    anonymous: {
      type: Boolean,
      default: false,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    flagged: {
      type: Boolean,
      default: false,
    },
    
  },
  { timestamps: true },
);

export default mongoose.model("Review", reviewSchema);
