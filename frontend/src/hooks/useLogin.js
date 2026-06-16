import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { loginUser } from "../api/authApi";
import { loginSuccess } from "../redux/slices/authSlice";
import {
  PUBLIC_ROUTES,
  ADMIN_ROUTES,
  AUTH_STATUS_ROUTES,
} from "../constants/routes";

export function useLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { role: rawRole } = useParams();
  const role = rawRole?.trim().toLowerCase();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const handleNavigation = (user) => {
    if (user.status === "blocked") {
      localStorage.setItem("recruiter_id", user._id);
      navigate(AUTH_STATUS_ROUTES.BLOCKED);
    } else if (user.role === "recruiter" && user.status === "pending") {
      localStorage.setItem("recruiter_id", user._id);
      toast("Your account is waiting for admin approval");
      navigate(AUTH_STATUS_ROUTES.PENDING);
    } else if (user.role === "recruiter" || user.role === "admin") {
      navigate(ADMIN_ROUTES.DASHBOARD);
    } else {
      navigate(PUBLIC_ROUTES.HOME);
    }
  };

  const onSubmit = async (data) => {
    try {
      const res = await loginUser(data.email, data.password);
      const { token, user } = res;

      dispatch(
        loginSuccess({
          user,
          token,
          role: user.role,
          company: user.companyId || null,
          status: user.status || null,
        }),
      );

      localStorage.setItem("token", token);
      localStorage.setItem("companyId", user.companyId);
      localStorage.setItem("role", user.role);
      localStorage.setItem("status", user.status || null);

      toast.success("Login successful!");
      handleNavigation(user);
    } catch (error) {
      const backendErrors = error.response?.data?.errors;
      if (backendErrors) {
        Object.keys(backendErrors).forEach((field) => {
          setError(field, { type: "server", message: backendErrors[field] });
        });
      } else {
        toast.error(error.response?.data?.message || "Login failed");
      }
    }
  };

  const emailPlaceholder =
    role === "recruiter"
      ? "recruiter@company.com"
      : role === "admin"
        ? "admin@yourdomain.com"
        : "abc@email.com";

  const emailPattern = role === "recruiter";
  // ? /^[a-zA-Z0-9._%+-]+@(?!yourdomain\.com|email\.com|yahoo\.com|hotmail\.com)...$/
  // : role === "admin"
  //   ? /^[a-zA-Z0-9._%+-]+@yourdomain\.com$/
  //   : /^[a-zA-Z0-9._%+-]+@(?!yourdomain\.com$)...$/;

  const emailErrorMessage =
    role === "recruiter"
      ? "Please use a company email address"
      : role === "admin"
        ? "Admin email must be @yourdomain.com"
        : "Invalid Email Address";

  return {
    role,
    errors,
    register,
    handleSubmit,
    onSubmit,
    emailPlaceholder,
    emailPattern,
    emailErrorMessage,
  };
}
