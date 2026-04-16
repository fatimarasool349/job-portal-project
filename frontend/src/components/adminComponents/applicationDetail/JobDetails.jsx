function JobDetails  ({ job }) {
  return (
    <section className="bg-white rounded-xl p-6 border">
      
      <h3 className="text-xs font-bold uppercase mb-4">
        Job Details
      </h3>

      <div>
        <p className="font-bold text-lg">{job?.title || "Lead Product Designer"}</p>
        <p className="text-sm text-gray-500">
          {job?.company || "Company"} • Full-time
        </p>
      </div>

      <div className="mt-4 p-3 bg-gray-100 rounded-lg flex justify-between">
        <span className="text-xs">Applied Date</span>
        <span className="font-bold">Jan 12, 2024</span>
      </div>

    </section>
  );
};

export default JobDetails;