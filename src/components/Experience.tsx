import FadeIn from "./FadeIn";

export default function Experience() {
  const roles = [
    {
      company: "Bank of America",
      location: "Charlotte, NC",
      title: "Gen AI Engineer",
      period: "Jan 2024 - Present",
      highlights: [
        "Designed production-grade RAG pipelines and semantic search systems for financial knowledge retrieval.",
        "Built intelligent multi-agent workflows with Lang Graph for fraud analysis, KYC validation, and customer assistance.",
        "Implemented hybrid retrieval with Amazon OpenSearch and PostgreSQL pgvector, improving grounding accuracy and reducing hallucinations.",
        "Automated infrastructure with Terraform, GitHub Actions, and AWS CodePipeline for reproducible deployments.",
      ],
    },
    {
      company: "Cigna",
      location: "Bloomfield, CT",
      title: "AI/ML Engineer",
      period: "Sept 2021 - Dec 2023",
      highlights: [
        "Engineered healthcare data pipelines using AWS Glue, Kafka, PySpark, and secure connectors for claims and member analytics.",
        "Built semantic embeddings and FAISS retrieval for document search across medical policies and provider knowledge bases.",
        "Developed transformer-based NLP automation for claims summarization, classification, and medical note interpretation.",
        "Implemented MLOps practices using MLflow for experiment tracking, model versioning, and deployment consistency.",
      ],
    },
    {
      company: "Target",
      location: "Minneapolis, MN",
      title: "AI/ML Engineer",
      period: "July 2020 - Aug 2021",
      highlights: [
        "Designed Azure Data Factory ETL pipelines and staged analytics datasets in Azure Data Lake Storage Gen2.",
        "Built scalable model training workflows in Azure ML and deployed inference services to AKS with autoscaling.",
        "Engineered retail feature pipelines using PySpark, TF-IDF, Word2Vec, and PCA for demand forecasting and customer analytics.",
        "Monitored deployed models with Azure Monitor and Application Insights to track latency, drift, and quality.",
      ],
    },
    {
      company: "New York Life Insurance",
      location: "New York, NY",
      title: "Machine Learning / Data Engineer",
      period: "Oct 2018 - June 2020",
      highlights: [
        "Built ETL workflows and Azure Data Factory pipelines for insurance policy, claims, and analytics systems.",
        "Developed predictive models with Scikit-Learn, Logistic Regression, Random Forest, and Gradient Boosting.",
        "Containerized model endpoints and deployed inference services to Azure Kubernetes Service.",
        "Implemented batch scoring and version control for reliable model production delivery.",
      ],
    },
    {
      company: "HDFC Bank",
      location: "Hyderabad, India",
      title: "Data Scientist",
      period: "June 2016 - July 2018",
      highlights: [
        "Built analytics-ready banking datasets with BigQuery, Google Cloud Storage, and Hadoop ecosystem tools.",
        "Used statistical modeling and feature engineering to support pricing, risk, and operational analytics.",
        "Developed and evaluated models with Scikit-Learn, Decision Trees, and clustering techniques.",
        "Collaborated with senior data science teams to validate outputs and improve production workflows.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-slate-950">
      <FadeIn>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-300 mb-3">Career Highlights</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Professional Experience</h2>
          </div>

          <div className="space-y-8">
            {roles.map((role) => (
              <article
                key={`${role.company}-${role.period}`}
                className="group overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/30 transition duration-500 hover:-translate-y-1 hover:border-amber-400"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{role.company}</h3>
                    <p className="text-sm text-slate-400 mt-1">{role.title} · {role.location}</p>
                  </div>
                  <span className="rounded-full bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
                    {role.period}
                  </span>
                </div>

                <ul className="grid gap-3 text-slate-300 text-sm sm:grid-cols-2">
                  {role.highlights.map((highlight) => (
                    <li key={highlight} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4">
                      {highlight}
                    </li>
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
