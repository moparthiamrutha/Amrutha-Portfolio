import FadeIn from "./FadeIn";
import { FiArrowUpRight } from "react-icons/fi";

const cards = [
  {
    title: "Generative AI Systems",
    description:
      "Build enterprise-ready generative AI products with secure model integration, prompt optimization, and cost-aware inference.",
  },
  {
    title: "RAG & Semantic Search",
    description:
      "Create grounded retrieval pipelines using embeddings, vector indexes, hybrid search, and document chunking for accurate answers.",
  },
  {
    title: "Cloud MLOps & Deployment",
    description:
      "Automate model delivery with Terraform, Kubernetes, CI/CD, monitoring, and cloud-native ML tooling across AWS, Azure, and GCP.",
  },
  {
    title: "Secure AI Operations",
    description:
      "Implement governance, access control, encryption, PII masking, and safety guardrails to keep AI systems compliant and reliable.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-300 mb-3">What I Build</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Enterprise AI Solutions</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {cards.map((card) => (
              <article key={card.title} className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/20 transition duration-300 hover:-translate-y-1 hover:border-amber-400">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                  <FiArrowUpRight className="text-amber-300" size={20} />
                </div>
                <p className="text-slate-300 leading-7">{card.description}</p>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
