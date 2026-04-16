import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BiWorld } from "react-icons/bi";



 function CompanyHero({ company }) {
  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Company Logo */}
          <div className="w-24 h-24 bg-blue-50 rounded-xl flex items-center justify-center border border-slate-100 shadow-sm overflow-hidden flex-shrink-0">
            <img
              src={company.logo}
              alt={`${company.name} Logo`}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Company Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Openings at {company.name}
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl">{company.about1}</p>
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <IoLocationSharp/> {company.location}
              </span>
              <span className="flex items-center gap-1">
                <HiOutlineUserGroup/> {company.size}
              </span>
              <span className="flex items-center gap-1 text-blue-600 font-medium">
                <BiWorld/> {company.website}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyHero;