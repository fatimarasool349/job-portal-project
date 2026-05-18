import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    industry: String,
    location: String,
    website: String,

    logo: String,

    about1: String,
    about2: String,
    size: String,
    businessHours: String,

    stats: [
      {
        label: String,
        value: String,
      },
    ],

    culture: [
      {
        title: String,
        description: String,
      },
    ],

    photos: [String],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    recruiterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      default: null,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
  },

  { timestamps: true },
);

export default mongoose.model("Company", companySchema);
