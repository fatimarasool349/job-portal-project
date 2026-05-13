export default function CompanyOverviewCard({ company }) {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
      <h2 className="text-sm text-gray-500 mb-3 uppercase tracking-wide">
        Company Overview
      </h2>

      <p className="text-gray-600 text-sm mb-5 leading-relaxed">
        {company?.about1 || company?.description}
      </p>

      <div className="text-sm space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-500">Size</span>
          <span className="font-medium">{company?.size}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Industry</span>
          <span className="font-medium">{company?.industry}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Location</span>
          <span className="font-medium">{company?.location}</span>
        </div>
      </div>
    </section>
  );
}