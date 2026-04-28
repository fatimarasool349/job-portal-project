import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },

    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required:true,
    },

    recruiter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users", // ✅ Changed from "User" to "Users" (matches the export)
    },

    // 🔥 ADD THIS (VERY IMPORTANT)
    candidate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users", // ✅ Changed from "Use   r" to "Users"
      required: true,
    },

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },

    email: { type: String, required: true },
    phone: { type: String },

    // resume: { type: String, required: true },
    portfolio: { type: String },

    linkedin: { type: String },
    github: { type: String },

    coverLetter: { type: String },

    status: {
      type: String,
      enum: ["Pending", "Reviewed", "Accepted", "Rejected"],
      default: "Pending",
    },
    appliedDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Application", applicationSchema);