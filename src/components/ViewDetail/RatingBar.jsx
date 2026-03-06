import React from 'react'

function RatingBar({bar}) {
  return (
    <div className="md:col-span-2 space-y-3">
      {bar.map((item, index) => (
        <div key={index} className="flex items-center gap-4 ">
          <span className="text-xs font-medium text-slate-500 w-32">
            {item.title}
          </span>

          <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600"
              style={{ width: `${item.rating*20}%` }}
            />
          </div>

          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
            {item.rating}
          </span>
        </div>
      ))}
    </div>
  )
}

export default RatingBar
