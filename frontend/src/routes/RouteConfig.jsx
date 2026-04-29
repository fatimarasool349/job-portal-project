import { lazy } from "react";
import { USER_ROLES } from "../constants/roles";

// Eagerly loaded layouts
import AppLayout from "../components/layout/AppLayout";
import AdminLayout from "../components/layout/AdminLayout";

// Eagerly loaded auth pages
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import ForgotPassword from "../pages/ForgotPassword";
import LandingPage from "../pages/LandingPage";

// Error pages
import NotFound from "../pages/NotFound";
import Unauthorized from "../pages/Unauthorized";

// Lazily load user pages (code splitting)
const UserProfile = lazy(() => import("../pages/user/UserProfile"));
const FindJob = lazy(() => import("../pages/user/FindJob"));
const ViewDetailPage = lazy(() => import("../pages/user/ViewDetailPage"));
const ApplyForm = lazy(() => import("../pages/user/ApplyForm"));
const CompaniesPage = lazy(() => import("../pages/user/CompaniesPage"));
const Review = lazy(() => import("../pages/user/Review"));
const BookMark = lazy(() => import("../pages/user/BookMark"));
const CompanyJobListing = lazy(() => import("../pages/user/CompanyJobListing"));
const NotificationsPage = lazy(() => import("../pages/user/NotificationsPage"));
const MessagePage = lazy(() => import("../pages/user/MessagePage"));

// Lazily load admin pages (code splitting)
const Dashboard = lazy(() => import("../pages/admin/Dashboard"));
const ManageRecruiter = lazy(() => import("../pages/admin/ManageRecuiter"));
const ManageCompany = lazy(() => import("../pages/admin/ManageCompany"));
const ManageCandidate = lazy(() => import("../pages/admin/ManageCandidate"));
const ManageJobs = lazy(() => import("../pages/admin/ManageJob"));
const SystemAnalysis = lazy(() => import("../pages/admin/SystemAnaylsis"));
const ProfilePage = lazy(() => import("../pages/admin/ProfilePage"));
const JobApplications = lazy(() => import("../pages/admin/JobApplications"));
const ApplicationDetail = lazy(() => import("../pages/admin/ApplicationDetail"));
const ReviewsDashboard = lazy(() => import("../pages/admin/ReviewsDashboard"));
const DashboardNotificationPage = lazy(() =>
  import("../pages/admin/DashboardNotificationPage")
);

/**
 * Public route configuration
 * Routes accessible without authentication
 */
export const publicRoutes = [
  {
    path: "/",
    element: <LandingPage />,
    layout: <AppLayout />,
  },
  {
    path: "/login/:role",
    element: <Login />,
  },
  {
    path: "/signup/:role",
    element: <SignUp />,
  },
  {
    path: "/logout/:role",
    element: <Logout />,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />,
  },
];

/**
 * User route configuration
 * Routes accessible to authenticated users (requires USER_ROLES.CANDIDATE role)
 */
export const userRoutes = [
  {
    path: "/",
    layout: <AppLayout />,
    children: [
      {
        path: "userprofile",
        element: <UserProfile />,
      },
      {
        path: "findjob",
        element: <FindJob />,
      },
      {
        path: "companies",
        element: <CompaniesPage />,
      },
      {
        path: "companies/:id",
        element: <CompanyJobListing />,
      },
      {
        path: "viewdetailpage/:id",
        element: <ViewDetailPage />,
      },
      {
        path: "jobs/:jobId/apply",
        element: <ApplyForm />,
      },
      {
        path: "bookmark",
        element: <BookMark />,
      },
      {
        path: "notifications/:tab",
        element: <NotificationsPage />,
      },
      {
        path: "messages",
        element: <MessagePage />,
      },
      {
        path: "messages/:id",
        element: <MessagePage />,
      },
      {
        path: "review/:id",
        element: <Review />,
      },
    ],
  },
];

/**
 * Admin route configuration
 * Routes accessible to admin and recruiter roles
 */
export const adminRoutes = [
  {
    path: "/dashboard",
    layout: <AdminLayout />,
    allowedRoles: [USER_ROLES.ADMIN, USER_ROLES.RECRUITER],
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "recruiters",
        element: <ManageRecruiter />,
        allowedRoles: [USER_ROLES.ADMIN],
      },
      {
        path: "company",
        element: <ManageCompany />,
        allowedRoles: [USER_ROLES.ADMIN],
      },
      {
        path: "candidates",
        element: <ManageCandidate />,
        allowedRoles: [USER_ROLES.ADMIN, USER_ROLES.RECRUITER],
      },
      {
        path: "applications",
        element: <JobApplications />,
        allowedRoles: [USER_ROLES.ADMIN, USER_ROLES.RECRUITER],
      },
      {
        path: "applications/:id",
        element: <ApplicationDetail />,
        allowedRoles: [USER_ROLES.ADMIN, USER_ROLES.RECRUITER],
      },
      {
        path: "reviews",
        element: <ReviewsDashboard />,
        allowedRoles: [USER_ROLES.ADMIN, USER_ROLES.RECRUITER],
      },
      {
        path: "notifications",
        element: <DashboardNotificationPage />,
        allowedRoles: [USER_ROLES.ADMIN, USER_ROLES.RECRUITER],
      },
      {
        path: "jobs",
        element: <ManageJobs />,
        allowedRoles: [USER_ROLES.ADMIN, USER_ROLES.RECRUITER],
      },
      {
        path: "analytics",
        element: <SystemAnalysis />,
        allowedRoles: [USER_ROLES.ADMIN],
      },
      {
        path: "settings",
        element: <ProfilePage />,
      },
      {
        path: "messages/:id",
        element: <MessagePage />,
        allowedRoles: [USER_ROLES.RECRUITER],
      },
    ],
  },
];

/**
 * Error route configuration
 */
export const errorRoutes = [
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

/**
 * All routes combined
 */
export const allRoutes = [
  ...publicRoutes,
  ...userRoutes,
  ...adminRoutes,
  ...errorRoutes,
];
