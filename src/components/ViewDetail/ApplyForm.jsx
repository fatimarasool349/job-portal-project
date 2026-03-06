import React from "react";
import ContactForm from "../ApplyForm/ContactForm";
import Documents from "../ApplyForm/Documents";
import ProfessionalLinks from "../ApplyForm/ProfessionalLinks";
import AdditionalInformation from "../ApplyForm/AdditionalInformation";
import JobHeader from "../ApplyForm/JobHeader";
import { jobData } from "../../constant/data";
import { useForm } from "react-hook-form";

function ApplyForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Handle form submission here (e.g., API call)
  };

  const file = watch("resume");

  return (
    <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <JobHeader job={jobData} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden"
      >
        {/* Section 1: Contact Info */}
        <ContactForm register={register} errors={errors} resume={file} />

        {/* Section 2: Resume & Documents */}
        <Documents register={register} errors={errors} />

        {/* Section 3: Professional Links */}
        <ProfessionalLinks register={register} />

        {/* Section 4: Additional Information */}
        <AdditionalInformation register={register} />

        {/* Action Area */}
        <div className="px-6 py-6 sm:px-8 bg-slate-50 dark:bg-slate-800/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-soft text-center sm:text-left">
            By clicking submit, you agree to our Terms of Service and Privacy
            Policy.
          </p>
          <button
            className="w-full sm:w-auto min-w-[200px] bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98]"
            type="submit"
          >
            Submit Application
          </button>
        </div>
      </form>
    </main>
  );
}

export default ApplyForm;
