import express from "express";
import { register, login, profileUpdate , getUserById} from "../controllers/authControllers.js";
import {upload} from "../middleware/upload.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();
console.log("AUTH ROUTES LOADED");

router.post("/register", register);
router.post("/login", login);
router.get("/user/:id", getUserById);
router.put("/update-profile/:id",
      upload.single("avatar"), 
 profileUpdate);
 router.get("/me", isAuthenticated, (req, res) => {
  res.status(200).json({
    user: req.user,
  });
});

export default router;