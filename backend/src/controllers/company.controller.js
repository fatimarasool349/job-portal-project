import Company from "../models/company.model.js";

// CREATE
export const createCompany = async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (error) {
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
    const company = await Company.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(company);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// DELETE
export const deleteCompany = async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params.id);
    res.json({ message: "Company deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};