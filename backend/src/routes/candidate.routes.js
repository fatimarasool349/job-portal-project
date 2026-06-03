import express from "express";
import {
  getCandidates,
  addCandidate,
  updateCandidate,
  deleteCandidate,
} from "../controllers/candidate.controller.js";

const router = express.Router();

router.get("/", getCandidates);
router.post("/", addCandidate);
router.put("/:id", updateCandidate);
router.delete("/:id", deleteCandidate);

export default router;