import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import LoginPage from "../Pages/Login";
import LandingPage from "../Pages/LandingPage";
import ForgotPassword from "../Pages/ForgotPassword";
import UserProfile from "../Pages/User/UserProfile";
import FindJob from "../Pages/User/FindJob";
import ViewDetailPage from "../Pages/User/ViewDetailPage";
import AppLayout from "../components/layout/AppLayout";
import ApplyForm from "../Pages/User/ApplyForm";
import CompaniesPage from "../Pages/User/CompaniesPage";
import Review from "../Pages/User/Review";
import BookMark from "../Pages/User/BookMark";
import CompanyJobListing from "../Pages/User/CompanyJobListing";
import NotificationsPage from "../Pages/User/NotificationsPage";
import MessagePage from "../Pages/User/MessagePage";
import AdminLayout from "../components/layout/AdminLayout";
import Dashboard from "../Pages/Admin/Dashboard";
import Logout from "../Pages/Logout"

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
      {/* for admin */}
      <Route path= "/dashboard" element = {<AdminLayout/>}>
      <Route path = "" element = {<Dashboard/>} />
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

<Route path = "/logout/jobseeker" element = {<Logout role ="Job Seeker"/>}/>
      {/* forgetPassword */}
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      {/* review page */}
      <Route path="/review/:id" element={<Review />} />
    </Routes>
  );
}



export default AppRoutes;
