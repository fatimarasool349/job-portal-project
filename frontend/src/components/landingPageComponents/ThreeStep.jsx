import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { steps } from "../../constants/index.js";

function ThreeStep() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Finding your next big opportunity shouldn't be hard. Follow our
            simple three-step process.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-blue-600/50 transition-colors"
              data-aos="fade-up"
              data-aos-delay={step.id * 200}
            >
              <div className="w-14 h-14 bg-blue-600/10 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-10 h-10"
                />{" "}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ThreeStep;
