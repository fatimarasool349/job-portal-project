import Job from "../models/job.model.js";

export const createJob = async (req, res) => {
  console.log("CREATE JOB API HIT");

  try {
    const {
      title,
      description,
      status,
      requirements,
      responsibilities,
      salary,
      location,
      jobType,
      experience,
      position,
      company,
    } = req.body;
    console.log("REQ BODY:", req.body);
console.log("RESPONSIBILITIES:", req.body.responsibilities);
    if (!title || !description) {
      return res.status(400).json({
        message: "Title and description are required",
      });
    }

    const job = await Job.create({
      title,
      description,
      requirements,
      responsibilities,
      status,
      salary,
      location,
      jobType,
      experience,
      position,
      company,
      createdBy: req.user.id, // from auth middleware
    });

    res.status(201).json({
      message: "Job created successfully",
      job,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find()
      .sort({ createdAt: -1 })
      .populate("company")
      .populate("createdBy", "fullName email");

    res.status(200).json({ jobs });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id)
      .populate("company")
      .populate("createdBy", "fullName email");
    console.log("POPULATED JOB:", JSON.stringify(job, null, 2));

    console.log("JOB:", job);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json({ job });
  } catch (error) {
    console.log("GET JOB ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

export const getMyJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ createdBy: req.user.id });

    res.status(200).json({ jobs });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateJob = async (req, res) => {
  const isAdmin = req.user.role === "admin";

  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    if (!isAdmin && job.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const {
      title,
      description,
      requirements,
      responsibilities,
      status,
      salary,
      location,
      jobType,
      experience,
      position,
    } = req.body;

    const updateData = {};

    if (title) updateData.title = title;
    if (description) updateData.description = description;
    if (requirements) updateData.requirements = requirements;
    if (responsibilities) updateData.responsibilities = responsibilities;
    if (salary) updateData.salary = salary;
    if (status) updateData.status = status;
    if (location) updateData.location = location;
    if (jobType) updateData.jobType = jobType;
    if (experience) updateData.experience = experience;
    if (position) updateData.position = position;

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        message: "No data provided to update",
      });
    }

    const updatedJob = await Job.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    return res.status(200).json({
      message: "Job updated",
      job: updatedJob,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteJob = async (req, res) => {
  const isAdmin = req.user.role === "admin";

  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    if (!isAdmin && job.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await job.deleteOne();

    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
