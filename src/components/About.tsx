import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <FadeIn>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-300 mb-4">
                Professional Summary
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Enterprise AI, RAG, and MLOps expertise
              </h2>
              <p className="text-slate-300 leading-8 text-base sm:text-lg">
                AI/ML Engineer with deep experience designing and deploying production-grade generative AI systems across AWS, Azure, and GCP. I build secure retrieval-augmented generation pipelines, semantic search solutions, and cloud-native inference services with strong MLOps automation and enterprise governance.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/30">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-300 mb-4">Core strengths</p>
              <ul className="space-y-3 text-slate-200 text-sm leading-7">
                <li>• Generative AI system design, RAG, and semantic retrieval</li>
                <li>• Cloud AI platforms: AWS Bedrock, SageMaker, Azure ML, Vertex AI</li>
                <li>• Production MLOps, CI/CD, monitoring, model governance</li>
                <li>• Secure AI workflows with PII protection and compliance controls</li>
                <li>• Hybrid retrieval, embeddings, and vector search optimization</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/95 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-300 mb-3">Education</p>
              <p className="text-slate-100 font-semibold">B.Tech in Electronics & Communication Engineering</p>
              <p className="text-slate-400 text-sm mt-2">SRM University, India — 2017</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/95 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-300 mb-3">Current focus</p>
              <p className="text-slate-100 font-semibold">Gen AI, semantic search, agentic automation, and enterprise-grade AI deployment.</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
