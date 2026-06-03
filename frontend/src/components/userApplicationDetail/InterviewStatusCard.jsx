import { BsCalendarEvent } from "react-icons/bs";

export default function InterviewStatusCard() {
  return (
    <section className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
      
      <h2 className="text-lg font-semibold mb-5 flex items-center gap-2">
        <BsCalendarEvent />
        Interview Details
      </h2>

      <div className="space-y-4">
        
        <div>
          <p className="font-medium">
            Interview Scheduled
          </p>

          <p className="text-sm opacity-80">
            HR team will contact you shortly with
            interview timing.
          </p>
        </div>

        <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
          Prepare for Interview
        </button>

      </div>
    </section>
  );
}