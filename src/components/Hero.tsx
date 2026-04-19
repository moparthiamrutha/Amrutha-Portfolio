import { FiBriefcase, FiDownload, FiUser } from "react-icons/fi";
import Image from "next/image";
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden py-16 lg:py-20 bg-slate-950">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-slate-900 via-slate-950 to-transparent opacity-80 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-8 text-left">
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 shadow-sm">
              Senior AI & ML Engineer
            </p>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Amrutha Moparthi
              </h1>
              <p className="max-w-3xl text-base sm:text-lg leading-8 text-slate-300">
                I build production-ready generative AI systems, Retrieval-Augmented Generation workflows, and scalable cloud AI pipelines across AWS, Azure, and GCP.
                My work is rooted in secure enterprise-grade MLOps, vector search, and intelligent agent orchestration.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/95 p-6 shadow-xl shadow-slate-900/20 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Contact</p>
                <p className="mt-3 text-sm text-slate-100">moparthiamrutha97@gmail.com</p>
                <p className="text-sm text-slate-100">+1 (913) 624-3992</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-900/95 p-6 shadow-xl shadow-slate-900/20 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Focus Areas</p>
                <p className="mt-3 text-sm text-slate-100 leading-7">
                  Generative AI, RAG, semantic search, cloud-native MLOps, secure AI deployment.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-amber-400"
              >
                <FiBriefcase />
                View Experience
              </a>
              <a
                href="https://www.linkedin.com/in/amrutha-moparthi-921967222/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/90 px-6 py-3 text-sm text-slate-200 transition hover:border-amber-400 hover:text-white"
              >
                <FiUser size={16} />
                LinkedIn Profile
              </a>
              <a
                href="mailto:moparthiamrutha97@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-amber-400 bg-transparent px-6 py-3 text-sm text-amber-300 transition hover:bg-amber-500/10"
              >
                <FiDownload size={16} />
                Email Me
              </a>
            </div>
          </div>

          <div className="mx-auto flex justify-center lg:justify-end">
            <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/90 shadow-[0_30px_80px_rgba(15,23,42,0.65)] transition duration-700 hover:-translate-y-2">
              <div className="w-full max-w-[400px] h-[500px] overflow-hidden rounded-[1.75rem] bg-slate-950">
                <Image
                  src="/images/profile/profile.jpeg"
                  alt="Amrutha Moparthi"
                  width={400}
                  height={500}
                  className="h-full w-full object-cover object-top scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
