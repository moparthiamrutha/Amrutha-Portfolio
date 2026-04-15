import { FiBriefcase, FiDownload, FiUser } from "react-icons/fi";
import Image from "next/image";
export default function Hero() {
  return (
    <section id="top" className="pt-24 py-16 md:py-24 text-center bg-white">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[auto_1fr] gap-12 items-center">

        {/* Profile image */}
        <div className="rounded-2xl transition duration-500 flex justify-center md:justify-end hover:scale-102" >
          <Image
            src="/images/profile/profile.jpeg"
            alt="Sai Krishna"
            width={400}
            height={600}
            className="rounded-2xl shadow-md object-cover w-48 sm:w-56 md:w-80 lg:w-96 mx-auto"
            priority
          />
        </div>

        {/* Right Text */}
        <div className="text-left md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight transition-all duration-500 hover:scale-102">
            Sai Krishna
          </h1>

          <p className="text-xs text-gray-400 mt-2 mb-3 tracking-wide">
            krishna5913575@gmail.com · +1 (678) 824-5884
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-1">
            Senior Full Stack .NET Developer
          </h2>

          <p className="text-sm text-gray-500 mb-5 tracking-wide">
            10+ years · Healthcare · Financial Services · Government · Telecom
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed max-w-lg">
            Results-driven full stack engineer with deep expertise in C#, .NET Core, ASP.NET Core
            Web API, Angular, React, Blazor, SQL Server, Azure, and AWS. I specialize in
            microservices and event-driven enterprise systems built for high-volume workloads.
          </p>

          <div className="flex flex-wrap justify-start gap-3">
            <a
              href="#experience"
              className="text-white px-6 py-3 rounded-lg inline-flex items-center gap-2
               transition duration-300 ease-out
               hover:-translate-y-1 hover:shadow-lg hover:bg-[#B45309]"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              <FiBriefcase />
              View Experience
            </a>

            <a
              href="#about"
              className="group border px-6 py-3 rounded-lg inline-flex items-center gap-2
             transition duration-300 ease-out
             hover:-translate-y-1 hover:shadow-md hover:bg-amber-50"
              style={{ borderColor: "var(--color-accent)", color: "var(--color-accent)" }}
            >
              <FiUser size={15} />
              About Me
            </a>

            <a
              href="https://www.linkedin.com/in/krishnaaaaaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-gray-300 text-gray-600 px-6 py-3 rounded-lg inline-flex items-center gap-2
             transition duration-300 ease-out
             hover:-translate-y-1 hover:shadow-md hover:bg-gray-50"
            >
              <FiDownload className="transition-transform duration-300 group-hover:-translate-y-0.5" />
              Resume Reference (LinkedIn)
            </a>
          </div>
        </div>
      </div>
      <div className="mt-20 border-t border-gray-200 max-w-5xl mx-auto" />
    </section>
  );
}
