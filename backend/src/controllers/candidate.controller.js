import Candidate from "../models/candidate.model.js";
import mongoose from "mongoose";


// ✅ GET ALL CANDIDATES
export const getCandidates = async (req, res) => {
  try {
    const { role, userId } = req.user;

    let candidates;

    if (role === "admin") {
      candidates = await Candidate.find();
    } else {
      candidates = await Candidate.find({ recruiter_id: userId });
    }

    res.status(200).json(candidates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ ADD CANDIDATE
export const addCandidate = async (req, res) => {
  try {
    const { name, email, position, status } = req.body;

    const newCandidate = new Candidate({
      name,
      email,
      position,
      status,
      recruiter_id: req.user.userId,
    });

    await newCandidate.save();

    res.status(201).json(newCandidate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ UPDATE CANDIDATE
export const updateCandidate = async (req, res) => {
  try {
    const { id } = req.params; 

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const candidate = await Candidate.findById(id);

    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    if (
      req.user.role !== "admin" &&
      candidate.recruiter_id.toString() !== req.user.userId
    ) {
      return res.status(403).json({ message: "Not allowed" });
    }

    const allowedUpdates = {
      name: req.body.name,
      email: req.body.email,
      position: req.body.position,
      status: req.body.status,
    };

    const updated = await Candidate.findByIdAndUpdate(
      id,
      allowedUpdates,
      { new: true }
    );

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCandidate = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const candidate = await Candidate.findById(id);

    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    if (
      req.user.role !== "admin" &&
      candidate.recruiter_id.toString() !== req.user.userId
    ) {
      return res.status(403).json({ message: "Not allowed" });
    }

    await Candidate.findByIdAndDelete(id);

    res.status(200).json({ message: "Candidate deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
