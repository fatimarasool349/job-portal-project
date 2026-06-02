import mongoose from "mongoose";

const userActivitySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
  },
  jobTitle: String,
  actionType: {
    type: String,
    enum: ["view", "apply"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("UserActivity", userActivitySchema);
