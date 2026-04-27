import express from "express";
import {
  applyJob,
  getAllApplications,
  getRecruiterApplications,
  deleteApplication,
  updateApplicationStatus,
} from "../controllers/application.controller.js";

import { upload } from "../middleware/upload.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";


const router = express.Router();

// USER APPLY
router.post("/apply", (req, res, next) => {
  console.log("🚀 /api/application/apply route HIT");
  console.log("Headers:", req.headers);
  next();
}, isAuthenticated, upload.single("resume"), applyJob);

// ADMIN
router.get("/",  getAllApplications);

// RECRUITER
router.get("/recruiter", getRecruiterApplications);

// DELETE
router.delete("/:id",  deleteApplication);
router.patch("/:id", updateApplicationStatus);

export default router;