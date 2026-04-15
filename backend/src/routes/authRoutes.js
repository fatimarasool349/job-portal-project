import express from "express";
import { register, login, profileUpdate } from "../controllers/authControllers.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.put("/update-profile/:id",
      upload.single("avatar"), 
 profileUpdate);

export default router;