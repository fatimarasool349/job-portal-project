export default function JobDescriptionCard({ job }) {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">
        Job Description
      </h2>

      <p className="text-gray-600 mb-6">
        {job?.description}
      </p>

      <h3 className="font-semibold mb-2">Responsibilities</h3>

      <ul className="list-disc pl-5 text-gray-600 space-y-2">
        {job?.responsibilities?.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3 className="font-semibold mt-6 mb-2">Requirements</h3>

      <ul className="list-disc pl-5 text-gray-600 space-y-2">
        {job?.requirements?.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}