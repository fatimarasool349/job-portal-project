import express from "express";
import {
  getCandidates,
  addCandidate,
  updateCandidate,
  deleteCandidate,
} from "../controllers/candidate.controller.js";

import { isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", isAuthenticated, getCandidates);
router.post("/", isAuthenticated, addCandidate);
router.put("/:id", isAuthenticated, updateCandidate);
router.delete("/:id", isAuthenticated, deleteCandidate);

export default router;