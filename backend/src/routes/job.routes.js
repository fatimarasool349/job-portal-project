import express from "express";
import {
  createJob,
  getAllJobs,
  getJobById,
  getMyJobs,
  updateJob,
  deleteJob,
  getJobBySlug,
} from "../controllers/job.controller.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";


const router = express.Router();

router.post("/", isAuthenticated, createJob);
router.get("/", getAllJobs);
router.get("/my", getMyJobs);
router.get("/:slug", getJobBySlug);
router.put("/:id", isAuthenticated, updateJob);
router.delete("/:id", isAuthenticated,deleteJob);

export default router;