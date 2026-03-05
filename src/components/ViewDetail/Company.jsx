import React from "react";

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

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {company.stats.map((stat, index) => (
          <div
            key={index}
            className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800"
          >
            <p className="text-xs text-slate-500 mb-1">{stat.label}</p>
            <p className="font-bold text-slate-900 dark:text-white">{stat.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Company;