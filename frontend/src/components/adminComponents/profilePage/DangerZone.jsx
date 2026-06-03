export default function DangerZone({ onDeactivate, deactivated }) {
  return (
    <section className="bg-red-50 dark:bg-red-950/20 rounded-xl border border-red-100 dark:border-red-900/50 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <h4 className="text-red-700 dark:text-red-400 font-bold">
          {deactivated ? "Account Deactivated" : "Deactivate Account"}
        </h4>
        <p className="text-sm text-red-600/70 dark:text-red-400/60">
          {deactivated
            ? "Your account is currently deactivated. Reactivate to regain access."
            : "This action will disable your admin access. Use with caution."}
        </p>
      </div>
      <button
        onClick={onDeactivate}
        className={`px-6 py-2 border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 hover:bg-red-600 hover:text-white rounded-xl transition-all font-semibold text-sm ${
          deactivated ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {deactivated ? "Reactivate" : "Deactivate"}
      </button>
    </section>
  );
}