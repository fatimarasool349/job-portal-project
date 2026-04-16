import { GrView } from "react-icons/gr";
import { MdOutlineFileDownload } from "react-icons/md";

function Documents({ resume }) {
  const resumeUrl = resume || "/resume.pdf"; 

  const handleView = () => {
    window.open(resumeUrl, "_blank");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = resumeUrl.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-white rounded-xl p-6 border">
      <h3 className="text-xs font-bold uppercase mb-4">Documents</h3>

      <div className="flex flex-col gap-3 bg-white rounded-lg p-4">
        {/* Resume Name */}
        <button
          className="flex justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-100"
          onClick={handleView} 
        >
          <span>{resume || "Resume.pdf"}</span>
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