import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import SignUp from "../pages/SignUp";
import LoginPage from "../pages/Login";
import LandingPage from "../pages/LandingPage";
import ForgotPassword from "../pages/ForgotPassword";
import UserProfile from "../pages/user/UserProfile";
import FindJob from "../pages/user/FindJob";
import ViewDetailPage from "../pages/user/ViewDetailPage";
import AppLayout from "../components/layout/AppLayout";
import ApplyForm from "../pages/user/ApplyForm";
import CompaniesPage from "../pages/user/CompaniesPage";
import Review from "../pages/user/Review";
import BookMark from "../pages/user/BookMark";
import CompanyJobListing from "../pages/user/CompanyJobListing";
import NotificationsPage from "../pages/user/NotificationsPage";
import DashboardNotificationPage from "../pages/admin/DashboardNotificationPage";
import ManageCompany from "../pages/admin/ManageCompany";

import MessagePage from "../pages/user/MessagePage";
import AdminLayout from "../components/layout/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import Logout from "../pages/Logout";
import ManageRecruiter from "../pages/admin/ManageRecuiter";
import ManageCandidate from "../pages/admin/ManageCandidate";
import ManageJobs from "../pages/admin/ManageJob";
import SystemAnalysis from "../pages/admin/SystemAnaylsis";
import ProfilePage from "../pages/admin/ProfilePage";
import JobApplications from "../pages/admin/JobApplications";
import ApplicationDetail from "../pages/admin/ApplicationDetail";
import ReviewsDashboard from "../pages/admin/ReviewsDashboard";
// import ManageUsers from "../pages/admin/ManageUsers";

function AppRoutes() {
  return (
    <Routes>
      {/* for user */}
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<LandingPage />} />

        {/* User Profile */}
        <Route path="/userprofile" element={<UserProfile />} />
        {/* FindJob */}
        <Route path="/findjob" element={<FindJob />} />
        <Route path="/companies" element={<CompaniesPage />} />

        {/* ViewDetailpages */}
        <Route path="/viewdetailpage/:id" element={<ViewDetailPage />}></Route>
        <Route path="/jobs/:jobId/apply" element={<ApplyForm />} />

        {/* CompanyPage job listing page */}
        <Route path="/companies/:id" element={<CompanyJobListing />} />
        {/* Notification Page  */}
        <Route path="/notifications/:tab" element={<NotificationsPage />} />

        {/* Messages Page */}
        <Route path="/messages" element={<MessagePage />} />

        {/* Optional: Dynamic Chat Route */}
        <Route path="/messages/:id" element={<MessagePage />} />

        {/* {BookMark} */}
        <Route path="/bookmark" element={<BookMark />}></Route>
      </Route>
      {/* for admin */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute allowedRoles={["admin", "recruiter"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />

        <Route
          path="recruiters"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <ManageRecruiter />
            </ProtectedRoute>
          }
        />
         <Route
          path="company"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <ManageCompany/>
            </ProtectedRoute>
          }
        />

        <Route
          path="messages/:id"
          element={
            <ProtectedRoute allowedRoles={["recruiter"]}>
              <MessagePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="candidates"
          element={
            <ProtectedRoute allowedRoles={["admin", "recruiter"]}>
              <ManageCandidate />
            </ProtectedRoute>
          }
        />
        <Route
          path="applications/:id"
          element={
            <ProtectedRoute allowedRoles={["admin", "recruiter"]}>
              <ApplicationDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="reviews"
          element={
            <ProtectedRoute allowedRoles={["admin", "recruiter"]}>
              <ReviewsDashboard />
            </ProtectedRoute>
          }
          
        />
        {/* <Route
          path="users"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <ManageUsers />
            </ProtectedRoute>
          }
          
        /> */}
        <Route 
        path= "notifications"
        element= {
          <ProtectedRoute allowedRoles={["admin","recruiter"]}>
            <DashboardNotificationPage/>
          </ProtectedRoute>
        }
        />

        <Route
          path="jobs"
          element={
            <ProtectedRoute allowedRoles={["admin", "recruiter"]}>
              <ManageJobs />
            </ProtectedRoute>
          }
        />

        <Route
          path="analytics"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <SystemAnalysis />
            </ProtectedRoute>
          }
        />

        <Route path="settings" element={<ProfilePage />} />

        <Route
          path="job-applications"
          element={
            <ProtectedRoute allowedRoles={["admin", "recruiter"]}>
              <JobApplications />
            </ProtectedRoute>
          }
        />

        <Route
          path="applications"
          element={
            <ProtectedRoute allowedRoles={["admin", "recruiter"]}>
              <JobApplications />
            </ProtectedRoute>
          }
        />
        {/* <Route path="" element={<Dashboard />} />
        <Route path="recruiters" element={<ManageRecruiter />} />
        <Route path="candidates" element={<ManageCandidate />} />
        <Route path="jobs" element={<ManageJobs />} />
        <Route path="analytics" element={<SystemAnalysis />} />
        <Route path="settings" element={<ProfilePage />} />
        <Route path="job-applications" element={<JobApplications />} /> */}
      </Route>
      {/* Apply form */}
      {/* <Route
        path="/login/jobseeker"
        element={<LoginPage role="Job Seeker" />}
      />
      <Route path="/login/recruiter" element={<LoginPage role="Recruiter" />} />
      <Route path="/login/admin" element={<LoginPage role="Admin" />} /> */}

      {/* SIGNUP */}
      {/* <Route path="/signup/jobseeker" element={<SignUp role="Job Seeker" />} />
      <Route path="/signup/recruiter" element={<SignUp role="Recruiter" />} /> */}
      {/* <Route path="/signup/admin" element={<SignUp role="Admin" />} /> */}
      {/* 
      <Route path="/logout/jobseeker" element={<Logout role="Job Seeker" />} />
      <Route path="/logout/admin" element={<Logout role="Admin" />} /> */}

      <Route path="/login/:role" element={<LoginPage />} />
      <Route path="/signup/:role" element={<SignUp />} />
      <Route path="/logout/:role" element={<Logout />} />

      {/* forgetPassword */}
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      {/* review page */}
      <Route path="/review/:id" element={<Review />} />
    </Routes>
  );
}

export default AppRoutes;
