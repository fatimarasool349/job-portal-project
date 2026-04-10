import { CiLock } from "react-icons/ci";

function ChangePasswordCard({ register }) {
  return (
    <section className="bg-white dark:bg-slate-900 rounded-xl shadow-md border border-slate-100 dark:border-slate-800 overflow-hidden">
      <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold">Change Password</h3>
          <p className="text-sm text-slate-500">
            Ensure your account is using a long, random password to stay secure.
          </p>
        </div>
        <CiLock className="text-slate-300" />
      </div>

      <div className="p-8 max-w-xl space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Current Password</label>
          <input
            type="password"
            {...register("currentPassword")}
            className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">New Password</label>
            <input
              type="password"
              {...register("newPassword")}
              placeholder="Min. 8 characters"
              className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Confirm New Password</label>
            <input
              type="password"
              {...register("confirmNewPassword")}
              placeholder="Repeat password"
              className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default ChangePasswordCard;