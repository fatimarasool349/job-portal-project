import { useNavigate, useParams } from "react-router-dom";
import LogoutCard from "../components/Logout/LogoutCard";
import { persistor } from "../redux/store";
import { logout } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { PUBLIC_ROUTES } from "../constants/routes";

function Logout() {
  const navigate = useNavigate();
  const { role } = useParams();
  const urlRole = role?.trim().toLowerCase();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    persistor.purge();
    toast.success("You have been logged out successfully!");

    navigate(PUBLIC_ROUTES.LOGIN.replace(":role", urlRole));
  };

  // Function to handle cancel
  const handleCancel = () => {
    console.log(`${urlRole} canceled logout`);
    navigate(-1); // just go back
  };

  return (
    <LogoutCard
      title={`${urlRole} Logout Confirmation`}
      description={`Are you sure you want to log out as a ${urlRole}? Any unsaved changes will be lost.`}
      onLogout={handleLogout}
      onCancel={handleCancel}
    />
  );
}

export default Logout;
