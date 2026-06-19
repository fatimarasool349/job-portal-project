import Job from "../models/job.model.js";
import Users from "../models/users.model.js";
import Application from "../models/application.model.js";
import Review from "../models/review.model.js";
import icons from "lucide-react";
import { ADMIN_ROUTES } from "../../../frontend/src/constants/routes.js";

export const getDashboardData = async (req, res) => {
  try {
    const userId = req.user.id;
    const role = req.user.role;
    const companyId = req.user.company;
    const isAdmin = role === "admin";
    const isRecruiter = role === "recruiter";
    const filter = isAdmin ? {} : { company: companyId };

    const jobsPerMonth = await Job.aggregate([
      {
        $match: isAdmin ? {} : { company: companyId },
      },
      {
        $group: {
          _id: { $month: "$createdAt" },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    const jobIds = await Job.find(
      isAdmin ? {} : { company: companyId },
    ).distinct("_id");

    const applicationsPerMonth = await Application.aggregate([
      {
        $match: isAdmin ? {} : { job: { $in: jobIds } },
      },
      {
        $group: {
          _id: { $month: "$createdAt" },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    const jobsByCategory = await Job.aggregate([
      {
        $match: isAdmin ? {} : { company: companyId },
      },
      {
        $group: {
          _id: "$jobType", 
          count: { $sum: 1 },
        },
      },
    ]);
    const now = new Date();
    const lastMonth = new Date();
    lastMonth.setMonth(now.getMonth() - 1);
    const topCategories = await Job.aggregate([
      {
        $match: isAdmin ? {} : { company: companyId },
      },
      {
        $group: {
          _id: "$jobType", // make sure this field exists
          openings: { $sum: 1 },
          avgSalary: { $avg: "$salary" },
        },
      },
      {
        $sort: { openings: -1 },
      },
      {
        $limit: 5,
      },
    ]);

    const currentMonthData = await Job.aggregate([
      {
        $match: {
          ...(!isAdmin && { company: companyId }),
          createdAt: {
            $gte: new Date(now.getFullYear(), now.getMonth(), 1),
          },
        },
      },
      {
        $group: {
          _id: "$jobType",
          count: { $sum: 1 },
        },
      },
    ]);

    const lastMonthData = await Job.aggregate([
      {
        $match: {
          ...(!isAdmin && { company: companyId }),
          createdAt: {
            $gte: new Date(lastMonth.getFullYear(), lastMonth.getMonth(), 1),
            $lt: new Date(now.getFullYear(), now.getMonth(), 1),
          },
        },
      },
      {
        $group: {
          _id: "$jobType",
          count: { $sum: 1 },
        },
      },
    ]);
    const formattedCategories = topCategories.map((item) => {
      const current = currentMonthData.find((c) => c._id === item._id);
      const last = lastMonthData.find((l) => l._id === item._id);

      const currentCount = current ? current.count : 0;
      const lastCount = last ? last.count : 0;

      let trend = 0;

      if (lastCount === 0) {
        trend = currentCount > 0 ? 100 : 0;
      } else {
        trend = ((currentCount - lastCount) / lastCount) * 100;
      }

      return {
        name: item._id,
        openings: item.openings,
        salary: Math.round(item.avgSalary || 0),
        trend: `${trend.toFixed(1)}%`,
        up: trend >= 0,
      };
    });
    // Stats
    const stats = [
      {
        title: "Total Jobs",
        value: await Job.countDocuments(filter),
        icon: "Briefcase",
        color: "blue",
        for: ["admin", "recruiter"],
      },
      {
        title: "Total Recruiters",
        value: await Users.countDocuments({
          role: "recruiter",
          isDeleted: { $ne: true },
        }),
        icon: "Users",
        color: "teal",
        for: ["admin"],
      },
      {
        title: "Applications",
        value: await Application.countDocuments(filter),
        icon: "FileText",
        color: "purple",
        for: ["admin", "recruiter"],
      },
      {
        title: "Reviews",
        value: await Review.countDocuments(filter),
        icon: "Star",
        color: "orange",
        for: ["admin", "recruiter"],
      },
    ];

    // Actions
    const actions = [
      {
        title: "Post Job",
        link: ADMIN_ROUTES.JOBS,
        icon: "Briefcase",
        for: ["admin", "recruiter"],
      },
      {
        title: "Manage Users",
        icon: "Users",
        link: ADMIN_ROUTES.CANDIDATES,
        for: ["admin"],
      },
    ];

    // Activities
    const jobsRaw = await Job.find(filter)
      .sort({ createdAt: -1 })
      .limit(5)
      .populate("company", "name");
    const jobActivities = jobsRaw.map((job) => ({
      title: "New Job Posted",
      description: `${job.title} at ${job.company?.name || "Company"}`,
      time: job.createdAt,
      icon: "Briefcase",
      color: "blue",
    }));
    const activitiesRaw = await Application.find(filter)
      .sort({ createdAt: -1 })
      .limit(5)
      .populate("candidate", "fullName")
      .populate("job", "title");
    const activities = [
      ...activitiesRaw.map((item) => ({
        title: "New Application",
        description: `${item.candidate?.fullName || "User"} applied`,
        time: item.createdAt,
        icon: "FileText",
        color: "purple",
      })),

      ...jobActivities,
    ].sort((a, b) => new Date(b.time) - new Date(a.time));

    res.json({
      stats,
      actions,
      activities,
      charts: {
        jobsPerMonth,
        applicationsPerMonth,
        jobsByCategory,
        topCategories: formattedCategories,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
