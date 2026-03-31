import { useNavigate } from "react-router-dom";
import LogoutCard from "../components/Logout/LogoutCard";


function Logout({ role }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log(`${role} logged out`);
    localStorage.removeItem("authToken"); // replace with your auth key
    localStorage.removeItem("userRole");

    if (role === "Job Seeker") {
      navigate("/login/jobseeker");
    } else if (role === "Recruiter") {
      navigate("/login/recruiter");
    } else {
      navigate("/login");
    }
  };

  // Function to handle cancel
  const handleCancel = () => {
    console.log(`${role} canceled logout`);
    // Navigate back to previous page or dashboard
    if (role === "Job Seeker") {
      navigate(-1);
    } else if (role === "Recruiter") {
      navigate("/recruiter");
    } else {
      navigate("/dashboard");
    }
  };

  return (

    <LogoutCard
      title={`${role} Logout Confirmation`}
      description={`Are you sure you want to log out as a ${role}? Any unsaved changes will be lost.`}
      onLogout={handleLogout}
      onCancel={handleCancel}
    />
  );
}

export default Logout;