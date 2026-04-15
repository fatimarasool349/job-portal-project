// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const Users = require("./src/models/Users.js");
// require("dotenv").config();
// app.use(cors());
// app.use(express.json());
// mongoose.connect(process.env.MONGODB_URI)
// .then(() => console.log("MongoDB connected"))
// .catch(err => console.log("DB connection error:", err));

// app.post("/api/auth/register", async (req, res) => {
//   try {
//     const { fullName, email, phone, role, password } = req.body;

//     const existingUser = await Users.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ errors: { email: "Email already exists" } });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await Users.create({
//       fullName,
//       email,
//       phone,
//       role,
//       password: hashedPassword,
//     });

//     res.json({ message: "User registered successfully", user });
//   } catch (err) {
//     if (err.name === "ValidationError") {
//       const errors = {};
//       for (const field in err.errors) {
//         errors[field] = err.errors[field].message; // field-specific message
//       }
//       return res.status(400).json({ errors });
//     }
//     res.status(500).json({ error: err.message });
//   }
// });
// app.post("/api/auth/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid password" });
//     }

// const token = jwt.sign(
//   {
//     id: user._id,
//     email: user.email,
//     role: user.role,
//   },
//   process.env.JWT_SECRET,
//   { expiresIn: "1d" }
// );

// res.json({
//   message: "Login successful",
//   token,
//   user,
// });  } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// app.listen(5000, () => {
//   console.log(`Server is running on port 5000`);
// });
