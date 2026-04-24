import express from "express";
import {
  applyJob,
  getAllApplications,
  getRecruiterApplications,
  deleteApplication,
} from "../controllers/application.controller.js";

import { upload } from "../middleware/upload.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";


const router = express.Router();

// USER APPLY
router.post("/apply",isAuthenticated,upload.single("resume"), applyJob);

// ADMIN
router.get("/",  getAllApplications);

// RECRUITER
router.get("/recruiter", getRecruiterApplications);

// DELETE
router.delete("/:id",  deleteApplication);

export default router;