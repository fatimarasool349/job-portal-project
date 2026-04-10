import {
  Home,
  Users,
  Briefcase,
  Building,
  BarChart,
  Settings,
  FileText,
} from "lucide-react";
import { MdRateReview } from "react-icons/md";
import { useNavigate } from "react-router";
// side bar item
// export const sidebarItems = [
//   {
//     name: "Dashboard",
//     icon: Home,
//     path: "/dashboard",
//   },
//   {
//     name: "Manage Users",
//     icon: Users,
//     path: "/dashboard/candidates",
//   },
//   {
//     name: "Manage Recruiters",
//     icon: Building,
//     path: "/dashboard/recruiters",
//   },
//   {
//     name: "Manage Jobs",
//     icon: Briefcase,
//     path: "/dashboard/jobs",
//   },
//   {
//     name: "System Analytics",
//     icon: BarChart,
//     path: "/dashboard/analytics",
//   },
//   {
//     name: "Settings",
//     icon: Settings,
//     path: "/dashboard/settings",
//   },
// ];
export const sidebarItems = [
  {
    name: "Dashboard",
    icon: Home,
    path: "/dashboard",
    roles: ["admin", "recruiter"], // both
  },
  {
    name: "Manage Users",
    icon: Users,
    path: "/dashboard/candidates",
    roles: ["admin", "recruiter"], // both
  },
  {
    name: "Manage Recruiters",
    icon: Building,
    path: "/dashboard/recruiters",
    roles: ["admin"], // only admin
  },
  {
    name: "Manage Jobs",
    icon: Briefcase,
    path: "/dashboard/jobs",
    roles: ["admin", "recruiter"], // both
  },
    {
    name: "Applications",
    icon: FileText,
    path: "/dashboard/job-applications",
    roles: ["admin", "recruiter"], // both
  },
   {
    name: "User Reviews",
    icon: MdRateReview,
    path: "/dashboard/reviews",
    roles: ["admin", "recruiter"], // both
  },
  {
    name: "System Analytics",
    icon: BarChart,
    path: "/dashboard/analytics",
    roles: ["admin"], // only admin
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
    roles: ["admin", "recruiter"], // both
  },

];
// export const sidebarItems = {
//   admin: [
//     {
//       name: "Dashboard",
//       icon: Home,
//       path: "/admin/dashboard",
//     },
//     {
//       name: "Manage Users",
//       icon: Users,
//       path: "/admin/candidates",
//     },
//     {
//       name: "Manage Recruiters",
//       icon: Building,
//       path: "/admin/recruiters",
//     },
//     {
//       name: "Manage Jobs",
//       icon: Briefcase,
//       path: "/admin/jobs",
//     },
//     {
//       name: "System Analytics",
//       icon: BarChart,
//       path: "/admin/analytics",
//     },
//     {
//       name: "Settings",
//       icon: Settings,
//       path: "/admin/settings",
//     },
//   ],

//   recruiter: [
//     {
//       name: "Dashboard",
//       icon: Home,
//       path: "/recruiter/dashboard",
//     },
//     {
//       name: "My Jobs",
//       icon: Briefcase,
//       path: "/recruiter/jobs",
//     },
//     {
//       name: "Applicants",
//       icon: Users,
//       path: "/recruiter/applicants",
//     },
//     {
//       name: "Settings",
//       icon: Settings,
//       path: "/recruiter/settings",
//     },
//   ],
// };

// admin footer data
export const appName = "JobPortal Admin Dashboard";
export const links = [
  { name: "Privacy Policy", url: "#" },
  { name: "Support", url: "#" },
];

// dashboard stat
export const stats =[
    
        {
          title: "Total Applicants",
          value: "24,512",
          icon: Users,
          change: 12,
          isPositive: true,
          color: "blue",
          for: ["admin"], // only for admin
        },
        {
          title: "Total Recruiters",
          value: "1,280",
          icon: Building,
          change: 8,
          isPositive: true,
          color: "purple",
          for: ["admin"], // only for admin
        },
        {
          title: "Total Jobs",
          value: "4,832",
          icon: Briefcase,
          change: 2,
          isPositive: false,
          color: "orange",
          for: ["admin"], // only for admin

        },
        {
          title: "Total reviews",
          value: "1,240",
          icon: MdRateReview ,
          change: 15,
          isPositive: true,
          color: "teal",
          for: ["admin"], // only for admin
        },
        {
          title: "Total Jobs",
          value: "24",
          icon: Briefcase,
          change: 2,
          isPositive: true,
          color: "orange",
          for: ["recruiter"], // only for recruiter
        },
        {
          title: "Total Applications",
          value: "12",
          icon: FileText,
          change: 5,
          isPositive: true,
          color: "blue",
          for: ["recruiter"], // only for recruiter
        },
        {
          title: "Total reviews",
          value: "140",
          icon: MdRateReview ,
          change: 15,
          isPositive: true,
          color: "teal",
          for: ["recruiter"], // only for recruiter
        },
]
// dashboard activity
export const activities =
   [
        {
          title: "New User Registered",
          description: "Alex created account",
          time: "2 minutes ago",
          icon: Users,
          color: "blue",
          for: ["admin"], // only for admin
        },
        {
          title: "New Job Posted",
          description: "Company posted job",
          time: "1 hour ago",
          icon: Briefcase,
          color: "orange",
          for: ["recruiter", "admin"], // only for recruiter and admin
        },
      ];

