import express from "express";
import {
  createCompany,
  getCompanies,
  getCompany,
  updateCompany,
  deleteCompany,
} from "../controllers/company.controller.js";

const router = express.Router();
console.log("✅ Company routes loaded");

router.post("/", createCompany);
router.get("/", getCompanies);
router.get("/:id", getCompany);
router.put("/:id", updateCompany);
router.delete("/:id", deleteCompany);

export default router;