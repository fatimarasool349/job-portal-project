import express from "express";
const router = express.Router();
import { getRecommendations } from "../controllers/recommendation.controller.js";
import  UserActivity  from "../models/user.activity.model.js";
router.get("/", getRecommendations);
router.post("/", async (req, res) => {
  try {
    const { jobId, jobTitle, actionType } = req.body;

    const activity = await UserActivity.create({
      userId: req.user.id,
      jobId,
      jobTitle,
      actionType,
    });
    res.json({ success: true });
  } catch (err) {
    console.error("FULL ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

export default router;
