import { FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <FadeIn>
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">Contact</h2>

          <p className="text-gray-600 mb-10 leading-relaxed max-w-xl">
            Open to backend, full-stack, and cloud engineering opportunities.
            Let&apos;s connect.
          </p>

          <p className="text-xs text-gray-400 uppercase tracking-widest mb-4 font-semibold">
            Get in touch
          </p>

          <div className="flex flex-col gap-4 text-gray-700">
            <a
              href="mailto:krishna5913575@gmail.com"
              className="flex items-center gap-3 transition hover:text-[#D97706]"
            >
              <FiMail style={{ color: "var(--color-accent)" }} />
              krishna5913575@gmail.com
            </a>

            <a
              href="tel:+16788245884"
              className="flex items-center gap-3 transition hover:text-[#D97706]"
            >
              <FiPhone style={{ color: "var(--color-accent)" }} />
              +1 (678) 824-5884
            </a>

            <a
              href="https://www.linkedin.com/in/krishnaaaaaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:text-[#D97706]"
            >
              <FiLinkedin style={{ color: "var(--color-accent)" }} />
              LinkedIn Profile ↗
            </a>

          </div>
        </div>
      </FadeIn>
    </section>
  );
}
