import Company from "../models/company.model.js";
import fs from "fs";
import path from "path";

// CREATE
export const createCompany = async (req, res) => {
  try {
    let logoPath = null;
    let photosPaths = [];

    if (req.files?.logo?.[0]) {
      logoPath = `/upload/company/${req.files.logo[0].filename}`;
    }

    if (req.files?.photos) {
      photosPaths = req.files.photos.map(
        (file) => `/upload/photos/${file.filename}`,
      );
    }

    const stats = req.body.stats ? JSON.parse(req.body.stats) : [];
    const culture = req.body.culture ? JSON.parse(req.body.culture) : [];

    const company = await Company.create({
      name: req.body.name,
      industry: req.body.industry,
      location: req.body.location,
      website: req.body.website,
      about1: req.body.about1,
      about2: req.body.about2,
      size: req.body.size,
      businessHours: req.body.businessHours,

      stats,
      culture,
      logo: logoPath,
      photos: photosPaths, 
    });

    res.status(201).json(company);
  } catch (error) {
    console.log("CREATE COMPANY ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

// GET ALL
export const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find().sort({ createdAt: -1 });
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ONE
export const getCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    res.json(company);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
export const updateCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    const updateData = {
      name: req.body.name,
      industry: req.body.industry,
      location: req.body.location,
      website: req.body.website,
      about1: req.body.about1,
      about2: req.body.about2,
      size: req.body.size,
      businessHours: req.body.businessHours,
    };

    if (req.body.stats) {
      try {
        updateData.stats = JSON.parse(req.body.stats);
      } catch {
        updateData.stats = [];
      }
    }

    if (req.body.culture) {
      try {
        updateData.culture = JSON.parse(req.body.culture);
      } catch {
        updateData.culture = [];
      }
    }

    if (req.files?.photos) {
      try {
        updateData.photos = req.files.photos.map(
          (file) => `/upload/photos/${file.filename}`,
        );
      } catch {
        updateData.photos = [];
      }
    }

    if (req.file) {
      if (company.logo && !company.logo.startsWith("data:image")) {
        const oldPath = path.join(process.cwd(), company.logo);

        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }

      updateData.logo = `/upload/company/${req.file.filename}`;
    }

    const updatedCompany = await Company.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true,
      },
    );

    return res.status(200).json(updatedCompany);
  } catch (error) {
    console.log("UPDATE COMPANY ERROR:", error);
    return res.status(500).json({
      message: error.message || "Server Error",
    });
  }
};

// DELETE
export const deleteCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    if (company.logo) {
      const filePath = path.join(
        process.cwd(),
        "upload",
        "company",
        path.basename(company.logo),
      );

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await Company.findByIdAndDelete(req.params.id);

    res.json({ message: "Company deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
