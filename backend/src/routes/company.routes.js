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

const router = express.Router();

router.post(
  "/",
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "photos", maxCount: 10 },
  ]),
  createCompany,
);
router.get("/", getCompanies);
router.get("/my-company", getMyCompany);
router.put(
  "/:id",
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "photos", maxCount: 10 },
  ]),
  updateCompany,
);
router.delete("/:id", deleteCompany);
router.get("/:slug", getCompanyBySlug);


export default router;
