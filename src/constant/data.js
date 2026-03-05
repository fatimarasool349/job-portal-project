import Account from "./../assets/icons/Account.png";
import Apply from "./../assets/icons/Apply.png";
import SearchJob from "./../assets/icons/SearchJob.png";
import ProductDesign from "./../assets/icons/ProductDesign.png";
import ReactEngineer from "./../assets/icons/reactEngineer.png";
import Marking from "./../assets/icons/Marketing.png";
import heroImage from "./../assets/Images/HeroImage.png";
import { IoRocketOutline, IoCode } from "react-icons/io5";
import { MdOutlineQueryStats, MdOutlineSecurity } from "react-icons/md";

//Colors
export const colors = {
  primary: "#1D4ED8",
  primaryHover: "#1E40AF",
  secondary: "#10B981",
  backgroundLight: "#F9FAFB",
  backgroundDark: "#1E293B",
  error: "#EF4444",
  success: "#22C55E",
};

//Steps Component
export const steps = [
  {
    id: 1,
    icon: Account,
    title: "Create Account",
    description:
      "Set up your professional profile, upload your resume, and let recruiters know you're open to work.",
  },
  {
    id: 2,
    icon: SearchJob,
    title: "Search Job",
    description:
      "Use our advanced filters to find jobs that match your skills, location, and salary expectations.",
  },
  {
    id: 3,
    icon: Apply,
    title: "Apply",
    description:
      "Apply to multiple jobs with a single click and track your application status in real-time.",
  },
];
//Stats Components
export const statsData = [
  { id: 1, value: "50k+", label: "Active Jobs" },
  { id: 2, value: "10k+", label: "Companies" },
  { id: 3, value: "2M+", label: "Monthly Users" },
  { id: 4, value: "98%", label: "Success Rate" },
];

// Job Features components
export const badgeColors = {
  green: "bg-green-100 text-green-700",
  blue: "bg-blue-100 text-blue-700",
  purple: "bg-purple-100 text-purple-700",
};

export const jobsData = [
  {
    id: 1,
    icon: ProductDesign,
    title: "Senior Product Designer",
    company: "DesignFlow Studio",
    location: "London, UK",
    salary: "$80k - $120k",
    type: "Full-time",
    typeColor: "green",
  },
  {
    id: 2,
    icon: ReactEngineer,
    title: "Frontend React Engineer",
    company: "CloudSphere",
    location: "San Francisco, CA",
    salary: "$120k - $160k",
    type: "Remote",
    typeColor: "blue",
  },
  {
    id: 3,
    icon: Marking,
    title: "Marketing Strategist",
    company: "BrandLoom",
    location: "New York, NY",
    salary: "$60k - $90k",
    type: "Contract",
    typeColor: "purple",
  },
  {
    id: 4,
    icon: ReactEngineer,
    title: "Senior Backend Engineer",
    company: "DataPulse Systems",
    location: "Berlin, DE",
    salary: "€90k - €130k",
    type: "Full-time",
    typeColor: "green",
  },
  {
    id: 5,
    icon: Marking,
    title: "Lead UX Researcher",
    company: "FinFlow",
    location: "Remote",
    salary: "$110k - $150k",
    type: "Remote",
    typeColor: "blue",
  },
  {
    id: 6,
    icon: ProductDesign,
    title: "Machine Learning Engineer",
    company: "CognitiveAI",
    location: "Toronto, CA",
    salary: "$140k - $180k",
    type: "Contract",
    typeColor: "purple",
  },
];

// HeroSection
export const heroData = {
  title: "Find Your",
  highlight: "Dream Job",
  subtitle: "Today",
  description:
    "Discover thousands of job opportunities from top-tier tech companies and innovative startups around the world. Your next career breakthrough starts right here.",
  placeholders: {
    job: "Job title or keyword",
    location: "City or remote",
  },
  popularTags: ["Frontend Developer", "Product Designer", "Marketing Manager"],
  image: heroImage,
};

//ApplicationHistory

export const applicationsData = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "TechCorp",
    status: "Interviewing",
    dateApplied: "2025-10-12",
  },
  {
    id: 2,
    role: "Product Designer",
    company: "Designly",
    status: "Applied",
    dateApplied: "2025-10-10",
  },
  {
    id: 3,
    role: "Full Stack Engineer",
    company: "InnovateHQ",
    status: "Rejected",
    dateApplied: "2025-09-25",
  },
  {
    id: 4,
    role: "UX Researcher",
    company: "WebFlow",
    status: "Hired",
    dateApplied: "2025-09-15",
  },
];
export const statusStyles = {
  Applied: "bg-primary/10 text-primary dark:bg-primary/20",
  Interviewing:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  Rejected: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  Hired: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
};

// AsideFilters
export const jobTypes = ["Full-time", "Part-time", "Remote"];
export const experienceLevels = [
  "All levels",
  "Entry Level",
  "Intermediate",
  "Senior",
  "Director/VP",
];
export const clearFilters = () => {
  setFilters({
    keyword: "",
    location: "",
    jobType: [],
    experience: "All levels",
    salary: 0,
  });
};

