import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <FadeIn>
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">About</h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            I&apos;m a Senior Full Stack .NET Developer with 10 years of experience designing,
            developing, and modernizing enterprise applications. I build scalable backend systems
            with ASP.NET Core Web API and deliver responsive frontends with Angular, React, and
            Blazor. My work spans cloud-native implementations on Azure and AWS with strong focus
            on secure architecture, reliability, and maintainable code.
          </p>

          <div
            className="mt-10 border-l-4 px-6 py-4 rounded-r-xl"
            style={{
              borderColor: "var(--color-accent)",
              backgroundColor: "var(--color-accent-light)",
            }}
          >
            <p className="font-semibold text-sm text-amber-900 mb-1">
              Education
            </p>
            <p className="text-sm text-amber-800 leading-relaxed">
              Master&apos;s in Management Information Systems, Auburn University at Montgomery, 2023.
            </p>
          </div>

        </div>
      </FadeIn>
    </section>
  );
}
