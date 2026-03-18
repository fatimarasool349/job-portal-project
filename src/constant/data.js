import Account from "./../assets/icons/Account.png";
import Apply from "./../assets/icons/Apply.png";
import SearchJob from "./../assets/icons/SearchJob.png";
import ProductDesign from "./../assets/icons/ProductDesign.png";
import ReactEngineer from "./../assets/icons/reactEngineer.png";
import Marking from "./../assets/icons/Marketing.png";
import heroImage from "./../assets/Images/HeroImage.png";
import { IoRocketOutline, IoCode } from "react-icons/io5";
import profile from "./../assets/icons/profile.jpg";
import { MdOutlineDescription } from "react-icons/md";
import { MdEventNote } from "react-icons/md";


import {
  MdOutlineQueryStats,
  MdOutlineSecurity,
  MdOutlineDiversity3,
} from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
import { FaBalanceScale } from "react-icons/fa";

//Colors
export const colors = {
  primary: "1D4ED8#",
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

// initialUserData
export const initialUserData = {
  name: "Alex Johnson",
  location: "New York, NY",
  email: "alex.johnson@email.com",
  phone: "+1 (555) 012-3456",
  profilePic: profile,
};

// filter
export const initialFilterData = {
  keyword: "",
  location: "",
  jobType: ["Full-time"],
  experience: "All levels",
  salary: 80,
};

// Skills
export const initialSkills = [
  { name: "JavaScript", color: "primary" },
  { name: "React", color: "primary" },
  { name: "Project Management", color: "primary" },
  { name: "UI Design", color: "primary" },
  { name: "TypeScript", color: "primary" },
  { name: "Figma", color: "primary" },
];

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
export const breadcrumbItems = [{ label: "Jobs", path: "/findjob" }];

//View Detail
export const jobData = [
  {
    id: 1,
    title: "Senior UI/UX Designer",
    type: "Full-time",
    typeColor: "green",
    salary: "$60k - $90k",
    icon: ProductDesign,
    companyId: 1,
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
    skills: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Redux"],
    recruiterResponseTime: "48 hours",
    skillMatch: {
      percentage: 85,
      message:
        "You match 12 out of 14 skills required for this role based on your profile.",
    },
  },
  {
    id: 2,
    title: "Frontend React Developer",
    type: "Remote",
    typeColor: "blue",
    salary: "$60k - $90k",
    icon: ReactEngineer,
    companyId: 2,
    skillMatchPercentage: 78,
    skillsMatched: 10,
    skillsRequired: 13,
    skills: ["React", "CI/CD", "Agile", "Design Patterns"],
    description:
      "PixelSoft Technologies is looking for a passionate React Developer to build modern and scalable web applications used by thousands of users worldwide.",
    responsibilities: [
      "Develop reusable UI components using React and Tailwind CSS.",
      "Integrate REST APIs with frontend applications.",
      "Optimize applications for maximum performance.",
      "Collaborate with backend developers and designers.",
    ],
    requirements: [
      "3+ years experience with React.",
      "Strong JavaScript ES6 knowledge.",
      "Experience with Tailwind CSS.",
      "Understanding of REST APIs and Git.",
    ],
    recruiterResponseTime: "24 hours",

    skillMatch: {
      percentage: 78,
      message:
        "You match 10 out of 13 skills required for this role based on your profile.",
    },
  },
  {
    id: 3,
    title: "Backend Node.js Developer",
    type: "Contract",
    typeColor: "purple",
    salary: "$80k - $100k",
    companyId: 3,
    icon: Marking,
    skillMatchPercentage: 72,
    skillsMatched: 9,
    skillsRequired: 12,
    skills: ["React", "JavaScript", "CI/CD", "Agile", "Design Patterns"],
    description:
      "DataCore Systems is looking for a Backend Node.js Developer to build scalable APIs and maintain high-performance server infrastructure for our data platforms.",
    responsibilities: [
      "Develop scalable REST APIs using Node.js and Express.",
      "Design and optimize MySQL database queries.",
      "Integrate frontend applications with backend services.",
      "Ensure security and performance of backend systems.",
    ],
    requirements: [
      "3+ years experience in Node.js development.",
      "Strong knowledge of Express.js framework.",
      "Experience with MySQL or PostgreSQL.",
      "Understanding of REST APIs and authentication systems.",
    ],

    recruiterResponseTime: "36 hours",
    skillMatch: {
      percentage: 72,
      message:
        "You match 9 out of 12 skills required for this role based on your profile.",
    },
  },
  {
    id: 4,
    title: "Data Analyst",
    type: "Full-time",
    typeColor: "green",
    icon: Marking,
    companyId: 4,
    salary: "$80k - $100k",
    skillMatchPercentage: 80,
    skillsMatched: 3,
    skillsRequired: 5,
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Git",
      "REST APIs",
    ],
    description:
      "Insight Analytics is seeking a Data Analyst who can transform raw data into meaningful insights that help businesses make informed decisions. You will work with large datasets and create reports and dashboards for stakeholders.",
    responsibilities: [
      "Analyze large datasets using SQL and Python.",
      "Create data visualizations and dashboards.",
      "Generate reports for business stakeholders.",
      "Collaborate with product and engineering teams to identify trends.",
    ],
    requirements: [
      "2+ years experience in data analysis.",
      "Strong knowledge of SQL.",
      "Experience with Python or R for data analysis.",
      "Experience with visualization tools like Power BI or Tableau.",
    ],
    recruiterResponseTime: "30 hours",

    skillMatch: {
      percentage: 80,
      message:
        "You match 8 out of 10 skills required for this role based on your profile.",
    },
  },
  {
    id: 5,
    title: "Marketing Strategist",
    type: "Full-time",
    companyId: 5,
    typeColor: "green",
    salary: "$65k - $95k",
    icon: ProductDesign,
    skillMatchPercentage: 82,
    skillsMatched: 3,
    skillsRequired: 5,
    skills: ["Redux", "Git", "REST APIs", "Node.js"],
    description:
      "TechNova Solutions is expanding its design team and is looking for a Senior UI/UX Designer to create intuitive and visually engaging digital products. You will collaborate with engineers and product managers to craft seamless user experiences for our global analytics platform.",

    responsibilities: [
      "Design modern user interfaces for web applications.",
      "Create wireframes, prototypes, and high-fidelity UI designs.",
      "Collaborate with developers to ensure pixel-perfect implementation.",
      "Conduct user research and usability testing to improve product design.",
    ],

    requirements: [
      "4+ years of experience in UI/UX design.",
      "Strong knowledge of Figma, Adobe XD, or Sketch.",
      "Experience designing responsive web applications.",
      "Understanding of user-centered design principles.",
    ],

    recruiterResponseTime: "48 hours",

    skillMatch: {
      percentage: 82,
      message:
        "You match 11 out of 14 skills required for this role based on your profile.",
    },
  },
  {
    id: 7,
    title: "Marketing Strategist",
    type: "Full-time",
    companyId: 5,
    typeColor: "green",
    salary: "$65k - $95k",
    icon: ProductDesign,
    skillMatchPercentage: 82,
    skillsMatched: 3,
    skillsRequired: 5,
    skills: ["Redux", "Git", "REST APIs", "Node.js"],
    description:
      "TechNova Solutions is expanding its design team and is looking for a Senior UI/UX Designer to create intuitive and visually engaging digital products. You will collaborate with engineers and product managers to craft seamless user experiences for our global analytics platform.",

    responsibilities: [
      "Design modern user interfaces for web applications.",
      "Create wireframes, prototypes, and high-fidelity UI designs.",
      "Collaborate with developers to ensure pixel-perfect implementation.",
      "Conduct user research and usability testing to improve product design.",
    ],

    requirements: [
      "4+ years of experience in UI/UX design.",
      "Strong knowledge of Figma, Adobe XD, or Sketch.",
      "Experience designing responsive web applications.",
      "Understanding of user-centered design principles.",
    ],

    recruiterResponseTime: "48 hours",

    skillMatch: {
      percentage: 82,
      message:
        "You match 11 out of 14 skills required for this role based on your profile.",
    },
  },
  {
    id: 6,
    title: "Machine Learning Engineer",
    type: "Remote",
    typeColor: "blue",
    companyId: 6,
    salary: "$80k - $120k",
    icon: ReactEngineer,
    skillMatchPercentage: 88,
    skillsMatched: 14,
    skillsRequired: 16,
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Design Patterns",
    ],

    description:
      "CognitiveAI is seeking a Machine Learning Engineer to develop intelligent models and scalable AI solutions. You will work closely with data scientists and software engineers to design, train, and deploy machine learning models that power advanced analytics and automation systems.",

    responsibilities: [
      "Design and develop machine learning models for real-world applications.",
      "Work with large datasets to train and optimize predictive models.",
      "Deploy ML models into production environments using modern ML pipelines.",
      "Collaborate with cross-functional teams to integrate AI capabilities into products.",
    ],

    requirements: [
      "Strong knowledge of Python and machine learning libraries such as TensorFlow or PyTorch.",
      "Experience with data preprocessing and feature engineering.",
      "Understanding of deep learning and neural networks.",
      "Familiarity with cloud platforms such as AWS, Azure, or Google Cloud.",
    ],
    recruiterResponseTime: "24 hours",

    skillMatch: {
      percentage: 88,
      message:
        "You match 14 out of 16 skills required for this role based on your profile.",
    },
  },
];
// companies data
export const companyData = [
  {
    id: 1,
    name: "TechNova Solutions",
    about1:
      "TechNova Solutions is a pioneer in the cloud infrastructure space, dedicated to building tools that empower developers to create the next generation of digital experiences. Founded with a vision of simplifying complex systems, we have grown into a global leader serving millions of users.",
    about2:
      "Our team is composed of passionate engineers, designers, and problem-solvers who believe in the power of open-source and collaborative innovation. We pride ourselves on our technical excellence and our commitment to building a more connected world",
    postedDate: "2026-03-04",
    businessHours: "10:00 am - 4:00 pm",
    locations: [
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDsStc6gQU3fQqil7f-iEz_rb1H2Zmwr5E6c3Ugmn8X9E_fG32s57zdE2G0xz_uFYCi5H3ZxUc649bsz_OFNaNYcaD4kn375aneqRo-59DHRsZKC4Bh5uybkT9veUJJuAvvn-NFUEI7R63uSPtouNc7eQJ5SHId21u_y7Axnyl_q9C81XJVn6In-jg1Oa8_tu-Z2Ydlu3REUjB7F6YOdnEsGm3VSvJmuXDWJiHAKZF1FAjvqH2mGA-Jn4fRNrYQ8c3zCLsQdFt_7Y7a",
        title: "TechNova HQ",
        address: "123 Innovation Drive, SF",
      },
    ],
    stats: [
      { label: "Founded", value: "2012" },
      { label: "Employees", value: "1k-5k" },
      { label: "Headquarters", value: "San Francisco, CA" },
      { label: "Website", value: "technova.io" },
    ],
    culture: [
      {
        icon: SlEnergy,
        title: "Innovation First",
        description:
          "We push the boundaries of what's possible in cloud computing every day.",
      },
      {
        icon: FaBalanceScale,
        title: "Work-Life Harmony",
        description:
          "We believe great work happens when people live balanced lives.",
      },
      {
        icon: MdOutlineDiversity3,
        title: "Inclusive Diversity",
        description:
          "Our strength comes from diverse perspectives and collaboration.",
      },
    ],
    photos: [
      "https://placeholder.pics/svg/300",
      "https://placeholder.pics/svg/300",
      "https://placeholder.pics/svg/300",
    ],
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZagT5FnsvLCeduh1NObArGSQNCU4xZ6FkKSuLQc7_xVa7DR3TDn4idwQIoebpdSa8DSmUWDmFmuT_xYZJtRCvYap8ZVIwu2Tz64Qg_20Vz0ZU8BjhKfvEbYMYy5rsKZVnjUl_xgeTvjlYogD8yEMO3y-dwZX-EXAxJUhPBzUxCeg_nsHLfJMfXGgSdMaAnO-WI3StcjOjBmClWF7PmY729lxGWOQ68C0SI8Z7BqE4PfsSiYHiuQf0VZLMC5_TnUa140RlNEerdeX9",
    industry: "Cloud Computing",
    size: "1k-5k Emp",
    description:
      "TechNova is a global leader in cloud infrastructure and developer tools. We empower over 2 million developers worldwide.",
    website: "https://technova.io",
    location: "F Block Lahore",
  },
  {
    id: 2,
    name: "PixelSoft Technologies",

    about1:
      "PixelSoft Technologies builds modern SaaS products and scalable web applications for global clients.",
    about2:
      "Our team focuses on performance, clean architecture, and user-friendly design to create impactful digital solutions.",

    postedDate: "2026-03-10",
    businessHours: "9:00 am - 5:00 pm",

    locations: [
      {
        image: "https://placeholder.pics/svg/300",
        title: "PixelSoft HQ",
        address: "Johar Town Lahore",
      },
    ],

    stats: [
      { label: "Founded", value: "2018" },
      { label: "Employees", value: "200+" },
      { label: "Headquarters", value: "Lahore, Pakistan" },
      { label: "Website", value: "pixelsoft.io" },
    ],

    culture: [
      {
        icon: SlEnergy,
        title: "Innovation",
        description: "We encourage developers to experiment and innovate.",
      },
      {
        icon: FaBalanceScale,
        title: "Work Life Balance",
        description: "Flexible schedules and remote friendly culture.",
      },
      {
        icon: MdOutlineDiversity3,
        title: "Diverse Team",
        description: "We believe diverse teams build better products.",
      },
    ],

    photos: [
      "https://placeholder.pics/svg/300",
      "https://placeholder.pics/svg/300",
      "https://placeholder.pics/svg/300",
    ],

    logo: "https://placeholder.pics/svg/100",

    industry: "Software Development",
    size: "200+ Emp",

    description:
      "PixelSoft builds scalable software platforms used by businesses around the world.",

    website: "https://pixelsoft.io",

    location: "Johar Town Lahore",
  },
  {
    id: 3,
    name: "DataCore Systems",

    about1:
      "DataCore Systems builds enterprise data platforms and cloud-based analytics tools used by organizations worldwide.",
    about2:
      "Our engineering teams focus on reliability, security, and scalable architectures that power modern businesses.",

    postedDate: "2026-03-08",
    businessHours: "9:30 am - 6:00 pm",

    locations: [
      {
        image: "https://placeholder.pics/svg/300",
        title: "DataCore Office",
        address: "Gulberg Lahore",
      },
    ],

    stats: [
      { label: "Founded", value: "2015" },
      { label: "Employees", value: "500+" },
      { label: "Headquarters", value: "Lahore, Pakistan" },
      { label: "Website", value: "datacore.io" },
    ],

    culture: [
      {
        icon: SlEnergy,
        title: "Engineering Excellence",
        description: "We prioritize clean architecture and scalable systems.",
      },
      {
        icon: FaBalanceScale,
        title: "Healthy Work Culture",
        description: "Balanced workloads and supportive leadership.",
      },
      {
        icon: MdOutlineDiversity3,
        title: "Team Collaboration",
        description: "Engineers collaborate closely across departments.",
      },
    ],

    photos: [
      "https://placeholder.pics/svg/300",
      "https://placeholder.pics/svg/300",
      "https://placeholder.pics/svg/300",
    ],

    logo: "https://placeholder.pics/svg/100",

    industry: "Software & Data Platforms",
    size: "500+ Emp",

    description:
      "DataCore provides enterprise-grade backend platforms for modern digital businesses.",

    website: "https://datacore.io",

    location: "Gulberg Lahore",
  },
  {
    id: 4,
    name: "Insight Analytics",

    about1:
      "Insight Analytics helps organizations unlock the power of their data through advanced analytics and visualization tools.",
    about2:
      "Our mission is to help companies make smarter decisions using data-driven insights and predictive analytics.",

    postedDate: "2026-03-09",
    businessHours: "9:00 am - 5:30 pm",

    locations: [
      {
        image: "https://placeholder.pics/svg/300",
        title: "Insight Analytics Office",
        address: "DHA Phase 6 Lahore",
      },
    ],

    stats: [
      { label: "Founded", value: "2016" },
      { label: "Employees", value: "300+" },
      { label: "Headquarters", value: "Lahore, Pakistan" },
      { label: "Website", value: "insightanalytics.io" },
    ],

    culture: [
      {
        icon: SlEnergy,
        title: "Data Innovation",
        description: "We push boundaries in analytics and machine learning.",
      },
      {
        icon: FaBalanceScale,
        title: "Work-Life Balance",
        description: "Flexible schedules and supportive management.",
      },
      {
        icon: MdOutlineDiversity3,
        title: "Collaborative Teams",
        description:
          "Cross-functional teams work together to solve data challenges.",
      },
    ],

    photos: [
      "https://placeholder.pics/svg/300",
      "https://placeholder.pics/svg/300",
      "https://placeholder.pics/svg/300",
    ],

    logo: "https://placeholder.pics/svg/100",

    industry: "Data Analytics",
    size: "300+ Emp",

    description:
      "Insight Analytics provides data-driven solutions for modern businesses.",

    website: "https://insightanalytics.io",

    location: "DHA Phase 6 Lahore",
  },
  {
    id: 5,
    name: "BrandLoom",

    about1:
      "BrandLoom is a modern digital branding and marketing company focused on helping businesses build strong online identities. The company specializes in brand strategy, UI/UX design, digital marketing, and creative solutions that help organizations stand out in competitive markets.",

    about2:
      "Our team consists of passionate designers, marketers, and strategists who believe in creativity, innovation, and collaboration. At BrandLoom, we work closely with clients to craft meaningful brand experiences that connect with audiences and drive long-term business growth.",

    postedDate: "2026-03-12",
    businessHours: "10:00 am - 4:00 pm",

    locations: [
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDsStc6gQU3fQqil7f-iEz_rb1H2Zmwr5E6c3Ugmn8X9E_fG32s57zdE2G0xz_uFYCi5H3ZxUc649bsz_OFNaNYcaD4kn375aneqRo-59DHRsZKC4Bh5uybkT9veUJJuAvvn-NFUEI7R63uSPtouNc7eQJ5SHId21u_y7Axnyl_q9C81XJVn6In-jg1Oa8_tu-Z2Ydlu3REUjB7F6YOdnEsGm3VSvJmuXDWJiHAKZF1FAjvqH2mGA-Jn4fRNrYQ8c3zCLsQdFt_7Y7a",
        title: "TechNova HQ",
        address: "123 Innovation Drive, SF",
      },
    ],

    stats: [
      { label: "Founded", value: "2012" },
      { label: "Employees", value: "1k-5k" },
      { label: "Headquarters", value: "San Francisco, CA" },
      { label: "Website", value: "technova.io" },
    ],

    culture: [
      {
        icon: SlEnergy,
        title: "Innovation First",
        description:
          "We constantly push the limits of modern technology and product design.",
      },
      {
        icon: FaBalanceScale,
        title: "Work-Life Harmony",
        description:
          "We encourage balance so employees can do their best work.",
      },
      {
        icon: MdOutlineDiversity3,
        title: "Inclusive Culture",
        description: "Diversity of ideas and people drives our innovation.",
      },
    ],

    photos: [
      "https://placeholder.pics/svg/300",
      "https://placeholder.pics/svg/300",
      "https://placeholder.pics/svg/300",
    ],

    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZagT5FnsvLCeduh1NObArGSQNCU4xZ6FkKSuLQc7_xVa7DR3TDn4idwQIoebpdSa8DSmUWDmFmuT_xYZJtRCvYap8ZVIwu2Tz64Qg_20Vz0ZU8BjhKfvEbYMYy5rsKZVnjUl_xgeTvjlYogD8yEMO3y-dwZX-EXAxJUhPBzUxCeg_nsHLfJMfXGgSdMaAnO-WI3StcjOjBmClWF7PmY729lxGWOQ68C0SI8Z7BqE4PfsSiYHiuQf0VZLMC5_TnUa140RlNEerdeX9",

    industry: "Cloud Computing",
    size: "1k-5k Emp",
    description:
      "TechNova is a global leader in cloud infrastructure and developer tools.",
    website: "https://technova.io",
    location: "F Block Lahore",
  },
  {
    id: 6,
    name: "CognitiveAI",

    about1:
      "CognitiveAI is an artificial intelligence company focused on building smart systems that help businesses make better decisions through data. The company develops advanced machine learning platforms used in healthcare, finance, and enterprise automation.",

    about2:
      "Our team consists of AI researchers, data scientists, and engineers who are passionate about solving complex problems using intelligent algorithms. At CognitiveAI, we believe in innovation, experimentation, and building technology that transforms industries.",

    postedDate: "2026-03-10",
    businessHours: "9:00 am - 5:00 pm",

    locations: [
      {
        image: "https://placeholder.pics/svg/300",
        title: "CognitiveAI Lab",
        address: "Silicon Valley, CA",
      },
    ],

    stats: [
      { label: "Founded", value: "2018" },
      { label: "Employees", value: "200-500" },
      { label: "Headquarters", value: "San Francisco, CA" },
      { label: "Website", value: "cognitiveai.com" },
    ],

    culture: [
      {
        icon: SlEnergy,
        title: "Research Driven",
        description:
          "We encourage innovation and experimentation in AI research.",
      },
      {
        icon: FaBalanceScale,
        title: "Work-Life Balance",
        description:
          "Flexible work environment focused on productivity and well-being.",
      },
      {
        icon: MdOutlineDiversity3,
        title: "Global Talent",
        description: "We believe diversity drives innovation and creativity.",
      },
    ],

    photos: [
      "https://placeholder.pics/svg/300",
      "https://placeholder.pics/svg/300",
      "https://placeholder.pics/svg/300",
    ],

    logo: "https://placeholder.pics/svg/200",
    industry: "Artificial Intelligence",
    size: "200-500 Emp",
    description:
      "CognitiveAI builds intelligent AI platforms that help companies automate decision making and unlock insights from complex data.",
    website: "https://cognitiveai.com",
    location: "Dubai, UAE",
  },
];

