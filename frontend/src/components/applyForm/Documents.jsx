import { MdOutlinePictureAsPdf } from "react-icons/md";
function Documents({ register, errors }) {
  return (
    <div className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-800">
      <div className="flex items-center gap-3 mb-6">
        <MdOutlinePictureAsPdf className="h-6 w-6 text-blue-600 bg-blue-600/10 rounded-lg" />
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">
          Resume & Documents
        </h2>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Resume/CV *
          </label>
          <input
            {...register("resume", {
              required: "Resume is required",
              validate: (files) =>
                files?.[0]?.type === "application/pdf" || "Only PDF allowed",
            })}
            type="file"
            accept=".pdf"
            className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-600/10 file:text-blue-600
              hover:file:bg-blue-600/20
              cursor-pointer
            "
          />
          {errors.resume && (
            <p className="text-xs text-red-500">{errors.resume.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Portfolio or Website URL{" "}
            <span className="text-neutral-soft font-normal">(Optional)</span>
          </label>
          <input
            {...register("portfolio")}
            type="url"
            placeholder="https://yourportfolio.com"
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-blue-600 focus:ring-blue-600 h-12"
          />
        </div>
      </div>
    </div>
  );
}

export default Documents;
