import { useParams } from "react-router-dom";
import BreadCrumbs from "../components/ViewDetail/BreadCrumbs";
import ViewDetail from "../components/ViewDetail/ViewDetail";
import JobHeaderCard from "../components/ViewDetail/JobHeaderCard";
import { jobData, companyData } from "../constant/data";


function ViewDetailPage() {
  const { id } = useParams(); // get job id from URL
    const job = jobData.find((job) => job.id === parseInt(id));
     const company = companyData.find((c) => c.id === job.companyId);
  const selectedJob = { ...job, company };


  if (!selectedJob) return <div>Job not found</div>;

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <main className="px-6 lg:px-40 py-8">
          {/* Job Header */}
          <JobHeaderCard job={selectedJob} />

          {/* Breadcrumbs */}
          <BreadCrumbs  jobTitle={selectedJob.title}/>

          {/* Job Details */}
          <ViewDetail job={selectedJob} />
        </main>
      </div>
    </div>
  );
}

export default ViewDetailPage;