import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    position: { type: String, required: true },
    status: {
      type: String,
      enum: ["Pending", "Shortlisted", "Rejected"],
      default: "Pending",
    },
    recruiter_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Candidate", candidateSchema);