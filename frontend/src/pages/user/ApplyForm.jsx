import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";

import ContactForm from "../../components/ApplyForm/ContactForm";
import Documents from "../../components/ApplyForm/Documents";
import ProfessionalLinks from "../../components/ApplyForm/ProfessionalLinks";
import AdditionalInformation from "../../components/ApplyForm/AdditionalInformation";
import JobHeader from "../../components/ApplyForm/JobHeader";
import { getJobBySlug } from "../../api/jobApi";
import { applyJob } from "../../redux/slices/applicationSlice";
import { useSelector } from "react-redux";
import { PUBLIC_ROUTES, USER_ROUTES } from "../../constants/routes";

import { useEffect, useState } from "react";
import axios from "axios";

import { jobData, companyData } from "../../constants";

function ApplyForm() {
  const { slug } = useParams();
  const [job, setJob] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const role = useSelector((state) => state.auth.user?.role);
  const safeRole = role?.toLowerCase().replace(" ", "") || "user";

  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await getJobBySlug(slug);
        setJob(res);
      } catch (err) {
        console.log(err);
      }
    };

    fetchJob();
  }, [slug]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: "onChange",
  });

  const file = watch("resume");
  const loginPath = PUBLIC_ROUTES.LOGIN.replace(":role", safeRole);
  console.log("Redirecting to:", loginPath);

  const onSubmit = async (data) => {
    if (!user || !token) {
      const role = user?.role || "jobseeker"; // fallback
      const safeRole = role.toLowerCase().replace(" ", "");
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please login to apply for this job.",
      }).then(() => {
        navigate(PUBLIC_ROUTES.LOGIN.replace(":role", safeRole), {
          state: { from: location.pathname },
        });
      });
      return; // ⛔ stop further execution
    }
    try {
      const formData = new FormData();

      formData.append("jobSlug", slug);
      // formData.append("candidate", user._id); // from Redux or auth
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("portfolio", data.portfolio || "");
      formData.append("linkedin", data.linkedin || "");
      formData.append("coverLetter", data.coverLetter || "");
      formData.append("resume", data.resume[0]); // 👈 IMPORTANT

      await dispatch(applyJob(formData)).unwrap();

      Swal.fire({
        icon: "success",
        title: "Application Submitted!",
        text: "Your job application has been sent successfully.",
      }).then(() => {
        navigate(-1);
      });
    } catch (error) {
      const isAlreadyApplied = error.toLowerCase().includes("already");

      Swal.fire({
        icon: isAlreadyApplied ? "warning" : "error",
        title: isAlreadyApplied ? "Already Applied" : "Application Failed",
        text: error,
      });
    }
  };

  if (!job) {
    return (
      <div className="text-center py-20 text-gray-500">Job not found!</div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <JobHeader job={job} company={job.company} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden"
      >
        <ContactForm
          register={register}
          errors={errors}
          resume={file}
          dirtyFields={dirtyFields}
        />
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
