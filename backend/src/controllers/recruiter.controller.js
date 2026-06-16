import Users from "../models/users.model.js";
import Company from "../models/company.model.js";
import sendEmail from "../utils/sendEmail.js";
import { recruiterSignupEmail } from "../templates/recruiterSignupEmail.js";
import mongoose from "mongoose";

export const getRecruiters = async (req, res) => {
  try {
    const { search, status } = req.query;

    let filter = { role: "recruiter", isDeleted: false };

    if (status && status !== "All") {
      filter.status = status;
    }

    if (search) {
      filter.$or = [
        { fullName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { companyName: { $regex: search, $options: "i" } },
      ];
    }

    const recruiters = await Users.find(filter)
      .populate("companyId", "name")
      .sort({ createdAt: -1 });
    res.json({
      success: true,
      recruiters,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateRecruiter = async (req, res) => {
  try {
    const { id } = req.params;
    if (req.body.companyId === "") {
      return res.status(400).json({
        field: "companyId",
        message: "Please select a company",
      });
    }

    const updated = await Users.findByIdAndUpdate(id, req.body, { new: true });
    console.log("UPDATED USER:", updated);
    console.log("EMAIL FIELD:", updated.email);

    if (req.body.companyId) {
      await Company.findByIdAndUpdate(
        req.body.companyId,
        {
          recruiterId: updated._id,
        },
        { new: true },
      );
    }

    console.log("UPDATED USER:", updated);

    // ✅ ADD EMAIL HERE (after update)
    if (updated) {
      await sendEmail(
        updated.email,
        "Profile Updated",
        `Hi ${updated.fullName}, your recruiter profile was updated successfully.`,
      );
    }

    res.json({
      success: true,
      recruiter: updated,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteRecruiter = async (req, res) => {
  try {
    const { id } = req.params;

    await Users.findByIdAndUpdate(id, {
      isDeleted: true,
    });

    res.json({
      success: true,
      message: "Recruiter deleted",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const toggleRecruiterStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updated = await Users.findByIdAndUpdate(
      id,
      { status },
      { new: true },
    );

    res.json({
      success: true,
      recruiter: updated,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const assignCompanyToRecruiter = async (req, res) => {
  try {
    const { companyId } = req.body;
    if (!companyId) {
      return res.status(400).json({
        field: "companyId",
        message: "Please select a company",
      });
    }

    const user = await Users.findOneAndUpdate(
      { _id: req.params.id, role: "recruiter" },
      { companyId },
      { new: true },
    );

    // Update company
    await Company.findByIdAndUpdate(
      companyId,
      {
        recruiterId: user._id,
      },
      { new: true },
    );

    const populatedUser = await Users.findById(user._id).populate(
      "companyId",
      "name",
    );

    try {
      await sendEmail(
        populatedUser.email,
        "Company Assigned 🏢",
        recruiterSignupEmail(
          populatedUser.fullName,
          populatedUser.companyId.name,
        ),
      );
    } catch (emailErr) {
      console.log("Email failed:", emailErr.message);
    }

    res.json({ success: true, user: populatedUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
