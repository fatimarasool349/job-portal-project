// src/hooks/useSignUp.js
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { loginSuccess } from "../redux/slices/authSlice";
import { registerUser } from "../api/authApi";
import { PUBLIC_ROUTES, ADMIN_ROUTES, AUTH_STATUS_ROUTES } from "../constants/routes";

export function useSignUp() {
  const { role } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm();

  const emailPattern = role === "recruiter";
    // ? /^[a-zA-Z0-9._%+-]+@(?!email\.com|gmail\.com...)$/
    // : /^[a-zA-Z0-9._%+-]+@(?!gmail\.com...)$/;

  const onSubmit = async (data) => {
    try {
      const response = await registerUser(data, role);
      const { user, token } = response;

      dispatch(loginSuccess({
        user,
        token,
        role: user.role,
        company: user.companyId || null,
      }));

      localStorage.setItem("companyId", user.companyId);
      toast.success("Account created successfully!");

      if (user.role === "recruiter") {
        localStorage.setItem("recruiter_id", user._id);
        navigate(AUTH_STATUS_ROUTES.PENDING);
      } else if (user.role === "admin") {
        navigate(ADMIN_ROUTES.DASHBOARD);
      } else {
        navigate(PUBLIC_ROUTES.HOME);
      }
    } catch (error) {
      const res = error.response;
      if (res?.data?.errors) {
        Object.keys(res.data.errors).forEach((field) => {
          setError(field, { type: "manual", message: res.data.errors[field] });
        });
      } else {
        toast.error(res?.data?.message || "Something went wrong");
        setError("root", {
          type: "manual",
          message: res?.data?.message || "Something went wrong",
        });
      }
    }
  };

  return {
    role,
    errors,
    register,
    handleSubmit,
    watch,
    onSubmit,
    showPassword,
    showConfirm,
    setShowPassword,
    setShowConfirm,
    emailPattern,
  };
}