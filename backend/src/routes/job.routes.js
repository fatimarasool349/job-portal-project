import express from "express";
import {
  createJob,
  getAllJobs,
  getJobById,
  getMyJobs,
  updateJob,
  deleteJob,
  getJobBySlug,
  getJobsByCompany,
  searchJobs,
} from "../controllers/job.controller.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", isAuthenticated, createJob);
router.get("/", getAllJobs);

router.get("/my", getMyJobs);
router.get("/search", searchJobs);
router.get("/:slug", getJobBySlug);
router.put("/:id", isAuthenticated, updateJob);
router.get("/company/:companyId", getJobsByCompany);
router.delete("/:id", isAuthenticated, deleteJob);

export default router;