// job Listing
export const jobsDataDescription = [
  {
    id: 1,
    title: "Senior UI/UX Designer",
    company: "TechFlow Systems",
    location: "San Francisco, CA",
    type: "Full-time",
    salaryLabel: "$120k - $160k / year",
    icon: IoRocketOutline,
    iconBg: "bg-blue-600/10",
    iconColor: "text-blue-600",
    textColor: "text-blue-600",

    description:
      "We are looking for a creative UI/UX Designer to join our product team. You will create beautiful and functional interfaces for our global user base.",
  },
  {
    id: 2,
    title: "Lead Frontend Developer",
    company: "BrightFuture AI",
    location: "Remote",
    type: "Remote",
    salaryLabel: "$140k - $190k / year",
    icon: IoCode,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    textColor: "text-orange-600",

    description:
      "Join our AI-driven startup to lead frontend development efforts using React and modern UI technologies.",
  },
  {
    id: 3,
    title: "Marketing Analyst",
    company: "DataWave",
    location: "New York, NY",
    type: "Part-time",
    salaryLabel: "$60 - $85 / hour",
    icon: MdOutlineQueryStats,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    textColor: "text-purple-600",
    description:
      "Support our marketing team by analyzing campaign performance and delivering actionable insights.",
  },
  {
    id: 4,
    title: "Security Engineer",
    company: "SecureCloud",
    location: "Austin, TX",
    type: "Full-time",
    salaryLabel: "$130k - $175k / year",
    icon: MdOutlineSecurity,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    textColor: "text-red-600",

    description:
      "Develop and implement advanced security measures to protect our cloud infrastructure and applications.",
  },
];

// BreadCrumbs
export const breadcrumbItems = [
  { label: "Jobs", path: "/findjob" },
  { label: "Senior Software Engineer" }, // Last item, no path
];

//View Detail
export const jobData = {
  title: "Senior UI/UX Designer",
  type: "Full-time",
  icon: ProductDesign,
  skillMatchPercentage: 85,
  skillsMatched: 12,
  skillsRequired: 14,
  description:
    "TechNova Solutions is looking for a Senior Software Engineer to join our Core UI team. You will be responsible for building high-performance, accessible, and scalable user interfaces that power our industry-leading analytics platform. We are looking for someone who is passionate about modern JavaScript/TypeScript, React, and building seamless user experiences",
  responsibilities: [
    "Architect and develop complex UI features using React, TypeScript, and Tailwind CSS.",
    "Collaborate with designers and product managers to translate Figma mockups into interactive components.",
    "Optimize application performance for maximum speed and scalability across various devices.",
    "Lead the implementation of our new internal Design System components.",
  ],
  requirements: [
    "5+ years of experience in frontend software engineering.",
    "Strong proficiency in JavaScript (ES6+), TypeScript, and React ecosystems.",
    "Expertise with CSS-in-JS or modern utility-first frameworks like Tailwind CSS.",
    "Familiarity with state management libraries (Redux, Zustand, or TanStack Query).",
  ],
  company: {
    name: "TechNova Solutions",
    about1:
      "TechNova Solutions is a pioneer in the cloud infrastructure space, dedicated to building tools that empower developers to create the next generation of digital experiences. Founded with a vision of simplifying complex systems, we have grown into a global leader serving millions of users.",
    about2: "Our team is composed of passionate engineers, designers, and problem-solvers who believe in the power of open-source and collaborative innovation. We pride ourselves on our technical excellence and our commitment to building a more connected world",
    postedDate: "2026-03-04",
    stats: [
      { label: "Founded", value: "2012" },
      { label: "Employees", value: "1k-5k" },
      { label: "Headquarters", value: "San Francisco, CA" },
      { label: "Website", value: "technova.io" },
    ],
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZagT5FnsvLCeduh1NObArGSQNCU4xZ6FkKSuLQc7_xVa7DR3TDn4idwQIoebpdSa8DSmUWDmFmuT_xYZJtRCvYap8ZVIwu2Tz64Qg_20Vz0ZU8BjhKfvEbYMYy5rsKZVnjUl_xgeTvjlYogD8yEMO3y-dwZX-EXAxJUhPBzUxCeg_nsHLfJMfXGgSdMaAnO-WI3StcjOjBmClWF7PmY729lxGWOQ68C0SI8Z7BqE4PfsSiYHiuQf0VZLMC5_TnUa140RlNEerdeX9",
    industry: "Cloud Computing",
    size: "1k-5k Emp",
    description:
      "TechNova is a global leader in cloud infrastructure and developer tools. We empower over 2 million developers worldwide.",
    website: "https://technova.io",
    location: "F Block Lahore",
  },
  recruiterResponseTime: "48 hours",
  reviews: {
    overallRating: 4.2,
    total: 124,
    breakdown: {
      "Work/Life Balance": 4.5,
      "Culture & Values": 4.8,
      "Career Opportunities": 4.0,
      "Senior Mgmt": 3.8,
    },
    list: [
      {
        rating: 5,
        title: "Great place",
        role: "Developer",
        pros: "Flexible",
        cons: "Deadlines",
      },
      {
        rating: 4,
        title: "Good culture",
        role: "Manager",
        pros: "Teamwork",
        cons: "Long hours",
      },
    ],
  },
  skillMatch: {
    percentage: 85,
    message:
      "You match 12 out of 14 skills required for this role based on your profile.",
  },
};
