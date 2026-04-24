import Users from "../models/users.model.js";

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

    const updated = await Users.findByIdAndUpdate(id, req.body, { new: true });

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

    const user = await Users.findOneAndUpdate(
      { _id: req.params.id, role: "recruiter" },
      { companyId },
      { new: true },
    ).populate("companyId", "name");;

    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
