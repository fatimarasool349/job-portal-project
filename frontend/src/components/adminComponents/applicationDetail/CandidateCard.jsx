import { FaEnvelope, FaPhone } from "react-icons/fa";
function CandidateCard({ data }) {
  if (!data) return null;
  const fullName = `${data.firstName} ${data.lastName}`;
  const initials = fullName
    .split(" ")
    .map((n) => n?.charAt(0) || "")
    .join("")
    .toUpperCase();
  return (
    <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl">
          {initials}
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{fullName}</h2>

            <p className="text-blue-600 font-medium">
              {data.role}
            </p>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
            <FaEnvelope className="text-blue-500" />
            <span>{data.email}</span>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
            <FaPhone className="text-green-500" />
            <span>{data.phone}</span>
          </div>

          <p className="text-sm italic border-t border-gray-200 pt-4">
            "{data.coverLetter}"
          </p>
        </div>
      </div>
    </section>
  );
}

export default CandidateCard;
