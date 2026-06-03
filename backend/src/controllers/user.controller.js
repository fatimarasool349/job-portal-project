import User from "../models/users.model.js";

// GET ALL JOBSEEKERS (for admin)
export const getAllJobseekers = async (req, res) => {
  try {
    const jobseekers = await User.find({ role: "jobseeker" });

    res.status(200).json({
      success: true,
      users: jobseekers,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateJobseeker = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteJobseeker = async (req, res) => {
  try {
    const { id } = req.params;

    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createJobseeker = async (req, res) => {
  try {
    const user = new User({
      ...req.body,
      role: "jobseeker",
    });

    await user.save();

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};