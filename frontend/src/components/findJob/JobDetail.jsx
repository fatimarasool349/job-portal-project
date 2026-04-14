import { useParams } from "react-router-dom";

function JobDetail() {
  const { jobTitle } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Job Details: {jobTitle}</h1>
      {/* Fetch or display job details based on jobTitle */}
    </div>
  );
}

export default JobDetail;