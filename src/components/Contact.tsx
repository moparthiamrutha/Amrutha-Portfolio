import { FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <FadeIn>
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-300 mb-3">Let&apos;s connect</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact</h2>
          </div>

          <p className="text-slate-300 mb-10 leading-8 max-w-3xl mx-auto text-base">
            I am available for AI/ML engineering roles and consulting engagements. Reach out for generative AI, semantic search, cloud MLOps, or enterprise AI transformation projects.
          </p>

          <div className="grid gap-6 md:grid-cols-3 text-slate-100">
            <a
              href="mailto:moparthiamrutha97@gmail.com"
              className="rounded-[1.75rem] border border-slate-800 bg-slate-900/90 px-6 py-6 transition hover:border-amber-400"
            >
              <div className="flex items-center gap-3 text-amber-300 mb-3">
                <FiMail size={20} />
                Email
              </div>
              <p className="text-sm text-slate-200">moparthiamrutha97@gmail.com</p>
            </a>

            <a
              href="tel:+19136243992"
              className="rounded-[1.75rem] border border-slate-800 bg-slate-900/90 px-6 py-6 transition hover:border-amber-400"
            >
              <div className="flex items-center gap-3 text-amber-300 mb-3">
                <FiPhone size={20} />
                Phone
              </div>
              <p className="text-sm text-slate-200">+1 (913) 624-3992</p>
            </a>

            <a
              href="https://www.linkedin.com/in/amrutha-moparthi-921967222/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[1.75rem] border border-slate-800 bg-slate-900/90 px-6 py-6 transition hover:border-amber-400"
            >
              <div className="flex items-center gap-3 text-amber-300 mb-3">
                <FiLinkedin size={20} />
                LinkedIn
              </div>
              <p className="text-sm text-slate-200">linkedin.com/in/amrutha-moparthi-921967222</p>
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
