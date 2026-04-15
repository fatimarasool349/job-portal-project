import Users from "../models/Users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// REGISTER
export const register = async (req, res) => {
  try {
    const { fullName, email, phone, role, password, confirmPassword } =
      req.body;

    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ errors: { email: "Email already exists" } });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Users.create({
      fullName,
      email,
      phone,
      role,
      password: hashedPassword,
    });

    res.json({ message: "User registered", user:{_id: user._id,
    fullName: user.fullName,
    email: user.email,
    phone: user.phone,
    role: user.role} });
  } catch (err) {
    if (err.name === "ValidationError") {
      const errors = {};

      Object.keys(err.errors).forEach((key) => {
        errors[key] = err.errors[key].message;
      });

      return res.status(400).json({ errors });
    }
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ errors: { confirmPassword: "Passwords do not match" } });
    }

    res.status(500).json({ message: "Server Error" });
  }
};
// LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(404).json({
        errors: {
          email: "Email does not exist",
        },
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ errors:{password: "Invalid password" }});
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    res.json({ message: "Login successful", token, user:{  _id: user._id,
    fullName: user.fullName,
    email: user.email,
    phone: user.phone,
    role: user.role} });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
// profile Update
export const profileUpdate = async (req, res) => {
  try {
    const { id } = req.params;

    const updateData = {
      fullName: req.body.fullName,
      email: req.body.email,
      phone: req.body.phone,
    };

    // ✅ handle image
    if (req.file) {
      updateData.avatar = `http://localhost:5000/uploads/${req.file.filename}`;
    }

    const updatedUser = await Users.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    res.json({
      message: "Profile updated successfully",
      user: updatedUser,
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
