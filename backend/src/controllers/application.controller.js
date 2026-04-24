import Application from "../models/application.model.js";
import Job from "../models/job.model.js";

export const applyJob = async (req, res) => {
  try {
    const {
      jobId,
      firstName,
      lastName,
      email,
      phone,
      portfolio,
      linkedin,
      coverLetter,
      candidate,
    } = req.body;

    // find job to get recruiter
    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    const application = await Application.create({
      job: jobId,
      recruiter: job.createdBy, // 👈 IMPORTANT
      candidate: req.user?.id, // if logged in
      firstName,
      lastName,
      email,
      phone,
      resume: req.file?.path,
      portfolio,
      linkedin,
      coverLetter,
    });

    res.status(201).json({
      message: "Application submitted successfully",
      application,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find()
      .populate("job")
      .populate("recruiter", "name email");

    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRecruiterApplications = async (req, res) => {
  try {
    const recruiterId = req.user.id;

    const applications = await Application.find({
      recruiter: recruiterId,
    }).populate("job");

    res.json(applications);
  } catch (error) {
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
