import express from "express";
import {
  getRecruiters,
  updateRecruiter,
  deleteRecruiter,
  toggleRecruiterStatus,
  assignCompanyToRecruiter
} from "../controllers/recruiter.controller.js";


const router = express.Router();
console.log("RECRUITER ROUTES LOADED");
router.get("/test", (req, res) => {
  console.log("TEST ROUTE HIT");
  res.json({ ok: true });
});

router.get("/", getRecruiters);
router.patch("/:id/status", toggleRecruiterStatus);
router.put("/:id/assign-company", (req, res, next) => {
  console.log("🟢 ROUTE MATCHED assign-company");
  next();
}, assignCompanyToRecruiter);
router.put("/:id", updateRecruiter);
router.delete("/:id", deleteRecruiter);
;



export default router;