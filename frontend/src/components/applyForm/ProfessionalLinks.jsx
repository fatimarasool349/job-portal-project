import { CiLink, CiShare2 } from "react-icons/ci";
import { IoMdCode } from "react-icons/io";
function ProfessionalLinks({ register }) {
  return (
    <div className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-800">
      <div className="flex items-center gap-3 mb-6">
        <CiLink className="h-6 w-6 text-blue-600 bg-blue-600/10 rounded-lg" />

        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">
          Professional Links
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            LinkedIn Profile
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-neutral-soft pointer-events-none">
              <CiShare2 size={20} />
            </span>
            <input
              {...register("linkedin")}
              placeholder="linkedin.com/in/username"
              type="url"
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-blue-600 focus:ring-blue-600 h-12 pl-10"
            />
          </div>
        </div>

        <div className="space-y-2 relative">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            GitHub URL
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-neutral-soft pointer-events-none">
              <IoMdCode size={20} />
            </span>
            <input
              {...register("github")}
              placeholder="github.com/username"
              type="url"
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-blue-600 focus:ring-blue-600 h-12 pl-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalLinks;
