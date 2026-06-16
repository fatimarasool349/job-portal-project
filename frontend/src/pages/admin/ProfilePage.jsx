import { useForm } from "react-hook-form";
import ProfileInfoCard from "../../components/adminComponents/profilePage/ProfileInfoCard.jsx";
import ChangePasswordCard from "../../components/adminComponents/profilePage/ChangePasswordCard.jsx";
import DangerZone from "../../components/adminComponents/profilePage/DangerZone.jsx";
import Swal from "sweetalert2";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/slices/authSlice.js";
import { getImageUrl } from "../../utils/getImageUrl.js";
import defaultImage from "../../assets/Images/default_img.png";
import API from "../../api/axiosConfig.js";

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
  const avatarFile = watch("profileImage");

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

  const handleDeactivate = async () => {
    const result = await Swal.fire({
      title: deactivated ? "Reactivate Account?" : "Deactivate Account?",
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
    });

    if (result.isConfirmed) {
      setDeactivated(!deactivated);

      Swal.fire(
        "Success!",
        deactivated ? "Account reactivated." : "Account deactivated.",
        "success",
      );
    }
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);

      if (data.avatar && data.avatar[0]) {
        formData.append("profileImage", data.avatar[0]);
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

      const userId = user?._id;

      if (!userId) {
        console.log("User ID missing");
        return;
      }

      const res = await API.put(`/auth/update-profile/${userId}`, formData);

      console.log("Updated:", res.data.user);

      dispatch(
        loginSuccess({
          user: res.data.user,
          token: localStorage.getItem("token"),
        }),
      );

      await Swal.fire({
        icon: "success",
        title: "Success",
        text: "Profile updated successfully!",
      });
    } catch (error) {
      const message = error.response?.data?.message;

      if (!message) return;

      if (message.toLowerCase().includes("current password")) {
        setError("currentPassword", {
          type: "manual",
          message,
        });
      } else if (message.toLowerCase().includes("email")) {
        setError("email", {
          type: "manual",
          message,
        });
      } else {
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
