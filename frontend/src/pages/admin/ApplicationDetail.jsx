import Header from "../../components/adminComponents/applicationDetail/Header";
import CandidateCard from "../../components/adminComponents/applicationDetail/CandidateCard";
import JobDetails from "../../components/adminComponents/applicationDetail/JobDetails";
import Documents from "../../components/adminComponents/applicationDetail/Documents";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AISidePanel from "../../components/adminComponents/applicationDetail/AISidePanel.jsx";

function ApplicationDetail() {
  const { publicId } = useParams();
  const application = useSelector((state) => {
    return state.applications.applications.find((a) => a.publicId === publicId);
  });

  if (!application) {
    return (
      <main className="p-8 text-center">
        <p className="text-gray-500">Loading application...</p>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto w-full px-8 py-8 flex-1">
      <Header
        application={application}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT SIDE */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <CandidateCard data={application} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <JobDetails application={application} />
            <Documents resume={application?.resume} />
          </div>

        </div>

        <AISidePanel application={application} />
      </div>
    </main>
  );
}

export default ApplicationDetail;
