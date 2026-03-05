import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { statsData } from "../../constant/data.js";

function Stats() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="bg-white">
      <section className="py-16 bg-gray-50/50" data-purpose="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {statsData.map((stat) => (
              <div
                key={stat.id}
                data-aos="fade-up"
                data-aos-delay={(stat.id + 1) * 100}
              >
                <div className="text-4xl font-extrabold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-gray-500 tracking-widest uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Stats;