// dashboard action
export const actions = [
  {
    label: "Manage Users",
    icon: Users,
    primary: true,
    path: "/dashboard/candidates",
    for: ["admin"], // only admin
  },
  {
    label: "Manage Jobs",
    icon: Briefcase,
    primary: false,
    path: "/dashboard/jobs",
    for: ["recruiter", "admin"], // both can see
  },
];

//   navbar title

export const initialApplications = [
  {
    id: 1,
    name: "Julianne Davenport",
    email: "j.davenport@design.co",
    phone: "03001234567",
    position: "Designer",
    status: "Pending",
    recruiter_id: 101,
  },
  {
    id: 2,
    name: "Marcus Whitmore",
    email: "marcus@tech.io",
    phone: "03111234567",
    position: "Engineer",
    status: "Approved",
    recruiter_id: 2,
  },
];

export const ApplicationData = {
    id: 1,
    name: "Julianne Davenport",
    role: "Lead Product Designer",
    email: "j.davenport@design.co",
    phone: "+1 (555) 012-3456",
    location: "New York, NY",
    bio: "Lead Product Designer with 8+ years experience...",
    status: "Pending",
    portfolio: "https://julianne.design",
    linkedin: "https://linkedin.com/in/juliannedavenport",
    timeline: [
    {
      title: "Application Submitted",
      desc: "Candidate applied for the job",
      time: "2 days ago",
    },
    {
      title: "Viewed by Recruiter",
      desc: "Recruiter reviewed application",
      time: "1 day ago",
    },
    {
      title: "Interview Scheduled",
      desc: "Interview set for next week",
      time: "Today",
    },
  ],
  };
   export const userReviews = [
    {
      id: 1,
      company: "TechFlow Systems",
      title: "Challenging but rewarding",
      rating: 4,
      review: "Innovative projects...",
      pro: "Flexibility",
      con: "Fast pace",
      anonymous: true,
      date: "Oct 14, 2023",
    },
    {
      id: 2,
      company: "Global Dynamics",
      title: "Great benefits",
      rating: 5,
      review: "A paragraph is a group of related sentences that form a distinct unit of writing, focusing on one central idea or topic. It typically consists of a topic sentence, supporting evidence or details, and a concluding sentence that bridges to the next idea. Paragraphs organize writing and provide structure for",
      pro: "Benefits",
      con: "Hierarchy",
      anonymous: false,
      date: "Oct 12, 2023",
    },
  ];
const role = localStorage.getItem("role")?.trim().toLowerCase()
export const titles = {
  "/dashboard": "Dashboard Overview",
  "/dashboard/candidates":
    role === "Recruiter" ? "Candidates" : "Manage Candidates",
  "/dashboard/jobs": "Manage Jobs",
  "/dashboard/recruiters": "Manage Recruiters",
  "/dashboard/job-applications": "Job Applications",
  "/dashboard/analytics": "System Analytics",
  "/dashboard/reviews": "User Reviews",
  "/dashboard/settings": "Settings",
};

export const colorMap = {
  blue: { bg: "bg-blue-100", text: "text-blue-600" },
  purple: { bg: "bg-purple-100", text: "text-purple-600" },
  orange: { bg: "bg-orange-100", text: "text-orange-600" },
  teal: { bg: "bg-teal-100", text: "text-teal-600" },
};

export const initialRecruiterData = [
  {
    id: 1,
    company: "TechFlow Systems",
    name: "Jane Cooper",
    email: "jane.cooper@techflow.com",
    status: "Active",
  },
  {
    id: 2,
    company: "CloudSync Inc.",
    name: "Robert Fox",
    email: "robert@cloudsync.io",
    status: "Active",
  },
  {
    id: 3,
    company: "Starlight Global",
    name: "Cameron Williamson",
    email: "cameron.w@starlight.co",
    status: "Inactive",
  },
  {
    id: 4,
    company: "MetaLogistics",
    name: "Guy Hawkins",
    email: "guy.h@metalog.com",
    status: "Active",
  },
];

