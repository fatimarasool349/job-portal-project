import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignUp from "../Pages/SignUp";
import LoginPage from "../Pages/Login";
import LandingPage from "../Pages/LandingPage";
import ForgotPassword from "../Pages/ForgotPassword";
import UserProfile from "../Pages/UserProfile";
import FindJob from "../Pages/FindJob";
import ViewDetailPage from "../Pages/ViewDetailPage";
import AppLayout from "../components/layout/AppLayout";
import ApplyForm from "../components/ViewDetail/ApplyForm";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout/>}>
      <Route path="/" element={<LandingPage />} />
      
      {/* User Profile */}
      <Route path="/userprofile" element={<UserProfile />} />
      {/* FindJob */}
      <Route path="/findjob" element={<FindJob />} />

      {/* ViewDetailPages */}
      <Route path="/viewdetailpage" element={<ViewDetailPage />}></Route>
          <Route path="/applyform" element={<ApplyForm/>} />

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
      
    </Routes>
  );
}

export default AppRoutes;
