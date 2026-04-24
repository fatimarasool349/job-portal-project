import Users from "../models/users.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";

// REGISTER
export const register = async (req, res) => {
  try {
    const { fullName, email, phone, role, password, companyId } = req.body;

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
      status: role === "recruiter" ? "pending" : "active",
      companyId: role === "recruiter" ? companyId || null : null,
    });

    res.json({
      message: "User registered",
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        role: user.role,
        status: user.status,
        companyId: user.companyId,
      },
    });
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
    console.log("LOGIN IMAGE:", user.profileImage);

    if (!user) {
      return res.status(404).json({
        errors: {
          email: "Email does not exist",
        },
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ errors: { password: "Invalid password" } });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        role: user.role,
        profileImage: user.profileImage || null,
      },
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const profileUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const { currentPassword, newPassword } = req.body;

    const user = await Users.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const updateData = {
      fullName: req.body.fullName,
      email: req.body.email,
      phone: req.body.phone,
    };

    if (req.file?.filename) {
      if (user.profileImage) {
        const oldPath = path.join(process.cwd(), user.profileImage.replace(/^\//, ""));
        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }

      updateData.profileImage = `/upload/profile/${req.file.filename}`;
    }

    if (newPassword) {
      if (!currentPassword) {
        return res.status(400).json({
          message: "Current password is required",
        });
      }

      const isMatch = await bcrypt.compare(
        currentPassword,
        user.password
      );

      if (!isMatch) {
        return res.status(400).json({
          message: "Current password is incorrect",
        });
      }

      updateData.password = await bcrypt.hash(newPassword, 10);
    }

    const updatedUser = await Users.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    }).select("-password");

    return res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Server Error",
    });
  }
};
export const getUserById = async (req, res) => {
  const user = await Users.findById(req.params.id).select("-password");

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json({ user });
};
