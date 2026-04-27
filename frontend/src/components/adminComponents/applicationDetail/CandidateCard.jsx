import { FaEnvelope, FaPhone } from "react-icons/fa";
function CandidateCard({ data }) {
    if (!data) return null;
  return (
    <section className="bg-white rounded-xl p-8 border">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-white text-sm shadow">
          {data?.fullName.charAt(0).toUpperCase()}
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <h2 className="text-2xl font-bold">{data.fullName}</h2>
            <p className="text-blue-700 font-semibold">{data.role}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-800">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-gray-500" />
              {data.email}
            </p>

            <p className="flex items-center gap-2">
              <FaPhone className="text-gray-500" />
              {data.phone}
            </p>
          </div>

          <p className="text-sm italic border-t border-gray-200 pt-4">
            "{data.bio}"
          </p>
        </div>
      </div>
    </section>
  );
}

export default CandidateCard;