export const initialCandidates = [
  {
    id: 1,
    name: "Sarah Jenkins",
    position: "Senior Frontend Engineer",
    email: "sarah.j@techcorp.com",
    phone: "+1 (555) 123-4567",
    status: "Active",
    recruiter_id: 101, // 🔥 VERY IMPORTANT
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBpB3njQQDafkC0a4Y5hPoVF1F80UL_rwsablKUo7GZGPK9ucTGrQiAIvoRxHPkU9cMHEs_opMDlk8kD7JsktjPGz8I6ueYP3xgFiFfXNBtoDNt0pQpPBG46DCk4rnpgqAhQXOUvqpbXLOxUlHAMm_lB7D8lPtWf5XaBLqYWmT4CUtSWZ8vEv6O--ZFeH9lXGI7DFjl0B-l9c4egr2qoINzWtUo3H4L9LqA4fh4YqaUEFIQ4vNBWcAmQdZiC0S6gzRpM4r2JfJko-Cm",
  },
  {
    id: 2,
    name: "David Miller",
    position: "Product Designer",
    email: "d.miller@creative.co",
    phone: "+1 (555) 987-6543",
    status: "Pending",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDgPSyc5WJQWBue3uZ4ihE-CzrB8f8_Uys4ZDboGfYXoOe-uBeGg5t-uK6pT1-T7TFv6jBP_9f_esW62mSU8y4j9JCnjkMNMzcC0Ft0uhPmbWH8D8zeRLLhDGoSdUSw9QM0GN_g3ei6dYjYQ48LMi2ok48So6yknjQQJArXIe8AWIGVvHe34R7j9hOO_3eWdzdSPe11VscMqsoo5-Krtr5f1VMmYnfxMarceU8r-7u8hYpWgvEuU6tC7i3xYQsO1P6lyGKnpUotBeyb",
  },
];

export const initialJobs = [
  {
    id: 1,
    title: "Senior Product Designer",
    company: "TechCorp Systems",
    location: "San Francisco",
    type: "full-time",
    status: "Active",
    recruiter_id: 101, // 🔥 VERY IMPORTANT
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Global Stream",
    location: "Remote",
    type: "remote",
    status: "Pending",
  },
];

// category table data
export const categoryTableData = [
  {
    name: "Software Development",
    openings: "1,240",
    salary: "$95,000",
    trend: "12%",
    up: true,
  },
  {
    name: "Digital Marketing",
    openings: "854",
    salary: "$62,000",
    trend: "8.4%",
    up: true,
  },
  {
    name: "Data Science",
    openings: "620",
    salary: "$105,000",
    trend: "2.1%",
    up: false,
  },
];
// bar chart data
export const barChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Jobs Posted",
      data: [450, 590, 800, 810, 560, 550],
      backgroundColor: "#2463EB",
      borderRadius: 6,
    },
  ],
};
// line chart data

export const lineChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Applications",
      data: [2100, 2400, 1900, 2800, 3200, 2900, 3100],
      borderColor: "#2463EB",
      backgroundColor: "rgba(36,99,235,0.1)",
      tension: 0.4,
      fill: true,
    },
  ],
};

// pie chart data
export const pieChartData = {
  labels: ["Job Seekers", "Recruiters"],
  datasets: [
    {
      data: [18444, 6148],
      backgroundColor: ["#2463EB", "#60A5FA"],
    },
  ],
};

// admin profile page data
// src/constant/admindata.js

export const adminProfileData = {
  fullName: "Alex Rivera",
  email: "alex.rivera@jobportal.com",
  phone: "+1 (555) 000-0000",
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBs0h0p0JxvaWG_ZWzL_bxgMtP1Wpwaj-w08SKllyyfD7Jxn-QioB3udjNGimRl6D4MHfEU--r8B8vMN6ncAUE9HO57rFs3mvL2I5r8hGeJajjYKqNyLaVxQmxqGjDDk1ga6Zb4o3ABkHh6k_S-Huf8qW7f-gqfny9ICQ6FLhcE5Z5Z9owaT-rdcF0ZHbvku9nZLwQkodUx2b-6qyJhBB454cUq8DGyF0t-trdWfRPCWuJ9EzFo6ghW_bOthveteZjEuanYqCv8MnQv",
};

export const getStatusStyle = (status) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "approved":
        return "bg-green-100 text-green-700";
      case "rejected":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };