export default function Reviews({ reviews }) {
  return (
    <section className="mt-10 pt-10 border-t border-slate-100 dark:border-slate-800">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
        Employee Reviews
      </h3>

      {/* Overall Rating */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 flex flex-col items-center justify-center text-center">
          <p className="text-5xl font-black text-primary mb-2">
            {reviews.overallRating}
          </p>
          <div className="flex text-yellow-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`material-symbols-outlined ${
                  i < Math.floor(reviews.overallRating) ? "fill-1" : ""
                }`}
              >
                {i < Math.floor(reviews.overallRating)
                  ? "star"
                  : i < reviews.overallRating
                    ? "star_half"
                    : "star_outline"}
              </span>
            ))}
          </div>
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            {reviews.total} Total Reviews
          </p>
        </div>
      </div>

      {/* Review List */}
      <div className="space-y-6">
        {reviews.list.map((rev, idx) => (
          <div
            key={idx}
            className="p-6 border border-slate-100 dark:border-slate-800 rounded-xl"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex text-yellow-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`material-symbols-outlined text-sm ${
                        i < rev.rating ? "fill-1" : ""
                      }`}
                    >
                      star
                    </span>
                  ))}
                </div>
                <h5 className="font-bold text-slate-900 dark:text-white">
                  {rev.title}
                </h5>
                <p className="text-xs text-slate-500">{rev.role}</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-bold text-green-600 mb-1">Pros</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {rev.pros}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-red-600 mb-1">Cons</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {rev.cons}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
