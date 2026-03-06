import LocationCard from "./LocationCard";
function Company({ company }) {
  return (
    <section className="mt-10 pt-10 border-t border-slate-100 dark:border-slate-800">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
        About {company.name}
      </h3>

      <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
        <p>{company.about1}</p>
        <p>{company.about2}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {company.stats.map((stat, index) => (
          <div
            key={index}
            className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800"
          >
            <p className="text-xs text-slate-500 mb-1">{stat.label}</p>
            <p className="font-bold text-slate-900 dark:text-white">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-10 mb-6">
        Culture & Values
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {company.culture?.map((item, index) => {
          const Icon = item.icon;
          return (
            <>
              <div key={index} className="flex flex-col gap-3">
                <Icon className={`${item.icon} text-blue-600 text-2xl`} />
                <span className="text-primary text-3xl">{item.icon}</span>
                <h5 className="font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h5>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            </>
          );
        })}
      </div>

      <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-10 mb-6">
        Company Photos
      </h4>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {company.photos?.map((photo, index) => (
          <div
            key={index}
            className="aspect-video bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden"
          >
            <img
              src={photo}
              alt="company"
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 mt-10 mb-6">
      {company.locations.map((loc, idx) => (
        <LocationCard
          key={idx}
          image={loc.image}
          title={loc.title}
          address={loc.address}
        />
      ))}
    </div>
    </section>
  );
}

export default Company;