// Companies review data
export const companyReviewData = [
  {
    companyId: 1,
    overallRating: 4.2,
    total: 124,
    ratingBar: [
      { title: "Work/Life Balance", rating: 4.5, percent: 85 },
      { title: "Culture & Values", rating: 4.8, percent: 92 },
      { title: "Career Opportunities", rating: 4.0, percent: 78 },
      { title: "Senior Mgmt", rating: 3.8, percent: 70 },
    ],
    list: [
      {
        rating: 5,
        title: "Great place",
        date: "2026-02-20",
        role: "Developer",
        pros: "The tech stack is modern and they actually care about code quality. Great mentorship from senior staff",
        cons: "Can be fast-paced during release cycles, but it's manageable.",
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
  {
    companyId: 2,
    overallRating: 4.4,
    total: 86,

    ratingBar: [
      { title: "Work/Life Balance", rating: 4.6, percent: 88 },
      { title: "Culture & Values", rating: 4.5, percent: 85 },
      { title: "Career Opportunities", rating: 4.2, percent: 80 },
      { title: "Senior Mgmt", rating: 4.0, percent: 76 },
    ],

    list: [
      {
        rating: 5,
        title: "Excellent workplace",
        date: "2026-02-15",
        role: "Frontend Developer",
        pros: "Friendly team and modern tech stack.",
        cons: "Sometimes tight deadlines.",
      },
      {
        rating: 4,
        title: "Good learning environment",
        role: "Junior Developer",
        pros: "Great mentorship and learning opportunities.",
        cons: "Project timelines can be strict.",
      },
    ],
  },
  {
    companyId: 3,
    overallRating: 4.1,
    total: 95,

    ratingBar: [
      { title: "Work/Life Balance", rating: 4.3, percent: 82 },
      { title: "Culture & Values", rating: 4.2, percent: 80 },
      { title: "Career Opportunities", rating: 4.0, percent: 76 },
      { title: "Senior Mgmt", rating: 3.9, percent: 72 },
    ],

    list: [
      {
        rating: 5,
        title: "Great backend team",
        date: "2026-02-18",
        role: "Backend Developer",
        pros: "Strong engineering culture and modern tech stack.",
        cons: "Sometimes heavy workload during deployments.",
      },
      {
        rating: 4,
        title: "Good learning experience",
        role: "Software Engineer",
        pros: "Opportunity to work on large-scale systems.",
        cons: "Limited remote options.",
      },
    ],
  },
  {
    companyId: 4,
    overallRating: 4.3,
    total: 64,

    ratingBar: [
      { title: "Work/Life Balance", rating: 4.5, percent: 86 },
      { title: "Culture & Values", rating: 4.4, percent: 84 },
      { title: "Career Opportunities", rating: 4.2, percent: 80 },
      { title: "Senior Mgmt", rating: 4.1, percent: 78 },
    ],

    list: [
      {
        rating: 5,
        title: "Great place for analysts",
        date: "2026-02-10",
        role: "Data Analyst",
        pros: "Lots of interesting datasets and learning opportunities.",
        cons: "Occasional tight deadlines.",
      },
      {
        rating: 4,
        title: "Supportive team",
        role: "Junior Analyst",
        pros: "Helpful managers and collaborative team.",
        cons: "Limited remote options.",
      },
    ],
  },
  {
    companyId: 5,
    overallRating: 4.3,
    total: 98,

    ratingBar: [
      { title: "Work/Life Balance", rating: 4.6, percent: 87 },
      { title: "Culture & Values", rating: 4.7, percent: 90 },
      { title: "Career Opportunities", rating: 4.1, percent: 80 },
      { title: "Senior Mgmt", rating: 3.9, percent: 75 },
    ],

    list: [
      {
        rating: 5,
        title: "Creative design environment",
        date: "2026-02-22",
        role: "UI Designer",
        pros: "Freedom to experiment and innovate in design.",
        cons: "Deadlines can be tight during releases.",
      },
    ],
  },
  {
    companyId: 6,
    overallRating: 4.5,
    total: 76,

    ratingBar: [
      { title: "Work/Life Balance", rating: 4.4, percent: 85 },
      { title: "Culture & Values", rating: 4.7, percent: 92 },
      { title: "Career Opportunities", rating: 4.5, percent: 88 },
      { title: "Senior Mgmt", rating: 4.1, percent: 80 },
    ],

    list: [
      {
        rating: 5,
        title: "Great AI research environment",
        date: "2026-02-28",
        role: "Data Scientist",
        pros: "Access to large datasets and cutting-edge ML infrastructure.",
        cons: "Fast-paced projects during product launches.",
      },
    ],
  },
];

// view detail tabs
// data.js
export const getTabs = (job) => [
  { id: "description", label: "Job Description" },
  { id: "company", label: "Company" },
  { id: "reviews", label: `Reviews (${companyReviewData.total})` },
];

// Apply form data
export const contactFields = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "e.g. John",
    required: true,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "e.g. Doe",
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "john.doe@example.com",
    required: true,
    pattern: {
      value: /^\S+@\S+$/i,
      message: "Invalid email address",
    },
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "+1 (555) 000-0000",
  },
];

export const professionalLinks = [
  {
    name: "linkedin",
    label: "LinkedIn Profile",
    placeholder: "linkedin.com/in/username",
    icon: "share",
  },
  {
    name: "github",
    label: "GitHub URL",
    placeholder: "github.com/username",
    icon: "code",
  },
];

// companies pages
export const industries = ["Technology", "Finance", "Healthcare", "E-commerce"];

export const ratings = [4, 3, 2];

export const companySizes = [
  "1-50 employees",
  "51-200 employees",
  "201-500 employees",
  "500+ employees",
];

export const companiesData = [
  {
    id: 1,
    name: "TechFlow Solutions",
    industry: "Software Development",
    location: "San Francisco, CA",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEZIl0-Cxj8ykOIUej8BMXVtpNDPVoP7FrJKxDv_fxr07E7qDjycvnh7hTqTMHHtavjYtNM_xmjWjpa6gx_lES9zYKYQMdamJ35fsxqvE0JaYSBuXBhZ195h8V32krFdvT9n40R8U190g4qq3_2U9US-pZ6rVOnH4URVVtiELaHCMLwDVV3CVqy1k0TnLdCTc_DOi0ptN8ZgZlMnagfYKpq1MVJrilqA99JzhvisS3CAQ-fLAAzUME89z5K6Nnu4gKmiBvxdBeus-f",
    logoBg: "bg-blue-50 dark:bg-blue-900/20",
    rating: 4.8,
    businessHours: "10:00 am - 4:00 pm",
    teamAvatars: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBzhe9UHe40e3fmj0mKxJLVDiIaZttlbiIvsebOZkZrLEwG8aPJfBceVE1MO2vvehxog0j2hu4aELIAIP1qAllLzjLcjxKs9l6i0Pvv0Qaj7U4otSntA03tTYG__zktAJ-AgRPyZhOImdlaUJUAcF50VRJw603dCnfJ9zZBIEEL4gspJ76ICi-dho8U1y-VoUzLUCYyqKlycq8-ZbxzZFhxBuJNSxeFSqepdAAk3N1e1M8XJaOZSGY_beUPZOJR_tUIGy1AObrF_pmf",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdIIQq67SUDwe30Ke5ZPbYkjqb1-57yOEIQ05iYmRoHBjwEVQWuaNO81k_WQRtwCw8OatgP_DYD5AJ5UivEhMSymbZzL6XKGA2yNrrfUvCvOulwj42-UHE3zknavKXD5GZXNOTfYvxyhkw9_Q2aElXukNklMJqOGsvu1svVPLpSdWlGr3dF1ACJ4DZLhiWMMEhrD0EPcjMzG8fyxbD5WTPkKvIil3sVCSxOpQCL1s3LsdofrdLvqBSVseFw-f",
      "https://via.placeholder.com/32", // remaining count
    ],
    employees: 2400,
  },
  // ... add more companies
];

