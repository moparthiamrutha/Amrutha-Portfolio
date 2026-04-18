
export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-slate-800 mb-8" />

        <div className="flex flex-col gap-4 items-center justify-between text-sm sm:flex-row">
          <p className="text-slate-300 font-medium border-b border-amber-400/10 pb-2 text-center sm:border-0 sm:pb-0">
            Amrutha Moparthi
          </p>
          <a href="#top" className="text-amber-300 transition hover:text-white">
            Back to top ↑
          </a>
        </div>

        <p className="text-sm text-slate-400 text-center mt-6 max-w-xl mx-auto leading-relaxed">
          Senior AI & ML Engineer specializing in generative AI, retrieval augmentation, cloud MLOps, and secure enterprise deployments.
        </p>

        <p className="text-xs text-slate-500 text-center mt-8">
          ©2026 Amrutha Moparthi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
