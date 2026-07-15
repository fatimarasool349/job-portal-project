import { GrView } from "react-icons/gr";
import { MdOutlineFileDownload } from "react-icons/md";

function Documents({ resume }) {
  const resumeUrl = resume ? `${import.meta.env.VITE_RESUME_URL}${resume}` : "/resume.pdf";
  const fileName = resume
  ? resume.split(/[/\\]/).pop()
  : "Resume.pdf";


  const handleView = () => {
    window.open(resumeUrl, "_blank");
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(resumeUrl);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = resume ? resume.split("/").pop() : "Resume.pdf";

      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <h3 className="text-xs font-bold uppercase mb-4">Documents</h3>

      <div className="flex flex-col gap-3 bg-white rounded-lg p-4">
        {/* Resume Name */}
        <button
          className="flex justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-100"
          onClick={handleView}
        >
          <span>{fileName}</span>{" "}
          <GrView />
        </button>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            className="flex-1 bg-gray-200 py-2 rounded-lg hover:bg-gray-300"
            onClick={handleView}
          >
            View Resume
          </button>
          <button
            className="px-3 bg-gray-200 rounded-lg hover:bg-gray-300"
            onClick={handleDownload}
          >
            <MdOutlineFileDownload />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Documents;
