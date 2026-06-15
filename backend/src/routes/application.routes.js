import express from "express";
import {
  applyJob,
  getAllApplications,
  getRecruiterApplications,
  deleteApplication,
  updateApplicationStatus,
  getMyApplications,
  getApplicationById,
  withdrawApplication,
  getMyApplicationForJob,
} from "../controllers/application.controller.js";


import { upload } from "../middleware/upload.js";

const router = express.Router();

// USER APPLY
router.post(
  "/apply",
  (req, res, next) => {
    console.log("Headers:", req.headers);
    next();
  },
  upload.single("resume"),
  applyJob,
);


// ADMIN
router.get("/", getAllApplications);
router.get("/my", getMyApplications);
router.get("/job/:jobId", getMyApplicationForJob);

// RECRUITER
router.get("/recruiter", getRecruiterApplications);

// DELETE
router.get("/:publicId", getApplicationById);
router.delete("/:id", deleteApplication);
router.delete("/withdraw/:publicId", withdrawApplication);

console.log("PATCH ROUTE HIT");
router.patch("/:publicId", updateApplicationStatus);

export default router;
