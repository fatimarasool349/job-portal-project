import { MdLogout } from "react-icons/md";

const LogoutCard = ({
  title = "Logout Confirmation",
  description = "Are you sure you want to log out? Any unsaved changes will be lost.",
  onLogout,
  onCancel,
}) => {
  return (
    <div className="bg-gray-100 font-body text-on-surface min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Texture Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] rounded-full bg-blue-600-fixed-dim opacity-[0.05] blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[35rem] h-[35rem] rounded-full bg-secondary-fixed-dim opacity-[0.05] blur-[100px] pointer-events-none"></div>

      {/* Main Container */}
      <main className="w-full max-w-xl z-10">
        {/* Logout Card */}
        <div className="bg-white rounded-xl p-12 shadow-[0px_40px_80px_rgba(0,75,198,0.06)] relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            {/* Content Section */}
            <div className="flex-1 space-y-6">
              {/* Icon Header */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-600-fixed text-blue-600 mb-2">
                <MdLogout className="text-5xl  text-blue-700" />{" "}
              </div>

              {/* Message */}
              <div className="space-y-4">
                <h1 className="font-headline font-bold text-2xl tracking-tight text-on-surface">
                  {title}
                </h1>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-sm">
                  {description}
                </p>
              </div>

             
            </div>

            {/* Action Section */}
            <div className="flex flex-col sm:flex-row md:flex-col items-stretch gap-3 min-w-[160px] md:pt-2">
              <button
                onClick={onLogout}
                className="px-8 py-3.5 rounded-full bg-blue-700 text-white font-semibold text-sm shadow-lg shadow-blue-600/20 hover:scale-[1.02] active:scale-95 transition-all duration-200 order-1 md:order-1"
              >
                Logout
              </button>
              <button
                onClick={onCancel}
                className="px-8 py-3.5 rounded-full border border-outline-variant/30 text-on-surface-variant font-medium text-sm hover:bg-surface-container-high active:scale-95 transition-all duration-200 order-2 md:order-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LogoutCard;
