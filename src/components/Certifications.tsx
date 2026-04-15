import FadeIn from "./FadeIn";
import { FiAward } from "react-icons/fi";

export default function Certifications() {
    return (
        <section id="certifications" className="py-24 bg-gray-50">
            <FadeIn>
                <div className="max-w-5xl mx-auto px-6">

                    {/* Section Title */}
                    <h2 className="text-3xl font-bold flex items-center gap-3 mb-12">
                        <FiAward style={{ color: "var(--color-accent)" }} />
                        Certifications
                    </h2>

                    <div
                        className="flex items-start gap-5 border rounded-2xl p-6"
                        style={{
                            borderColor: "var(--color-accent)",
                            backgroundColor: "var(--color-accent-light)",
                        }}
                    >
                        <div className="bg-white p-4 rounded-xl shadow-sm shrink-0 text-amber-700">
                            <FiAward size={22} />
                        </div>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#92400E" }}>
                                Technical Certification
                            </p>
                            <p className="font-medium text-amber-900">Professional Certification</p>
                            <p className="text-sm text-amber-800 mt-0.5">As listed on LinkedIn</p>
                            <p className="text-sm text-amber-800 mt-2 leading-relaxed">
                                Single certification section retained as requested. The credential is
                                referenced directly from the LinkedIn profile.
                            </p>
                            <a
                                href="https://www.linkedin.com/in/krishnaaaaaa/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm underline mt-2 inline-block transition text-[#92400E] hover:text-[#78350F]"
                            >
                                View on LinkedIn →
                            </a>
                        </div>
                    </div>

                </div>
            </FadeIn>
        </section>
    );
}
