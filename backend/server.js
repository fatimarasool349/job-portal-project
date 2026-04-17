import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import router from "./src/routes/authRoutes.js";
import path from "path";
import jobRoutes from "./src/routes/jobRoutes.js";



dotenv.config();
connectDB();


const app = express();

app.use(cors());
app.use(express.json());
app.use("/upload", express.static("upload"));
console.log("AUTH ROUTES MOUNTING");
// routes
app.use("/api/auth", router);

app.use("/api/job", jobRoutes);

app.listen(5000, () => {

  console.log("Server running on port 5000");
});