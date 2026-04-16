import { useForm } from "react-hook-form";
import ProfileInfoCard from "../../components/adminComponents/profilePage/ProfileInfoCard";
import ChangePasswordCard from "../../components/adminComponents/profilePage/ChangePasswordCard";
import DangerZone from "../../components/adminComponents/profilePage/DangerZone";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/slices/authSlice";
import { getImageUrl } from "../../utils/getImageUrl.js";
import  defaultImage  from "../../assets/Images/default_img.png";

export default function ProfilePage() {
  const [deactivated, setDeactivated] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setError,
    formState: { errors },
  } = useForm();
  const avatarFile = watch("avatar");

  console.log("USER FROM REDUX:", user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      reset({
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
      });
    }
  }, [user, reset]);

  const handleDeactivate = () => {
    if (!deactivated) {
      if (window.confirm("Are you sure you want to deactivate your account?")) {
        setDeactivated(true);
        alert("Account has been deactivated (demo).");
      }
    } else {
      if (window.confirm("Do you want to reactivate your account?")) {
        setDeactivated(false);
        alert("Account has been reactivated (demo).");
      }
    }
  };

  console.log(user._id);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);

      if (data.avatar && data.avatar[0]) {
        formData.append("avatar", data.avatar[0]);
      }
      if (data.newPassword && data.newPassword.length > 0) {
        formData.append("currentPassword", data.currentPassword);
        formData.append("newPassword", data.newPassword);
      }
      if (data.newPassword?.length > 0 && !data.currentPassword) {
        setError("currentPassword", {
          message: "Current password required to change password",
        });
        return;
      }

      const res = await axios.put(
        `http://localhost:5000/api/auth/update-profile/${user._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      console.log("Updated:", res.data.user);

      dispatch(
        loginSuccess({
          user: res.data.user,
          token: localStorage.getItem("token"),
        }),
      );

      alert("Profile updated!");
    } catch (error) {
      const message = error.response?.data?.message;

      if (!message) return;

      if (message.toLowerCase().includes("current password")) {
        setError("currentPassword", {
          type: "manual",
          message,
        });
      }

      else if (message.toLowerCase().includes("email")) {
        setError("email", {
          type: "manual",
          message,
        });
      }

      else {
        setError("root", {
          type: "manual",
          message,
        });
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-8 max-w-4xl mx-auto w-full space-y-8"
    >
      <ProfileInfoCard
        register={register}
        avatarPreview={
          avatarFile && avatarFile.length > 0
            ? URL.createObjectURL(avatarFile[0])
            : user?.profileImage
              ? getImageUrl(user.profileImage)
              : defaultImage
        }
      />
      <ChangePasswordCard
        register={register}
        errors={errors}
        disabled={deactivated}
      />
      <DangerZone onDeactivate={handleDeactivate} deactivated={deactivated} />
      {errors.root && (
        <p className="text-red-500 text-sm mt-2 text-center">
          {errors.root.message}
        </p>
      )}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={deactivated}
          className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-8 rounded-xl transition-all shadow-lg shadow-primary/20 ${
            deactivated ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Save All Changes
        </button>
      </div>
    </form>
  );
}
