import UserActivity from "../models/user.activity.model.js";
import Job from "../models/job.model.js";

export const getRecommendations = async (req, res) => {
  try {
    console.log("USER ID:", req.user.id); 
    const userId = req.user.id; 

    const activities = await UserActivity.find({ userId });

    if (activities.length === 0) {
      return res.json([]);
    }

    const titles = activities.map((a) => a.jobTitle.toLowerCase());

    const interest = {
      frontend: ["react", "frontend","flutter", "ui", "html", "css", "javascript"],
      backend: ["node", "backend", "api", "express", "mongodb", "aws"],
    };

    let frontendScore = 0;
    let backendScore = 0;

    titles.forEach((title) => {
      if (
        title.includes("react") ||
        title.includes("frontend") ||
        title.includes("flutter") 
      ) {
        frontendScore++;
      }

      if (
        title.includes("node") ||
        title.includes("backend") ||
        title.includes("api")
      ) {
        backendScore++;
      }
    });

    const userType = frontendScore >= backendScore ? "frontend" : "backend";

    const keywords = interest[userType];

    const jobs = await Job.find().populate("company");
   
    

    const recommended = jobs.filter((job) => {
      const text = (
        job.title +
        " " +
        job.description 
      ).toLowerCase();

      return keywords.some((k) => text.includes(k));
    });

    console.log("RECOMMENDED JOBS:", recommended.length);

    return res.json(recommended);
  } catch (err) {
    console.error("FULL ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};
