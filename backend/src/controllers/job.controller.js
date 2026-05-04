import Job from "../models/job.model.js";
import Users from "../models/users.model.js";
import Company from "../models/company.model.js";
import { v4 as uuidv4 } from "uuid";

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
    } = req.body;
    console.log("REQ BODY:", req.body);
    const slug = `${title.toLowerCase().replace(/\s+/g, "-")}-${uuidv4().slice(0, 6)}`;

    console.log("RESPONSIBILITIES:", req.body.responsibilities);
    if (!title || !description) {
      return res.status(400).json({
        message: "Title and description are required",
      });
    }
    const companyId = req.body?.company;
    const company = await Company.findOne({
      _id: companyId,
    });
    if (!company) {
      return res.status(400).json({
        message: "Company not found",
      });
    }
    if (req?.user?.role == "recruiter") {
      if (req?.user?.company == null || req?.user?.company != companyId) {
        return res.status(400).json({
          message: "Company not assigned to recruiter",
        });
      }
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
      company: companyId,
      createdBy: req.user.id,
      slug,
    });

    res.status(201).json({
      message: "Job created successfully",
      job,
    });
  } catch (error) {
    console.log(`Internal Server Error ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};

export const getAllJobs = async (req, res) => {
  try {
    console.log(`getAllJobs user ${JSON.stringify(req.user)}`);

    let criteria = {};
    if (req.user?.role == "recruiter") {
      criteria["company"] = req.user?.company;
    }
    console.log(`getAllJobs criteria ${JSON.stringify(criteria)}`);
    const jobs = await Job.find(criteria)
      .sort({ createdAt: -1 })
      .populate("company")
      .populate("createdBy", "fullName email");

    res.status(200).json({ jobs });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getJobById = async (req, res) => {
  console.log("REQ PARAM ID:", req.params.id);
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
export const getJobBySlug = async (req, res) => {
  const job = await Job.findOne({ slug: req.params.slug })
    .populate("company")
    .populate("createdBy", "fullName email");

  if (!job) return res.status(404).json({ message: "Job not found" });

  res.status(200).json({ job }); 
};

export const getMyJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ company: req.user.companyId });

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

    if (!isAdmin && job.company.toString() !== req.user.company) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await job.deleteOne();

    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
