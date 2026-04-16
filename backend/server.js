import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import router from "./src/routes/authRoutes.js";
import path from "path";


dotenv.config();
connectDB();


const app = express();

app.use(cors());
app.use(express.json());
app.use("/upload", express.static("upload"));
// routes
app.use("/api/auth", router);

app.listen(5000, () => {

  console.log("Server running on port 5000");
});