import { CiLock } from "react-icons/ci";

function ChangePasswordCard({ register, errors, disabled }) {
  return (
    <section className="bg-white dark:bg-slate-900 rounded-xl shadow-md border border-slate-100 dark:border-slate-800 overflow-hidden">
      <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold">Change Password</h3>
          <p className="text-sm text-slate-500">
            Ensure your account is using a strong password for security.
          </p>
        </div>
        <CiLock className="text-slate-300" />
      </div>

      <div className="p-8 max-w-xl space-y-6">
        {/* Current Password */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Current Password
          </label>
          <input
            disabled={disabled}
            type="password"
            {...register("currentPassword", {
              validate: (value, formValues) => {
                if (
                  formValues.newPassword &&
                  formValues.newPassword.length > 0
                ) {
                  return value ? true : "Current password is required";
                }
                return true;
              },
            })}
            className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
          />
          {errors?.currentPassword && (
            <p className="text-red-500 text-xs">
              {errors.currentPassword.message}
            </p>
          )}
        </div>

        {/* New Password */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            New Password
          </label>
          <input
            disabled={disabled}
            type="password"
            {...register("newPassword", {
              validate: (value, formValues) => {
                // 👇 if user is NOT trying to change password → skip validation
                if (!value || value.length === 0) return true;

                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }

                if (!/[A-Z]/.test(value)) {
                  return "Must contain at least one uppercase letter";
                }

                if (!/[@$!%*?&]/.test(value)) {
                  return "Must contain at least one special character";
                }

                return true;
              },
            })}
            placeholder="Min. 8 characters"
            className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
          />
          {errors?.newPassword && (
            <p className="text-red-500 text-xs">{errors.newPassword.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Confirm New Password
          </label>
          <input
            disabled={disabled}
            type="password"
            {...register("confirmNewPassword", {
              validate: (value, formValues) => {
                const newPass = formValues.newPassword;

                // 👇 If user is NOT changing password → skip validation
                if (!newPass || newPass.length === 0) return true;

                if (!value) return "Please confirm your password";

                return value === newPass || "Passwords do not match";
              },
            })}
            placeholder="Repeat password"
            className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
          />
          {errors?.confirmNewPassword && (
            <p className="text-red-500 text-xs">
              {errors.confirmNewPassword.message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default ChangePasswordCard;
