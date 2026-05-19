import express from "express";
import { createReview ,getAllReviews,getCompanyReviews,verifyReview,flagReview,deleteReview,getUserReviews,getReviewById,getRecruiterReviews,getReviewByUUID} from "../controllers/review.controller.js";

const router = express.Router();

router.post("/", createReview);

router.get("/recruiter", getRecruiterReviews);
router.get("/user/:userId", getUserReviews);
router.get("/company/:companyId", getCompanyReviews);
router.patch("/:id/verify", verifyReview);
router.patch("/:id/flag", flagReview);
router.delete("/:id", deleteReview);

router.get("/:id", getReviewById);
router.get("/", getAllReviews);
router.get("/uuid/:reviewId", getReviewByUUID);


export default router;