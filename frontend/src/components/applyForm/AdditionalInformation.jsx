import React from 'react'
import { MdEditNote } from "react-icons/md";

function AdditionalInformation({register}) {
  return (
   <div className="p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <MdEditNote size={32} className=" h-6 w-6 text-blue-600 bg-blue-600/10 p-2 rounded-lg"/>
       
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">
          Additional Information
        </h2>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          Cover Letter
        </label>
        <textarea
          {...register("coverLetter")}
          className="w-full rounded-lg border border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-blue-600 focus:ring-blue-600 p-4 resize-none"
          placeholder="Tell us why you're a great fit for this role..."
          rows="5"
        />
        <p className="text-xs text-neutral-soft">
          Briefly introduce yourself and highlight your relevant experience.
        </p>
      </div>
    </div>
  )
}

export default AdditionalInformation
