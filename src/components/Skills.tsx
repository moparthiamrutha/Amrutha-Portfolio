import { FiCode } from "react-icons/fi";
import FadeIn from "./FadeIn";

export default function Skills() {
    const skillGroups = [
        {
            title: "Backend",
            skills: ["C#", ".NET Core / 6 / 7 / 8", "ASP.NET Core Web API", "Entity Framework Core", "Dapper"],
        },
        {
            title: "Frontend",
            skills: ["Angular (13-18)", "React", "Blazor", "TypeScript", "JavaScript", "HTML5", "CSS3"],
        },
        {
            title: "Data",
            skills: ["SQL Server", "Azure SQL", "AWS RDS", "MongoDB", "Cosmos DB", "T-SQL"],
        },
        {
            title: "Cloud",
            skills: ["Microsoft Azure", "AWS", "Azure DevOps", "Docker", "Kubernetes"],
        },
        {
            title: "Architecture",
            skills: ["Microservices", "Event-Driven Architecture", "Distributed Systems", "OAuth2", "JWT", "RBAC"],
        },
    ];

    return (
        <section id="skills" className="py-24 bg-white">
            <FadeIn>
                <div className="max-w-5xl mx-auto px-6">

                    <h2 className="text-3xl font-bold flex items-center gap-3 mb-12">
                        <FiCode style={{ color: "var(--color-accent)" }} />
                        Skills
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {skillGroups.map((group) => (
                            <div key={group.title}>
                                <h3 className="text-xl font-semibold mb-4">
                                    {group.title}
                                </h3>

                                <div className="flex flex-wrap gap-3">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 bg-gray-100 rounded-full text-sm transition duration-300 hover:bg-[#FEF3C7] hover:text-amber-900"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
