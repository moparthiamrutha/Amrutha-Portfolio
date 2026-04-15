import FadeIn from "./FadeIn";
import { FiArrowUpRight } from "react-icons/fi";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-5 md:px-6">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-2">What I Deliver</h2>
          <p className="text-gray-500 text-sm mb-10">
            End-to-end delivery for enterprise systems in healthcare, financial services,
            government, and telecom.
          </p>

          <a
            href="https://www.linkedin.com/in/krishnaaaaaa/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block border border-gray-200 rounded-2xl p-8 hover:shadow-md hover:border-gray-300 transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">
                  Open for Opportunities
                </p>
                <h3 className="text-xl font-semibold mb-3 group-hover:underline underline-offset-4 decoration-[#D97706]">
                  Full Stack .NET Engineering
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
                  I design and modernize enterprise applications with ASP.NET Core APIs,
                  Angular and React frontends, secure service communication, and cloud-native
                  deployment pipelines across Azure and AWS.
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {[".NET 8", "Angular/React/Blazor", "Azure & AWS", "Event-Driven Systems"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 transition hover:bg-[#FEF3C7]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <FiArrowUpRight className="text-gray-400 group-hover:text-[#D97706] transition shrink-0 mt-1" size={20} />
            </div>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