//write review
export const defaultValues = {
  title: "",
  review: "",
  pros: "",
  cons: "",
  anonymous: false,
};

// Notification data
export const initialNotifications = [
  {
    id: 1,
    type: "application",
    title: "Application Status Update",
    time: "2 mins ago",
    jobTitle: "Senior UI Designer",
    company: "Google",
    unread: true,
    icon: MdOutlineDescription,
    bgColor: "bg-blue-600/5",
  },
  {
    id: 2,
    type: "interview",
    title: "Interview Invitation",
    time: "4 hours ago",
    jobTitle: "Lead Product Designer",
    company: "Figma",
    unread: false,
    icon: MdEventNote,
    bgColor: "bg-white",
    actions: ["View Details", "Reschedule"],
  },
  {
    id: 3,
    type: "message",
    title: "Message from Sarah Jenkins",
    time: "Yesterday",
    message:
      "Hi! I loved your portfolio. Sarah from Adobe sent you a message regarding your recent application...",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChknGe8rU79LexBF2_rqO1MJX1frOCOqq4YttvjopOfcWd3hkt-_xZ-lGg74x_P3h3in1kHID9qnp1hzQQ9bNvYDxw1QVuUHNYjMpXrDRdf26Vmp-75Cfhg575NzprJAA7mm_S_4uHU6pYgZmfFYcBhQTbvNM2wktSG6EtpKFnmM6IdP2XglYJ0KlS_6NHqRHTA8GW9WQbAt7keeCCL_bHg6KDwPbOorB0y0Vu5mnTBCsXQMeviPI6PQU-tVkOjkxsmSC0kZq5xUqi",
    unread: true,
    icon: null,
    bgColor: "bg-blue-600/5",
  },
];
// notification tabs
export const tabs = ["All Notifications", "Unread", "Applications", "Messages"];
// messageing
export const chats = [
  {
    id: 1,
    name: "Sarah Wilson",
    company: "Google",
    message: "We've reviewed your application...",
    time: "10:45 AM",
    online: true,
    avatar: profile,
    unread: true,
  },
  {
    id: 2,
    name: "James Chen",
    company: "Meta",
    message: "Are you available for a quick call...",
    time: "Yesterday",
    avatar: profile,
  },
];

export const messages = [
  {
    id: 1,
    text: "Hello!",
    sender: "other",
    time: "10:12 AM",
    senderId: 2, // James Chen
    receiverId: 0, 
    date: "2026-03-16",
  },
  { id: 2, text: "Hi 👋", sender: "me", time: "10:13 AM" ,senderId: 0, // me
    receiverId: 2,     date: "2026-03-16",
 },
];
// chat services
// chatService.js

// 👉 CURRENT (no API - mock)
export const sendMessage = async ({ text, file, senderId, receiverId }) => {
  const newMessage = {
    id: Date.now(),
    text,
    file: file || null,
    date: new Date().toISOString(),
    senderId,
    receiverId,
  };

  messages.push(newMessage); // ✅ store in array for now (mock)

  return newMessage;
};
// get messages between current user and selected chat user
export const getMessages = async (currentUserId, chatUserId) => {
  return messages.filter(
    (msg) =>
      (msg.senderId === currentUserId && msg.receiverId === chatUserId) ||
      (msg.senderId === chatUserId && msg.receiverId === currentUserId)
  );
};
