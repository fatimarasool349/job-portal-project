import express from "express";
import { getAllJobseekers, updateJobseeker,deleteJobseeker, createJobseeker } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/jobseekers", getAllJobseekers);
router.put("/jobseekers/:id", updateJobseeker);
router.delete("/jobseekers/:id", deleteJobseeker);
router.post("/jobseekers", createJobseeker);

export default router;