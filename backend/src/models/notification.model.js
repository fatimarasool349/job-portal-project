import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    type: {
      type: String,
      enum: ["application", "status_update", "job_alert", "message"],
    },

    title: String,

    message: String,

    isRead: {
      type: Boolean,
      default: false,
    },
    audience: {
      type: String,
      enum: ["all", "jobseeker", "recruiter", "admin"],
      default: "all",
    },

    link: String,
  },
  { timestamps: true },
);

export default mongoose.model("Notification", notificationSchema);
