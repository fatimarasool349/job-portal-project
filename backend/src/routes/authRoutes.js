import express from "express";
import { register, login, profileUpdate , getUserById} from "../controllers/authControllers.js";
import {upload} from "../middleware/upload.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user/:id", getUserById);
router.put("/update-profile/:id",
      upload.single("avatar"), 
 profileUpdate);

export default router;