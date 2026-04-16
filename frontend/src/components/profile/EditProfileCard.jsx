import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import save from "./../../assets/icons/save.png";
import editButton from "./../../assets/svg/camra.svg";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { initialUserData } from "../../constant/index.js";

function UserProfileCard({ initialData }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

 const [user, setUser] = useState({
  name: initialData?.name || initialUserData.name,
  location: initialData?.location || initialUserData.location,
  email: initialData?.email || initialUserData.email,
  phone: initialData?.phone || initialUserData.phone,
  profilePic: initialData?.profilePic || initialUserData.profilePic,
});

  const fileInputRef = useRef(null);

  const handleProfilePicClick = () => {
    fileInputRef.current.click();
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser((prev) => ({ ...prev, profilePic: imageUrl }));
    }
  };

  const handleChange = (field, value) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-8">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Profile Picture */}
        <div className="relative group" data-aos="fade-right">
          <div className="relative h-32 w-32 rounded-full overflow-hidden bg-slate-100 ring-4 ring-slate-50 dark:ring-slate-800">
            <img
              src={user.profilePic}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>

          <button
            className="absolute -bottom-1 -right-1 h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10"
            onClick={handleProfilePicClick}
          >
            <img src={editButton} alt="Edit" className="h-4 w-4" />
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleProfilePicChange}
          />
        </div>

        {/* Profile Info */}
        <div className="flex-1 space-y-4 w-full" data-aos="fade-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="bg-transparent border-none p-0 text-slate-900 dark:text-white text-3xl font-bold focus:ring-0 w-full"
                />
              </h1>
              <p className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">
                  location_on
                </span>
                <input
                  type="text"
                  value={user.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                  className="bg-transparent border-none p-0 text-slate-500 dark:text-slate-400 focus:ring-0 w-full"
                />
              </p>
            </div>
            <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-md shadow-primary/20">
              <img src={save} alt="save icon" />
              Save Changes
            </button>
          </div>
          {/* Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {/* Email */}
            <div
              className="space-y-1 relative group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
                Email Address
              </label>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                <FaEnvelope className="text-gray-400" />
                <input
                  type="email"
                  value={user.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="bg-transparent border-none p-0 text-slate-700 dark:text-slate-200 focus:ring-0 w-full"
                />
              </div>
            </div>
            {/* Phone */}
            <div
              className="space-y-1 relative group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
                Phone Number
              </label>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                <FaPhone className="text-gray-400" />
                <input
                  type="tel"
                  value={user.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="bg-transparent border-none p-0 text-slate-700 dark:text-slate-200 focus:ring-0 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserProfileCard;
