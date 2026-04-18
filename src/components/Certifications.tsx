import FadeIn from "./FadeIn";
import { FiAward } from "react-icons/fi";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-slate-950">
      <FadeIn>
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-300 mb-3">Verified Credentials</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Certifications & Learning</h2>
          </div>

          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-2xl shadow-slate-950/20">
            <div className="flex items-center gap-4 mb-6 text-white">
              <div className="rounded-3xl bg-amber-400/10 p-4 text-amber-300">
                <FiAward size={26} />
              </div>
              <div>
                <p className="text-lg font-semibold">Enterprise AI and Cloud Engineering</p>
                <p className="text-sm text-slate-400">Focused on AWS Bedrock, Azure ML, GCP Vertex AI, MLOps, and secure data governance.</p>
              </div>
            </div>

            <p className="text-slate-300 leading-7 text-sm">
              Formal credentials are linked to the public LinkedIn profile. This portfolio highlights domain expertise in generative AI, semantic retrieval, vector search, cloud infrastructure, and enterprise-level MLOps practices.
            </p>

            <a
              href="https://www.linkedin.com/in/amrutha-moparthi-921967222/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-amber-400 px-5 py-3 text-sm font-semibold text-amber-200 transition hover:bg-amber-400/10"
            >
              View certifications on LinkedIn
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
