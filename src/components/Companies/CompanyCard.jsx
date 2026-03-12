import { MdOutlineSchedule } from "react-icons/md";

function CompanyCard({ company }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-md">

      {/* Bookmark */}
      {/* <button className="absolute right-4 top-4 rounded-full bg-white/80 p-1.5 text-slate-400 hover:text-blue-600">
        <span className="material-symbols-outlined text-xl">
          bookmark
        </span>
      </button> */}

      <div className="p-6">

        <div className="mb-4 flex items-start gap-4">

          <div className="h-16 w-16 rounded-lg bg-slate-50 p-2">
            <img
              src={company.logo}
              alt={company.name}
              className="h-full w-full object-contain"
            />
          </div>

          <div className="flex-1">

            <h3 className="text-lg font-bold">
              {company.name}
            </h3>

            <p className="text-sm text-slate-500">
              {company.industry}
            </p>

          </div>

        </div>

        <p className="line-clamp-2 text-sm text-slate-600">
          {company.description}
        </p>

        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
          <MdOutlineSchedule className="text-sm"/>

          <span>
            Open: {company.businessHours}
          </span>

        </div>

      </div>

      <div className="mt-auto border-t p-4">

        <button className="w-full rounded-lg bg-blue-600 py-2 text-sm font-bold text-white hover:opacity-90">
          View Openings
        </button>

      </div>

    </div>
  );
}

export default CompanyCard;