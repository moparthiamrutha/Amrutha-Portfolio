import FadeIn from "./FadeIn";

export default function Skills() {
  const skillGroups = [
    {
      title: "Gen AI & NLP",
      skills: [
        "GPT, Claude, Llama, T5",
        "LangChain, LangGraph",
        "Hugging Face Transformers",
        "Prompt engineering & fine-tuning",
        "RAG, agentic RAG, graph RAG",
      ],
    },
    {
      title: "Cloud AI & MLOps",
      skills: [
        "AWS Bedrock, SageMaker",
        "Azure ML, Synapse",
        "GCP Vertex AI, BigQuery",
        "Docker, Kubernetes, Terraform",
        "CI/CD, MLflow, GitHub Actions",
      ],
    },
    {
      title: "Vector Search",
      skills: [
        "FAISS, Pinecone, Milvus",
        "OpenSearch, pgvector, Weaviate",
        "Semantic retrieval",
        "Embeddings & hybrid search",
        "Query optimization",
      ],
    },
    {
      title: "Data Engineering",
      skills: [
        "Spark, PySpark, Kafka",
        "Hadoop, Hive, EMR",
        "ETL/ELT pipelines",
        "Data lakes & warehousing",
        "SQL, PostgreSQL, Oracle",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950">
      <FadeIn>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-300 mb-3">Technical Skills</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Core Expertise</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/20"
              >
                <h3 className="text-xl font-semibold text-white mb-5">{group.title}</h3>
                <div className="space-y-3 text-slate-300 text-sm leading-7">
                  {group.skills.map((skill) => (
                    <div key={skill} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                      <span>{skill}</span>
                    </div>
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
