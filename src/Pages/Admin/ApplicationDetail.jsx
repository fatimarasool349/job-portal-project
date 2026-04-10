import Header from "../../components/adminComponents/applicationdetail/Header";
import CandidateCard from "../../components/adminComponents/applicationdetail/CandidateCard";
import JobDetails from "../../components/adminComponents/applicationdetail/JobDetails";
import Documents from "../../components/adminComponents/applicationdetail/Documents";
import Notes from "../../components/adminComponents/applicationdetail/Notes";
import Timeline from "../../components/adminComponents/applicationdetail/Timeline";
import RatingCard from "../../components/adminComponents/applicationdetail/RatingCard";
import { resume } from "react-dom/server";
import { ApplicationData } from "../../constant/admindata";
import { use } from "react";
import { useNavigate } from "react-router-dom";
function ApplicationDetail() {
  const handleShortlist = async (id) => {
    try {
      // await axios.post("/api/update-status", { id, status: "shortlisted" });
      alert("Candidate shortlisted!");
    } catch (error) {
      console.error(error);
      alert("Error shortlisting candidate");
    }
  };
  const handleReject = async (id) => {
    try {
      // await axios.post("/api/update-status", { id, status: "rejected" });
      alert("Application rejected!");
    } catch (error) {
      console.error(error);
      alert("Error rejecting application");
    }
  };
  const navigate = useNavigate();
  return (
    <main className="max-w-7xl mx-auto w-full px-8 py-8 flex-1">
      <Header
        status={ApplicationData.status}
        onApprove={() => handleShortlist(ApplicationData.id)}
        onReject={() => handleReject(ApplicationData.id)}
        onMessage={() => navigate(`/dashboard/messages/${ApplicationData.id}`)}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <CandidateCard data={ApplicationData} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <JobDetails job={ApplicationData.job} />
            <Documents resume={ApplicationData.resume} />
          </div>

          <Notes candidateId={ApplicationData.id} />
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-4">
          <Timeline items={ApplicationData.timeline} />
          {/* <div className="mt-6">
            <RatingCard />
          </div> */}
        </div>
      </div>
    </main>
  );
}

export default ApplicationDetail;
