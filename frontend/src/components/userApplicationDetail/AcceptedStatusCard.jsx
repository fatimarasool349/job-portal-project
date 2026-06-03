import { FaCheckCircle } from "react-icons/fa";
import { BsCalendarEvent } from "react-icons/bs";

export default function AcceptedStatusCard() {
  return (
    <section className="bg-green-600 text-white p-8 rounded-2xl shadow-lg">

      <div className="flex items-center gap-3 mb-4">
        <FaCheckCircle className="text-3xl" />

        <h2 className="text-2xl font-bold">
          Next Steps
        </h2>
      </div>

      <p className="mb-6 leading-relaxed text-green-50">
        Congratulations! We're excited to have you
        join the team. Our HR team will reach out
        with onboarding details shortly.
      </p>

      <div className="space-y-4">

        {/* Background Check */}
        <div className="flex gap-4 p-4 bg-white/10 rounded-xl">
          <FaCheckCircle className="mt-1" />

          <div>
            <p className="font-semibold">
              Background Check
            </p>

            <p className="text-sm text-green-100">
              In progress
            </p>
          </div>
        </div>

        {/* Paperwork */}
        <div className="flex gap-4 p-4 bg-white/10 rounded-xl opacity-80">
          <BsCalendarEvent className="mt-1" />

          <div>
            <p className="font-semibold">
              Onboarding Paperwork
            </p>

            <p className="text-sm text-green-100">
              Unlocks after verification
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}