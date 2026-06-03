import { lazy } from "react";
import { USER_ROLES } from "../constants/roles";

// Layouts
import AppLayout from "../components/layout/AppLayout";
import AdminLayout from "../components/layout/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";

// Auth pages
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import ForgotPassword from "../pages/ForgotPassword";
import LandingPage from "../pages/LandingPage";

// Error pages
import NotFound from "../pages/NotFound";
import Unauthorized from "../pages/Unauthorized";
import { PUBLIC_ROUTES, USER_ROUTES, ADMIN_ROUTES } from "../constants/routes";

// User pages (lazy)
const UserProfile = lazy(() => import("../pages/user/UserProfile"));
const FindJob = lazy(() => import("../pages/user/FindJob"));
const ViewDetailPage = lazy(() => import("../pages/user/ViewDetailPage"));
const ApplyForm = lazy(() => import("../pages/user/ApplyForm"));
const CompaniesPage = lazy(() => import("../pages/user/CompaniesPage"));
const Review = lazy(() => import("../pages/user/Review"));
const BookMark = lazy(() => import("../pages/user/BookMark"));
const CompanyJobListing = lazy(() => import("../pages/user/CompanyJobListing"));
const NotificationsPage = lazy(() => import("../pages/user/NotificationsPage"));
const MyApplicationsPage = lazy(() => import("../pages/user/MyApplications"));
const MessagePage = lazy(() => import("../pages/user/MessagePage"));
const UserApplicationDetail = lazy(() => import("../pages/user/UserApplicationDetail"));
const UserNotificationPage = lazy(() => import("../pages/Notifications"));
// Admin pages (lazy)
const Dashboard = lazy(() => import("../pages/admin/Dashboard"));
const PendingApproval = lazy(() => import("../pages/admin/PendingApproval"));
const BlockedPage = lazy(() => import("../pages/admin/BlockedPage"));
const ManageRecruiter = lazy(() => import("../pages/admin/ManageRecuiter"));
const ManageCompany = lazy(() => import("../pages/admin/ManageCompany"));
const ManageCandidate = lazy(() => import("../pages/admin/ManageCandidate"));
const ManageJobs = lazy(() => import("../pages/admin/ManageJob"));
const SystemAnalysis = lazy(() => import("../pages/admin/SystemAnaylsis"));
const ProfilePage = lazy(() => import("../pages/admin/ProfilePage"));
const ManageJobApplications = lazy(() => import("../pages/admin/ManageJobApplications"));
const ApplicationDetail = lazy(() => import("../pages/admin/ApplicationDetail"));
const ReviewsDashboard = lazy(() => import("../pages/admin/ReviewsDashboard"));
const DashboardNotificationPage = lazy(() =>
  import("../pages/admin/DashboardNotificationPage")
);

/* ================= PUBLIC ROUTES ================= */
export const publicRoutes = [
  {
    path: PUBLIC_ROUTES.HOME,
    element: <AppLayout />, 
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: PUBLIC_ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: PUBLIC_ROUTES.SIGNUP,
    element: <SignUp />,
  },
  {
    path: PUBLIC_ROUTES.LOGOUT,
    element: <Logout />,
  },
  {
    path: PUBLIC_ROUTES.FORGOT_PASSWORD,
    element: <ForgotPassword />,
  },
];

/* ================= USER ROUTES ================= */
export const userRoutes = [
  {
    path: PUBLIC_ROUTES.HOME,
    element: <AppLayout />, 
    children: [
      { path: USER_ROUTES.PROFILE, element: <UserProfile /> },
      { path: USER_ROUTES.FIND_JOBS, element: <FindJob /> },
      { path: USER_ROUTES.COMPANIES, element: <CompaniesPage /> },
      { path: USER_ROUTES.COMPANY_JOBS, element: <CompanyJobListing /> },
      { path: USER_ROUTES.JOB_DETAIL, element: <ViewDetailPage /> },
      { path: USER_ROUTES.APPLY_JOB, element: <ApplyForm /> },
      { path: USER_ROUTES.BOOKMARKS, element: <BookMark /> },
      { path: USER_ROUTES.NOTIFICATIONS, element: <UserNotificationPage /> },
      { path: USER_ROUTES.MESSAGES, element: <MessagePage /> },
      { path: USER_ROUTES.APPLICATIONS, element: <MyApplicationsPage /> },
      { path: USER_ROUTES.APPLICATION_DETAIL, element: <UserApplicationDetail /> },
      { path: USER_ROUTES.MESSAGE_DETAIL, element: <MessagePage /> },
      { path: USER_ROUTES.REVIEW, element: <Review /> },
    ],
  },
];

/* ================= ADMIN ROUTES ================= */
export const adminRoutes = [
  {
    element: (<ProtectedRoute allowedRoles={["admin", "recruiter"]}>
        <AdminLayout />
      </ProtectedRoute>), 
    children: [
      { path: ADMIN_ROUTES.DASHBOARD, index: true, element: <Dashboard /> },
      { path: ADMIN_ROUTES.PENDING_APPROVAL, element: <PendingApproval /> },
      { path: ADMIN_ROUTES.BLOCKED, element: <BlockedPage /> },
      { path: ADMIN_ROUTES.RECRUITERS, element: <ManageRecruiter /> },
      { path: ADMIN_ROUTES.COMPANIES, element: <ManageCompany /> },
      { path: ADMIN_ROUTES.CANDIDATES, element: <ManageCandidate /> },
      { path: ADMIN_ROUTES.APPLICATIONS, element: <ManageJobApplications /> },
      { path: ADMIN_ROUTES.APPLICATION_DETAIL, element: <ApplicationDetail /> },
      { path: ADMIN_ROUTES.REVIEWS, element: <ReviewsDashboard /> },
      { path: ADMIN_ROUTES.NOTIFICATIONS, element: <UserNotificationPage /> },
      { path: ADMIN_ROUTES.JOBS, element: <ManageJobs /> },
      { path: ADMIN_ROUTES.ANALYTICS, element: <SystemAnalysis /> },
      { path: ADMIN_ROUTES.SETTINGS, element: <ProfilePage /> },
      { path: ADMIN_ROUTES.MESSAGES + "/:id", element: <MessagePage /> },
    ],
  },
];

/* ================= ERROR ROUTES ================= */
export const errorRoutes = [
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "/pending",
    element: <PendingApproval />,
  },
  {
    path: "/blocked",
    element: <BlockedPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

/* ================= ALL ROUTES ================= */
export const allRoutes = [
  ...publicRoutes,
  ...userRoutes,
  ...adminRoutes,
  ...errorRoutes,
];