import Application from "../models/application.model.js";
import Job from "../models/job.model.js";
import Company from "../models/company.model.js";
import User from "../models/users.model.js";
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { sendStatusEmail } from "../templates/sendStatusEmail.js";
import Notification from "../models/notification.model.js";

export const applyJob = async (req, res) => {
  try {
    const {
      jobSlug,
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
    const job = await Job.findOne({ slug: jobSlug }).populate("company");
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Resume file missing" });
    }
    const alreadyApplied = await Application.findOne({
      candidate: req.user?.id,
      job: job._id,
    });

    if (alreadyApplied) {
      return res.status(400).json({
        success: false,
        message: "You already applied for this job.",
      });
    }

    const application = await Application.create({
      job: job._id,
      company: job.company,
      recruiter: job.createdBy,
      candidate: req.user?.id,
      publicId: uuidv4(),
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
    const admin = await User.findOne({ role: "admin" });
    const user = await User.findById(req.user.id);

    const company = await Company.findById(job.company);

    if (!company) {
      return res.status(404).json({
        message: "Company not found",
      });
    }

    if (!company.recruiterId) {
      return res.status(400).json({
        message: "Recruiter not assigned to company",
      });
    }

    // console.log("RECRUITER ID:", company.recruiterId);
    // console.log("APPLICANT ID:", req.user.id);
    // console.log("JOB COMPANY:", job.company);
    // console.log("COMPANY:", company);
    // console.log("RECRUITER ID:", company?.recruiterId);
    // console.log("LOGIN USER:", req.user.id);

    const notifications = [
      {
        receiver: company.recruiterId,
        sender: req.user.id,
        type: "application",
        title: "New Application",
        message: `${user.fullName} applied for ${job.title}`,
        link: "/recruiter/applications",
      },
    ];

    await Notification.insertMany(notifications);

    if (admin) {
      await Notification.create({
        receiver: admin._id,
        sender: req.user.id,
        type: "application",
        title: "New Application",
        message: `${user.fullName} applied for ${job.title} at ${job.company.name}`,
        link: "/admin/applications",
      });
    }
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

export const getMyApplications = async (req, res) => {
  try {
    const userId = req.user?.id;

    const applications = await Application.find({
      candidate: userId,
    })
      .populate({
        path: "job",
        select: "title location jobType",
      })
      .populate({
        path: "company",
        select: "name logo ",
      })
      .populate("recruiter", "fullName email");

    res.json(applications);
  } catch (error) {
    console.error("GET MY APPLICATIONS ERROR:", error);
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
      .populate({
        path: "job",
        populate: {
          path: "company",
          select: "name logo",
        },
      })
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
    console.log("DELETE HIT:", req.params.id);

    const deletedApplication = await Application.findByIdAndDelete(
      req.params.id,
    );

    if (!deletedApplication) {
      return res.status(404).json({
        message: "Application not found",
      });
    }

    res.json({
      success: true,
      id: req.params.id,
      message: "Application deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const updateApplicationStatus = async (req, res) => {
  try {
    const {
      status,
      interviewDate,
      interviewTime,
      interviewMode,
      meetingLink,
      notes,
    } = req.body;

    console.log("CONTROLLER HIT:", req.params.publicId, req.body);

    if (!status) {
      return res.status(400).json({ message: "Status required" });
    }

    const application = await Application.findOne({
      publicId: req.params.publicId,
    });

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    if (application.status === "selected") {
      if (status !== "hired") {
        return res.status(400).json({
          message: "After selected, only hired is allowed",
        });
      }
    }

    // ❗ VALIDATION FIRST (IMPORTANT FIX)
    if (["rejected", "hired"].includes(application.status)) {
      return res.status(400).json({
        message: "Final status cannot be modified",
      });
    }

    application.status = status;
     if (status === "interview scheduled") {
      application.interview = {
        date: interviewDate,
        time: interviewTime,
        mode: interviewMode,
        meetingLink,
        notes,
      };
    }
    await application.save();

    const updatedApplication = await Application.findById(application._id)
      .populate({
        path: "job",
        populate: {
          path: "company",
          select: "name logo",
        },
      })
      .populate("candidate")
      .populate("recruiter");

    console.log("UPDATED APPLICATION:", updatedApplication.status);

    await sendStatusEmail(updatedApplication);

    await Notification.create({
      receiver: updatedApplication.candidate._id,
      sender: req.user.id,
      type: "status_update",
      title: "Application Updated",
      message: `Your application for ${updatedApplication.job.title} at ${updatedApplication.job.company.name} was ${status}`,
      link: `/my-applications`,
    });

    return res.json({
      success: true,
      message: "Status updated successfully",
      application: updatedApplication,
    });
  } catch (err) {
    console.error("STATUS UPDATE ERROR:", err);
    return res.status(500).json({ message: err.message });
  }
};

export const getApplicationById = async (req, res) => {
  try {
    const application = await Application.findOne({
      publicId: req.params.publicId,
    })
      .populate("job")
      .populate("company")
      .populate("candidate");

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.json(application);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const withdrawApplication = async (req, res) => {
  try {
    const { publicId } = req.params;

    const application = await Application.findOne({
      publicId,
      candidate: req.user.id,
    });

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    if (application.status === "selected") {
      return res.status(400).json({
        success: false,
        message: "Selected applications cannot be withdrawn",
      });
    }

    //  Delete application
    await Application.findByIdAndDelete(application._id);

    res.status(200).json({
      success: true,
      message: "Application withdrawn successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
