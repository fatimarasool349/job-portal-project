import express from "express";
import {
  createJob,
  getAllJobs,
  getJobById,
  getMyJobs,
  updateJob,
  deleteJob,
} from "../controllers/job.controller.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", isAuthenticated, createJob);
router.get("/", getAllJobs);
router.get("/my", isAuthenticated, getMyJobs);
router.get("/:id", getJobById);
router.put("/:id", isAuthenticated, updateJob);
router.delete("/:id", isAuthenticated, deleteJob);

export default router;