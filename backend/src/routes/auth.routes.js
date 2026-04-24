import express from "express";
import {
  register,
  login,
  profileUpdate,
  getUserById,
} from "../controllers/auth.controller.js";
import { upload } from "../middleware/upload.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();
console.log("AUTH ROUTES LOADED");

router.post("/register", register);
router.post("/login", login);
router.get("/user/:id", getUserById);
router.put("/update-profile/:id", upload.single("profileImage"), profileUpdate);
router.get("/me", isAuthenticated, (req, res) => {
  console.log("ME ROUTE WORKING");

res.json({
  _id: req.user.id,
  role: req.user.role,
});});

export default router;
