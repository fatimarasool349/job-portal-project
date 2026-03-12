import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import ContactForm from "../components/ApplyForm/ContactForm";
import Documents from "../components/ApplyForm/Documents";
import ProfessionalLinks from "../components/ApplyForm/ProfessionalLinks";
import AdditionalInformation from "../components/ApplyForm/AdditionalInformation";
import JobHeader from "../components/ApplyForm/JobHeader";

import { jobData } from "../constant/data";

function ApplyForm() {
  const { jobId } = useParams(); // get jobId from route
  const navigate = useNavigate();

  // Find job from jobData array using jobId
  const job = jobData.find((j) => j.id === Number(jobId));

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const file = watch("resume");

  const onSubmit = (data) => {
    console.log("Form Data:", data);

    Swal.fire({
      icon: "success",
      title: "Application Submitted!",
      text: "Your job application has been sent successfully.",
      confirmButtonColor: "#1D4ED8",
    }).then(() => {
      navigate(-1);
    });
  };

  if (!job) {
    return (
      <div className="text-center py-20 text-gray-500">
        Job not found!
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Pass single job object to JobHeader */}
      <JobHeader job={job} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden"
      >
        <ContactForm register={register} errors={errors} resume={file} />
        <Documents register={register} errors={errors} />
        <ProfessionalLinks register={register} />
        <AdditionalInformation register={register} />

        <div className="px-6 py-6 sm:px-8 bg-slate-50 dark:bg-slate-800/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-soft text-center sm:text-left">
            By clicking submit, you agree to our Terms of Service and Privacy
            Policy.
          </p>
          <button
            type="submit"
            className="w-full sm:w-auto min-w-[200px] bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98]"
          >
            Submit Application
          </button>
        </div>
      </form>
    </main>
  );
}

export default ApplyForm;