 import { MdOutlineCameraAlt } from "react-icons/md";

 function ProfileInfoCard({ register, avatar,  }) {
  return (
    <section className="bg-white dark:bg-slate-900 rounded-xl shadow-md border border-slate-100 dark:border-slate-800 overflow-hidden">
      <div className="p-6 border-b border-slate-100 dark:border-slate-800">
        <h3 className="text-lg font-bold">Profile Information</h3>
        <p className="text-sm text-slate-500">Update your photo and personal details here.</p>
      </div>

      <div className="p-8 flex flex-col md:flex-row gap-10">
        {/* Avatar */}
        <div className="flex flex-col items-center gap-4 shrink-0">
          <div className="relative group">
            <img src={avatar} alt="Profile Preview" className="w-32 h-32 rounded-full object-cover ring-4 ring-slate-50 dark:ring-slate-800" />
            <label className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
              <MdOutlineCameraAlt className="text-white" />
              <input type="file" {...register("avatar")} className="hidden" />
            </label>
          </div>
          <div className="text-center">
            <button type="button" className="text-primary text-xs font-bold hover:underline">Change Photo</button>
            <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-tighter">JPG, PNG, GIF (Max 800KB)</p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="flex-1 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</label>
              <input
                type="text"
                {...register("fullName")}
                className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
              <input
                type="email"
                {...register("email")}
                className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Phone Number (Optional)</label>
              <input
                type="tel"
                {...register("phone")}
                placeholder="+1 (555) 000-0000"
                className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProfileInfoCard;