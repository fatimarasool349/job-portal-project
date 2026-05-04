import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    responsibilities: { type: [String], default: [] },
    requirements: { type: [String], default: [] },
    // requirements: {
    //   type: String,
    // },
    status: {
      type: String,
      enum: ["Active", "Pending", "Closed", "Draft"],
      default: "Active",
    },
    salary: {
      type: Number,
    },
    location: {
      type: String,
    },
    jobType: {
      type: String, // full-time, part-time, remote
    },
    // experience: {
    //   type: Number,
    // },
    // position: {
    //   type: Number, // number of openings
    // },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    slug: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Job", jobSchema);
