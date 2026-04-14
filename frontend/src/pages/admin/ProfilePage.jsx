import { useForm } from "react-hook-form";
import ProfileInfoCard from "../../components/adminComponents/profilePage/ProfileInfoCard";
import ChangePasswordCard from "../../components/adminComponents/profilePage/ChangePasswordCard";
import DangerZone from "../../components/adminComponents/profilePage/DangerZone";
import { useState } from "react";
import { adminProfileData } from "../../constant/index.js";

export default function ProfilePage() {
  const [deactivated, setDeactivated] = useState(false);
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      fullName: adminProfileData.fullName,
      email: adminProfileData.email,
      phone: adminProfileData.phone,
    },
  });

  const [avatar, setAvatar] = useState(adminProfileData.avatar);

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

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) setAvatar(URL.createObjectURL(file));
  };

  const onSubmit = (data) => {
    console.log("Profile Data Submitted:", data);
    console.log("Avatar URL:", avatar);

    if (deactivated) {
      alert("Your account is deactivated. Changes won't be saved until reactivation.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 max-w-4xl mx-auto w-full space-y-8">
      <ProfileInfoCard
        register={register}
        avatar={avatar}
        onAvatarChange={handleAvatarChange}
        disabled={deactivated} // pass to disable inputs
      />
      <ChangePasswordCard register={register} disabled={deactivated} />
      <DangerZone onDeactivate={handleDeactivate} deactivated={deactivated} />
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