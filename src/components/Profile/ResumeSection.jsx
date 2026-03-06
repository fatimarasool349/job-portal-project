import { useState } from "react";
import resumeIcon from "./../../assets/svg/pdf.svg";
import pdfIcon from "./../../assets/svg/resume.svg";
import uploadIcon from "./../../assets/svg/upload.svg";

function ResumeSection() {
  const [resumeFile, setResumeFile] = useState(null);
  const [uploadDate, setUploadDate] = useState(null); // store date

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setResumeFile(file);
      setUploadDate(new Date());
    }
  };

  const handleRemoveFile = () => {
    setResumeFile(null);
  };

  const handleOpenFile = () => {
    if (resumeFile) {
      const fileURL = URL.createObjectURL(resumeFile);
      window.open(fileURL, "_blank");
    }
  };
  const formatDate = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <img src={resumeIcon} alt="resume" />
          Resume
        </h3>
        <span className="text-xs text-slate-400 italic">
          {uploadDate
            ? `Last updated: ${formatDate(uploadDate)}`
            : "No file uploaded"}
        </span>
      </div>

      <div className="flex-1 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center text-center group hover:border-primary/40 transition-colors bg-slate-50/50 dark:bg-slate-800/20">
        <div
          className="mb-4 p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm cursor-pointer"
          onClick={handleOpenFile} // Open PDF on click
        >
          <img src={pdfIcon} alt="pdf" />
        </div>

        <p className="text-slate-900 dark:text-slate-200 font-medium mb-1 truncate max-w-full">
          {resumeFile ? resumeFile.name : "Alex_Johnson_CV.pdf"}
        </p>
        <p className="text-slate-500 text-sm mb-6">
          {resumeFile
            ? `${(resumeFile.size / 1024 / 1024).toFixed(2)} MB`
            : "PDF Format • 2.4 MB"}
        </p>

        {resumeFile && (
          <button
            className="mb-4 text-red-500 text-sm underline"
            onClick={handleRemoveFile}
          >
            Remove File
          </button>
        )}

        <input
          className="hidden"
          id="resume-upload"
          type="file"
          accept=".pdf"
          onChange={handleFileUpload}
        />

        <label htmlFor="resume-upload" className="w-full">
          <div className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all cursor-pointer">
            <img src={uploadIcon} alt="upload-icon" />
            Upload New Resume
          </div>
        </label>
      </div>
    </section>
  );
}

export default ResumeSection;
