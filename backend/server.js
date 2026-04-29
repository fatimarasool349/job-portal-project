import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import {publicAuthRoutes, protectedAuthRoutes} from "./src/routes/auth.routes.js";
import path from "path";
import jobRoutes from "./src/routes/job.routes.js";
import candidateRoutes from "./src/routes/candidate.routes.js"
import companyRoutes from "./src/routes/company.routes.js";
import userRoutes from "./src/routes/user.routes.js"
import recruiterRoutes from "./src/routes/recruiter.routes.js"
import applicationRoutes from "./src/routes/application.routes.js"
import { isAuthenticated } from "./src/middleware/authMiddleware.js";
import reviewRoutes from "./src/routes/review.routes.js";





dotenv.config();
connectDB();


const app = express();

app.use(cors({
  origin: "*",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: ["GET", "POST", "PUT", "DELETE","PATCH", "OPTIONS"]
}));
app.use(express.json());


app.use("/upload", express.static(path.join(process.cwd(), "upload")));

app.get("/api/healthcheck", (req, res) => {
  res.json({ message: "Job portal backend is working" });
});
// PUBLIC routes
app.use("/api/auth", publicAuthRoutes);


// Apply authentication middleware to ALL routes below this
app.use(isAuthenticated);

// PROTECTED routes
app.use("/api/auth", protectedAuthRoutes);

app.use("/api/job", jobRoutes);
app.use("/api/candidate", candidateRoutes);
app.use("/api/company", companyRoutes)
app.use("/api/users", userRoutes);
app.use("/api/recruiters", recruiterRoutes);
app.use("/api/application", applicationRoutes);
app.use("/api/reviews",reviewRoutes)

console.log("ALL ROUTES MOUNTED");




app.listen(5000, () => {

  console.log("Server running on port 5000");
});


