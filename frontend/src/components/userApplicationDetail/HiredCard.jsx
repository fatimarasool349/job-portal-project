import { FaCheckCircle } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";

export default function HiredCard({ data }) {
  return (
    <section className="bg-green-600 text-white p-8 rounded-2xl shadow-lg">

      <div className="flex items-center gap-3 mb-4">
        <FaCheckCircle className="text-3xl" />

        <h2 className="text-2xl font-bold">
          You're Hired!
        </h2>
      </div>

      <p className="mb-6 leading-relaxed text-green-50">
        Congratulations! We are excited to welcome
        you to the team at {data.company?.name}.
        Our HR department will contact you shortly
        regarding onboarding and joining formalities.
      </p>

      <div className="space-y-4">

        <div className="flex gap-4 p-4 bg-white/10 rounded-xl">
          <BsBriefcaseFill className="mt-1" />

          <div>
            <p className="font-semibold">
              Offer Confirmed
            </p>

            <p className="text-sm text-green-100">
              Your hiring process is complete
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-4 bg-white/10 rounded-xl">
          <FaCheckCircle className="mt-1" />

          <div>
            <p className="font-semibold">
              Onboarding Process
            </p>

            <p className="text-sm text-green-100">
              HR team will contact you soon
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}