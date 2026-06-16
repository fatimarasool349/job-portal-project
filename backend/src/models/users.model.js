import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: Number,
    },
    role: {
      type: String,
      default: "jobseeker",
    },
    status: {
      type: String,
      enum: ["active", "blocked", "pending"],
      default: "active",
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      default: "",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      default: null,
    },
    resetPasswordToken: {
      type: String,
    },

    resetPasswordExpires: {
      type: Date,
    },
  },

  { timestamps: true },
);

const Users = mongoose.model("Users", userSchema);
export default Users;
