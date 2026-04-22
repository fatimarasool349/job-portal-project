import CompanyRow from "./CompanyRow";

function CompanyTable({ companies, onDelete, onEdit }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-blue-600 border-b border-slate-200">
              <th className="px-6 py-4 text-xs font-semibold text-white">
                Company Name
              </th>

              <th className="px-6 py-4 text-xs font-semibold text-white">
                Description
              </th>

              <th className="px-6 py-4 text-xs font-semibold text-white">
                Location
              </th>

              <th className="px-6 py-4 text-xs font-semibold text-white">
                Website
              </th>

              <th className="px-6 py-4 text-xs font-semibold text-white text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {companies?.map((company) => (
              <CompanyRow
                key={company._id}
                company={company}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompanyTable;