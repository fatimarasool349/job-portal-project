import Application from "../models/application.model.js";
import Job from "../models/job.model.js";
import Company from "../models/company.model.js";
import mongoose from "mongoose";

export const applyJob = async (req, res) => {
  try {
    const {
      jobId,
      firstName,
      lastName,
      email,
      phone,
      resume,
      portfolio,
      linkedin,
      github,
      coverLetter,
      candidate,
    } = req.body;
    // find job to get recruiter
    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Resume file missing" });
    }

    const application = await Application.create({
      job: jobId,
      company: job.company,
      recruiter: job.createdBy,
      candidate: req.user?.id,
      firstName,
      lastName,
      email,
      phone,
      resume: req.file?.path || "dummy.pdf",
      github,
      portfolio,
      linkedin,
      coverLetter,
    });
    console.log("USER:", req.candidate);

    res.status(201).json({
      message: "Application submitted successfully",
      application,
    });
  } catch (error) {
    console.error("APPLY ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

export const getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find()
      .populate("job")
      .populate("recruiter", "fullName email")
      .populate("candidate", "fullName email");

    res.json(applications);
  } catch (error) {
    console.error("GET ALL APPLICATIONS ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

export const getRecruiterApplications = async (req, res) => {
  try {
    const companyId = req.user?.company;
    if (!companyId) {
      return res.status(400).json({ message: "Company not found in user" });
    }

    const applications = await Application.find({
      company: new mongoose.Types.ObjectId(companyId),
    })
      .populate("job")
      .populate("candidate", "fullName email")
      .populate("recruiter", "fullName email");

    res.json(applications);
  } catch (error) {
    console.error("GET RECRUITER APPLICATIONS ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteApplication = async (req, res) => {
  try {
    await Application.findByIdAndDelete(req.params.id);

    res.json({ message: "Application deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;
    console.log("CONTROLLER HIT:", req.params.id, req.body);
    console.log("ID RECEIVED:", req.params.id);
    if (!status) {
      return res.status(400).json({ message: "Status required" });
    }


    const application = await Application.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true },
    );

    res.json(application);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
