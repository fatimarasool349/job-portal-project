import express from "express";
import {
  register,
  login,
  profileUpdate,
  getUserById,
  resetPassword,
  forgotPassword,
} from "../controllers/auth.controller.js";
import { upload } from "../middleware/upload.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";
const publicAuthRoutes = express.Router();
const protectedAuthRoutes = express.Router();
const router = express.Router();

console.log("AUTH ROUTES LOADED");

publicAuthRoutes.post("/register", register);
publicAuthRoutes.post("/login", login);

protectedAuthRoutes.get("/user/:id", getUserById);
protectedAuthRoutes.put(
  "/update-profile/:id",
  upload.single("profileImage"),
  profileUpdate,
);
protectedAuthRoutes.get("/me", (req, res) => {
  res.json({
    _id: req.user.id,
    role: req.user.role,
  });
});
router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);
export {publicAuthRoutes, protectedAuthRoutes, router};
