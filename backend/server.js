import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import router from "./src/routes/auth.routes.js";
import path from "path";
import jobRoutes from "./src/routes/job.routes.js";
import candidateRoutes from "./src/routes/candidate.routes.js"
import companyRoutes from "./src/routes/company.routes.js";
import userRoutes from "./src/routes/user.routes.js"
import recruiterRoutes from "./src/routes/recruiter.routes.js"
import applicationRoutes from "./src/routes/application.routes.js"




dotenv.config();
connectDB();


const app = express();

app.use(cors());
app.use(express.json());


app.use((req, res, next) => {
  console.log("➡️ REQUEST:", req.method, req.url);
  next();
});

app.use("/upload", express.static(path.join(process.cwd(), "upload")));
console.log("AUTH ROUTES MOUNTING");
app.get("/api/users/test", (req, res) => {
  res.json({ message: "Users API working" });
});
// routes
app.use("/api/auth", router);

app.use("/api/job", jobRoutes);
app.use("/api/candidate", candidateRoutes);
app.use("/api/company", companyRoutes)
app.use("/api/users", userRoutes);

app.use("/api/recruiters", (req, res, next) => {
  next();
}, recruiterRoutes);
app.use("/api/application", applicationRoutes)




app.listen(5000, () => {

  console.log("Server running on port 5000");
});


