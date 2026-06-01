import express from "express";
import {
  createCompany,
  getCompanies,
  getMyCompany,
  updateCompany,
  deleteCompany,
  getCompanyBySlug,
} from "../controllers/company.controller.js";
import { upload } from "../middleware/upload.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/", isAuthenticated,
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "photos", maxCount: 10 },
  ]),
  createCompany,
);
router.get("/", isAuthenticated, getCompanies);
router.get("/my-company", isAuthenticated, getMyCompany);
router.put(
  "/:id", isAuthenticated,
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "photos", maxCount: 10 },
  ]),
  updateCompany,
);
router.delete("/:id", isAuthenticated, deleteCompany);
router.get("/:slug", getCompanyBySlug);


export default router;
