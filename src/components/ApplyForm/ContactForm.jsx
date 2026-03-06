import { IoPersonSharp } from "react-icons/io5";
import { contactFields } from "../../constant/data";

function ContactForm({ register, errors }) {
  return (
    <div className="p-6 sm:p-8 border-b border-slate-200 dark:border-slate-700">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <IoPersonSharp className="h-6 w-6 text-blue-600 bg-blue-600/10 rounded-lg" />
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">
          Contact Information
        </h2>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {contactFields.map((field) => (
          <div key={field.name} className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              {field.label}
            </label>
            <input
              {...register(field.name, {
                required: field.required && `${field.label} is required`,
                pattern: field.pattern,
              })}
              placeholder={field.placeholder}
              type={field.type}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-blue-600 focus:ring-blue-600 h-12 px-3 text-slate-900 dark:text-slate-50"
            />
            {errors[field.name] && (
              <p className="text-xs text-red-500">{errors[field.name].message}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactForm;