import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import LoginPage from "../Pages/Login";
import LandingPage from "../Pages/LandingPage";
import ForgotPassword from "../Pages/ForgotPassword";
import UserProfile from "../Pages/UserProfile";
import FindJob from "../Pages/FindJob";
import ViewDetailPage from "../Pages/ViewDetailPage";
import AppLayout from "../components/layout/AppLayout";
import ApplyForm from "../Pages/ApplyForm";
import CompaniesPage from "../Pages/CompaniesPage";
import Review from "../Pages/Review";
import BookMark from "../Pages/BookMark";
import CompanyJobListing from "../Pages/CompanyJobListing";
import NotificationsPage from "../Pages/NotificationsPage";
import MessagePage from "../Pages/MessagePage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<LandingPage />} />

        {/* User Profile */}
        <Route path="/userprofile" element={<UserProfile />} />
        {/* FindJob */}
        <Route path="/findjob" element={<FindJob />} />
        <Route path="/companies" element={<CompaniesPage />} />

        {/* ViewDetailPages */}
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
      {/* Apply form */}
      <Route
        path="/login/jobseeker"
        element={<LoginPage role="Job Seeker" />}
      />
      <Route path="/login/recruiter" element={<LoginPage role="Recruiter" />} />

      {/* SIGNUP */}
      <Route path="/signup/jobseeker" element={<SignUp role="Job Seeker" />} />
      <Route path="/signup/recruiter" element={<SignUp role="Recruiter" />} />
      <Route path="/signup/admin" element={<SignUp role="Admin" />} />

      {/* forgetPassword */}
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      {/* review page */}
      <Route path="/review/:id" element={<Review />} />
    </Routes>
  );
}

export default AppRoutes;
