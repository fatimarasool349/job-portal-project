import {
  Home,
  Users,
  Briefcase,
  Building,
  BarChart,
  Settings,
  FileText,

} from "lucide-react";
// side bar item
export const menuItems = [
  {
    name: "Dashboard",
    icon: Home,
    path: "/dashboard",
  },
  {
    name: "Manage Users",
    icon: Users,
    path: "/users",
  },
  {
    name: "Manage Recruiters",
    icon: Building,
    path: "/recruiters",
  },
  {
    name: "Manage Jobs",
    icon: Briefcase,
    path: "/jobs",
  },
  {
    name: "System Analytics",
    icon: BarChart,
    path: "/analytics",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

// admin footer data
export const appName = "JobPortal Admin Dashboard";
 export const  links = [
    { name: "Privacy Policy", url: "#" },
    { name: "Support", url: "#" },
  ]

  // dashboard stat
   export const stats = [
    { title: "Total Users", value: "24,512", icon: Users, change: 12, isPositive: true, color: "blue" },
    { title: "Total Recruiters", value: "1,280", icon: Building, change: 8, isPositive: true, color: "purple" },
    { title: "Total Jobs", value: "4,832", icon: Briefcase, change: 2, isPositive: false, color: "orange" },
    { title: "Total Applications", value: "12,403", icon: FileText, change: 15, isPositive: true, color: "teal" },
  ];
  // dashboard activity
  export const activities = [
    {
      title: "New User Registered",
      description: "Alex created account",
      time: "2 minutes ago",
      icon: Users,
      color: "blue"
    },
    {
      title: "New Job Posted",
      description: "Company posted job",
      time: "1 hour ago",
      color: "orange",
      icon: Briefcase,
    },
  ];
// dashboard action
  export const actions = [
    { label: "Manage Users", icon: Users, primary: true, onClick: () => alert("Users") },
    { label: "Manage Jobs", icon: Briefcase, primary: false, onClick: () => alert("Jobs") },
  ];

//   navbar title
export const titles = {
    "/admin": "Dashboard Overview",
    "/admin/users": "Manage Users",
    "/admin/jobs": "Manage Jobs",
  };

 export  const colorMap = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
  orange: { bg: 'bg-orange-100', text: 'text-orange-600' },
  teal: { bg: 'bg-teal-100', text: 'text-teal-600' },
};