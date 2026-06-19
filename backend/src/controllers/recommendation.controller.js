import UserActivity from "../models/user.activity.model.js";
import Job from "../models/job.model.js";
import { getEmbedding, cosineSimilarity } from "../utils/embedding.js";

export const getRecommendations = async (req, res) => {
  try {
    const userId = req.user.id;

    const activities = await UserActivity.find({ userId });

    if (activities.length === 0) {
      return res.json([]);
    }

    const jobs = await Job.find().populate("company");

    // Step 1: Create user profile text
    const userText = activities
      .map((a) => a.jobTitle)
      .join(" ");

    const userVector = await getEmbedding(userText);

    const scoredJobs = await Promise.all(
      jobs.map(async (job) => {
        const jobText = `${job.title} ${job.description} ${job.requirements?.join(" ") || ""} ${job.responsibilities?.join(" ") || ""}`.toLowerCase();

        const jobVector = await getEmbedding(jobText);

        const score = cosineSimilarity(userVector, jobVector);

        return { job, score };
      })
    );

    const recommended = scoredJobs
      .sort((a, b) => b.score - a.score)
      .map((item) => item.job);

    return res.json(recommended);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// export const getRecommendations = async (req, res) => {
//   try {
//     const userId = req.user.id;

//     const activities = await UserActivity.find({ userId });

//     if (activities.length === 0) {
//       return res.json([]);
//     }

//     const userKeywords = extractKeywords(
//       activities.map((activity) => activity.jobTitle),
//     );

//     if (userKeywords.length === 0) {
//       return res.json([]);
//     }

//     const jobs = await Job.find().populate("company");

//     const scoredJobs = jobs
//       .map((job) => {
//         const text = `${job.title}
//           ${job.description}
//           ${job.requirements?.join(" ") || ""}
//           ${job.responsibilities?.join(" ") || ""}`.toLowerCase();
//         const score = userKeywords.filter((k) => text.includes(k)).length;
//         return { job, score };
//       })
//       .filter(({ score }) => score > 0)
//       .sort((a, b) => b.score - a.score)
//       .map(({ job }) => job);

//     console.log("RECOMMENDED JOBS:", scoredJobs.length);
//     return res.json(scoredJobs);
//   } catch (err) {
//     console.error("FULL ERROR:", err);
//     res.status(500).json({ message: err.message });
//   }
// };

function extractKeywords(titles) {
  const stopWords = new Set([
    "and",
    "or",
    "the",
    "a",
    "an",
    "in",
    "for",
    "of",
    "to",
    "with",
    "at",
    "by",
    "on",
    "is",
    "are",
    "job",
    "jobs",
  ]);

  const keywordCount = {};

  titles.forEach((title) => {
    const words = title.toLowerCase().split(/\s+/);
    words.forEach((word) => {
      const cleaned = word.replace(/[^a-z0-9]/g, ""); // remove symbols
      if (cleaned.length > 2 && !stopWords.has(cleaned)) {
        keywordCount[cleaned] = (keywordCount[cleaned] || 0) + 1;
      }
    });
  });

  return Object.keys(keywordCount).filter((k) => keywordCount[k] >= 1);
}
