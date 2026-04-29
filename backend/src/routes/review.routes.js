import express from "express";
import { createReview ,getAllReviews,getCompanyReviews} from "../controllers/review.controller.js";

const router = express.Router();

router.post("/", createReview);
router.get("/", getAllReviews);
router.get("/:companyId", getCompanyReviews);

export default router;