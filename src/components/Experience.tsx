import FadeIn from "./FadeIn";

export default function Experience() {
    const roles = [
        {
            company: "Elevance Health",
            location: "Indianapolis, IN",
            title: "Senior Full Stack .NET Developer",
            period: "Dec 2024 - Present",
            highlights: [
                "Led modernization of healthcare systems into scalable Azure-based microservices architecture.",
                "Developed modular ASP.NET Core Web APIs with .NET 8 and C# 12 for claims workflows.",
                "Implemented Kafka-based event-driven communication for asynchronous processing.",
                "Improved API response times and reduced production incidents through performance tuning and observability.",
            ],
        },
        {
            company: "State of Massachusetts",
            location: "Boston, MA",
            title: "Full Stack .NET Developer",
            period: "Jul 2023 - Nov 2024",
            highlights: [
                "Modernized transportation permit systems using .NET 7 and ASP.NET Core Web API.",
                "Implemented Angular reactive forms and RxJS for dynamic permit workflows.",
                "Optimized SQL Server and EF Core performance to reduce execution time.",
                "Built secure APIs with OAuth 2.0, JWT, RBAC, and Azure AD integration.",
            ],
        },
        {
            company: "State Street Bank",
            location: "Princeton, NJ",
            title: ".NET Full Stack Developer",
            period: "Jul 2022 - Jun 2023",
            highlights: [
                "Refactored legacy trade processing systems into AWS-based .NET 6 microservices.",
                "Built high-performance REST APIs for trade ingestion and validation pipelines.",
                "Developed React and TypeScript dashboards for trade monitoring and risk insights.",
                "Containerized services with Docker and deployed on AWS ECS with CI/CD automation.",
            ],
        },
        {
            company: "Voya Financial",
            location: "Jacksonville, FL",
            title: "Sr .NET Developer",
            period: "Feb 2022 - Jun 2022",
            highlights: [
                "Contributed to modernization of retirement systems using .NET 6 microservices.",
                "Developed secure APIs for enrollment and account workflows.",
                "Built Angular and React UI modules for employee and HR portals.",
                "Configured AWS services and supported secure, scalable deployments.",
            ],
        },
        {
            company: "CGI",
            location: "Hyderabad, India",
            title: "Sr .NET Developer",
            period: "May 2017 - Nov 2021",
            highlights: [
                "Built backend modules using ASP.NET MVC and ASP.NET Core for phased modernization.",
                "Developed REST APIs and integration services for transaction and approval workflows.",
                "Migrated applications to Azure App Services and Azure SQL in hybrid cloud setups.",
                "Optimized SQL Server and SSIS workflows for efficient data integration.",
            ],
        },
        {
            company: "Tech Mahindra",
            location: "India",
            title: ".NET Developer",
            period: "Feb 2016 - Apr 2017",
            highlights: [
                "Developed ASP.NET MVC modules for telecom onboarding, order tracking, and billing.",
                "Designed REST APIs integrating customer management and billing systems.",
                "Wrote optimized SQL queries, procedures, and functions for reporting.",
                "Supported releases and production issue resolution on IIS environments.",
            ],
        },
    ];

    return (
        <section id="experience" className="py-24 bg-white">
            <FadeIn>
                <div className="max-w-5xl mx-auto px-6">

                    <h2 className="text-3xl font-bold mb-6">Experience</h2>

                    <div className="space-y-8">
                        {roles.map((role) => (
                            <article
                                key={`${role.company}-${role.period}`}
                                className="p-8 md:p-10 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm transition duration-300 hover:shadow-md border-l-4"
                                style={{ borderLeftColor: "var(--color-accent)" }}
                            >
                                <div className="flex flex-wrap items-center gap-3 mb-1">
                                    <h3 className="text-xl font-semibold">{role.company}</h3>
                                    <span
                                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                                        style={{ backgroundColor: "var(--color-accent-light)", color: "#92400E" }}
                                    >
                                        {role.period}
                                    </span>
                                </div>

                                <div className="text-sm text-gray-500 mb-4">
                                    {role.title} · {role.location}
                                </div>

                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    {role.highlights.map((highlight) => (
                                        <li key={highlight}>{highlight}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
