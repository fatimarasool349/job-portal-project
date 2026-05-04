function JobDetails({ application }) {

  if (!application) return null;

  return (
    <section className="bg-white rounded-xl p-6 border">
      <h3 className="text-xs font-bold uppercase mb-4">Job Details</h3>

      <div>
        <p className="font-bold text-lg">
          {application.job?.title || "Lead Product Designer"}
        </p>
        <p className="text-sm text-gray-500">
          {application.job?.company?.name || "Company"} {application.job?.jobType}
        </p>
      </div>

      <div className="mt-4 p-3 bg-gray-100 rounded-lg flex justify-between">
        <span className="text-xs font-bold">Applied Date</span>
        <span className="font-bold">
          {new Date(application?.appliedDate).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>
    </section>
  );
}

export default JobDetails;
