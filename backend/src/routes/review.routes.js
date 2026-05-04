import express from "express";
import { createReview ,getAllReviews,getCompanyReviews,verifyReview,flagReview,deleteReview,getUserReviews,getReviewById,getRecruiterReviews} from "../controllers/review.controller.js";

const router = express.Router();

router.post("/", createReview);
// ✅ FIXED ORDER

router.get("/recruiter", getRecruiterReviews);
router.get("/user/:userId", getUserReviews);
router.get("/company/:companyId", getCompanyReviews);
router.patch("/:id/verify", verifyReview);
router.patch("/:id/flag", flagReview);
router.delete("/:id", deleteReview);

// 👇 ALWAYS LAST (VERY IMPORTANT)
router.get("/:id", getReviewById);
router.get("/", getAllReviews);


export default router;