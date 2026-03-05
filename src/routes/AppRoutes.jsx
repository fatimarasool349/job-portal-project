import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import LoginPage from "../Pages/Login";
import LandingPage from "../Pages/LandingPage";
import ForgotPassword from "../Pages/ForgotPassword";
import UserProfile from "../Pages/UserProfile";
import FindJob from "../Pages/FindJob";
import ViewDetailPage from "../Pages/ViewDetailPage";

function AppRoutes() {
  return (
  
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login/jobseeker" element={<LoginPage role="Job Seeker" />} />
        <Route path="/login/recruiter" element={<LoginPage role="Recruiter" />} />

         {/* SIGNUP */}
        <Route path="/signup/jobseeker" element={<SignUp role="Job Seeker" />} />
        <Route path="/signup/recruiter" element={<SignUp role="Recruiter" />} />
        <Route path="/signup/admin" element={<SignUp role="Admin" />} />

        {/* forgetPassword */}
         <Route path="/forgotPassword" element={<ForgotPassword/>} />
         {/* User Profile */}
         <Route path="/userprofile" element={<UserProfile/>}/>
         {/* FindJob */}
         <Route path="/findjob" element ={<FindJob/>} />

         {/* ViewDetailPages */}
        <Route path="/viewdetailpage" element ={<ViewDetailPage/>} >
        
        </Route>


        




      </Routes>
   
  );
}

export default AppRoutes;