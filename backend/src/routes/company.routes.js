import express from "express";
import {
  createCompany,
  getCompanies,
  getMyCompany,
  updateCompany,
  deleteCompany,
} from "../controllers/company.controller.js";
import { upload } from "../middleware/upload.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/",
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "photos", maxCount: 10 },
  ]),
  isAuthenticated,
  createCompany,
);
router.get("/", getCompanies);
router.get("/my-company", isAuthenticated, getMyCompany);
router.put(
  "/:id",
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "photos", maxCount: 10 },
  ]),
  updateCompany,
);
router.delete("/:id", deleteCompany);

export default router;
