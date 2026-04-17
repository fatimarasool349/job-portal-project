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
    requirements: {
      type: String,
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
    experience: {
      type: Number,
    },
    position: {
      type: Number, // number of openings
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company", // we will create later
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);